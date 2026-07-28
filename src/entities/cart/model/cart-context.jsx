import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import {
  addItem,
  removeItem,
  selectItemsCount,
  selectItemsTotal,
  setQuantity,
} from "./cart";
import { applyPromoDiscount, resolvePromo } from "./promo";
import { loadCartState, saveCartState } from "../lib/storage";

const CartContext = createContext(null);

const initialState = loadCartState();

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, items: addItem(state.items, action.payload) };
    case "setQuantity":
      return {
        ...state,
        items: setQuantity(state.items, action.payload.key, action.payload.quantity),
      };
    case "remove":
      return { ...state, items: removeItem(state.items, action.payload) };
    case "setPromoCode":
      return { ...state, promoCode: action.payload };
    case "clearPromo":
      return { ...state, promoCode: "" };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    saveCartState(state);
  }, [state]);

  const value = useMemo(() => {
    const count = selectItemsCount(state.items);
    const subtotal = selectItemsTotal(state.items);
    const promo = resolvePromo(state.promoCode);
    const { discount, finalTotal } = applyPromoDiscount(subtotal, promo);

    return {
      items: state.items,
      promoCode: state.promoCode,
      promo,
      count,
      subtotal,
      discount,
      total: finalTotal,
      addToCart: (item) => dispatch({ type: "add", payload: item }),
      changeQuantity: (key, quantity) =>
        dispatch({ type: "setQuantity", payload: { key, quantity } }),
      removeFromCart: (key) => dispatch({ type: "remove", payload: key }),
      setPromoCode: (code) => dispatch({ type: "setPromoCode", payload: code }),
      clearPromo: () => dispatch({ type: "clearPromo" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

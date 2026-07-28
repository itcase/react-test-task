import { loadJson, saveJson } from "shared/lib";
import { CART_STORAGE_KEY } from "../model/cart";

export function loadCartState() {
  const data = loadJson(CART_STORAGE_KEY, { items: [], promoCode: "" });
  if (!data || !Array.isArray(data.items)) {
    return { items: [], promoCode: "" };
  }
  return {
    items: data.items,
    promoCode: typeof data.promoCode === "string" ? data.promoCode : "",
  };
}

export function saveCartState(state) {
  saveJson(CART_STORAGE_KEY, {
    items: state.items,
    promoCode: state.promoCode || "",
  });
}

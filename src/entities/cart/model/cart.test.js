import {
  addItem,
  createCartItem,
  removeItem,
  selectItemsCount,
  selectItemsTotal,
  setQuantity,
} from "./cart";
import { applyPromoDiscount, resolvePromo } from "./promo";
import { loadCartState, saveCartState } from "../lib/storage";

const baseItem = createCartItem({
  productId: 1,
  productName: "Футболка",
  colorId: 1,
  colorName: "черный",
  sizeId: 2,
  sizeName: "S (46)",
  price: "123.00",
  image: "/images/1/black_front.png",
});

describe("entities/cart model", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("addItem merges same product+color+size", () => {
    const once = addItem([], baseItem);
    const twice = addItem(once, baseItem);
    expect(twice).toHaveLength(1);
    expect(twice[0].quantity).toBe(2);
  });

  test("setQuantity clamps to minimum 1", () => {
    const items = addItem([], baseItem);
    expect(setQuantity(items, baseItem.key, 0)[0].quantity).toBe(1);
  });

  test("removeItem deletes line", () => {
    const items = addItem([], baseItem);
    expect(removeItem(items, baseItem.key)).toEqual([]);
  });

  test("totals and count", () => {
    const items = addItem(addItem([], baseItem), {
      ...baseItem,
      key: "2:1:1",
      productId: 2,
      price: 50,
      quantity: 1,
    });
    expect(selectItemsCount(items)).toBe(2);
    expect(selectItemsTotal(items)).toBe(173);
  });

  test("promo percent and fixed", () => {
    expect(applyPromoDiscount(200, resolvePromo("SALE10"))).toEqual({
      discount: 20,
      finalTotal: 180,
    });
    expect(applyPromoDiscount(200, resolvePromo("MINUS50"))).toEqual({
      discount: 50,
      finalTotal: 150,
    });
  });

  test("localStorage round-trip", () => {
    saveCartState({ items: [baseItem], promoCode: "SALE10" });
    expect(loadCartState()).toEqual({
      items: [baseItem],
      promoCode: "SALE10",
    });
  });
});

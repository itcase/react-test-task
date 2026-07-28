import { resolveVariantSelection } from "./resolve-variant";

const product = {
  id: 1,
  name: "Футболка",
  colors: [
    { id: 1, name: "черный", sizes: [1, 2, 3], price: "123.00", images: [] },
    { id: 2, name: "серый", sizes: [], price: "120.00", images: [] },
    { id: 3, name: "белый", sizes: [4, 5], price: "125.00", images: [] },
  ],
};

const coat = {
  id: 6,
  name: "Пальто",
  colors: [
    { id: 1, name: "черный", sizes: [], price: "499.00", images: [] },
    { id: 2, name: "графит", sizes: [], price: "519.00", images: [] },
  ],
};

describe("features/select-variant", () => {
  test("picks first in-stock color when color is missing", () => {
    const selection = resolveVariantSelection(product, null, null);
    expect(selection.color.id).toBe(1);
    expect(selection.sizeId).toBe(1);
  });

  test("keeps explicitly selected color even without sizes", () => {
    const selection = resolveVariantSelection(product, 2, null);
    expect(selection.color.id).toBe(2);
    expect(selection.sizeId).toBeNull();
  });

  test("allows switching coat colors with empty sizes", () => {
    expect(resolveVariantSelection(coat, 1, null).color.id).toBe(1);
    expect(resolveVariantSelection(coat, 2, null).color.id).toBe(2);
  });

  test("resets size when unavailable for color", () => {
    const selection = resolveVariantSelection(product, 3, 1);
    expect(selection.color.id).toBe(3);
    expect(selection.sizeId).toBe(4);
  });

  test("keeps valid size for selected color", () => {
    const selection = resolveVariantSelection(product, 1, 2);
    expect(selection.color.id).toBe(1);
    expect(selection.sizeId).toBe(2);
  });
});

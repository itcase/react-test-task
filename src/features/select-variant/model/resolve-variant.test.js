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

describe("features/select-variant", () => {
  test("falls back to first color with sizes", () => {
    const selection = resolveVariantSelection(product, 2, null);
    expect(selection.color.id).toBe(1);
    expect(selection.sizeId).toBe(1);
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

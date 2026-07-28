import {
  getMinPrice,
  isInStock,
} from "./helpers";
import { filterProducts } from "./filter";

const sampleProducts = [
  {
    id: 1,
    name: "Футболка",
    colors: [
      { id: 1, price: "123.00", sizes: [1, 2] },
      { id: 2, price: "100.00", sizes: [] },
    ],
  },
  {
    id: 2,
    name: "Майка",
    colors: [{ id: 1, price: "88.00", sizes: [1] }],
  },
  {
    id: 3,
    name: "Пальто",
    colors: [
      { id: 1, price: "499.00", sizes: [] },
      { id: 2, price: "519.00", sizes: [] },
    ],
  },
];

describe("entities/product helpers", () => {
  test("getMinPrice returns minimal color price", () => {
    expect(getMinPrice(sampleProducts[0])).toBe(100);
  });

  test("isInStock checks available sizes", () => {
    expect(isInStock(sampleProducts[0])).toBe(true);
    expect(isInStock(sampleProducts[2])).toBe(false);
  });

  test("filterProducts searches, filters stock and sorts", () => {
    const filtered = filterProducts(sampleProducts, {
      query: "а",
      inStockOnly: true,
      sort: "asc",
    });

    expect(filtered.map((item) => item.id)).toEqual([2, 1]);
  });

  test("filterProducts sorts descending", () => {
    const filtered = filterProducts(sampleProducts, {
      inStockOnly: true,
      sort: "desc",
    });

    expect(filtered.map((item) => item.id)).toEqual([1, 2]);
  });
});

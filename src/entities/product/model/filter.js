import { getMinPrice, isInStock } from "./helpers";

export function filterProducts(products, { query = "", inStockOnly = false, sort = "asc" } = {}) {
  const normalizedQuery = query.trim().toLowerCase();

  let result = products.filter((product) => {
    const matchesQuery =
      !normalizedQuery || product.name.toLowerCase().includes(normalizedQuery);
    const matchesStock = !inStockOnly || isInStock(product);
    return matchesQuery && matchesStock;
  });

  result = [...result].sort((a, b) => {
    const diff = getMinPrice(a) - getMinPrice(b);
    return sort === "desc" ? -diff : diff;
  });

  return result;
}

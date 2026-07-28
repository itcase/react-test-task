export const DEFAULT_FILTERS = {
  query: "",
  inStockOnly: false,
  sort: "asc",
};

export function createFiltersPatch(field, value) {
  return { [field]: value };
}

import { ProductFilters } from "../../../features/filter-products";

export function CatalogToolbar({ value, onChange }) {
  return <ProductFilters value={value} onChange={onChange} />;
}

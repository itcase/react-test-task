import "./ProductFilters.css";

export function ProductFilters({ value, onChange }) {
  return (
    <div className="product-filters">
      <label className="product-filters__field">
        <span>Поиск</span>
        <input
          type="search"
          value={value.query}
          placeholder="Название товара"
          onChange={(event) => onChange({ query: event.target.value })}
        />
      </label>

      <label className="product-filters__checkbox">
        <input
          type="checkbox"
          checked={value.inStockOnly}
          onChange={(event) => onChange({ inStockOnly: event.target.checked })}
        />
        <span>В наличии</span>
      </label>

      <label className="product-filters__field">
        <span>Сортировка по цене</span>
        <select
          value={value.sort}
          onChange={(event) => onChange({ sort: event.target.value })}
        >
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </label>
    </div>
  );
}

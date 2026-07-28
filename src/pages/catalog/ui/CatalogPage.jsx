import { useEffect, useState } from "react";
import { ProductCard, filterProducts, getProducts } from "../../../entities/product";
import { DEFAULT_FILTERS } from "../../../features/filter-products";
import { CatalogToolbar } from "../../../widgets/catalog-toolbar";
import { EmptyState, PageLayout, Spinner } from "../../../shared/ui";
import "./CatalogPage.css";

export function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    setStatus("loading");
    getProducts()
      .then((data) => {
        if (cancelled) return;
        setProducts(data);
        setStatus("ready");
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.message || "Не удалось загрузить товары");
        setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const visibleProducts = filterProducts(products, filters);

  return (
    <PageLayout>
      <h1 className="catalog-page__title">Каталог товаров</h1>

      <CatalogToolbar
        value={filters}
        onChange={(patch) => setFilters((prev) => ({ ...prev, ...patch }))}
      />

      {status === "loading" ? <Spinner /> : null}

      {status === "error" ? (
        <EmptyState title="Ошибка загрузки" description={error} />
      ) : null}

      {status === "ready" && visibleProducts.length === 0 ? (
        <EmptyState
          title="Ничего не найдено"
          description="Попробуйте изменить поиск или фильтры"
        />
      ) : null}

      {status === "ready" && visibleProducts.length > 0 ? (
        <div className="catalog-page__grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </PageLayout>
  );
}

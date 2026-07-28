import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getProduct, ProductGallery, findSizeById, getSizes } from "../../../entities/product";
import { resolveVariantSelection } from "../../../features/select-variant";
import { ProductBuy } from "../../../widgets/product-buy";
import { formatPrice } from "../../../shared/lib";
import { routes } from "../../../shared/config";
import { EmptyState, PageLayout, Spinner } from "../../../shared/ui";
import "./ProductPage.css";

export function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [status, setStatus] = useState("loading");

  const colorParam = searchParams.get("color");
  const sizeParam = searchParams.get("size");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");

    Promise.all([getProduct(id), getSizes()])
      .then(([productData, sizesData]) => {
        if (cancelled) return;
        setProduct(productData);
        setSizes(sizesData);
        setStatus("ready");
      })
      .catch(() => {
        if (cancelled) return;
        setProduct(null);
        setStatus("not-found");
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const selection = useMemo(() => {
    if (!product) {
      return { color: null, sizeId: null };
    }
    return resolveVariantSelection(product, colorParam, sizeParam);
  }, [product, colorParam, sizeParam]);

  useEffect(() => {
    if (status !== "ready" || !product || !selection.color) {
      return;
    }

    const nextColor = String(selection.color.id);
    const nextSize = selection.sizeId != null ? String(selection.sizeId) : "";
    const currentColor = colorParam ?? "";
    const currentSize = sizeParam ?? "";

    if (nextColor !== currentColor || nextSize !== currentSize) {
      const next = { color: nextColor };
      if (nextSize) {
        next.size = nextSize;
      }
      setSearchParams(next, { replace: true });
    }
  }, [
    status,
    product,
    selection.color,
    selection.sizeId,
    colorParam,
    sizeParam,
    setSearchParams,
  ]);

  const handleColorChange = (colorId) => {
    const next = resolveVariantSelection(product, colorId, null);
    const params = { color: String(next.color.id) };
    if (next.sizeId != null) {
      params.size = String(next.sizeId);
    }
    setSearchParams(params);
  };

  const handleSizeChange = (sizeId) => {
    setSearchParams({
      color: String(selection.color?.id ?? ""),
      size: String(sizeId),
    });
  };

  if (status === "loading") {
    return (
      <PageLayout>
        <Spinner />
      </PageLayout>
    );
  }

  if (status === "not-found" || !product) {
    return (
      <PageLayout>
        <EmptyState
          title="Товар не найден"
          action={
            <Link to={routes.catalog} className="product-page__back">
              назад
            </Link>
          }
        />
      </PageLayout>
    );
  }

  const selectedSize = findSizeById(sizes, selection.sizeId);
  const canAdd = Boolean(selection.color && selectedSize);

  return (
    <PageLayout>
      <button
        type="button"
        className="product-page__back-button"
        onClick={() => navigate(-1)}
      >
        назад
      </button>

      <div className="product-page">
        <ProductGallery
          images={selection.color?.images ?? []}
          alt={product.name}
        />

        <div className="product-page__info">
          <h1>{product.name}</h1>
          <p className="product-page__brand">{product.brand}</p>
          <p className="product-page__price">
            {selection.color ? formatPrice(selection.color.price) : "—"}
          </p>
          <p className="product-page__description">
            {selection.color?.description}
          </p>

          <ProductBuy
            product={product}
            sizes={sizes}
            selectedColorId={selection.color?.id}
            selectedSizeId={selection.sizeId}
            selectedColor={selection.color}
            onColorChange={handleColorChange}
            onSizeChange={handleSizeChange}
            canAdd={canAdd}
          />
        </div>
      </div>
    </PageLayout>
  );
}

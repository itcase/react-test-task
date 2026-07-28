import { Link } from "react-router-dom";
import { formatPrice } from "../../../shared/lib";
import { routes } from "../../../shared/config";
import { getMinPrice, getProductImage, isInStock } from "../model/helpers";
import "./ProductCard.css";

export function ProductCard({ product }) {
  const image = getProductImage(product);
  const price = formatPrice(getMinPrice(product));
  const stockLabel = isInStock(product) ? "В наличии" : "Нет в наличии";

  return (
    <Link to={routes.product(product.id)} className="product-card">
      <div className="product-card__media">
        {image ? (
          <img src={image} alt={product.name} className="product-card__image" />
        ) : (
          <div className="product-card__placeholder">Нет фото</div>
        )}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">от {price}</p>
        <p className="product-card__meta">{product.brand}</p>
        <p
          className={
            isInStock(product)
              ? "product-card__stock product-card__stock--ok"
              : "product-card__stock"
          }
        >
          {stockLabel}
        </p>
      </div>
    </Link>
  );
}

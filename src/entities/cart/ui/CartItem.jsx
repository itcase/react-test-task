import { formatPrice } from "shared/lib";
import { selectLineTotal } from "../model/cart";
import "./CartItem.css";

export function CartItemView({ item, actions }) {
  return (
    <article className="cart-item">
      <div className="cart-item__media">
        {item.image ? (
          <img src={item.image} alt={item.productName} className="cart-item__image" />
        ) : (
          <div className="cart-item__placeholder">Нет фото</div>
        )}
      </div>
      <div className="cart-item__body">
        <h3 className="cart-item__title">{item.productName}</h3>
        <p>Цвет: {item.colorName}</p>
        <p>Размер: {item.sizeName}</p>
        <p>Цена: {formatPrice(item.price)}</p>
        <p>Количество: {item.quantity}</p>
        <p>Сумма: {formatPrice(selectLineTotal(item))}</p>
        {actions ? <div className="cart-item__actions">{actions}</div> : null}
      </div>
    </article>
  );
}

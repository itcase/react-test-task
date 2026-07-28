import { formatPrice } from "shared/lib";
import "./CartTotals.css";

export function CartTotals({ subtotal, discount, total, promo }) {
  return (
    <div className="cart-totals">
      <p>Сумма товаров: {formatPrice(subtotal)}</p>
      {promo ? (
        <p className="cart-totals__discount">
          Скидка ({promo.label}): −{formatPrice(discount)}
        </p>
      ) : null}
      <p className="cart-totals__final">Итого: {formatPrice(total)}</p>
    </div>
  );
}

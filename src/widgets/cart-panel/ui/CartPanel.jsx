import { CartItemView, CartTotals } from "entities/cart";
import { ApplyPromoForm } from "features/apply-promo";
import { ManageCartItem } from "features/manage-cart-item";
import "./CartPanel.css";

export function CartPanel({ items, subtotal, discount, total, promo }) {
  return (
    <div className="cart-panel">
      <div className="cart-panel__list">
        {items.map((item) => (
          <CartItemView
            key={item.key}
            item={item}
            actions={
              <ManageCartItem itemKey={item.key} quantity={item.quantity} />
            }
          />
        ))}
      </div>
      <ApplyPromoForm />
      <CartTotals
        subtotal={subtotal}
        discount={discount}
        total={total}
        promo={promo}
      />
    </div>
  );
}

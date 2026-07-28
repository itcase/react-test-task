import { useCart } from "../../../entities/cart";
import { Button } from "../../../shared/ui";
import "./ManageCartItem.css";

export function ManageCartItem({ itemKey, quantity }) {
  const { changeQuantity, removeFromCart } = useCart();

  return (
    <div className="manage-cart-item">
      <div className="manage-cart-item__qty">
        <Button
          variant="ghost"
          aria-label="Уменьшить количество"
          disabled={quantity <= 1}
          onClick={() => changeQuantity(itemKey, quantity - 1)}
        >
          −
        </Button>
        <span>{quantity}</span>
        <Button
          variant="ghost"
          aria-label="Увеличить количество"
          onClick={() => changeQuantity(itemKey, quantity + 1)}
        >
          +
        </Button>
      </div>
      <Button variant="danger" onClick={() => removeFromCart(itemKey)}>
        удалить
      </Button>
    </div>
  );
}

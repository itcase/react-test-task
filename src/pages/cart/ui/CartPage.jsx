import { Link } from "react-router-dom";
import { useCart } from "../../../entities/cart";
import { CartPanel } from "../../../widgets/cart-panel";
import { routes } from "../../../shared/config";
import { EmptyState, PageLayout } from "../../../shared/ui";
import "./CartPage.css";

export function CartPage() {
  const { items, subtotal, discount, total, promo } = useCart();

  return (
    <PageLayout>
      <Link to={routes.catalog} className="cart-page__back">
        назад
      </Link>

      <h1 className="cart-page__title">Корзина</h1>

      {items.length === 0 ? (
        <EmptyState
          title="Корзина пуста"
          description="Добавьте товары из каталога"
          action={
            <Link to={routes.catalog} className="cart-page__back">
              К товарам
            </Link>
          }
        />
      ) : (
        <CartPanel
          items={items}
          subtotal={subtotal}
          discount={discount}
          total={total}
          promo={promo}
        />
      )}
    </PageLayout>
  );
}

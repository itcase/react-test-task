import { Link } from "react-router-dom";
import { useCart } from "../../../entities/cart";
import { formatPrice } from "../../../shared/lib";
import { routes } from "../../../shared/config";
import "./Header.css";

export function Header() {
  const { count, total } = useCart();

  return (
    <header className="app-header">
      <nav className="app-header__nav">
        <Link to={routes.catalog} className="app-header__link">
          Товары
        </Link>
        <Link to={routes.cart} className="app-header__cart">
          Корзина · {count} шт. · {formatPrice(total)}
        </Link>
      </nav>
    </header>
  );
}

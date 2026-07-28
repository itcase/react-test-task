import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "entities/cart";
import { CatalogPage } from "pages/catalog";
import { ProductPage } from "pages/product";
import { CartPage } from "pages/cart";
import { Header } from "widgets/header";
import { routes } from "shared/config";

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routes.catalog} element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path={routes.cart} element={<CartPage />} />
          <Route path="*" element={<Navigate to={routes.catalog} replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

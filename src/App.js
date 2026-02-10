import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { NotFound } from "./pages/NotFound";
import { Cart } from "./pages/Cart";
import { Item } from "./pages/Item";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/item/:id" element={<Item />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

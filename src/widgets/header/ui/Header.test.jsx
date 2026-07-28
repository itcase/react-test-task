import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

jest.mock("entities/cart", () => ({
  useCart: () => ({
    count: 3,
    total: 321.5,
  }),
}));

describe("widgets/header", () => {
  test("shows count and total", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Корзина · 3 шт\. · 321\.50/)).toBeInTheDocument();
  });
});

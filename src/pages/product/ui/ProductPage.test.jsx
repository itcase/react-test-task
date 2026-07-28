import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from "./ProductPage";

jest.mock("../../../entities/product", () => {
  const actual = jest.requireActual("../../../entities/product");
  return {
    ...actual,
    getProduct: jest.fn(),
    getSizes: jest.fn(() => Promise.resolve([])),
    findSizeById: jest.fn(() => null),
    getSizeLabel: jest.fn(() => ""),
    ProductGallery: () => <div>gallery</div>,
  };
});

jest.mock("../../../features/select-variant", () => ({
  resolveVariantSelection: () => ({ color: null, sizeId: null }),
}));

jest.mock("../../../widgets/product-buy", () => ({
  ProductBuy: () => null,
}));

const { getProduct } = jest.requireMock("../../../entities/product");

describe("pages/product not-found", () => {
  test("shows not found screen", async () => {
    getProduct.mockRejectedValueOnce(new Error("getProduct: Product not found"));

    render(
      <MemoryRouter initialEntries={["/product/999"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText("Товар не найден")).toBeInTheDocument();
    });
    expect(screen.getByText("назад")).toBeInTheDocument();
  });
});

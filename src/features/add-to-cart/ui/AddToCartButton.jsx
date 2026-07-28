import { createCartItem, useCart } from "../../../entities/cart";
import { findSizeById, getSizeLabel } from "../../../entities/product";
import { Button } from "../../../shared/ui";

export function AddToCartButton({ product, color, sizeId, sizes, disabled }) {
  const { addToCart } = useCart();
  const size = findSizeById(sizes, sizeId);

  const handleClick = () => {
    if (!product || !color || !size) {
      return;
    }

    addToCart(
      createCartItem({
        productId: product.id,
        productName: product.name,
        colorId: color.id,
        colorName: color.name,
        sizeId: size.id,
        sizeName: getSizeLabel(size),
        price: color.price,
        image: color.images?.[0] ?? null,
      }),
    );
  };

  return (
    <Button onClick={handleClick} disabled={disabled || !color || !size}>
      В корзину
    </Button>
  );
}

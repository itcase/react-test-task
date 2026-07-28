import { AddToCartButton } from "../../../features/add-to-cart";
import { VariantSelector } from "../../../features/select-variant";
import "./ProductBuy.css";

export function ProductBuy({
  product,
  sizes,
  selectedColorId,
  selectedSizeId,
  selectedColor,
  onColorChange,
  onSizeChange,
  canAdd,
}) {
  return (
    <div className="product-buy">
      <VariantSelector
        product={product}
        sizes={sizes}
        selectedColorId={selectedColorId}
        selectedSizeId={selectedSizeId}
        onColorChange={onColorChange}
        onSizeChange={onSizeChange}
      />
      <div className="product-buy__actions">
        <AddToCartButton
          product={product}
          color={selectedColor}
          sizeId={selectedSizeId}
          sizes={sizes}
          disabled={!canAdd}
        />
      </div>
    </div>
  );
}

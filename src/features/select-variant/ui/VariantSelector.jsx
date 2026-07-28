import { isSizeAvailable, getSizeLabel } from "../../../entities/product";
import { Button } from "../../../shared/ui";
import "./VariantSelector.css";

export function VariantSelector({
  product,
  sizes,
  selectedColorId,
  selectedSizeId,
  onColorChange,
  onSizeChange,
}) {
  const selectedColor =
    product.colors.find((color) => String(color.id) === String(selectedColorId)) ??
    null;

  return (
    <div className="variant-selector">
      <div className="variant-selector__group">
        <h3>Цвет</h3>
        <div className="variant-selector__options">
          {product.colors.map((color) => (
            <Button
              key={color.id}
              variant={String(color.id) === String(selectedColorId) ? "primary" : "ghost"}
              onClick={() => onColorChange(color.id)}
            >
              {color.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="variant-selector__group">
        <h3>Размер</h3>
        <div className="variant-selector__options">
          {sizes.map((size) => {
            const available = selectedColor
              ? isSizeAvailable(selectedColor, size.id)
              : false;
            return (
              <Button
                key={size.id}
                variant={String(size.id) === String(selectedSizeId) ? "primary" : "ghost"}
                disabled={!available}
                onClick={() => onSizeChange(size.id)}
              >
                {getSizeLabel(size)}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

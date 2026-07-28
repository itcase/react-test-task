import { findColor, isSizeAvailable } from "../../../entities/product";

export function resolveVariantSelection(product, colorId, sizeId) {
  if (!product?.colors?.length) {
    return { color: null, sizeId: null };
  }

  let color = findColor(product, colorId);

  if (!color) {
    color =
      product.colors.find((entry) => entry.sizes.length > 0) ?? product.colors[0];
  }

  let nextSizeId = sizeId;
  if (!isSizeAvailable(color, nextSizeId)) {
    nextSizeId = color.sizes[0] ?? null;
  }

  return { color, sizeId: nextSizeId };
}

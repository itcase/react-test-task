import { parsePrice } from "../../../shared/lib";

export function getMinPrice(product) {
  if (!product?.colors?.length) {
    return 0;
  }

  return Math.min(...product.colors.map((color) => parsePrice(color.price)));
}

export function isInStock(product) {
  return Boolean(
    product?.colors?.some((color) => Array.isArray(color.sizes) && color.sizes.length > 0),
  );
}

export function getProductImage(product) {
  return product?.colors?.[0]?.images?.[0] ?? null;
}

export function findColor(product, colorId) {
  if (!product?.colors || colorId == null || colorId === "") {
    return null;
  }
  return product.colors.find((color) => String(color.id) === String(colorId)) ?? null;
}

export function isSizeAvailable(color, sizeId) {
  if (!color || sizeId == null) {
    return false;
  }
  return color.sizes.some((id) => String(id) === String(sizeId));
}

export function findSizeById(sizes, sizeId) {
  if (sizeId == null || sizeId === "") {
    return null;
  }
  return sizes.find((size) => String(size.id) === String(sizeId)) ?? null;
}

export function getSizeLabel(size) {
  if (!size) {
    return "—";
  }
  return `${size.name} (${size.number})`;
}

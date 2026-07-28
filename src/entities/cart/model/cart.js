export const CART_STORAGE_KEY = "catalog-cart";

export function createCartItemKey({ productId, colorId, sizeId }) {
  return `${productId}:${colorId}:${sizeId}`;
}

export function createCartItem({
  productId,
  productName,
  colorId,
  colorName,
  sizeId,
  sizeName,
  price,
  image,
  quantity = 1,
}) {
  return {
    key: createCartItemKey({ productId, colorId, sizeId }),
    productId,
    productName,
    colorId,
    colorName,
    sizeId,
    sizeName,
    price: Number(price),
    image,
    quantity,
  };
}

export function addItem(items, item) {
  const existing = items.find((entry) => entry.key === item.key);
  if (existing) {
    return items.map((entry) =>
      entry.key === item.key
        ? { ...entry, quantity: entry.quantity + 1 }
        : entry,
    );
  }
  return [...items, { ...item, quantity: item.quantity || 1 }];
}

export function setQuantity(items, key, quantity) {
  const nextQuantity = Math.max(1, Number(quantity) || 1);
  return items.map((entry) =>
    entry.key === key ? { ...entry, quantity: nextQuantity } : entry,
  );
}

export function removeItem(items, key) {
  return items.filter((entry) => entry.key !== key);
}

export function selectItemsCount(items) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function selectItemsTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function selectLineTotal(item) {
  return item.price * item.quantity;
}

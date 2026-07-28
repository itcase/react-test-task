export function parsePrice(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

export function formatPrice(value) {
  return parsePrice(value).toFixed(2);
}

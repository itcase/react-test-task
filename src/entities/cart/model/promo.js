const PROMO_CODES = {
  SALE10: { type: "percent", value: 10, label: "Скидка 10%" },
  MINUS50: { type: "fixed", value: 50, label: "−50.00" },
};

function normalizePromoCode(code) {
  return String(code || "")
    .trim()
    .toUpperCase();
}

export function resolvePromo(code) {
  const normalized = normalizePromoCode(code);
  if (!normalized) {
    return null;
  }
  return PROMO_CODES[normalized] ?? null;
}

export function applyPromoDiscount(total, promo) {
  if (!promo || total <= 0) {
    return { discount: 0, finalTotal: total };
  }

  let discount = 0;
  if (promo.type === "percent") {
    discount = (total * promo.value) / 100;
  } else if (promo.type === "fixed") {
    discount = promo.value;
  }

  discount = Math.min(discount, total);
  return {
    discount,
    finalTotal: Math.max(0, total - discount),
  };
}

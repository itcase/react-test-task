import { useState } from "react";
import { resolvePromo, useCart } from "entities/cart";
import { Button } from "shared/ui";
import "./ApplyPromoForm.css";

export function ApplyPromoForm() {
  const { promoCode, promo, setPromoCode, clearPromo } = useCart();
  const [draft, setDraft] = useState(promoCode);
  const [error, setError] = useState("");

  const handleApply = (event) => {
    event.preventDefault();
    const resolved = resolvePromo(draft);
    if (!resolved) {
      setError("Промокод не найден. Попробуйте SALE10 или MINUS50");
      return;
    }
    setError("");
    setPromoCode(draft);
  };

  const handleClear = () => {
    setDraft("");
    setError("");
    clearPromo();
  };

  return (
    <form className="apply-promo" onSubmit={handleApply}>
      <label className="apply-promo__field">
        <span>Промокод</span>
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="SALE10"
        />
      </label>
      <div className="apply-promo__actions">
        <Button type="submit">Применить</Button>
        {promo ? (
          <Button type="button" variant="ghost" onClick={handleClear}>
            Сбросить
          </Button>
        ) : null}
      </div>
      {error ? <p className="apply-promo__error">{error}</p> : null}
      {promo ? <p className="apply-promo__ok">Применён: {promo.label}</p> : null}
    </form>
  );
}

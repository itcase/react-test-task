import "./Spinner.css";

export function Spinner({ label = "Загрузка..." }) {
  return (
    <div className="ui-spinner" role="status" aria-live="polite">
      <span className="ui-spinner__dot" />
      <span>{label}</span>
    </div>
  );
}

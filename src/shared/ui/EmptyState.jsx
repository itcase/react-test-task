import "./EmptyState.css";

export function EmptyState({ title, description, action }) {
  return (
    <div className="ui-empty">
      <h2 className="ui-empty__title">{title}</h2>
      {description ? <p className="ui-empty__description">{description}</p> : null}
      {action ? <div className="ui-empty__action">{action}</div> : null}
    </div>
  );
}

import './Card.css'

/**
 * Card — the standard info card (icon + title + text)
 * Used on About, PreKG, Primary, Prep, Secondary pages.
 */
export default function Card({ icon, title, children }) {
  return (
    <div className="card">
      <div className="card__icon" aria-hidden="true">{icon}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{children}</p>
    </div>
  )
}

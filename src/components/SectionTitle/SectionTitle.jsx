import './SectionTitle.css'

/**
 * SectionTitle
 * label    — small uppercase label above (optional)
 * title    — main heading text
 * highlight — portion of title coloured gold
 * sub      — subtitle paragraph (optional)
 * center   — boolean, centres text (default false)
 */
export default function SectionTitle({ label, title, highlight, sub, center = false }) {
  return (
    <div className={`section-title-block${center ? ' section-title-block--center' : ''}`}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  )
}

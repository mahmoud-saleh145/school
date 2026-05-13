import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { STUDENT_TIPS, PARENT_TIPS } from '../../utils/helpers'
import './Tips.css'

function AccordionItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`accordion-item${open ? ' accordion-item--open' : ''}`}>
      <button
        className="accordion-item__header"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{item.title}</span>
        <span className="accordion-item__arrow" aria-hidden="true">▼</span>
      </button>
      <div className="accordion-item__body">
        <ul>
          {item.items.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <AccordionItem key={i} item={item} />
      ))}
    </div>
  )
}

export default function Tips() {
  return (
    <div>
      <div className="page-hero">
        <h1>Tips & <span>Resources</span></h1>
        <p>Helpful guidance for students, parents, and families</p>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="For Students"
            title="Study Tips for"
            highlight="Students"
          />
          <Accordion items={STUDENT_TIPS} />

          <div style={{ marginTop: '60px' }}>
            <SectionTitle
              label="For Parents"
              title="Tips for"
              highlight="Parents"
            />
            <Accordion items={PARENT_TIPS} />
          </div>
        </div>
      </section>
    </div>
  )
}

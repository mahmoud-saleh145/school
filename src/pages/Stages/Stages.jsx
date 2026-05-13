import { useNavigate } from 'react-router-dom'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Stages.css'

const STAGES = [
  {
    num: 1,
    title: 'Pre-KG & Kindergarten',
    ages: 'Ages 3–6',
    desc: 'Play-based foundation learning that nurtures curiosity, social skills, and early literacy and numeracy. Our safe, vibrant classrooms are designed for young explorers.',
    to: '/prekg',
  },
  {
    num: 2,
    title: 'Primary Grades 1–6',
    ages: 'Ages 6–12',
    desc: 'Core subjects including English, Arabic, Math, Science, and Social Studies with hands-on learning and extracurricular enrichment.',
    to: '/primary',
  },
  {
    num: 3,
    title: 'Preparatory Grades 7–9',
    ages: 'Ages 12–15',
    desc: 'Advanced subjects, clubs, debates, and leadership programs that prepare students for the rigors of secondary education.',
    to: '/preparatory',
  },
  {
    num: 4,
    title: 'Secondary Grades 10–12',
    ages: 'Ages 15–18',
    desc: 'University-ready excellence with STEM, humanities, electives, university counseling, and a 100% acceptance rate.',
    to: '/secondary',
  },
]

export default function Stages() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-hero">
        <h1>Educational <span>Stages</span></h1>
        <p>A seamless journey from early childhood through university preparation</p>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="Academic Journey"
            title="Our"
            highlight="Programs"
            sub="MMC's comprehensive program spans from Pre-KG to Secondary 3, ensuring seamless progression and tailored learning at every stage."
          />

          <ol className="stages-timeline">
            {STAGES.map(stage => (
              <li key={stage.num} className="stages-timeline__item">
                <div className="stages-timeline__num" aria-hidden="true">
                  {stage.num}
                </div>
                <div className="stages-timeline__card">
                  <div className="stages-timeline__card-header">
                    <div>
                      <h3>{stage.title}</h3>
                      <span className="stages-timeline__ages">{stage.ages}</span>
                    </div>
                  </div>
                  <p>{stage.desc}</p>
                  <button
                    className="stages-timeline__link"
                    onClick={() => navigate(stage.to)}
                  >
                    Learn more →
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}

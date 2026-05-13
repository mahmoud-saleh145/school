import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import mmc1 from '../../assets/MMC.jpg'
import mmc2 from '../../assets/MMC2.jfif'
import './About.css'

const WHY_LIST = [
  ['Expert Faculty', 'Qualified teachers with years of experience across all subjects and grade levels.'],
  ['Modern Facilities', 'Science labs, computer labs, sports fields, libraries, and interactive classrooms.'],
  ['Holistic Curriculum', 'Academic subjects enriched with arts, sports, and character education.'],
  ['Small Class Sizes', 'Personalized attention ensuring every student thrives.'],
  ['University Counseling', 'Dedicated guidance for Secondary students applying to top universities.'],
  ['Safe Environment', 'A nurturing, secure campus where students feel welcomed and valued.'],
]

export default function About() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Page hero */}
      <div className="page-hero">
        <h1>About <span>Mansoura College</span></h1>
        <p>Our mission, vision, and the story behind one of Egypt's finest institutions</p>
      </div>

      {/* Story + images */}
      <section className="section">
        <div className="container">
          <section className="page-gallery-grid two-cols">
            <img src={mmc1} alt="MMC" />
            <img src={mmc2} alt="MMC" />
          </section>

          <SectionTitle label="Our Story" title="Modern" highlight="Mansoura College" />

          <div className="about-story">
            <p>
              Modern Mansoura College (MMC) provides holistic education from Pre-KG to Secondary 3,
              fostering academic excellence and personal growth in Mansoura, Egypt. Located on the
              Mansoura–Damietta highway, we are one of the few international schools in Egypt that
              fully adheres to all international standards of education.
            </p>
            <p>
              Our academically demanding environment is founded on the belief that every child is
              creative, unique, and capable of achieving outstanding results when given proper
              support and tools.
            </p>
          </div>

          <div className="cards-grid">
            <Card icon="🎯" title="Mission">
              To nurture young minds for a brighter future through innovative, character-based
              education that prepares students for global citizenship.
            </Card>
            <Card icon="🌟" title="Vision">
              A leading institution inspiring lifelong learning and academic excellence,
              recognized across Egypt and internationally.
            </Card>
            <Card icon="⚖️" title="Values">
              Integrity, innovation, and community. We treat others as we want to be treated —
              this is the foundation of everything we do.
            </Card>
            <Card icon="🏆" title="Achievement">
              100% university acceptance rate for Secondary graduates. Over 500 university
              graduates produced over the years.
            </Card>
          </div>
        </div>
      </section>

      {/* Why MMC */}
      <section className="section section--alt">
        <div className="container">
          <SectionTitle label="Why Choose Us" title="Why Choose" highlight="MMC?" />

          <ul className="about-why-list">
            {WHY_LIST.map(([bold, rest]) => (
              <li key={bold} className="about-why-list__item">
                <span className="about-why-list__icon">✓</span>
                <span>
                  <strong>{bold}:</strong> {rest}
                </span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '32px' }}>
            <Button onClick={() => navigate('/admissions')}>Apply Now</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

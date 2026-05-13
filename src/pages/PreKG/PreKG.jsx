import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import kg1 from '../../assets/kg.jpg'
import kg2 from '../../assets/kgg.jpg'
import kg3 from '../../assets/preKg.png'
export default function PreKG() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-hero">
        <h1>Pre-KG & <span>Kindergarten</span></h1>
        <p>Play-based learning for ages 3–6, building social skills and curiosity</p>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="Early Years"
            title="Early Years"
            highlight="Program"
          />

          <p className="stage-intro">
            Our Pre-KG and KG program focuses on holistic early childhood development, preparing
            young learners for a lifetime of curiosity and achievement through age-appropriate,
            engaging activities.
          </p>

          {/* Image row */}
          <section className="page-gallery-grid">
            <img src={kg1} alt="PreKG" />
            <img src={kg2} alt="PreKG" />
            <img src={kg3} alt="PreKG" />
          </section>

          <div className="cards-grid">
            <Card icon="📚" title="Curriculum">
              Basic literacy, numeracy, creative arts, and early science concepts through
              play and exploration.
            </Card>
            <Card icon="🎨" title="Activities">
              Outdoor play, music, group games, storytelling, and hands-on art projects
              that spark creativity.
            </Card>
            <Card icon="🏫" title="Facilities">
              Safe playgrounds, colorful interactive classrooms, and dedicated early
              learning spaces.
            </Card>
            <Card icon="👨‍👩‍👧" title="Social Growth">
              Structured group activities help children develop teamwork, empathy, and
              communication skills.
            </Card>
          </div>

          <div className="stage-cta">
            <Button onClick={() => navigate('/admissions')}>Apply for Pre-KG</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

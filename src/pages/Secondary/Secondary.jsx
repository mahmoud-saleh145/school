import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import img1 from '../../assets/sec.jpg'
import img2 from '../../assets/Seccc.jpg'
import img3 from '../../assets/sec gradu.jpeg'
import './StagePage.css'

export default function Secondary() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-hero">
        <h1>Secondary <span>Grades 10–12</span></h1>
        <p>University-ready excellence with 100% acceptance rate</p>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="Secondary Program"
            title="Secondary"
            highlight="Program"
          />

          <p className="stage-intro">
            Grades 10–12 offer rigorous university preparation with STEM and humanities tracks,
            career guidance, internships, and dedicated university counseling — all leading to
            our outstanding 100% university acceptance rate.
          </p>

          <section className="page-gallery-grid">
            <img src={img1} alt="Secondary" />
            <img src={img2} alt="Secondary" />
            <img src={img3} alt="Secondary" />
          </section>

          <div className="cards-grid">
            <Card icon="🧮" title="Subjects">
              Calculus, Physics, Chemistry, Biology, Literature, Economics, and a
              range of electives.
            </Card>
            <Card icon="🎓" title="University Counseling">
              Personal guidance on university applications, scholarships, and career
              pathways from experienced advisors.
            </Card>
            <Card icon="💼" title="Internships">
              Real-world experience through partnerships with leading Egyptian and
              international organizations.
            </Card>
            <Card icon="🏆" title="Achievements">
              100% university acceptance rate. Graduates in top universities across
              Egypt, USA, UK, and Canada.
            </Card>
          </div>

          <div className="stage-cta">
            <Button onClick={() => navigate('/admissions')}>Enroll in Secondary</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

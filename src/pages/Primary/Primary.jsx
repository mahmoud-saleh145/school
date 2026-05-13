import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import img1 from '../../assets/Mohamed.png'
import img2 from '../../assets/Media.jfif'
import img3 from '../../assets/PrimeActivity.jpg'
export default function Primary() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-hero">
        <h1>Primary <span>Grades 1–6</span></h1>
        <p>Core subjects and hands-on exploration for ages 6–12</p>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="Primary Education"
            title="Primary"
            highlight="Education"
          />

          <p className="stage-intro">
            Grades 1–6 emphasize core academic subjects alongside creative and physical
            development. Our teachers bring subjects to life through engaging, hands-on
            learning experiences.
          </p>

          <section className="page-gallery-grid">
            <img src={img1} alt="Primary" />
            <img src={img2} alt="Primary" />
            <img src={img3} alt="Primary" />
          </section>

          <div className="cards-grid">
            <Card icon="➗" title="Subjects">
              English, Arabic, Mathematics, Science, Social Studies, Computer Science,
              and Arts.
            </Card>
            <Card icon="🔬" title="Facilities">
              Science labs, libraries, computer rooms, and sports fields support diverse
              learning styles.
            </Card>
            <Card icon="🏅" title="Success">
              Our primary students consistently excel in national assessments and
              inter-school competitions.
            </Card>
            <Card icon="🤝" title="Support">
              Small class sizes ensure every student receives individualized attention
              and support from dedicated teachers.
            </Card>
          </div>

          <div className="stage-cta">
            <Button onClick={() => navigate('/admissions')}>Enroll in Primary</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

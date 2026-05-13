import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import img1 from '../../assets/prep.jpg'
import img2 from '../../assets/prepActivity.jpg'
import img3 from '../../assets/robot.jpg'
export default function Preparatory() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-hero">
        <h1>Preparatory <span>Grades 7–9</span></h1>
        <p>Advanced preparation for secondary education, ages 12–15</p>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="Preparatory Program"
            title="Preparatory"
            highlight="Program"
          />

          <p className="stage-intro">
            Grades 7–9 build on primary foundations with more advanced academics, leadership
            opportunities, and extracurricular programs that develop well-rounded young
            individuals.
          </p>

          <section className="page-gallery-grid">
            <img src={img1} alt="Preparatory" />
            <img src={img2} alt="Preparatory" />
            <img src={img3} alt="Preparatory" />
          </section>

          <div className="cards-grid">
            <Card icon="📐" title="Subjects">
              Advanced Mathematics, Sciences, Languages, History, Geography, and
              Introduction to Technology.
            </Card>
            <Card icon="🎤" title="Activities">
              Clubs, debates, Model UN, student council, and leadership development
              programs.
            </Card>
            <Card icon="💻" title="Facilities">
              Computer labs, robotics workshop, study halls, and modern science
              laboratories.
            </Card>
            <Card icon="📈" title="Outcomes">
              Students graduate fully prepared for the academic demands of secondary
              education and beyond.
            </Card>
          </div>

          <div className="stage-cta">
            <Button onClick={() => navigate('/admissions')}>Apply for Preparatory</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Admissions.css'
import adminImg from '../../assets/Adminstration.jfif'


const STEPS = [
  { num: 1, title: 'Inquire', desc: 'Contact us via phone, email, or visit our campus to learn about available spots.' },
  { num: 2, title: 'Apply', desc: 'Submit the application form along with required documents listed below.' },
  { num: 3, title: 'Assessment', desc: 'Students may attend a brief, friendly assessment appropriate to their grade level.' },
  { num: 4, title: 'Enroll', desc: 'Receive your offer letter, complete enrollment formalities, and welcome to MMC!' },
]

const DOCUMENTS = [
  ['Birth Certificate', 'Official copy for the applying student.'],
  ['Academic Transcripts', 'Previous school reports for the last 2 years.'],
  ['Personal Interview', 'A short conversation with our admissions team.'],
  ['Passport-sized Photos', '4 recent photos of the student.'],
  ['Parent ID', 'A copy of parent or guardian national ID or passport.'],
]

export default function Admissions() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="page-hero">
        <h1>Join the <span>MMC Family</span></h1>
        <p>Applications are open for all stages — start your journey today</p>
      </div>

      {/* How to Apply */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Admissions"
            title="How to"
            highlight="Apply"
            sub="Our admissions process is simple and straightforward. We welcome families who share our commitment to excellence and holistic education."
          />

          {/* Office image placeholder */}
          <section className="single-image-wrapper">
            <img src={adminImg} alt="Admissions" style={{ width: '50%' }} />
          </section>
          {/* Steps */}
          <div className="admissions-steps">
            {STEPS.map(step => (
              <div key={step.num} className="admissions-step">
                <div className="admissions-step__num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + Tuition */}
      <section className="section section--alt">
        <div className="container">
          <div className="admissions-bottom">
            <div>
              <SectionTitle label="Checklist" title="Required" highlight="Documents" />
              <ul className="admissions-docs">
                {DOCUMENTS.map(([bold, rest]) => (
                  <li key={bold} className="admissions-docs__item">
                    <span className="admissions-docs__icon">✓</span>
                    <span><strong>{bold}:</strong> {rest}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="admissions-tuition">
              <SectionTitle label="Fees" title="Tuition &" highlight="Scholarships" />
              <p>
                We offer affordable, competitive tuition fees with merit-based and need-based
                scholarships available. Contact our admissions office for a detailed fee
                structure tailored to your chosen stage and curriculum.
              </p>
              <div className="admissions-tuition__badges">
                <div className="admissions-tuition__badge">Merit Scholarships</div>
                <div className="admissions-tuition__badge">Need-Based Aid</div>
                <div className="admissions-tuition__badge">Flexible Payment</div>
              </div>
              <Button onClick={() => navigate('/contact')} style={{ marginTop: '24px' }}>
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

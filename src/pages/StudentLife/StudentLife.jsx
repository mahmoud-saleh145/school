import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { ACTIVITIES } from '../../utils/helpers'
import img1 from '../../assets/Roboticslab.jpg'
import img2 from '../../assets/Seccc.jpg'
import img3 from '../../assets/product8.jpg'
import './StudentLife.css'

const ANNUAL_EVENTS = [
  ['Science Fair', 'Students present original research and engineering projects to judges and parents.'],
  ['Talent Show', 'A showcase of music, dance, drama, and spoken word performances.'],
  ['Sports Day', 'A full day of athletic competitions fostering school spirit and teamwork.'],
  ['Graduation Ceremony', 'A celebration of Secondary graduates as they begin their university journey.'],
  ['Open House', 'Parents and prospective families explore campus and meet our faculty.'],
  ['Cultural Day', 'Celebrating Egyptian and global cultures through food, dress, and performance.'],
]

export default function StudentLife() {
  return (
    <div>
      <div className="page-hero">
        <h1>Student <span>Life</span></h1>
        <p>A vibrant community of clubs, sports, arts, and memorable events</p>
      </div>

      {/* Activities */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Beyond the Classroom"
            title="Life Beyond"
            highlight="the Classroom"
            sub="At MMC, education extends far beyond textbooks. Our rich student life program nurtures talents, builds friendships, and develops the character of every student."
          />

          {/* Photo row */}
          <section className="page-gallery-grid">
            <img src={img1} alt="Student Life" />
            <img src={img2} alt="Student Life" />
            <img src={img3} alt="Student Life" />
          </section>

          <div className="student-life-activities">
            {ACTIVITIES.map(activity => (
              <div key={activity.title} className="student-life-activity">
                <div
                  className="student-life-activity__top"
                  style={{ background: activity.bg }}
                  aria-hidden="true"
                >
                  {activity.icon}
                </div>
                <div className="student-life-activity__body">
                  <h3>{activity.title}</h3>
                  <p>{activity.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="section section--alt">
        <div className="container">
          <SectionTitle
            label="School Events"
            title="Annual"
            highlight="Events"
          />

          <ul className="student-life-events">
            {ANNUAL_EVENTS.map(([title, desc]) => (
              <li key={title} className="student-life-events__item">
                <div className="student-life-events__bullet" aria-hidden="true">★</div>
                <div>
                  <strong>{title}:</strong> {desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

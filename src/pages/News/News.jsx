import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { NEWS } from '../../utils/helpers'

import img1 from '../../assets/aaa.jpeg'
import img2 from '../../assets/Event.png'
import img3 from '../../assets/robotics.jpg'

import './News.css'

export default function News() {
  return (
    <div>
      <div className="page-hero">
        <h1>
          News & <span>Events</span>
        </h1>

        <p>
          Stay updated on the latest happenings at Mansoura College
        </p>
      </div>

      <section className="section">
        <div className="container">

          <SectionTitle
            label="Latest Updates"
            title="Latest"
            highlight="News"
          />

          {/* Top Images */}
          <section className="page-gallery-grid">
            <img src={img1} alt="News" />
            <img src={img2} alt="News" />
            <img src={img3} alt="News" />
          </section>

          {/* News Cards */}
          <div className="news-grid">
            {NEWS.map(item => (
              <article
                key={item.title}
                className="news-card"
              >
                <div
                  className="news-card__img"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <div className="news-card__body">
                  <span className="news-card__tag">
                    {item.tag}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <time className="news-card__date">
                    {item.date}
                  </time>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
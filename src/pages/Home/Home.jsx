import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { SCHOOLS, VALUES } from '../../utils/helpers'
import heroImg from '../../assets/images.jfif'
import './Home.css'

// ── Ticker ─────────────────────────────────────────
const TICKER_ITEMS = [
  'Quality Education... By Any Means Necessary',
  'Providing Future Leaders',
  'Where Student Comes First',
  'Achieving Excellence Together',
  'Treat Others As You Want To Be Treated',
  'Motivated Achievers Perform, Learn, Excel',
  'Where Love Is Shown Daily',
]

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__inner">
        {items.map((item, i) => (
          <span key={i}>{i % 2 === 0 ? item : '★'}</span>
        ))}
      </div>
    </div>
  )
}

// ── Stats bar ──────────────────────────────────────
function StatsBar() {
  const stats = [
    { num: '5+', label: 'Schools' },
    { num: '4', label: 'Curricula' },
    { num: '1', label: 'Academy' },
    { num: '∞', label: 'Potential' },
  ]
  return (
    <div className="home-stats">
      {stats.map(({ num, label }) => (
        <div key={label} className="home-stats__item">
          <span className="home-stats__num">{num}</span>
          <span className="home-stats__label">{label}</span>
        </div>
      ))}
    </div>
  )
}

// ── Main page ──────────────────────────────────────
export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero__orb home-hero__orb--1" />
        <div className="home-hero__orb home-hero__orb--2" />
        <div className="home-hero__content">
          <p className="home-hero__eyebrow">Welcome to</p>
          <h1 className="home-hero__title">
            <span className="home-hero__title-highlight">Mansoura College</span>
            <br />Educational Campus
          </h1>
          <p className="home-hero__subtitle">
            One of Egypt's leading international schools, offering American, National,
            British and Modern Language systems — where every student comes first.
          </p>
          <div className="home-hero__btns">
            <Button variant="gold" size="lg" onClick={() => navigate('/admissions')}>
              Explore Schools
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/contact')}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── ABOUT SNAPSHOT ── */}
      <section className="section home-about">
        <div className="container">
          <div className="home-about__grid">
            <div className="home-about__img-wrap">
              <div className="">

                <img
                  src={heroImg}
                  alt="Mansoura College"
                  className="home-about__img"
                />
              </div>
              <p className="home-about__img-caption">Est. Mansoura, Egypt</p>
            </div>
            <div className="home-about__text">
              <SectionTitle
                label="Who We Are"
                title="About"
                highlight="Mansoura College"
              />
              <p>
                Located in the heart of the delta area of Egypt on the Mansoura–Damietta highway,
                Mansoura College is one of the few international schools in Egypt that fully adheres
                to all international standards of education.
              </p>
              <p>
                Students follow either the American system or the National system in high school.
                Our curriculum is strongly enriched by an exceptional character education program.
              </p>
              <p>
                Our academically demanding environment is founded on the belief that every child
                is creative, unique, and capable of achieving outstanding results when given proper
                support and tools.
              </p>
              <StatsBar />
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHOOLS ── */}
      <section className="section section--alt home-schools">
        <div className="container">
          <SectionTitle
            label="Our Schools"
            title="Choose Your"
            highlight="Path"
            sub="Four distinct school systems designed to match every student's learning journey"
            center
          />
          <div className="home-schools__grid">
            {SCHOOLS.map(school => (
              <button
                key={school.abbr}
                className="home-schools__card"
                onClick={() => navigate('/about')}
              >
                <div
                  className="home-schools__badge"
                  style={{ background: school.color }}
                >
                  {school.abbr}
                </div>
                <h3>{school.name}</h3>
                <p>{school.sub}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMY BANNER ── */}
      <section className="home-academy">
        <div className="home-academy__content">
          <h2>Mansoura College Academy</h2>
          <p>
            Mansoura High Institute for Engineering and Technology —
            shaping tomorrow's engineers today.
          </p>
          <div className="home-academy__badge">MCA</div>
          <Button
            href="https://mca.edu.eg"
            target="_blank"
            variant="outline"
          >
            Visit Academy Site
          </Button>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section home-values">
        <div className="container">
          <SectionTitle
            label="Core Principles"
            title="Our"
            highlight="Values"
            sub="The principles that guide every decision we make"
            center
          />
          <div className="home-values__grid">
            {VALUES.map(v => (
              <div key={v.title} className="home-values__card">
                <div className="home-values__icon" aria-hidden="true">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

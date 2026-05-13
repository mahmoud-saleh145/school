import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-badge">MC</span>
            <span className="footer__logo-text">Mansoura College</span>
          </div>
          <p className="footer__tagline">
            One of Egypt's leading international schools — where every student comes first.
          </p>
        </div>

        <div className="footer__links-col">
          <h4>Quick Links</h4>
          <ul>
            {[
              ['/about',       'About MMC'],
              ['/admissions',  'Admissions'],
              ['/stages',      'Academic Stages'],
              ['/student-life','Student Life'],
              ['/news',        'News & Events'],
              ['/contact',     'Contact Us'],
            ].map(([to, label]) => (
              <li key={to}><Link to={to}>{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__links-col">
          <h4>Schools</h4>
          <ul>
            {[
              'Mansoura College',
              'Modern MC',
              'American Division',
              'IGCSE Division',
            ].map(name => (
              <li key={name}><Link to="/about">{name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__contact-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <span className="footer__contact-icon">📍</span>
              Mansoura–Damietta Highway, Mansoura, Egypt
            </li>
            <li>
              <span className="footer__contact-icon">📞</span>
              <a href="tel:+20502588888">+20 50 258 8888</a>
            </li>
            <li>
              <span className="footer__contact-icon">✉️</span>
              <a href="mailto:info@mc.edu.eg">info@mc.edu.eg</a>
            </li>
            <li>
              <span className="footer__contact-icon">🕐</span>
              Sun – Thu: 8:00 AM – 3:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 <span>Mansoura College</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Contact.css'

const CONTACT_INFO = [
  { icon: '📍', label: 'Address', value: 'Educational Campus, Mansoura–Damietta Highway, Mansoura, Egypt' },
  { icon: '📞', label: 'Phone', value: '011123197546 / +20 50 258 8888', href: 'tel:+20502588888' },
  { icon: '✉️', label: 'Email', value: 'info@mc.edu.eg', href: 'mailto:info@mc.edu.eg' },
  { icon: '🕐', label: 'Office Hours', value: 'Sunday – Thursday: 8:00 AM – 3:00 PM' },
]

function Toast({ message, visible }) {
  return (
    <div
      className={`toast${visible ? ' toast--show' : ''}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [toast, setToast] = useState({ message: '', visible: false })

  const showToast = (msg) => {
    setToast({ message: msg, visible: true })
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 3500)
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    if (!name || !email || !subject || !message) {
      showToast('⚠️ Please fill in all fields.')
      return
    }
    showToast("✅ Message sent! We'll get back to you soon.")
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      <div className="page-hero">
        <h1>Get in <span>Touch</span></h1>
        <p>We'd love to hear from you — reach out for inquiries, visits, or admissions</p>
      </div>

      <section className="section section--navy">
        <div className="container">
          <div className="contact-grid">

            {/* Left — contact info + map */}
            <div className="contact-info">
              <SectionTitle
                label="Reach Us"
                title="Contact"
                highlight="Info"
              // light mode handled via class override below
              />

              <ul className="contact-info__list">
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <li key={label} className="contact-info__item">
                    <div className="contact-info__icon" aria-hidden="true">{icon}</div>
                    <div>
                      <strong>{label}</strong>
                      {href
                        ? <a href={href}>{value}</a>
                        : <span>{value}</span>
                      }
                    </div>
                  </li>
                ))}
              </ul>

              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27341.098645496317!2d31.32295217431641!3d31.064194299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79de461985001%3A0xbd9255b0a76ed97c!2sMansoura%20College%20Schools!5e0!3m2!1sen!2seg!4v1767000325781!5m2!1sen!2seg"
                  height="210"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mansoura College location"
                />
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form-wrap">
              <SectionTitle
                label="Write to Us"
                title="Send a"
                highlight="Message"
              />

              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Ahmed Mohamed"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="contact-email">Your Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="ahmed@example.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Admissions Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-form__field">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="contact-form__submit">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}

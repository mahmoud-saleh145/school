import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Gallery.css'

import img1 from '../../assets/Roboticslab.jpg'
import img2 from '../../assets/robot.jpg'
import img3 from '../../assets/PrimeActivity.jpg'
import img4 from '../../assets/Image (2).jfif'
import img5 from '../../assets/secAvtivity.jpg'
import img6 from '../../assets/kg.jpg'
import img7 from '../../assets/School.jpg'
import img8 from '../../assets/sec gradu.jpeg'

const GALLERY_ITEMS = [
  { image: img1, label: 'Robotics Lab' },
  { image: img2, label: 'Robotics Activity' },
  { image: img3, label: 'Primary Activities' },
  { image: img4, label: 'Campus Event' },
  { image: img5, label: 'Secondary Activities' },
  { image: img6, label: 'Kindergarten' },
  { image: img7, label: 'School Building' },
  { image: img8, label: 'Graduation Ceremony' },
]

export default function Gallery() {
  return (
    <div>
      <div className="page-hero">
        <h1>
          MMC <span>Gallery</span>
        </h1>

        <p>A glimpse into campus life, events, and achievements</p>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="Campus Life"
            title="Campus"
            highlight="Highlights"
            sub="Explore our vibrant school community through images of events, facilities, and student achievements."
          />

          <div className="gallery-grid-4">
            {GALLERY_ITEMS.map(({ image, label }) => (
              <img
                key={label}
                src={image}
                alt={label}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
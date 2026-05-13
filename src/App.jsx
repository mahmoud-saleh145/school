import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Stages from './pages/Stages/Stages';
import PreKG from './pages/PreKG/PreKG';
import Primary from './pages/Primary/Primary';
import Preparatory from './pages/Preparatory/Preparatory';
import Secondary from './pages/Secondary/Secondary';
import Admissions from './pages/Admissions/Admissions';
import StudentLife from './pages/StudentLife/StudentLife';
import News from './pages/News/News';
import Quizzes from './pages/Quizzes/Quizzes';
import Tips from './pages/Tips/Tips';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';



// Scroll to top on every route change
function ScrollRestoration() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

// Page-title map — update <title> on navigation
const PAGE_TITLES = {
  '/': 'Home',
  '/about': 'About',
  '/stages': 'Academic Stages',
  '/prekg': 'Pre-KG & Kindergarten',
  '/primary': 'Primary',
  '/preparatory': 'Preparatory',
  '/secondary': 'Secondary',
  '/admissions': 'Admissions',
  '/student-life': 'Student Life',
  '/news': 'News & Events',
  '/quizzes': 'Quizzes',
  '/tips': 'Tips & Resources',
  '/gallery': 'Gallery',
  '/contact': 'Contact',
}

function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const label = PAGE_TITLES[pathname] ?? ''
    document.title = label
      ? `${label} — Mansoura College`
      : 'Mansoura College'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <PageTitle />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stages" element={<Stages />} />
          <Route path="/prekg" element={<PreKG />} />
          <Route path="/primary" element={<Primary />} />
          <Route path="/preparatory" element={<Preparatory />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/news" element={<News />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all → Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}

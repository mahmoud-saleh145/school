import useScrollTop from '../../hooks/useScrollTop'

export default function ScrollToTop() {
  const visible = useScrollTop()

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`scroll-top${visible ? ' scroll-top--visible' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

import './Button.css'

/**
 * Button
 * variant: 'gold' | 'navy' | 'outline'
 * size:    'md' (default) | 'lg'
 * as:      'button' (default) | 'a'
 */
export default function Button({
  children,
  variant = 'gold',
  size = 'md',
  onClick,
  href,
  target,
  className = '',
  type = 'button',
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

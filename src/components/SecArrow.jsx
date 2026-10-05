// Mobile-only "scroll to next section" arrow.
export default function SecArrow({ to, label, onDark = false, style }) {
  return (
    <div className={`sec-arrow${onDark ? ' on-dark' : ''}`} style={style}>
      <a href={to} aria-label={label}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </div>
  )
}

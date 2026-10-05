// Small botanical ornament (also used as the loader divider).
export function BotMotif({ width }) {
  return (
    <svg viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg" width={width}>
      <circle cx="40" cy="15" r="5" fill="#C8A96E" opacity="0.75" />
      <ellipse cx="24" cy="11" rx="4" ry="7.5" fill="#8FA889" opacity="0.65" transform="rotate(-22 24 11)" />
      <ellipse cx="56" cy="11" rx="4" ry="7.5" fill="#8FA889" opacity="0.65" transform="rotate(22 56 11)" />
      <ellipse cx="13" cy="19" rx="2.8" ry="6" fill="#C9927A" opacity="0.5" transform="rotate(-38 13 19)" />
      <ellipse cx="67" cy="19" rx="2.8" ry="6" fill="#C9927A" opacity="0.5" transform="rotate(38 67 19)" />
    </svg>
  )
}

export default function BotDivider() {
  return (
    <div className="bot-divider">
      <div className="bot-line" />
      <BotMotif />
      <div className="bot-line" />
    </div>
  )
}

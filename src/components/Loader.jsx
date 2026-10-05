import { useEffect, useRef, useState } from 'react'
import { BotMotif } from './BotDivider'

// Opening invitation card; tap (or wait 6.5s) to dissolve into the page.
export default function Loader({ onDismiss }) {
  const [exit, setExit] = useState(false)
  const [gone, setGone] = useState(false)
  const done = useRef(false)

  const dismiss = () => {
    if (done.current) return
    done.current = true
    setExit(true)
    onDismiss()
    setTimeout(() => setGone(true), 1100)
  }

  useEffect(() => {
    const t = setTimeout(dismiss, 6500)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      id="bismillah-loader"
      className={`${exit ? 'exit' : ''}${gone ? ' gone' : ''}`}
      role="dialog"
      aria-label="Opening invitation"
      aria-modal="true"
      onClick={dismiss}
      onTouchStart={dismiss}
    >
      <div className="ld-vignette" />
      <div className="ld-watermark" aria-hidden="true">
        <svg viewBox="0 0 700 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="140" cy="210" rx="38" ry="110" fill="#3D5A3E" opacity="0.07" transform="rotate(-30 140 210)" />
          <ellipse cx="560" cy="210" rx="38" ry="110" fill="#3D5A3E" opacity="0.07" transform="rotate(30 560 210)" />
          <ellipse cx="80" cy="100" rx="22" ry="68" fill="#5A7E5C" opacity="0.06" transform="rotate(-48 80 100)" />
          <ellipse cx="620" cy="100" rx="22" ry="68" fill="#5A7E5C" opacity="0.06" transform="rotate(48 620 100)" />
          <ellipse cx="95" cy="330" rx="20" ry="58" fill="#C9927A" opacity="0.05" transform="rotate(-20 95 330)" />
          <ellipse cx="605" cy="330" rx="20" ry="58" fill="#C9927A" opacity="0.05" transform="rotate(20 605 330)" />
          <circle cx="350" cy="210" r="8" fill="#C8A96E" opacity="0.12" />
          <line x1="350" y1="100" x2="350" y2="320" stroke="#8FA889" strokeWidth="0.8" opacity="0.12" />
          <line x1="200" y1="210" x2="500" y2="210" stroke="#8FA889" strokeWidth="0.8" opacity="0.12" />
        </svg>
      </div>

      <div className="ld-envelope">
        <div className="ld-card">
          <div className="ld-card-bar" />
          <p className="ld-eyebrow">In the name of Allah</p>
          <p className="ld-bismillah">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</p>
          <div className="ld-divider" aria-hidden="true">
            <div className="ld-divider-line" />
            <BotMotif width="72" />
            <div className="ld-divider-line" />
          </div>
          <div className="ld-names">
            Fathima Thanveera
            <span className="ld-amp">&amp;</span>
            Mubashir Rasin
          </div>
          <p className="ld-date">Nikkah &nbsp;·&nbsp; July 02, 2026</p>
          <div className="ld-card-bar-btm" />
        </div>

        <div className="ld-tap">
          <p className="ld-tap-text">Tap to open your invitation</p>
          <svg className="ld-tap-chevron" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1 1 L9 9 L17 1" stroke="#8FA889" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

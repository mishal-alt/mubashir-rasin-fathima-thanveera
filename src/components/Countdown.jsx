import { useEffect, useState } from 'react'
import { WEDDING_ISO } from '../data'
import SecArrow from './SecArrow'

const pad = (n) => String(n).padStart(2, '0')
const wedding = new Date(WEDDING_ISO)

export default function Countdown() {
  const [t, setT] = useState({ d: '00', h: '00', m: '00', s: '00' })
  useEffect(() => {
    const tick = () => {
      const diff = wedding - Date.now()
      if (diff <= 0) return // (original keeps the last shown values once the date has passed)
      setT({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <section id="countdown">
      <p className="cd-label">Counting down to the blessed day</p>
      <div className="cd-grid">
        <div className="cd-item"><span className="cd-num" id="cd-days">{t.d}</span><span className="cd-unit">Days</span></div>
        <div className="cd-item"><span className="cd-num" id="cd-hours">{t.h}</span><span className="cd-unit">Hours</span></div>
        <div className="cd-item"><span className="cd-num" id="cd-mins">{t.m}</span><span className="cd-unit">Minutes</span></div>
        <div className="cd-item"><span className="cd-num" id="cd-secs">{t.s}</span><span className="cd-unit">Seconds</span></div>
      </div>
      <SecArrow to="#invitation" label="Scroll to invitation" onDark />
    </section>
  )
}

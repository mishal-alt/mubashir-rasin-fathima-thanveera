import { useEffect, useState } from 'react'
import { nikkah as n } from './data'
import Loader from './components/Loader'
import MusicButton from './components/MusicButton'
import Countdown from './components/Countdown'
import BotDivider from './components/BotDivider'
import SecArrow from './components/SecArrow'
import Credit from './components/Credit'

export default function App() {
  const [revealed, setRevealed] = useState(false)

  const onDismiss = () => {
    document.body.classList.remove('loading')
    setRevealed(true)
  }

  // Scroll reveal for .reveal blocks.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.1 },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Loader onDismiss={onDismiss} />
      <MusicButton />
      <div id="page-wrap" className={revealed ? 'revealed' : ''}>
        {/* HERO */}
        <section id="hero">
          <div className="hero-bg">
            <img src="/hero.jpg" alt="Fathima Thanveera & Mubashir Rasin" />
          </div>
          <div className="hero-content reveal">
            <p className="hero-eyebrow">Kindly join us for the Nikkah of</p>
            <div className="hero-names">
              {n.bride.name}
              <span className="hero-amp">&amp;</span>
              {n.groom.name}
            </div>
            <p className="hero-date">{n.dateLabel} &nbsp;·&nbsp; {n.timeLabel}</p>
            <a href="#invitation" className="hero-cta">View Details</a>
          </div>
        </section>

        <Countdown />

        {/* INVITATION */}
        <section id="invitation">
          <div className="section reveal">
            <p className="eyebrow">With the blessings of Allah</p>
            <h2 className="sec-title">You Are Invited</h2>
            <BotDivider />
            <p className="invite-text">
              With immense gratitude to Allah &#x2728;, we warmly invite you and your family<br />
              to witness and celebrate this beautiful new beginning.<br /><br />
              Your presence, duas, and blessings will make this occasion<br />
              truly special for us.
            </p>
          </div>
          <SecArrow to="#couple" label="Scroll to the couple" />
        </section>

        {/* COUPLE */}
        <section id="couple">
          <div className="section reveal">
            <p className="eyebrow">A beautiful new beginning</p>
            <h2 className="sec-title">The Couple</h2>
            <p className="sec-sub">Brought together by faith, family, and love.</p>
            <div className="couple-grid">
              {[['Bride', n.bride], ['Groom', n.groom]].map(([role, p]) => (
                <div className="person-card reveal" key={role}>
                  <div className="person-img">
                    <img src={p.photo} alt={p.name} />
                  </div>
                  <span className="person-role">{role}</span>
                  <h3 className="person-name">{p.name}</h3>
                  <p className="person-lineage">
                    {p.lineage[0]}<br />
                    {p.lineage[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <SecArrow to="#events" label="Scroll to events" />
        </section>

        {/* EVENTS */}
        <section id="events">
          <div className="events-wrap reveal">
            <h2 className="sec-title">Mark your calendar</h2>
            <p className="sec-sub">Join us as we celebrate this cherished occasion.</p>
            <div className="event-card reveal">
              <div className="ev-name">Nikkah</div>
              <div className="ev-rows">
                <div className="ev-row"><span className="ev-icon">&#x1F4C5;</span><span className="ev-text">{n.eventDate}</span></div>
                <div className="ev-row"><span className="ev-icon">&#x23F0;</span><span className="ev-text">{n.timeLabel}</span></div>
                <div className="ev-row">
                  <span className="ev-icon">&#x1F3E2;</span>
                  <span className="ev-text">{n.venueLines[0]}<br />{n.venueLines[1]}<br />{n.venueLines[2]}</span>
                </div>
              </div>
              <div className="map-container">
                <img src="/map.jpg" alt="Orlando City Convention Centre location map" />
              </div>
              <a href={n.mapsUrl} target="_blank" rel="noopener noreferrer" className="map-open-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Open in Google Maps
              </a>
            </div>
            <SecArrow to="#footer" label="Scroll to footer" style={{ marginTop: '1.2rem' }} />
          </div>
        </section>

        {/* FOOTER */}
        <footer id="footer">
          <div className="footer-names">{n.groom.name} &amp; {n.bride.name}</div>
          <p className="footer-sub">{n.regards}</p>
          <p className="footer-copy">Made with love &amp; duas &nbsp;✨</p>
          <Credit />
        </footer>
      </div>
    </>
  )
}

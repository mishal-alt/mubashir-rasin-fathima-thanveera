import { useEffect, useRef, useState } from 'react'

// Background music: starts on the first interaction, bottom-left mute toggle.
export default function MusicButton() {
  const audio = useRef(null)
  const started = useRef(false)
  const [playing, setPlaying] = useState(true) // icon shows "sound" until paused (as in the original)

  useEffect(() => {
    const a = audio.current
    const start = () => {
      if (started.current) return
      a.volume = 0.45
      a.play().catch(() => {})
      started.current = true
    }
    const onLoad = () => {
      a.volume = 0.45
      a.play().then(() => { started.current = true }).catch(() => {})
    }
    document.addEventListener('click', start, { once: true })
    document.addEventListener('scroll', start, { once: true })
    document.addEventListener('touchstart', start, { once: true })
    if (document.readyState === 'complete') onLoad()
    else window.addEventListener('load', onLoad)
    return () => {
      document.removeEventListener('click', start)
      document.removeEventListener('scroll', start)
      document.removeEventListener('touchstart', start)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  const toggle = () => {
    const a = audio.current
    if (!started.current) {
      a.volume = 0.45
      a.play().catch(() => {})
      started.current = true
    }
    if (a.paused) {
      a.play()
      setPlaying(true)
    } else {
      a.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <button id="mute-btn" aria-label="Toggle music" title="Toggle music" onClick={toggle}>
        <svg id="icon-sound" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: playing ? '' : 'none' }}>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <svg id="icon-muted" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: playing ? 'none' : '' }}>
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      </button>
      <audio ref={audio} id="bg-music" loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}

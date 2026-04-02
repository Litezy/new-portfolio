import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import image from '../../../assets/belbeing.jpeg';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/work', label: 'Work',more:'work' },
  { path: '/expertise', label: 'Expertise' },
  { path: '/about', label: 'About' },
  { path: '/connect', label: 'Connect' }
]

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return
      navRef.current.style.borderBottomColor =
        window.scrollY > 20 ? '#2e2e2e' : '#252525'
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed  top-0 left-0 right-0 z-1000 flex items-center justify-between px-6 md:px-10 h-18 border-b border-[#252525] bg-[rgba(13,13,13,0.95)] backdrop-blur-xl"
        style={{ transition: 'border-color 0.3s' }}
      >
        {/* ── Logo ── */}
        <button
          onClick={() => navigate('/')}
          className="font-mono text-[13px] font-bold text-aqua tracking-[0.04em] cursor-pointer logo-glow bg-transparent border-none uppercase"
        >
          <img src={image} className='w-10 h-10 rounded-full object-contain' alt="" />
        </button>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map(({ path, label,more }) => {
            const isActive = location.pathname === path || location.pathname.includes(more!)
            return (
              <li key={path}>
                <button
                  onClick={() => navigate(path)}
                  className={`
                    font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200
                    relative pb-1 bg-transparent border-none cursor-pointer
                    ${isActive ? 'text-text' : 'text-[#666] hover:text-text'}
                  `}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-aqua" />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* ── Desktop CTA ── */}
        <button
          onClick={() => navigate('/connect')}
          className="hidden md:block font-mono text-[11px] tracking-widest uppercase text-bg bg-aqua border-none px-5 py-2.5 cursor-pointer transition-all duration-200 hover:bg-aqua/80 hover:-translate-y-px"
        >
          Hire Me
        </button>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setOpen(v => !v)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#f0f0f0] transition-all duration-200 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`
        fixed top-18 left-0 right-0 z-[999] bg-[rgba(13,13,13,0.98)] backdrop-blur-xl
        border-b border-[#252525] overflow-hidden transition-all duration-300
        ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ path, label }) => {
            const isActive = location.pathname === path
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`
                  font-mono text-[12px] tracking-[0.15em] uppercase text-left
                  py-3 px-3 border-b border-[#1a1a1a] bg-transparent border-l-0 border-r-0 border-t-0
                  cursor-pointer transition-colors duration-200
                  ${isActive ? 'text-aqua' : 'text-[#666] hover:text-text'}
                `}
              >
                {label}
              </button>
            )
          })}
          <button
            onClick={() => navigate('/connect')}
            className="font-mono text-[11px] tracking-widest uppercase text-[#0d0d0d] bg-aqua border-none px-5 py-3 cursor-pointer mt-3"
          >
            Hire Me
          </button>
        </div>
      </div>
    </>
  )
}
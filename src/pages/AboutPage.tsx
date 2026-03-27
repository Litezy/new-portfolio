import { useEffect, useRef } from 'react'
import { animate } from 'popmotion'
import Footer from '../components/layout/ui/Footer'
import { arsenalChips } from '../data'
import Layout from '../components/layout/Layout'

export default function AboutPage() {
  const imgRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (imgRef.current) {
  //     imgRef.current.style.opacity = '0'
  //     imgRef.current.style.transform = 'translateX(-32px)'
  //     animate({
  //       from: 0, to: 1,
  //       duration: 900,
  //       ease: [0.22, 1, 0.36, 1] as any,
  //       onUpdate: v => {
  //         if (!imgRef.current) return
  //         imgRef.current.style.opacity = String(v)
  //         imgRef.current.style.transform = `translateX(${(1 - v) * -32}px)`
  //       },
  //     })
  //   }

  //   if (rightRef.current) {
  //     const children = rightRef.current.querySelectorAll('.anim-child')
  //     children.forEach((el, ) => {
  //       const htmlEl = el as HTMLElement
  //       htmlEl.style.opacity = '0'
  //       htmlEl.style.transform = 'translateY(24px)'
  //       animate({
  //         from: 0, to: 1,
  //         duration: 700,
  //       //   delay: 150 + i * 80,
  //         ease: [0.22, 1, 0.36, 1] as any,
  //         onUpdate: v => {
  //           htmlEl.style.opacity = String(v)
  //           htmlEl.style.transform = `translateY(${(1 - v) * 24}px)`
  //         },
  //       })
  //     })
  //   }
  // }, [])

  return (
    <Layout>
      <div id="page-about">
        <div className="grid min-h-[calc(100vh-64px)] max-[900px]:grid-cols-1" style={{ gridTemplateColumns: '420px 1fr' }}>
          {/* Left — portrait */}
          <div className="border-r border-[#252525] max-[900px]:border-r-0">
            <div ref={imgRef} className="w-full" style={{ aspectRatio: '3/4' }}>
              <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center relative">
                {/* Corner deco */}
                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-pink" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-pink" />

                {/* SVG Avatar */}
                <svg width="300" height="380" viewBox="0 0 300 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="150" cy="340" rx="120" ry="60" fill="#1a1a1a" />
                  <rect x="80" y="260" width="140" height="120" rx="4" fill="#151515" />
                  <rect x="132" y="235" width="36" height="40" fill="#333" />
                  <ellipse cx="150" cy="210" rx="72" ry="80" fill="#333" />
                  <ellipse cx="150" cy="145" rx="72" ry="45" fill="#222" />
                  <rect x="78" y="145" width="22" height="50" fill="#222" rx="4" />
                  <rect x="200" y="145" width="22" height="50" fill="#222" rx="4" />
                  <path d="M100 155 Q150 130 200 155" stroke="#1a1a1a" strokeWidth="3" fill="none" />
                  <path d="M95 170 Q150 140 205 170" stroke="#1a1a1a" strokeWidth="2" fill="none" />
                  <ellipse cx="125" cy="205" rx="15" ry="11" fill="#222" />
                  <ellipse cx="175" cy="205" rx="15" ry="11" fill="#222" />
                  <rect x="108" y="196" width="34" height="20" rx="8" fill="none" stroke="#444" strokeWidth="2.5" />
                  <rect x="158" y="196" width="34" height="20" rx="8" fill="none" stroke="#444" strokeWidth="2.5" />
                  <line x1="142" y1="206" x2="158" y2="206" stroke="#444" strokeWidth="2.5" />
                  <line x1="96" y1="206" x2="108" y2="206" stroke="#444" strokeWidth="2.5" />
                  <line x1="192" y1="206" x2="204" y2="206" stroke="#444" strokeWidth="2.5" />
                  <circle cx="125" cy="205" r="6" fill="#1a1a1a" />
                  <circle cx="175" cy="205" r="6" fill="#1a1a1a" />
                  <circle cx="127" cy="203" r="2" fill="#555" />
                  <circle cx="177" cy="203" r="2" fill="#555" />
                  <path d="M148 215 Q145 228 140 232 Q150 236 160 232 Q155 228 152 215" fill="#2e2e2e" />
                  <path d="M136 248 Q150 256 164 248" stroke="#2a2a2a" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M120 270 L150 290 L180 270" stroke="#222" strokeWidth="1.5" fill="none" />
                </svg>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2">
              {[
                { num: '08+', label: 'Years Exp' },
                { num: '42', label: 'Deployments' },
              ].map(({ num, label }) => (
                <div key={label} className="p-7 px-8 border-t border-[#252525] border-r last:border-r-0">
                  <div className="font-['Bebas_Neue'] text-[48px] text-text leading-none mb-1">
                    {num.replace('+', '')}<span className="text-pink">{num.includes('+') ? '+' : ''}</span>
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.15em] text-[#555] uppercase">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div ref={rightRef} className="p-[60px] overflow-y-auto max-[900px]:px-6 max-[900px]:py-8">
            <div className="anim-child font-mono text-[9px] tracking-[0.2em] text-pink uppercase mb-4">THE ARCHITECT</div>
            <h1 className="anim-child font-['Bebas_Neue'] text-[clamp(52px,6vw,84px)] leading-[0.9] mb-8">
              ENGINEERING<br />
              <span className="text-pink italic">DIGITAL VOIDS.</span>
            </h1>

            <p className="anim-child text-[15px] leading-[1.75] text-[#888] mb-4">
              I specialize in building high-performance decentralized systems and immersive web experiences. My approach blends the structural discipline of traditional engineering with the fluid speed of modern Web3 protocols.
            </p>
            <p className="anim-child text-[15px] leading-[1.75] text-[#888] mb-4">
              Currently focused on <strong className="text-text font-medium">Kinetic Architectures</strong> — systems that aren't just functional, but move and scale with the velocity of their users. I believe code should be as beautiful as it is performant, following a philosophy of surgical precision and minimalist complexity.
            </p>

            <div className="anim-child font-mono text-[10px] tracking-[0.15em] uppercase text-[#888] mt-10 mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#888] inline-block" />
              TECHNICAL ARSENAL
            </div>

            <div className="anim-child flex flex-wrap gap-2 mb-10">
              {arsenalChips.map(chip => (
                <div
                  key={chip}
                  className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#888] border border-[#2e2e2e] px-3.5 py-2 flex items-center gap-1.5 cursor-default transition-all duration-200 hover:border-pink hover:text-text"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d78] flex-shrink-0" />
                  {chip}
                </div>
              ))}
            </div>

            <div className="anim-child flex items-center gap-8 flex-wrap">
              <button className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#0d0d0d] bg-[#ff2d78] border-none px-7 py-4 cursor-pointer transition-all duration-200 hover:bg-[#f0f0f0] hover:-translate-y-0.5 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M3 9l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                DOWNLOAD RESUME.PDF
              </button>
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-[#888]">
                <span className="status-dot" />
                AVAILABLE FOR HIRE
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
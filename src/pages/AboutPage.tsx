import { arsenalChips } from '../data'
import Layout from '../components/layout/Layout'
import belBeing from '../assets/belbeing.jpeg'
import { usePageAnimate } from '../hooks/usePageAnimate'

export default function AboutPage() {
  const { imgRef, rightRef, statsRef } = usePageAnimate()



  return (
    <Layout>
      <div id="page-about">
        <div
          className="grid min-h-[calc(100vh-64px)]"
          style={{ gridTemplateColumns: 'min(420px, 100%) 1fr' }}
        >
          {/* Left — portrait */}
          <div className="border-r border-[#252525] md:border-r border-r-0">

            {/* Image */}
            <div ref={imgRef} className="w-full" style={{ aspectRatio: '3/4' }}>
              <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-pink" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-pink" />
                <img
                  src={belBeing}
                  alt="belziee"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2">
              {[
                { num: '04+', label: 'Years Exp' },
                { num: '30+', label: 'Deployments' },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="p-5 md:p-7 md:px-8 border-t border-[#252525] border-r last:border-r-0"
                >
                  <div className="font-['Bebas_Neue'] text-[36px] md:text-[48px] text-text leading-none mb-1">
                    {num.replace('+', '')}
                    <span className="text-pink">{num.includes('+') ? '+' : ''}</span>
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.15em] text-[#555] uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div
            ref={rightRef}
            className="p-6 md:p-[60px] overflow-y-auto col-span-full md:col-span-1"
          >
            <div className="anim-child font-mono text-[9px] tracking-[0.2em] text-pink uppercase mb-4">
              THE ARCHITECT
            </div>

            <h1 className="anim-child font-['Bebas_Neue'] text-[clamp(40px,8vw,84px)] leading-[0.9] mb-6 md:mb-8">
              Bethel{' '}
              <span className="text-pink">Nnadi.</span>
            </h1>

            <p className="anim-child text-[14px] md:text-[15px] leading-[1.75] text-[#888] mb-4">
              I specialize in building high-performance decentralized systems and
              immersive web experiences. My approach blends the structural discipline
              of traditional engineering with the fluid speed of modern Web3 protocols.
            </p>

            <p className="anim-child text-[14px] md:text-[15px] leading-[1.75] text-[#888] mb-4">
              Currently focused on{' '}
              <strong className="text-text font-medium">Kinetic Architectures</strong>{' '}
              — systems that aren't just functional, but move and scale with the
              velocity of their users. I believe code should be as beautiful as it is
              performant, following a philosophy of surgical precision and minimalist
              complexity.
            </p>

            <div className="anim-child font-mono text-[10px] tracking-[0.15em] uppercase text-[#888] mt-8 md:mt-10 mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#888] inline-block" />
              TECHNICAL ARSENAL
            </div>

            <div className="anim-child flex flex-wrap gap-2 mb-8 md:mb-10">
              {arsenalChips.map((chip) => (
                <div
                  key={chip}
                  className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#888] border border-[#2e2e2e] px-3.5 py-2 flex items-center gap-1.5 cursor-default transition-all duration-200 hover:border-pink hover:text-text"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />
                  {chip}
                </div>
              ))}
            </div>

            <div className="anim-child flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 flex-wrap">
              <button className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#0d0d0d] bg-pink border-none px-7 py-4 cursor-pointer transition-all duration-200 hover:bg-pink/80 hover:-translate-y-0.5 flex items-center gap-2 w-full sm:w-auto justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1v8M3 9l4 4 4-4M1 13h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
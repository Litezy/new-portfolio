import { useEffect, useRef, useState } from 'react'
import { animate } from 'popmotion'
import Footer from '../components/layout/ui/Footer'
import Layout from '../components/layout/Layout'

export default function ConnectPage() {
  const leftRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [btnState, setBtnState] = useState<'idle' | 'sending' | 'done'>('idle')

  // useEffect(() => {
  //   if (leftRef.current) {
  //     const children = leftRef.current.querySelectorAll('.anim-child')
  //     children.forEach((el, ) => {
  //       const htmlEl = el as HTMLElement
  //       htmlEl.style.opacity = '0'
  //       htmlEl.style.transform = 'translateY(24px)'
  //       animate({
  //         from: 0, to: 1,
  //         duration: 700,
  //       //   delay: i * 80,
  //         ease: [0.22, 1, 0.36, 1] as any,
  //         onUpdate: v => {
  //           htmlEl.style.opacity = String(v)
  //           htmlEl.style.transform = `translateY(${(1 - v) * 24}px)`
  //         },
  //       })
  //     })
  //   }
  //   if (formRef.current) {
  //     formRef.current.style.opacity = '0'
  //     formRef.current.style.transform = 'translateX(32px)'
  //     animate({
  //       from: 0, to: 1,
  //       duration: 800,
  //       // delay: 200,
  //       ease: [0.22, 1, 0.36, 1] as any,
  //       onUpdate: v => {
  //         if (!formRef.current) return
  //         formRef.current.style.opacity = String(v)
  //         formRef.current.style.transform = `translateX(${(1 - v) * 32}px)`
  //       },
  //     })
  //   }
  // }, [])

  const handleSubmit = () => {
    if (btnState !== 'idle') return
    setBtnState('sending')
    setTimeout(() => {
      setBtnState('done')
      setTimeout(() => setBtnState('idle'), 2500)
    }, 1800)
  }

  const channelIcons = [
    <svg key="email" width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" /><path d="M2 6l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    <svg key="web" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2a7 7 0 100 14A7 7 0 009 2z" stroke="currentColor" strokeWidth="1.5" /><path d="M2.5 7h13M2.5 11h13M9 2C7.5 5 7 7.5 7 9s.5 4 2 7M9 2c1.5 3 2 5.5 2 7s-.5 4-2 7" stroke="currentColor" strokeWidth="1.5" /></svg>,
    <svg key="time" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" /><path d="M9 6v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  ]

  return (
    <Layout>
      <div id="page-connect">
        <div className="grid min-h-[calc(100vh-64px)] max-[900px]:grid-cols-1" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {/* Left */}
          <div ref={leftRef} className="px-10 py-[60px] border-r border-[#252525] flex flex-col justify-between max-[900px]:border-r-0">
            <div>
              <div className="anim-child font-mono text-[10px] tracking-[0.2em] text-[#555] uppercase mb-4 flex items-center gap-3">
                GET IN TOUCH
                <span className="inline-block w-[60px] h-px bg-[#2e2e2e]" />
              </div>
              <h1 className="anim-child font-['Bebas_Neue'] text-[clamp(52px,6vw,88px)] leading-[0.9] mb-6">
                LET'S BUILD THE<br />
                <span className="text-pink">VOID</span> TOGETHER.
              </h1>
              <p className="anim-child text-[15px] text-[#888] leading-[1.7] max-w-[380px] mb-12">
                High-precision engineering for the next generation of decentralized systems. Direct access for architectural inquiries.
              </p>

              <div className="anim-child font-mono text-[9px] tracking-[0.2em] text-[#555] uppercase mb-4">ENCRYPTED CHANNELS</div>
              <div className="anim-child flex gap-3">
                {channelIcons.map((icon, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 border border-[#2e2e2e] flex items-center justify-center cursor-pointer text-[#888] transition-all duration-200 hover:border-pink hover:bg-[rgba(255,45,120,0.15)] hover:text-pink hover:-translate-y-0.5"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="anim-child flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-[#555] mt-12">
              <span className="status-dot" />
              AVAILABLE FOR WORK
            </div>
          </div>

          {/* Right — form */}
          <div className="px-10 py-[60px] flex items-start justify-center">
            <div
              ref={formRef}
              className="w-full max-w-[480px] bg-[#1a1a1a] border border-[#252525] p-10"
            >
              {/* Field 01 */}
              <div className="mb-6">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#555] mb-2 flex gap-2">
                  <span className="text-pink">01</span> / FULL NAME
                </div>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#181818] border border-[#2e2e2e] text-text font-['DM_Sans'] text-sm px-4 py-3 outline-none transition-all duration-200 placeholder:text-[#555] focus:border-pink focus:shadow-[0_0_0_1px_rgba(255,45,120,0.1)_inset]"
                />
              </div>

              {/* Field 02 */}
              <div className="mb-6">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#555] mb-2 flex gap-2">
                  <span className="text-pink">02</span> / EMAIL ADDRESS
                </div>
                <input
                  type="email"
                  placeholder="j.doe@proton.me"
                  className="w-full bg-[#181818] border border-[#2e2e2e] text-text font-['DM_Sans'] text-sm px-4 py-3 outline-none transition-all duration-200 placeholder:text-[#555] focus:border-pink focus:shadow-[0_0_0_1px_rgba(255,45,120,0.1)_inset]"
                />
              </div>

              {/* Field 03 */}
              <div className="mb-6">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[#555] mb-2 flex gap-2">
                  <span className="text-pink">03</span> / MESSAGE
                </div>
                <textarea
                  placeholder="Briefly describe your protocol or project requirements..."
                  className="w-full bg-[#181818] border border-[#2e2e2e] text-text font-['DM_Sans'] text-sm px-4 py-3 outline-none transition-all duration-200 placeholder:text-[#555] focus:border-pink focus:shadow-[0_0_0_1px_rgba(255,45,120,0.1)_inset] resize-none min-h-[120px]"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={btnState !== 'idle'}
                className={`
                w-full font-mono text-[11px] tracking-[0.14em] uppercase px-0 py-[18px] cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-200 mt-2 border-none
                ${btnState === 'idle' ? 'bg-pink text-[#0d0d0d] hover:bg-[#f0f0f0] hover:-translate-y-px' : ''}
                ${btnState === 'sending' ? 'bg-[#181818] text-pink border border-pink' : ''}
                ${btnState === 'done' ? 'bg-[#1a2e1a] text-[#2ecc71] border border-[#2ecc71]' : ''}
              `}
              >
                {btnState === 'idle' && (
                  <>
                    EXECUTE CONNECTION
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </>
                )}
                {btnState === 'sending' && 'TRANSMITTING...'}
                {btnState === 'done' && '✓ CONNECTION ESTABLISHED'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
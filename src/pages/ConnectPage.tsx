import { useRef, useState } from 'react'
import Layout from '../components/layout/Layout'

export default function ConnectPage() {
  const leftRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [btnState, setBtnState] = useState<'idle' | 'sending' | 'done'>('idle')

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
      <div id="page-connect" className="bg-bg min-h-screen">

        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-64px)]">

          {/* LEFT */}
          <div
            ref={leftRef}
            className="
              px-6 md:px-10 lg:px-16
              py-12 md:py-16
              border-b lg:border-b-0 lg:border-r border-border
              flex flex-col justify-between
            "
          >
            <div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-text-muted uppercase mb-4 flex items-center gap-3">
                GET IN TOUCH
                <span className="w-10 md:w-[60px] h-px bg-border2" />
              </div>

              <h1 className="font-display text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[0.9] mb-6">
                LET'S BUILD THE <br />
                <span className="text-pink">VOID</span> TOGETHER.
              </h1>

              <p className="text-[14px] md:text-[15px] text-text-dim leading-[1.7] max-w-[420px] mb-10">
                High-precision engineering for the next generation of decentralized systems.
                Direct access for architectural inquiries.
              </p>

              <div className="font-mono text-[9px] tracking-[0.2em] text-text-muted uppercase mb-4">
                ENCRYPTED CHANNELS
              </div>

              <div className="flex flex-wrap gap-3">
                {channelIcons.map((icon, i) => (
                  <div
                    key={i}
                    className="
                      w-10 h-10 md:w-11 md:h-11
                      border border-border2
                      flex items-center justify-center
                      text-text-muted
                      transition-all duration-200
                      hover:border-pink hover:bg-pink/20 hover:text-pink
                    "
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] uppercase text-text-muted mt-10 lg:mt-0">
              <span className="status-dot" />
              AVAILABLE FOR WORK
            </div>
          </div>

          {/* RIGHT */}
          <div className="px-6 md:px-10 lg:px-16 py-12 md:py-16 flex items-start justify-center">
            <div
              ref={formRef}
              className="
                w-full max-w-[520px]
                bg-surface border border-border
                p-6 md:p-8 lg:p-10
              "
            >
              {/* INPUT FIELD COMPONENT STYLE */}
              {[
                { label: 'FULL NAME', type: 'text', placeholder: 'John Doe' },
                { label: 'EMAIL ADDRESS', type: 'email', placeholder: 'j.doe@proton.me' },
              ].map((field, i) => (
                <div key={field.label} className="mb-6">
                  <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-text-muted mb-2 flex gap-2">
                    <span className="text-pink">{String(i + 1).padStart(2, '0')}</span>
                    / {field.label}
                  </div>

                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="
                      w-full bg-bg3 border border-border2 text-text
                      text-sm px-4 py-3 outline-none
                      placeholder:text-text-muted
                      focus:border-pink
                      focus:shadow-[0_0_0_1px_rgba(255,45,120,0.1)_inset]
                    "
                  />
                </div>
              ))}

              {/* MESSAGE */}
              <div className="mb-6">
                <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-text-muted mb-2 flex gap-2">
                  <span className="text-pink">03</span> / MESSAGE
                </div>

                <textarea
                  placeholder="Briefly describe your protocol or project requirements..."
                  className="
                    w-full bg-bg3 border border-border2 text-text
                    text-sm px-4 py-3 outline-none
                    placeholder:text-text-muted
                    focus:border-pink
                    focus:shadow-[0_0_0_1px_rgba(255,45,120,0.1)_inset]
                    resize-none min-h-[120px]
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={btnState !== 'idle'}
                className={`
                  w-full font-mono text-[11px] tracking-[0.14em] uppercase py-4 flex items-center justify-center gap-2 transition-all duration-200
                  ${btnState === 'idle' ? 'bg-pink text-bg hover:opacity-90' : ''}
                  ${btnState === 'sending' ? 'bg-bg3 text-pink border border-pink' : ''}
                  ${btnState === 'done' ? 'bg-[#1a2e1a] text-[#2ecc71] border border-[#2ecc71]' : ''}
                `}
              >
                {btnState === 'idle' && 'EXECUTE CONNECTION'}
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
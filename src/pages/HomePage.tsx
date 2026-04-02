import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import BentoSection from '../components/BentoSection'
import { usePageAnimate } from '../hooks/usePageAnimate'

const STACK_TAGS = [
  'SOLIDITY',
  'WAGMI',
  'REACT',
  'NEXTJS',
  'TYPESCRIPT',
  'NESTJS',
  'PRISMA',
  'POSTGRES',
  'NODEJS',
  'EXPRESS',
  'MYSQL',
  'REST API',
  'WEBGL'
]

const NODES = [
  { key: 'WALLET', val: '0xBe1z...4B4', cls: 'text-text' },
  { key: 'NETWORK', val: 'Lisk Sepolia', cls: 'text-aqua' },
  { key: 'STATUS', val: 'AVAILABLE', cls: 'text-[#2ecc71]' },
]

export default function HomePage() {
  const {rightRef} = usePageAnimate()
  const navigate = useNavigate()

  return (
    <Layout>
      <div ref={rightRef} className="relative overflow-hidden bg-bg">

        {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
        <section className=" relative mb-20 flex flex-col">

          {/* main content row */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 ">

            {/* ── LEFT ── */}
            <div className="flex flex-col anim-child justify-center">

              {/* eyebrow */}
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-px bg-aqua" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-aqua uppercase">
                  Fullstack · Blockchain Engineer
                </span>
              </div>

              {/* headline */}
              <h1 className="font-['Bebas_Neue'] leading-[0.88] tracking-[0.01em] mb-6">
                <span className="block anim-child  text-[clamp(52px,7vw,108px)] text-text">
                  BETHEL NNADI
                </span>
                <span
                  className="block text-[clamp(52px,7vw,108px)] text-aqua"
                  style={{ textShadow: '0 0 60px rgba(255,45,120,0.25)' }}
                >
                  BUILDS.
                </span>
              </h1>

              {/* desc */}
              <p className="text-[15px] anim-child  leading-[1.75] text-[#666] max-w-[460px] mb-8">
                Bridging{' '}
                <strong className="text-text font-medium">Web3 protocols</strong>
                {' '}and scalable{' '}
                <strong className="text-text font-medium">Web2 systems</strong>
                {' '}, crafting high-performance{' '}
                <strong className="text-text font-medium">frontend experiences</strong>
                {' '}for modern applications.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 anim-child ">
                <button
                  onClick={() => navigate('/connect')}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase bg-aqua text-[#0d0d0d] border-none px-6 py-3.5 cursor-pointer flex items-center gap-2  transition-colors duration-200"
                  style={{ boxShadow: '0 0 24px rgba(255,45,120,0.2)' }}
                >
                  INITIALIZE PROJECT
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  onClick={() => navigate('/work')}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase bg-transparent text-text border border-[#2e2e2e] px-6 py-3.5 cursor-pointer hover:border-aqua hover:text-aqua transition-all duration-200"
                >
                  VIEW ARCHIVE
                </button>
              </div>
            </div>

            {/* ── RIGHT panels (md+) ── */}
            <div className="flex-col gap-3 ">

              {/* CORE_STACK */}
              <div className="bg-[#111] anim-child border border-[#252525] px-5 py-4">
                <p className="font-mono   text-[9px] tracking-[0.22em] text-[#444] uppercase mb-3">CORE_STACK</p>
                <div className="flex flex-wrap gap-1.5">
                  {STACK_TAGS.map(t => (
                    <span key={t} className="font-mono text-[9px] tracking-[0.06em] uppercase text-text-dim bg-[#1a1a1a] border border-[#2a2a2a] px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTIVE NODE */}
              <div className="bg-[#111] anim-child  border border-[#252525] px-5 py-4">
                <p className="font-mono   text-[9px] tracking-[0.22em] text-[#444] uppercase mb-3">ACTIVE_NODE</p>
                {NODES.map(({ key, val, cls }) => (
                  <div key={key} className="flex justify-between items-center py-1.5 border-b border-[#1a1a1a] last:border-0">
                    <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-text-dim">{key}</span>
                    <span className={`font-mono text-[9px] ${cls}`}>{val}</span>
                  </div>
                ))}
              </div>

              {/* stat tile */}
              <div className="bg-[#111] anim-child  border border-[#252525] px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.22em] text-[#444] uppercase mb-1">CONTRACTS_DEPLOYED</p>
                  <p className="font-['Bebas_Neue'] text-[34px] text-aqua leading-none"
                    style={{ textShadow: '0 0 20px rgba(255,45,120,0.3)' }}>
                    12+
                  </p>
                </div>
                <div className="w-10 h-10 border border-[#252525] flex items-center justify-center text-aqua">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1l2 4 5 .7-3.5 3.4.8 4.9L8 12l-4.3 2 .8-4.9L1 5.7 6 5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </section>

       <BentoSection/>
      </div>
    </Layout>
  )
}
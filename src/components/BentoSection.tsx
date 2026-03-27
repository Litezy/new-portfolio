// src/components/BentoSection.tsx

import { useNavigate } from 'react-router-dom'
import { bentoWeb3, bentoWeb2, type Project } from '../data/projects'

// ─── Quotes ──────────────────────────────────────────────────────────────────

interface Quote {
  text: string
  attr: string
}

const QUOTES: Quote[] = [
  {
    text: "The best code is code that doesn't exist — the second best is code that doesn't have to be read.",
    attr: "— Architect's Creed",
  },
  {
    text: 'Move fast, break nothing. Precision is the only velocity that matters on-chain.',
    attr: '— Kinetic Principle',
  },
  {
    text: "Web3 doesn't need more dApps. It needs better infrastructure engineers.",
    attr: '— Protocol Maxim',
  },
]

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <path
      d="M3 9h12M9 3l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ChainIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M6.5 9.5a3 3 0 0 0 4.243 0l1.414-1.414a3 3 0 0 0-4.243-4.243L6.5 5.257"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M9.5 6.5a3 3 0 0 0-4.243 0L3.843 7.914a3 3 0 0 0 4.243 4.243L9.5 10.743"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
)

const MonitorIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="2" width="14" height="10" rx="1.2" stroke="currentColor" strokeWidth="1.3" />
    <path d="M5 14h6M8 12v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path
      d="M4 6l2 2-2 2M8.5 8h3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const QuoteIcon = () => (
  <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
    <path
      d="M2 12c0-3.866 3.134-7 7-7V7c-2.761 0-5 2.239-5 5v4H8V12H2ZM13 12c0-3.866 3.134-7 7-7v2c-2.761 0-5 2.239-5 5v4h-4v-4h2Z"
      fill="currentColor"
      opacity=".25"
    />
  </svg>
)

// ─── WorkCard ─────────────────────────────────────────────────────────────────

interface WorkCardProps {
  project: Project
  filter: 'web3' | 'web2'
}

const WorkCard = ({ project, filter }: WorkCardProps) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/work?filter=${filter}`)}
      className="group cursor-pointer bg-[#0d0d0d] hover:bg-[#111] border border-[#1e1e1e] hover:border-[#2e2e2e] transition-all duration-200 p-5 flex flex-col gap-3 relative overflow-hidden"
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-pink opacity-80">
          {project.tag}
        </span>
        <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#3a3a3a] border border-[#222] px-2 py-0.5">
          {project.tags[0]}
        </span>
      </div>

      {/* Title */}
      <h4 className="font-['Bebas_Neue'] text-[24px] leading-none text-[#f5f5f5] group-hover:text-pink transition-colors duration-200">
        {project.name.toUpperCase()}
      </h4>

      {/* Desc */}
      <p className="text-[13px] text-[#888] leading-relaxed flex-1">{project.desc}</p>

      {/* CTA — visible on hover */}
      <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] uppercase text-pink opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        VIEW PROJECT <ArrowRight size={12} />
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 w-[2px] h-0 bg-pink group-hover:h-full transition-all duration-300" />
    </div>
  )
}

// ─── CategoryHeader ───────────────────────────────────────────────────────────

interface CategoryHeaderProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  filter: 'web3' | 'web2'
}

const CategoryHeader = ({ icon, title, subtitle, filter }: CategoryHeaderProps) => {
  const navigate = useNavigate()

  return (
    <div className="p-6 pb-4 border-b border-[#1a1a1a] flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 border border-[#2a2a2a] flex items-center justify-center text-pink">
          {icon}
        </div>
        <div>
          <p className="font-['Bebas_Neue'] text-[18px] leading-none text-[#f5f5f5] tracking-wide">
            {title}
          </p>
          <p className="font-mono text-[8px] tracking-[0.15em] uppercase text-[#555] mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate(`/work?filter=${filter}`)}
        className="font-mono text-[8px] tracking-[0.12em] uppercase text-pink border border-[#2a1520] px-3 py-1.5 hover:bg-pink hover:text-[#0d0d0d] transition-all duration-200 flex items-center gap-1.5"
      >
        ALL <ArrowRight size={10} />
      </button>
    </div>
  )
}

// ─── QuoteCard ────────────────────────────────────────────────────────────────

const QuoteCard = ({ quote }: { quote: Quote }) => (
  <div className="bg-[#0d0d0d] p-6 flex flex-col gap-3 relative overflow-hidden">
    <div className="text-pink">
      <QuoteIcon />
    </div>
    <p className="text-[14px] text-[#666] leading-relaxed italic flex-1">{quote.text}</p>
    <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#333]">{quote.attr}</p>
  </div>
)

// ─── BioBlock ─────────────────────────────────────────────────────────────────

const BioBlock = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#0d0d0d] p-7 flex flex-col gap-5 relative overflow-hidden">
      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-5 h-5 border-l border-t border-pink opacity-30 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-r border-b border-pink opacity-30 pointer-events-none" />

      <div>
        <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-pink mb-3">
          THE ARCHITECT
        </p>
        <p className="text-[13px] text-[#666] leading-relaxed">
          I build high-performance{' '}
          <span className="text-[#c8c8c8] font-medium">decentralized systems</span> and visceral
          web interfaces — blending structural engineering discipline with the velocity of modern
          Web3.
        </p>
      </div>

      <div className="border-t border-[#1a1a1a] pt-4 flex flex-col gap-3">
        {(
          [
            { k: 'FOCUS', v: 'Kinetic Architectures' },
            { k: 'STACK', v: 'Solidity · Next.js · Rust' },
            { k: 'STATUS', v: 'Available for hire' },
          ] as const
        ).map(({ k, v }) => (
          <div key={k} className="flex items-start justify-between gap-4">
            <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-[#333] shrink-0 mt-0.5">
              {k}
            </span>
            <span className="font-mono text-[10px] text-[#777] text-right">{v}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/about')}
        className="mt-auto font-mono text-[9px] tracking-[0.12em] uppercase text-pink border border-[#2a1520] px-4 py-2.5 hover:bg-pink hover:text-[#0d0d0d] transition-all duration-200 flex items-center justify-center gap-2"
      >
        FULL PROFILE <ArrowRight size={11} />
      </button>
    </div>
  )
}

// ─── StatsBlock ───────────────────────────────────────────────────────────────

const StatsBlock = () => (
  <div className="bg-[#0d0d0d] grid grid-cols-2 divide-x divide-[#1a1a1a]">
    {(
      [
        { n: '08+', l: 'YRS EXP' },
        { n: '42', l: 'DEPLOYS' },
      ] as const
    ).map(({ n, l }) => (
      <div key={n} className="flex flex-col items-center justify-center gap-1 py-8">
        <span className="font-['Bebas_Neue'] text-[44px] leading-none text-[#e8e8e8]">{n}</span>
        <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#333]">{l}</span>
      </div>
    ))}
  </div>
)

// ─── VoidArchive CTA ──────────────────────────────────────────────────────────

const VoidArchive = () => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate('/work')}
      className="bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-200 cursor-pointer p-7 flex items-center justify-between group"
    >
      <div className="flex flex-col gap-1">
        <p className="font-['Bebas_Neue'] text-[clamp(20px,2.2vw,30px)] text-[#f5f5f5] leading-none group-hover:text-pink transition-colors duration-200">
          THE VOID ARCHIVE
        </p>
        <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#333]">
          ACCESSING 244 DISTRIBUTED REPOSITORIES...
        </p>
      </div>
      <div className="w-10 h-10 border border-[#252525] flex items-center justify-center text-[#444] shrink-0 group-hover:border-pink group-hover:text-pink transition-all duration-200">
        <ArrowRight size={16} />
      </div>
    </div>
  )
}

// ─── BentoSection (main export) ───────────────────────────────────────────────

export default function BentoSection() {
  return (
    <div className="border-t border-[#1a1a1a]">

      {/* ══════════════════════════════════════
          DESKTOP  md+
          Col layout:
            [WEB3 col]  [WEB2 col]   [Bio col]
            [Quote]     [Stats]      [Quote]
            [Quote]     [VoidArchive ─────────]
      ══════════════════════════════════════ */}
      <div
        className="hidden md:grid"
        style={{
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1px',
          background: '#1a1a1a',
        }}
      >
        {/* ── WEB3 column (row 1) ── */}
        <div className="bg-[#0d0d0d] flex flex-col">
          <CategoryHeader
            icon={<ChainIcon />}
            title="WEB3"
            subtitle="ON-CHAIN PROTOCOLS"
            filter="web3"
          />
          <div className="flex flex-col gap-[1px] flex-1 bg-[#1a1a1a]">
            {bentoWeb3.map(p => (
              <WorkCard key={p.id} project={p} filter="web3" />
            ))}
          </div>
        </div>

        {/* ── WEB2 column (row 1) ── */}
        <div className="bg-[#0d0d0d] flex flex-col">
          <CategoryHeader
            icon={<MonitorIcon />}
            title="WEB2"
            subtitle="FRONTEND & SYSTEMS"
            filter="web2"
          />
          <div className="flex flex-col gap-[1px] flex-1 bg-[#1a1a1a]">
            {bentoWeb2.map(p => (
              <WorkCard key={p.id} project={p} filter="web2" />
            ))}
          </div>
        </div>

        {/* ── Bio column (row 1) ── */}
        <BioBlock />

        {/* ── Row 2: Quote | Stats | Quote ── */}
        <QuoteCard quote={QUOTES[0]} />
        <StatsBlock />
        <QuoteCard quote={QUOTES[1]} />

        {/* ── Row 3: Quote | VoidArchive (span 2) ── */}
        <QuoteCard quote={QUOTES[2]} />
        <div
          className="col-span-2"
          style={{ gridColumn: 'span 2' }}
        >
          <VoidArchive />
        </div>
      </div>


      {/* ══════════════════════════════════════
          MOBILE  — single column stack
      ══════════════════════════════════════ */}
      <div className="md:hidden flex flex-col divide-y divide-[#1a1a1a]">

        {/* WEB3 */}
        <div className="bg-[#0d0d0d]">
          <CategoryHeader
            icon={<ChainIcon />}
            title="WEB3"
            subtitle="ON-CHAIN PROTOCOLS"
            filter="web3"
          />
          <div className="flex flex-col divide-y divide-[#1a1a1a]">
            {bentoWeb3.map(p => (
              <WorkCard key={p.id} project={p} filter="web3" />
            ))}
          </div>
        </div>

        {/* WEB2 */}
        <div className="bg-[#0d0d0d]">
          <CategoryHeader
            icon={<MonitorIcon />}
            title="WEB2"
            subtitle="FRONTEND & SYSTEMS"
            filter="web2"
          />
          <div className="flex flex-col divide-y divide-[#1a1a1a]">
            {bentoWeb2.map(p => (
              <WorkCard key={p.id} project={p} filter="web2" />
            ))}
          </div>
        </div>

        {/* Bio */}
        <BioBlock />

        {/* Quotes */}
        {QUOTES.map(q => (
          <QuoteCard key={q.attr} quote={q} />
        ))}

        {/* Stats */}
        <StatsBlock />

        {/* Archive */}
        <VoidArchive />

      </div>
    </div>
  )
}
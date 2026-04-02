// src/pages/WorkPage.tsx

import { useEffect, useRef } from 'react'
import { animate } from 'popmotion'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { projects, web3Projects, web2Projects, type Project } from '../data/projects'
import Layout from '../components/layout/Layout'
import type { CatMeta, FilterTab, FilterValue, ProjectCardProps } from '../utils/utils'
import { usePageAnimate } from '../hooks/usePageAnimate'



const FILTER_TABS: FilterTab[] = [
  { label: 'ALL WORKS', value: '',     icon: '⬡' },
  { label: 'WEB3',     value: 'web3', icon: '◈' },
  { label: 'WEB2',     value: 'web2', icon: '⬢' },
]


export const CAT_META: Record<string, CatMeta> = {
  web3: { color: '#00ffff', bg: 'rgba(127,255,212,0.08)' }, // soft aqua
  web2: { color: '#6b5cff', bg: 'rgba(107,92,255,0.08)' }
}

export const getCatMeta = (cat: string): CatMeta =>
  CAT_META[cat] ?? { color: '#00ffff', bg: 'rgba(127,255,212,0.08)' }

// ─── Icons ────────────────────────────────────────────────────────────────────

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M1 7h9M6 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ExternalIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
    <path
      d="M5 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8M8 1h4m0 0v4m0-4L5.5 7.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CodeIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M9 2l3 5-3 5M5 2L2 7l3 5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)



function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate()
  const cat = getCatMeta(project.category)

  const goToDetail = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigate(`/work/${project.slug}`)
  }

  return (
    <div
      onClick={goToDetail}
      className="
        group relative flex flex-col overflow-hidden cursor-pointer
        bg-[#111] border border-[#1f1f1f]
        hover:border-[#2e2e2e] hover:-translate-y-[2px]
        transition-all duration-300
      "
    >
      {/* Image */}
      <div className="relative  overflow-hidden">
        {project.img && (
          <img
            src={project.img}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

        {/* Category */}
        <span
          className="absolute top-3 left-3 text-[9px] px-2 py-1 font-mono uppercase border backdrop-blur"
          style={{ color: cat.color, borderColor: cat.color + '40', background: cat.bg }}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[16px] font-semibold text-text mb-2 group-hover:text-pink transition">
          {project.name}
        </h3>

        <p className="text-[13px] text-[#888] leading-relaxed mb-4 flex-1">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] px-2 py-1 bg-[#161616] border border-[#222] text-[#666] font-mono uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1a1a1a]">
          <button
            onClick={goToDetail}
            className="text-[11px] cursor-pointer font-mono uppercase tracking-wide text-pink flex items-center gap-2"
          >
            Learn more <ArrowRight size={12} />
          </button>

          <div className="flex items-center gap-3">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                onClick={e => e.stopPropagation()}
                className="text-[#555] flex items-center gap-1 hover:text-[#aaa] transition"
              >
                 <span className='text-xs'>Code</span>
                <CodeIcon size={14} />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                onClick={e => e.stopPropagation()}
                className="text-[#555] flex items-center gap-1 hover:text-[#aaa] transition"
              > 
                 <span className='text-xs'>Demo</span>
                <ExternalIcon size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
// ─── WorkPage ─────────────────────────────────────────────────────────────────

export default function WorkPage() {
    const { rightRef: headerRef } = usePageAnimate({
    childStaggerBase: 100,
    childStaggerStep: 80,
  })

  const navigate   = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const activeFilter = (searchParams.get('filter') ?? '') as FilterValue

  const visibleProjects: Project[] =
    activeFilter === 'web3' ? web3Projects
    : activeFilter === 'web2' ? web2Projects
    : projects



  const setFilter = (value: FilterValue) => {
    value ? setSearchParams({ filter: value }) : setSearchParams({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Layout>
      <div id="page-work" className=''>

        {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
        <div ref={headerRef} className="pb-10 border-b border-[#1c1c1c] relative overflow-hidden">

          {/* Watermark counter */}
          <div
            aria-hidden
            className="pointer-events-none select-none absolute right-6 top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[160px] leading-none text-[#0f0f0f] hidden lg:block"
          >
            {String(visibleProjects.length).padStart(2, '0')}
          </div>

          <div className="anim-child font-mono text-[9px] tracking-[0.22em] text-[#3a3a3a] uppercase mb-5 flex items-center gap-3">
            PORTFOLIO INDEX
            <span className="inline-block w-14 h-px bg-[#222]" />
            <span className="text-pink">{projects.length} PROJECTS</span>
          </div>

          <h1 className="anim-child font-['Bebas_Neue'] text-[clamp(42px,6.5vw,90px)] leading-[0.9] tracking-[0.02em] mb-5">
            ARCHITECTING THE
            <br />
            <span className="text-pink">DECENTRALIZED VOID</span>
          </h1>

          <p className="anim-child text-[14px] text-[#4a4a4a] max-w-[520px] leading-relaxed mb-8">
            Smart contract architectures, scalable backend systems, and high-performance frontend
            engineering — spanning DeFi protocols, APIs, and real-time applications.
          </p>

          {/* Filter tabs */}
          <div className="anim-child flex items-center gap-px flex-wrap">
            {FILTER_TABS.map(({ label, value, icon }) => {
              const isActive = activeFilter === value
              const count =
                value === 'web3' ? web3Projects.length
                : value === 'web2' ? web2Projects.length
                : projects.length

              return (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={[
                    'font-mono text-[9px] tracking-[0.14em] uppercase',
                    'px-5 py-3 flex items-center gap-2',
                    'transition-all duration-200 cursor-pointer',
                    isActive
                      ? 'bg-pink text-[#0d0d0d]'
                      : 'bg-[#0d0d0d] border border-[#1c1c1c] text-[#555] hover:text-pink hover:border-[rgba(255,45,120,0.2)]',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <span className="text-[11px]">{icon}</span>
                  {label}
                  <span
                    className={[
                      'font-mono text-[8px] px-1.5 py-0.5',
                      isActive ? 'bg-[rgba(0,0,0,0.2)] text-[#0d0d0d]' : 'bg-[#161616] text-[#333]',
                    ].join(' ')}
                  >
                    {count}
                  </span>
                </button>
              )
            })}

            {activeFilter && (
              <button
                onClick={() => setFilter('')}
                className="ml-3 font-mono text-[8px] tracking-[0.14em] uppercase text-[#555] flex items-center gap-1.5 hover:text-pink transition-colors duration-200"
              >
                ✕ CLEAR
              </button>
            )}
          </div>

          {/* Active filter strip */}
          {activeFilter && (
            <div className="mt-4 flex items-center gap-2">
              <div className="h-px flex-1 bg-[#1a1a1a]" />
              <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-[#333]">
                FILTERED BY{' '}
                <span
                  className="font-bold"
                  style={{ color: activeFilter === 'web3' ? '#ff2d78' : '#38bdf8' }}
                >
                  {activeFilter.toUpperCase()}
                </span>
                {' '}— {visibleProjects.length} RESULT
                {visibleProjects.length !== 1 ? 'S' : ''}
              </span>
              <div className="h-px flex-1 bg-[#1a1a1a]" />
            </div>
          )}
        </div>

        {/* ══ GRID ════════════════════════════════════════════════════════════ */}
        {visibleProjects.length > 0 ? (
          <div
  key={activeFilter || 'all'}
  className="
    grid gap-6 pt-10
    sm:grid-cols-2 
    lg:grid-cols-3
  "
>
  {visibleProjects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>
        ) : (
          <div className="flex flex-col items-center justify-center py-36 px-10 text-center">
            <div className="font-['Bebas_Neue'] text-[80px] text-[#111] leading-none mb-3 select-none">
              VOID
            </div>
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#333] mb-2">
              No projects in "{activeFilter}" namespace
            </p>
            <button
              onClick={() => setFilter('')}
              className="font-mono text-[9px] tracking-[0.14em] uppercase text-pink border border-[rgba(255,45,120,0.3)] px-6 py-3 hover:bg-pink hover:text-[#0d0d0d] transition-all duration-200 flex items-center gap-2"
            >
              CLEAR FILTER <ArrowRight size={11} />
            </button>
          </div>
        )}

        {/* ══ BOTTOM CTA ══════════════════════════════════════════════════════ */}
        <div className="border-t border-[#1c1c1c] px-7 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-['Bebas_Neue'] text-[22px] text-[#e8e8e8] leading-none mb-1">
              HAVE A PROJECT IN MIND?
            </p>
            <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#333]">
              Available for new engagements — DeFi, infrastructure, and full-stack Web3.
            </p>
          </div>
          <button
            onClick={() => navigate('/connect')}
            className="shrink-0 font-mono text-[9px] tracking-[0.16em] uppercase bg-pink text-[#0d0d0d] px-6 py-3 flex items-center gap-2 transition-all duration-200 hover:bg-[#e0245e]"
          >
            START A PROJECT <ArrowRight size={11} />
          </button>
        </div>
      </div>
    </Layout>
  )
}
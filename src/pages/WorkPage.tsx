// src/pages/WorkPage.tsx

import { useEffect, useRef } from 'react'
import { animate } from 'popmotion'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { projects, web3Projects, web2Projects, type Project } from '../data/projects'
import Layout from '../components/layout/Layout'
import { artMap, artBgMap } from '../components/ProjectArt'
import type { CatMeta, FilterTab, FilterValue, ProjectCardProps } from '../utils/utils'



const FILTER_TABS: FilterTab[] = [
  { label: 'ALL WORK', value: '',     icon: '⬡' },
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

// ─── Noise overlay ────────────────────────────────────────────────────────────

// const noiseStyle: React.CSSProperties = {
//   position: 'absolute',
//   inset: 0,
//   backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
//   backgroundRepeat: 'repeat',
//   backgroundSize: '180px',
//   opacity: 0.035,
//   mixBlendMode: 'overlay',
//   pointerEvents: 'none',
// }


function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate()
  const cardRef  = useRef<HTMLDivElement>(null)
  const Art      = artMap[project.artClass]
  const cat      = getCatMeta(project.category)

  // useEffect(() => {
  //   const el = cardRef.current
  //   if (!el) return
  //   el.style.opacity   = '0'
  //   el.style.transform = 'translateY(32px)'

  //   const timer = setTimeout(() => {
  //     animate({
  //       from: 0,
  //       to: 1,
  //       duration: 650,
  //       ease: [0.22, 1, 0.36, 1] as unknown as string,
  //       onUpdate: (v: number) => {
  //         if (!el) return
  //         el.style.opacity   = String(v)
  //         el.style.transform = `translateY(${(1 - v) * 32}px)`
  //       },
  //     })
  //   }, index * 90)

  //   return () => clearTimeout(timer)
  // }, [index])

  const goToDetail = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigate(`/work/${project.slug}`)
  }

  return (
    <div
      ref={cardRef}
      onClick={goToDetail}
      className={[
        'relative overflow-hidden cursor-pointer group',
        'bg-[#0d0d0d] transition-colors duration-300 hover:bg-[#101010]',
        'flex flex-col',
        project.featured ? 'col-span-2 max-[900px]:col-span-1' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 w-[2px] h-0 group-hover:h-full transition-all duration-500 ease-out z-10"
        style={{ background: cat.color }}
      />

      {/* Art zone */}
      <div
        className={[
          'w-full relative overflow-hidden flex items-center justify-center',
          project.featured ? 'aspect-[21/9]' : 'aspect-video',
        ].join(' ')}
        style={{ background: artBgMap[project.artClass] }}
      >
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.035]">
          {Art ? <Art /> : null}
        </div>

        {/* <div style={noiseStyle} /> */}

        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 100%)' }}
        />

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 font-mono text-[8px] tracking-[0.18em] uppercase px-2.5 py-1 border backdrop-blur-sm"
          style={{ color: cat.color, borderColor: cat.color + '44', background: cat.bg }}
        >
          {project.category.toUpperCase()}
        </span>

        {/* Tag badge */}
        <span className="absolute top-3 right-3 font-mono text-[8px] tracking-[0.12em] uppercase px-2.5 py-1 bg-[rgba(13,13,13,0.82)] border border-[#2a2a2a] text-[#666] backdrop-blur-sm">
          {project.tag}
        </span>

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(13,13,13,0.45)' }}
        >
          <div
            className="font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2 border flex items-center gap-2"
            style={{ color: cat.color, borderColor: cat.color + '55', background: '' }}
          >
            VIEW DETAILS <ArrowRight size={12} />
          </div>
        </div>
      </div>

      {/* Info zone */}
      <div className="flex flex-col flex-1 px-7 pt-6 pb-7 border-t border-[#1c1c1c]">
        <h3
          className="font-mono text-[15px] font-bold uppercase tracking-[0.06em] leading-tight mb-2 transition-colors duration-200 group-hover:text-pink"
          style={{ color: '#e8e8e8' }}
        >
          {project.name}
        </h3>

        <p className="text-[13px] text-[#5a5a5a] leading-relaxed mb-5 flex-1">{project.desc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map(t => (
            <span
              key={t}
              className="font-mono text-[8px] tracking-[0.1em] uppercase text-[#444] bg-[#111] border border-[#1e1e1e] px-2 py-1 hover:border-[#2e2e2e] hover:text-[#666] transition-colors duration-200"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-3 pt-5 border-t border-[#1a1a1a]">
          <button
            onClick={goToDetail}
            className="flex-1 font-mono text-[9px] tracking-[0.14em] uppercase py-2.5 border flex items-center justify-center gap-2 transition-all duration-200"
            style={{ color: cat.color, borderColor: cat.color + '33' }}
            onMouseEnter={e => {
              const btn = e.currentTarget as HTMLButtonElement
              btn.style.background  = cat.bg
              btn.style.borderColor = cat.color + '66'
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget as HTMLButtonElement
              btn.style.background  = 'transparent'
              btn.style.borderColor = cat.color + '33'
            }}
          >
            LEARN MORE <ArrowRight size={11} />
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="font-mono text-[9px] tracking-[0.12em] uppercase py-2.5 px-3.5 border border-[#222] text-[#444] flex items-center gap-1.5 transition-all duration-200 hover:border-[#3a3a3a] hover:text-[#888]"
            >
              DEMO <ExternalIcon size={11} />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="font-mono text-[9px] tracking-[0.12em] uppercase py-2.5 px-3.5 border border-[#222] text-[#444] flex items-center gap-1.5 transition-all duration-200 hover:border-[#3a3a3a] hover:text-[#888]"
            >
              CODE <CodeIcon size={11} />
            </a>
          )}

          {!project.liveUrl && !project.repoUrl && (
            <div className="w-9 h-9 border border-[#1e1e1e] flex items-center justify-center text-[#333] text-xs transition-all duration-200 hover:text-[#555] hover:border-[#2a2a2a]">
              ✶
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── WorkPage ─────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const navigate   = useNavigate()
  const headerRef  = useRef<HTMLDivElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const activeFilter = (searchParams.get('filter') ?? '') as FilterValue

  const visibleProjects: Project[] =
    activeFilter === 'web3' ? web3Projects
    : activeFilter === 'web2' ? web2Projects
    : projects

  // Header entrance animation
  // useEffect(() => {
  //   const container = headerRef.current
  //   if (!container) return

  //   const children = container.querySelectorAll<HTMLElement>('.anim-child')
  //   children.forEach((el, i) => {
  //     el.style.opacity   = '0'
  //     el.style.transform = 'translateY(20px)'

  //     const t = setTimeout(() => {
  //       animate({
  //         from: 0,
  //         to: 1,
  //         duration: 700,
  //         ease: [0.22, 1, 0.36, 1] as unknown as string,
  //         onUpdate: (v: number) => {
  //           el.style.opacity   = String(v)
  //           el.style.transform = `translateY(${(1 - v) * 20}px)`
  //         },
  //       })
  //     }, i * 80)

  //     return () => clearTimeout(t)
  //   })
  // }, [])

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
            className="grid grid-cols-2 gap-px bg-[#161616] max-[900px]:grid-cols-1"
          >
            {visibleProjects.map((project, i) => (
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
import { useEffect, useRef } from 'react'
import { animate } from 'popmotion'
import Footer from '../components/layout/ui/Footer'
import { expertiseAreas, processSteps } from '../data'
import Layout from '../components/layout/Layout';

function ExpertiseCell({ area, delay }: { area: typeof expertiseAreas[0]; delay: number }) {
  const cellRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<HTMLDivElement[]>([])
  const observed = useRef(false)

  // useEffect(() => {
  //   const cell = cellRef.current
  //   if (!cell) return

  //   cell.style.opacity = '0'
  //   cell.style.transform = 'translateY(32px)'

  //   animate({
  //     from: 0, to: 1,
  //     duration: 700,
  //   //   delay,
  //     ease: [0.22, 1, 0.36, 1] as any,
  //     onUpdate: v => {
  //       if (!cell) return
  //       cell.style.opacity = String(v)
  //       cell.style.transform = `translateY(${(1 - v) * 32}px)`
  //     },
  //   })

  //   const io = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting && !observed.current) {
  //       observed.current = true
  //       barsRef.current.forEach((bar, ) => {
  //         if (!bar) return
  //         const pct = Number(bar.dataset.pct)
  //         animate({
  //           from: 0, to: pct,
  //           duration: 1200,
  //           // delay: 200 + i * 60,
  //           ease: [0.22, 1, 0.36, 1] as any,
  //           onUpdate: v => { bar.style.width = v + '%' },
  //         })
  //       })
  //       io.disconnect()
  //     }
  //   }, { threshold: 0.1 })
  //   io.observe(cell)
  //   return () => io.disconnect()
  // }, [delay])

  return (
    <div
      ref={cellRef}
      className="bg-bg p-12 px-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#111111] group cursor-default"
    >
      {/* Left accent bar on hover */}
      <div className="absolute top-0 left-0 w-0.5 h-0 bg-pink group-hover:h-full transition-all duration-500 ease-out" />

      {/* Big background number */}
      <span className="absolute top-6 right-8 font-['Bebas_Neue'] text-[80px] text-[#2e2e2e] leading-none pointer-events-none group-hover:text-[rgba(255,45,120,0.08)] transition-colors duration-300">
        {area.num}
      </span>

      <div className="w-11 h-11 border border-[#2e2e2e] flex items-center justify-center text-lg mb-6 group-hover:border-pink transition-colors duration-300">
        {area.icon}
      </div>
      <div className="font-mono text-[13px] font-bold tracking-widest uppercase text-text mb-3">{area.title}</div>
      <div className="text-sm text-[#888] leading-[1.65] mb-6">{area.desc}</div>

      <div className="flex flex-col gap-2.5">
        {area.skills.map((skill, i) => (
          <div key={skill.name} className="grid gap-3 items-center" style={{ gridTemplateColumns: '120px 1fr 32px' }}>
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#555]">{skill.name}</span>
            <div className="h-0.5 bg-[#2e2e2e] relative overflow-hidden">
              <div
                ref={el => { if (el) barsRef.current[i] = el }}
                className="skill-bar-fill"
                data-pct={skill.pct}
              />
            </div>
            <span className="font-mono text-[9px] text-[#555] text-right">{skill.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ExpertisePage() {
  const headerRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (!headerRef.current) return
  //   const children = headerRef.current.querySelectorAll('.anim-child')
  //   children.forEach((el, ) => {
  //     const htmlEl = el as HTMLElement
  //     htmlEl.style.opacity = '0'
  //     htmlEl.style.transform = 'translateY(24px)'
  //     animate({
  //       from: 0, to: 1,
  //       duration: 700,
  //       // delay: i * 80,
  //       ease: [0.22, 1, 0.36, 1] as any,
  //       onUpdate: v => {
  //         htmlEl.style.opacity = String(v)
  //         htmlEl.style.transform = `translateY(${(1 - v) * 24}px)`
  //       },
  //     })
  //   })
  // }, [])

  return (
    <Layout>
      <div id="page-expertise">
        <div ref={headerRef} className="px-10 pt-[60px] pb-10 border-b border-[#252525]">
          <div className="anim-child font-mono text-[10px] tracking-[0.2em] text-[#555] uppercase mb-4 flex items-center gap-3">
            TECHNICAL DEPTH
            <span className="inline-block w-[60px] h-px bg-[#2e2e2e]" />
          </div>
          <h1 className="anim-child font-['Bebas_Neue'] text-[clamp(52px,7vw,96px)] leading-[0.9] tracking-[0.02em]">
            PRECISION<br />
            <span className="text-pink">ENGINEERING</span>
          </h1>
          <p className="anim-child mt-5 text-[15px] text-[#888] max-w-[560px] leading-relaxed">
            Every system is architected with surgical intent — performance, security, and elegance are not trade-offs but invariants.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-[#252525] max-[900px]:grid-cols-1">
          {expertiseAreas.map((area, i) => (
            <ExpertiseCell key={area.num} area={area} delay={i * 100} />
          ))}
        </div>

        {/* Process */}
        <div className="px-10 py-20 border-t border-[#252525]">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#555] uppercase mb-4 flex items-center gap-3">
            METHODOLOGY
            <span className="inline-block w-[60px] h-px bg-[#2e2e2e]" />
          </div>
          <h2 className="font-['Bebas_Neue'] text-[clamp(36px,5vw,64px)] leading-[0.9] tracking-[0.02em] mb-12">
            THE VOID PROCESS
          </h2>
          <div className="grid grid-cols-4 gap-px bg-[#252525] border border-[#252525] max-[900px]:grid-cols-2">
            {processSteps.map(step => (
              <div key={step.num} className="bg-bg p-9 px-7">
                <div className="font-['Bebas_Neue'] text-[64px] text-[#2e2e2e] leading-none mb-4">{step.num}</div>
                <div className="font-mono text-[11px] tracking-widest uppercase text-text mb-2">{step.title}</div>
                <div className="text-[13px] text-[#888] leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}
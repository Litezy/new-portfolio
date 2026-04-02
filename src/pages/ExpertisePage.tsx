import { useRef } from "react";
import Layout from "../components/layout/Layout";
import { usePageAnimate } from "../hooks/usePageAnimate";

const expertiseAreas = [
  {
    num: "01",
    icon: "⛓",
    title: "Smart Contracts",
    desc: "Writing secure, gas-efficient Solidity contracts. Factory patterns, proxy upgrades, ERC standards, and onchain systems built to production grade.",
    skills: [
      { name: "Solidity", pct: 85 },
      { name: "Foundry", pct: 80 },
      { name: "Hardhat", pct: 75 },
      { name: "OpenZeppelin", pct: 80 },
      { name: "ERC Standards", pct: 85 },
    ],
  },
  {
    num: "02",
    icon: "⚛",
    title: "Frontend",
    desc: "Building smooth, responsive, and visually polished interfaces. Pixel-perfect layouts, fluid animations, and intuitive user flows using React and TypeScript.",
    skills: [
      { name: "React", pct: 90 },
      { name: "TypeScript", pct: 82 },
      { name: "TailwindCSS", pct: 88 },
      { name: "Next.js", pct: 75 },
    ],
  },
  {
    num: "03",
    icon: "🖥",
    title: "Backend",
    desc: "Architecting robust server-side systems. RESTful APIs, authentication, database design, and scalable infrastructure using Node.js and SQL databases.",
    skills: [
      { name: "Node.js", pct: 85 },
      { name: "Express", pct: 85 },
      { name: "NestJS", pct: 70 },
      { name: "PostgreSQL", pct: 75 },
      { name: "MySQL", pct: 78 },
      { name: "Prisma", pct: 80 },
      { name: "Sequelize", pct: 75 },
    ],
  },
  {
    num: "04",
    icon: "🔧",
    title: "Systems & Infrastructure",
    desc: "Over 5 years in computer engineering, systems repair and networking — a hardware foundation that informs how I think about software architecture.",
    skills: [
      { name: "Networking", pct: 88 },
      { name: "Systems Repair", pct: 92 },
      { name: "Linux", pct: 72 },
      { name: "Git", pct: 85 },
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "AUDIT",
    desc: "Understand the problem space, constraints, and existing architecture before writing a single line.",
  },
  {
    num: "02",
    title: "ARCHITECT",
    desc: "Design the system structure — modules, data flow, security boundaries, and upgrade paths.",
  },
  {
    num: "03",
    title: "BUILD",
    desc: "Implement with precision — clean code, tested functions, and gas-efficient contracts.",
  },
  {
    num: "04",
    title: "DEPLOY",
    desc: "Ship to production with full test coverage, documentation, and monitoring in place.",
  },
];

function ExpertiseCell({
  area,
}: {
  area: (typeof expertiseAreas)[0];
  delay: number;
}) {
  const cellRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cellRef}
      className="bg-bg p-10 px-10 relative overflow-hidden transition-colors duration-300 hover:bg-[#111111] group cursor-default"
    >
      {/* Left accent bar on hover */}
      <div className="absolute top-0 left-0 w-0.5 h-0 bg-pink group-hover:h-full transition-all duration-500 ease-out" />

      {/* Big background number */}
      <span className="absolute top-6 right-8 font-['Bebas_Neue'] text-[80px] text-[#1a1a1a] leading-none pointer-events-none group-hover:text-[rgba(255,45,120,0.06)] transition-colors duration-300">
        {area.num}
      </span>

      {/* Icon */}
      <div className="w-11 h-11 border border-[#2e2e2e] flex items-center justify-center text-lg mb-6 group-hover:border-pink transition-colors duration-300">
        {area.icon}
      </div>

      {/* Title */}
      <div className="font-mono text-[13px] font-bold tracking-widest uppercase text-text mb-3">
        {area.title}
      </div>

      {/* Desc */}
      <div className="text-sm text-[#888] leading-[1.65] mb-6">{area.desc}</div>

      {/* Skill bars */}
      <div className="flex flex-col gap-2.5">
        {area.skills.map((skill) => (
          <div
            key={skill.name}
            className="grid gap-3 items-center"
            style={{ gridTemplateColumns: "120px 1fr 32px" }}
          >
            <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-[#555]">
              {skill.name}
            </span>
            <div className="h-0.5 bg-[#2e2e2e] relative overflow-hidden">
              <div
                className="h-full bg-pink transition-all duration-1000"
                style={{ width: `${skill.pct}%` }}
              />
            </div>
            <span className="font-mono text-[9px] text-[#555] text-right">
              {skill.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExpertisePage() {
  const { rightRef: headerRef } = usePageAnimate({
    childStaggerBase: 0,
    childStaggerStep: 80,
  });

  return (
    <Layout>
      <div id="page-expertise">
        {/* Header */}
        <div
          ref={headerRef}
          className="px-6 md:px-10 pt-[60px] pb-10 border-b border-[#252525]"
        >
          <div className="anim-child font-mono text-[10px] tracking-[0.2em] text-[#555] uppercase mb-4 flex items-center gap-3">
            TECHNICAL DEPTH
            <span className="inline-block w-[60px] h-px bg-[#2e2e2e]" />
          </div>
          <h1 className="anim-child font-['Bebas_Neue'] text-[clamp(52px,7vw,96px)] leading-[0.9] tracking-[0.02em]">
            PRECISION
            <br />
            <span className="text-pink">ENGINEERING</span>
          </h1>
          <p className="anim-child mt-5 text-[15px] text-[#888] max-w-[560px] leading-relaxed">
            Every system is architected with surgical intent — performance,
            security, and elegance are not trade-offs but invariants.
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid grid-cols-2 gap-px bg-[#252525] max-[900px]:grid-cols-1">
          {expertiseAreas.map((area, i) => (
            <ExpertiseCell key={area.num} area={area} delay={i * 100} />
          ))}
        </div>

        {/* Process */}
        <div className="px-6 md:px-10 py-20 border-t border-[#252525]">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#555] uppercase mb-4 flex items-center gap-3">
            METHODOLOGY
            <span className="inline-block w-[60px] h-px bg-[#2e2e2e]" />
          </div>
          <h2 className="font-['Bebas_Neue'] text-[clamp(36px,5vw,64px)] leading-[0.9] tracking-[0.02em] mb-12">
            THE VOID PROCESS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#252525] border border-[#252525]">
            {processSteps.map((step) => (
              <div key={step.num} className="bg-bg p-7 px-6">
                <div className="font-['Bebas_Neue'] text-[64px] text-[#2e2e2e] leading-none mb-4">
                  {step.num}
                </div>
                <div className="font-mono text-[11px] tracking-widest uppercase text-text mb-2">
                  {step.title}
                </div>
                <div className="text-[13px] text-[#888] leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

import { useNavigate } from "react-router-dom"
import { getCatMeta, type ProjectCardProps } from "../utils/utils"
import { ArrowRight, CodeIcon } from "../utils/icons"
import { ExternalLinkIcon } from "lucide-react"

export function ProjectCard({ project }: ProjectCardProps) {
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
        <h3 className="text-[16px] font-semibold text-text mb-2 group-hover:text-aqua transition">
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
            className="text-[11px] cursor-pointer font-mono uppercase tracking-wide text-aqua flex items-center gap-2"
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
                <ExternalLinkIcon size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
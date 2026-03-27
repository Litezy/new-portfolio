import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { artBgMap, artMap } from "../components/ProjectArt"
import { getCatMeta } from "./WorkPage"
import {  CodeIcon, ExternalLinkIcon } from "lucide-react"
import Layout from "../components/layout/Layout"
import type { Project } from "../data/projects"
import { getProjectBySlug } from "../data/projects"

const DetailsPage = () => {
  const { slug } = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!slug) return
    const found = getProjectBySlug(slug)
    setProject(found || null)
  }, [slug])

  if (!project) {
    return (
      <Layout>
        <div className="h-[60vh] flex items-center justify-center text-[#555] font-mono">
          Project not found.
        </div>
      </Layout>
    )
  }

  const Art = artMap[project.artClass]
  const cat = getCatMeta(project.category)

  return (
    <Layout>
      <div
        ref={cardRef}
        className="relative overflow-hidden bg-[#0d0d0d] flex flex-col "
      >
        {/* Accent line */}
        <div
          className="absolute left-0 top-0 w-[2px] h-full"
          style={{ background: cat.color }}
        />

        {/* Art / Hero */}
        <div
          className="relative w-full aspect-[21/9] flex items-center justify-center overflow-hidden"
          style={{ background: artBgMap[project.artClass] }}
        >
          {Art ? (
            <div className="absolute inset-0 transition-transform duration-700 hover:scale-[1.03]">
              <Art />
            </div>
          ) : (
            /* Fallback CSS Art */
            <div className="w-full h-full flex items-center justify-center">
              <div
                className="w-[60%] h-[60%] border border-dashed flex items-center justify-center font-mono text-xs tracking-widest"
                style={{
                  borderColor: cat.color + "55",
                  color: cat.color,
                }}
              >
                NO PREVIEW
              </div>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

          {/* Category */}
          <span
            className="absolute top-4 left-4 text-[10px] font-mono px-3 py-1 border uppercase tracking-widest"
            style={{
              color: cat.color,
              borderColor: cat.color + "44",
              background: cat.bg,
            }}
          >
            {project.category}
          </span>

          {/* Tag */}
          <span className="absolute top-4 right-4 text-[10px] font-mono px-3 py-1 border border-[#2a2a2a] text-[#666]">
            {project.tag}
          </span>
        </div>

        {/* Content */}
        <div className="px-8 py-10 border-t border-[#1c1c1c]">
          <h1 className="text-2xl font-bold font-mono mb-4 text-[#e8e8e8] tracking-wide">
            {project.name}
          </h1>

          <p className="text-[#5a5a5a] leading-relaxed mb-8 max-w-2xl">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] font-mono px-2 py-1 border border-[#1e1e1e] bg-[#111] text-[#555]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-mono border flex items-center gap-2"
                style={{
                  color: cat.color,
                  borderColor: cat.color + "55",
                }}
              >
                LIVE DEMO <ExternalLinkIcon size={14} />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-mono border border-[#2a2a2a] text-[#777] flex items-center gap-2"
              >
                SOURCE <CodeIcon size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailsPage
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCatMeta } from "./WorkPage";
import { CodeIcon, ExternalLinkIcon, ArrowLeft } from "lucide-react";
import Layout from "../components/layout/Layout";
import type { Project } from "../data/projects";
import { getProjectBySlug } from "../data/projects";

const DetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!slug) return;
    const found = getProjectBySlug(slug);
    setProject(found || null);
  }, [slug]);

  if (!project) {
    return (
      <Layout>
        <div className="h-[60vh] flex items-center justify-center text-text-muted font-mono">
          Project not found.
        </div>
      </Layout>
    );
  }

  const cat = getCatMeta(project.category);

  return (
    <Layout>
      <div className="bg-bg min-h-screen ">
        <div className="max-w-6xl mx-auto  pt-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wide text-text-muted hover:text-aqua transition"
          >
            <ArrowLeft size={14} />
            Back
          </button>
        </div>

        {/* HERO */}
        <div
          className="relative mt-6 mx-auto max-w-6xl overflow-hidden border border-border bg-bg2"
          // style={{ background: artBgMap[project.artClass] }}
        >
          {project.img && (
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-c"
            />
          )}

          <div className="absolute inset-0 " />

          {/* Category */}
          <span
            className="absolute top-4 left-1  text-[10px] font-mono px-3 py-1 uppercase tracking-widest border backdrop-blur"
            style={{
              color: cat.color,
              borderColor: cat.color + "40",
              background: cat.bg,
            }}
          >
            {project.category}
          </span>

          {/* Tag */}
          <span className="absolute top-4 right-4 text-[10px] font-mono px-3 py-1 border border-border text-text-muted bg-bg/70">
            {project.tag}
          </span>
        </div>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto py-10">
          <h1 className="text-[28px] md:text-[34px] font-display tracking-wide text-text mb-4">
            {project.name}
          </h1>

          <p className="text-text-dim leading-relaxed max-w-2xl mb-8">
            {project.desc}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-3 py-1 bg-bg2 border border-border text-text-muted uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-mono text-[11px] tracking-widest uppercase text-bg bg-aqua border-none px-5 py-2.5 cursor-pointer transition-all duration-200 hover:bg-aqua/80 hover:-translate-y-px text-[11px] font-mono uppercase flex items-center gap-2 transition border"
              >
                Live Demo <ExternalLinkIcon size={14} />
              </a>
            )}

            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-[11px] font-mono uppercase border border-border text-text-muted flex items-center gap-2 hover:text-text hover:border-border2 transition"
              >
                Source Code <CodeIcon size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailsPage;

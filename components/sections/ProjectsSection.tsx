"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { Project, PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon } from "@/components/ui/BrandIcons";
import {
  Layers,
  ExternalLink,
  Sparkles,
  Activity,
  Radio,
  Share2,
  Code2,
  Eye,
  Cpu,
  FileText,
  Layout,
  Maximize2,
} from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  Radio,
  Share2,
  Code2,
  Eye,
  Cpu,
  FileText,
  Layout,
};

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "AI & Vision", "IoT & Embedded", "Web Platforms", "Developer Tools"];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "AI & Vision") return p.category.includes("AI") || p.category.includes("Vision");
    if (filter === "IoT & Embedded") return p.category.includes("IoT") || p.category.includes("Embedded");
    if (filter === "Web Platforms") return p.category.includes("Web") || p.category.includes("Community") || p.category.includes("Productivity");
    if (filter === "Developer Tools") return p.category.includes("Tools") || p.category.includes("UI/UX");
    return true;
  });

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 py-24"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#54E5FF]">
              <Layers className="w-4 h-4" />
              <span>SCENE 04 // THE INNOVATION ARCHIPELAGO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FA]">
              Featured Projects & Systems
            </h2>
            <p className="mt-2 text-sm text-[#9BA9BA] max-w-xl">
              Floating technological islands representing real software applications, hardware prototypes, and developer tools.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playClick();
                  setFilter(cat);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  filter === cat
                    ? "bg-[#54E5FF] text-[#08111F] font-bold shadow-[0_0_15px_rgba(84,229,255,0.4)]"
                    : "bg-[#101722] text-[#9BA9BA] hover:text-[#F5F7FA] border border-white/5"
                }`}
              >
                {cat === "all" ? "All Islands" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Archipelago Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const Icon = ICON_MAP[project.islandTheme.icon] || Sparkles;

            return (
              <div
                key={project.id}
                onClick={() => {
                  soundFx.playClick();
                  onSelectProject(project);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative hud-panel rounded-2xl p-6 border border-white/10 hover:border-[#54E5FF] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_45px_rgba(84,229,255,0.2)]"
              >
                <div>
                  {/* Top Island Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="p-2 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{
                          borderColor: `${project.islandTheme.accentColor}40`,
                          backgroundColor: `${project.islandTheme.accentColor}15`,
                          color: project.islandTheme.accentColor,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#9BA9BA] block">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-mono text-[#54E5FF]">
                          STATUS: {project.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="p-1.5 rounded-lg bg-white/5 text-[#9BA9BA] group-hover:text-[#54E5FF] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Project Title & Tagline */}
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-[#F5F7FA] group-hover:text-[#54E5FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-[#FFB15E]">
                      {project.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-[#9BA9BA] line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Badges & Action Footer */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#08111F] text-[10px] font-mono text-[#9BA9BA] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-[#08111F] text-[10px] font-mono text-[#54E5FF]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#54E5FF] flex items-center gap-1 group-hover:underline">
                      <span>INSPECT ISLAND</span>
                      <span>→</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            soundFx.playClick();
                            window.open(project.liveUrl, "_blank");
                          }}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[#54E5FF]/20 text-[#54E5FF] transition-colors"
                          title="Open Live Website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      )}
                      {project.githubUrl && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            soundFx.playClick();
                            window.open(project.githubUrl, "_blank");
                          }}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#F5F7FA] transition-colors"
                          title="View Source on GitHub"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

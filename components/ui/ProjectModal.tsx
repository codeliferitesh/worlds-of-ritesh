"use client";

import React, { useEffect } from "react";
import { soundFx } from "@/lib/audio";
import { Project } from "@/data/portfolio";
import { GithubIcon } from "./BrandIcons";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Terminal,
  Activity,
  Radio,
  Share2,
  Code2,
  Eye,
  Cpu,
  FileText,
  Layout,
  AlertCircle,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
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

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundFx.playClick();
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  const IconComponent = ICON_MAP[project.islandTheme.icon] || Terminal;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        soundFx.playClick();
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto hud-panel rounded-2xl p-6 sm:p-8 border border-[#54E5FF]/30 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Futuristic Top Bar & Status */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="p-2.5 rounded-xl border flex items-center justify-center"
              style={{
                borderColor: `${project.islandTheme.accentColor}50`,
                backgroundColor: `${project.islandTheme.accentColor}15`,
                color: project.islandTheme.accentColor,
              }}
            >
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9BA9BA] flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: project.islandTheme.accentColor }}
                />
                {project.category}
              </span>
              <div className="text-xs font-mono text-[#54E5FF]/80">
                STATUS: {project.status.toUpperCase()}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#9BA9BA] hover:text-[#F5F7FA] hover:bg-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title and Tagline */}
        <div className="mt-5">
          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F7FA]">
            {project.title}
          </h2>
          <p className="mt-1 text-sm font-mono text-[#FFB15E]">
            {project.tagline}
          </p>
        </div>

        {/* Narrative Description */}
        <div className="mt-4 text-sm sm:text-base text-[#9BA9BA] leading-relaxed">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Specific Engineering Context Alerts */}
        {project.id === "mediai" && (
          <div className="mt-4 p-3.5 rounded-xl bg-sky-950/40 border border-[#54E5FF]/20 flex items-start gap-2.5 text-xs text-[#54E5FF]/90 font-mono">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#54E5FF] mt-0.5" />
            <span>
              Clinical Architecture Note: Designed for digital hospital workflow prioritization and triage decision support. Not certified or intended for automated independent clinical diagnosis.
            </span>
          </div>
        )}

        {project.id === "shipment-tracking" && (
          <div className="mt-4 p-3.5 rounded-xl bg-amber-950/40 border border-[#FFB15E]/20 flex items-start gap-2.5 text-xs text-[#FFB15E]/90 font-mono">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#FFB15E] mt-0.5" />
            <span>
              Telemetry Scope: Real-time multi-modal hardware prototype designed with ESP32 & ambient sensors. Sensor telemetry is for tracking and dev verification.
            </span>
          </div>
        )}

        {project.id === "aether-night" && (
          <div className="mt-4 p-3.5 rounded-xl bg-purple-950/30 border border-purple-400/20 flex items-start gap-2.5 text-xs text-purple-200/90 font-mono">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-purple-400 mt-0.5" />
            <span>
              Community Milestone: Surpassed 1,000+ developer installations on the Visual Studio Code Marketplace!
            </span>
          </div>
        )}

        {/* Key Architectural Highlights */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F7FA] mb-3">
            Key Architecture & Features
          </h3>
          <ul className="space-y-2.5">
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F7FA]/90"
              >
                <CheckCircle2
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: project.islandTheme.accentColor }}
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack Badges */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#9BA9BA] mb-2.5">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-[#08111F] border border-white/10 font-mono text-xs text-[#54E5FF]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#54E5FF] text-[#08111F] font-mono text-xs font-bold hover:bg-[#54E5FF]/90 transition-all shadow-[0_0_20px_rgba(84,229,255,0.4)]"
            >
              <span>LAUNCH LIVE DEMO</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.marketplaceUrl && (
            <a
              href={project.marketplaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#54E5FF] text-[#08111F] font-mono text-xs font-bold hover:bg-[#54E5FF]/90 transition-all shadow-[0_0_20px_rgba(84,229,255,0.4)]"
            >
              <span>VS MARKETPLACE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101722] border border-white/20 text-[#F5F7FA] font-mono text-xs font-semibold hover:border-[#54E5FF] hover:text-[#54E5FF] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>SOURCE CODE</span>
            </a>
          )}

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="ml-auto text-xs font-mono text-[#9BA9BA] hover:text-white px-3 py-2"
          >
            RESUME JOURNEY [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}

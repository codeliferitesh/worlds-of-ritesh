"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import {
  Code,
  Brain,
  Cpu,
  Palette,
  Flame,
  Compass,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function AboutSection() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const PILLARS = [
    {
      title: "Software Engineering",
      icon: Code,
      color: "#54E5FF",
      summary: "Modern React/Next.js architectures, TypeScript safety, and reactive user interfaces.",
    },
    {
      title: "Artificial Intelligence",
      icon: Brain,
      color: "#FFB15E",
      summary: "Generative AI pipelines, model integrations, computer vision and smart decision systems.",
    },
    {
      title: "Electronics & IoT",
      icon: Cpu,
      color: "#FF7043",
      summary: "ESP32 microcontrollers, custom sensor networks, telemetry feeds and hardware prototyping.",
    },
    {
      title: "Visual & UI/UX Design",
      icon: Palette,
      color: "#54E5FF",
      summary: "Figma design systems, ergonomic dark modes, semantic typography and fluid micro-interactions.",
    },
    {
      title: "Creative Experimentation",
      icon: Flame,
      color: "#FFB15E",
      summary: "Hackathons, creative coding, gesture recognition, and translating wild ideas into working code.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 py-24"
    >
      <div className="max-w-4xl w-full mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[#54E5FF]/10 text-[#54E5FF] border border-[#54E5FF]/20">
            <Compass className="w-4 h-4" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#54E5FF]">
            SCENE 02 // THE ORIGIN ISLAND
          </span>
        </div>

        {/* Origin Island Observational Panel */}
        <div className="hud-panel rounded-3xl p-6 sm:p-10 border border-[#54E5FF]/20 relative overflow-hidden">
          {/* Subtle Corner Markers */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#54E5FF]/10 to-transparent pointer-events-none" />

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FA]">
            {PORTFOLIO_DATA.profile.aboutHeadline}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#9BA9BA] leading-relaxed">
            {PORTFOLIO_DATA.profile.aboutBio}
          </p>

          {/* Academic Anchor Card */}
          <div className="mt-6 p-4 rounded-2xl bg-[#08111F]/70 border border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#FFB15E]/15 text-[#FFB15E] border border-[#FFB15E]/30">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#F5F7FA]">
                  {PORTFOLIO_DATA.profile.education.degree} ({PORTFOLIO_DATA.profile.education.specialization})
                </h4>
                <p className="text-xs text-[#9BA9BA] font-mono">
                  {PORTFOLIO_DATA.profile.education.university}
                </p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#54E5FF]">
              UNDERGRADUATE CANDIDATE
            </div>
          </div>

          {/* Interactive Core Pillars */}
          <div className="mt-8">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#9BA9BA] mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#54E5FF]" />
              <span>THE FIVE CORE PILLARS OF MY CRAFT</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === idx;

                return (
                  <button
                    key={pillar.title}
                    onClick={() => {
                      soundFx.playClick();
                      setActivePillar(idx);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between h-32 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(84,229,255,0.25)] ${
                      isSelected
                        ? "bg-[#101722]/80 border-[#54E5FF] shadow-[0_0_25px_rgba(84,229,255,0.35)] scale-[1.02]"
                        : "bg-[#08111F]/40 border-white/10 hover:border-white/30 hover:bg-[#101722]/50 backdrop-blur-md"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        className={`w-5 h-5 transition-transform duration-300 ${isSelected ? "scale-110" : ""}`}
                        style={{ color: pillar.color }}
                      />
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#54E5FF] animate-ping" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#F5F7FA] leading-tight">
                        {pillar.title}
                      </div>
                      <div className="text-[10px] font-mono text-[#54E5FF] mt-1">
                        {isSelected ? "● ACTIVE" : "○ INQUIRE"}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Pillar Detail Drawer */}
            <div className="mt-4 p-4 rounded-2xl bg-[#101722]/80 border border-[#54E5FF]/20 text-xs sm:text-sm text-[#F5F7FA]/90 font-mono flex items-center justify-between">
              <span>{PILLARS[activePillar].summary}</span>
              <span className="text-[10px] text-[#54E5FF] uppercase font-bold shrink-0 ml-4">
                PILLAR 0{activePillar + 1}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

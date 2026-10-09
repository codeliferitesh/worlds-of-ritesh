"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import {
  Brain,
  Cpu,
  Layers,
  Box,
  Palette,
  Compass,
  Sparkles,
  Wrench,
  Quote,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Cpu,
  Layers,
  Box,
  Palette,
  Compass,
};

export function InterestsSection() {
  const [activeInterestId, setActiveInterestId] = useState<string>("ai-systems");

  const activeInterest =
    PORTFOLIO_DATA.interests.find((i) => i.id === activeInterestId) ||
    PORTFOLIO_DATA.interests[0];

  return (
    <section
      id="interests"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 py-24"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#54E5FF]">
            <Sparkles className="w-4 h-4" />
            <span>SCENE 06 // THE CREATIVE LABORATORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FA]">
            Beyond the Screen: Multidisciplinary Craft
          </h2>
          <p className="mt-2 text-sm text-[#9BA9BA] max-w-xl mx-auto">
            Where silicon meets code, physical fabrication, and visual aesthetics.
          </p>
        </div>

        {/* Interactive Laboratory Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Interactive Domain Selector */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {PORTFOLIO_DATA.interests.map((item) => {
              const Icon = ICON_MAP[item.icon] || Sparkles;
              const isSelected = activeInterestId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveInterestId(item.id);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border flex items-center gap-3.5 hover:translate-x-1.5 hover:shadow-[0_10px_25px_rgba(84,229,255,0.2)] ${
                    isSelected
                      ? "hud-panel border-[#54E5FF] shadow-[0_0_25px_rgba(84,229,255,0.35)] scale-[1.02]"
                      : "bg-[#08111F]/40 border-white/10 hover:border-white/30 hover:bg-[#101722]/50 backdrop-blur-md"
                  }`}
                >
                  <div
                    className="p-2.5 rounded-xl border flex items-center justify-center shrink-0"
                    style={{
                      borderColor: `${item.color}40`,
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#F5F7FA]">
                      {item.title}
                    </div>
                    <div className="text-[11px] font-mono text-[#9BA9BA]">
                      {item.category}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Focused Laboratory Inspection Bay */}
          <div className="lg:col-span-7 hud-panel rounded-3xl p-6 sm:p-10 border border-[#54E5FF]/30 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[11px] font-mono text-[#54E5FF] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#54E5FF] animate-pulse" />
                ACTIVE WORKBENCH // {activeInterest.category.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-[#FFB15E]">
                CREATIVE EXPERIMENT
              </span>
            </div>

            <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-[#F5F7FA]">
              {activeInterest.title}
            </h3>

            <p className="mt-4 text-sm sm:text-base text-[#9BA9BA] leading-relaxed">
              {activeInterest.description}
            </p>

            {/* Quote block */}
            <div className="mt-6 p-4 rounded-2xl bg-[#08111F]/80 border border-white/10 flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#FFB15E] shrink-0 mt-0.5" />
              <p className="italic text-xs sm:text-sm text-[#F5F7FA]/90 font-mono">
                &ldquo;{activeInterest.quote}&rdquo;
              </p>
            </div>

            {/* Hardware / Toolkit Stack */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-[#9BA9BA] block mb-3">
                Key Hardware & Tools
              </span>
              <div className="flex flex-wrap gap-2">
                {activeInterest.hardwareOrTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-xl bg-[#08111F] border border-white/10 text-xs font-mono text-[#54E5FF]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

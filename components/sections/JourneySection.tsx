"use client";

import React from "react";
import { soundFx } from "@/lib/audio";
import {
  GraduationCap,
  Code,
  Award,
  Cpu,
  Flame,
  Calendar,
  Compass,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Code,
  Award,
  Cpu,
  Flame,
};

export function JourneySection() {
  return (
    <section
      id="journey"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 py-24"
    >
      <div className="max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#54E5FF]">
            <Compass className="w-4 h-4" />
            <span>SCENE 05 // THE BUILDER&apos;S WORKSHOP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FA]">
            ALWAYS BUILDING. ALWAYS LEARNING.
          </h2>
          <p className="mt-2 text-sm text-[#9BA9BA] max-w-xl mx-auto">
            An evolving chronology of academic foundations, software systems, developer tools, and physical computing.
          </p>
        </div>

        {/* Chronological Timeline */}
        <div className="relative border-l border-[#54E5FF]/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {PORTFOLIO_DATA.journey.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Code;

            return (
              <div
                key={index}
                className="relative group hud-panel rounded-2xl p-6 border border-white/10 hover:border-[#54E5FF]/40 transition-all duration-300"
              >
                {/* Timeline node anchor on line */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-6 w-5 h-5 rounded-full bg-[#08111F] border-2 border-[#54E5FF] flex items-center justify-center shadow-[0_0_15px_#54E5FF]">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#54E5FF] opacity-60"></span>
                  <div className="relative w-2 h-2 rounded-full bg-[#54E5FF]" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#54E5FF]/10 text-[#54E5FF] border border-[#54E5FF]/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#F5F7FA]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#FFB15E]">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#54E5FF] self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Institution & Narrative */}
                <div className="mt-3">
                  <div className="text-xs font-mono text-[#9BA9BA] mb-2">
                    {item.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F7FA]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-[#08111F] text-[11px] font-mono text-[#9BA9BA] border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

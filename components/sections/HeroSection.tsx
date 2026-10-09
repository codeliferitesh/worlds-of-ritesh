"use client";

import React from "react";
import { soundFx } from "@/lib/audio";
import { ArrowDown, Sparkles, Terminal, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface HeroSectionProps {
  onExploreClick: () => void;
  onConnectClick: () => void;
}

export function HeroSection({ onExploreClick, onConnectClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-24 pb-16 pointer-events-none"
    >
      <div className="max-w-3xl pointer-events-auto">
        {/* Status Label Badge with Animated Pulse Ring */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101722]/60 border border-[#54E5FF]/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(84,229,255,0.25)] animate-float-1">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#54E5FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#54E5FF]"></span>
          </span>
          <span className="font-mono text-[11px] tracking-widest text-[#54E5FF] font-semibold uppercase">
            {PORTFOLIO_DATA.profile.statusBadge}
          </span>
        </div>

        {/* Creator Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase text-[#F5F7FA] font-sans">
          RITESH KUMAR <span className="sunset-gradient-text">VERMA</span>
        </h1>

        {/* Primary Punchy Headline */}
        <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-mono font-bold tracking-tight text-[#54E5FF] hud-glow-text">
          {PORTFOLIO_DATA.profile.tagline}
        </p>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg text-[#9BA9BA] leading-relaxed max-w-2xl font-light">
          {PORTFOLIO_DATA.profile.supportingCopy}
        </p>

        {/* Vital Info Chip: VIT Bhopal & Specialization */}
        <div className="mt-6 inline-flex flex-wrap items-center gap-2 text-xs font-mono text-[#F5F7FA]/75 bg-[#08111F]/60 px-3.5 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
          <Terminal className="w-3.5 h-3.5 text-[#FFB15E]" />
          <span>VIT Bhopal University</span>
          <span className="text-[#54E5FF]">•</span>
          <span>B.Tech CSE (AI & ML)</span>
          <span className="text-[#54E5FF]">•</span>
          <span className="text-[#FFB15E]">Class of 2029</span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={() => {
              soundFx.playClick();
              onExploreClick();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#54E5FF] to-[#38bdf8] text-[#08111F] font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(84,229,255,0.4)] hover:shadow-[0_0_35px_rgba(84,229,255,0.6)] hover:scale-[1.02] flex items-center gap-2"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              onConnectClick();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="px-7 py-3.5 rounded-xl bg-[#101722]/80 border border-white/20 text-[#F5F7FA] font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-[#FFB15E] hover:text-[#FFB15E] transition-all backdrop-blur-md flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#FFB15E]" />
            <span>LET&apos;S CONNECT</span>
          </button>
        </div>
      </div>

      {/* Cinematic Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto">
        <button
          onClick={() => {
            soundFx.playClick();
            onExploreClick();
          }}
          className="group flex flex-col items-center gap-1.5 focus:outline-none"
          aria-label="Scroll to enter world"
        >
          <span className="text-[10px] font-mono tracking-widest text-[#9BA9BA] group-hover:text-[#54E5FF] uppercase transition-colors">
            SCROLL TO ENTER MY WORLD
          </span>
          <div className="flex flex-col items-center -space-y-1 text-[#54E5FF]">
            <ChevronDown className="w-4 h-4 animate-bounce" />
            <ChevronDown className="w-4 h-4 opacity-50" />
          </div>
        </button>
      </div>
    </section>
  );
}

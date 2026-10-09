"use client";

import React from "react";
import { soundFx } from "@/lib/audio";
import {
  Compass,
  User,
  Cpu,
  Layers,
  GraduationCap,
  Sparkles,
  Send,
} from "lucide-react";

interface LeftNavRailProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const RAIL_ITEMS = [
  { id: "hero", label: "Home", icon: Compass },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "journey", label: "Journey", icon: GraduationCap },
  { id: "interests", label: "Interests", icon: Sparkles },
  { id: "contact", label: "Contact", icon: Send },
];

export function LeftNavRail({ activeSection, onNavigate }: LeftNavRailProps) {
  return (
    <aside
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 p-2 rounded-2xl hud-panel"
      aria-label="Section navigation rail"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-[#54E5FF] mb-1 animate-ping" />

      {RAIL_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => {
              soundFx.playClick();
              onNavigate(item.id);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className={`group relative p-2.5 rounded-xl transition-all flex items-center justify-center ${
              isActive
                ? "bg-[#54E5FF]/20 text-[#54E5FF] border border-[#54E5FF]/40 shadow-[0_0_12px_rgba(84,229,255,0.3)]"
                : "text-[#9BA9BA] hover:text-[#F5F7FA] hover:bg-white/5 border border-transparent"
            }`}
            aria-label={`Scroll to ${item.label}`}
          >
            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />

            {/* Hover Tooltip HUD label */}
            <span className="pointer-events-none absolute left-full ml-3 px-2.5 py-1 rounded-md bg-[#101722] border border-[#54E5FF]/30 text-[#F5F7FA] font-mono text-[11px] tracking-wider uppercase opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl whitespace-nowrap z-50">
              {item.label}
              <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#101722] border-l border-b border-[#54E5FF]/30 rotate-45" />
            </span>
          </button>
        );
      })}

      <div className="w-1.5 h-1.5 rounded-full bg-[#FFB15E] mt-1" />
    </aside>
  );
}

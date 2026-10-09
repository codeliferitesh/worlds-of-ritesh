"use client";

import React from "react";
import { soundFx } from "@/lib/audio";
import { X, Mail, Compass, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

const MENU_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skill Constellation" },
  { id: "projects", label: "Innovation Archipelago" },
  { id: "journey", label: "Academic & Tech Journey" },
  { id: "interests", label: "Creative Laboratory" },
  { id: "contact", label: "Beacon Contact" },
];

export function MobileMenu({ isOpen, activeSection, onClose, onNavigate }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-[#08111F]/95 backdrop-blur-2xl animate-in fade-in duration-200">
      {/* Header bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#101722] border border-[#54E5FF]/40 flex items-center justify-center font-mono font-bold text-[#54E5FF] text-xs">
            RV
          </div>
          <span className="font-mono text-xs text-[#9BA9BA] uppercase tracking-wider">
            PORTFOLIO // NAVIGATION
          </span>
        </div>
        <button
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#F5F7FA]"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
        {MENU_ITEMS.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                soundFx.playClick();
                onNavigate(item.id);
                onClose();
              }}
              className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl font-mono text-left transition-all ${
                isActive
                  ? "bg-[#54E5FF]/15 text-[#54E5FF] border border-[#54E5FF]/30 font-semibold"
                  : "text-[#9BA9BA] hover:text-[#F5F7FA] hover:bg-white/5 border border-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs text-[#54E5FF]/60 font-mono">
                  {`0${index + 1}`}
                </span>
                <span className="text-base tracking-wide">{item.label}</span>
              </div>
              {isActive && <div className="w-2 h-2 rounded-full bg-[#54E5FF] shadow-[0_0_8px_#54E5FF]" />}
            </button>
          );
        })}
      </nav>

      {/* Footer social links */}
      <div className="p-6 border-t border-white/10 flex flex-col gap-4">
        <div className="text-[11px] font-mono text-[#9BA9BA] uppercase tracking-wider text-center">
          Verified Creator Channels
        </div>
        <div className="flex items-center justify-center gap-4">
          <a
            href={PORTFOLIO_DATA.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#101722] border border-white/10 text-[#9BA9BA] hover:text-[#54E5FF] hover:border-[#54E5FF]/30 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#101722] border border-white/10 text-[#9BA9BA] hover:text-[#54E5FF] hover:border-[#54E5FF]/30 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.contactEmail}`}
            className="p-3 rounded-xl bg-[#101722] border border-white/10 text-[#9BA9BA] hover:text-[#FFB15E] hover:border-[#FFB15E]/30 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="text-center font-mono text-[10px] text-[#9BA9BA]/60">
          VIT Bhopal University · CSE (AI/ML) · Class of 2029
        </div>
      </div>
    </div>
  );
}

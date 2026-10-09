"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/audio";
import { Volume2, VolumeX, Menu, X, Terminal, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface TopNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenMobileMenu: () => void;
}

const NAV_ITEMS = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "journey", label: "JOURNEY" },
  { id: "interests", label: "INTERESTS" },
  { id: "contact", label: "CONTACT" },
];

export function TopNav({ activeSection, onNavigate, onOpenMobileMenu }: TopNavProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled ? "hud-panel shadow-2xl" : "bg-[#101722]/50 backdrop-blur-md border border-[#54E5FF]/10"
        }`}
      >
        {/* RV Monogram Brand Logo */}
        <button
          onClick={() => {
            soundFx.playClick();
            onNavigate("hero");
          }}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#54E5FF] rounded-lg p-1"
          aria-label="Ritesh Kumar Verma Home"
        >
          <div className="relative w-9 h-9 rounded-lg bg-[#08111F] border border-[#54E5FF]/40 flex items-center justify-center overflow-hidden group-hover:border-[#54E5FF] transition-colors shadow-[0_0_15px_rgba(84,229,255,0.2)]">
            <span className="font-mono font-bold tracking-tighter text-sm text-[#54E5FF] group-hover:scale-105 transition-transform">
              RV
            </span>
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#FFB15E] rounded-full" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-semibold text-xs tracking-wider uppercase text-[#F5F7FA] group-hover:text-[#54E5FF] transition-colors">
              Ritesh K. Verma
            </span>
            <span className="text-[10px] text-[#9BA9BA] font-mono tracking-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              CREATIVE TECHNOLOGIST
            </span>
          </div>
        </button>

        {/* Center Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center gap-1 bg-[#08111F]/70 px-3 py-1.5 rounded-full border border-white/5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundFx.playClick();
                  onNavigate(item.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative px-3.5 py-1 text-xs font-mono tracking-wider transition-all rounded-full ${
                  isActive
                    ? "text-[#54E5FF] font-semibold bg-[#54E5FF]/10 shadow-[0_0_12px_rgba(84,229,255,0.25)]"
                    : "text-[#9BA9BA] hover:text-[#F5F7FA] hover:bg-white/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#54E5FF]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster: Audio FX & Contact CTA */}
        <div className="flex items-center gap-2.5">
          {/* Futuristic Audio Synthesizer Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => soundFx.playHover()}
            title={isMuted ? "Enable Ambient Soundscape & Audio FX" : "Mute Soundscape"}
            className={`p-2 rounded-xl border transition-all text-xs font-mono flex items-center gap-1.5 ${
              !isMuted
                ? "bg-[#54E5FF]/15 border-[#54E5FF] text-[#54E5FF] shadow-[0_0_15px_rgba(84,229,255,0.3)]"
                : "bg-white/5 border-white/10 text-[#9BA9BA] hover:text-[#F5F7FA]"
            }`}
            aria-label="Toggle Sound"
          >
            {!isMuted ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden lg:inline text-[10px] tracking-wide">
              {!isMuted ? "AUDIO ON" : "AUDIO OFF"}
            </span>
          </button>

          {/* Quick Contact Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onNavigate("contact");
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#FFB15E]/20 to-[#FF7043]/20 border border-[#FFB15E]/40 text-[#FFB15E] hover:border-[#FFB15E] hover:text-white transition-all text-xs font-mono font-medium shadow-[0_0_15px_rgba(255,177,94,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFB15E]" />
            <span>LET&apos;S TALK</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenMobileMenu();
            }}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-[#F5F7FA] hover:text-[#54E5FF]"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

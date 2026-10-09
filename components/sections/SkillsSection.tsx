"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import {
  Globe,
  Terminal,
  Database,
  Sparkles,
  Cpu,
  Wrench,
  Palette,
  Search,
  Filter,
} from "lucide-react";
import { PORTFOLIO_DATA, SkillCategory } from "@/data/portfolio";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Terminal,
  Database,
  Sparkles,
  Cpu,
  Wrench,
  Palette,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [inspectedSkill, setInspectedSkill] = useState<{
    name: string;
    tag: string;
    domain: string;
  } | null>(null);

  const filteredCategories = PORTFOLIO_DATA.skillCategories
    .filter((cat) => selectedCategory === "all" || cat.title === selectedCategory)
    .map((cat) => ({
      ...cat,
      skills: cat.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 py-24"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#54E5FF]">
              <Cpu className="w-4 h-4" />
              <span>SCENE 03 // THE TECHNOLOGY CONSTELLATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F5F7FA]">
              Technology & Technical Toolkit
            </h2>
            <p className="mt-2 text-sm text-[#9BA9BA] max-w-xl">
              An editable inventory across software, AI algorithms, hardware telemetry, and design engineering.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#9BA9BA]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#101722]/80 border border-white/10 text-xs text-[#F5F7FA] font-mono focus:outline-none focus:border-[#54E5FF] transition-colors"
              aria-label="Filter skills"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => {
              soundFx.playClick();
              setSelectedCategory("all");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === "all"
                ? "bg-[#54E5FF] text-[#08111F] font-bold shadow-[0_0_15px_rgba(84,229,255,0.4)]"
                : "bg-[#101722] text-[#9BA9BA] hover:text-[#F5F7FA] border border-white/5"
            }`}
          >
            All Constellations
          </button>
          {PORTFOLIO_DATA.skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat.title);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat.title
                  ? "bg-[#54E5FF] text-[#08111F] font-bold shadow-[0_0_15px_rgba(84,229,255,0.4)]"
                  : "bg-[#101722] text-[#9BA9BA] hover:text-[#F5F7FA] border border-white/5"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Constellation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => {
            const Icon = ICON_MAP[category.iconName] || Terminal;

            return (
              <div
                key={category.title}
                className="hud-panel rounded-2xl p-5 border border-white/10 hover:border-[#54E5FF]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(84,229,255,0.15)] group"
              >
                <div>
                  {/* Domain Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#54E5FF]/10 text-[#54E5FF]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-semibold text-sm text-[#F5F7FA]">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#FFB15E]">
                      {category.badge}
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <button
                        key={skill.name}
                        onClick={() => {
                          soundFx.playClick();
                          setInspectedSkill({
                            name: skill.name,
                            tag: skill.tag,
                            domain: category.title,
                          });
                        }}
                        onMouseEnter={() => soundFx.playHover()}
                        className="group text-left px-3 py-1.5 rounded-xl bg-[#08111F]/80 border border-white/10 hover:border-[#54E5FF]/60 hover:bg-[#54E5FF]/10 transition-all focus:outline-none focus:ring-1 focus:ring-[#54E5FF]"
                        aria-label={`Inspect ${skill.name}`}
                      >
                        <div className="text-xs font-mono font-medium text-[#F5F7FA] group-hover:text-[#54E5FF] transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-[#9BA9BA] opacity-80">
                          {skill.tag}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 text-[10px] font-mono text-[#9BA9BA]/60 flex items-center justify-between">
                  <span>{category.skills.length} TECHNOLOGIES</span>
                  <span>NODE ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Skill Information Drawer */}
        {inspectedSkill && (
          <div className="mt-6 p-4 rounded-2xl bg-[#101722] border border-[#54E5FF]/40 flex items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#54E5FF] animate-pulse" />
              <div>
                <span className="text-xs font-mono text-[#54E5FF] font-semibold">
                  {inspectedSkill.name}
                </span>
                <span className="text-xs text-[#9BA9BA] font-mono ml-2">
                  — Focus Area: {inspectedSkill.tag} ({inspectedSkill.domain})
                </span>
              </div>
            </div>
            <button
              onClick={() => setInspectedSkill(null)}
              className="text-xs font-mono text-[#9BA9BA] hover:text-white px-2 py-1"
            >
              DISMISS
            </button>
          </div>
        )}

        {/* Conventional Accessible Screen-Reader Summary */}
        <div className="sr-only">
          <h3>Full List of Skills and Technologies</h3>
          <ul>
            {PORTFOLIO_DATA.skillCategories.flatMap((cat) =>
              cat.skills.map((s) => (
                <li key={s.name}>
                  {s.name} in category {cat.title}: {s.tag}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

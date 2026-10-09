"use client";

import React from "react";
import { soundFx } from "@/lib/audio";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function RightSocialRail() {
  const socials = [
    {
      name: "GitHub",
      url: PORTFOLIO_DATA.profile.githubUrl,
      handle: "@codeliferitesh",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      url: PORTFOLIO_DATA.profile.linkedinUrl,
      handle: "in/riteshvermadev",
      icon: LinkedinIcon,
    },
    {
      name: "Email",
      url: `mailto:${PORTFOLIO_DATA.profile.contactEmail}`,
      handle: PORTFOLIO_DATA.profile.contactEmail,
      icon: Mail,
    },
  ];

  return (
    <aside
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-2xl hud-panel"
      aria-label="Social connections rail"
    >
      <span className="text-[9px] font-mono uppercase text-[#9BA9BA] tracking-widest -rotate-90 my-2 select-none">
        CONNECT
      </span>

      <div className="w-4 h-[1px] bg-white/10" />

      {socials.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target={item.name !== "Email" ? "_blank" : undefined}
            rel={item.name !== "Email" ? "noopener noreferrer" : undefined}
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="group relative p-2.5 rounded-xl text-[#9BA9BA] hover:text-[#54E5FF] hover:bg-white/5 transition-all flex items-center justify-center border border-transparent hover:border-[#54E5FF]/20"
            aria-label={`${item.name} Profile (${item.handle})`}
          >
            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />

            {/* Right Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 px-2.5 py-1 rounded-md bg-[#101722] border border-[#54E5FF]/30 text-[#F5F7FA] font-mono text-[11px] tracking-wider opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-xl whitespace-nowrap z-50 flex items-center gap-1.5">
              <span>{item.name}</span>
              <ExternalLink className="w-3 h-3 text-[#54E5FF]" />
              <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#101722] border-r border-t border-[#54E5FF]/30 rotate-45" />
            </span>
          </a>
        );
      })}

      <div className="w-4 h-[1px] bg-white/10" />

      {/* Companion Drone Indicator */}
      <div className="p-1 text-center" title="Companion Drone Online">
        <div className="w-2 h-2 rounded-full bg-[#54E5FF] animate-pulse mx-auto" />
      </div>
    </aside>
  );
}

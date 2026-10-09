"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { copyToClipboard } from "@/lib/utils";
import confetti from "canvas-confetti";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import {
  Send,
  Mail,
  Copy,
  Check,
  ArrowUp,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface ContactSectionProps {
  onBackToTop: () => void;
}

export function ContactSection({ onBackToTop }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = async () => {
    soundFx.playClick();
    const success = await copyToClipboard(PORTFOLIO_DATA.profile.contactEmail);
    if (success) {
      setCopied(true);
      soundFx.playChime(780, "sine", 0.05);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();

    // Trigger subtle particle celebration
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#54E5FF", "#FFB15E", "#FF7043"],
      });
    } catch {}

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.contactEmail}?subject=${encodeURIComponent(
      subject || "Collaboration / Project Inquiry"
    )}&body=${encodeURIComponent(message || "Hi Ritesh,\n\nI came across your 3D developer portfolio and wanted to reach out regarding...")}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-24 pt-24 pb-12"
    >
      <div className="max-w-4xl w-full mx-auto my-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-[#FFB15E]">
            <Sparkles className="w-4 h-4 text-[#FFB15E]" />
            <span>SCENE 07 // THE FINAL BEACON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F7FA]">
            HAVE AN IDEA? <span className="sunset-gradient-text">LET&apos;S BUILD IT.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9BA9BA] max-w-xl mx-auto leading-relaxed">
            I&apos;m always interested in meaningful projects, new technologies, creative collaborations, and opportunities to learn by building.
          </p>
        </div>

        {/* The Beacon Communication Console */}
        <div className="hud-panel-amber rounded-3xl p-6 sm:p-10 border border-[#FFB15E]/30 relative overflow-hidden">
          {/* Top verified destination buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-8">
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-4 rounded-2xl bg-[#08111F]/70 border border-white/10 hover:border-[#54E5FF] hover:bg-[#54E5FF]/10 transition-all duration-300 flex items-center justify-between group hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(84,229,255,0.25)]"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-[#54E5FF] transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <div className="text-xs font-mono text-[#9BA9BA]">PROFILE</div>
                  <div className="text-sm font-semibold text-[#F5F7FA]">LINKEDIN</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#9BA9BA] group-hover:text-[#54E5FF] transition-colors" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-4 rounded-2xl bg-[#08111F]/70 border border-white/10 hover:border-[#FFB15E] hover:bg-[#FFB15E]/10 transition-all duration-300 flex items-center justify-between group hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(255,177,94,0.25)]"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-[#FFB15E] transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <div className="text-xs font-mono text-[#9BA9BA]">REPOSITORIES</div>
                  <div className="text-sm font-semibold text-[#F5F7FA]">GITHUB</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#9BA9BA] group-hover:text-[#FFB15E] transition-colors" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.contactEmail}`}
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="p-4 rounded-2xl bg-[#08111F]/70 border border-white/10 hover:border-[#FF7043] hover:bg-[#FF7043]/10 transition-all duration-300 flex items-center justify-between group hover:-translate-y-1.5 hover:shadow-[0_12px_25px_rgba(255,112,67,0.25)]"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF7043] transition-transform group-hover:scale-110" />
                <div className="text-left">
                  <div className="text-xs font-mono text-[#9BA9BA]">DIRECT INBOX</div>
                  <div className="text-sm font-semibold text-[#F5F7FA]">SEND EMAIL</div>
                </div>
              </div>
              <Send className="w-4 h-4 text-[#9BA9BA] group-hover:text-[#FF7043] transition-colors" />
            </a>
          </div>

          {/* Quick Mail Composer Form */}
          <form onSubmit={handleSendMailto} className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#9BA9BA]">
              <span>QUICK TRANSMISSION DISPATCHER</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 text-[#54E5FF] hover:underline"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "COPIED TO CLIPBOARD" : `COPY: ${PORTFOLIO_DATA.profile.contactEmail}`}</span>
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject: Collaboration, Hackathon, or Opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-[#08111F]/90 border border-white/10 text-sm text-[#F5F7FA] font-mono focus:outline-none focus:border-[#FFB15E] transition-colors"
              />

              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your note or project outline here..."
                className="w-full px-4 py-3 rounded-xl bg-[#08111F]/90 border border-white/10 text-sm text-[#F5F7FA] font-mono focus:outline-none focus:border-[#FFB15E] transition-colors resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-[11px] font-mono text-[#9BA9BA]">
                Dispatches directly to stacksolveofficial@gmail.com via your client
              </span>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FFB15E] to-[#FF7043] text-[#08111F] font-mono text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-[0_0_20px_rgba(255,177,94,0.4)] flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH MESSAGE</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer & Back to Top Control */}
      <footer className="mt-16 pt-8 border-t border-white/10 max-w-6xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9BA9BA]">
        <div>
          Designed and built with curiosity by{" "}
          <span className="text-[#F5F7FA] font-semibold">{PORTFOLIO_DATA.profile.fullName}</span>.
        </div>

        <button
          onClick={() => {
            soundFx.playClick();
            onBackToTop();
          }}
          onMouseEnter={() => soundFx.playHover()}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#54E5FF]/20 text-[#F5F7FA] hover:text-[#54E5FF] transition-all border border-white/10"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
          <span>RETURN TO APEX (TOP)</span>
        </button>
      </footer>
    </section>
  );
}

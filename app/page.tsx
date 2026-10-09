"use client";

import React, { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";

// UI Components
import { TopNav } from "@/components/ui/TopNav";
import { LeftNavRail } from "@/components/ui/LeftNavRail";
import { RightSocialRail } from "@/components/ui/RightSocialRail";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { FallbackView } from "@/components/ui/FallbackView";

// Portfolio Sections
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { ContactSection } from "@/components/sections/ContactSection";

// Dynamically import the 3D WebGL Canvas
const SceneCanvas = dynamic(
  () => import("@/components/scene/SceneCanvas").then((mod) => mod.SceneCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-0 flex items-center justify-center bg-[#08111F] text-[#54E5FF] font-mono text-xs">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-full border-2 border-[#54E5FF] border-t-transparent animate-spin" />
          <span className="tracking-widest uppercase text-[#54E5FF]">
            PREPARING YOUR WORLD...
          </span>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [webGLEnabled, setWebGLEnabled] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  // Track scroll progress and active section intersection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      setScrollProgress(progress);

      // Section intersection determination
      const sections = ["hero", "about", "skills", "projects", "journey", "interests", "contact"];
      const scrollPos = scrollTop + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  const handleSelectProjectFrom3D = useCallback((id: string) => {
    const project = PORTFOLIO_DATA.projects.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-[#08111F] text-[#F5F7FA] overflow-x-hidden selection:bg-[#54E5FF]/20 selection:text-[#54E5FF]">
      {/* 3D WebGL Canvas or 2.5D Fallback */}
      {webGLEnabled && !prefersReducedMotion ? (
        <SceneCanvas
          scrollProgress={scrollProgress}
          activeProjectId={selectedProject?.id}
          onSelectProject={handleSelectProjectFrom3D}
          onWebGLError={() => setWebGLEnabled(false)}
        />
      ) : (
        <FallbackView />
      )}

      {/* Top HUD Navigation Bar */}
      <TopNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
      />

      {/* Left Vertical Navigation Rail (Desktop) */}
      <LeftNavRail
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Right Social Rail (Desktop) */}
      <RightSocialRail />

      {/* Mobile Slide-out Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeSection={activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Deep Inspection Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Page Content Layer */}
      <div className="relative z-10">
        <HeroSection
          onExploreClick={() => handleNavigate("projects")}
          onConnectClick={() => handleNavigate("contact")}
        />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        <JourneySection />

        <InterestsSection />

        <ContactSection onBackToTop={() => handleNavigate("hero")} />
      </div>
    </main>
  );
}

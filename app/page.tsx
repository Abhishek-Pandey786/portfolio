import { SiteHeader } from "@/components/site-header";
import {
  AboutSection,
  AboutJourneySection,
  AchievementsSection,
  ContactSection,
  ExperienceSection,
  FooterSection,
  HeroSection,
  ProjectsSection,
  ResumeCtaSection,
  SkillsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <HeroSection />
        <AboutSection />
        <AboutJourneySection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ResumeCtaSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}

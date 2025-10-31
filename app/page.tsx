import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TeamSection from "@/components/team-section"
import ProjectsSection from "@/components/projects-section"
import BlogSection from "@/components/blog-section"
import SkillsSection from "@/components/skills-section"
import ProcessSection from "@/components/process-section"
import ValuesSection from "@/components/values-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <ProjectsSection />
      <BlogSection />
      <SkillsSection />
      <ProcessSection />
      <ValuesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Twitter, Globe, Linkedin, ChevronLeft, ChevronRight, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import teamData from "@/team.json"
import type { TeamMember } from "@/types"

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  const validTeam = (teamData as TeamMember[]).filter((member) => member.name)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % validTeam.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + validTeam.length) % validTeam.length)
  }

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const getCardPosition = (index: number) => {
    const diff = index - currentIndex
    if (diff === 0) return "center"
    if (diff === 1 || diff === -(validTeam.length - 1)) return "right"
    if (diff === -1 || diff === validTeam.length - 1) return "left"
    return "hidden"
  }

  return (
    <section id="team" className="py-24 px-4 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">جمع ما</h2>
          <p className="text-muted-foreground text-lg font-light">با ذهن‌های پشت کد آشنا شوید</p>
        </motion.div>

        <div className="carousel-container relative min-h-[500px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence mode="sync">
            {validTeam.map((member, index) => {
              const position = getCardPosition(index)
              const isFlipped = flippedCards.has(member.id)

              return (
                <motion.div
                  key={member.id}
                  className={`carousel-card absolute ${position}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: position === "hidden" ? 0 : position === "center" ? 1 : 0.5,
                    scale: position === "center" ? 1.1 : 0.85,
                    x: position === "left" ? "-40%" : position === "right" ? "40%" : "0%",
                    rotateY: position === "left" ? 15 : position === "right" ? -15 : 0,
                    z: position === "center" ? 0 : position === "hidden" ? -100 : -50,
                    zIndex: position === "center" ? 10 : position === "hidden" ? 0 : 5,
                  }}
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  style={{ pointerEvents: position === "center" ? "auto" : "none" }}
                >
                  <Card
                    className="w-72 md:w-80 h-[450px] md:h-[500px] cursor-pointer border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 relative soft-glow overflow-hidden"
                    onClick={() => position === "center" && toggleFlip(member.id)}
                  >
                    <div className={`card-flip w-full h-full ${isFlipped ? "flipped" : ""}`}>
                      {/* Front Face */}
                      <div className="card-face absolute inset-0 p-6 flex flex-col items-center justify-center bg-card">
                        <div className="relative w-32 h-32 md:w-36 md:h-36 mb-6 rounded-full overflow-hidden border-4 border-primary/30 soft-glow">
                          <Image
                            src={member.avatar || "/developer-working.png"}
                            alt={member.nameFa || member.name}
                            fill
                            sizes="144px"
                            loading="lazy"
                            decoding="async"
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/developer-working.png"
                            }}
                          />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">
                          {member.nameFa || member.name}
                        </h3>
                        <p className="text-sm md:text-base text-primary text-center mb-4 px-2 font-medium">
                          {member.roleFa || member.role}
                        </p>
                        <p className="text-xs text-muted-foreground text-center opacity-70">
                          کلیک کنید برای جزئیات بیشتر
                        </p>
                      </div>

                      {/* Back Face */}
                      <div className="card-back card-face absolute inset-0 p-6 bg-card border-2 border-primary/50 rounded-lg overflow-y-auto">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">
                          {member.nameFa || member.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
                          {member.bioFa || member.bio}
                        </p>

                        {member.skills && member.skills.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold mb-2 text-primary text-center">مهارت‌ها:</h4>
                            <div className="flex flex-wrap gap-1.5 justify-center">
                              {member.skills.slice(0, 8).map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-center gap-2 mt-4">
                          {member.socials?.github && member.socials.github !== "#" && (
                            <a
                              href={member.socials.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="GitHub"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {member.socials?.twitter && member.socials.twitter !== "#" && (
                            <a
                              href={member.socials.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="Twitter"
                            >
                              <Twitter className="h-4 w-4" />
                            </a>
                          )}
                          {member.socials?.linkedin && (
                            <a
                              href={member.socials.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="LinkedIn"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          )}
                          {member.socials?.website && member.socials.website !== "#" && (
                            <a
                              href={member.socials.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="Website"
                            >
                              <Globe className="h-4 w-4" />
                            </a>
                          )}
                          {member.socials?.email && (
                            <a
                              href={`mailto:${member.socials.email}`}
                              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                              aria-label="Email"
                            >
                              <Mail className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full soft-glow bg-card/80 backdrop-blur-sm hover:bg-primary/10 border-primary/30"
            onClick={prevSlide}
            aria-label="Previous team member"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full soft-glow bg-card/80 backdrop-blur-sm hover:bg-primary/10 border-primary/30"
            onClick={nextSlide}
            aria-label="Next team member"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

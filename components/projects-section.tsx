"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    titleFa: "پلتفرم معاملات غیرمتمرکز",
    titleEn: "DeFi Trading Platform",
    descriptionFa: "پلتفرم معاملاتی غیرمتمرکز با تحلیل‌های لحظه‌ای و یکپارچگی قراردادهای هوشمند",
    thumbnail: "/defi-trading-dashboard.png",
    stack: ["React", "Solidity", "Web3.js", "Node.js"],
    categoryFa: "بلاکچین",
    priceRange: "$15k - $25k",
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    titleFa: "تولید محتوا با هوش مصنوعی",
    titleEn: "AI Content Generator",
    descriptionFa: "ابزار تولید محتوا با قدرت یادگیری ماشین و پردازش زبان طبیعی",
    thumbnail: "/ai-content-generator.png",
    stack: ["Next.js", "Python", "TensorFlow", "TypeScript"],
    categoryFa: "هوش مصنوعی",
    priceRange: "$20k - $35k",
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    titleFa: "بازار NFT",
    titleEn: "NFT Marketplace",
    descriptionFa: "بازار مدرن NFT با قابلیت ضرب، معامله و حراج",
    thumbnail: "/nft-marketplace-concept.png",
    stack: ["React", "Solidity", "IPFS", "Ethereum"],
    categoryFa: "بلاکچین",
    priceRange: "$25k - $40k",
    demo: "#",
    github: "#",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            نمونه <span className="gradient-text">کارها</span>
          </h2>
          <p className="text-muted-foreground text-lg">موجودات دیجیتالی که به وجود آورده‌ایم</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 soft-glow h-full flex flex-col">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.titleFa}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
                    priority={false}
                    loading="lazy"
                    decoding="async"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-medium">
                      {project.categoryFa}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.titleFa}</h3>
                    <span className="text-xs font-mono text-muted-foreground">{project.titleEn}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.descriptionFa}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-md bg-accent/20 text-foreground/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-primary">{project.priceRange}</span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 ml-2" />
                        دمو
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 ml-2" />
                        کد
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

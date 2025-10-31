"use client"

import { motion } from "framer-motion"
import skillsData from "@/skills.json"

const categoryColors = {
  frontend: "bg-primary/20 text-primary border-primary/50",
  backend: "bg-accent/20 text-accent border-accent/50",
  design: "bg-primary/30 text-primary border-primary/60",
  blockchain: "bg-accent/30 text-accent border-accent/60",
}

export default function SkillsSection() {
  function getIcon(skill: any) {
    // Prefer explicit icon from data (often an emoji or short string).
    if (skill?.icon) return skill.icon
    const name = (skill?.name || "").toLowerCase()
    if (name.includes("react")) return "⚛️"
    if (name.includes("ethereum") || name.includes("solidity") || name.includes("web3")) return "💎"
    if (name.includes("figma") || name.includes("design")) return "🎨"
    if (name.includes("python")) return "🐍"
    return "🔧"
  }
  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ابزارهای <span className="gradient-text">ما</span>
          </h2>
          <p className="text-muted-foreground text-lg">تکنولوژی‌هایی که با آن‌ها آینده می‌سازیم</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-6 rounded-xl border-2 ${
                categoryColors[skill.category as keyof typeof categoryColors] || categoryColors.frontend
              } backdrop-blur-sm transition-all duration-300 cursor-pointer group soft-glow`}
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {getIcon(skill)}
                </div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <p className="text-xs opacity-70 mt-1 capitalize">{skill.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

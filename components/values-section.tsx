"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code2, Users, Sparkles } from "lucide-react"

const values = [
  {
    icon: Code2,
    titleFa: "سکوت و دقت",
    titleEn: "Silence & Precision",
    descriptionFa: "ما با سکوت و دقت کد می‌نویسیم",
  },
  {
    icon: Users,
    titleFa: "شفافیت",
    titleEn: "Transparency",
    descriptionFa: "ما به شفافیت اعتقاد داریم",
  },
  {
    icon: Sparkles,
    titleFa: "همکاری با هوش مصنوعی",
    titleEn: "AI Collaboration",
    descriptionFa: "ما هوش مصنوعی را همکار می‌دانیم، نه ابزار",
  },
]

export default function ValuesSection() {
  const [typingIndex, setTypingIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % values.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="values" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            اصول <span className="gradient-text">ما</span>
          </h2>
          <p className="text-muted-foreground text-lg">ارزش‌هایی که جمع ما را هدایت می‌کنند</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 soft-glow h-full">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="h-8 w-8 text-primary" />
                </motion.div>

                <div className="mb-3">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {value.titleFa}
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">{value.titleEn}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {index === typingIndex ? (
                    <span className="typing-text inline-block">{value.descriptionFa}</span>
                  ) : (
                    value.descriptionFa
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

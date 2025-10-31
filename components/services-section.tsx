"use client"

import { motion } from "framer-motion"
import { Code2, Smartphone, Blocks, Brain, Palette, Rocket } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "توسعه وب",
    titleEn: "Web Development",
    description: "طراحی و توسعه وب‌سایت‌های مدرن با تکنولوژی‌های روز دنیا",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimization"],
  },
  {
    icon: Smartphone,
    title: "اپلیکیشن موبایل",
    titleEn: "Mobile Apps",
    description: "ساخت اپلیکیشن‌های موبایل بومی و کراس‌پلتفرم",
    features: ["React Native", "Flutter", "iOS & Android", "PWA"],
  },
  {
    icon: Blocks,
    title: "بلاکچین",
    titleEn: "Blockchain",
    description: "توسعه قراردادهای هوشمند و پلتفرم‌های غیرمتمرکز",
    features: ["Solidity", "Web3", "Smart Contracts", "DApps"],
  },
  {
    icon: Brain,
    title: "هوش مصنوعی",
    titleEn: "AI Solutions",
    description: "پیاده‌سازی راهکارهای هوش مصنوعی و یادگیری ماشین",
    features: ["Machine Learning", "NLP", "Computer Vision", "AI Integration"],
  },
  {
    icon: Palette,
    title: "طراحی UI/UX",
    titleEn: "UI/UX Design",
    description: "طراحی رابط کاربری زیبا و تجربه کاربری بی‌نظیر",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Rocket,
    title: "مشاوره فنی",
    titleEn: "Technical Consulting",
    description: "مشاوره و راهنمایی در انتخاب بهترین راهکارهای فنی",
    features: ["Architecture Design", "Tech Stack", "Performance", "Scalability"],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            خدمات <span className="gradient-text">ما</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">از ایده تا اجرا، در کنار شما هستیم</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 soft-glow">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{service.titleEn}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

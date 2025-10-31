"use client"

import { motion } from "framer-motion"
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "جلسه آشنایی",
    description: "شنیدن نیازها و اهداف شما، تحلیل دقیق پروژه و ارائه پیشنهادات اولیه",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "طراحی و برنامه‌ریزی",
    description: "طراحی معماری سیستم، UI/UX و تایید نهایی با شما قبل از شروع توسعه",
  },
  {
    number: "03",
    icon: Code,
    title: "توسعه و تست",
    description: "کدنویسی با استانداردهای بالا، تست‌های جامع و بازخورد مستمر",
  },
  {
    number: "04",
    icon: Rocket,
    title: "تحویل و پشتیبانی",
    description: "استقرار نهایی، آموزش تیم شما و پشتیبانی پس از تحویل",
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            روند <span className="gradient-text">همکاری</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">مسیر ساده و شفاف از ایده تا محصول نهایی</p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-l from-primary via-accent to-primary opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 soft-glow h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="h-8 w-0.5 bg-gradient-to-b from-primary to-accent opacity-30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

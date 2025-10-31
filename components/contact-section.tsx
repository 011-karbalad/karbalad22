"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`پیام از ${formData.name}`)
    const body = encodeURIComponent(`نام: ${formData.name}\nایمیل: ${formData.email}\n\nپیام:\n${formData.message}`)

    window.location.href = `mailto:farazbadraghe@gmail.com?subject=${subject}&body=${body}`

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-secondary/30">
      {/* Portal rings background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="portal-ring absolute w-96 h-96 rounded-full border-2 border-primary" />
        <div
          className="portal-ring absolute w-[500px] h-[500px] rounded-full border-2 border-accent"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="portal-ring absolute w-[600px] h-[600px] rounded-full border-2 border-primary"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">ورود به هسته</span>
          </h2>
          <p className="text-muted-foreground text-lg">آماده ساخت چیزی فوق‌العاده؟ بیایید صحبت کنیم</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="p-8 border-border bg-card/80 backdrop-blur-sm soft-glow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    نام
                  </label>
                  <Input
                    id="name"
                    placeholder="نام شما"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    ایمیل
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    توضیحات پروژه
                  </label>
                  <Textarea
                    id="message"
                    placeholder="درباره پروژه خود بگویید..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background/50"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="h-4 w-4 ml-2" />
                  ارسال پیام
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Discord */}
            <Card className="p-8 border-border bg-card/80 backdrop-blur-sm soft-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">به جامعه ما بپیوندید</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    در دیسکورد با ما در ارتباط باشید، ایده‌ها را به اشتراک بگذارید و با جمع همکاری کنید
                  </p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
                      ورود به سرور دیسکورد
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-8 border-border bg-card/80 backdrop-blur-sm soft-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">ایمیل مستقیم</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    یا مستقیماً با ما از طریق ایمیل در ارتباط باشید
                  </p>
                  <a
                    href="mailto:farazbadraghe@gmail.com"
                    className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                  >
                    farazbadraghe@gmail.com
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

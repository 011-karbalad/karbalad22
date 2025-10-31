"use client"

import { motion } from "framer-motion"
import { MessageCircle, Code2, Lightbulb, Rocket, TrendingUp, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "چطور یه وبسایت حرفه‌ای بسازیم که واقعا کار کنه؟",
    excerpt:
      "از انتخاب تکنولوژی مناسب تا بهینه‌سازی SEO، همه چیزی که باید بدونی تا یه سایت باحال بسازی که توی گوگل هم رتبه بگیره.",
    icon: Code2,
    category: "توسعه وب",
    readTime: "۵ دقیقه",
  },
  {
    id: 2,
    title: "نسل Z و کدنویسی: چرا ما فرق داریم؟",
    excerpt:
      "ما با AI بزرگ شدیم، با میم‌ها حرف می‌زنیم و کدهامون هم همینطوره - سریع، هوشمند و خلاقانه. بیا ببین چطور این نسل داره دنیای تک رو تغییر میده.",
    icon: Zap,
    category: "فرهنگ تک",
    readTime: "۴ دقیقه",
  },
  {
    id: 3,
    title: "از ایده تا اپلیکیشن: مسیر موفقیت استارتاپ‌ها",
    excerpt: "داستان‌های واقعی از پروژه‌هایی که از یه ایده ساده شروع شدن و الان هزاران کاربر دارن. راز موفقیتشون چیه؟",
    icon: Rocket,
    category: "استارتاپ",
    readTime: "۷ دقیقه",
  },
  {
    id: 4,
    title: "UI/UX که کاربرا عاشقش میشن: راهنمای کامل",
    excerpt:
      "طراحی رابط کاربری فقط قشنگ بودن نیست - باید کاربرپسند، سریع و لذت‌بخش باشه. بیا یاد بگیریم چطور یه تجربه فراموش‌نشدنی بسازیم.",
    icon: Lightbulb,
    category: "طراحی",
    readTime: "۶ دقیقه",
  },
  {
    id: 5,
    title: "SEO در سال ۲۰۲۵: چیزایی که باید بدونی",
    excerpt:
      "الگوریتم‌های گوگل عوض شدن، AI اومده وسط، و قوانین بازی فرق کرده. بیا ببینیم چطور می‌تونی توی نتایج جستجو بدرخشی.",
    icon: TrendingUp,
    category: "مارکتینگ",
    readTime: "۸ دقیقه",
  },
  {
    id: 6,
    title: "سوالات پرتکرار: همه چیز درباره همکاری با کاربلد",
    excerpt:
      "از قیمت‌گذاری تا زمان تحویل، از تکنولوژی‌ها تا پشتیبانی - جواب همه سوالاتی که ممکنه داشته باشی رو اینجا پیدا کن.",
    icon: MessageCircle,
    category: "Q&A",
    readTime: "۱۰ دقیقه",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">بلاگ و دانشنامه</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            از آخرین ترندهای تکنولوژی تا نکات کاربردی توسعه وب - همه چیزی که یه توسعه‌دهنده یا کارآفرین نیاز داره
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => {
            const Icon = post.icon
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-border/50 hover:border-primary/30">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-primary">{post.category}</span>
                        <span className="text-xs text-muted-foreground">• {post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <span className="text-sm font-medium text-primary group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                      بیشتر بخون
                      <span className="group-hover:translate-x-[-4px] transition-transform inline-block">←</span>
                    </span>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full font-medium transition-all duration-300 hover:scale-105">
            مشاهده همه مقالات
          </button>
        </motion.div>
      </div>
    </section>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Vazirmatn, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
  import { Analytics } from "@vercel/analytics/next"

const vazirmatn = Vazirmatn({ subsets: ["arabic", "latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "جمعی کاربلدان - ما موجودات دیجیتال می‌سازیم",
  description: "تیمی از ۱۰ توسعه‌دهنده که با کد، سکوت و دقت آینده را می‌سازند.",
    generator: 'saya.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className="dark">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  )
}

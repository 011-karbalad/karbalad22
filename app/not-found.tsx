import Link from "next/link"
import { Home, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-amber bg-gradient-to-br from-amber via-lilac to-amber bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-4">صفحه پیدا نشد</h2>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا منتقل شده است.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber text-white rounded-lg hover:bg-amber/90 transition-colors"
          >
            <Home className="w-5 h-5" />
            بازگشت به خانه
          </Link>

          <Link
            href="/tickets/new"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            گزارش مشکل
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

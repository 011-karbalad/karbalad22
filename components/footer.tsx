import Link from "next/link"
import { Github, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">کاربلد</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              تیم نسل Z که با کد تمیز، دانش روز و خلاقیت بی‌حد، پروژه‌های دیجیتال شما رو به واقعیت تبدیل می‌کنه.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  خدمات
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  بلاگ
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  تیم ما
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">منابع</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#process" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  روند کار
                </Link>
              </li>
              <li>
                <Link href="#values" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ارزش‌های ما
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  مهارت‌ها
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">شبکه‌های اجتماعی</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/011-karbalad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:farazbadraghe@gmail.com"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} کاربلد. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}

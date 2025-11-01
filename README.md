# جمعی کاربلد (سایا) - Saya Dev Collective

یک پلتفرم کامل برای نمایش پورتفولیو، مدیریت تیم، پروژه‌ها و سیستم تیکتینگ با طراحی minimal و artistic.

## ویژگی‌ها

### صفحه اصلی (Landing Page)
- ✅ Hero Section با فرم هندسی پیچیده 3D (الهام‌گرفته از کوانتوم/بلاکچین)
- ✅ بخش خدمات (Services)
- ✅ نمایش تیم با carousel سه‌بعدی و قابلیت flip
- ✅ نمونه کارها (Projects)
- ✅ روند همکاری (Process)
- ✅ اصول و ارزش‌ها با typing animation
- ✅ فرم تماس با portal animation
- ✅ طراحی RTL و فارسی کامل
- ✅ Responsive و Mobile-First

### پنل مدیریت (Admin Panel)
- ✅ احراز هویت با JWT
- ✅ Dashboard با آمار و دسترسی سریع
- ✅ مدیریت پروژه‌ها (CRUD)
- ✅ مدیریت تیم (CRUD)
- ✅ مدیریت تیکت‌ها
- ✅ مدیریت پیام‌های تماس
- ✅ Sidebar Navigation با RTL
- ✅ Mobile Responsive

### سیستم تیکتینگ
- ✅ ثبت تیکت توسط کاربران
- ✅ مشاهده لیست تیکت‌ها
- ✅ جزئیات تیکت با امکان پاسخ
- ✅ دسته‌بندی و اولویت‌بندی
- ✅ وضعیت‌های مختلف (باز، در حال بررسی، حل شده، بسته)

### سیستم اطلاع‌رسانی ایمیل
- ✅ ارسال ایمیل هنگام ثبت تیکت جدید
- ✅ ارسال ایمیل هنگام پاسخ به تیکت
- ✅ ارسال ایمیل هنگام دریافت پیام از فرم تماس
- ✅ قالب‌های ایمیل فارسی و RTL

## تکنولوژی‌ها

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS v4, Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Database**: MongoDB
- **Authentication**: JWT (jose), bcryptjs
- **Email**: Nodemailer
- **UI Components**: shadcn/ui

## نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 20+
- MongoDB (Cloud یا Local)
- حساب SMTP برای ارسال ایمیل

### مراحل نصب

1. کلون کردن پروژه:
\`\`\`bash
git clone <repository-url>
cd arthur
\`\`\`

2. نصب dependencies:
\`\`\`bash
npm install
\`\`\`

3. تنظیم متغیرهای محیطی:
\`\`\`bash
cp .env.example .env.local
\`\`\`

سپس فایل \`.env.local\` را ویرایش کنید:
\`\`\`env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/saya-collective
JWT_SECRET=your-super-secret-jwt-key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@sayacollective.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

4. Seed کردن دیتابیس:
\`\`\`bash
npm run seed
\`\`\`

این دستور یک admin user با اطلاعات زیر ایجاد می‌کند:
- Email: admin@sayacollective.com
- Password: admin123

5. اجرای پروژه:
\`\`\`bash
npm run dev
\`\`\`

پروژه در آدرس \`http://localhost:3000\` در دسترس خواهد بود.

## ساختار پروژه

\`\`\`
arthur/
├── app/
│   ├── admin/              # صفحات پنل مدیریت
│   ├── tickets/            # صفحات سیستم تیکتینگ
│   ├── login/              # صفحه ورود
│   ├── api/                # API Routes
│   └── page.tsx            # صفحه اصلی
├── components/             # کامپوننت‌های React
├── lib/
│   ├── db/                 # Database schemas و collections
│   ├── auth.ts             # Authentication utilities
│   ├── email.ts            # Email service
│   └── mongodb.ts          # MongoDB connection
├── types/                  # TypeScript types
├── public/                 # فایل‌های استاتیک
└── scripts/                # اسکریپت‌های کمکی
\`\`\`

## طراحی

### پالت رنگی
- **Foxwood Amber** (#C87E4F): رنگ اصلی برند
- **Deep Charcoal** (#1C1C1C): پس‌زمینه و متن
- **Mist Lilac** (#C6B4E2): رنگ accent

### فونت‌ها
- **Vazirmatn**: فونت اصلی فارسی
- **JetBrains Mono**: فونت monospace

### اصول طراحی
- Minimal و Artistic
- RTL و فارسی کامل
- Responsive و Mobile-First
- Micro-interactions و Smooth Animations
- Accessibility

## مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## تیم توسعه

جمعی سایا - ما موجودات دیجیتال می‌سازیم
\`\`\`

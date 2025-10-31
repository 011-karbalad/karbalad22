# راهنمای راه‌اندازی و تست پروژه Saya Dev Collective

این راهنما برای تست محلی پروژه بدون نیاز به دامین واقعی است.

## پیش‌نیازها

- Node.js 18+ 
- MongoDB (محلی یا Atlas)
- npm یا yarn

## مراحل راه‌اندازی

### 1. نصب Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. تنظیم MongoDB

**گزینه A: MongoDB محلی**
\`\`\`bash
# نصب MongoDB از mongodb.com
# اجرای MongoDB
mongod
\`\`\`

**گزینه B: MongoDB Atlas (رایگان)**
1. به [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas) بروید
2. یک cluster رایگان بسازید
3. connection string را کپی کنید

### 3. تنظیم Environment Variables

\`\`\`bash
# کپی کردن فایل نمونه
cp .env.local.example .env.local

# ویرایش .env.local و تنظیم مقادیر
\`\`\`

**برای تست Email (اختیاری):**
1. به [ethereal.email](https://ethereal.email) بروید
2. "Create Ethereal Account" را بزنید
3. اطلاعات SMTP را در .env.local قرار دهید

### 4. راه‌اندازی Database

\`\`\`bash
# اجرای script برای ایجاد admin user و import کردن داده‌ها
npm run seed
\`\`\`

این script:
- یک admin user با username: `admin` و password: `admin123` می‌سازد
- اعضای تیم را از team.json import می‌کند
- پروژه‌ها را از projects.json import می‌کند

### 5. اجرای پروژه

\`\`\`bash
npm run dev
\`\`\`

پروژه روی [http://localhost:3000](http://localhost:3000) اجرا می‌شود.

## تست قابلیت‌ها

### 1. صفحه اصلی
- به `http://localhost:3000` بروید
- تمام بخش‌ها را بررسی کنید: Hero, Services, Portfolio, Team, Process, Values, Contact

### 2. فرم تماس
- در بخش Contact فرم را پر کنید
- پیام شما در admin panel ذخیره می‌شود

### 3. سیستم تیکت (برای اعضای تیم)
- به `http://localhost:3000/tickets/new` بروید
- یک تیکت جدید ایجاد کنید
- تیکت‌های خود را در `http://localhost:3000/tickets` ببینید

### 4. Admin Panel
- به `http://localhost:3000/login` بروید
- با username: `admin` و password: `admin123` وارد شوید
- Dashboard: مشاهده آمار و دسترسی سریع
- Projects: مدیریت پروژه‌ها (افزودن، ویرایش، حذف)
- Team: مدیریت اعضای تیم
- Tickets: مشاهده و پاسخ به تیکت‌ها
- Contacts: مشاهده پیام‌های تماس

### 5. تست Email (اگر تنظیم کرده‌اید)
- یک تیکت یا پیام تماس ارسال کنید
- به [ethereal.email](https://ethereal.email) بروید
- روی "Open Ethereal" کلیک کنید
- ایمیل‌های ارسال شده را ببینید

## اطلاعات ورود پیش‌فرض

**Admin Panel:**
- Username: `admin`
- Password: `admin123`

**توجه:** این اطلاعات فقط برای تست است. در production حتماً آن‌ها را تغییر دهید.

## ساختار پروژه

\`\`\`
├── app/
│   ├── page.tsx              # صفحه اصلی
│   ├── login/                # صفحه ورود
│   ├── admin/                # Admin Panel
│   │   ├── page.tsx          # Dashboard
│   │   ├── projects/         # مدیریت پروژه‌ها
│   │   ├── team/             # مدیریت تیم
│   │   ├── tickets/          # مدیریت تیکت‌ها
│   │   └── contacts/         # مدیریت پیام‌ها
│   ├── tickets/              # سیستم تیکت (کاربران)
│   └── api/                  # API Routes
├── components/               # React Components
├── lib/
│   ├── mongodb.ts           # اتصال MongoDB
│   ├── auth.ts              # Authentication
│   ├── email.ts             # Email Service
│   └── db/                  # Database Schemas
├── types/                   # TypeScript Types
└── public/                  # Static Files
\`\`\`

## مشکلات رایج

### MongoDB Connection Error
- مطمئن شوید MongoDB در حال اجرا است
- connection string در .env.local را بررسی کنید

### JWT Error
- مطمئن شوید JWT_SECRET در .env.local تنظیم شده است

### Email Not Sending
- اگر email تنظیم نکرده‌اید، نگران نباشید - سیستم بدون email هم کار می‌کند
- برای تست، از Ethereal Email استفاده کنید

## توسعه بیشتر

### اضافه کردن Admin جدید
در MongoDB، یک document جدید در collection `users` اضافه کنید:

\`\`\`javascript
{
  username: "newadmin",
  email: "newadmin@example.com",
  password: "$2a$10$...", // hash شده با bcrypt
  role: "admin",
  createdAt: new Date()
}
\`\`\`

یا از script seed استفاده کنید و آن را ویرایش کنید.

### تغییر رنگ‌ها و طراحی
فایل `app/globals.css` را ویرایش کنید و متغیرهای CSS را تغییر دهید:

\`\`\`css
--color-amber: #C87E4F;
--color-charcoal: #1C1C1C;
--color-lilac: #C6B4E2;
\`\`\`

## آماده برای Production

قبل از deploy:
1. تمام environment variables را در production تنظیم کنید
2. password admin را تغییر دهید
3. JWT_SECRET قوی تنظیم کنید
4. email service واقعی (مثل SendGrid) تنظیم کنید
5. MongoDB Atlas production cluster راه‌اندازی کنید

## پشتیبانی

برای سوالات یا مشکلات، یک تیکت در سیستم ایجاد کنید یا با تیم تماس بگیرید.
\`\`\`

```json file="" isHidden

# Portofolio Developer

Aplikasi portofolio one-page yang dapat di-scroll, dibangun dengan Next.js (App Router), TypeScript, dan Tailwind CSS. Siap deploy ke Vercel.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Deploy ke Vercel

1. Push folder ini ke repository GitHub.
2. Import repository di https://vercel.com/new
3. Vercel akan otomatis mendeteksi framework Next.js — klik Deploy.

## Kustomisasi

- **Data proyek, skill, dan timeline**: edit `lib/data.ts`
- **Warna & tipografi**: edit `tailwind.config.ts` dan `app/globals.css`
- **Screenshot proyek**: ganti file placeholder di `public/projects/` dengan tangkapan layar asli (format `.png`/`.jpg`, lalu sesuaikan path di `lib/data.ts`)
- **Info kontak**: edit `components/Contact.tsx`

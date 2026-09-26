export type Project = {
  slug: string;
  name: string;
  kind: "browser" | "terminal";
  url: string;
  problem: string;
  approach: string;
  stack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    slug: "inventaris-umkm",
    name: "Sistem Inventaris UMKM",
    kind: "browser",
    url: "inventaris.app",
    problem:
      "Pemilik UMKM kesulitan melacak stok barang lintas cabang secara real-time, menyebabkan selisih stok saat rekonsiliasi bulanan.",
    approach:
      "Dashboard multi-cabang dengan sinkronisasi stok real-time, notifikasi stok menipis, dan laporan otomatis mingguan.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    image: "/projects/inventaris.svg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "lms-smk",
    name: "Platform LMS untuk SMK",
    kind: "browser",
    url: "kelas.sekolah.id",
    problem:
      "Guru kesulitan mendistribusikan modul praktikum dan menilai tugas coding siswa secara konsisten.",
    approach:
      "LMS ringan dengan code runner terintegrasi, rubrik penilaian otomatis, dan progres belajar per siswa.",
    stack: ["React", "Node.js", "MongoDB", "Docker"],
    image: "/projects/lms.svg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "cli-deploy",
    name: "CLI Deployment Otomatis",
    kind: "terminal",
    url: "~/tools/deploy-cli",
    problem:
      "Tim kecil membuang waktu melakukan deployment manual berulang kali dengan langkah yang rawan human error.",
    approach:
      "CLI tool yang membungkus build, test, dan deploy ke VPS dalam satu perintah, lengkap dengan rollback otomatis.",
    stack: ["Go", "Bash", "Docker", "GitHub Actions"],
    image: "/projects/cli.svg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "booking-klinik",
    name: "Aplikasi Booking Klinik",
    kind: "browser",
    url: "klinikku.id",
    problem:
      "Pasien harus mengantre telepon untuk membuat janji temu, dan admin klinik kewalahan mengelola jadwal manual.",
    approach:
      "Sistem booking dengan kalender dokter real-time, reminder via WhatsApp API, dan panel admin untuk manajemen jadwal.",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    image: "/projects/klinik.svg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "budgeting-personal",
    name: "Budgeting & Keuangan Pribadi",
    kind: "browser",
    url: "duitku.app",
    problem:
      "Pengguna kesulitan mengelompokkan pengeluaran harian dan tidak punya gambaran arus kas bulanan yang jelas.",
    approach:
      "Aplikasi pencatatan pengeluaran dengan kategori otomatis berbasis pola transaksi dan visualisasi arus kas bulanan.",
    stack: ["React", "Express", "MySQL", "Chart.js"],
    image: "/projects/budget.svg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "api-monitoring",
    name: "Dashboard Monitoring API",
    kind: "terminal",
    url: "~/apps/api-monitor",
    problem:
      "Tim backend tidak punya visibilitas terhadap latency dan error rate API produksi secara real-time.",
    approach:
      "Dashboard monitoring dengan health check berkala, alert via Slack, dan grafik latency historis.",
    stack: ["Python", "FastAPI", "Redis", "Grafana"],
    image: "/projects/monitor.svg",
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const skillGroups = [
  {
    label: "Bahasa & Framework",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Go"],
  },
  {
    label: "Data & Backend",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "REST API", "GraphQL"],
  },
  {
    label: "Tooling & Infra",
    items: ["Docker", "GitHub Actions", "Vercel", "Nginx", "Linux", "Git"],
  },
  {
    label: "Desain & UI",
    items: ["Tailwind CSS", "Figma", "Responsive Design", "Accessibility"],
  },
];

export const timeline = [
  {
    period: "2024 — Sekarang",
    title: "Fullstack Developer",
    place: "Studio Produk Digital",
    desc: "Membangun dan memelihara produk web untuk klien UMKM hingga institusi pendidikan, dari arsitektur hingga deployment.",
  },
  {
    period: "2022 — 2024",
    title: "Frontend Developer",
    place: "Startup EdTech",
    desc: "Mengembangkan antarmuka platform belajar untuk ribuan pengguna aktif, fokus pada performa dan aksesibilitas.",
  },
  {
    period: "2021 — 2022",
    title: "Magang Software Engineering",
    place: "Perusahaan Teknologi Lokal",
    desc: "Berkontribusi pada fitur internal tools dan belajar praktik pengembangan perangkat lunak berbasis tim.",
  },
  {
    period: "2018 — 2021",
    title: "SMK — Rekayasa Perangkat Lunak",
    place: "SMK Negeri",
    desc: "Dasar pemrograman, basis data, dan pengembangan aplikasi web melalui proyek-proyek praktikum.",
  },
];

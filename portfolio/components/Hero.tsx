import { ArrowRight, Circle } from "lucide-react";

export default function Hero() {
  return (
    <section className="container-px mx-auto max-w-6xl min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="inline-flex w-fit items-center gap-2 chip mb-8">
        <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400" />
        Tersedia untuk proyek baru
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-medium text-white max-w-4xl">
        Saya membangun{" "}
        <span className="font-serif italic text-emerald-400 font-normal">
          produk web
        </span>{" "}
        yang rapi, cepat, dan siap dipakai.
      </h1>

      <p className="mt-8 max-w-prose text-zinc-400 text-lg">
        Fullstack Developer yang fokus pada arsitektur bersih dan pengalaman
        pengguna yang tanpa gesekan — dari rancangan basis data hingga
        antarmuka yang dipakai setiap hari.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a href="#proyek" className="btn-primary">
          Lihat Proyek
          <ArrowRight className="w-4 h-4" />
        </a>
        <a href="#kontak" className="btn-secondary">
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}

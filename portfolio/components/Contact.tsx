import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <footer id="kontak" className="section container-px mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <p className="eyebrow">Mari terhubung</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-medium text-white">
          Punya proyek?{" "}
          <span className="font-serif italic text-emerald-400 font-normal">
            Mari bicara.
          </span>
        </h2>
        <p className="mt-5 text-zinc-400">
          Terbuka untuk kolaborasi proyek, posisi fulltime, maupun proyek
          lepas. Kirim pesan dan saya akan membalas secepatnya.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="mailto:nama@email.com" className="btn-primary">
            <Mail className="w-4 h-4" />
            nama@email.com
          </a>
          <a href="#" className="btn-secondary">
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a href="#" className="btn-secondary">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between gap-4 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Nama Anda. Seluruh hak cipta dilindungi.</p>
        <p>Dibangun dengan Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

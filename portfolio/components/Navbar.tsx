import Link from "next/link";

const links = [
  { href: "#proyek", label: "Proyek" },
  { href: "#skill", label: "Keahlian" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
      <nav className="container-px mx-auto max-w-6xl flex items-center justify-between h-16">
        <Link href="#" className="font-serif italic text-lg text-white">
          nama.dev
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#kontak" className="btn-secondary !py-2 text-xs">
          Hubungi Saya
        </a>
      </nav>
    </header>
  );
}

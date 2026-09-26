import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="pengalaman" className="section container-px mx-auto max-w-6xl">
      <p className="eyebrow">Perjalanan</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-medium text-white mb-14">
        Pengalaman &{" "}
        <span className="font-serif italic text-emerald-400 font-normal">
          edukasi
        </span>
      </h2>

      <div className="relative max-w-3xl">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800" />
        <ol className="space-y-12">
          {timeline.map((t) => (
            <li key={t.title} className="relative pl-10">
              <span className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-emerald-400" />
              <p className="text-xs text-zinc-500 font-mono">{t.period}</p>
              <h3 className="mt-1 text-white font-medium">{t.title}</h3>
              <p className="text-sm text-zinc-500">{t.place}</p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-prose">
                {t.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

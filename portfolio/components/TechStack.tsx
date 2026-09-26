import { skillGroups } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="skill" className="section container-px mx-auto max-w-6xl">
      <p className="eyebrow">Peralatan kerja</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-medium text-white mb-12">
        Tumpukan{" "}
        <span className="font-serif italic text-emerald-400 font-normal">
          teknologi
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group) => (
          <div key={group.label} className="card p-6">
            <h3 className="text-sm text-zinc-500 mb-4">{group.label}</h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-zinc-200 text-sm flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

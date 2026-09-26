import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="proyek" className="section container-px mx-auto max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div>
          <p className="eyebrow">Karya terpilih</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-medium text-white">
            Proyek yang{" "}
            <span className="font-serif italic text-emerald-400 font-normal">
              pernah dibangun
            </span>
          </h2>
        </div>
        <p className="max-w-sm text-sm text-zinc-500">
          Sebagian proyek web yang telah dirancang, dibangun, dan
          didampingi hingga produksi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

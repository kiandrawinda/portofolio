import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card overflow-hidden flex flex-col">
      {/* window mockup */}
      <div className="border-b border-zinc-800 bg-zinc-900">
        <div className="flex items-center gap-2 px-4 py-3">
          <span className="w-3 h-3 rounded-full bg-zinc-700" />
          <span className="w-3 h-3 rounded-full bg-zinc-700" />
          <span className="w-3 h-3 rounded-full bg-zinc-700" />
          <div className="ml-3 flex-1 text-xs text-zinc-500 font-mono truncate">
            {project.kind === "terminal" ? project.url : `https://${project.url}`}
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-zinc-950">
          <Image
            src={project.image}
            alt={`Tampilan ${project.name}`}
            fill
            className="object-cover opacity-90"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-medium text-lg">{project.name}</h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
          {project.problem}
        </p>
        <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
          {project.approach}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-4 border-t border-zinc-800">
          <a
            href={project.demoUrl}
            className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300"
          >
            Live Demo <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={project.githubUrl}
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white"
          >
            GitHub <Github className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

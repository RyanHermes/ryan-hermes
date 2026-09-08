import Image from "next/image";

const projects = [
  {
    title: "Cedar’s Mediterranean Lounge",
    kind: "Business website",
    image: "/projects/cedars.png",
    alt: "Cedar’s Mediterranean Lounge website banner",
    imageClass: "object-contain",
    caption: "Restaurant website",
    description:
      "A website for a Windsor restaurant, bringing dining, catering, and hall-rental information together in one place.",
    contribution:
      "I developed and maintain the Next.js website, with dedicated service pages, responsive layouts, and an image gallery.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    gitUrl: "https://github.com/RyanHermes/cedars-mediterranean-lounge",
    liveUrl: "https://cedarsmediterraneanlounge.ca/",
    detailLabel: "My contribution",
  },
  {
    title: "Tourify",
    kind: "Android · Team project",
    image: "/projects/tourify.png",
    alt: "Tourify wireflow connecting destination search, exploration, saved destinations, and profile screens",
    imageClass: "object-cover object-[center_35%]",
    caption: "App wireflow · open to explore",
    description:
      "An Android app for discovering travel destinations, planning trips, and sharing experiences. Built as a university team project.",
    contribution:
      "Contributed the Explore screen layout and Explore Results flow, including navigation buttons and a fix for remembered sign-in data.",
    tech: ["Kotlin", "Android", "Express", "SQLite"],
    gitUrl: "https://github.com/BorhanSaflo/tourify-android-app",
    detailLabel: "My contribution",
  },
  {
    title: "Volt Vista",
    kind: "Web application · University prototype",
    image: "/projects/volt-vista.png",
    alt: "Volt Vista dashboard with energy consumption chart, device usage, and energy-saving suggestions",
    imageClass: "object-contain",
    caption: "Energy dashboard prototype",
    description:
      "A home energy-management prototype that brings consumption trends, device monitoring, and overconsumption alerts into one dashboard.",
    contribution:
      "The interface connects overall energy usage with individual devices and recommendations. Created for a software engineering course; the dashboard presents prototype data.",
    tech: ["Next.js", "TypeScript", "Data visualization"],
    gitUrl: "https://github.com/BorhanSaflo/volt-vista",
    liveUrl: "https://volt-vista.vercel.app/",
    detailLabel: "Project focus",
  },
];
export function Projects() {
  return (
    <section
      id="projects"
      className="section-space"
      aria-labelledby="projects-title"
    >
      <div className="site-container">
        <div className="mb-10">
          <p className="eyebrow mb-3">Selected work</p>
          <h2 id="projects-title" className="section-title">
            Projects
          </h2>
        </div>
        <div className="space-y-7">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="project-image group relative block min-w-0 border-b border-white/10 lg:border-b-0 lg:border-r"
                aria-label={`View ${project.title} ${project.caption.toLowerCase()}`}
              >
                <div className="relative aspect-[16/10] w-full lg:aspect-auto lg:h-full lg:min-h-[23rem]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1152px) 510px, (min-width: 1024px) 45vw, 100vw"
                    className={project.imageClass}
                  />
                </div>
                <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-md border border-white/10 bg-neutral-950/95 px-3 py-2 text-sm text-neutral-200">
                  <span>{project.caption}</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
              <div className="flex min-w-0 flex-col p-6 sm:p-8">
                <p className="text-sm text-blue-300">{project.kind}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-300">
                  {project.description}
                </p>
                <p className="mt-5 text-sm font-medium text-white">
                  {project.detailLabel}
                </p>
                <p className="mt-1 text-base leading-relaxed text-neutral-400">
                  {project.contribution}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="skill-tag">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      aria-label={`${project.title} live site`}
                    >
                      Visit site ↗
                    </a>
                  )}
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    aria-label={`${project.title} source code`}
                  >
                    Source code ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="min-w-0 rounded-xl border border-white/10 p-6">
            <p className="text-sm text-blue-300">Java3D · Team project</p>
            <h3 className="mt-2 text-xl font-semibold">EscapeJava</h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-400">
              A 3D escape-room game set in the University of Windsor’s Java
              Lounge, combining exploration with puzzles and obstacles.
            </p>
            <a
              href="https://github.com/BorhanSaflo/EscapeJava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-3"
              aria-label="EscapeJava source code"
            >
              Source code ↗
            </a>
          </article>
          <article className="min-w-0 rounded-xl border border-white/10 p-6">
            <p className="text-sm text-blue-300">Next.js · Personal project</p>
            <h3 className="mt-2 text-xl font-semibold">This portfolio</h3>
            <p className="mt-3 text-base leading-relaxed text-neutral-400">
              The source for this site: Next.js, TypeScript, and Tailwind CSS,
              deployed on Vercel. Built to make my work easy to browse on any
              screen.
            </p>
            <a
              href="https://github.com/RyanHermes/ryan-hermes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-3"
              aria-label="Personal Portfolio source code"
            >
              Source code ↗
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

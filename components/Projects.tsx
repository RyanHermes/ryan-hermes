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
        <div className="section-rule mb-10">
          <h2 id="projects-title" className="section-title">
            Selected work
          </h2>
        </div>
        <div className="space-y-12 md:space-y-16">
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid min-w-0 items-start gap-6 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10"
            >
              <a
                href={project.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group block min-w-0"
                aria-label={`View ${project.title} ${project.caption.toLowerCase()}`}
              >
                <div className="project-image relative aspect-[16/10] w-full overflow-hidden rounded">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 768px) 240px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 48px)"
                    className={project.imageClass}
                  />
                </div>
                <span className="mt-3 flex items-center justify-between gap-3 text-sm text-neutral-400 transition-colors group-hover:text-neutral-200">
                  <span>{project.caption}</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
              <div className="min-w-0">
                <h3 className="text-xl font-medium tracking-tight text-neutral-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">{project.kind}</p>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">
                  {project.description}
                </p>
                <p className="mt-3 text-base leading-relaxed text-neutral-400">
                  <span className="sr-only">{project.detailLabel}: </span>
                  {project.contribution}
                </p>
                <ul
                  className="inline-list mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-neutral-400"
                  aria-label="Technologies"
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                      aria-label={`${project.title} live site`}
                    >
                      Visit site <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                    aria-label={`${project.title} source code`}
                  >
                    Source code <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:mt-16 md:grid-cols-2 md:gap-12">
          <article className="min-w-0">
            <h3 className="text-lg font-medium">EscapeJava</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Java3D · Team project
            </p>
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
              Source code <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="min-w-0">
            <h3 className="text-lg font-medium">This portfolio</h3>
            <p className="mt-2 text-sm text-neutral-400">
              Next.js · Personal project
            </p>
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
              Source code <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

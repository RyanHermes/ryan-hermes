import { useFadeInUp, useSlideInX, useStaggerChildren } from "@/lib/animations";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faCodeBranch,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
config.autoAddCss = false;

type Project = {
  title: string;
  description: string;
  gitUrl: string;
  liveUrl?: string;
  tech: string[];
  highlight?: string;
};

const projects: Project[] = [
  {
    title: "Tourify",
    description:
      "An Android application developed in Kotlin with an Express.js backend and SQLite database that allows users to explore destinations, plan itineraries, and share travel experiences.",
    gitUrl: "https://github.com/BorhanSaflo/tourify-android-app",
    tech: ["Kotlin", "Android", "Express", "SQLite"],
    highlight: "Travel planning & sharing platform",
  },
  {
    title: "Volt Vista",
    description:
      "A prototype energy monitoring and management system for homeowners engineered with Next.js and TypeScript.",
    gitUrl: "https://github.com/BorhanSaflo/volt-vista",
    liveUrl: "https://volt-vista.vercel.app",
    tech: ["Next.js", "TypeScript", "Energy"],
    highlight: "Home energy insights prototype",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal website built with Next.js and Tailwind CSS, optimized for performance and hosted on Vercel with CI/CD.",
    gitUrl: "https://github.com/RyanHermes/ryan-hermes",
    liveUrl: "https://ryanhermes.ca",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "CI/CD"],
    highlight: "Fast, accessible personal site",
  },
  {
    title: "Cedars Lounge",
    description:
      "An SEO-optimized restaurant website featuring a reservation system, developed with Next.js, Tailwind CSS, and PostgreSQL.",
    gitUrl: "https://github.com/RyanHermes/cedars-mediterranean-lounge",
    liveUrl: "https://cedarsmediterraneanlounge.ca/",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "SEO"],
    highlight: "Restaurant UX & reservation flow",
  },
  {
    title: "EscapeJava",
    description:
      "A Java3D project created for COMP 2800, designed to simulate an escape room game set in the Java Lounge, a frequently visited room at our university. The game challenges players with various puzzles and obstacles while exploring a 3D virtual environment.",
    gitUrl: "https://github.com/BorhanSaflo/EscapeJava",
    tech: ["Java", "Java3D", "Game Development"],
    highlight: "Interactive 3D puzzle experience",
  },
];

export function Projects() {
  const container = useStaggerChildren(0.12);
  const card = useSlideInX(24);
  const heading = useFadeInUp(0.1, 40);

  return (
    <section className="relative w-full overflow-hidden py-20" id="projects">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.12),transparent_80%)]" />
      <div className="mx-auto w-full max-w-[2200px] px-4 md:px-10">
        <motion.h2
          variants={heading}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative z-10 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-6xl"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-neutral-400 md:text-base"
        >
          A concise selection highlighting breadth (frontend, backend, mobile,
          3D) and depth in modern web engineering.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid w-full gap-8 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={card}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-800/70 bg-gradient-to-br from-neutral-900/80 via-neutral-900/50 to-neutral-800/40 p-[1px] shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="relative z-10 flex h-full flex-col rounded-2xl bg-neutral-900/70 p-6 transition-colors duration-300 group-hover:bg-neutral-900/80">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="cursor-default text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    {project.highlight && (
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-blue-400/70">
                        {project.highlight}
                      </p>
                    )}
                  </div>
                  <div className="flex shrink-0 gap-2">
                    <Link
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="inline-flex items-center justify-center rounded-md border border-neutral-700/60 bg-neutral-800/60 px-3 py-2 text-xs font-medium text-neutral-200 ring-offset-neutral-900 transition-all hover:border-blue-500/60 hover:bg-blue-600/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2"
                    >
                      <FontAwesomeIcon
                        icon={faCodeBranch}
                        className="h-3 w-3"
                      />
                      <span className="ml-1 hidden md:inline">Code</span>
                    </Link>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="inline-flex items-center justify-center rounded-md border border-green-600/50 bg-green-700/20 px-3 py-2 text-xs font-medium text-green-300 ring-offset-neutral-900 transition-all hover:border-green-500/70 hover:bg-green-600/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500/70 focus-visible:ring-offset-2"
                      >
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          className="h-3 w-3"
                        />
                        <span className="ml-1 hidden md:inline">Live</span>
                      </Link>
                    )}
                  </div>
                </div>

                <p className="mb-5 cursor-default text-sm leading-relaxed text-neutral-300 transition-colors duration-300 group-hover:text-neutral-100">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="cursor-default rounded-full border border-blue-600/30 bg-blue-600/15 px-3 py-1 text-xs text-blue-300 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-600/30 group-hover:text-blue-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 mix-blend-screen blur transition duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, rgba(59,130,246,0.25), rgba(16,185,129,0.15), rgba(147,51,234,0.25))",
                }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

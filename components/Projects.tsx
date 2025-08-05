import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

// Prevent FontAwesome from dynamically adding its CSS since we imported it above
config.autoAddCss = false;

const projects = [
  {
    title: "Tourify",
    description:
      "An Android application developed in Kotlin with an Express.js backend and SQLite database that allows users to explore destinations, plan itineraries, and share travel experiences.",
    gitUrl: "https://github.com/BorhanSaflo/tourify-android-app",
    tech: ["Kotlin", "Android", "Express.js", "SQLite"],
  },
  {
    title: "Volt Vista",
    description:
      "A prototype energy monitoring and management system for homeowners engineered with Next.js and TypeScript.",
    gitUrl: "https://github.com/BorhanSaflo/volt-vista",
    liveUrl: "https://volt-vista.vercel.app",
    tech: ["Next.js", "TypeScript", "Energy Management"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal website built with Next.js and Tailwind CSS, optimized for performance and hosted on Vercel with CI/CD.",
    gitUrl: "https://github.com/RyanHermes/ryan-hermes",
    liveUrl: "https://ryanhermes.ca",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "CI/CD"],
  },
  {
    title: "Cedars Lounge",
    description:
      "An SEO-optimized restaurant website featuring a reservation system, developed with Next.js, Tailwind CSS, and PostgreSQL.",
    gitUrl: "https://github.com/RyanHermes/cedars-mediterranean-lounge",
    liveUrl: "https://cedars-lounge.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "SEO"],
  },
  {
    title: "EscapeJava",
    description:
      "A Java3D project created for COMP 2800, designed to simulate an escape room game set in the Java Lounge, a frequently visited room at our university. The game challenges players with various puzzles and obstacles while exploring a 3D virtual environment.",
    gitUrl: "https://github.com/BorhanSaflo/EscapeJava",
    tech: ["Java", "Java3D", "Game Development"],
  },
];

export function Projects() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-10">
      <h2 className="relative z-20 cursor-default bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 md:text-4xl lg:text-7xl">
        Projects
      </h2>
      <p className="mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg">
        A showcase of my development work spanning web applications, mobile
        development, and innovative solutions.
      </p>
      <div className="mt-10 grid grid-cols-1 justify-center gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group cursor-default rounded-lg border border-neutral-700 bg-neutral-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-neutral-800/80 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className="mb-4 flex items-start justify-between">
              <h3 className="cursor-default text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <Link
                  href={project.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-md"
                >
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="h-3 w-3"
                  />
                  Code
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-md"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="h-3 w-3"
                    />
                    Live
                  </Link>
                )}
              </div>
            </div>

            <p className="mb-4 cursor-default leading-relaxed text-neutral-300 transition-colors duration-300 group-hover:text-neutral-100">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((technology, idx) => (
                <span
                  key={idx}
                  className="cursor-default rounded-md bg-neutral-700 px-3 py-1 text-sm text-neutral-200 transition-all duration-300 group-hover:bg-neutral-600 group-hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

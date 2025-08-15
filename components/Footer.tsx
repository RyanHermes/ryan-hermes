"use client";

import { redditMono } from "@/app/fonts";
import { memo } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function FooterComponent() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-neutral-800 bg-black px-6 py-10 text-neutral-300">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h2
            className={`${redditMono.className} mb-2 text-xl font-semibold text-white`}
          >
            Ryan Hermes
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
            Full Stack Developer focused on crafting performant, accessible, and
            delightful digital experiences.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:justify-around">
          <div>
            <h3 className="mb-2 text-sm font-bold tracking-wide text-white">
              Navigate
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="transition-colors hover:text-white"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#experiences"
                  className="transition-colors hover:text-white"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="transition-colors hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/Ryan_Hermes_Resume.pdf"
                  target="_blank"
                  rel="noopener"
                  className="transition-colors hover:text-white"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-bold tracking-wide text-white">
              Connect
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="mailto:ryan.hermes.dev@gmail.com"
                  className="group flex items-center gap-2 transition-colors hover:text-white"
                  aria-label="Email"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-4 w-4 text-neutral-400 group-hover:text-white"
                  />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RyanHermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-colors hover:text-white"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-4 w-4 text-neutral-400 group-hover:text-white"
                  />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ryan-hermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 transition-colors hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-4 w-4 text-neutral-400 group-hover:text-white"
                  />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block">
            <h3 className="mb-2 text-sm font-bold tracking-wide text-white">
              Back to top
            </h3>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 rounded border border-neutral-700 px-3 py-2 text-sm text-neutral-300 transition hover:border-neutral-500 hover:text-white"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon
                icon={faArrowUp}
                className="h-4 w-4 text-neutral-400 group-hover:text-white"
              />
              Top
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row">
        <p>&copy; {year} Ryan Hermes. All rights reserved.</p>
        <p className="text-[10px]">Built with Next.js • Deployed on Vercel</p>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
export default Footer;

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useActiveSection } from "@/lib/useActiveSection";

import { majorMonoDisplay } from "../app/fonts";
import styles from "../styles/hamburgers.module.css";

const buttonClass =
  "duration-400 transform rounded-lg border border-black bg-transparent px-6 py-2 font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white dark:text-white";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experiences", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const activeId = useActiveSection([
    "about",
    "skills",
    "experiences",
    "projects",
  ]);

  useEffect(() => {
    const THRESHOLD_HIDE = 140; // px before we allow hiding
    const MIN_DELTA = 8; // ignore micro scrolls
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const lastY = lastScrollYRef.current;
          const delta = currentY - lastY;
          const goingDown = delta > 0;

          // Show if near top always
          if (currentY < THRESHOLD_HIDE) {
            setIsHidden(false);
          } else {
            if (Math.abs(delta) > MIN_DELTA) {
              if (goingDown && !isOpen) {
                setIsHidden(true);
              } else {
                setIsHidden(false);
              }
            }
          }
          lastScrollYRef.current = currentY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-black/90 p-4 backdrop-blur-sm transition-transform duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
        role="banner"
      >
        <div className="flex items-center">
          <h1
            className={`${majorMonoDisplay.className} ml-4 cursor-default text-5xl font-bold`}
          >
            R
          </h1>
        </div>
        <nav aria-label="Primary" role="navigation">
          <ul className="m-0 flex list-none p-0">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = id === activeId;
              return (
                <li key={href} className="mx-4 hidden lg:block">
                  <Link href={href} aria-label={`Jump to ${label} section`}>
                    <button
                      className={`${buttonClass} relative ${isActive ? "text-white dark:text-white" : ""}`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {label}
                      {isActive && (
                        <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600" />
                      )}
                    </button>
                  </Link>
                </li>
              );
            })}
            <li className="mx-4 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${styles.hamburger} ${styles["hamburger--collapse"]} ${isOpen ? styles["is-active"] : ""}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                <span className={styles["hamburger-box"]}>
                  <span className={styles["hamburger-inner"]}></span>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transform bg-black text-white transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} lg:hidden`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <ul className="flex h-full flex-col items-center justify-center p-4">
          {NAV_LINKS.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = id === activeId;
            return (
              <li key={href} className="my-2">
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`font-bold transition-colors ${isActive ? "text-blue-400" : ""}`}
                  aria-label={`Jump to ${label} section`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { majorMonoDisplay } from "@/app/fonts";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#experiences", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
];

export default function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  function closeMenu() {
    dialogRef.current?.close();
  }
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => {
      if (desktop.matches) closeMenu();
    };
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen]);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-neutral-950/90 backdrop-blur-lg">
        <div className="site-container flex h-20 items-center justify-between gap-6">
          <a
            href="#top"
            aria-label="Ryan Hermes, back to top"
            className={`${majorMonoDisplay.className} text-4xl text-white`}
          >
            R
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:ryanhermes@pm.me" className="text-link">
                  Contact <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </nav>
          <button
            ref={openerRef}
            type="button"
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-neutral-700 px-3 text-sm lg:hidden"
            onClick={() => {
              dialogRef.current?.showModal();
              setIsOpen(true);
            }}
          >
            Menu
          </button>
        </div>
      </header>
      <dialog
        ref={dialogRef}
        id="mobile-menu"
        className="nav-dialog"
        aria-labelledby="menu-title"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = dialogRef.current?.querySelectorAll<
            HTMLAnchorElement | HTMLButtonElement
          >("a[href], button:not([disabled])");
          if (!controls?.length) return;
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onClose={() => {
          setIsOpen(false);
          openerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <h2 id="menu-title" className="text-lg font-semibold">
            Navigation
          </h2>
          <button
            type="button"
            autoFocus
            onClick={closeMenu}
            className="min-h-11 rounded-lg px-3 text-sm text-neutral-300"
            aria-label="Close navigation menu"
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav aria-label="Mobile">
          <ul className="mt-6 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-lg text-neutral-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:ryanhermes@pm.me"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-lg text-blue-300"
              >
                Contact ↗
              </a>
            </li>
          </ul>
        </nav>
      </dialog>
    </>
  );
}

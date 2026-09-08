export function About() {
  return (
    <section id="about" className="section-space" aria-labelledby="about-title">
      <div className="site-container grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow mb-3">A little background</p>
          <h2 id="about-title" className="section-title">
            About me
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-neutral-300 md:text-lg">
            <p>
              I’m a software engineer based in Vancouver. I work on Amazon’s
              Payment Products team, following engineering roles at UrSafe Drone
              Solution and RIIS.
            </p>
            <p>
              I studied Computer Science at the University of Windsor,
              specializing in Software Engineering with a minor in Mathematics.
              Alongside my studies, I worked as a teaching assistant, helping
              students develop their programming skills.
            </p>
            <p>
              Outside my day-to-day work, I build web and mobile projects,
              including websites for local businesses.
            </p>
          </div>
        </div>
        <div className="space-y-8 lg:pt-10">
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-neutral-400">
              Education
            </h3>
            <p className="text-xl font-semibold text-white">
              BSc (Honours), Computer Science
            </p>
            <p className="mt-2 text-base leading-relaxed text-neutral-300">
              Software Engineering Specialization
              <br />
              Minor in Mathematics
            </p>
            <p className="mt-4 text-base text-neutral-300">
              University of Windsor
            </p>
            <p className="mt-1 text-sm text-neutral-400">
              September 2021 — April 2025
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect with me</h3>
            <p className="mt-3 text-base text-neutral-400">
              Vancouver, British Columbia, Canada
            </p>
            <a href="mailto:ryanhermes@pm.me" className="text-link break-all">
              ryanhermes@pm.me
            </a>
            <br />
            <a href="tel:+12265061730" className="text-link">
              +1 (226) 506-1730
            </a>
            <div className="mt-2 flex flex-wrap gap-x-6">
              <a
                href="https://github.com/RyanHermes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ryan--hermes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

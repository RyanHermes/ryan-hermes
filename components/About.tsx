export function About() {
  return (
    <section id="about" className="section-space" aria-labelledby="about-title">
      <div className="site-container">
        <div className="section-rule grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <h2 id="about-title" className="section-title">
              About me
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-400">
              <p>
                I studied Computer Science at the University of Windsor,
                specializing in Software Engineering with a minor in
                Mathematics. Alongside my studies, I worked as a teaching
                assistant, helping students develop their programming skills.
              </p>
              <p>
                Outside my day-to-day work, I build web and mobile projects,
                including websites for local businesses.
              </p>
            </div>
          </div>
          <div className="md:pt-1">
            <div>
              <h3 className="mb-5 text-sm text-neutral-400">Education</h3>
              <p className="text-base font-medium text-neutral-200">
                BSc (Honours), Computer Science
              </p>
              <p className="mt-2 text-base leading-relaxed text-neutral-400">
                Software Engineering Specialization
                <br />
                Minor in Mathematics
              </p>
              <p className="mt-4 text-base text-neutral-400">
                University of Windsor
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                September 2021 — April 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

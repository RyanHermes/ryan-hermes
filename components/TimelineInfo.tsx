const experience = [
  {
    company: "Amazon",
    role: "Software Development Engineer",
    dates: "Aug 2026 — Present",
    current: true,
    detail: "Payment Products team · Vancouver, Canada",
    url: "https://www.amazon.com/",
  },
  {
    company: "UrSafe Drone Solution",
    role: "Software Engineer",
    dates: "Apr 2026 — Aug 2026",
    current: false,
  },
  {
    company: "RIIS LLC",
    role: "Software Engineer",
    dates: "Jan 2026 — Apr 2026",
    current: false,
  },
  {
    company: "University of Windsor",
    role: "Teaching Assistant",
    dates: "Jan 2023 — Apr 2025",
    current: false,
    detail:
      "Supported students in introductory computer science and C programming through labs, one-to-one assistance, and code review.",
  },
  {
    company: "KōCH Technologies",
    role: "Frontend Developer",
    dates: "Apr 2024 — Aug 2024",
    current: false,
    detail:
      "Developed responsive interfaces with React, TypeScript, and Tailwind CSS, collaborating with design and backend teams.",
  },
  {
    company: "Property Revive",
    role: "Software Developer Intern",
    dates: "May 2023 — Aug 2023",
    current: false,
    detail: "Worked on web development using JavaScript, HTML, and CSS.",
    url: "https://propertyrevive.ca/",
  },
];

export function TimelineInfo() {
  return (
    <div className="site-container">
      <div className="section-rule mb-5 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 id="experience-title" className="section-title">
            Experience
          </h2>
        </div>
        <a
          href="https://www.linkedin.com/in/ryan--hermes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ol className="space-y-2">
        {experience.map((item) => (
          <li
            key={item.company}
            className="grid gap-2 py-5 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10"
          >
            <p className="pt-1 text-sm leading-relaxed text-neutral-400">
              {item.dates}
            </p>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-base font-medium text-neutral-100">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                      aria-label={`${item.company} website`}
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </h3>
                {item.current && (
                  <span className="text-sm text-neutral-400">Current</span>
                )}
              </div>
              <p className="mt-1 text-base text-neutral-400">{item.role}</p>
              {item.detail && (
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-400">
                  {item.detail}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

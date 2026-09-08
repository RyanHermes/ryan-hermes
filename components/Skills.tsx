const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "TypeScript", "C/C++", "Kotlin"],
  },
  {
    category: "Applications & data",
    items: [
      "React",
      "Next.js",
      "Express",
      "React Native",
      "Android",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    category: "Tools & platforms",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "AWS",
      "Azure (Bicep)",
      "Tailwind CSS",
      "Figma",
    ],
  },
];
export function Skills() {
  return (
    <section
      id="skills"
      className="section-space"
      aria-labelledby="skills-title"
    >
      <div className="site-container">
        <h2 id="skills-title" className="section-title section-rule">
          Technologies
        </h2>
        <div className="mt-6 space-y-5">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="grid gap-2 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-10"
            >
              <h3 className="text-base text-neutral-200">{category}</h3>
              <ul className="inline-list flex flex-wrap gap-x-3 gap-y-2 text-base text-neutral-400">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-neutral-400 md:ml-[17.5rem]">
          Additional experience in API design, responsive interfaces, and
          performance optimization.
        </p>
      </div>
    </section>
  );
}

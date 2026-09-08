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
      className="section-space border-t border-white/10"
      aria-labelledby="skills-title"
    >
      <div className="site-container">
        <p className="eyebrow mb-3">What I work with</p>
        <h2 id="skills-title" className="section-title">
          Skills & technologies
        </h2>
        <div className="mt-9 divide-y divide-white/10">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="grid gap-4 py-5 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8"
            >
              <h3 className="pt-1 text-base font-medium text-neutral-200">
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-base leading-relaxed text-neutral-400">
          Additional experience in API design, responsive interfaces, and
          performance optimization.
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const skills = {
  "Programming Languages": [
    "Python",
    "Java",
    "C/C++",
    "JavaScript",
    "TypeScript",
  ],
  "Frameworks & Tools": [
    "React",
    "Next.js",
    "Express.js",
    "Tailwind CSS",
    "Figma",
  ],
  "Cloud & Infrastructure": [
    "AWS (Lambda, S3, EC2)",
    "Azure (IaC with Bicep)",
    "Docker",
    "PostgreSQL",
    "GitHub Actions",
  ],
  "Mobile Development": ["Android Development", "React Native", "Kotlin"],
  "Additional Technologies": [
    "SQLite",
    "Git",
    "Vercel",
    "CI/CD",
    "3D Graphics (Java3D)",
  ],
  "Development Practices": [
    "Agile Development",
    "Test-Driven Development",
    "Responsive Design",
    "Performance Optimization",
    "API Development",
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <div className="w-full bg-zinc-900 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="mb-12 cursor-default text-center text-4xl font-bold text-white md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="group cursor-default rounded-lg border border-zinc-700 bg-zinc-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:bg-zinc-800/90 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <h3 className="mb-4 cursor-default text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-blue-600/30 bg-blue-600/20 px-3 py-1 text-sm text-blue-300 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:bg-purple-600/30 hover:text-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

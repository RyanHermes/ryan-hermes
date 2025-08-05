"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <div className="w-full bg-black py-20" id="about">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          className="mb-12 cursor-default text-center text-4xl font-bold text-white md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-neutral-300">
              I&apos;m a passionate Computer Science student at the University
              of Windsor with a strong foundation in software development, web
              technologies, and collaborative problem-solving. My experience
              spans frontend and backend development, mobile applications, and
              educational technology.
            </p>

            <p className="text-lg leading-relaxed text-neutral-300">
              Through my internships at KōCH Technologies and Property Revive,
              plus my role as a Teaching Assistant, I&apos;ve developed
              expertise in creating user-friendly applications while mentoring
              others in their programming journey. I excel in fast-paced
              environments and enjoy tackling complex technical challenges.
            </p>

            <p className="text-lg leading-relaxed text-neutral-300">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to team projects, or helping fellow
              students master programming concepts. I&apos;m always eager to
              learn and grow in the ever-evolving world of software development.
            </p>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 cursor-default text-2xl font-semibold text-white">
                Education
              </h3>
              <motion.div
                variants={itemVariants}
                className="group cursor-default rounded-lg border border-zinc-700 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-zinc-900/90 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <h4 className="text-xl font-semibold text-blue-400">
                  B.Sc. Honours Computer Science
                </h4>
                <p className="text-lg text-neutral-300">
                  Honours Software Engineering Specialization
                </p>
                <p className="text-neutral-300">University of Windsor</p>
                <p className="text-sm text-neutral-400">
                  September 2021 - April 2025
                </p>
                <p className="text-sm text-neutral-400">Minor: Mathematics</p>
                <p className="mt-2 text-lg font-semibold text-green-400">
                  GPA: 4.0/4.0
                </p>
                <div className="mt-4 space-y-2">
                  <Link
                    href="/Ryan_Hermes_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-md"
                  >
                    <FontAwesomeIcon icon={faDownload} className="h-4 w-4" />
                    <span>Download Resume</span>
                  </Link>
                  <p className="text-xs text-neutral-400">
                    General version - contact me for role-specific resumes
                  </p>
                </div>
              </motion.div>
            </div>

            <div>
              <h3 className="mb-4 cursor-default text-2xl font-semibold text-white">
                Connect With Me
              </h3>
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="flex items-center space-x-3 text-neutral-300">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="h-5 w-5 text-blue-400"
                  />
                  <span>Windsor, Ontario, Canada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="h-5 w-5 text-blue-400"
                  />
                  <Link
                    href="mailto:ryanhermes@pm.me"
                    className="text-neutral-300 transition-colors hover:text-blue-400"
                  >
                    ryanhermes@pm.me
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="h-5 w-5 text-blue-400"
                  />
                  <Link
                    href="tel:+12265061730"
                    className="text-neutral-300 transition-colors hover:text-blue-400"
                  >
                    +1 (226) 506-1730
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-5 w-5 text-blue-400"
                  />
                  <Link
                    href="https://github.com/RyanHermes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 transition-colors hover:text-blue-400"
                  >
                    github.com/RyanHermes
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-5 w-5 text-blue-400"
                  />
                  <Link
                    href="https://www.linkedin.com/in/ryan--hermes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 transition-colors hover:text-blue-400"
                  >
                    linkedin.com/in/ryan--hermes
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, Variants } from "framer-motion";

import { About } from "@/components/About";
import Header from "@/components/Header";
import { Skills } from "@/components/Skills";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import dynamic from "next/dynamic";
// Dynamic imports to reduce initial bundle size
const TimelineInfo = dynamic(
  () => import("@/components/TimelineInfo").then((m) => m.TimelineInfo),
  {
    ssr: false,
    loading: () => (
      <div className="py-20 text-center text-neutral-500">
        Loading timeline…
      </div>
    ),
  },
);
const Projects = dynamic(
  () => import("@/components/Projects").then((m) => m.Projects),
  {
    ssr: false,
    loading: () => (
      <div className="py-10 text-center text-neutral-500">
        Loading projects…
      </div>
    ),
  },
);

import { cabin, redditMono } from "./fonts";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
};

const AnimationVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

const ProjectsVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
};

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <AuroraBackground>
          <motion.div
            className={`${redditMono.className} float absolute m-4 text-neutral-400 ~text-2xl/8xl`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={AnimationVariants}
          >
            <FlipWords
              words={[
                "Engineering",
                " Developing",
                " Innovating",
                "  Designing",
                "  Enhancing",
              ]}
            />
            the world, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one line at a time.
          </motion.div>
        </AuroraBackground>
        <div className="gradient-bg">
          <motion.h1
            className={`${cabin.className} px-2 text-white ~text-2xl/9xl`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Ryan Hermes
            </span>
          </motion.h1>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experiences" className="gradient-bg">
        <div>
          <TimelineInfo />
        </div>
      </div>
      {/* Projects section: removed outer max-width wrapper so internal section can span available width */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={ProjectsVariants}
      >
        <Projects />
      </motion.div>
    </main>
  );
}

import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TimelineInfo } from "@/components/TimelineInfo";

export default function Home() {
  return (
    <>
      <section id="top" className="hero" aria-labelledby="intro-title">
        <div className="site-container hero-intro">
          <p className="mb-5 text-sm text-neutral-400">
            Software Development Engineer
          </p>
          <h1 id="intro-title" className="hero-name">
            Ryan Hermes
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            I build software at Amazon, on the Payment Products team in
            Vancouver.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2">
            <a href="#projects" className="text-link">
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:ryanhermes@pm.me" className="text-link">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <Projects />
      <section
        id="experiences"
        className="section-space"
        aria-labelledby="experience-title"
      >
        <TimelineInfo />
      </section>
      <About />
      <Skills />
    </>
  );
}

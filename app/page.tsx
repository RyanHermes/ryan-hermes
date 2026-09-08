import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TimelineInfo } from "@/components/TimelineInfo";

export default function Home() {
  return (
    <>
      <section id="top" className="hero" aria-labelledby="intro-title">
        <div className="site-container relative">
          <p className="eyebrow mb-6">Software Development Engineer</p>
          <h1 id="intro-title" className="hero-name">
            Ryan Hermes<span className="text-blue-400">.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
            I build software at Amazon, on the Payment Products team in
            Vancouver.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Previously at UrSafe Drone Solution and RIIS. This is a selection of
            my work, from web applications to mobile and interactive
            experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:ryanhermes@pm.me" className="button-secondary">
              Get in touch
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-neutral-400">
            <span className="inline-flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-blue-400"
                aria-hidden="true"
              />
              Currently at <span className="text-neutral-200">Amazon</span>
            </span>
            <span>Payment Products</span>
            <span>Vancouver, Canada</span>
          </div>
        </div>
      </section>
      <Projects />
      <section
        id="experiences"
        className="section-space border-y border-white/10 bg-neutral-950"
        aria-labelledby="experience-title"
      >
        <TimelineInfo />
      </section>
      <About />
      <Skills />
    </>
  );
}

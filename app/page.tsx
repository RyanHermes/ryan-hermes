'use client'

import Header from '@/components/Header'
import { Projects } from '@/components/Projects'
import { TimelineInfo } from '@/components/TimelineInfo'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { FlipWords } from '@/components/ui/flip-words'
import { motion } from 'framer-motion'
import { cabin, redditMono } from './fonts'

const fadeInVariants = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
}

const AnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
}

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <AuroraBackground>
          <motion.div
            className={`${redditMono.className} absolute m-4 text-2xl text-neutral-400 lg:text-4xl xl:text-6xl 2xl:text-8xl`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={AnimationVariants}
          >
            <FlipWords
              words={[
                'Engineering',
                ' Developing',
                ' Innovating',
                '  Designing',
                '  Enhancing',
              ]}
            />
            the world, <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one line at a time.
          </motion.div>
        </AuroraBackground>
        <div className="bg-zinc-900">
          <motion.h1
            className={`${cabin.className} px-4 text-2xl text-white md:px-8 lg:px-10 lg:text-4xl xl:text-6xl 2xl:text-8xl`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            Hello, I&apos;m{' '}
            <span className="text-neutral-400">Ryan Hermes</span>
          </motion.h1>
        </div>
      </div>
      <div id="experiences">
        <div>
          <TimelineInfo />
        </div>
      </div>
      <div id="projects" className="flex items-center justify-center py-10">
        <div className="w-full max-w-4xl">
          <Projects />
        </div>
      </div>
    </main>
  )
}

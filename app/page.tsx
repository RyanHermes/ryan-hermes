'use client'

import Link from 'next/link'
import { majorMonoDisplay } from './fonts'
import { useState, useEffect } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main>
      <header
        className={`flex items-center justify-between bg-black p-4 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="flex items-center">
          <h1
            className={`${majorMonoDisplay.className} ml-4 text-xl font-bold`}
          >
            Ryan Hermes
          </h1>
        </div>
        <nav>
          <ul className="m-0 flex list-none p-0">
            <li className="mx-4">
              <button className="duration-400 transform rounded-lg border border-black bg-transparent px-6 py-2 font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1 dark:border-white dark:text-white">
                <Link href="/">Home</Link>
              </button>
            </li>
            <li className="mx-4">
              <button className="duration-400 transform rounded-lg border border-black bg-transparent px-6 py-2 font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1 dark:border-white dark:text-white">
                <Link href="/about">About</Link>
              </button>
            </li>
            <li className="mx-4">
              <button className="duration-400 transform rounded-lg border border-black bg-transparent px-6 py-2 font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1 dark:border-white dark:text-white">
                <Link href="/contact">Contact</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <AuroraBackground
        children={
          <div className="relative flex flex-col items-center justify-center gap-4 px-4">
            <div className="text-center text-3xl font-bold md:text-7xl dark:text-white">
              Coming Soon.
            </div>
            <div className="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
              Coming Soon.
            </div>
            <button className="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
              Coming Soon.
            </button>
            <TypewriterEffectSmooth words={[{ text: 'Coming Soon.' }]} />
          </div>
        }
      />
      <div className="bg-zinc-900">
        <div className="h-screen"></div> {/* Added space for testing scroll */}
      </div>
    </main>
  )
}

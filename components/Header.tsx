'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import { majorMonoDisplay } from '../app/fonts'
import styles from '../styles/hamburgers.module.css'

const buttonClass =
  'duration-400 transform rounded-lg border border-black bg-transparent px-6 py-2 font-bold text-black shadow-[0_0_0_3px_#000000_inset] transition hover:-translate-y-1 dark:border-white dark:text-white'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-black p-4 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="flex items-center">
          <h1
            className={`${majorMonoDisplay.className} ml-4 text-5xl font-bold`}
          >
            R
          </h1>
        </div>
        <nav>
          <ul className="m-0 flex list-none p-0">
            <li className="mx-4 hidden md:block">
              <Link href="#experiences">
                <button className={buttonClass}>Experiences</button>
              </Link>
            </li>
            <li className="mx-4 hidden md:block">
              <Link href="#projects">
                <button className={buttonClass}>Projects</button>
              </Link>
            </li>
            <li className="mx-4 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${styles.hamburger} ${styles['hamburger--collapse']} ${isOpen ? styles['is-active'] : ''}`}
                type="button"
              >
                <span className={styles['hamburger-box']}>
                  <span className={styles['hamburger-inner']}></span>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className={`fixed inset-0 z-40 transform bg-black text-white transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <ul className="flex h-full flex-col items-center justify-center p-4">
          <li className="my-2">
            <Link
              href="#experiences"
              onClick={() => setIsOpen(false)}
              className="font-bold"
            >
              Experiences
            </Link>
          </li>
          <li className="my-2">
            <Link
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="font-bold"
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

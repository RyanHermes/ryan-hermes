'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
        className={`flex items-center justify-between bg-gray-100 p-4 transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <h1 className="ml-4 text-xl font-bold">My Website</h1>
        </div>
        <nav>
          <ul className="m-0 flex list-none p-0">
            <li className="mx-4">
              <Link href="/" className="text-blue-500 hover:text-blue-700">
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/about" className="text-blue-500 hover:text-blue-700">
                About
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href="/contact"
                className="text-blue-500 hover:text-blue-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className="mt-8 text-2xl font-bold">Home Page</h1>
      <div className="h-screen"></div> {/* Added space for testing scroll */}
      <div className="h-screen"></div> {/* Added space for testing scroll */}
    </main>
  )
}

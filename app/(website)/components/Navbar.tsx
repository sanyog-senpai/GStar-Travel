"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import Logo from "@/public/logo/gstar.jpeg"
import { Button } from "./Button"
import { HamburgerButton, MobileMenu } from "./MobileMenu"
import { NAV_ITEMS } from "./NavItems"
import MegaMenu from "./Megamenu"

const ArrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5 shrink-0"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isPilled, setIsPilled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  // 1. Compute initial state during initialization
  const [hasRevealed, setHasRevealed] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname !== "/"
    }
    return false
  })

  const lastScrollY = useRef(0)

  // 3. Handle Preloader Reveal Event Sync
  useEffect(() => {
    if (hasRevealed) return

    const handleReveal = () => {
      setHasRevealed(true)
    }

    window.addEventListener("preloader-reveal-nav", handleReveal)

    const fallbackTimer = setTimeout(() => {
      setHasRevealed(true)
    }, 500)

    return () => {
      window.removeEventListener("preloader-reveal-nav", handleReveal)
      clearTimeout(fallbackTimer)
    }
  }, [hasRevealed])

  // 4. Scroll Listener — drives visibility, pill state, and mobile menu closure
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const prevScrollY = lastScrollY.current

      if (currentScrollY === 0) {
        setIsNavVisible(true)
        setIsPilled(false)
      } else if (currentScrollY > prevScrollY && currentScrollY > 50) {
        setIsNavVisible(false)
        setIsPilled(true)
        setIsMobileOpen(false)
      } else if (currentScrollY < prevScrollY) {
        setIsNavVisible(true)
        setIsPilled(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Removed the standalone effect that caused cascading renders

  const isVisible = hasRevealed && isNavVisible

  return (
    <>
      <header
        style={{ viewTransitionName: "navbar" }}
        className={clsx(
          "fixed inset-x-0 top-4 z-50 mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border ps-4 transform-gpu transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] sm:inset-x-6",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0 pointer-events-none",
          isPilled
            ? "border-white/15 bg-black/60 shadow-lg shadow-black/30 backdrop-blur-3xl"
            : "border-white/10 bg-white/5 shadow-md shadow-black/10 backdrop-blur-md"
        )}
      >
        {/* Column 1 — Logo */}
        <div className="flex items-center gap-4">
          <Image
            src={Logo}
            alt="Logo"
            width={35}
            height={35}
            priority
            className="w-20 transition-transform duration-300 hover:scale-102"
          />
        </div>

        {/* Column 2 — Nav links (desktop) */}
        <nav className="hidden h-full items-center md:flex">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-wide text-white/80 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
                {item.megaMenu && <MegaMenu columns={item.megaMenu} />}
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3 — CTA + mobile controls */}
        <div className="flex items-center gap-2 pe-4">
          <Button
            variant="primary"
            icon={ArrowIcon}
            iconPosition="right"
            aria-label="Select Package"
          >
            Select Package
          </Button>
          <HamburgerButton isOpen={isMobileOpen} onClick={() => setIsMobileOpen((v) => !v)} />
        </div>

        <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      </header>
    </>
  )
}

export default Navbar
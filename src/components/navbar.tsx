"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import { HamburgerButton, MobileMenu } from "./mobile-menu"
import { NAV_ITEMS } from "./nav-items"
import { MegaMenu } from "./mega-menu"
import { Button } from "./button"


export function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isPilled, setIsPilled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

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

  const isVisible = hasRevealed && isNavVisible

  return (
    <>
      <header
        style={{ viewTransitionName: "navbar" }}
        className={clsx(
          "fixed inset-x-0 top-6 z-50 mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 transform-gpu transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] sm:inset-x-6",
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0 pointer-events-none"
        )}
      >
        {/* Column 1 — Logo badge */}
        <div
          className={clsx(
            "flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 transition-all duration-500",
            isPilled
              ? "border-black/5 bg-white shadow-md shadow-black/10"
              : "border-white/40 bg-white/95 shadow-sm"
          )}
        >
          <Image
            src="/logo/gstar.jpg"
            alt="Logo"
            width={45}
            height={45}
            priority
            className="w-12 transition-transform duration-300 hover:scale-102"
          />
        </div>

        {/* Column 2 — Nav links (desktop) */}
        <nav
          className={clsx(
            "hidden h-10 items-center rounded-full border px-2 transition-all duration-500 md:flex",
            isPilled
              ? "border-black/5 bg-neutral-200/80 shadow-md shadow-black/10 backdrop-blur-xl"
              : "border-white/30 bg-white/30 backdrop-blur-md"
          )}
        >
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    className={clsx(
                      "flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                      isActive
                        ? "bg-white text-neutral-900 shadow-sm"
                        : "text-neutral-700 hover:bg-white/60 hover:text-neutral-900"
                    )}
                  >
                    {item.label}
                  </a>
                  {item.megaMenu && <MegaMenu columns={item.megaMenu} />}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Column 3 — CTA + mobile controls */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            variant="primary"
            aria-label="Custom Itinerary"
            className="rounded-full leading-6 hover: leading-6"
          >
            Custom Itinerary
          </Button>
          <HamburgerButton isOpen={isMobileOpen} onClick={() => setIsMobileOpen((v) => !v)} />
        </div>

        <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
      </header >
    </>
  )
}

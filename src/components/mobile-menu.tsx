"use client"

import { useState } from "react"
import clsx from "clsx"
import { NAV_ITEMS } from "./nav-items"

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20 md:hidden"
    >
      <span className="relative block h-3.5 w-4">
        <span
          className={clsx(
            "absolute left-0 top-0 h-[1.5px] w-full rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isOpen && "top-1/2 -translate-y-1/2 rotate-45"
          )}
        />
        <span
          className={clsx(
            "absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full bg-white transition-opacity duration-200",
            isOpen && "opacity-0"
          )}
        />
        <span
          className={clsx(
            "absolute bottom-0 left-0 h-[1.5px] w-full rounded-full bg-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isOpen && "bottom-1/2 translate-y-1/2 -rotate-45"
          )}
        />
      </span>
    </button>
  )
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

/** Slide-down mobile nav panel with accordion-style mega menus. */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  return (
    <div
      className={clsx(
        "absolute inset-x-0 top-full mt-3 origin-top overflow-hidden rounded-3xl border border-white/10 bg-[#1d1e19]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden mx-3",
        isOpen
          ? "max-h-[80vh] scale-100 opacity-100"
          : "pointer-events-none max-h-0 scale-95 opacity-0"
      )}
    >
      <ul className="max-h-[80vh] divide-y divide-white/10 overflow-y-auto px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const hasMegaMenu = !!item.megaMenu
          const isAccordionOpen = openAccordion === item.label

          return (
            <li key={item.label} className="px-2 py-1">
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  onClick={onClose}
                  className="flex-1 py-3 text-sm font-medium uppercase tracking-wide text-white/85"
                >
                  {item.label}
                </a>
                {hasMegaMenu && (
                  <button
                    type="button"
                    aria-label={`Toggle ${item.label} submenu`}
                    onClick={() => setOpenAccordion(isAccordionOpen ? null : item.label)}
                    className="p-3 text-white/60"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={clsx(
                        "h-4 w-4 transition-transform duration-300",
                        isAccordionOpen && "rotate-180"
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                )}
              </div>

              {hasMegaMenu && (
                <div
                  className={clsx(
                    "grid gap-5 overflow-hidden pl-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isAccordionOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  {item.megaMenu!.map((column) => (
                    <div key={column.heading}>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
                        {column.heading}
                      </h4>
                      <ul className="space-y-2">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              onClick={onClose}
                              className="block text-sm text-white/75 hover:text-white"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

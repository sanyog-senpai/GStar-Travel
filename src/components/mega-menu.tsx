"use client"

import type { MegaMenuColumn } from "./nav-items"

interface MegaMenuProps {
  columns: MegaMenuColumn[]
}

export function MegaMenu({ columns }: MegaMenuProps) {
  return (
    <div
      className="invisible absolute left-1/2 top-full -translate-x-1/2 -translate-y-2 pt-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
    >
      <div
        className="grid gap-8 rounded-3xl border border-white/10 bg-[#1d1e19]/95 p-8 shadow-2xl shadow-black/60 backdrop-blur-2xl"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(180px, 240px))` }}
      >
        {columns.map((column) => (
          <div key={column.heading}>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
              {column.heading}
            </h4>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group/link block text-sm font-medium text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                    {link.description && (
                      <span className="mt-0.5 block text-xs font-normal text-white/40 group-hover/link:text-white/55">
                        {link.description}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

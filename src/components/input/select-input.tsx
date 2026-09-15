"use client"

import { useEffect, useRef, useState } from "react"

interface SelectInputProps {
  options: string[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
}

export function SelectInput({
  options,
  value,
  onChange,
  placeholder = "Select…",
  className,
}: SelectInputProps) {
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(options[0])
  const selected = value ?? internalValue

  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  function selectOption(option: string) {
    setInternalValue(option)
    onChange?.(option)
    setOpen(false)
  }

  return (
    <div ref={rootRef} className={["relative", className].filter(Boolean).join(" ")}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={[
          "flex w-full items-center justify-between gap-2.5 rounded-xl border bg-white",
          "py-2.5 pl-5 pr-4 text-sm font-medium text-[#1A2E40]",
          "outline-none transition-all duration-200",
          open
            ? "border-[#1A2E40]/40 ring-4 ring-[#1A2E40]/10"
            : "border-stone-200 hover:border-[#1A2E40]/30",
        ].join(" ")}
      >
        <span className={selected ? "" : "text-stone-400"}>{selected ?? placeholder}</span>
        <svg
          className={[
            "h-2.5 w-2.5 shrink-0 text-stone-400 transition-transform duration-200",
            open ? "rotate-180 text-[#1A2E40]" : "",
          ].join(" ")}
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M2.5 4.5L6 8l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          className={[
            "absolute left-0 top-[calc(100%+10px)] z-20 w-full min-w-[12rem]",
            "overflow-hidden rounded-2xl border border-stone-100",
            "bg-white py-2 shadow-xl shadow-black/[0.08]",
          ].join(" ")}
        >
          {options.map((option) => {
            const active = option === selected
            return (
              <button
                key={option}
                type="button"
                onClick={() => selectOption(option)}
                className={[
                  "flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors",
                  active
                    ? "bg-[#1A2E40]/[0.06] font-semibold text-[#1A2E40]"
                    : "text-stone-600 hover:bg-stone-50",
                ].join(" ")}
              >
                {option}
                {active && (
                  <svg className="h-3.5 w-3.5 text-[#1A2E40]" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3.5 8.5l3 3 6-6.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
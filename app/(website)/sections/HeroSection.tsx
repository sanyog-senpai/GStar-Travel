"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Shippori_Mincho, Noto_Sans_JP } from "next/font/google"
import Button from "../components/Button"

// deliberately Japanese type, not a generic display+Inter pairing.
const display = Shippori_Mincho({ subsets: ["latin"], weight: ["800"] })
const body = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "500"] })

const ArrowIcon = (
  <svg
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

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 70])
  const cutoutY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 150])
  const textY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [0, 40])
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background plate — night illumination, autumn foliage, bridge + pagoda */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="/Background.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Just enough grade to keep nav/copy legible without flattening the photo */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B0704] via-transparent to-[#0B0704]/50" />
      </motion.div>

      {/* Wordmark — sandwiched between the two image layers */}
      <motion.h1
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, y: 500, x: -200, zIndex: 0 }}
        animate={{ opacity: 1, y: 0, x: -200, zIndex: 40 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`${display.className} pointer-events-none absolute inset-x-0 top-1/2 z-40 -translate-y-1/2 select-none text-center text-[16vw] font-extrabold uppercase leading-none tracking-tight text-[#F3ECDF]/90 sm:text-[16vw] md:text-[12rem]`}
      >
        Japa
      </motion.h1>
      <motion.h1
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, y: 500, x: 150, zIndex: 0 }}
        animate={{ opacity: 1, y: 0, x: 150, zIndex: 10 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`${display.className} pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 select-none text-center text-[16vw] font-extrabold uppercase leading-none tracking-tight text-[#F3ECDF]/90 sm:text-[16vw] md:text-[12rem]`}
      >
        n
      </motion.h1>

      {/* Foreground — the same bridge + pagoda, isolated, occluding the wordmark */}
      <motion.div style={{ y: cutoutY }} className="absolute right-60 z-50">
        <Image
          src="/BridgeAndTemple.png"
          alt="A red lacquered bridge leading up to an illuminated temple, autumn foliage around it"
          fill
          priority
          sizes="100vw"
          className=" object-[50%_20%]"
        />
      </motion.div>

      {/* Vertical eyebrow — a real caption (place + moment), not a decorative label */}
      <motion.h1
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, y: 500, x: -5, zIndex: 0 }}
        animate={{ opacity: 1, y: 0, x: -5, zIndex: 30 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`${body.className} absolute left-10 top-1/2 z-30 hidden -translate-y-1/2 translate-x-80 sm:translate-x-40 md:translate-x-60 lg:translate-x-30 [writing-mode:vertical-rl] text-sm tracking-[0.35em] text-[#F3ECDF]/60 lg:block`}
      >
        京都 ・ 紅葉の宵 — KYOTO, AN AUTUMN EVENING
      </motion.h1>

      {/* Copy + CTA */}
      <motion.h1
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, y: 500, x: 250, zIndex: 0 }}
        animate={{ opacity: 1, y: 0, x: 250, zIndex: 30 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className="absolute inset-x-0 bottom-0 left-52 lg:left-2 z-30 flex flex-col gap-6 px-6 pb-16 sm:px-12 sm:pb-20">
        <p className={`${body.className} max-w-md text-sm leading-relaxed text-[#F3ECDF]/90 sm:text-base`}>
          Kyoto&apos;s temples don&apos;t close when the sun goes down — they glow. Step into the
          maple-lit nights of autumn illumination season.
        </p>
        <div>
          <Button variant="secondary" icon={ArrowIcon} className={`${body.className} px-6 py-3 text-sm`}>
            Explore Package
          </Button>
        </div>
      </motion.h1>
    </section>
  )
}
'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'], // starts tracking when section enters viewport, ends when it leaves
  })

  // Bridge slides up from 100% (off-screen bottom) to 0% as you scroll into the section
  const bridgeY = useTransform(scrollYProgress, [0, 0.5], ['100%', '0%'])
  const bridgeOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.85])

  // Optional: text fades in slightly after the bridge starts moving
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [20, 0])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-[#F9F6F0]"
    >
      {/* Centered text layer */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="absolute inset-0 z-0"
      >
        <h2 className="select-none text-center text-6xl font-bold leading-none tracking-wider text-neutral-200 md:text-9xl">
          当社が選ばれる理由
        </h2>

      </motion.div>

      {/* Card design */}

      {/* Foreground image - driven by scroll progress */}
      <motion.div
        style={{ y: bridgeY, opacity: bridgeOpacity }}
        className="absolute bottom-0 z-10 h-64 w-full md:h-96"
      >
        <Image
          src="/Bridge.png"
          alt="A red lacquered bridge"
          priority
          fill
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
      </motion.div>
    </section>
  )
}
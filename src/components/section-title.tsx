import { M_PLUS_1p } from 'next/font/google'

// Remove `subsets` and keep `preload: false`
const mplus = M_PLUS_1p({
  weight: ['400', '700', '800'],
  preload: false,
})

interface SectionTitleProps {
  japanese: string
  english: string
  className?: string
  japaneseClassName?: string
  englishClassName?: string
}

export function SectionTitle({
  japanese,
  english,
  className = '',
  japaneseClassName = '',
  englishClassName = '',
}: SectionTitleProps){
  return (
    <section
      className={`relative flex w-full flex-col items-center justify-center m-0 overflow-hidden py-16 ${mplus.className} ${className}`}
    >
      {/* Heading Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Background Japanese Text */}
        <h2
          className={`select-none text-6xl font-bold leading-none tracking-wider text-neutral-200 md:text-8xl ${japaneseClassName}`}
        >
          {japanese}
        </h2>

        {/* Foreground English Text */}
        <p
          className={`absolute bottom-6 text-sm font-extrabold uppercase tracking-[0.3em] text-[#285340] text-shadow-lg md:text-lg ${englishClassName}`}
        >
          {english}
        </p>
      </div>
    </section>
  )
}

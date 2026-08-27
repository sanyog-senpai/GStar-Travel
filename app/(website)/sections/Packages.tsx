import { M_PLUS_1p } from 'next/font/google'
import Image from 'next/image'
import PackageCard, { JAPAN_PACKAGES } from '../components/PackageCard'

const mplus = M_PLUS_1p({
  weight: ['400', '700', '800'],
  preload: false,
})

const Packages = () => {
  return (
    <section className={`relative w-full overflow-hidden bg-[#F9F6F0] ${mplus.className} py-16 flex flex-col items-center justify-center space-y-12`}>
      {/* Heading Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-neutral-200 font-bold text-6xl md:text-8xl tracking-wider select-none leading-none">
          パッケージ
        </h2>
        <p className="absolute bottom-6 mt-2 text-[#285340] text-sm md:text-lg tracking-[0.3em] uppercase font-extrabold drop-shadow-[2px_2px_2px_rgba(40,83,64,0.6)]">
          Packages
        </p>
      </div>


      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {JAPAN_PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

    </section >
  )
}

export default Packages
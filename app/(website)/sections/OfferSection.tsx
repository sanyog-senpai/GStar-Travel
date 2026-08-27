import { M_PLUS_1p } from 'next/font/google'
import Image from 'next/image'
import SectionTitle from '../components/SectionTitle'

const mplus = M_PLUS_1p({
  weight: ['400', '700', '800'],
  preload: false,
})

// Replace these paths with your 5 actual offer images
const offerImages = [
  { src: '/ads/home1-offer-img1.webp', alt: 'Maldives Offer 1' },
  { src: '/ads/home1-offer-img2.webp', alt: 'Maldives Offer 2' },
  { src: '/ads/home1-offer-img3.webp', alt: 'Maldives Offer 3' },
  { src: '/ads/home1-offer-img4.webp', alt: 'Maldives Offer 4' },
  { src: '/ads/home1-offer-img5.webp', alt: 'Maldives Offer 5' },
]

const OfferSection = () => {
  return (
    <section className={`relative w-full overflow-hidden bg-[#F9F6F0] ${mplus.className} py-16 flex flex-col items-center justify-center space-y-12`}>
      {/* Heading Container */}
      <SectionTitle
        japanese="特別オファー"
        english="Discounts and Offers"
      />

      {/* Infinite Carousel Container */}
      <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Animated Track (Rendered twice for seamless loop) */}
        <div className="group/track flex shrink-0 animate-infinite-scroll space-x-6 pr-6 [animation-play-state:running] group-hover/track:[animation-play-state:paused]">
          {offerImages.map((img, idx) => (
            <div
              key={`set1-${idx}`}
              className="group/card relative z-0 hover:z-20 w-64 h-36 md:w-80 md:h-44 shrink-0 transition-transform duration-300"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Duplicated Track for continuous flow */}
        <div className="group/track flex shrink-0 animate-infinite-scroll space-x-6 pr-6 [animation-play-state:running] group-hover/track:[animation-play-state:paused]" aria-hidden="true">
          {offerImages.map((img, idx) => (
            <div
              key={`set2-${idx}`}
              className="group/card relative z-0 hover:z-20 w-64 h-36 md:w-80 md:h-44 shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfferSection
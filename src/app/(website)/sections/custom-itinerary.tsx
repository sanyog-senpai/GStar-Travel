import Image from 'next/image'
import { Container } from '@/components/container'
import { Button } from '@/components/button'

interface GalleryImage {
  src: string
  alt: string
  className: string
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop',
    alt: 'Boudhanath Stupa, Kathmandu',
    className: 'mt-16 h-46 w-46',
  },
  {
    src: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=600&auto=format&fit=crop',
    alt: 'Taj Mahal, Agra',
    className: 'mt-0  h-48 w-40',
  },
  {
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    alt: 'Torii gate, Miyajima',
    className: 'mt-16 h-46 w-46',
  },
  {
    src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600&auto=format&fit=crop',
    alt: 'Safdarjung Tomb, New Delhi',
    className: 'mt-0  h-48 w-40',
  },
  {
    src: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=600&auto=format&fit=crop',
    alt: 'Boudhanath Stupa detail, Kathmandu',
    className: 'mt-16 h-46 w-46',
  },
]

export function CustomItinerary() {
  return (
    <section className="w-full py-20">
      <Container className="flex flex-col items-center text-center">
        <h2 className="font-poppins text-3xl font-medium text-[#1A2E40] sm:text-4xl">
          Made by You, Managed by Us
        </h2>
        <p className="mt-3 font-normal max-w-xl text-sm text-stone-500 sm:text-base">
          Customize every detail of your journey from flights and stay to tours and timing.
        </p>

        <Button
          variant="secondary"
          className="mt-8 rounded-full bg-[#1E3A2F] px-6 py-3 text-sm font-semibold text-white hover:bg-[#152E24]"
        >
          Build My Trip
        </Button>

        {/* Staggered gallery row — spans the full container width, same zigzag offsets */}
        <div className="mt-16 flex w-full items-start justify-between gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.src}
              className={`relative shrink-0 overflow-hidden rounded-2xl bg-stone-200 ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
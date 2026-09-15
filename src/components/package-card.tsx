import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './button';



export const JAPAN_PACKAGES: TourPackage[] = [
  {
    id: '1',
    title: 'Golden Route: Tokyo, Kyoto & Mt. Fuji',
    kanjiTitle: '黄金ルート',
    location: 'Tokyo • Hakone • Kyoto • Osaka',
    duration: '7 Days / 6 Nights',
    groupSize: 'Max 12',
    price: 1890,
    originalPrice: 2150,
    rating: 4.9,
    description: "The tomb, within a garden, is in a late version of the style of earlier Mughal imperial tombs, most famously the Taj Mahal, with inside eight paradises",
    reviewsCount: 128,
    imageUrl: 'https://images.japanhighlights.com/allpicture/2023/10/6b98c1313ca14f0f9388292ac6600018_cut_600x550_505_1744304483.jpg',
    tag: 'Best Seller',
  },
  {
    id: '3',
    title: 'Hokkaido Winter Wonderland & Onsen',
    kanjiTitle: '北海道温泉',
    location: 'Sapporo • Otaru • Niseko',
    duration: '5 Days / 4 Nights',
    groupSize: 'Max 8',
    price: 1450,
    rating: 4.8,
    reviewsCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800',
    tag: 'Seasonal',
  },
  {
    id: '2',
    title: 'Hokkaido Winter Wonderland & Onsen',
    kanjiTitle: '北海道温泉',
    location: 'Sapporo • Otaru • Niseko',
    duration: '5 Days / 4 Nights',
    groupSize: 'Max 8',
    price: 1450,
    rating: 4.8,
    reviewsCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=800',
    tag: 'Seasonal',
  },
]

interface PackageCardProps {
  pkg: TourPackage;
  className?: string;
}

export function PackageCard({ pkg, className }: PackageCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden",
        "transition-colors duration-300",
        className
      )}
    >
      {/* Top Banner Image */}
      <div className="relative rounded-3xl h-64 w-full overflow-hidden bg-stone-200">
        <Image
          src={pkg.imageUrl}
          alt={pkg.title}
          fill
          className="object-cover  transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Gradient scrim — just enough to guarantee text contrast, no blur/pill */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/80 to-transparent" />

        {/* Single accent mark, top right — quiet stand-in for tag + kanji badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#BC002D]" aria-hidden />
          {pkg.reviewsCount > 0 && (
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/90">
              <span className="text-neutral-300">{pkg.rating.toFixed(1)} ({pkg.reviewsCount})</span>
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between px-1 pt-4">
        <div>

          {/* Title */}
          <h3 className="mt-2 font-serif text-lg font-bold leading-snug text-[#1A2E40]">
            {pkg.title}
          </h3>

          {/* Duration / group / rating — plain text, no icons, separated by thin dots */}
          <div className="mt-3 flex items-center gap-1 text-xs text-stone-500">
            <span>{pkg.duration}</span>
            <span className="text-stone-300">·</span>
            <span>{pkg.groupSize}</span>
          </div>
        </div>

        {/* Price & CTA Footer */}
        <div className="mt-6 flex items-end justify-between pt-4 pb-1">
          <div>
            <span className="block text-[10px] tracking-widest uppercase text-stone-400">From</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#1A2E40]">${pkg.price}</span>
              {pkg.originalPrice && (
                <span className="text-xs text-stone-400 line-through">${pkg.originalPrice}</span>
              )}
            </div>
          </div>

          <Button
            variant="secondary"
            iconPosition="right"
            aria-label="Select Package"
          >
            View Package
          </Button>
        </div>
      </div>
    </article>
  );
}

export function PackageCardDisplay() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center gap-4 p-24">
        <section className="min-h-screen bg-[#F4F0EA] px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <span className="text-xs font-semibold tracking-widest text-[#BC002D] uppercase">Gstar Tour & Travel</span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-[#1A2E40] sm:text-4xl">Featured Japan Packages</h2>
            </div>

            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {JAPAN_PACKAGES.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
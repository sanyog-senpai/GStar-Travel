import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './button';
import { CiLocationOn, CiClock2 } from 'react-icons/ci';
import { TiStar } from "react-icons/ti";

export interface TourPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  description?: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
}

export const PACKAGES_DATA: TourPackage[] = [
  {
    id: '1',
    title: 'Kathmandu & Nagarkot Tour',
    location: 'Kathmandu & Nagarkot',
    duration: '7 Days 6 Nights',
    groupSize: 'Max 12',
    description: 'Explore UNESCO heritage sites in Kathmandu Valley and witness breathtaking sunrise views of the Himalayas from Nagarkot.',
    price: 890,
    originalPrice: 1050,
    rating: 4.9,
    reviewsCount: 128,
    imageUrl: 'https://images.unsplash.com/photo-1706188370039-e0cf9bd6ea16?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'ABC Helicopter Trek',
    location: 'Pokhara & Annapurna',
    duration: '10 Days 9 Nights',
    groupSize: 'Max 8',
    description: 'Trek through rhododendron forests and traditional Gurung villages before taking a scenic helicopter return flight.',
    price: 1450,
    originalPrice: 1600,
    rating: 4.95,
    reviewsCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1678086029951-5154accbd21b?q=80&w=1470&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Everest View & Sherpa Journey',
    location: 'Lukla & Namche Bazaar',
    duration: '8 Days 7 Nights',
    groupSize: 'Max 10',
    description: 'Immerse yourself in Sherpa culture, visit ancient monasteries, and enjoy stunning vistas of Mount Everest from Syangboche.',
    price: 1290,
    originalPrice: 1400,
    rating: 4.88,
    reviewsCount: 112,
    imageUrl: 'https://images.unsplash.com/photo-1676471049029-f93852da351d?q=80&w=1562&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Chitwan Jungle Safari',
    location: 'Chitwan National Park',
    duration: '5 Days 4 Nights',
    groupSize: 'Max 15',
    description: 'Encounter one-horned rhinos, Bengal tigers, and exotic bird species on jeep safaris and canoe trips along the Rapti River.',
    price: 520,
    originalPrice: 650,
    rating: 4.82,
    reviewsCount: 76,
    imageUrl: 'https://images.unsplash.com/photo-1641883177292-9353e1f7e6ce?q=80&w=1116&auto=format&fit=crop',
  },
];

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
      <div className="relative aspect-[16/12] w-full overflow-hidden rounded-2xl bg-stone-200">
        <Image
          src={pkg.imageUrl}
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Gradient scrim — just enough to guarantee text contrast, no blur/pill */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/5 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/80 to-transparent" />

        {/* Single accent mark, top right — quiet stand-in for tag + kanji badge */}
        <div className="absolute top-4 right-4 flex items-center gap-1">
          <TiStar className="h-3 w-3 mb-0.5 text-secondary" />
          {pkg.reviewsCount && (
            <span className="text-[10px] font-semibold tracking-normal uppercase text-white/90">
              <span>{pkg.rating.toFixed(1)}</span>{" "}
              <span className="text-white/70">({pkg.reviewsCount})</span>
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between px-1 pt-4">
        <div>
          {/* Title */}
          <h3 className="text-base font-semibold leading-snug text-[#1A2E40]">
            {pkg.title}
          </h3>

          {/* Location + Duration — single row, icons + thin dot separator, matches reference */}
          <div className="my-2 flex items-center gap-2 text-xs font-normal text-neutral-400">
            <span className="flex items-center gap-1">
              <CiLocationOn className="h-3.5 w-3.5 text-neutral-500" />
              <span className="truncate max-w-[140px]">{pkg.location}</span>
            </span>
            <span className="text-neutral-300">·</span>
            <span className="flex items-center gap-1">
              <CiClock2 className="h-3.5 w-3.5 text-neutral-500" />
              <span>{pkg.duration}</span>
            </span>
          </div>

          {/* Description */}
          <div className="mt-2 text-[10px] leading-relaxed text-stone-500 line-clamp-3">
            <p>{pkg.description}</p>
          </div>
        </div>

        {/* Price & CTA Footer */}
        <div className="flex items-end justify-between pt-4 pb-1">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-[#1A2E40]">${pkg.price}</span>
            <span className="text-xs text-stone-400 leading-3">/person</span>
          </div>

          <Button
            variant="secondary"
            iconPosition="right"
            aria-label="Select Package"
            className="rounded-full bg-[#1E3A2F] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#152E24]"
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
        <section className="min-h-screen px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <span className="text-xs font-semibold tracking-widest text-[#BC002D] uppercase">Gstar Tour & Travel</span>
              <h2 className="mt-2 text-3xl font-bold text-[#1A2E40] sm:text-4xl">Featured Japan Packages</h2>
            </div>

            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {PACKAGES_DATA.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
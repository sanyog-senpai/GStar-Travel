import { JAPAN_PACKAGES, PackageCard } from '../../../components/package-card'

export function Packages() {
  return (
    <section className={`relative w-full overflow-hidden py-16 flex flex-col items-center justify-center space-y-12`}>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {JAPAN_PACKAGES.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

    </section >
  )
}

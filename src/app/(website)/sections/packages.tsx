"use client"

import { Container } from '@/components/container'
import { useState } from "react"
import { PACKAGES_DATA, PackageCard } from '../../../components/package-card'
import { SectionTitle } from '@/components/section-title'
import { SelectInput } from '@/components/input/select-input'
import { SearchInput } from '@/components/input/search-input'

export function Packages() {
  const [category, setCategory] = useState('Adventure')
  return (
    <section className="relative flex w-full flex-col items-center justify-center space-y-12 overflow-hidden py-16">
      <Container className="max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SectionTitle title="Explore Packages" />
          <div className="flex items-center gap-3">
            <SelectInput
              options={['Adventure', 'Cultural', 'Spiritual', 'Wildlife']}
              value={category}
              onChange={setCategory}
            />
            <SearchInput placeholder={"Search By Location"} />
          </div>
        </div>
        {/* Package cards */}
        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES_DATA.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Container>
    </section>
  )
}
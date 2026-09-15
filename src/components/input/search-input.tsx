import { CiSearch } from "react-icons/ci";

export function SearchInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className={[
          'w-56 rounded-xl border border-stone-200 bg-white',
          'py-2.5 pl-5 pr-10 text-sm text-[#1A2E40] placeholder:text-stone-400',
          'shadow-sm outline-none transition-colors duration-200',
          'hover:border-[#1A2E40]/30',
          'focus:border-[#1A2E40]/40 focus:ring-4 focus:ring-[#1A2E40]/10',
        ].join(' ')}
      />
      <CiSearch className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
    </div>
  )
} 
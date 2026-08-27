export interface MegaMenuLink {
  label: string
  href: string
  description?: string
}

export interface MegaMenuColumn {
  heading: string
  links: MegaMenuLink[]
}

export interface NavItem {
  label: string
  href: string
  megaMenu?: MegaMenuColumn[]
}

// Single source of truth for the navbar. Add/remove/reorder items here —
// both the desktop and mobile nav render from this array.
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Destinations",
    href: "/destinations",
    megaMenu: [
      {
        heading: "Japan",
        links: [
          { label: "Tokyo (東京)", href: "/destinations/Tokyo", description: "Cherry blossoms & neon cities" },
          { label: "Kyoto (京都)", href: "/destinations/Kyoto", description: "Himalayan trekking routes" },
          { label: "Osaka (大阪)", href: "/destinations/Osaka", description: "Islands & street food" },
          { label: "Hokkaido (北海道)", href: "/destinations/Hokkaido", description: "Islands & street food" },
        ],
      },
      {
        heading: "Nepal",
        links: [
          { label: "Mustang", href: "/destinations/Kyoto", description: "Himalayan trekking routes" },
          { label: "Pokhara", href: "/destinations/Tokyo", description: "Cherry blossoms & neon cities" },
          { label: "Chitwan", href: "/destinations/Kyoto", description: "Himalayan trekking routes" },
        ],
      },
      {
        heading: "Bhutan",
        links: [
          { label: "Dhaka", href: "/destinations/Tokyo", description: "Cherry blossoms & neon cities" },
          { label: "Topi", href: "/destinations/Tokyo", description: "Cherry blossoms & neon cities" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    megaMenu: [
      {
        heading: "Hotels",
        links: [
          { label: "Tourist Visa", href: "/services/adventure", description: "Trekking, rafting, climbing" },
          { label: "Requirements Lists", href: "/services/cultural", description: "Heritage tours & festivals" },
        ],
      },
      {
        heading: "Rentals",
        links: [
          { label: "Tourist Visa", href: "/services/adventure", description: "Trekking, rafting, climbing" },
          { label: "Requirements Lists", href: "/services/cultural", description: "Heritage tours & festivals" },
        ],
      },
      {
        heading: "Airplane",
        links: [
          { label: "Tourist Visa", href: "/services/adventure", description: "Trekking, rafting, climbing" },
          { label: "Requirements Lists", href: "/services/cultural", description: "Heritage tours & festivals" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
]
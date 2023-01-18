export type MenuCategory = {
  name: string
  items: MenuItem[]
}

export type MenuItem = {
  name: string
  icon: string
  href: string
  external?: true
}

export const menuItems: (MenuItem | MenuCategory)[] = [
  {
    name: "Home",
    icon: "home",
    href: "/",
  },
  {
    name: "Writing",
    icon: "article",
    href: "/writing",
  },
  {
    name: "Social",
    items: [
      {
        name: "Twitter",
        icon: "brand-twitter",
        href: "https://twitter.com/ncphi",
      },
      {
        name: "LinkedIn",
        icon: "brand-linkedin",
        href: "https://ca.linkedin.com/in/nolan-phillips-70293568",
      },
    ],
  },
]

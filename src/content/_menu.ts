export type MenuCategory = {
  name: string
  items: MenuItem[]
}

export type MenuItem = {
  name: string
  icon: string
  href: string
}

export const menuItems: (MenuItem | MenuCategory)[] = [
  {
    name: "Home",
    icon: "home",
    href: "/"
  },
  {
    name: "Writing",
    icon: "article",
    href: "/writing"
  },
  // {
  //   name: "Me",
  //   items: [
  //     {
  //       name: "Snippets",
  //       icon: "code",
  //       href: "/snippets"        
  //     }
  //   ]
  // }
]
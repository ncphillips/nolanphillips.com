import Icon from "@ds/Icon"
import Text from "@ds/Text"
import {
  MenuCategory,
  MenuItem as MenuItemProps,
  menuItems,
} from "../../content/_menu"
import { cn } from "cn"

export const Menu = () => (
  <ul className="flex flex-col gap-2">
    {menuItems.map((menuItem) => {
      if ("items" in menuItem) {
        return <Category {...menuItem} />
      } else {
        return <MenuItem {...menuItem} />
      }
    })}
  </ul>
)

const Category = ({ name, items }: MenuCategory) => (
  <li className="mt-4">
    <span className="inline-block px-2 py-4">
      <Text size="sm">
        <strong>{name}</strong>
      </Text>
    </span>
    <ul className="flex flex-col gap-2">
      {items.map((menuItem) => (
        <MenuItem {...menuItem} />
      ))}
    </ul>
  </li>
)

const MenuItem: React.FC<MenuItemProps & { active?: true }> = ({
  active,
  href,
  name,
  icon,
}) => {
  const isExternal = href.startsWith("http")

  return (
    <a href={href} rel="prefetch" target={isExternal ? "_blank" : "_self"}>
      <li className="group relative p-2 text-zinc-800 dark:text-zinc-50 dark:hover:text-white">
        <span
          className={cn(
            "absolute inset-1 z-0 ",
            "ease-bounce transition-all duration-200",
            "group-hover:-inset-0 group-hover:opacity-100 group-active:-inset-1 group-active:opacity-100",
            "bg-zinc-200 dark:bg-zinc-800",
            "rounded-lg",
            active ? "opacity-100" : "opacity-0"
          )}
        />
        <span className="relative z-10">
          <Text as="span" size="sm" color="inherit">
            <span className="flex flex-row items-center gap-2">
              <Icon name={icon} /> {name}{" "}
              {isExternal && <Icon name="external-link" />}{" "}
            </span>{" "}
          </Text>
        </span>
      </li>
    </a>
  )
}

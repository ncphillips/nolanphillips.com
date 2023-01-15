import Icon from "../../components/Icon"
import Text from "../../components/typography/Text"
import { MenuItem as MenuItemProps, menuItems } from "../../content/_menu"

export const Menu = () => (
  <ul className="flex flex-col gap-2 mt-4">
  {menuItems.map(menuItem => {
    if ('items' in menuItem) {
      return (
        <li className="mt-4">
          <Text size="sm"><strong>{menuItem.name}</strong></Text>
          <ul className="flex flex-col gap-2">
            {menuItem.items.map(menuItem => (
              <MenuItem {...menuItem} />
            ))}
          </ul>
        </li>
      )
    }
    else {
      return (
        <MenuItem {...menuItem} />
      )
    }
  })}
</ul>
)

const MenuItem: React.FC<MenuItemProps> = ({ href, name, icon }) => (
  <a href={href} className="rounded-md py-1 px-2 -mx-2 text-zinc-800 hover:text-zinc-50 dark:text-zinc-50 dark:hover:text-white hover:bg-zinc-600 dark:hover:bg-zinc-500">
    <li>
      <Text as='span' size='sm' color='inherit'>
        <span className="flex flex-row gap-2 items-center">
          <Icon name={icon} />
          {name}
        </span>
      </Text>
    </li>
  </a>
)
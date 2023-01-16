import Icon from "../../components/Icon"
import Text from "../../components/typography/Text"
import { MenuItem as MenuItemProps, menuItems } from "../../content/_menu"

export const Menu = () => (
  <ul className="flex flex-col gap-2 mt-4">
  {menuItems.map(menuItem => {
    if ('items' in menuItem) {
      return (
        <li className="mt-4">
          <span className="inline-block ml-2 pb-1">
            <Text size="sm"><strong>{menuItem.name}</strong></Text>
          </span>
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

const MenuItem: React.FC<MenuItemProps & { active?: true }> = ({ active, href, name, icon }) => {
  const isExternal = href.startsWith('http')
  const classes = ["absolute z-0 inset-1 group-hover:-inset-0 group-active:-inset-1 rounded-lg bg-zinc-200 dark:bg-zinc-800 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-200 ease-bounce"]

  if (active) classes.push('opacity-100')

  return (
    <a href={href} rel="prefetch" target={isExternal ? "_blank" : "_self"}>
      <li className="relative group p-2 text-zinc-800 dark:text-zinc-50 dark:hover:text-white">
        <span className={classes.join(' ')} />
        <span className="relative z-10">
          <Text as='span' size='sm' color='inherit'>
            <span className="flex flex-row gap-2 items-center">
              <Icon name={icon} />
              {name}
              {isExternal && <Icon name='external-link' />}
            </span>
          </Text>
        </span>
      </li>
    </a>
  )
}
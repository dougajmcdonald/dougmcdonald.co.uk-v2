import { NavLink } from 'react-router'
import type { ReactNode } from 'react'

export function NavigationItemList({ children }: { children: ReactNode }) {
  return <ul className="flex flex-row gap-6">{children}</ul>
}

type NavigationItemProps = {
  to: string
  label: string
}

export function NavigationItem({ to, label }: NavigationItemProps) {
  return (
    <li className="flex h-9 text-sm">
      <NavLink
        to={to}
        className={({ isActive }) =>
          [
            'hover:text-primary-800 flex h-full items-center justify-center rounded-b-sm px-3 hover:underline',
            isActive ? 'bg-primary-200 text-primary-800' : 'text-primary-700',
          ].join(' ')
        }
      >
        {label}
      </NavLink>
    </li>
  )
}

const navLinkConfig = [
  { to: '/', label: 'home' },
  { to: '/work', label: 'work' },
  { to: '/career', label: 'career' },
  { to: '/about', label: 'about' },
]
export function Navigation() {
  return (
    <nav className="border-primary-200 flex w-full justify-center border-t">
      <NavigationItemList>
        {navLinkConfig.map((navLink) => (
          <NavigationItem {...navLink} />
        ))}
      </NavigationItemList>
    </nav>
  )
}

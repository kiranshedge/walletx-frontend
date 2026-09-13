import { NavLink } from 'react-router-dom'
import { Icon } from '../primitives'
import { navigationItems, type NavigationIcon } from '../../app/navigation'
import { cn } from '../../lib/cn'

interface NavigationLinksProps {
  orientation: 'sidebar' | 'mobile'
}

function NavigationGlyph({ name }: { name: NavigationIcon }) {
  return (
    <Icon className="size-5 shrink-0" aria-hidden="true">
      {name === 'home' ? <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></> : <><path d="M4 5h16v14H4z" /><path d="M8 9h8M8 13h5M8 17h3" /></>}
    </Icon>
  )
}

export function NavigationLinks({ orientation }: NavigationLinksProps) {
  return (
    <ul className={cn('flex gap-2', orientation === 'sidebar' ? 'flex-col' : 'grid grid-cols-2')}>
      {navigationItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => cn(
              'flex min-h-11 items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-100',
              orientation === 'mobile' && 'justify-center flex-col gap-1 px-2 py-2 text-xs',
              isActive ? 'bg-brand-50 text-brand-800' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950',
            )}
          >
            {({ isActive }) => <><NavigationGlyph name={item.icon} /><span>{item.label}</span>{isActive && <span className="sr-only">, current page</span>}</>}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

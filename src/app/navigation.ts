export type NavigationIcon = 'home' | 'activity'

export interface NavigationItem {
  label: 'Home' | 'Activity'
  path: '/' | '/activity'
  icon: NavigationIcon
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'Activity', path: '/activity', icon: 'activity' },
]

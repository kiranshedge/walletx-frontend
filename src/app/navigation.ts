export type NavigationIcon = 'home' | 'activity'

export interface NavigationItem {
  label: 'Home' | 'Activity'
  path: '/app' | '/app/activity'
  icon: NavigationIcon
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'Home', path: '/app', icon: 'home' },
  { label: 'Activity', path: '/app/activity', icon: 'activity' },
]

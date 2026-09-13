import type { ReactNode } from 'react'

export type Status = 'default' | 'success' | 'error' | 'warning'
export type Size = 'sm' | 'md' | 'lg'

export interface WithChildren {
  children?: ReactNode
}

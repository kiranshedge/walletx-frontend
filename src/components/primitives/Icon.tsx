import type { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  label?: string
}

export function Icon({ label, children, ...props }: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={label ? undefined : true} aria-label={label} {...props}>{children}</svg>
}
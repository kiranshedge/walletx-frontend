import { useState, type ImgHTMLAttributes } from 'react'
import { cn } from '../../../lib/cn'

export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  name: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ name, src, size = 'md', className, ...props }: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const initials = name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()
  return failed || !src ? <span className={cn('inline-flex shrink-0 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-800', { sm: 'size-8 text-xs', md: 'size-10 text-sm', lg: 'size-12 text-base' }[size], className)} role="img" aria-label={name}>{initials}</span> : <img src={src} alt={name} onError={() => setFailed(true)} className={cn('shrink-0 rounded-full object-cover', { sm: 'size-8', md: 'size-10', lg: 'size-12' }[size], className)} {...props} />
}

export interface SpinnerProps { label?: string; size?: 'sm' | 'md' | 'lg' }

export function Spinner({ label = 'Loading', size = 'md' }: SpinnerProps) {
  return <span className={{ sm: 'size-4 border-2', md: 'size-6 border-2', lg: 'size-8 border-[3px]' }[size] + ' inline-block animate-spin rounded-full border-violet-200 border-t-violet-700'} role="status" aria-label={label} />
}

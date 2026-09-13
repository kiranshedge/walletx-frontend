import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('disables itself and announces loading', () => {
    render(<Button loading>Continue</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('calls the click handler when enabled', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Continue</Button>)
    screen.getByRole('button').click()
    expect(onClick).toHaveBeenCalledOnce()
  })
})

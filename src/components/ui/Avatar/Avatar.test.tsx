import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('falls back to accessible initials', () => {
    render(<Avatar name="Ana Silva" />)
    expect(screen.getByRole('img', { name: 'Ana Silva' })).toHaveTextContent('AS')
  })
})

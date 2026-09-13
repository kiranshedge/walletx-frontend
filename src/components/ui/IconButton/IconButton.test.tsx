import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('uses its label as the accessible name', () => {
    render(<IconButton icon="+" label="Add money" />)
    expect(screen.getByRole('button', { name: 'Add money' })).toBeInTheDocument()
  })
})

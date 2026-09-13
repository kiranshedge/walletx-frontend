import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('exposes a loading status', () => {
    render(<Spinner label="Loading wallet" />)
    expect(screen.getByRole('status', { name: 'Loading wallet' })).toBeInTheDocument()
  })
})

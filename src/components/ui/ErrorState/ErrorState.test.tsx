import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ErrorState } from './ErrorState'

describe('ErrorState', () => {
  it('renders an alert with its description', () => {
    render(<ErrorState description="Please try again." />)
    expect(screen.getByRole('alert')).toHaveTextContent('Please try again.')
  })
})

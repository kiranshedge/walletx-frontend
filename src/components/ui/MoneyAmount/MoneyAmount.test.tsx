import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MoneyAmount } from '../MoneyAmount/MoneyAmount'

describe('MoneyAmount', () => {
  it('shows an explicit direction sign and accessible label', () => {
    render(<MoneyAmount amount={150} direction="out" showSign />)
    expect(screen.getByText(/-R\$/)).toBeInTheDocument()
    expect(screen.getByLabelText(/Money out/)).toBeInTheDocument()
  })
})

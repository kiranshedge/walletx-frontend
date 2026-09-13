import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TransactionRow } from './TransactionRow'

describe('TransactionRow', () => {
  it('shows transaction direction and amount', () => {
    render(<TransactionRow title="Ana Silva" amount={150} direction="in" />)
    expect(screen.getByLabelText(/Money in/)).toBeInTheDocument()
    expect(screen.getByText('Ana Silva')).toBeInTheDocument()
  })
})

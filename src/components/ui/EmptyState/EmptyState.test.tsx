import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders its message as a status', () => {
    render(<EmptyState title="No activity" description="Transactions will appear here." />)
    expect(screen.getByRole('status')).toHaveTextContent('No activity')
  })
})

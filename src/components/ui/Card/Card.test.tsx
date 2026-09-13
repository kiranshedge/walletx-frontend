import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card } from './Card'

describe('Card', () => {
  it('renders its content', () => {
    render(<Card>Wallet balance</Card>)
    expect(screen.getByText('Wallet balance')).toBeInTheDocument()
  })
})

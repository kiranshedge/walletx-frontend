import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Toast } from './Toast'

describe('Toast', () => {
  it('announces notification content', () => {
    render(<Toast title="Transfer complete" message="Your money has arrived." />)
    expect(screen.getByRole('status')).toHaveTextContent('Transfer complete')
  })
})

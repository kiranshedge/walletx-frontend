import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Input } from '../Input/Input'

describe('Input', () => {
  it('associates its label and error message', () => {
    render(<Input label="Email" error="Enter a valid email" />)
    const input = screen.getByLabelText('Email')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAccessibleDescription('Enter a valid email')
  })
})

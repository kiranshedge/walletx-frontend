import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { NavigationLinks } from './NavigationLinks'

describe('NavigationLinks', () => {
  it('exposes only Home and Activity with the current route marked', () => {
    render(<MemoryRouter initialEntries={['/app/activity']}><NavigationLinks orientation="sidebar" /></MemoryRouter>)
    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getByRole('link', { name: /Activity/ })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: /Home/ })).not.toHaveAttribute('aria-current')
  })
})

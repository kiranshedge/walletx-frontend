import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { AppShell } from './AppShell'

describe('AppShell', () => {
  it('renders the shell landmarks and outlet content', () => {
    render(<MemoryRouter initialEntries={['/activity']}><Routes><Route element={<AppShell />}><Route path="/activity" element={<h1>Activity content</h1>} /></Route></Routes></MemoryRouter>)
    expect(screen.getByRole('banner', { name: 'WalletX header' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toContainElement(screen.getByRole('heading', { name: 'Activity content' }))
    expect(screen.getAllByRole('navigation')).toHaveLength(2)
  })
})

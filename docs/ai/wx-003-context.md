# WalletX WX-003 AI Context

## Project

WalletX is a digital wallet frontend application.

## Current Issue

WX-003 — Implement WalletX Application Shell

## Technology

- React
- TypeScript
- Vite
- Vitest
- ESLint
- GitHub Actions

## Current Development Stage

Sprint 1
Release 1

The project is an MVP and should remain intentionally simple.

## Approved MVP Navigation

Only:

- Home
- Activity

## Shell Responsibilities

The application shell is responsible for:

- Common authenticated layout
- Header
- Navigation
- Active navigation state
- Responsive layout
- Keyboard-accessible navigation
- Main content area

## Shell Is NOT Responsible For

- Authentication
- Login
- Registration
- Logout
- API communication
- Backend integration
- Business logic
- Wallet calculations
- Transactions

## UX Requirements

- Modern Brazilian fintech aesthetic
- WalletX visual identity
- Deep violet primary accent
- Light neutral backgrounds
- Bold modern typography
- Generous whitespace
- Rounded cards
- Subtle shadows
- Clean financial hierarchy
- Desktop and mobile responsive design

## Accessibility

The shell must:

- Use semantic HTML
- Support keyboard navigation
- Provide visible focus states
- Provide appropriate navigation semantics
- Not rely on color alone
- Avoid horizontal scrolling

## MVP Restrictions

Do NOT introduce:

- PIX
- Cards
- Investments
- Bank integrations
- Analytics
- Notifications
- KYC
- MFA
- Profile
- Admin
- Budgets
- Recurring transfers
- Multiple currencies

## Engineering Principles

- Prefer simple solutions.
- Reuse existing project infrastructure.
- Avoid unnecessary dependencies.
- Avoid premature abstraction.
- Do not rewrite unrelated code.
- Keep components focused.
- Keep TypeScript strict.
- Write tests for important user behavior.
- Maintain responsive and accessible UI.
- Do not implement future features.
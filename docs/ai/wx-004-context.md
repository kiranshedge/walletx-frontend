We are now implementing:

WX-004 — Implement WalletX Login Screen

WalletX is a digital wallet frontend application.

Technology:
- React
- TypeScript
- Vite
- Vitest
- ESLint

Current development stage:
- Release 0.2 — Authentication
- Sprint 1
- MVP

WX-003 — WalletX Application Shell has already been implemented.

The current task is ONLY the Login screen.

The Login screen should provide the UI and client-side interaction required for a user to enter their credentials.

For this issue, authentication must remain simulated/client-side.

Do NOT implement:
- Backend authentication
- API calls
- JWT
- OAuth
- refresh tokens
- MFA
- password reset
- registration logic
- authentication state management
- protected routes
- user profiles
- future MVP features

The Login screen should include:
- WalletX branding
- Email input
- Password input
- Password visibility toggle
- Login button
- Validation feedback
- Loading state
- Authentication-error presentation suitable for a mocked login flow
- Responsive desktop and mobile layouts
- Keyboard accessibility
- Visible focus states

Use the existing WalletX application shell and existing project architecture.

Do not introduce unnecessary dependencies.

Do not rewrite unrelated code.

Before making any changes, inspect the repository and explain:
1. Current application structure
2. How WX-003 was implemented
3. Existing styling approach
4. Existing reusable components
5. Existing routing approach
6. Existing testing setup
7. Where the Login screen should be implemented
8. Which files you propose creating or modifying

Do not write code yet.
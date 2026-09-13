# WalletX --- Frontend Roadmap

**Document:** `docs/frontend-roadmap.md`\
**Status:** **MVP IMPLEMENTATION ROADMAP --- aligned to frozen
requirements**

------------------------------------------------------------------------

# 1. Objective

Build WalletX as a professional React + TypeScript frontend while
deliberately evolving the codebase from a simple MVP toward an
enterprise-grade frontend architecture.

The implementation should be sophisticated enough to demonstrate senior
engineering practices without prematurely implementing features that are
outside the frozen product scope.

------------------------------------------------------------------------

# 2. Recommended Technology Baseline

## Core

-   React
-   TypeScript
-   Vite
-   React Router
-   ESLint
-   Prettier
-   Vitest
-   React Testing Library

## Styling

Choose one styling approach and standardize it across the project.

Recommended options:

-   CSS Modules + CSS variables
-   Tailwind CSS
-   a lightweight component/styling system

For a portfolio project, the most important requirement is consistency
rather than the specific styling library.

## API

Recommended:

-   `fetch` or Axios
-   centralized API client
-   typed request/response models
-   consistent error normalization

## Server state

Use a dedicated server-state approach once API integration begins, for
example TanStack Query.

## Forms

Use React Hook Form when forms become sufficiently complex, paired with
a schema validator such as Zod.

Do not add libraries simply for the sake of having a large dependency
list.

------------------------------------------------------------------------

# 3. Repository Structure

Recommended starting structure:

``` text
walletx-frontend/
├── docs/
│   ├── product-requirements.md
│   ├── user-flows.md
│   ├── ui-guidelines.md
│   └── frontend-roadmap.md
├── public/
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── features/
│   │   ├── auth/
│   │   ├── wallet/
│   │   ├── money-movement/
│   │   └── activity/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── utils/
│   └── main.tsx
├── tests/
├── .env.example
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

The exact structure may evolve. Do not create folders without a reason.

------------------------------------------------------------------------

# 4. Git Strategy

## Main branches

``` text
main
develop
feature/*
fix/*
chore/*
docs/*
```

If the repository is intentionally kept simpler, `main` + short-lived
feature branches is also acceptable.

Recommended portfolio workflow:

``` text
main
  |
  +-- feature/WX-001-project-bootstrap
  |
  +-- feature/WX-002-auth-layout
  |
  +-- feature/WX-003-login
  |
  +-- feature/WX-004-register
  ...
```

Use small, focused pull requests.

------------------------------------------------------------------------

# 5. Commit Convention

Use conventional-style commits:

``` text
feat: add login form
feat: add dashboard balance card
fix: prevent duplicate transfer submission
test: add login validation tests
docs: freeze walletx mvp requirements
refactor: extract transaction item
chore: configure eslint
```

Avoid commits such as:

``` text
changes
stuff
final
final2
fix
```

------------------------------------------------------------------------

# 6. Pull Request Rules

Every PR should contain:

``` text
## What
What changed?

## Why
Why is this required?

## Scope
Which requirement/story does this implement?

## Testing
How was it tested?

## Screenshots
Desktop/mobile screenshots when UI changes.

## Checklist
- [ ] Tests added/updated
- [ ] Responsive behavior checked
- [ ] Accessibility checked
- [ ] No secrets committed
- [ ] No out-of-scope functionality added
```

------------------------------------------------------------------------

# 7. Definition of Done

A frontend story is Done when:

-   implementation is complete;
-   acceptance criteria pass;
-   TypeScript compilation passes;
-   lint passes;
-   relevant automated tests pass;
-   desktop layout is checked;
-   mobile layout is checked;
-   keyboard navigation is checked where relevant;
-   loading/error/empty states are implemented where relevant;
-   no console errors remain;
-   no sensitive data is logged;
-   code is reviewed;
-   PR is approved and merged.

------------------------------------------------------------------------

# 8. Phase 0 --- Product Freeze

**Goal:** Establish a stable contract before coding.

### Deliverables

-   Product requirements
-   User flows
-   UI guidelines
-   Frontend roadmap
-   Approved UI reference images
-   Frozen MVP scope

### Story examples

``` text
WX-001 Freeze MVP product requirements
WX-002 Document user journeys
WX-003 Document UI guidelines
WX-004 Create frontend roadmap
```

### Exit criteria

The team can answer:

-   What are we building?
-   What are we not building?
-   What screens exist?
-   What are the main journeys?
-   What does Done mean?

------------------------------------------------------------------------

# 9. Phase 1 --- Project Bootstrap

**Goal:** Create a clean React + TypeScript foundation.

### Tasks

1.  Create GitHub repository.
2.  Create Vite React TypeScript application.
3.  Configure TypeScript.
4.  Configure ESLint.
5.  Configure Prettier.
6.  Add test framework.
7.  Create basic application shell.
8.  Add environment configuration.
9.  Create README.
10. Add CI for lint/typecheck/tests/build.

### Suggested story

``` text
WX-010 Bootstrap WalletX frontend
```

### Acceptance

``` text
npm run lint
npm run typecheck
npm run test
npm run build
```

must succeed.

------------------------------------------------------------------------

# 10. Phase 2 --- Design Foundation

**Goal:** Translate approved UI into reusable frontend primitives.

### Tasks

-   Define design tokens.
-   Create typography styles.
-   Create spacing system.
-   Create button variants.
-   Create form controls.
-   Create layout containers.
-   Create responsive navigation.
-   Create transaction primitives.
-   Create loading/error/empty primitives.

### Story

``` text
WX-020 Build WalletX design foundation
```

### Do not

Create feature functionality here.

------------------------------------------------------------------------

# 11. Phase 3 --- Authentication

Implement:

``` text
Login
Register
Logout
Session handling
Protected routes
```

### Stories

``` text
WX-030 Login screen
WX-031 Login validation
WX-032 Registration screen
WX-033 Registration validation
WX-034 Authentication service
WX-035 Session restoration
WX-036 Protected routing
WX-037 Logout
```

### Testing

Test:

-   valid login;
-   invalid credentials;
-   validation;
-   registration;
-   session restoration;
-   expired session;
-   logout;
-   protected route redirect.

------------------------------------------------------------------------

# 12. Phase 4 --- Wallet Dashboard

Implement:

``` text
Dashboard
Available balance
Recent transactions
```

### Stories

``` text
WX-040 Dashboard layout
WX-041 Balance card
WX-042 Recent transactions
WX-043 Dashboard loading state
WX-044 Dashboard error state
WX-045 Dashboard empty state
```

### Testing

-   balance renders correctly;
-   money formatting is correct;
-   transactions render;
-   loading state appears;
-   empty state appears;
-   API failure is handled.

------------------------------------------------------------------------

# 13. Phase 5 --- Add Money

Implement only the approved simulated deposit experience.

### Stories

``` text
WX-050 Add Money screen
WX-051 Deposit amount validation
WX-052 Deposit submission
WX-053 Deposit success state
WX-054 Deposit error/loading states
```

### Testing

-   valid amount;
-   invalid amount;
-   submission loading;
-   duplicate submission prevention;
-   success;
-   failure;
-   wallet refresh.

------------------------------------------------------------------------

# 14. Phase 6 --- Transfer

Implement:

``` text
Recipient
Amount
Review
Success
```

### Stories

``` text
WX-060 Transfer recipient
WX-061 Recipient validation
WX-062 Transfer amount
WX-063 Transfer validation
WX-064 Transfer review
WX-065 Transfer confirmation
WX-066 Transfer success
WX-067 Transfer error/loading states
```

### Critical engineering rule

Money movement is a high-integrity workflow.

The UI should prevent accidental duplicate submission, but backend
idempotency is required for true duplicate protection.

------------------------------------------------------------------------

# 15. Phase 7 --- Transaction Activity

Implement:

``` text
Activity
Transaction list
```

### Stories

``` text
WX-070 Activity screen
WX-071 Transaction item
WX-072 Activity loading state
WX-073 Activity empty state
WX-074 Activity error state
```

### Testing

-   transaction rendering;
-   positive/negative formatting;
-   empty list;
-   API error;
-   responsive list behavior;
-   accessibility.

------------------------------------------------------------------------

# 16. Phase 8 --- Integration Hardening

Once the backend APIs exist:

### Tasks

-   Replace mocks with real API clients.
-   Define API contracts.
-   Normalize API errors.
-   Add request cancellation where appropriate.
-   Add server-state caching/invalidation.
-   Handle session expiry globally.
-   Ensure post-money-movement balance refresh.
-   Remove development-only mock paths.

### Important

Do not allow UI state to become the source of truth for wallet balance.

------------------------------------------------------------------------

# 17. Phase 9 --- Quality Engineering

### Automated testing layers

``` text
Unit
  ↓
Component
  ↓
Feature
  ↓
Critical user journey
  ↓
Browser/E2E
```

Focus E2E coverage on:

1.  Register
2.  Login
3.  Dashboard
4.  Add Money
5.  Transfer
6.  Activity
7.  Logout

Do not chase arbitrary test coverage percentages. Prioritize business
risk.

------------------------------------------------------------------------

# 18. Phase 10 --- Accessibility & Responsive Audit

Before MVP release:

### Desktop

Test at representative laptop/desktop widths.

### Mobile

Test narrow and wide mobile widths.

### Accessibility

Check:

-   keyboard-only navigation;
-   focus order;
-   form labels;
-   validation announcements;
-   button names;
-   contrast;
-   screen reader semantics;
-   transaction direction without color.

------------------------------------------------------------------------

# 19. Phase 11 --- Security Review

Review:

-   authentication state;
-   token/session storage;
-   protected routes;
-   API authorization assumptions;
-   XSS risks;
-   sensitive logging;
-   environment variables;
-   production HTTPS;
-   dependency vulnerabilities;
-   duplicate money movement behavior.

Remember: frontend security controls improve UX but backend
authorization and financial validation are authoritative.

------------------------------------------------------------------------

# 20. Phase 12 --- Production Readiness Baseline

Only after MVP behavior is stable should the frontend begin evolving
toward enterprise concerns.

Potential future concerns:

-   feature flags;
-   observability;
-   error monitoring;
-   performance budgets;
-   advanced caching;
-   design system package;
-   shared frontend libraries;
-   CI/CD environments;
-   automated release pipelines;
-   contract testing;
-   end-to-end test environments;
-   internationalization;
-   stronger security posture.

These are **future engineering evolution topics**, not MVP product
features.

------------------------------------------------------------------------

# 21. AI-Assisted Development Workflow

Because this project is being developed with ChatGPT/Copilot, AI should
accelerate implementation without becoming the source of truth.

Use this sequence:

``` text
Requirement
   ↓
User story
   ↓
Acceptance criteria
   ↓
Design/UI decision
   ↓
Implementation plan
   ↓
AI-assisted coding
   ↓
Developer review
   ↓
Tests
   ↓
Local verification
   ↓
PR
   ↓
Review
   ↓
Merge
```

### Good AI prompt pattern

``` text
You are a senior React + TypeScript engineer.

Implement only requirement WX-XXX.

Context:
- [relevant requirement]
- [relevant acceptance criteria]
- [existing architecture]

Constraints:
- Do not add functionality outside the requirement.
- Follow existing WalletX design tokens/components.
- Keep business logic separate from presentation.
- Add tests.
- Explain any architectural decision before making a significant change.

First propose the implementation plan.
Do not write code yet.
```

Then:

``` text
Implement the approved plan.

After implementation:
1. List changed files.
2. Explain important decisions.
3. Provide tests.
4. Identify edge cases.
5. Identify anything I should manually verify.
```

------------------------------------------------------------------------

# 22. AI Code Review Prompt

Before opening a PR:

``` text
Review this WalletX change as a senior frontend engineer.

Check:
- frozen MVP scope
- acceptance criteria
- TypeScript correctness
- React patterns
- state management
- API boundaries
- accessibility
- responsive behavior
- loading/error/empty states
- security
- duplicate submission risks
- test quality
- unnecessary complexity

Do not propose new product features.

Return:
1. Critical issues
2. Important issues
3. Minor issues
4. Suggested fixes
5. Whether this is ready for PR
```

------------------------------------------------------------------------

# 23. Roadmap Order

The recommended implementation order is:

``` text
Product Freeze
      ↓
Repository Bootstrap
      ↓
Design Foundation
      ↓
Authentication
      ↓
Dashboard
      ↓
Add Money
      ↓
Transfer
      ↓
Activity
      ↓
Backend Integration
      ↓
Quality Hardening
      ↓
Accessibility/Responsive Audit
      ↓
Security Review
      ↓
MVP Release
```

This order minimizes rework while preserving a realistic engineering
progression.

------------------------------------------------------------------------

# 24. MVP Release Gate

Do not call WalletX MVP complete until all frozen requirements are
implemented and verified.

Release gate:

``` text
[ ] Product requirements frozen
[ ] UI reference approved
[ ] Authentication complete
[ ] Session handling complete
[ ] Dashboard complete
[ ] Add Money complete
[ ] Transfer complete
[ ] Review complete
[ ] Success state complete
[ ] Activity complete
[ ] Loading states complete
[ ] Error states complete
[ ] Empty states complete
[ ] Responsive audit complete
[ ] Accessibility audit complete
[ ] Security review complete
[ ] Automated tests pass
[ ] Production build passes
[ ] No out-of-scope features added
```

------------------------------------------------------------------------

# 25. Evolution Beyond MVP

After the MVP is stable, the frontend can evolve in controlled stages:

``` text
MVP
  ↓
Clean modular frontend
  ↓
Feature-oriented architecture
  ↓
Enterprise API integration
  ↓
Observability + CI/CD
  ↓
Advanced frontend platform practices
```

The evolution should improve engineering quality without silently
expanding the product scope.

**Principle:** Freeze the product, evolve the architecture.

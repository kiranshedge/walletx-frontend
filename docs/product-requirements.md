# WalletX --- Product Requirements

**Document:** `docs/product-requirements.md`\
**Status:** **FROZEN --- MVP v1.0**\
**Product:** WalletX\
**Frontend:** React + TypeScript\
**Backend:** Java + Spring Boot (eventual integration)\
**Primary UI reference:** Approved WalletX desktop/mobile screens
supplied with this specification.

------------------------------------------------------------------------

## 1. Product Overview

WalletX is a personal digital wallet application that allows a signed-in
user to:

-   create an account and sign in;
-   maintain a wallet balance;
-   add money through a simulated deposit flow;
-   transfer money to another WalletX user;
-   review a transfer before confirming it;
-   see transfer success;
-   view transaction activity;
-   log out and have the application manage the authenticated session.

The MVP intentionally focuses on the smallest complete wallet
experience. The product must not expand beyond the frozen scope without
an explicit requirements change.

### Product principles

1.  **Simple** --- few screens, clear actions, minimal cognitive load.
2.  **Secure** --- authentication and money movement must have explicit
    state and error handling.
3.  **Transparent** --- balances, transaction direction, amounts, and
    transfer outcomes are unambiguous.
4.  **Responsive** --- the approved experience works on desktop and
    mobile.
5.  **Accessible** --- important information is not communicated by
    color alone.
6.  **Incremental** --- implementation starts simple and can evolve
    toward enterprise architecture without prematurely implementing
    enterprise-only features.

------------------------------------------------------------------------

# 2. Frozen MVP Scope

## 2.1 In scope

### Authentication

-   Login
-   Register
-   Logout
-   Session handling

### Wallet

-   Dashboard
-   Available balance
-   Recent transactions

### Money movement

-   Add Money
-   Transfer Money
-   Transfer Review
-   Transfer Success

### Activity

-   Transaction Activity

## 2.2 Explicitly out of scope

The following are **not part of WalletX MVP v1.0**:

-   PIX
-   cards / virtual cards
-   bank-account integrations
-   real payment rails
-   investments
-   analytics / financial insights
-   budgets
-   recurring transfers
-   scheduled transfers
-   notifications
-   KYC / identity verification
-   beneficiary management
-   transaction search
-   advanced transaction filtering beyond the approved Activity
    experience
-   profile management
-   password change
-   password reset implementation beyond a non-functional link/state if
    present in the approved UI
-   multi-factor authentication
-   biometric authentication
-   device management
-   admin portal
-   fraud detection
-   chargebacks / disputes
-   foreign currencies
-   exchange rates
-   fees beyond displaying a transfer fee if the backend contract later
    defines one
-   real-world banking integrations
-   microservices
-   event streaming
-   production payment processing

**Scope rule:** If a proposed feature is not listed under "In scope", it
must be treated as out of scope unless this frozen document is
deliberately revised.

------------------------------------------------------------------------

# 3. Primary User

A WalletX user is an individual who wants a simple way to maintain a
digital wallet balance and send/receive simulated money.

The MVP has one primary role:

-   **Authenticated User**

There is no separate administrator or support role in the frontend MVP.

------------------------------------------------------------------------

# 4. Core User Journeys

## Journey A --- New user registration

1.  User opens WalletX.
2.  User selects **Register**.
3.  User enters required registration information.
4.  User submits **Create account**.
5.  System validates the form.
6.  If registration succeeds, the user is authenticated or directed to
    Login according to the backend contract.
7.  User reaches the authenticated application.

## Journey B --- Returning user login

1.  User opens WalletX.
2.  User enters email/phone and password.
3.  User selects **Log in**.
4.  System authenticates the credentials.
5.  Session is established.
6.  User reaches Dashboard.

## Journey C --- View wallet

1.  Authenticated user opens Dashboard.
2.  System displays available balance.
3.  System displays recent transactions.
4.  User can choose **Add Money**, **Transfer**, or **Activity**.

## Journey D --- Add money

1.  User opens Add Money.
2.  User chooses the approved simulated deposit method.
3.  User enters/continues through the approved amount flow.
4.  System validates the request.
5.  Deposit succeeds.
6.  Balance is updated.
7.  A successful deposit is reflected in recent/activity transactions.

## Journey E --- Transfer money

1.  User opens Transfer Money.
2.  User selects/searches a recipient using the approved recipient
    input.
3.  User enters amount.
4.  System validates recipient and amount.
5.  User proceeds to Review.
6.  Review shows recipient, amount, fee if applicable, and total.
7.  User confirms.
8.  System processes the transfer.
9.  Success screen displays the result and transaction information.
10. Balance/activity eventually reflect the transfer.

## Journey F --- View activity

1.  Authenticated user opens Activity.
2.  System loads transaction activity.
3.  User sees transaction direction, description/recipient, date/time,
    and amount.
4.  User can distinguish money in from money out without relying solely
    on color.

## Journey G --- Logout

1.  Authenticated user selects Logout.
2.  Session is invalidated/cleared according to the authentication
    contract.
3.  User is returned to Login.
4.  Protected screens are no longer accessible through normal navigation
    or direct URL access.

------------------------------------------------------------------------

# 5. Screen Responsibilities

## 5.1 Login

**Purpose:** Authenticate an existing user.

**Must contain:** - WalletX branding - Email or phone input - Password
input - Login action - Register navigation

**May contain only if represented by the approved UI:** - Forgot
password link/state

**Must not contain:** wallet data or money movement.

## 5.2 Register

**Purpose:** Create a WalletX account.

**Must contain:** - Full name - Email/phone - Password - Create account
action - Login navigation

**Validation:** required fields, valid contact format, password
requirements defined by the backend/API contract.

## 5.3 Dashboard

**Purpose:** Give the user an immediate view of their wallet.

**Must contain:** - Available balance - Add Money action - Transfer
action - Recent transactions - Home navigation - Activity navigation

The Dashboard is the authenticated landing screen.

## 5.4 Add Money

**Purpose:** Add funds through the MVP's simulated deposit flow.

**Must contain:** - Add Money heading - Approved simulated deposit
option - Amount/step flow represented by the UI - Continue/action
control - Success state after completion

No real banking/payment provider is required.

## 5.5 Transfer Money

**Purpose:** Collect transfer recipient and amount.

**Must contain:** - Recipient input - Recipient selection/results as
represented in the UI - Amount input/step - Continue action - Clear
validation feedback

## 5.6 Transfer Review

**Purpose:** Give the user a final opportunity to verify a transfer
before money movement.

**Must display:** - Recipient - Amount - Fee, if returned by the backend
contract - Total - Confirm action

The review screen must not silently alter the transfer values.

## 5.7 Transfer Success

**Purpose:** Confirm that a transfer was successfully
accepted/processed.

**Must display:** - Success indicator - Recipient - Amount - Date/time
where available - Transaction ID where available - Done/navigation
action

A success screen must only be shown for a confirmed successful backend
response.

## 5.8 Transaction Activity

**Purpose:** Show wallet transaction history.

**Must contain:** - Transaction list - Transaction description/type -
Date/time - Amount - Positive/negative direction

Money direction must be communicated through both sign/text and visual
treatment; color alone is insufficient.

------------------------------------------------------------------------

# 6. Functional Requirements

## FR-AUTH --- Authentication

### FR-AUTH-001 Login

The application shall allow a registered user to submit valid
credentials.

### FR-AUTH-002 Login validation

The application shall prevent submission when required credentials are
missing or invalid according to frontend validation rules.

### FR-AUTH-003 Login failure

The application shall display a clear, non-sensitive authentication
error when authentication fails.

### FR-AUTH-004 Registration

The application shall allow a user to submit the approved registration
fields.

### FR-AUTH-005 Registration validation

The application shall validate required fields and format before
submitting.

### FR-AUTH-006 Logout

The application shall provide logout from authenticated navigation.

### FR-AUTH-007 Session restoration

On application startup, the frontend shall determine whether an existing
authenticated session is valid.

### FR-AUTH-008 Protected routes

Unauthenticated users shall not access authenticated application screens
through normal routing.

### FR-AUTH-009 Session expiry

If the backend indicates that the session is expired/invalid, the
frontend shall clear the authenticated state and return the user to
Login.

------------------------------------------------------------------------

## FR-WALLET --- Wallet

### FR-WALLET-001 Dashboard balance

The Dashboard shall display the user's available balance.

### FR-WALLET-002 Currency formatting

Money shall be formatted consistently using the wallet's configured
currency/locale.

### FR-WALLET-003 Recent transactions

The Dashboard shall show the approved recent transaction set returned by
the backend.

### FR-WALLET-004 Balance refresh

After a successful money movement, the application shall refresh or
update the displayed balance using authoritative backend data.

------------------------------------------------------------------------

## FR-MONEY --- Money Movement

### FR-MONEY-001 Add Money

The user shall be able to start the approved simulated deposit flow.

### FR-MONEY-002 Add Money validation

The application shall validate the deposit amount before submission.

### FR-MONEY-003 Add Money success

The application shall display a success state only after a successful
response.

### FR-MONEY-004 Transfer recipient

The user shall be able to provide/select a transfer recipient.

### FR-MONEY-005 Transfer amount

The user shall be able to enter a transfer amount.

### FR-MONEY-006 Transfer validation

The application shall reject invalid transfer amounts before submission.

### FR-MONEY-007 Review

The application shall display a review state before final transfer
confirmation.

### FR-MONEY-008 Confirmation

The transfer shall only be submitted as final after the user explicitly
selects Confirm.

### FR-MONEY-009 Transfer success

The application shall display Transfer Success only after successful
confirmation.

### FR-MONEY-010 No duplicate submission

The UI shall prevent accidental duplicate submissions while a money
movement request is in progress.

------------------------------------------------------------------------

## FR-ACTIVITY --- Activity

### FR-ACT-001 Activity list

Authenticated users shall be able to open Transaction Activity.

### FR-ACT-002 Transaction presentation

Each transaction shall display the information supplied by the approved
API contract.

### FR-ACT-003 Direction

Money-in transactions shall be visually and textually distinguishable
from money-out transactions.

------------------------------------------------------------------------

# 7. Frontend Acceptance Criteria

## Authentication

-   Given valid login credentials, when the user submits Login, then the
    application establishes the authenticated state and navigates to
    Dashboard.
-   Given invalid credentials, when Login is submitted, then an
    actionable authentication error is shown and the user remains on
    Login.
-   Given incomplete required fields, the form cannot be successfully
    submitted.
-   Given a valid authenticated session on application startup, the user
    is not unnecessarily redirected to Login.
-   Given an invalid/expired session, the user is returned to Login and
    protected state is cleared.
-   When Logout is completed, the user cannot continue using
    authenticated screens through normal navigation.

## Dashboard

-   Dashboard shows the current available balance.
-   Dashboard shows recent transactions or the approved empty state.
-   Add Money and Transfer actions are prominent and usable on desktop
    and mobile.
-   Navigation exposes only the MVP navigation items: Home and Activity.

## Add Money

-   The user can complete the simulated deposit flow.
-   Invalid amounts are rejected with understandable validation.
-   While submission is in progress, the action cannot be accidentally
    submitted multiple times.
-   Success is shown only after the backend confirms the deposit.
-   After success, wallet state is refreshed or invalidated so the
    updated balance can be obtained.

## Transfer

-   Recipient is required.
-   Amount is required and must be valid.
-   User cannot reach successful transfer without passing through
    Review.
-   Review values match the values entered/selected by the user.
-   Confirm cannot be submitted repeatedly while processing.
-   Success is shown only for a successful backend response.
-   Failed transfers remain recoverable without losing the user's
    entered data where technically safe.

## Activity

-   Activity can be opened from authenticated navigation.
-   Transactions have clear descriptions and amounts.
-   Positive transactions use a `+` sign and money-out transactions use
    a `-` sign.
-   Color is supplementary rather than the only direction indicator.

------------------------------------------------------------------------

# 8. Responsive Requirements

The application shall support the two approved experience classes:

### Desktop

-   Two-column/authentication compositions may be used where represented
    by the reference UI.
-   Authenticated screens use a left navigation rail/sidebar where
    represented.
-   Content remains readable at common laptop and desktop widths.
-   Primary actions remain visually prominent.

### Mobile

-   Layout collapses into a single-column experience.
-   Navigation becomes the approved mobile navigation pattern.
-   Forms use the available viewport width with appropriate horizontal
    padding.
-   Touch targets must be comfortably tappable.
-   No horizontal scrolling should be required for normal use.
-   Transaction amounts and descriptions must remain readable without
    zooming.
-   Long recipient names and transaction descriptions must wrap or
    truncate safely.

### Responsive behavior

-   Components should adapt through layout rules rather than duplicated
    desktop/mobile business logic.
-   Breakpoints must be based on layout needs, not on specific device
    models.
-   Loading, error, and empty states must also be responsive.

------------------------------------------------------------------------

# 9. Accessibility Requirements

WalletX MVP shall target **WCAG 2.2 AA** practices where applicable.

### Keyboard

-   All interactive elements are keyboard accessible.
-   Focus order follows the visual/task order.
-   Visible focus indication is provided.
-   No keyboard trap exists.

### Screen readers

-   Inputs have programmatic labels.
-   Buttons have meaningful accessible names.
-   Form validation errors are associated with their inputs.
-   Success/error messages are announced appropriately.
-   Loading state changes are communicated without requiring visual
    inspection.

### Visual

-   Text and interactive controls have sufficient contrast.
-   Do not communicate transaction direction by color alone.
-   Use `+` / `-` signs and meaningful text labels.
-   Do not rely solely on icons to convey meaning.

### Forms

-   Required fields are identified.
-   Errors explain what must be corrected.
-   Password fields have appropriate accessible semantics.
-   Input purpose/autocomplete should be configured where appropriate.

### Motion

-   Avoid unnecessary animation.
-   Essential content must not depend on animation.

------------------------------------------------------------------------

# 10. Error States

Every asynchronous feature must have an explicit error state.

## Authentication errors

-   Invalid credentials
-   Account creation failure
-   Network unavailable
-   Session expired
-   Unexpected server error

Errors must not reveal sensitive information such as whether a
particular account exists unless the backend/product explicitly requires
it.

## Wallet errors

-   Balance unavailable
-   Recent transactions unavailable
-   Network failure

The UI should distinguish "temporarily unavailable" from an actual zero
balance.

## Add Money errors

-   Invalid amount
-   Amount outside allowed range
-   Deposit rejected
-   Network failure
-   Unexpected server error

## Transfer errors

-   Recipient not found/invalid
-   Invalid amount
-   Insufficient funds
-   Transfer rejected
-   Session expired
-   Network failure
-   Unexpected server error

For recoverable errors, preserve user-entered information where safe.

------------------------------------------------------------------------

# 11. Loading States

Loading must be explicit and must not make the application appear
frozen.

### Login/Register

-   Disable the primary submit action while processing.
-   Show progress feedback.
-   Prevent duplicate submission.

### Dashboard

-   Show skeleton/loading placeholders for balance and transactions
    where appropriate.
-   Do not display a misleading `R$ 0,00` while the actual balance is
    still loading.

### Add Money

-   Disable the active submission control.
-   Show processing state until success/failure.

### Transfer

-   Show loading while recipient data is being retrieved if applicable.
-   Disable Continue/Confirm during submission.
-   Preserve review information during processing.

### Activity

-   Show list skeleton/loading state.
-   Do not display an empty state before the initial request has
    completed.

------------------------------------------------------------------------

# 12. Empty States

### Recent transactions

If the user has no transactions: - Explain that no transactions exist
yet. - Do not fabricate transactions. - Provide a relevant next action
only if that action already belongs to MVP, such as Add Money.

### Activity

If no transactions exist: - Show a concise empty state. - Keep
navigation available.

### Recipient results

If recipient search/lookup produces no result: - Clearly state that no
matching recipient was found. - Allow the user to correct the input.

### Wallet data unavailable

Do not confuse unavailable data with an empty wallet.

------------------------------------------------------------------------

# 13. Security Considerations

The frontend is not a security boundary. The Java/Spring Boot backend
remains authoritative for authentication, authorization, balance, and
money movement.

### Authentication

-   Never hard-code credentials or tokens.
-   Never commit secrets to Git.
-   Use secure session/token handling according to the backend
    architecture.
-   Do not log passwords, access tokens, or sensitive authentication
    data.
-   Clear authenticated client state on logout/session invalidation.

### Authorization

-   Frontend route guards improve UX but do not replace backend
    authorization.
-   Every protected API must enforce authorization server-side.

### Money movement

-   Never calculate authoritative wallet balance solely on the client.
-   Never treat client-side validation as sufficient.
-   Backend must validate balance, recipient, amount, and transfer
    authorization.
-   Backend must be the source of truth for transaction IDs and final
    transfer status.
-   Prevent duplicate requests in the UI, while the backend should
    additionally enforce idempotency for money-moving operations.

### Input safety

-   Validate and sanitize user-controlled content.
-   Render transaction/recipient text safely to prevent XSS.
-   Do not inject raw HTML from API responses.

### Error handling

-   Do not expose stack traces or internal server details.
-   Show safe user-facing messages.
-   Log technical details only in appropriate development/observability
    systems.

### Storage

-   Do not store passwords in browser storage.
-   Avoid storing sensitive authentication data in `localStorage` unless
    the selected authentication architecture explicitly requires it and
    the risk is accepted.
-   Prefer secure, appropriately scoped cookies/session mechanisms where
    supported by the backend design.

### Transport

-   Production communication must use HTTPS.
-   API clients must handle authentication failures consistently.

------------------------------------------------------------------------

# 14. MVP Data Expectations

The frontend should be designed around explicit API/domain models rather
than arbitrary UI-shaped objects.

Likely conceptual models:

-   `User`
-   `Session`
-   `Wallet`
-   `Transaction`
-   `Recipient`
-   `TransferRequest`
-   `TransferReview`
-   `TransferResult`
-   `DepositRequest`
-   `DepositResult`

Exact fields are to be finalized with the Java/Spring Boot API contract.
The frontend must not invent authoritative financial fields.

------------------------------------------------------------------------

# 15. MVP Navigation Contract

Authenticated navigation is intentionally small:

-   **Home** → Dashboard
-   **Activity** → Transaction Activity
-   **Logout** → Login

Money movement is accessed from Dashboard:

-   Dashboard → Add Money
-   Dashboard → Transfer Money
-   Transfer Money → Transfer Review
-   Transfer Review → Transfer Success

The user must not encounter navigation entries for features outside the
frozen MVP.

------------------------------------------------------------------------

# 16. Definition of Product Completion

WalletX MVP is considered product-complete when:

1.  Registration works end-to-end against the agreed API.
2.  Login works end-to-end.
3.  Logout works.
4.  Session restoration and expiry handling work.
5.  Dashboard displays authoritative balance.
6.  Recent transactions display correctly.
7.  Simulated Add Money completes successfully.
8.  Transfer recipient + amount collection works.
9.  Transfer Review is shown before confirmation.
10. Transfer Success is shown only after confirmed success.
11. Transaction Activity displays wallet transactions.
12. Desktop and mobile layouts match the approved UI intent.
13. Loading, error, and empty states exist for all asynchronous MVP
    flows.
14. Keyboard and screen-reader fundamentals are implemented.
15. No known critical security or data-integrity issue remains.
16. Automated tests cover critical user journeys.
17. The implementation contains no intentionally added out-of-scope MVP
    features.

------------------------------------------------------------------------

# 17. Product Requirement Freeze

**This document is the source of truth for WalletX MVP v1.0.**

A change to scope requires an explicit product decision and should
include:

-   requirement being changed;
-   reason;
-   affected user journey;
-   affected screens;
-   frontend impact;
-   backend/API impact;
-   testing impact;
-   documentation impact.

Until such a change is approved, engineering should implement only the
requirements in this document.

**Status: FROZEN.**

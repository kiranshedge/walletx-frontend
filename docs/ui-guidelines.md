# WalletX --- UI Guidelines

**Document:** `docs/ui-guidelines.md`\
**Status:** **FROZEN --- MVP v1.0**

------------------------------------------------------------------------

# 1. Purpose

This document converts the approved WalletX UI references into
implementation guidelines for React + TypeScript.

The goal is to reproduce the product intent consistently without
allowing individual screens to invent new visual patterns or MVP
functionality.

------------------------------------------------------------------------

# 2. Visual Direction

WalletX should feel:

-   simple;
-   modern;
-   secure;
-   friendly;
-   trustworthy;
-   lightweight;
-   fintech-oriented.

The approved direction uses a clean Brazilian fintech aesthetic with a
deep violet primary accent, light neutral surfaces, generous whitespace,
rounded cards, subtle shadows, bold modern typography, and simple icons.

The visual inspiration may be similar in spirit to modern fintech
products, but WalletX must retain its own brand identity.

------------------------------------------------------------------------

# 3. Brand

## Logo

Use the approved WalletX "W" mark and wordmark from the design
system/assets.

Do not recreate the logo independently in individual components.

## Brand usage

-   Maintain consistent clear space.
-   Do not distort the logo.
-   Do not introduce alternate brand colors without product approval.
-   Do not use decorative brand treatments that reduce readability.

------------------------------------------------------------------------

# 4. Color Semantics

The MVP should use a restrained palette.

### Primary

Deep violet is the primary action/brand accent.

Use for:

-   primary buttons;
-   selected navigation states;
-   important action controls;
-   key balance presentation where represented by the approved UI.

### Surfaces

Use white and very light neutral backgrounds for primary application
surfaces.

### Financial semantics

**Money in:** - positive/green visual treatment; - explicit `+` sign.

**Money out:** - negative/red visual treatment; - explicit `-` sign.

**Critical rule:** color must never be the only way transaction
direction is communicated.

### Errors

Use a clear error treatment with:

-   icon or text;
-   descriptive message;
-   field association where applicable.

Do not rely on red color alone.

------------------------------------------------------------------------

# 5. Typography

Use a modern, highly readable sans-serif font.

Typography should establish clear hierarchy:

1.  Page/hero heading
2.  Section heading
3.  Balance/value
4.  Body/supporting text
5.  Metadata/secondary text
6.  Error/helper text

Financial values should have strong visual hierarchy but remain easy to
scan.

Avoid excessive font sizes or decorative typography.

------------------------------------------------------------------------

# 6. Spacing

Use a consistent spacing scale.

Recommended implementation approach:

``` text
4px   micro spacing
8px   small spacing
12px  compact spacing
16px  standard spacing
24px  section spacing
32px  major spacing
48px  large composition spacing
```

Do not introduce arbitrary one-off spacing values unless required by the
approved visual design.

------------------------------------------------------------------------

# 7. Layout

## Desktop

Authenticated application layout:

``` text
+------------------------------------------------------+
| Sidebar | Header / Content                           |
|         |                                            |
| Home    | Page                                       |
| Activity|                                            |
|         |                                            |
+------------------------------------------------------+
```

Authentication screens may use a split composition:

``` text
+----------------------+-------------------------------+
| Brand / message      | Authentication form          |
+----------------------+-------------------------------+
```

The exact visual composition should follow the approved reference
screens.

## Mobile

Use a single-column composition.

``` text
+------------------------+
| Header                 |
|                        |
| Page content           |
|                        |
| Primary action         |
|                        |
| Bottom navigation      |
+------------------------+
```

Do not simply shrink desktop layouts. Reflow the content.

------------------------------------------------------------------------

# 8. Components

The MVP should establish reusable components before screen-specific
styling grows.

Recommended component categories:

## Layout

-   `AppShell`
-   `AuthLayout`
-   `PageContainer`
-   `Sidebar`
-   `MobileNavigation`
-   `PageHeader`

## Form

-   `TextField`
-   `PasswordField`
-   `AmountField`
-   `FormField`
-   `ValidationMessage`

## Actions

-   `Button`
-   `IconButton`
-   `BackButton`

## Wallet

-   `BalanceCard`
-   `TransactionList`
-   `TransactionItem`
-   `RecipientItem`
-   `SuccessState`
-   `EmptyState`
-   `ErrorState`
-   `LoadingState`

## Transfer

-   `TransferStepper`
-   `RecipientSelector`
-   `TransferSummary`

Do not create a component abstraction merely because two elements look
vaguely similar. Components should encapsulate stable UI behavior or
repeated design.

------------------------------------------------------------------------

# 9. Buttons

## Primary

Use the violet primary button for the main action.

Examples:

-   Log in
-   Create account
-   Continue
-   Confirm
-   Done

## Secondary

Use restrained secondary treatment for supporting actions.

## Disabled

Disabled controls must:

-   remain readable;
-   clearly communicate unavailable interaction;
-   not be confused with loading.

## Loading

A submitting button should communicate progress and prevent repeated
activation.

------------------------------------------------------------------------

# 10. Forms

Forms should:

-   use visible labels;
-   provide helpful placeholders only as supplementary information;
-   show validation close to the relevant field;
-   preserve user input when safe;
-   clearly identify the primary action;
-   avoid unnecessary fields.

Password fields should provide an accessible show/hide mechanism only if
included in the approved component behavior.

------------------------------------------------------------------------

# 11. Financial Formatting

Money must be consistently formatted.

Example:

``` text
+ R$ 500,00
- R$ 150,00
```

The exact formatter should be centralized rather than implemented
independently in every component.

Recommended conceptual utility:

``` text
formatCurrency(amount, currency, locale)
```

The backend should provide numeric monetary values in an unambiguous
format. The frontend is responsible for presentation formatting only.

------------------------------------------------------------------------

# 12. Transaction Items

A transaction item should have a consistent structure:

``` text
[Direction icon]  Description
                  Date/time                    Amount
```

Money in:

``` text
+ R$ 500,00
```

Money out:

``` text
- R$ 150,00
```

Avoid relying only on green/red.

------------------------------------------------------------------------

# 13. Balance

The available balance is one of the most important pieces of information
on Dashboard.

Guidelines:

-   make it immediately scannable;
-   use strong hierarchy;
-   clearly label it as available balance;
-   never show stale or fabricated data as current;
-   use a loading state while the authoritative value is unavailable.

------------------------------------------------------------------------

# 14. Transfer Stepper

The approved transfer experience uses a step-based flow.

Conceptually:

``` text
1 Recipient → 2 Amount → 3 Review → 4 Success
```

The active step must be visually clear.

Completed/inactive steps must remain understandable without color alone.

The stepper should not become a substitute for page headings or
accessible labels.

------------------------------------------------------------------------

# 15. Cards and Surfaces

Use rounded cards where represented by the approved UI.

Characteristics:

-   moderate corner radius;
-   subtle elevation/shadow;
-   clean surface;
-   adequate internal padding.

Do not over-card the application. Excessive containers reduce the simple
fintech feel.

------------------------------------------------------------------------

# 16. Icons

Use one consistent icon library.

Icons should:

-   support comprehension;
-   have accessible labels when interactive;
-   not replace important text;
-   remain visually consistent in stroke/weight.

Decorative icons should be hidden from assistive technology when they
convey no additional meaning.

------------------------------------------------------------------------

# 17. Navigation

Authenticated navigation contains only:

-   Home
-   Activity
-   Logout

Do not add:

-   Cards
-   Investments
-   Settings
-   Profile
-   Analytics
-   Notifications
-   PIX

unless the product requirements are explicitly unfrozen and changed.

------------------------------------------------------------------------

# 18. States

Every data-driven component should account for:

``` text
Loading
Success
Empty
Error
```

For forms, additionally:

``` text
Pristine
Editing
Validation error
Submitting
Success
Submission error
```

The UI must never jump directly from "nothing" to an unexplained blank
area.

------------------------------------------------------------------------

# 19. Responsive Rules

### Mobile

-   single column;
-   comfortable touch targets;
-   no horizontal scroll;
-   readable financial values;
-   bottom navigation where represented;
-   form controls should fit the viewport.

### Desktop

-   use available width efficiently;
-   preserve comfortable content width;
-   avoid excessive full-screen stretching;
-   keep primary content visually centered/anchored according to the
    approved composition.

------------------------------------------------------------------------

# 20. Accessibility Rules

-   Visible labels for inputs.
-   Semantic headings.
-   Semantic buttons/links.
-   Keyboard navigation.
-   Visible focus.
-   Screen-reader labels.
-   Accessible validation messages.
-   Accessible loading and success announcements.
-   Sufficient contrast.
-   Color is never the only semantic signal.
-   Touch targets should be sufficiently large for mobile use.

------------------------------------------------------------------------

# 21. UX Writing

WalletX copy should be:

-   concise;
-   direct;
-   friendly;
-   reassuring;
-   non-technical.

Prefer:

> Transfer sent

over:

> Transaction execution completed successfully.

Prefer:

> We couldn't complete the transfer. Try again.

over:

> HTTP 500 --- Internal Server Error.

Never expose internal error codes, stack traces, or implementation
details to end users.

------------------------------------------------------------------------

# 22. Design System Implementation

Centralize:

-   colors;
-   typography;
-   spacing;
-   radii;
-   shadows;
-   breakpoints;
-   component variants;
-   financial formatting.

The implementation should make visual changes possible without editing
every screen.

------------------------------------------------------------------------

# 23. UI Freeze Rules

The supplied WalletX screens are the reference for MVP composition.

Engineering may improve:

-   responsiveness;
-   accessibility;
-   component consistency;
-   loading/error/empty states;
-   implementation quality.

Engineering must not introduce new product functionality under the guise
of UI improvement.

If a UI change changes what the user can do, it is a product requirement
change and requires product approval.

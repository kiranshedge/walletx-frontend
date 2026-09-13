# WalletX --- User Flows

**Document:** `docs/user-flows.md`\
**Status:** **FROZEN --- MVP v1.0**

------------------------------------------------------------------------

## 1. Flow Conventions

-   `[Screen]` = application screen
-   `(Action)` = user action
-   `{State}` = system/application state
-   `→` = navigation or transition
-   `↩` = recoverable return/retry

The flows below define the expected MVP behavior. They intentionally
avoid features outside the frozen product scope.

------------------------------------------------------------------------

# 2. Application Entry Flow

``` text
[Application Start]
       |
       v
{Check Session}
   /          \
Valid          Invalid/None
 |                 |
 v                 v
[Dashboard]      [Login]
```

### Requirements

-   The app must not render protected application content as usable
    while authentication status is unknown.
-   A session check may show a short loading/splash state.
-   Invalid/expired sessions lead to Login.

------------------------------------------------------------------------

# 3. Registration Flow

``` text
[Login]
   |
   | (Register)
   v
[Register]
   |
   | Enter full name
   | Enter email/phone
   | Enter password
   |
   | (Create account)
   v
{Validate Form}
   |
   +---- Invalid ----> [Register + Field Errors]
   |
   +---- Valid ------> {Submit Registration}
                           |
                    +------+------+
                    |             |
                 Failure        Success
                    |             |
                    v             v
             [Register Error]  [Authenticated
                                state or Login]
                                     |
                                     v
                                [Dashboard]
```

The final post-registration destination depends on the agreed backend
authentication contract. The frontend must implement one deterministic
behavior.

------------------------------------------------------------------------

# 4. Login Flow

``` text
[Login]
   |
   | Enter credentials
   |
   | (Log in)
   v
{Validate}
   |
   +---- Invalid ----> [Login + Field Errors]
   |
   +---- Valid ------> {Authenticate}
                           |
                    +------+------+
                    |             |
                 Failure        Success
                    |             |
                    v             v
              [Login Error]  {Session Created}
                                   |
                                   v
                              [Dashboard]
```

### Login failure

The user remains on Login and can correct credentials without losing
unrelated form state.

------------------------------------------------------------------------

# 5. Logout Flow

``` text
[Authenticated Screen]
        |
        | (Logout)
        v
{Clear/Invalidate Session}
        |
        v
[Login]
```

After logout:

-   protected navigation is unavailable;
-   protected routes redirect to Login;
-   authenticated client state is cleared;
-   browser refresh must not restore an invalid session.

------------------------------------------------------------------------

# 6. Dashboard Flow

``` text
                 +-------------------+
                 |                   |
                 v                   |
             [Dashboard]             |
              /   |    \             |
             /    |     \            |
            v     v      v           |
      [Add Money] [Transfer] [Activity]
            |        |          |
            |        |          |
            +--------+----------+
                     |
                     v
                [Dashboard]
```

Dashboard responsibilities:

-   show available balance;
-   show recent transactions;
-   expose Add Money;
-   expose Transfer;
-   expose Activity.

------------------------------------------------------------------------

# 7. Add Money Flow

``` text
[Dashboard]
    |
    | (Add Money)
    v
[Add Money — Amount]
    |
    | Select approved simulated deposit
    | Enter amount / continue
    v
{Validate}
   |
   +---- Invalid ----> [Add Money + Error]
   |
   +---- Valid ------> {Submit Deposit}
                           |
                    +------+------+
                    |             |
                 Failure        Success
                    |             |
                    v             v
            [Add Money Error]  [Deposit Success]
                                  |
                                  v
                             {Refresh Wallet}
                                  |
                                  v
                             [Dashboard]
```

The approved UI contains a small step-based Add Money experience. The
implementation may model these steps as local component state/routes as
long as the user experience and navigation remain equivalent.

------------------------------------------------------------------------

# 8. Transfer Flow

``` text
[Dashboard]
    |
    | (Transfer)
    v
[Transfer — Recipient]
    |
    | Select/enter recipient
    | (Continue)
    v
{Validate Recipient}
    |
    +---- Invalid/Not Found ----> [Recipient Error]
    |
    +---- Valid -----------------> [Transfer — Amount]
                                      |
                                      | Enter amount
                                      | (Continue)
                                      v
                                 {Validate Amount}
                                      |
                         +------------+------------+
                         |                         |
                      Invalid                    Valid
                         |                         |
                         v                         v
                  [Amount Error]          [Transfer Review]
                                                |
                                                | Verify:
                                                | - Recipient
                                                | - Amount
                                                | - Fee, if applicable
                                                | - Total
                                                |
                                                | (Confirm)
                                                v
                                         {Submit Transfer}
                                                |
                                     +----------+----------+
                                     |                     |
                                  Failure                Success
                                     |                     |
                                     v                     v
                              [Transfer Error]      [Transfer Success]
                                                           |
                                                           | (Done)
                                                           v
                                                      [Dashboard]
```

------------------------------------------------------------------------

# 9. Transfer Review Rules

The Review screen is a mandatory step.

It must:

-   show the exact recipient selected;
-   show the amount;
-   show fee if applicable;
-   show total;
-   provide a clear Confirm action.

The user must be able to return to the previous step before final
confirmation.

The client must not mutate the reviewed amount or recipient between
Review and submission.

------------------------------------------------------------------------

# 10. Transfer Success Flow

``` text
[Transfer Review]
       |
       | (Confirm)
       v
{Processing}
       |
       +---- Failure ----> [Transfer Error]
       |
       +---- Success ----> [Transfer Success]
                              |
                              | (Done)
                              v
                         [Dashboard]
```

Success information may include:

-   recipient;
-   amount;
-   date/time;
-   transaction ID.

These values should come from the authoritative transfer result.

------------------------------------------------------------------------

# 11. Activity Flow

``` text
[Dashboard]
    |
    | (Activity)
    v
[Transaction Activity]
    |
    +---- Loading ----> [Activity Loading]
    |
    +---- Data -------> [Transaction List]
    |
    +---- No Data ----> [Activity Empty]
    |
    +---- Failure ----> [Activity Error]
```

Transactions should communicate:

-   description/type;
-   date/time;
-   amount;
-   money direction.

Direction uses both sign/text and visual treatment.

------------------------------------------------------------------------

# 12. Global Error Recovery

For recoverable asynchronous failures:

``` text
[Request]
   |
   v
{Failure}
   |
   +---- Retry available ----> (Retry) ----> [Request]
   |
   +---- Correct input ------> (Edit) -----> [Form]
   |
   +---- Session invalid ----> [Login]
```

The user should not be trapped on an error screen.

------------------------------------------------------------------------

# 13. Global Loading Rules

``` text
[User Action]
     |
     v
{Loading}
     |
     +--> Disable duplicate action
     +--> Show progress feedback
     +--> Preserve relevant input
     |
     v
{Success or Failure}
```

No money movement action may be submitted repeatedly because of rapid
clicks/taps.

------------------------------------------------------------------------

# 14. Route/State Model

Suggested logical route structure:

``` text
/login
/register

/app
/app/home
/app/activity
/app/add-money
/app/transfer
/app/transfer/review
/app/transfer/success
```

The exact route naming is an implementation detail. The behavioral
contract is what matters.

Protected routes:

``` text
/app/*
```

require an authenticated session.

------------------------------------------------------------------------

# 15. End-to-End MVP Journeys

## Happy path: new user

``` text
Register → Create Account → Dashboard
```

## Happy path: returning user

``` text
Login → Dashboard
```

## Happy path: add money

``` text
Dashboard → Add Money → Deposit Success → Dashboard
```

## Happy path: transfer

``` text
Dashboard → Transfer Recipient → Transfer Amount
→ Review → Confirm → Transfer Success → Dashboard
```

## Happy path: activity

``` text
Dashboard → Activity
```

## Logout

``` text
Authenticated Screen → Logout → Login
```

------------------------------------------------------------------------

# 16. Journey Completion Criteria

Every journey is complete only when:

-   loading behavior is defined;
-   validation behavior is defined;
-   backend failure behavior is defined;
-   session expiry behavior is defined;
-   success state is explicit;
-   the user has a clear next action;
-   the flow works on desktop and mobile;
-   the flow does not require an out-of-scope feature.

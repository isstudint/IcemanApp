---
tags: [AZ-104, sspr, identity, entra-id]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Self-Service Password Reset (SSPR)

## The Problem This Solves

Help desks spend a lot of time resetting passwords for locked-out users, causing delays and hurting productivity. SSPR lets **users fix their own password problems** without calling anyone.

**Definition:** A feature that lets a user reset their own forgotten/expired password, or unlock their own account — without administrator involvement — via a web browser or Windows sign-in screen.

**Analogy:** A self-checkout lane at a grocery store — you don't need to wait for a cashier (the help desk) to handle a routine task you can safely do yourself.

**Important distinction:** if a user is **already signed in**, they can change their password anytime, regardless of licensing — that's not SSPR. SSPR specifically covers the case where they're **locked out** (forgot password, password expired, can't sign in at all).

---

## How SSPR Works — the 5 Steps

1. **Localization** — the portal detects the browser's language and renders the SSPR page accordingly
2. **Verification** — user enters their username + passes a CAPTCHA (confirms it's a human, not a bot)
3. **Authentication** — user proves their identity via a code or security questions
4. **Password reset** — user enters and confirms a new password
5. **Notification** — a confirmation message is sent to the user

**Entry points:** the user goes directly to the password-reset portal, or clicks "Can't access your account?" on a sign-in page.

---

## The 6 Authentication Methods

| Method | How it's registered | How it authenticates |
|---|---|---|
| **Mobile app notification** | Install Microsoft Authenticator, register via MFA setup page | Azure sends a push notification, user approves/denies |
| **Mobile app code** | Same Authenticator app | User types in the code shown in the app |
| **Email** | Provide an external (non-Azure/365) email address | Azure emails a code, user enters it |
| **Mobile phone** | Provide a phone number | SMS code, or automated call |
| **Office phone** | Provide a non-mobile number | Automated call, press # to confirm |
| **Security questions** | Choose questions (e.g. "what city was your mother born in?") | Answer the questions |

**Analogy:** Think of these like the different ways a bank might verify it's really you before letting you reset your online banking password — text code, phone call, security questions — same idea, just adapted to Entra ID.

> [!warning] Not available everywhere
> **Phone call options aren't supported in trial Microsoft Entra organizations.**

---

## Requiring a Minimum Number of Methods

**Definition:** As an admin, you enable **two or more** methods, and require users to register a **minimum number** (one or two) before they're considered "registered for SSPR." Users then choose which of the enabled methods they personally prefer.

**Example situation:** You enable mobile app code, email, office phone, and security questions, and set the minimum to **two**. A user can register with mobile app code + email if that's easiest for them — they don't need all four, just any two of the enabled set.

For security questions specifically, you can also set a **minimum number of questions** the user must set up and correctly answer.

> [!question]- When is a user actually considered "registered" for SSPR?
> When they've registered at least the **minimum number of methods you've required** — not just "at least one permitted method." (This is directly from the MS Learn knowledge check — a common wrong-answer trap.)

---

## Recommendations (worth memorizing — these read like exam facts)

- Enable **two or more** reset methods
- **Mobile app notification/code** should be the primary method — but also enable email or office phone for users without mobile devices
- **Mobile phone (SMS)** is **not recommended** — vulnerable to fraudulent SMS messages
- **Security questions** are the **least recommended** method — answers can be known by other people. Only use it **combined with** at least one other method, never alone

> [!warning] Admin accounts are special
> Accounts with an **administrator role** always get a **strong, two-method authentication policy**, regardless of how you've configured SSPR for regular users. The **security-question method isn't even available** for admin-role accounts — too weak for privileged accounts.

---

## Notifications

Two separate notification toggles an admin can enable:
- **Notify users on password resets** — alerts the user's primary + secondary email whenever their own password is reset (helps them notice if someone *else* triggered the reset — a security signal)
- **Notify all admins when other admins reset their password** — all admins get alerted whenever any admin resets their own password

---

## License Requirements

| Scenario | Requirement |
|---|---|
| User is **already signed in**, wants to change password | Works regardless of Entra ID edition |
| User is **locked out** (forgot/expired password) and needs SSPR | Requires **Entra ID P1 or P2** (or Microsoft 365 Apps for business/Microsoft 365) |
| **Hybrid** — password change needs to write back to on-prem AD | Also requires **P1 or P2** — this is "SSPR with writeback" |

> [!tip] Pattern you've seen before
> P1/P2 keeps gating "automatic" or "self-service" features — same pattern as Conditional Access (P1) and Dynamic Groups (P1). SSPR-with-writeback fits that same pattern. See [[Entra ID Licensing Tiers]] for the full feature-to-tier map.

---

## SSPR Deployment Options (Hybrid Writeback)

In a hybrid environment, a password reset in the cloud needs to be **written back** to the on-prem AD so both systems stay in sync. Two tools can do this:

- **Microsoft Entra Connect** — the traditional sync tool
- **Cloud Sync** — newer, doesn't rely on a single instance (higher availability), supports disconnected domains (e.g. after a company merger where domains aren't connected to each other)

**Example situation:** After a merger, existing users write back through Microsoft Entra Connect on the original domain, while new users from the acquired company (a separate, disconnected domain) use Cloud Sync instead — you can run **both side-by-side**.

---

## Quick Quiz

> [!question]- Q1: A user is signed in and wants to change their password. Do they need any specific license?
> No — any signed-in user can change their password regardless of Entra ID edition. Licensing only matters for the locked-out/forgot-password SSPR scenario.

> [!question]- Q2: Why is the security-question method the least recommended, and how should it be used if enabled at all?
> Answers can be known/guessed by other people (weak security). It should only be used in combination with at least one other method, never as the sole method.

> [!question]- Q3: Can an administrator-role account use security questions to reset their password?
> No — the security-question method isn't available for accounts with an admin role, which always get a strong two-method policy regardless of general SSPR configuration.

> [!question]- Q4: What's the difference between the two notification settings SSPR offers?
> "Notify users on password resets" alerts the user themself. "Notify all admins when other admins reset their password" alerts the whole admin team when any admin resets their own password.

> [!question]- Q5: A company just went through a merger with a disconnected domain. What SSPR deployment approach handles this?
> Run Microsoft Entra Connect for the existing domain and Cloud Sync for the new/disconnected domain side-by-side.

---

## Related
- [[AZ-104 - Azure RBAC]]
- [[AZ-104 - Create Configure Manage Identities]]
- [[AZ-104 - Identity AD DS to Entra ID]]

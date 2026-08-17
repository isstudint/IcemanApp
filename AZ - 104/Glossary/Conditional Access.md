---
tags: [AZ-104, identity, entra-id, conditional-access]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Conditional Access

**Definition:** A set of policies in Microsoft Entra ID that enforce access decisions based on **conditions** — who is signing in, from where, on what device, accessing what app, and how risky the sign-in looks.

**Analogy:** A bouncer at a club who doesn't just check your ID — they also check what you're wearing, whether you're on the guest list, and whether you look sober. Different rules for different situations.

## How It Works (simplified)

```
IF (user + app + conditions match) → THEN (grant / block / require MFA)
```

**Common conditions (signals):**
- User or group membership
- IP location (trusted vs untrusted network)
- Device state (compliant, Entra Joined, etc.)
- Application being accessed
- Sign-in risk level (from Identity Protection)

**Common controls (decisions):**
- **Grant access** — with or without MFA
- **Block access** — hard deny
- **Require compliant device** — must pass Intune compliance
- **Session controls** — limit what the user can do (e.g., no downloads)

> [!warning] License requirement
> Conditional Access requires **Microsoft Entra ID P1** or higher. See [[Entra ID Licensing Tiers]].

---

## Quick Quiz

> [!question]- Q1: An org on Entra ID Free wants to require MFA only for users outside the corporate network. Can they use Conditional Access?
> **No** — Conditional Access requires P1. On Free, they can only use Security Defaults, which enforces MFA for everyone without conditions.

> [!example]- Scenario: HR wants contractors to only access the HR portal from managed devices. What feature?
> **Conditional Access policy** targeting the HR app, requiring a compliant device, scoped to the contractor group.

---

## Related
- [[Entra ID Licensing Tiers]]
- [[AZ-104 - SSPR]]
- [[AZ-104 - Azure RBAC]]
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[Microsoft Entra ID]]

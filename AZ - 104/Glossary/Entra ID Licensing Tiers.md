---
tags: [AZ-104, identity, entra-id, licensing]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Entra ID Licensing Tiers (Free / P1 / P2)

## Why This Note Exists

The P1/P2 licensing pattern comes up in **at least 4 different topics** across the Identity & Governance domain. Instead of remembering it separately in each note, this is the single source of truth for "which feature requires which license."

**Pattern to memorize:** If a feature is **rule-based, automated, or self-service for locked-out users**, it almost certainly needs **P1 or higher**.

---

## ⚡ Feature-to-Tier Map

| Feature | Free | P1 | P2 |
|---|---|---|---|
| **Basic user & group management** | ✅ | ✅ | ✅ |
| **MFA** (Multi-Factor Authentication) | ✅ (Security Defaults) | ✅ (Conditional Access-based) | ✅ |
| **SSO** (Single Sign-On) | ✅ | ✅ | ✅ |
| **Self-Service Password Reset (signed-in user)** | ✅ | ✅ | ✅ |
| **SSPR for locked-out users** | ❌ | ✅ | ✅ |
| **SSPR with on-prem writeback** | ❌ | ✅ | ✅ |
| **Conditional Access** | ❌ | ✅ | ✅ |
| **Dynamic Group Membership** | ❌ | ✅ | ✅ |
| **Group-Based Licensing** | ❌ | ✅ | ✅ |
| **Self-Service Group Management** | ❌ | ✅ | ✅ |
| **Identity Protection (risk detection)** | ❌ | ✅ (basic) | ✅ (full) |
| **PIM (Privileged Identity Management)** | ❌ | ❌ | ✅ |
| **Access Reviews** | ❌ | ❌ | ✅ |
| **Entitlement Management** | ❌ | ❌ | ✅ |

---

## The Memory Trick

```
Free = basics (users, groups, SSO, MFA via Security Defaults)
P1   = automation + rules (Conditional Access, Dynamic Groups, SSPR locked-out, Group Licensing)
P2   = privileged access + risk (PIM, Access Reviews, full Identity Protection)
```

> [!tip] One sentence to remember
> **P1 automates identity management. P2 governs privileged access.**

---

## Where This Shows Up in Your Other Notes

| Note | Feature mentioned | License |
|---|---|---|
| [[AZ-104 - SSPR]] | SSPR for locked-out users | P1 |
| [[AZ-104 - SSPR]] | SSPR with on-prem writeback | P1 |
| [[AZ-104 - Identity AD DS to Entra ID]] | Conditional Access | P1 |
| [[AZ-104 - Identity AD DS to Entra ID]] | PIM | P2 |
| [[AZ-104 - Identity AD DS to Entra ID]] | Identity Protection | P1 |
| [[AZ-104 - Lab 01 Entra ID Identities]] | Dynamic Group Membership | P1 |
| [[AZ-104 - Create Configure Manage Identities]] | Dynamic Groups | P1 |
| [[AZ-104 - Create Configure Manage Identities]] | Group-Based Licensing | P1 |

---

## Quick Quiz

> [!question]- Q1: An org wants automatic group membership based on user attributes. What license?
> **P1** — Dynamic Group Membership is a P1 feature.

> [!question]- Q2: What's the minimum license for Conditional Access policies?
> **P1.**

> [!question]- Q3: An org wants to give admins just-in-time elevated access instead of standing privileges. What license and feature?
> **P2** — Privileged Identity Management (PIM).

> [!question]- Q4: A user is signed in and wants to change their password. Do they need P1?
> **No** — password change for signed-in users works on the Free tier. P1 is only needed for the locked-out/forgot-password SSPR scenario.

> [!example]- Scenario: A company uses Entra ID Free. They want Conditional Access policies to require MFA when users sign in from outside the corporate network. Can they do this?
> **No** — Conditional Access requires P1. On Free, they can only use Security Defaults (which enforces MFA for all users, all the time — no conditions).

---

## Related
- [[AZ-104 - SSPR]]
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[AZ-104 - Create Configure Manage Identities]]
- [[AZ-104 - Lab 01 Entra ID Identities]]
- [[Conditional Access]]
- [[PIM]]
- [[Microsoft Entra ID]]

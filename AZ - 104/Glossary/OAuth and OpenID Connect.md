---
tags: [AZ-104, identity, protocols]
last-reviewed: 2026-08-08
status: stub
domain: identity-governance
---

# OAuth and OpenID Connect

Two related but different protocols — don't confuse them:

| | OpenID Connect | OAuth 2.0 |
|---|---|---|
| **Purpose** | **Authentication** — proves *who you are* | **Authorization** — proves *what you can access* |
| **Question it answers** | "Is this really John?" | "Can John read this file?" |
| **Analogy** | Showing your ID at the door | Showing your ticket for the VIP section |

**How they work together:** OpenID Connect sits *on top of* OAuth 2.0 — first it authenticates you (OpenID Connect), then it authorizes what you can do (OAuth).

> [!warning] Not interchangeable
> The exam expects you to know the distinction: authentication ≠ authorization.

---

## Related
- [[SAML]]
- [[SSO]]
- [[AZ-104 - Identity AD DS to Entra ID]]

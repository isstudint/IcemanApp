---
tags: [AZ-104, identity, entra-id, sync]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Entra Connect (Identity Sync)

**Definition:** Tools that synchronize user identities from on-premises Active Directory (AD DS) into Microsoft Entra ID, enabling hybrid identity.

## Two Sync Tools

| | Microsoft Entra Cloud Sync | Microsoft Entra Connect Sync |
|---|---|---|
| **Architecture** | Lightweight cloud-managed agents | Full server-side installation |
| **Best for** | Most orgs, multiple disconnected forests | Complex scenarios (device sync, large groups 50K+) |
| **Recommended?** | ✅ Yes (newer, recommended) | Still supported for edge cases |

Both enable **SSO** — users sign in once with their on-prem credentials and access cloud apps too.

See [[AZ-104 - Identity AD DS to Entra ID]] for the full context.

---

## Related
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[SSO]]
- [[Microsoft Entra ID]]
- [[AD DS]]

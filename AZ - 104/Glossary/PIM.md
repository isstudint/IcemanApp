---
tags: [AZ-104, identity, entra-id, governance]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# PIM (Privileged Identity Management)

**Definition:** A service in Microsoft Entra ID that provides **just-in-time** (JIT) privileged access instead of standing (always-on) admin rights. An admin activates their elevated role only when needed, for a limited time.

**Analogy:** Instead of every manager carrying the master key 24/7 (standing access), PIM requires them to check out the key from a lockbox, use it for a specific task, and return it within a set time window.

**Why it matters:** Standing admin access = constant attack surface. JIT access = the attack window shrinks to only the minutes the role is active.

> [!warning] License requirement
> PIM requires **Microsoft Entra ID P2**. See [[Entra ID Licensing Tiers]].

---

## Related
- [[Entra ID Licensing Tiers]]
- [[AZ-104 - Azure RBAC]]
- [[AZ-104 - Identity AD DS to Entra ID]]

---
tags: [AZ-104, identity, rbac]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Service Principal

**Definition:** An identity used by an **application or automated service** (not a human) to authenticate and access Azure resources with specific permissions.

**Analogy:** An employee ID badge for a robot — it identifies the app/service so Azure knows who's requesting access and what they're allowed to do.

## Service Principal vs Managed Identity

| | Service Principal | [[Managed Identity]] |
|---|---|---|
| **Who manages credentials?** | **You** (client secret or certificate) | **Azure** (automatic, no credentials to manage) |
| **When to use** | External apps, multi-tenant apps, non-Azure services | Azure resources accessing other Azure resources |
| **Credential rotation** | Your responsibility | Azure handles it |

> [!tip] Think of Managed Identity as a special *type* of Service Principal — one where Azure fully manages the credential lifecycle.

---

## Related
- [[AZ-104 - Azure RBAC]]
- [[Managed Identity]]
- [[Microsoft Entra ID]]

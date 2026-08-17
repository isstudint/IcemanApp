---
tags: [AZ-104, identity, protocols]
last-reviewed: 2026-08-08
status: stub
domain: identity-governance
---

# SAML (Security Assertion Markup Language)

**Definition:** A modern web-based authentication protocol that replaces [[Kerberos]] for cloud/web applications. Used by Entra ID to enable [[SSO]] to SaaS apps.

**In plain English:** SAML is how Entra ID *proves to a web app* that you are who you say you are — it passes a signed "assertion" (a digital certificate saying "yes, this is John from Contoso") to the app.

> [!tip] Memory hook
> **Old world** = Kerberos (on-prem, port 88). **New world** = SAML (cloud, web-based).

---

## Related
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[OAuth and OpenID Connect]]
- [[SSO]]

---
tags: [AZ-104, identity, protocols]
last-reviewed: 2026-08-08
status: stub
domain: identity-governance
---

# Kerberos

**Definition:** A network authentication protocol used by on-premises Active Directory (AD DS). Port **88** (TCP + UDP).

**In plain English:** The old-world login protocol — when you sign into a domain-joined Windows PC at the office, Kerberos is what validates your credentials with the domain controller behind the scenes.

**Why it matters for AZ-104:** Kerberos is the on-prem protocol that [[SAML]] and [[OAuth and OpenID Connect]] replaced in the cloud. You don't need deep Kerberos knowledge for the exam — just know it's the old way.

> [!tip] Memory hook
> Kerberos = on-prem, port 88. SAML = cloud, web-based. Don't mix them up.

---

## Related
- [[AD DS]]
- [[SAML]]
- [[AZ-104 - Identity AD DS to Entra ID]]

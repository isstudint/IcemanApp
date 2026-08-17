---
tags: [AZ-104, identity, active-directory]
last-reviewed: 2026-08-08
status: stub
domain: identity-governance
---

# AD DS (Active Directory Domain Services)

**Definition:** The traditional on-premises directory service built by Microsoft for managing users, computers, and policies on a Windows domain network.

**Key characteristics:**
- **Hierarchical structure** — domains, Organizational Units (OUs), Group Policy Objects (GPOs)
- **Protocols:** [[Kerberos]] (port 88) for authentication, [[LDAP]] (port 389) for directory lookups
- **Devices:** Windows-only (domain join)
- **Location:** Runs on physical servers inside your organization's own data center

**Analogy:** A local phone book + bouncer system that only works inside one office building — it knows everyone who works there and controls who can access which rooms, but it doesn't work outside the building walls.

> [!tip] AD DS vs Entra ID
> AD DS = the old on-prem system. [[Microsoft Entra ID]] = the cloud replacement. See [[AZ-104 - Identity AD DS to Entra ID]] for the full comparison.

---

## Related
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[Microsoft Entra ID]]
- [[Entra Connect]]

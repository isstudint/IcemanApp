---
tags: [AZ-104, identity, entra-id, active-directory]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---
## Exam Weight Estimate (AZ-104)
> [!info] Estimated relevance
> Identities & Governance is **20–25%** of the whole exam. Within that, user/group management and RBAC are very likely to be tested directly (~10–15% combined), Conditional Access and licensing tiers are likely tested but lighter (~5%), while Entra Connect sync mechanics and AD DS-vs-Entra ID architecture are mostly background context worth ~1–2% at most. Focus your practice time on RBAC and user/group admin tasks over deep sync internals.
# Identity: AD DS → Microsoft Entra ID

## Quick Glossary (read this first)
- **Active Directory** — is the traditional, on-premises system created by Microsoft to **manage**, **organize**, and **secure** an organization's internal local network.
- **On-Premises ("on-prem")** — servers physically inside your company's own building, not in the cloud
- **Domain Controller** — an on-prem server that checks logins and stores user accounts (the "bouncer") . a central server that acts as the gatekeeper for a computer network
- **[[AD DS]]** (Active Directory Domain Services) — the traditional on-prem system for managing users/computers/policies
- **[[Microsoft Entra ID]]** — cloud version of Active Directory (formerly "Azure AD")
- **[[SaaS]]** — apps used over the internet instead of installed locally (Office 365, Salesforce, Workday, ServiceNow, Concur)
- **[[Entra Connect]]** — tool installed on-prem that syncs local AD DS users up into Entra ID
- **[[SSO]]** (Single Sign-On) — log in once, access every connected app
- **RBAC** — Role-Based Access Control: rules for who's allowed to do what
- **[[Kerberos]]** — old on-prem login protocol, port 88 (TCP + UDP)
- **[[LDAP]]** — old on-prem protocol for looking up directory info, port 389
- **[[SAML]]** (Security Assertion Markup Language) — modern cloud login protocol, replaces Kerberos for web apps
- **[[OpenID Connect]]** — modern protocol for *authentication* (proves who you are)
- **[[OAuth]]** — modern protocol for *authorization* (what you're allowed to access) — not the same thing as OpenID Connect
- **[[Application Proxy]]** — lets an old on-prem app plug into Entra ID's security without moving the app to the cloud
- **[[AD FS]]** (Active Directory Federation Services) — old tool to link separate networks; Entra ID does this natively, no install needed

> [!tip] Memory hook
> Old world = Kerberos, LDAP, hierarchical tree, GPOs, on your own hardware.
> New world = SAML, OAuth/OpenID, flat structure, no GPOs, Microsoft-managed.

---

## What AD DS Actually Is

- Structure is a hierarchical tree — multiple domain controllers, Organizational Units (OUs), and Group Policies (GPOs) organizing users/computers
- Built by Microsoft originally for Windows domain networks
- Job of the directory:
  - Stores info about devices in the org
  - Stores info about users
  - Verifies credentials (login/auth)
  - Handles RBAC — who is allowed to do what

**The traditional setup:** designed for local server environments. Manages and secures access only *inside* the internal network — think of a box, and AD DS lives and works inside that box.

---

## Where On-Prem AD Breaks Down

> [!fail]- 1. Remote Work
> AD DS is optimized for LAN (local network) access. People now connect from home, cafes, anywhere — not just the office. Fundamental mismatch with how AD DS was built to work.

> [!fail]- 2. VPN Isn't a Clean Fix
> Orgs use VPNs to reach on-prem apps remotely, but VPN setup is complicated and introduces real security vulnerabilities.

> [!fail]- 3. Scalability Is Expensive
> Growing the business means more capacity. On-prem scaling means more virtual machines, more complexity, harder maintenance, inefficient use of resources.

> [!fail]- 4. Maintenance Overload
> Constant need to manage hardware, software updates, security patches — eats IT time that should go to strategic work.

> [!fail]- 5. Security Requires Constant Effort
> On-prem AD DS *can* be secure, but only with ongoing vigilance and dedicated experts. Meanwhile orgs are adopting SaaS tools (Office 365, Workday, Concur, ServiceNow, Salesforce) that need modern security capabilities — anomaly detection, automated threat response — AD DS wasn't built for.

> [!fail]- 6. Disaster Recovery Is Harder
> Recovering on-prem infrastructure after a disaster takes more time, resources, and people, with real risk of permanent data loss. Cloud-based recovery is comparatively smoother.

> [!fail]- 7. Integration Headaches
> Connecting on-prem AD DS to SaaS apps requires extra sync tools and management overhead. Complexity grows with every SaaS tool added.

**Bottom line:** on-prem AD DS has been the backbone of enterprise IT for decades — it's not *bad*, it's aging out. Remote work, cloud computing, and evolving security threats don't fit its original design. The natural next step is a modernized identity solution — Microsoft's version is **Entra ID**.

---

## The Fix: Entra Connect Sync

**Problem:** Joe, Steve, and Mary already exist as users on the on-prem domain controller. Nobody wants to manually recreate hundreds of users in the cloud.

**Solution:**
1. Install **Entra Connect** on-prem — ideally on a **separate member server**, not directly on the domain controller (technically possible, but not best practice)
2. Entra Connect syncs those identities up to **Microsoft Entra ID**
3. Users can now log into cloud apps (Office 365, Workday, etc.) via **SSO**, secured by SAML / OpenID Connect / OAuth

```
[On-Prem: Domain Controller] --(Entra Connect)--> [Cloud: Entra ID] --(SSO)--> [SaaS apps]
```

Legacy on-prem apps that can't move to the cloud can still connect through an **Application Proxy** to get Entra ID's modern security benefits.

---

## AD DS vs. Entra ID

|                   | AD DS (on-prem)                  | Entra ID (cloud)             |
| ----------------- | -------------------------------- | ---------------------------- |
| Structure         | Hierarchical tree (OUs)          | Flat                         |
| Group Policy      | Yes (GPOs)                       | Not supported                |
| Login protocol    | Kerberos (port 88)               | SAML / OpenID Connect        |
| Directory lookup  | LDAP (port 389)                  | REST APIs                    |
| Federation        | Needs AD FS installed separately | Built in, nothing to install |
| Device join       | Domain join to AD DS             | Azure AD Join                |
| Devices supported | Windows only                     | Windows, macOS, iOS, Android |

---

## Security Features & Licensing

| Feature | What it does | License needed |
|---|---|---|
| MFA (Multi-Factor Auth) | Second login step (code, app prompt) | Free tier |
| Conditional Access | Rules for when/how someone can log in | **P1** |
| Identity Protection | Flags risky sign-ins, gives reports | **P1** |
| PIM (Privileged Identity Management) | Just-in-time admin access instead of standing admin rights | **P2** |
| Self-Service password reset | Users fix their own account issues, lowers IT cost | Built in |

> [!bug] Note on the source video
> It lumps "PIM and PAM" together as one P2 feature. Microsoft's actual product is just **PIM** — "PAM" isn't a separate licensed Entra feature. Don't memorize "PAM" as an exam term.

---

## Active Recall

> [!question]- Where should you install Entra Connect, and why not the alternative?
> On a separate member server. You *can* install it on a domain controller, but it's not best practice.

> [!question]- What's the real difference between OpenID Connect and OAuth?
> OpenID Connect = authentication (who you are). OAuth = authorization (what you can access). Not interchangeable.

> [!question]- Which license tier unlocks Conditional Access? Which unlocks PIM?
> Conditional Access → P1. PIM → P2.

> [!question]- Why can't you use Group Policy in Entra ID?
> Entra ID has a flat structure — no Organizational Units, which GPOs depend on in AD DS.

> [!question]- An on-prem legacy app can't move to the cloud. How does it still get Entra ID's security benefits?
> Connect it through an Application Proxy.

---

## Related
- [[Microsoft Entra ID]]
- [[Entra Connect]]
- [[Conditional Access]]
- [[PIM]]

**Source:** AZ-104 course video transcripts (Entra ID overview, Entra ID benefits, AD DS vs. Entra ID) + personal notes

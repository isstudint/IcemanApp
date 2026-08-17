---
tags: [AZ-104, identity, entra-id, users-groups]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Create, Configure, and Manage Identities (MS Learn Module)

## 1. User Types in Microsoft Entra ID

Entra ID defines users **three ways**, based on where they actually come from:

### Cloud Identities
**Definition:** Users that exist *only* in Entra ID — never touched an on-prem system.

**Analogy:** A resident who was born and has always lived in the cloud "city" — no immigration paperwork from anywhere else.

**Example situation:** An admin account you create directly in the Entra admin center for a new hire at a cloud-only startup with no on-prem servers at all.

---

### Directory-Synchronized Identities
**Definition:** Users that exist in an on-prem Active Directory, copied into Entra ID via a sync tool.
- **Microsoft Entra Cloud Sync** — the *recommended* tool for most orgs; lightweight, cloud-managed agent, supports multiple disconnected forests
- **Microsoft Entra Connect Sync** — the older tool, still used for complex scenarios (device sync, groups with 50,000+ members)

**Analogy:** A resident who lives in one city (on-prem AD) but has a synced ID card recognized in a second city (Entra ID) — same person, same source of truth, just mirrored.

**Example situation:** A company with an existing on-prem AD server needs those 500 existing employee accounts to also work for logging into Office 365 — Cloud Sync copies them over and keeps them in sync going forward.

---

### Guest Users
**Definition:** Users that exist *outside* your organization — invited in, not created.

**Analogy:** A visitor issued a temporary visitor badge — recognized on your property, but their "home country" (their own org) is somewhere else.

**Example situation:** A contractor from another company needs access to one SharePoint site for 3 months. You invite them as a guest instead of creating a full internal account — when the contract ends, you revoke the invite and all their access goes with it.

> [!question]- Quick check: which user type would you removed from the *primary* directory to delete, vs simply revoke an invite to delete?
> Cloud identities are deleted by removing them from the primary directory. Guest users are removed by revoking the invite/account directly — they were never "created" the same way.

---

## 2. Managing Users — Practical Mechanics

- **View users**: Entra admin center → Identity → Users → All Users (shows a **User Type** column: Member vs Guest)
- **You can only work with one directory (tenant) at a time** — use the Directory + Subscription panel or "Switch directory" button to move between tenants
- **Deleting a user**: goes into a **suspended state for 30 days**, fully recoverable during that window (all properties restored). After 30 days, permanent deletion starts automatically and **cannot be undone**.

> [!warning] Exam-relevant detail
> "You can't restore a permanently deleted user" — this is a hard, memorized fact. If a scenario says more than 30 days have passed, restoration is not an option; the answer will involve recreating the account instead.

**Required permissions to restore/permanently delete a user** — need ONE of:
- Global Administrator
- Partner Tier-1 Support
- Partner Tier-2 Support
- User Administrator

---

## 3. Groups — Deeper Dive (beyond Lab 01)

### Two Group Types (recap + more detail)
- **Security groups** — most common, manage access to shared resources. Members can include **users, devices, AND service principals** (not just users). Requires an Entra administrator to create.
- **Microsoft 365 groups** — collaboration-focused (shared mailbox, calendar, files, SharePoint site). Can include people **outside your org**. Available to both users and admins to create (not just admins).

> [!tip] Analogy
> Security group = a keycard system controlling who can walk into which rooms. Microsoft 365 group = a shared team workspace with a mailbox, calendar, and file cabinet everyone on the team can use together.

---

### Three Membership Types (this is new detail beyond Lab 01)

| Type | Definition | Analogy |
|---|---|---|
| **Assigned** | Members added/removed manually | Hand-writing names on a guest list |
| **Dynamic User** | Users auto-added/removed based on rules evaluating attributes (department, job title, location) | A guest list that auto-updates itself whenever someone's ID badge changes |
| **Dynamic Device** | Devices auto-added/removed based on device attributes. **Security groups only** — M365 groups support dynamic *users* but not dynamic *devices* | Same auto-updating list, but for equipment badges instead of people |

**Example situation:** HR changes someone's `Department` attribute from "Sales" to "Marketing" in their profile. If a Dynamic User group rule is `department -eq "Marketing"`, **all dynamic membership rules in the tenant get reevaluated**, and that user is automatically added to the Marketing group and removed from Sales — no admin action needed.

> [!warning] License requirement
> Dynamic membership (user or device) requires a **Microsoft Entra ID P1 license** (or Intune for Education, for device-based rules in that specific context). This is the same P1 requirement you already have noted for Conditional Access — P1 keeps showing up as the gate for "automatic/rule-based" features.

---

## 4. Device Registration — Three States (new content, not yet in your notes)

This solves a real tension: **let users be productive on any device, while still protecting company data.**

| State | Definition | Device Ownership | Key Use Case |
|---|---|---|---|
| **Entra Registered** | Signed in with a *local/personal* account, but the device also gets an Entra ID account attached | User (personal device) | BYOD — bring your own device |
| **Entra Joined** | Device signs in *directly* with an organizational Entra ID account | Organization | Cloud-first orgs, no on-prem AD needed |
| **Hybrid Entra Joined** | Joined to *both* on-prem AD and Entra ID | Organization | Orgs with existing on-prem AD infrastructure who still want cloud benefits |

**Analogy:**
- **Registered** = wearing your own personal visitor badge, but it's been added to the building's system so you can access a couple of rooms
- **Joined** = you're a full employee, badge issued directly by the company, works everywhere the company controls
- **Hybrid Joined** = you have both your old badge from the original office (on-prem AD) *and* the new company-wide badge (Entra ID) — works in both worlds

**Example situations:**
- **Registered**: An employee wants to check work email on their personal Android phone. Conditional Access requires the device to be compliant (not rooted) before granting access.
- **Joined**: A cloud-only startup with zero on-prem servers issues company laptops that sign in directly with Entra ID — full cloud management via Intune.
- **Hybrid Joined**: A company with 15 years of on-prem AD infrastructure (Group Policy, on-prem file servers) wants their company laptops to *also* get modern Conditional Access and self-service password reset from Entra ID — without ripping out the old AD system.

> [!question]- Which device state is right for an org that can't use on-prem domain join (e.g. tablets and phones) but still needs org control?
> Entra Joined — it doesn't require on-prem AD infrastructure at all, unlike Hybrid Joined.

**Device writeback** (writing Entra-joined device objects back to on-prem AD) is **no longer supported** — it's been replaced by **Cloud Kerberos Trust**, which enables on-prem SSO and Windows Hello for Business in hybrid environments instead.

---

## 5. Manage Licenses — Group-Based Licensing

**The problem this solves:** Without group-based licensing, assigning/removing licenses per-user at scale requires complex PowerShell scripting every time someone joins, leaves, or changes departments.

**Definition:** Assign one or more product licenses to a **group** instead of individual users. Entra ID automatically:
- Assigns the license to any new member who joins
- Removes the license when a member leaves
- Reevaluates automatically (usually within minutes of a membership change)

**Analogy:** Instead of handing out individual gym membership cards one at a time and manually canceling them when someone quits, you attach the membership to a company "team badge" — anyone holding that badge automatically has gym access, and it's revoked the moment they hand the badge back.

**Example situation:** An organization has a "Marketing" group. Assign the Office 365 license to that group once. Every new hire added to Marketing automatically gets Office 365 — no PowerShell script needed. When someone transfers out of Marketing, the license is automatically removed.

### Requirements & Rules
- **License required to use this feature at all**: Entra ID Premium **P1 or greater**, OR Office 365 Enterprise **E3 or greater**
- **You need enough total licenses to cover every unique member** across all licensed groups — e.g., 1,000 unique members across licensed groups requires at least 1,000 licenses, even though you don't assign them one-by-one
- Only available through the **Microsoft 365 admin center** (not the Entra admin center directly)
- A user can be in multiple groups with different license policies, plus have directly-assigned licenses — the **combination** of all sources applies. If the same license comes from multiple sources, it's only consumed **once**
- **Usage location** matters — some services aren't available everywhere. If a user has no usage location set, they inherit the **directory's** location. Best practice: **always set usage location at user creation** to avoid incorrect license assignment.
- License assignment can **fail** silently for some users (e.g., not enough available licenses, or conflicting services) — admins can see which users failed and take corrective action

> [!question]- Why would an admin deliberately disable a specific service plan within an assigned product license?
> The org isn't ready to roll out that specific service yet — e.g., assigning Microsoft 365 to a department but temporarily disabling Viva Engage until they're ready for it.

---

## 6. Custom Security Attributes

**Definition:** Business-specific key-value pairs you define and attach to Entra objects (users, enterprise apps/service principals) — for storing extra info, categorizing objects, or enforcing fine-grained access control.

**Analogy:** Sticky notes you can attach to any employee or app record with custom labels your company invented — not something Microsoft predefined, but something *you* decide matters (like "Hourly Salary" or "Project Code").

**Example situations:**
- Add an "Hourly Salary" attribute to all employee profiles — but restrict visibility so only administrators can see that specific attribute (fine-grained, not all-or-nothing access)
- Categorize hundreds of enterprise applications with a custom tag so you can filter/audit them easily
- Grant users access to specific Azure Storage blobs belonging to a particular project, based on a custom attribute value matching that project

### Key facts
- Available **tenant-wide**
- Support data types: **Boolean, integer, string**
- Support single value or multiple values
- Support free-form values or a predefined list of allowed values
- Can be assigned even to directory-synced users from on-prem AD
- **NOT supported** in: Microsoft Entra Domain Services, SAML token claims, or JSON Web Token (JWT) claims — i.e., you can't currently push these custom attributes into an actual authentication token

> [!warning] Exam trap
> Don't confuse custom security attributes with Conditional Access or RBAC — they're for **storing/categorizing/filtering** data and enabling *fine-grained* access scenarios, not the access control mechanism itself. They can *support* access control decisions, but the actual enforcement typically happens through other tools referencing these attributes.

---

## Quick Quiz — Full Module

> [!question]- Q1: What's the difference between a Cloud Identity and a Directory-Synchronized Identity?
> Cloud Identity exists only in Entra ID. Directory-Synchronized Identity originates in on-prem AD and is copied into Entra ID via Cloud Sync or Connect Sync.

> [!question]- Q2: A user was deleted 45 days ago. Can you restore them?
> No — deleted accounts are only recoverable for 30 days. After that, permanent deletion starts automatically and cannot be undone.

> [!question]- Q3: Can a Microsoft 365 group have dynamic device membership?
> No — dynamic device membership is supported for security groups only. M365 groups support dynamic users but not dynamic devices.

> [!question]- Q4: What license is required for dynamic group membership?
> Microsoft Entra ID P1 (or greater).

> [!question]- Q5: A cloud-only startup with no on-prem AD wants company-owned laptops signing in directly with organizational Entra accounts. Which device state fits?
> Entra Joined.

> [!question]- Q6: A company with 15 years of on-prem AD wants their domain-joined laptops to also get Conditional Access and SSPR from Entra ID. Which device state?
> Hybrid Entra Joined.

> [!question]- Q7: What replaced device writeback for hybrid on-prem SSO scenarios?
> Cloud Kerberos Trust.

> [!question]- Q8: An org has 1,000 unique users spread across several licensed groups. How many licenses do they need minimum?
> At least 1,000 — you need enough licenses to cover every unique member across all licensed groups, even though you're not assigning them one-by-one.

> [!question]- Q9: A user is a member of two groups with different license policies, and also has a directly-assigned license. What license state do they end up with?
> The combination of all sources — if the same license appears in multiple sources, it's only consumed once.

> [!question]- Q10: Can custom security attributes be included in a SAML token or JWT claim?
> No — they're explicitly not supported in Microsoft Entra Domain Services, SAML token claims, or JWT claims.

---

## Related
- [[AZ-104 - Lab 01 Entra ID Identities]]
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[AZ-104 - Checklist]]

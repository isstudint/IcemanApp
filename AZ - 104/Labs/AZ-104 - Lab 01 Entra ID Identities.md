---
tags: [AZ-104, identity, entra-id, lab-01]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Lab 01: Manage Microsoft Entra ID Identities

## What This Lab Actually Covers

The two foundational building blocks of identity in Entra ID:
1. **Users** — how individuals get an identity (native or guest)
2. **Groups** — how you organize identities so you're not managing access one person at a time

Everything else in the identities domain (RBAC, Conditional Access, licensing) gets *applied to* a user or group — so this lab is the prerequisite layer underneath all of it.

---

## How This Connects to Entra ID

Entra ID is the cloud identity service that stores and manages these objects. In this lab you weren't learning a separate tool — you were directly operating on Entra ID's core data:

- **Tenant** = your specific instance of Entra ID (the container everything lives in)
- **Users** = identity records Entra ID authenticates against
- **Groups** = collections Entra ID uses to apply access/policy at scale instead of per-person

>[!tip] An instance refers to a single, running copy of software, a virtual machine, or a database server allocated to a specific user.

> [!tip] Mental model
> Entra ID = the database + auth engine. Users/Groups = the actual data you put into it. RBAC/Conditional Access (later labs) = the rules you attach to that data.

---

## Core Concepts to Lock In

### 1. Native User vs. Guest (External) User

| | Native user | Guest/external user |
|---|---|---|
| Created by | You, directly in your tenant | Invited via email |
| Authenticates with | Credentials in your tenant | Their **own** org's credentials |
| Use case | Employees, internal staff | Contractors, partners, vendors (B2B) |
| Example from lab | `az104-user1` | Your invited email |

### 2. Security Group vs. Microsoft 365 Group

| | Security group | Microsoft 365 group |
|---|---|---|
| Purpose | Control access to resources (VMs, apps, RBAC roles) | Collaboration (shared mailbox, calendar, Teams, files) |
| What it grants | Permissions | Shared workspace |
| Exam relevance | High — this is what you use for RBAC | Lower — more of an M365/collab concept |

> [!warning] Exam trap
> If a question is about controlling *access to a resource*, the answer is a **Security group**. If it's about *shared collaboration tools*, it's a **Microsoft 365 group**.

### 3. Static (Assigned) vs. Dynamic Membership

| | Static (Assigned) | Dynamic |
|---|---|---|
| How members are added | Manually, by an admin | Automatically, based on rules (e.g. job title = "Engineer") |
| License required | None | **Entra ID P1 or P2** |
| Best for | Small, stable groups | Large orgs where membership changes often |

> [!question]- Why does dynamic membership need a P1/P2 license?
> Because it's a premium automation feature — Entra ID evaluates user/device attributes continuously and updates membership without an admin lifting a finger. That rules-engine capability is gated behind paid tiers.

---

## Quick Quiz — Test Yourself

> [!question]- Q1: What's the difference between a tenant and a subscription?
> A **tenant** is your Entra ID instance (identity/directory). A **subscription** is a billing/resource container for Azure services. One tenant can be linked to multiple subscriptions.

> [!question]- Q2: You invite a partner from another company to access a shared resource. What type of account do they get?
> A **guest (external) user** — created via B2B invite, authenticates with their own org's credentials.

> [!question]- Q3: HR wants every user with the job title "Sales Manager" to automatically join the "Sales Leadership" group with no manual work. What do you need?
> A **Dynamic group**, which requires an **Entra ID P1 or P2 license**.

> [!question]- Q4: You need a group purely to assign VM access permissions to a set of engineers. What group type do you choose?
> **Security group** — used for controlling access to resources, not collaboration.

> [!question]- Q5: What information does a user account typically store, beyond just a username and password?
> Job title, department, usage location, contact info — profile data used for policies, licensing, and dynamic group rules.

> [!question]- Q6: True or False — a group can only have one owner.
> **False.** A group can have multiple owners, and owners are separate from members (owners manage the group; members just belong to it).

---

## Scenario-Style Practice (exam format)

> [!example]- Scenario 1
> **Q:** Your company hires 50 seasonal contractors who need temporary access to a single app, using their existing corporate email from their employer. What's the most appropriate way to provision them?
> **A:** Invite them as **guest/external users** via B2B collaboration — no need to create native accounts or manage separate passwords.

> [!example]- Scenario 2
> **Q:** An admin wants group membership to update automatically whenever someone's department changes in their profile, but the org only has Entra ID Free licenses. What's the outcome?
> **A:** Not possible as-is — dynamic membership requires **P1 or P2**. They'd need to either upgrade licensing or manage membership statically (manually).

> [!example]- Scenario 3
> **Q:** You need a group so a team can share a calendar and mailbox for a project. Which group type fits?
> **A:** **Microsoft 365 group** — built for collaboration, not resource access control.

---

## CLI Reference (exam likes to test this — labs don't cover it much)

```powershell
# Create a user (PowerShell - Microsoft Graph module)
New-MgUser -DisplayName "az104-user1" -UserPrincipalName "az104-user1@yourtenant.onmicrosoft.com" -AccountEnabled -PasswordProfile @{Password="P@ssw0rd1234"}

# Create a security group
New-MgGroup -DisplayName "IT Lab Administrators" -MailEnabled:$false -SecurityEnabled -MailNickname "ITLabAdmins"
```

```bash
# Azure CLI equivalents
az ad user create --display-name "az104-user1" --user-principal-name "az104-user1@yourtenant.onmicrosoft.com" --password "P@ssw0rd1234"

az ad group create --display-name "IT Lab Administrators" --mail-nickname "ITLabAdmins"
```

> [!tip] You don't need to memorize exact syntax
> The exam usually tests *recognition* ("what does this command do") more than "write this from scratch." Focus on knowing which cmdlet/command family does what.

---

## Key Takeaways (condensed)

- A **tenant** = your org's instance of Entra ID
- Two user types: **native** (internal) and **guest** (B2B, external org credentials)
- Two group types: **Security** (access control) vs **Microsoft 365** (collaboration)
- Two membership types: **Assigned/static** (manual) vs **Dynamic** (rule-based, needs **P1/P2**)
- Groups have **owners** (manage the group) and **members** (belong to it) — separate roles

---

## Related
- [[Microsoft Entra ID]]
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[AZ-104 - Azure RBAC|RBAC]]
- [[Conditional Access]]
- [[Entra ID Licensing Tiers]]
- [[Managed Identity]]

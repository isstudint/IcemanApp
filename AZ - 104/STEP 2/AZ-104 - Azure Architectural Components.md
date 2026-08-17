---
tags: [AZ-104, azure-fundamentals, accounts-subscriptions, management-infrastructure]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Describe the Core Architectural Components of Azure (MS Learn Module)

## 1. What is Microsoft Azure

**Definition:** Azure is Microsoft's continually-expanding set of cloud services that let you build, manage, and deploy applications on a massive global network, using whatever tools/frameworks you prefer.

**Analogy:** Think of Azure like a giant hardware store + utility company combined — instead of buying and owning your own generators, servers, and warehouses, you rent exactly the compute, storage, and networking you need, only pay for what you use, and can scale up or down instantly.

### Service Categories (high-level map)
Azure organizes its hundreds of services into categories. You don't need to memorize every service, but recognizing the *category* a service belongs to is exam-relevant:

| Category | Examples |
|---|---|
| Compute | Virtual Machines, App Service, Azure Functions, Container Apps, AKS |
| Networking | Virtual Network, Load Balancer, VPN Gateway, ExpressRoute, Azure DNS |
| Storage | Blob Storage, Azure Files, Queue Storage, Table Storage, Managed Disks |
| Databases | Azure SQL, Cosmos DB, PostgreSQL/MySQL Flex, Redis Cache |
| AI + ML | Azure OpenAI, AI Services, Machine Learning, Bot Service, AI Search |
| Identity + Security | Microsoft Entra ID, Key Vault, Defender for Cloud, DDoS Protection, Firewall |
| DevOps + Management | Azure DevOps, Azure Monitor, ARM Templates, Azure Policy, Cost Management |
| IoT | IoT Hub, IoT Central, Digital Twins, Stream Analytics, Event Hubs |
| Analytics | Synapse Analytics, Data Factory, Databricks, HDInsight |
| Integration | Logic Apps, API Management, Service Bus, Event Grid, Notification Hubs |

> [!tip] Why this matters for the exam
> AZ-104 loves scenario questions like "which service would you use to do X?" — you don't need deep expertise in every service, just enough to correctly bucket it (e.g., "this is a networking problem, so the answer is probably VNet/NSG/Load Balancer, not a storage service").

**Example situation:** An internal app has seasonal demand spikes. You host it on VMs or managed app services, store data in a managed database, and monitor health from a central dashboard. When demand rises you scale out; when it drops you scale back in — so you're not paying for unused capacity year-round. This is the core value pitch of Azure: **elasticity + pay-for-what-you-use**, instead of buying physical servers sized for your *peak* demand.

---

## 2. Azure Accounts & Subscriptions — Getting Started

### The Account → Subscription → Resource Group → Resource Chain

**Definition:** To use Azure, you need an **Azure account** (an identity), which is linked to at least one **subscription** (billing + access boundary). Subscriptions contain **resource groups**, and resource groups contain **resources**.

```
Azure Account
   └── Subscription(s)      → billing & access control boundary
         └── Resource Group(s)  → logical container
               └── Resource(s)  → actual VM, DB, storage, etc.
```

**Analogy:** Account = you as a person with a bank identity. Subscription = an individual bank account under your name (you can have several — one for personal spending, one for business). Resource Group = a labeled folder inside that account where you keep related items together (e.g., "Home Renovation" folder). Resource = the actual items inside (the VM, the database, the storage disk).

**Example situation:** Your company has one Azure account, but three separate subscriptions — one for Dev/Test, one for Production, and one for Sandbox experiments. Each subscription bills separately and has its own access rules, so a developer who can freely spin up VMs in Sandbox *cannot* touch Production resources unless separately granted access.

---

### Creating an Azure Account

- You can sign up directly on the Azure website, through a Microsoft rep, or through a **Cloud Solution Provider (CSP)** partner who offers managed-cloud solutions on top of Azure.
- After creating an account, a subscription is created for you automatically — you're then free to create *additional* subscriptions as needed.

### Free Account vs. Free Student Account

| Feature | Azure Free Account | Azure Free Student Account |
|---|---|---|
| Duration | 12 months free access to popular products | 12 months free access to certain services |
| Credit | For first **30 days** | For first **12 months** |
| Always-free services | 65+ services | Certain free developer tools |
| Requires credit card? | **Yes** (identity verification only — not charged unless you upgrade) | **No** |

> [!question]- Quick check: why would a student account skip the credit card requirement?
> Because it's meant to lower the barrier for students to start learning — the org verifies eligibility (school email) instead of using a card for identity verification, and won't auto-charge for overages the same way.

> [!warning] Exam-relevant detail
> On the free account, the credit card is for **identity verification only** — you are **not** charged for services until you deliberately upgrade to a paid subscription. Don't confuse "requires a card" with "will bill you automatically."

---

## 3. Azure Management Infrastructure

The management infrastructure is the **hierarchy** that lets you organize resources, control access, and manage cost as your Azure footprint grows. From bottom to top: **Resources → Resource Groups → Subscriptions → Management Groups → Tenant Root Group.**
![[Pasted image 20260804222532.png]]
### Azure Resources & Resource Groups

**Definition:** A **resource** is the basic building block of Azure — anything you create, provision, or deploy (a VM, a virtual network, a database, an AI service). A **resource group** is a logical container that groups related resources together for lifecycle and access management.

**Analogy:** Resources are individual tools (a hammer, a drill, a saw). A resource group is the toolbox they're stored in — you can carry, lock, or hand off the whole toolbox at once instead of managing each tool individually.

**The Three Hard Rules of Resource Groups:**
1. **One group at a time** — every resource belongs to exactly one resource group. You *can* move a resource between groups, but never to two at once.
2. **No nesting or renaming** — resource groups cannot contain other resource groups, and once created, a group's name is locked in. Choose your naming convention carefully up front.
3. **Cascading actions** — actions applied to the group apply to everything inside it. **Deleting a resource group deletes every resource inside it**, and access permissions granted at the group level apply to all resources within.

> [!warning] Exam trap
> "Delete group = delete all" is a common trap answer setup. If a question describes someone accidentally deleting a resource group, the expected answer is that **all** contained resources are gone too — there's no selective survival.

**Example situation:** You spin up a temporary dev environment — a VM, a test database, and a storage account — all inside one resource group called `Dev-Sandbox`. When the project wraps up, you delete that single resource group, and everything inside is cleaned up in one action, instead of manually deleting each resource.

---

### Azure Subscriptions

**Definition:** A subscription is Azure's **unit of management, billing, and scale**. It provides access to Azure products/services and links back to an Azure account (an identity in Microsoft Entra ID or a directory Entra ID trusts).

Subscriptions serve **two boundary roles**:

| Boundary Type | What it Controls |
|---|---|
| **Billing boundary** | How the account is billed — each subscription generates its own separate billing report/invoice |
| **Access control boundary** | Access-management policies applied at the subscription level (spending limits, access rules) |

**Analogy:** Think of subscriptions like separate credit cards issued under the same person's name — each one has its own statement (billing boundary) and its own spending limit/rules set by the bank (access control boundary), even though they all belong to the same account holder.

**Why you'd create additional subscriptions:**
- **Environments** — separate sandbox, dev, test, and production, since access control naturally happens at the subscription level.
- **Team/workload boundaries** — give each project its own subscription so costs are easy to track and sandbox environments stay isolated from production.
- **Billing** — track costs separately (e.g., one subscription for production spend, another for dev/test spend).

---

### Azure Management Groups
![[Pasted image 20260804223312.png]]
**Definition:** Management groups sit **above subscriptions** in the hierarchy. They let you organize multiple subscriptions (across teams/geographies) and apply policy or access control **once**, at a higher level, instead of repeating the work per-subscription.

**Analogy:** If a subscription is one filing cabinet with its own lock, a management group is the entire office floor those cabinets sit on — set a rule for the floor (like "no cabinet on this floor may be unlocked after 6 PM") and it automatically applies to every cabinet on it, no matter how many get added later.

**Hierarchy shape:**
```
Tenant Root Group
   └── Management Group (e.g., Marketing / IT)
         └── Subscription (e.g., Web / Apps)
               └── Resource Group
                     └── Resource (VM / DB / App)
```

**Key facts (exam-relevant):**
- Policies and access **inherit downward** — set at a management group, and every subscription, resource group, and resource beneath it inherits that policy/access automatically.
- A single directory supports up to **10,000 management groups**.
- Nesting can go up to **6 levels deep** (excluding the root and subscription levels).
- **Each management group or subscription can have only one parent** — no shared/multiple-parent structures.

**Example situations:**
- **Apply a policy across subscriptions:** Restrict VM deployment locations to the US West Region by applying that policy to a "Production" management group. It automatically applies to every subscription (and every VM) underneath, and the resource/subscription owner **can't override it** — this is what makes management groups a governance tool, not just an organizational nicety.
- **Grant access to multiple subscriptions at once:** Instead of scripting an Azure RBAC role assignment separately across 10 subscriptions, assign it once at the management group level, and every subscription, resource group, and resource underneath inherits that permission.

> [!question]- Quick check: why can't you rename a resource group but you CAN move a resource between groups?
> Resource group identity (its name) is meant to be a stable reference point once other things (policies, permissions, automation, billing reports) start pointing to it — renaming would break those references. Moving an individual *resource*, however, only changes which container it belongs to, not the identity of the group itself.

> [!question]- Quick check: what's the practical reason management group policy inheritance can't be overridden by a subscription owner?
> If subscription owners could override inherited policy, management groups would stop being a governance/enforcement tool and become a mere suggestion — the whole point is central, tamper-proof control across many subscriptions at once.

---

## Quick Quiz — Full Module

> [!question]- Q1: What's the relationship between an Azure account and a subscription?
> An account is your identity in Microsoft Entra ID (or a trusted directory). A subscription links to that account and serves as the billing + access control boundary — one account can have multiple subscriptions, but at least one is required.

> [!question]- Q2: Can a resource belong to two resource groups at once?
> No — every resource belongs to exactly one resource group at a time. You can move it between groups, but never assign it to two simultaneously.

> [!question]- Q3: You delete a resource group by mistake. What happens to the resources inside it?
> They're all deleted too — deleting a resource group deletes everything inside it. There's no partial survival.

> [!question]- Q4: Can you rename a resource group after creating it?
> No — resource groups cannot be renamed or nested after creation. Naming conventions must be decided upfront.

> [!question]- Q5: What are the two types of subscription boundaries, and what does each control?
> Billing boundary (how the account is billed, separate invoices per subscription) and Access control boundary (access-management policies, spending limits, and access rules applied at the subscription level).

> [!question]- Q6: Where do management groups sit in the Azure hierarchy, and what's their main purpose?
> Above subscriptions, below the tenant root group. Their purpose is to apply policy and access control once, at scale, across many subscriptions — with automatic downward inheritance.

> [!question]- Q7: How many levels of management group nesting are supported (excluding root and subscription levels)?
> Up to 6 levels deep.

> [!question]- Q8: Can a management group or subscription have more than one parent?
> No — each management group or subscription can have only one parent.

> [!question]- Q9: On the Azure free account, are you charged automatically once you provide a credit card?
> No — the card is used for identity verification only. You are not billed until you deliberately upgrade to a paid subscription.

> [!question]- Q10: Why would an org create separate subscriptions for Dev/Test vs. Production instead of using resource groups alone?
> Because access control and billing boundaries live at the subscription level, not the resource group level — separate subscriptions let you enforce different spending limits, access rules, and billing reports per environment, which resource groups alone can't do.

---

## Related
- [[AZ-104 - Create Configure Manage Identities]]
- [[AZ-104 - Lab 01 Entra ID Identities]]
- [[AZ-104 - Checklist]]

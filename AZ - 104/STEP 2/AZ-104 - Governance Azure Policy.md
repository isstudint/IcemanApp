---
tags: [AZ-104, governance, azure-policy, arm]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Governance: Cloud Adoption Framework & Azure Policy

## 1. Cloud Adoption Framework (CAF) — the big picture

**Definition:** Microsoft's end-to-end guidance framework helping orgs plan, adopt, secure, and govern their move to Azure. Not a tool — a *methodology*.

**Analogy:** A city planning manual for building a new city district — it doesn't lay the bricks itself, but it tells you the order to do things in (zone the land, build roads, then buildings) so the city doesn't turn into chaos.

**The phases:**

| Phase | Focus |
|---|---|
| **Strategy** | Define business justification & expected outcomes |
| **Plan** | Align an actionable adoption plan to business outcomes |
| **Ready** | Prepare the cloud environment for planned changes |
| **Adopt** | Migrate workloads or build cloud-native apps |
| **Secure** | Integrate security into cloud operations |
| **Operate** | Govern and manage operational health |

**Example situation:** A company decides to move to Azure. Before touching the portal, CAF says: define *why* you're moving (Strategy), make a plan tied to business goals (Plan), prep the environment — naming conventions, subscriptions, policies (Ready) — *then* actually migrate (Adopt).

---

## 2. Cloud Governance — the 5-step cycle

**Definition:** The ongoing management of cloud usage in your org — not a one-time setup, a continuous process.

**Analogy:** Not "build a fence once," more like "maintain a neighborhood watch program" — you keep assessing new risks and adjusting rules as the neighborhood changes.

1. **Build a governance team** — dedicated team owns policy definition/maintenance/reporting
2. **Assess cloud risks** — compliance, security, cost, data, resource, AI risks
3. **Document policies** — write down the actual rules
4. **Enforce policies** — automated tools + manual oversight
5. **Monitor** — ongoing checking

> [!tip] Memory hook
> Steps 2–5 repeat forever. Step 1 (build the team) is the only one-time setup — everything after is a loop.

### The Five Disciplines of Cloud Governance
| Discipline | What it covers |
|---|---|
| Cost management | Controlling IT spend |
| Security baseline | Meeting security requirements |
| Resource consistency | Standard config, onboarding, recovery |
| Identity baseline | Consistent roles/access assignments |
| Deployment acceleration | Standardized, centralized deployment templates |

---

## 3. Governance Hierarchy — the levels of scope

**Definition:** Azure's structure for organizing and applying governance settings, from broadest to narrowest.

**Analogy:** Nesting dolls — Tenant Root Group is the biggest doll, Resources are the smallest doll inside everything else. Whatever rule you paint on an outer doll shows through to every doll inside it.

```
Tenant Root Group
   └── Management Groups (up to 6 levels below root)
         └── Subscriptions
               └── Resource Groups
                     └── Resources
```

| Level | Definition | Example situation |
|---|---|---|
| **Resources** | The actual building block — a VM, storage account, database, VNet | A single VM you spun up |
| **Resource Groups** | Container of related resources; delete/access actions propagate to everything inside | Delete the RG → every resource inside is deleted too (matches your earlier notes) |
| **Subscriptions** | Unit of management, **billing**, and scale; has quotas/limits on resource counts | Separate subscriptions for Finance vs Engineering so billing is cleanly split |
| **Management Groups** | Scope *above* subscriptions — organizes multiple subscriptions together for shared governance | A company with 20 subscriptions groups them by department under one management group each, so a single policy applies to all 20 at once |

> [!warning] Inheritance rule — exam-relevant
> Settings applied at a higher level **automatically flow down** to everything beneath it. Apply a policy to a Management Group → every subscription under it inherits that policy → every resource group and resource under those subscriptions inherits it too. You can't opt a lower level out except through **exemptions** (covered below).

---

## 4. Azure Resource Manager — Control Plane vs Data Plane

This is a genuinely important distinction that wasn't in your ARM Templates note yet.

**Definition:**
- **Control plane** — managing the *resource itself* (create/update/delete/tag/lock/assign roles). Goes through Azure Resource Manager.
- **Data plane** — interacting with the *data inside* a resource (uploading a blob, querying a database, reading a Key Vault secret). Goes **directly** to the resource's own REST API, bypassing Resource Manager entirely.

**Analogy:** Control plane = talking to the landlord about the apartment itself (rent it, renovate it, terminate the lease). Data plane = what you actually do *inside* the apartment once you're living there (cook dinner, watch TV) — the landlord isn't involved in that day-to-day activity.

**Example situation:** Creating a storage account = control plane (Resource Manager handles it, RBAC/Policy apply here). Uploading a file into that storage account's blob container = data plane (goes straight to the storage service's own API, though RBAC/ACLs set on the control plane side still govern who's allowed to do it).

> [!question]- Where does Azure Policy primarily operate — control plane or data plane?
> Control plane — though some services now support data plane extensions (e.g. `Microsoft.KeyVault.Data`, `Microsoft.Kubernetes.Data`) for more granular enforcement.

---

## 5. Greenfield vs Brownfield — when policy evaluation happens

**Definition:**
- **Greenfield** — evaluating a resource **at creation or update time**, before it exists/changes
- **Brownfield** — evaluating resources that **already exist**, via a compliance scan

**Analogy:** Greenfield = a building inspector who has to approve blueprints *before* construction starts. Brownfield = a building inspector walking through neighborhoods that were already built, flagging violations after the fact — can't undo what's built, but can flag it and block *future* violations.

**Example situation:** You create a policy blocking resources outside West Europe.
- **Greenfield**: A teammate tries to create a new VM in East US tomorrow → blocked immediately.
- **Brownfield**: Resources that already exist in East US from before the policy existed aren't deleted — they get flagged **non-compliant** on the next compliance scan (runs automatically every 24 hours, or can be triggered manually).

> [!warning] Order of operations for Greenfield (exam trap)
> RBAC is checked **before** Azure Policy. If you don't have permission to create the resource in the first place, Azure Policy is never even evaluated — the request already failed at the RBAC stage.

> [!tip] Same hierarchy, same inheritance — Policy and RBAC
> Policy and [[AZ-104 - Azure RBAC|RBAC]] both use the **exact same scope hierarchy** (Management Group → Subscription → Resource Group → Resource) and **downward inheritance**. The difference: Policy controls **what is allowed to exist** (compliance enforcement), RBAC controls **who can do what** (allow model). See [[AZ-104 - Azure RBAC]] for the full comparison table.

---

## 5b. Tags Enforcement via Azure Policy

Tags are key-value metadata for cost tracking and organization — but they have important gotchas:

> [!danger] Exam trap — Tags do NOT inherit
> Applying a tag to a **resource group** does NOT automatically tag the resources inside it. If you need all resources in an RG to carry the same tag, you must use **Azure Policy** to enforce inheritance.

**Key facts:**
- Maximum **50 tags** per resource/resource group/subscription
- Tag names are **case-insensitive** for operations, but **case-preserving** for display
- Tags are **not inherited** by default — use Policy to enforce

**Useful built-in policies for tags:**

| Policy | Effect |
|---|---|
| `Require a tag on resource groups` | Blocks RG creation without specified tag |
| `Inherit a tag from the resource group` | Auto-copies a tag from the RG to its resources (uses `modify` effect) |
| `Require a tag and its value on resources` | Blocks resource creation without specified tag + value |

> [!example]- Scenario: Finance requires every resource group to have a "CostCenter" tag. Resources inside should inherit it automatically. How?
> **Two policies:** (1) `Require a tag on resource groups` with tag name "CostCenter" and effect `deny`. (2) `Inherit a tag from the resource group` for tag "CostCenter" with effect `modify`.

---

## 5c. Resource Locks vs Azure Policy

Both are governance tools, but they solve different problems:

| | Azure Policy | [[Resource Locks]] |
|---|---|---|
| **Purpose** | What is allowed to exist | Prevent accidental delete/modify |
| **Applies to** | Non-compliant resources | **All users, including Owner** |
| **Blocks who?** | Users creating non-compliant resources | Everyone — no exceptions by role |
| **Effect** | deny, audit, modify, etc. | CanNotDelete or ReadOnly |

See [[Resource Locks]] for full details.

---

## 6. The 6 Azure Policy Resources

| Resource | Definition | Analogy |
|---|---|---|
| **Definitions** | Describe the compliance condition and the effect if it's violated | The actual written rule ("no smoking") |
| **Initiatives** | Group multiple definitions together as one manageable unit (aka a "policy set") | A rulebook bundling several individual rules |
| **Assignments** | Apply a definition/initiative to a specific scope | Posting that rulebook on a specific building's wall |
| **Exemptions** | Excuse a specific resource/hierarchy from a policy | A permit that lets one specific tenant break the "no pets" rule |
| **Attestations** | Manually confirm compliance state for policies that can't be auto-evaluated | Self-certifying "yes, I did this," since no automated inspector can check it |
| **Remediations** | Actively fix non-compliant resources | The maintenance crew that comes and fixes the violation instead of just reporting it |

### Built-in vs Custom Policy
- **Built-in** — pre-made by Azure Resource Providers, available by default
- **Custom** — written by you when no built-in policy fits your specific requirement

### Exemption categories
- **Mitigated** — the policy's *intent* is already satisfied some other way
- **Waiver** — the noncompliance is temporarily accepted anyway (no real justification, just a pass)

> [!question]- What's the practical difference between an Exemption and just excluding a scope from an Assignment?
> Exemptions are created *after* the assignment already exists, as a child object tied to the specific resource — used when you need to carve out one exception without editing the whole assignment's scope. Excluded scopes are defined *at assignment time* as part of the assignment itself.

---

## 7. Anatomy of a Policy Definition

**Definition:** A policy definition is written as JSON with these key parts:

| Element | Required? | Purpose |
|---|---|---|
| `displayName` / `description` | Optional | Human-readable identification |
| `mode` | Optional (default `all`) | `all` = evaluate every resource type + RGs/subscriptions. `indexed` = only resource types that support tags and location |
| `metadata` | Optional | Category, version, who created it |
| `parameters` | Optional | Values you can plug in — same reusability concept as ARM template parameters |
| `policyRule` | **Required** | The actual `if/then` logic |

```json
{
  "properties": {
    "displayName": "Allowed locations",
    "mode": "indexed",
    "parameters": {
      "listOfAllowedLocations": { "type": "Array" }
    },
    "policyRule": {
      "if": {
        "not": { "field": "location", "in": "[parameters('listOfAllowedLocations')]" }
      },
      "then": { "effect": "deny" }
    }
  }
}
```

**Reading this out loud:** "IF the resource's location is NOT in the allowed-locations list, THEN deny the deployment."

> [!tip] Connects to your ARM Templates note
> Policy definitions use the same `parameters` concept as ARM templates — reusable, adjustable values instead of hardcoding. Same underlying pattern, different JSON document.

### Logical Operators (in `if` blocks)
- `not` — inverts the result
- `allOf` — AND logic (all nested conditions must be true)
- `anyOf` — OR logic (any nested condition can be true)

### Common Conditions
`equals`/`notEquals`, `like`/`notLike`, `contains`/`notContains`, `in`/`notIn`, `less`/`lessOrEquals`, `greater`/`greaterOrEquals`, `exists`

### Effect Types (`then` blocks) — the most exam-relevant table here

| Effect | What it does |
|---|---|
| `deny` | **Blocks** the deployment/change entirely |
| `audit` | Logs a warning but **doesn't block** |
| `auditIfNotExists` | Audits if a related resource is missing |
| `deployIfNotExists` | **Automatically deploys** a missing related resource |
| `modify` | Changes existing resource properties/tags |
| `append` | Adds fields during creation/update |
| `disabled` | Turns off the rule entirely |
| `manual` | Requires human attestation |
| `denyAction` | Denies specific actions (not full deployment) |

> [!question]- A policy needs to automatically apply a missing tag when a resource is created, not just report on it. Which effect fits?
> `modify` (for changing existing resource properties/tags) — `append` is closer for adding a field during initial creation. `deployIfNotExists` is for deploying an entirely separate missing *resource*, not fixing a property on the resource itself.

---

## 8. Evaluation Triggers & Compliance States

### When does evaluation happen?
1. Creating or updating a resource
2. A policy/initiative definition is created or updated
3. A policy/initiative assignment is created or updated
4. A subscription resource type is registered/re-registered
5. The **standard evaluation cycle** — runs automatically every **24 hours**

### The 6 Compliance States
| State | Meaning |
|---|---|
| Compliant | Follows the rule |
| Non-compliant | Violates the rule |
| Exempt | Excluded via exemption |
| Conflict | Two policies contradict each other |
| Not started | Evaluation hasn't run yet |
| Protected | Shielded by system settings |

---

## 9. Enforcement Mode — Enabled vs Disabled

**Definition:** Controls whether a policy *actually blocks* non-compliant actions, or just evaluates/reports without blocking.

| Mode | Value | Evaluates compliance? | Blocks/Denies? |
|---|---|---|---|
| **Enabled** | `Default` | Yes | Yes |
| **Disabled** | `DoNotEnforce` | Yes | **No** |

**Analogy:** Disabled mode is a "dress rehearsal" — you get to see who *would* have been blocked, without actually blocking anyone yet.

**Example situation (Safe Deployment):** Before rolling out a strict new policy company-wide, deploy it in **Disabled** mode first to see what *would* be flagged as non-compliant without breaking anything. Once you've confirmed it targets the right things, flip it to **Enabled** and roll out gradually — canary ring → non-prod → production.

```
1. Create definition → 2. Assign (Disabled) → 3. Check compliance report
        ↓
4. Repeat for canary ring → 5. Switch to Enabled → 6. Check compliance again
        ↓
7. Repeat for non-prod → 8. Repeat for production
```

> [!warning] Exam trap
> `enforcementMode: Disabled` still **evaluates and reports** compliance — it just doesn't block anything. Don't confuse "Disabled" with "the policy does nothing."

---

## Quick Quiz

> [!question]- Q1: What's the difference between a Management Group and a Subscription in the governance hierarchy?
> A Management Group sits *above* subscriptions, letting you apply governance across multiple subscriptions at once. A Subscription is a unit of billing/scale/quota that actually contains resource groups and resources.

> [!question]- Q2: If you apply a policy to a Management Group, does every subscription under it automatically get that policy?
> Yes — settings inherit downward through the hierarchy automatically.

> [!question]- Q3: What's the difference between control plane and data plane operations?
> Control plane = managing the resource itself (create/update/delete/RBAC), goes through Resource Manager. Data plane = interacting with the data inside the resource (upload a blob, query a DB), goes directly to that service's own API.

> [!question]- Q4: A resource already existed in a non-compliant region before a new "allowed locations" policy was created. What happens to it?
> It's not deleted — it gets flagged as **non-compliant** on the next scan (brownfield evaluation). Future attempts to create resources in that region will fail (greenfield evaluation).

> [!question]- Q5: In a Greenfield scenario, if a user lacks permission (RBAC) to create a resource, is Azure Policy even evaluated?
> No — RBAC is checked first. If it fails there, Policy evaluation never happens.

> [!question]- Q6: What's the difference between the `deny` and `audit` effects?
> `deny` blocks the action entirely. `audit` logs a warning but allows the action to proceed.

> [!question]- Q7: How often does the standard Azure Policy compliance evaluation cycle run automatically?
> Every 24 hours (can also be triggered manually, or by specific events like a resource/definition/assignment change).

> [!question]- Q8: What does `enforcementMode: DoNotEnforce` actually do?
> Still evaluates and reports compliance — just doesn't block/deny non-compliant actions. Useful for safely testing a new policy before fully enabling it.

> [!question]- Q9: What's the difference between a Policy Exemption and an Excluded Scope on an Assignment?
> Excluded scopes are set at assignment time as part of the assignment itself. Exemptions are created afterward, as a child object tied to a specific resource, to carve out an exception without editing the whole assignment.

---

## Related
- [[AZ-104 - ARM Templates]]
- [[AZ-104 - Azure RBAC]]
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[AZ-104 - Checklist]]
- [[Resource Locks]]
- [[Cost Management]]
- [[Entra ID Licensing Tiers]]

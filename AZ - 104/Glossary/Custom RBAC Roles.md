---
tags: [AZ-104, identity, rbac, custom-roles]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Custom RBAC Roles

## The Problem This Solves

Azure has 200+ built-in RBAC roles, but sometimes **none of them fit exactly**. You need a role that can do specific actions (e.g., restart VMs and read storage) but not others (e.g., not delete anything). Custom roles let you define exactly that.

**Analogy:** Built-in roles are off-the-rack suits — they fit most people. Custom roles are tailor-made suits — you specify exactly what's included and what's cut out.

---

## ⚡ Key Distinctions

| | Built-in Roles | Custom Roles |
|---|---|---|
| **Created by** | Azure (Microsoft) | You |
| **Editable?** | ❌ No | ✅ Yes |
| **Limit** | Unlimited (Azure provides them) | **5,000 per tenant** |
| **Best for** | Standard scenarios (Owner, Contributor, Reader) | Specific, granular access needs |

---

## Custom Role Definition (JSON structure)

```json
{
  "Name": "VM Operator",
  "Description": "Can start, stop, and restart VMs but cannot create or delete them",
  "Actions": [
    "Microsoft.Compute/virtualMachines/start/action",
    "Microsoft.Compute/virtualMachines/restart/action",
    "Microsoft.Compute/virtualMachines/deallocate/action",
    "Microsoft.Compute/virtualMachines/read"
  ],
  "NotActions": [],
  "DataActions": [],
  "NotDataActions": [],
  "AssignableScopes": [
    "/subscriptions/12345678-1234-1234-1234-123456789abc"
  ]
}
```

### Key Fields

| Field | Purpose |
|---|---|
| **Actions** | Control plane operations the role **can** perform |
| **NotActions** | Control plane operations **excluded** from Actions |
| **DataActions** | Data plane operations the role can perform (e.g., read blob data) |
| **NotDataActions** | Data plane operations excluded |
| **AssignableScopes** | Where this custom role can be **assigned** (subscription or MG level) |

> [!warning] Exam trap — AssignableScopes
> `AssignableScopes` defines where the role can be **assigned**, not where it takes effect. If you set it to one subscription, the role can only be assigned within that subscription. Set it to a management group to make it available across multiple subscriptions.

> [!warning] Exam trap — you can't set AssignableScopes to a resource group
> Custom roles can only be scoped at the **subscription** or **management group** level for AssignableScopes. You *can* assign them at the resource group level, but the AssignableScopes definition must be subscription or higher.

---

## Creating Custom Roles

| Method | How |
|---|---|
| **Portal** | Entra admin center → Subscriptions → Access control (IAM) → Add custom role |
| **PowerShell** | `New-AzRoleDefinition -InputFile role.json` |
| **CLI** | `az role definition create --role-definition role.json` |
| **REST API** | PUT to `/providers/Microsoft.Authorization/roleDefinitions/{id}` |

**Pro tip:** Start by **cloning an existing built-in role** and modifying it, rather than building from scratch. In the portal: Access control (IAM) → Roles → find a similar role → Clone.

---

## Quick Quiz

> [!question]- Q1: What's the maximum number of custom roles per Entra ID tenant?
> **5,000.**

> [!question]- Q2: Can you set AssignableScopes to a resource group?
> **No** — AssignableScopes must be at subscription or management group level. You can still *assign* the role at the RG level, but the definition's scope must be subscription or higher.

> [!question]- Q3: A team needs to restart VMs but nothing else. Is there a built-in role for this?
> **No** — the closest built-in role (Virtual Machine Contributor) can also create and delete VMs. You'd need a **custom role** with only `Microsoft.Compute/virtualMachines/start/action`, `restart/action`, and `deallocate/action`.

> [!example]- Scenario: A support team needs to read storage account properties and restart VMs across 3 subscriptions, but must not be able to delete anything. How do you implement this?
> Create a **custom RBAC role** with `Actions` for `Microsoft.Compute/virtualMachines/restart/action`, `Microsoft.Storage/storageAccounts/read`, and `NotActions` for `*/delete`. Set `AssignableScopes` to the 3 subscription IDs (or a parent management group). Assign the role to the support team's security group.

---

## Related
- [[AZ-104 - Azure RBAC]]
- [[Service Principal]]
- [[Managed Identity]]
- [[Management Groups]]

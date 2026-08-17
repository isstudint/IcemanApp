---
tags:
  - AZ-104
  - arm-templates
  - prerequisites
last-reviewed: 2026-08-08
status: stub
domain: identity-governance
---

# ARM Templates (Azure Resource Manager Templates)

## The Actual Point (why this exists)

You need the **same infrastructure** built repeatedly and reliably — for multiple environments, multiple customers, or just consistently every time. Clicking through the portal manually doesn't scale and invites mistakes.

**Fix:** write a **JSON file describing what you want to exist** (a storage account, a VM, a network) and hand it to Azure. Azure builds exactly what's described — same file, same result, every time you run it.

> [!tip] Who this is for
> Admins/engineers automating repeatable infrastructure instead of manually clicking through the portal every time. That's the entire use case — nothing more mysterious than that.

---

## Key Terms (plain English)

- **ARM template** — a JSON file describing the infrastructure you want deployed (resources, their settings, how they relate)
- **Resource Group** — a folder/container holding related resources together (a VM + its storage + its network card, etc.), so you can manage or delete them as one unit. Your template deploys *into* a resource group.
- **Declarative syntax** — you state *what* you want ("I want a storage account"), not *how* to build it step by step. Azure figures out the "how." (Opposite = imperative — a script of manual steps.)
- **SKU** (Stock Keeping Unit) — just means "which tier/size/pricing option." Storage account SKU = `Standard_LRS`, `Standard_GRS`, etc. VM SKU = size like `Standard_B2s`. Same word, same meaning, across almost every Azure service.
- **Idempotent** — run the same template twice, nothing breaks. If nothing changed, nothing happens again. If one value changed, only that one thing updates. This is *why* templates are safe to rerun.
- **Bicep** — a simpler, newer language that compiles down to the same thing as JSON ARM templates. Microsoft now recommends Bicep for new projects, but the exam still expects you to read/understand JSON templates.

---

## ARM Template File Structure

| Section | What it does |
|---|---|
| `$schema` | Required. Defines the JSON schema version/location |
| `contentVersion` | Required. Version number you control, to track template changes |
| `parameters` | Optional. Values you can plug in at deploy time (e.g. which SKU, which region) — makes the template reusable instead of hardcoded |
| `variables` | Optional. Values used internally in the template to simplify expressions |
| `functions` | Optional. Custom reusable functions inside the template |
| `resources` | **Required.** The actual list of things to create (storage account, VM, etc.) |
| `outputs` | Optional. Values returned after deployment finishes (e.g. the storage account's endpoint URL) |

> [!warning] Do you need to memorize this syntax?
> No. You need to **recognize** what each section does, not type JSON from memory. The exam tests "what does this block do" or "what's missing here," not "write this from scratch." Recognition beats recall for this topic.

---

## Parameters vs Resources — the actual difference

- **`resources`** = the actual things you're building (a storage account, a VM)
- **`parameters`** = the *dials* you can adjust each time you deploy, without editing the template itself (e.g. "what SKU," "what region," "what name") — this is what makes one template reusable across many deployments instead of writing a new template every time

Example: without a parameter, your storage account SKU is hardcoded to `Standard_LRS` forever. With a parameter, you pass in `Standard_GRS` for one deployment and `Standard_LRS` for another, using the *same* template file.

---

## Deploying a Template (CLI, since that's what you're practicing)

```bash
az login
az group create --name myResourceGroup --location eastus
az deployment group create \
  --name myDeployment \
  --resource-group myResourceGroup \
  --template-file azuredeploy.json
```

To pass a parameter value at deploy time:
```bash
az deployment group create \
  --name testDeployment1 \
  --template-file azuredeploy.json \
  --parameters storageAccountType=Standard_LRS
```

> [!tip] What actually matters here
> Not the exact flags — recognizing that `az deployment group create` deploys a template into a resource group, and that you can override parameter values at deploy time without editing the file.

---

## Bicep — The Modern Alternative

**Definition:** A domain-specific language (DSL) that compiles down to the same ARM JSON. Think of it as syntactic sugar — cleaner, shorter, but produces the exact same deployment.

**Why Bicep exists:** ARM template JSON is verbose and hard to read. Bicep fixes this with a simpler syntax while maintaining full ARM compatibility.

**Side-by-side comparison (same storage account):**

| ARM JSON | Bicep |
|---|---|
| ~25 lines of nested JSON with `$schema`, `contentVersion`, `resources[]` | ~5 lines of clean declarative syntax |

```bicep
// Bicep version — same result as the JSON template
param location string = resourceGroup().location
param storageAccountName string

resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: storageAccountName
  location: location
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
}
```

**Key exam facts:**
- Bicep **compiles to ARM JSON** — it's not a separate deployment engine
- `az bicep decompile --file template.json` — converts ARM JSON → Bicep
- `az bicep build --file main.bicep` — converts Bicep → ARM JSON
- The exam expects you to **read and interpret** both formats
- Microsoft now recommends Bicep for new projects

---

## Exporting & Converting Templates

The exam explicitly tests these scenarios:

| Action | How |
|---|---|
| **Export a deployment** | Portal → Resource Group → Deployments → select deployment → "Export template" |
| **Export from CLI** | `az deployment group export --name myDeployment --resource-group myRG` |
| **Export existing resources** | Portal → Resource Group → "Export template" (generates ARM JSON from current state) |
| **ARM → Bicep** | `az bicep decompile --file azuredeploy.json` |
| **Bicep → ARM** | `az bicep build --file main.bicep` |

> [!warning] Exam trap
> Exported templates capture the **current state** of resources, not the original deployment intent. They may include auto-generated values and may need cleanup before reuse.

---

## How This Connects to Your Other Notes

```
ARM Template (the recipe)
        ↓ deploys into
Resource Group (the plate it's served on)
        ↓ governed by
Azure Policy / RBAC / Locks (the rules about who can touch the plate)
```

- Lives in **MS Learn Path 1: Prerequisites** (alongside Cloud Shell — both are "how admins actually operate" tools)
- Connects forward to **Path 2: Identities & Governance** — resource groups, tags, and locks are the containers/rules that ARM templates deploy into and get governed by
- The Cloud Shell note you already have is the *environment* you'd actually run these `az deployment group create` commands from

---

## Quick Quiz

> [!question]- Q1: You run the same ARM template twice with zero changes. What happens?
> Nothing — Azure Resource Manager doesn't make any changes to the already-deployed resources. This is the **idempotent** property.

> [!question]- Q2: What's the difference between the `parameters` and `resources` sections?
> `resources` = what actually gets built. `parameters` = the adjustable inputs (SKU, region, name) that let you reuse the same template for different deployments without editing the file.

> [!question]- Q3: What does SKU mean, and where else have you seen it?
> "Which tier/size/variant." You've already seen it as storage redundancy options (Standard_LRS, Standard_GRS) — same concept applies to VM sizes and other resources.

> [!question]- Q4: True or False — you need to memorize ARM template JSON syntax to write one from scratch on the exam.
> **False.** You need to recognize what sections/blocks do, not write templates from memory.

> [!question]- Q5: Bicep vs JSON ARM templates — what's the relationship?
> Bicep is a simpler language that compiles down to the same underlying ARM deployment. Microsoft recommends it for new projects, but the exam still expects you to read JSON templates.

---

# ANKI NOTES
## Related
- [[AZ-104 - Azure Cloud Shell]]
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[AZ-104 - Checklist]]
- [[AZ-104 - Governance Azure Policy]]

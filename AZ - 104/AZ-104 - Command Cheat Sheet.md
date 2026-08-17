---
tags: [AZ-104, tools, cli, powershell, cheat-sheet]
last-reviewed: 2026-08-08
status: reference
domain: identity-governance
---

# AZ-104 Command Cheat Sheet

> [!tip] Exam tip
> The exam tests **command recognition** — "which command does X?" — not "write this from memory." Focus on knowing the **command families** and **key flags**, not exact syntax.

---

## Identity & Governance

### Users & Groups

| Task | Azure CLI | PowerShell |
|---|---|---|
| Create a user | `az ad user create --display-name "John" --user-principal-name john@contoso.com --password P@ss123` | `New-AzADUser -DisplayName "John" -UserPrincipalName john@contoso.com -Password (ConvertTo-SecureString "P@ss123" -AsPlainText)` |
| List all users | `az ad user list` | `Get-AzADUser` |
| Delete a user | `az ad user delete --id john@contoso.com` | `Remove-AzADUser -ObjectId <id>` |
| Create a group | `az ad group create --display-name "Sales" --mail-nickname "Sales"` | `New-AzADGroup -DisplayName "Sales" -MailNickname "Sales"` |
| Add user to group | `az ad group member add --group "Sales" --member-id <user-id>` | `Add-AzADGroupMember -TargetGroupObjectId <group-id> -MemberObjectId <user-id>` |

### RBAC

| Task | Azure CLI | PowerShell |
|---|---|---|
| List role assignments | `az role assignment list --resource-group myRG` | `Get-AzRoleAssignment -ResourceGroupName myRG` |
| Assign a role | `az role assignment create --assignee user@contoso.com --role "Contributor" --resource-group myRG` | `New-AzRoleAssignment -SignInName user@contoso.com -RoleDefinitionName "Contributor" -ResourceGroupName myRG` |
| List built-in roles | `az role definition list --output table` | `Get-AzRoleDefinition` |
| Create custom role | `az role definition create --role-definition role.json` | `New-AzRoleDefinition -InputFile role.json` |

### Policy

| Task | Azure CLI | PowerShell |
|---|---|---|
| List policy definitions | `az policy definition list` | `Get-AzPolicyDefinition` |
| Create policy assignment | `az policy assignment create --policy <def-id> --scope /subscriptions/<sub-id>` | `New-AzPolicyAssignment -PolicyDefinition $def -Scope "/subscriptions/<sub-id>"` |
| Check compliance | `az policy state summarize` | `Get-AzPolicyState` |
| Trigger evaluation | `az policy state trigger-scan --resource-group myRG` | `Start-AzPolicyComplianceScan -ResourceGroupName myRG` |

### Resource Management

| Task | Azure CLI | PowerShell |
|---|---|---|
| Create resource group | `az group create --name myRG --location eastus` | `New-AzResourceGroup -Name myRG -Location eastus` |
| Delete resource group | `az group delete --name myRG --yes --no-wait` | `Remove-AzResourceGroup -Name myRG -Force` |
| List resources in RG | `az resource list --resource-group myRG --output table` | `Get-AzResource -ResourceGroupName myRG` |
| Move resources | `az resource move --ids <resource-id> --destination-group newRG` | `Move-AzResource -ResourceId <id> -DestinationResourceGroupName newRG` |
| Apply tag | `az tag update --resource-id <id> --operation merge --tags Dept=Finance` | `Update-AzTag -ResourceId <id> -Tag @{Dept="Finance"} -Operation Merge` |
| Create lock | `az lock create --name noDelete --lock-type CanNotDelete --resource-group myRG` | `New-AzResourceLock -LockName noDelete -LockLevel CanNotDelete -ResourceGroupName myRG` |
| Delete lock | `az lock delete --name noDelete --resource-group myRG` | `Remove-AzResourceLock -LockName noDelete -ResourceGroupName myRG` |

### Deployments (ARM/Bicep)

| Task | Azure CLI | PowerShell |
|---|---|---|
| Deploy ARM template | `az deployment group create --resource-group myRG --template-file azuredeploy.json` | `New-AzResourceGroupDeployment -ResourceGroupName myRG -TemplateFile azuredeploy.json` |
| Deploy Bicep | `az deployment group create --resource-group myRG --template-file main.bicep` | `New-AzResourceGroupDeployment -ResourceGroupName myRG -TemplateFile main.bicep` |
| Export a deployment | `az deployment group export --name myDeploy --resource-group myRG` | `Export-AzResourceGroup -ResourceGroupName myRG` |
| Decompile ARM → Bicep | `az bicep decompile --file azuredeploy.json` | _(no PowerShell equivalent — use CLI)_ |
| Build Bicep → ARM | `az bicep build --file main.bicep` | _(no PowerShell equivalent — use CLI)_ |

---

## CLI Pattern Recognition

> [!tip] How to guess the right command
> Azure CLI follows a consistent pattern: `az <service> <action> --<flags>`
>
> ```
> az vm create          → create a VM
> az vm list            → list VMs
> az vm delete          → delete a VM
> az vm start           → start a VM
> az vm restart         → restart a VM
> az vm deallocate      → stop + deallocate a VM
> az vm resize          → change VM size
> ```
>
> Same pattern for `az group`, `az storage`, `az network`, `az policy`, `az role`, etc.

---

## PowerShell Pattern Recognition

> [!tip] PowerShell verb-noun convention
> PowerShell uses `Verb-AzNoun` consistently:
>
> ```
> New-AzVM              → create a VM
> Get-AzVM              → list/get VMs
> Remove-AzVM           → delete a VM
> Start-AzVM            → start a VM
> Restart-AzVM          → restart a VM
> Stop-AzVM             → stop a VM
> Update-AzVM           → modify a VM
> ```
>
> Verbs: `New`, `Get`, `Set`, `Remove`, `Start`, `Stop`, `Restart`, `Update`, `Move`

---

## Related
- [[AZ-104 - Azure Cloud Shell]]
- [[Azure CLI and PowerShell]]
- [[AZ-104 - ARM Templates]]
- [[AZ-104 - Azure RBAC]]
- [[AZ-104 - Governance Azure Policy]]
- [[Resource Locks]]

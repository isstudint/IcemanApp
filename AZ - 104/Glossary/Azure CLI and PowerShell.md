---
tags: [AZ-104, tools, cli, powershell]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Azure CLI and PowerShell

Two command-line tools for managing Azure resources. Both do the same job — different syntax.

| | Azure CLI | Azure PowerShell |
|---|---|---|
| **Syntax style** | Bash-like (`az vm create`) | PowerShell cmdlets (`New-AzVM`) |
| **Cross-platform?** | ✅ Yes (Windows, macOS, Linux) | ✅ Yes (PowerShell 7+) |
| **Best for** | Linux admins, scripting in Bash | Windows admins, PowerShell-native orgs |
| **Available in Cloud Shell?** | ✅ Yes | ✅ Yes |

> [!tip] Exam tip
> The exam usually tests **recognition** — "what does this command do?" — not "write this from scratch." Know the command *families* (e.g., `az vm`, `az group`, `az deployment`), not exact flags.

**Common command patterns (CLI):**
```bash
az group create --name myRG --location eastus
az vm create --resource-group myRG --name myVM --image Ubuntu2204
az group delete --name myRG --yes --no-wait
```

---

## Related
- [[AZ-104 - Azure Cloud Shell]]
- [[AZ-104 - ARM Templates]]

---
tags:
  - AZ-104
  - cloud-shell
  - tools
last-reviewed: 2026-08-08
status: needs-review
domain: identity-governance
---

# Azure Cloud Shell

## What It Is

A **browser-based command-line environment** for managing Azure resources (VMs, storage, networking) — same capabilities as Azure CLI or PowerShell, but nothing to install.

- Microsoft manages it — always the latest CLI/PowerShell versions, no manual updates
- Fully authenticated with your account's permissions the moment you sign in
- Compliant with double encryption at rest by default, no setup required
- Comes with **persistent cloud storage** (via Azure file share) to save scripts, SSH keys, and files between sessions
- Built-in **Cloud Shell editor** for editing files directly (`code filename` command)

> [!tip] Mental model
> Cloud Shell = your admin toolkit accessible from *any* browser, anywhere — for when you're not at your usual admin machine but still need to fix something.

---

## When to Use It

> [!success] Good use cases
> - Quick command-line session from any device with a browser
> - No plug-ins/add-ons to install
> - Persisting files (scripts, SSH keys) between sessions
> - Choice of **Bash or PowerShell**
> - Editing scripts on the fly via the Cloud Shell editor

> [!fail] When NOT to use it
> - **Long-running sessions** — disconnects after ~20 minutes idle, losing session state
> - Need **sudo/admin permissions** inside the CLI/PowerShell environment
> - Need to install tools **not supported** in the limited environment (need a custom VM/container instead)
> - Need storage in **multiple regions** — Cloud Shell storage is tied to one region only
> - Need **multiple concurrent sessions** — only one instance at a time, not built for working across multiple subscriptions/tenants simultaneously

---

## Real-World Scenario (from the lesson)

You're on call, away from your admin workstation (visiting family, laptop only, browser access). A VM becomes unresponsive during maintenance and the dev team can't fix it themselves (no access to underlying infrastructure).

**Fix:** Browse to the Azure portal → authenticate → open Cloud Shell → mount your Azure File Share → access your diagnostic scripts → remediate the VM.

> [!question]- Why does this scenario matter for the exam?
> It's the classic justification question: "an admin needs to manage Azure from an unfamiliar device with no tools installed — what should they use?" → **Azure Cloud Shell**.

---

## Persisting Files: CloudDrive & File Shares

- Cloud Shell auto-mounts a storage location called **`clouddrive`**, backed by an **Azure File Share**
- Files uploaded/created persist across sessions — close Cloud Shell, reopen later (even on a different device), and your files are still there
- You can **Upload** / **Download** files directly through the Cloud Shell toolbar
- To edit a file: click the **`{}`** (curly brace) icon, or run:
  ```bash
  code temp.txt
  ```

> [!warning] Region limitation
> The file share is tied to **one specific Azure region**. If you need cross-region access, Cloud Shell alone isn't the right tool — this is also one of the "when not to use it" reasons above.

---

## Built-In Tools (pre-installed, no setup needed)

| Category | Examples |
|---|---|
| Linux tools | bash, zsh, sh, tmux, dig |
| Azure tools | Azure CLI, AzCopy, Azure Functions CLI, Service Fabric CLI |
| Text editors | code (Cloud Shell editor), vim, nano, emacs |
| Source control | git |
| Build tools | make, maven, npm, pip |
| Containers | Docker Machine, kubectl, Helm, DC/OS CLI |
| Databases | MySQL client, PostgreSQL client, sqlcmd, mssql-scripter |
| Other | iPython, Terraform, Ansible, Chef InSpec, Puppet Bolt, Office 365 CLI |

> [!tip] Why this matters
> Cloud Shell isn't just for native Azure tools — it comes preloaded with popular **third-party** tools (Terraform, Ansible, Docker, Kubernetes) so you don't have to manage those installs yourself either.

---

## Quick Quiz

> [!question]- Q1: You need to leave a script running for 45 minutes unattended in Cloud Shell. Will this work?
> No — Cloud Shell disconnects after about **20 minutes of inactivity**, and the session state is lost. Use a different environment (e.g., a VM) for long-running tasks.

> [!question]- Q2: What happens to your files if you close a Cloud Shell session and open a new one later, even from a different device?
> They persist — Cloud Shell stores files via **CloudDrive**, backed by an Azure File Share, so files are available across sessions and devices.

> [!question]- Q3: You need sudo access to install a custom tool inside your CLI session. Should you use Cloud Shell?
> No — Cloud Shell doesn't grant admin/sudo permissions inside the environment. Use a VM or container instead.

> [!question]- Q4: Can you work across two different subscriptions/tenants at the same time in Cloud Shell?
> No — Cloud Shell only supports **one instance at a time**, not concurrent multi-subscription/tenant sessions.

> [!question]- Q5: What two shell environments can you choose between in Cloud Shell?
> **Bash** or **PowerShell**.

---

## Key Takeaways

- Cloud Shell = browser-based CLI, no install, always up to date, tied to your account's permissions
- Great for: quick tasks, no-tools-installed emergencies, cross-device access, scripting with persisted files
- Bad for: long-running scripts (20 min timeout), sudo access, unsupported tools, multi-region storage, concurrent sessions
- Files persist via **CloudDrive** (Azure File Share), scoped to a single region
- Comes preloaded with both Microsoft tools (Azure CLI, AzCopy) and third-party tools (Terraform, Docker, kubectl, Ansible)

---

## Related
- [[Azure CLI and PowerShell]]
- [[AZ-104 - Lab 01 Entra ID Identities]]

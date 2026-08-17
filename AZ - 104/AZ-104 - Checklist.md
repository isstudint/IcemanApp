---
tags: [AZ-104, checklist]
last-reviewed: 2026-08-08
status: reference
domain: identity-governance
---

# AZ-104 Checklist — Do This In Order
*(verified against live MS Learn pages, matched to Anand Rao Nednur's course)*

## Verified MS Learn Structure (28 modules, 6 paths — confirmed, locked in)

1. **Prerequisites** (2 modules) — Cloud Shell, ARM templates w/ VS Code
2. **Identities & Governance** (6 modules) — Entra ID, user/group accounts, subscriptions & tags, Azure Policy, RBAC, SSPR
3. **Storage** (4 modules) — Storage accounts, Blob storage, Storage security (SAS), Azure Files/File Sync
4. **Compute** (5 modules) — VMs intro, VM availability, App Service plans, App Service (deployment slots), Container Instances
5. **Networking** (8 modules) — VNets/subnets, NSGs, DNS, VNet peering, routes/UDR, Load Balancer, Application Gateway, Network Watcher
6. **Monitor & Backup** (3 modules) — file/folder backup, VM backup, Azure Monitor

No more guessing — this is the real structure. Everything below is built on it.

## Golden Rule for every topic
```
MS Learn module (real terms, explained) → Anand section (same topic, watch how it's done) → Lab → Memory check → Notes
```
MS Learn leads because it defines terms as it introduces them — that's your actual gap with Anand's course. Anand follows immediately after, same topic, now that the vocabulary already makes sense — so his video becomes "oh that's what that looks like in the portal" instead of "wait what does that word mean."

Rule: don't move to the next number until you pass the "before you move on" check. No skipping ahead.

---

## 0. Setup (do once)
- [x] Create free Azure account (student/free tier) ✅ 2026-07-25
- [x] Create 2 blank Obsidian notes: **Glossary** and **Trap List** ✅ 2026-07-25

**Before you move on:** you have an Azure portal you can log into.

---

## 1. Prerequisites (MS Learn: 2 modules, ~1hr)
- [x] MS Learn: **Get started with Azure Cloud Shell** ✅ 2026-07-27
- [x] MS Learn: **Deploy Azure infrastructure with ARM templates** ✅ 2026-07-27
- [x] Anand sections 01–02 (Intro, Azure Services Overview) — hands-on reinforcement ✅ 2026-07-28

**Before you move on:** you can name 5 core Azure service categories, and you know what Cloud Shell is for (you already have solid notes on this).

---

## 2. Identities & Governance (MS Learn: 6 modules, ~4hr 24min)
- [x] MS Learn: **Understand Microsoft Entra ID** ✅ 2026-07-28
- [x] MS Learn: **Create, configure, and manage identities** ✅ 2026-08-04
- [x] MS Learn: **Configure Azure subscriptions** (cost mgmt, tags) ✅ 2026-08-04
- [x] MS Learn: **Implement Azure Policy** ✅ 2026-08-05
- [x] MS Learn: **Configure secure access with RBAC** ✅ 2026-08-07
- [x] MS Learn: **Implement self-service password reset (SSPR)** ✅ 2026-08-07
- [ ] Anand sections 03–05 (IAM, Governance, Administration) — hands-on reinforcement
- [x] Do Lab 01 (Entra ID Identities) — done ✅ ✅ 2026-08-04
- [x] Do Lab 02a (Subscriptions and RBAC) ✅ 2026-08-05
- [ ] Do Lab 02b (Azure Policy)
- [ ] Do Lab 03 (ARM Templates)
- [ ] **Memory check:** close everything. From memory, create a user, a security group, assign an RBAC role, and set a resource lock.

**Before you move on, answer without notes:**
- Native user vs guest user — what's the difference?
- Security group vs Microsoft 365 group?
- Static vs dynamic membership — what license does dynamic need?
- What 3 things make up an RBAC role assignment (who / what role / what scope)?
- Azure Policy vs RBAC — different jobs, how?
- Management Group → Subscription → Resource Group → Resource — right order?

- [ ] Take MS Learn Practice Assessment — **Identities & Governance section**

---

## 3. Storage (MS Learn: 4 modules, ~3hr 7min)
- [ ] MS Learn: **Configure storage accounts** (replication, endpoints)
- [ ] MS Learn: **Configure Azure Blob Storage** (tiers, object replication)
- [ ] MS Learn: **Configure Azure Storage security** (SAS)
- [ ] MS Learn: **Configure Azure Files and File Sync**
- [ ] Anand section 09 (Azure Storage) — hands-on reinforcement
- [ ] Do Lab 07 (Manage Storage)
- [ ] **Memory check:** create a storage account, set redundancy, generate a SAS token — from memory

**Before you move on:**
- LRS / ZRS / GRS / RA-GRS — difference between GRS and RA-GRS specifically?
- Blob storage vs Azure Files — which supports SMB?
- SAS token vs account access key — different permission scope, how?

- [ ] Take MS Learn Practice Assessment — **Storage section**

---

## 4. Compute (MS Learn: 5 modules, ~3hr 33min)
- [ ] MS Learn: **Introduction to Azure virtual machines**
- [ ] MS Learn: **Configure virtual machine availability**
- [ ] MS Learn: **Configure Azure App Service plans**
- [ ] MS Learn: **Configure Azure App Service** (deployment slots)
- [ ] MS Learn: **Configure Azure Container Instances**
- [ ] Anand sections 10–11 (VMs, Serverless Computing) — hands-on reinforcement
- [ ] Do Lab 08 (Manage VMs), Labs 09a/b/c (Web Apps, Container Instances, Container Apps)
- [ ] **Memory check:** deploy a VM with a public IP and NSG rule — from memory

**Before you move on:**
- Availability Set vs Availability Zone — what's the difference?
- Can you redeploy a VM to a different region? (No — explain why, and what you'd use instead)
- Container Instance vs Container App — one sentence each?

---

## 5. Networking — THE HARD PART (MS Learn: 8 modules, ~4hr 30min)
This is the #1 weak spot across nearly every AZ-104 pass/fail post. Go slower here than anywhere else.

- [ ] MS Learn: **Configure virtual networks** (subnets, IP addressing)
- [ ] MS Learn: **Configure network security groups**
- [ ] MS Learn: **Host your domain on Azure DNS**
- [ ] MS Learn: **Configure Azure Virtual Network peering**
- [ ] MS Learn: **Manage traffic flow with routes** (UDR)
- [ ] MS Learn: **Introduction to Azure Load Balancer**
- [ ] MS Learn: **Introduction to Azure Application Gateway**
- [ ] MS Learn: **Introduction to Azure Network Watcher**
- [ ] Anand sections 06–08 (Virtual Networking, Interconnectivity, Network Traffic Management) — hands-on reinforcement
- [ ] Do Lab 04, 05, 06
- [ ] **Memory check (do this twice, days apart):** from memory, build a VNet with 2 subnets, an NSG with a custom rule, peer it to a second VNet, and set up a Load Balancer. No instructions open.

**Before you move on, answer without notes:**
- NSG rules — processed by priority, does Deny always win?
- Can two VNets with overlapping IP ranges peer?
- Is VNet peering transitive or non-transitive?
- Private Endpoint vs Service Endpoint — difference?
- What's a UDR and when would you use one over the system default route?
- What does Application Gateway do that a basic Load Balancer doesn't? (Layer 7 vs Layer 4)
- What does Network Watcher actually do?

If any of these are shaky → do not move on. This is the section that fails people, including experienced IT folks whose day job didn't touch networking much.

- [ ] Take MS Learn Practice Assessment — **Networking section**

---

## 6. Monitor & Backup (MS Learn: 3 modules, ~1hr 28min)
- [ ] MS Learn: **Configure file and folder backups**
- [ ] MS Learn: **Configure Virtual Machine backups**
- [ ] MS Learn: **Monitor your Azure infrastructure**
- [ ] Anand sections 12–13 (Data Protection, Monitoring) — hands-on reinforcement
- [ ] Do Lab 10, Lab 11

**Before you move on:**
- Soft Delete vs Backup — difference?
- Can you change a Backup Vault's region after creation?
- Metric vs log in Azure Monitor — difference?

---

## 7. Anand's Bonus Sections (14, 16)
- [ ] Skim section 14 (2021 Updates) for anything outdated — cross-check against MS Learn if something looks off
- [ ] Go through section 16 (exam prep material) as review, not new learning

---

## 8. Diagnostic Checkpoint
- [ ] Take the **full** MS Learn Practice Assessment
- [ ] Compare against your per-domain scores from Steps 2–6 — which domains are still weak?

**Before you move on:** redo the weakest 1–2 domains before continuing.

---

## 9. The Final Boss Lab
One lab, no instructions, everything you've learned in one build:
```
Resource Group → VNet → 2 Subnets → Windows VM → Linux VM →
NSG → Storage Account → RBAC assignment → Backup → Monitor alert → Delete everything
```
- [ ] Build it from memory, start to finish. Wherever you get stuck is your last weak spot — fix it specifically.

---

## 10. Practice Exam Drilling
- [ ] Buy Tutorials Dojo (~$15)
- [ ] Run all 5 domain-specific practice exams in **Review Mode** first
- [ ] For every wrong answer: why it was wrong + why the right one was right → into Trap List
- [ ] Once each domain scores 75%+, switch to **Timed Mode**, full practice exams
- [ ] Add a **second platform** (Measure Up or FetchExam, ~$15–20) once TD feels comfortable — multiple Reddit posts specifically said one platform alone leaves blind spots a second one catches
- [ ] Optional: John Christopher's free voucher as extra practice questions only, not theory

**Before you move on:** consistently scoring 80%+ on timed full exams across both platforms.

> [!tip] Spaced review of Trap List (don't wait until Final Week)
> Starting from Step 2 onward, briefly reread your whole Trap List once a week, not just at the end. One Reddit poster who scored 800 used Anki flashcards for exactly this reason — traps logged in week 3 fade by week 10 if you never touch them again until the final week.

---

## 11. Final Week
- [ ] Review Trap List daily
- [ ] Watch MS Learn Exam Readiness Zone videos
- [ ] Practice reading case-study answer options before the full scenario text
- [ ] Schedule exam after lunch, not first thing morning
- [ ] Sleep well, don't cram the night before

> [!warning] Exam navigation quirk (from a real test-taker report)
> On at least one reported exam layout, once you move from the multiple-choice section into the case-study section, **you cannot go back** to review earlier answers. Don't assume you can revisit anything — mark questions for review and finalize your answer before moving on, and budget your time assuming sections may be one-way.

---

## Related
- [[AZ-104 - Lab 01 Entra ID Identities]]
- [[AZ-104 - Azure Cloud Shell]]
- [[AZ-104 - Entra ID & Tenants Overview]]
- [[Resource Locks]]
- [[Cost Management]]

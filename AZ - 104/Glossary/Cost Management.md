---
tags: [AZ-104, governance, cost-management]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Cost Management (Budgets, Alerts & Azure Advisor)

## The Problem This Solves

Cloud costs can spiral out of control fast — a forgotten VM, an oversized database, a developer testing something expensive over the weekend. You need **visibility** (what are we spending?), **alerts** (tell me when it's too much), and **recommendations** (where can we save?).

**Analogy:** Cost Management is your monthly bank statement + spending alerts + a financial advisor, all in one. Budgets set the spending limit, alerts notify you when you're approaching it, and Advisor tells you where you're wasting money.

---

## ⚡ Key Distinctions

| Concept A | vs | Concept B | Key Difference |
|---|---|---|---|
| Budget alert | vs | Credit alert | Budget = you set a threshold; Credit = Azure credits running low |
| Azure Advisor | vs | Azure Monitor | Advisor = cost/performance recommendations; Monitor = metrics/logs/alerts on resource health |
| Tags | vs | Cost Management | Tags *label* resources for filtering; Cost Management *analyzes* costs using those labels |

---

## 1. Budgets

**Definition:** A spending limit you set on a **subscription** or **resource group** scope. Budgets don't *block* spending — they **alert** you when thresholds are approaching or exceeded.

- Set at: subscription, resource group, or management group level
- Alert thresholds: e.g., notify at 50%, 75%, 90%, 100% of budget
- Can trigger **Action Groups** to automate responses (e.g., send an email, shut down VMs)
- Budgets reset monthly/quarterly/annually based on your configuration

> [!warning] Exam trap
> **Budgets do NOT stop spending.** They only send alerts. If you need to actually *prevent* spend, you need a different mechanism (spending quotas at the subscription level, or automation triggered by budget alerts).

---

## 2. Cost Alerts

Three types:

| Alert Type | What triggers it | Scope |
|---|---|---|
| **Budget alerts** | Spending reaches a threshold you defined | Subscription or RG |
| **Credit alerts** | Azure credit balance drops below a threshold (Enterprise Agreement / MCA) | Billing account |
| **Department spending quota alerts** | Department spending exceeds a fixed threshold | Department (EA only) |

---

## 3. Azure Advisor Cost Recommendations

Azure Advisor continuously analyzes your usage and generates cost-saving suggestions:

- **Right-size or shut down underutilized VMs** — flags VMs with low CPU/memory usage
- **Buy Reserved Instances** — identifies workloads that would save money with 1-year or 3-year reservations
- **Delete unattached disks** — orphaned managed disks still billing even though no VM is using them
- **Delete unused public IPs** — static IPs cost money even when unattached

> [!tip] Pattern connection
> Azure Advisor's *security* recommendations come from **Microsoft Defender for Cloud** (formerly Azure Security Center). Its *cost* recommendations come from **Cost Management**. Same Advisor dashboard, different data sources behind the scenes. You covered this relationship in [[AZ-104 - Azure Services Overview]].

---

## How Tags + Cost Management Work Together

1. Tag resources with metadata (e.g., `Department: Marketing`, `Environment: Prod`)
2. Open Cost Management → filter/group costs by tag
3. Result: a breakdown showing exactly how much each department or environment is spending

> [!warning] Exam trap
> **Tags do NOT inherit** from a resource group to its resources by default. If you want all resources in an RG to have the same tag, you need **Azure Policy** to enforce it (e.g., the `Inherit a tag from the resource group` built-in policy).

---

## Quick Quiz

> [!question]- Q1: You set a budget of $1,000/month on a subscription. A developer deploys a VM that pushes spend to $1,200. What happens?
> **Nothing blocks the deployment.** The budget alert fires (if configured), but spending continues. Budgets alert, they don't prevent.

> [!question]- Q2: What's the difference between a budget alert and a credit alert?
> Budget alert = you define the threshold. Credit alert = triggered when Azure credits (from an EA or credit-based subscription) are running low.

> [!question]- Q3: Azure Advisor flags a VM as "underutilized." What does it typically recommend?
> Right-size (downgrade to a smaller VM size) or shut it down to save costs.

> [!example]- Scenario: Finance wants to see Azure costs broken down by department, but currently all resources are untagged. What's the admin's first step?
> **Apply tags** to resources (manually or via Azure Policy), then use Cost Management to filter/group by those tags.

---

## Related
- [[AZ-104 - Azure Architectural Components]]
- [[AZ-104 - Governance Azure Policy]]
- [[AZ-104 - Azure Services Overview]]
- [[Resource]]

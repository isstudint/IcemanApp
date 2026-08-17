---
tags: [AZ-104, fundamentals, resources]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

## Azure Resources: Quick Summary

An Azure Resource is any individual service item you create, deploy, and manage in Microsoft Azure. It is the basic building block of your cloud infrastructure.

## 📌 Key Facts

- What it is: An instance of a service (e.g., a virtual machine or database).
- Where it lives: Every resource must belong to exactly one Resource Group.
- Lifecycle: Resources in the same group usually share the same lifespan (created and deleted together).

## 🏗️ Everyday Examples

- Compute: Virtual Machines (VMs)
- Storage: Storage Accounts (for files and data)
- Database: Azure SQL Databases
- Networking: Virtual Networks (VNets)

## 📊 The Azure Hierarchy

1. Management Groups (Top-level governance)
2. Subscriptions (Billing & access limits)
3. Resource Groups (Folders to organize items)
4. Resources (The actual items listed above)

---
Resource groups are groupings of resources. Every resource must belong to exactly one resource group. You can move some resources between groups, but a resource is only associated **with one group at a time**. **Resource groups can't be nested**, and they can't be renamed after creation, so choose a clear naming convention from the start.
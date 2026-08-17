---
tags: [AZ-104, identity, entra-id, tenants]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Entra ID & Tenants Overview

Here's my take: **This page introduces Microsoft Entra ID (formerly Azure Active Directory), which is the identity and access backbone for all Microsoft Cloud services.**

## 📌 Core Study Notes: Microsoft Entra ID

### 1. What is Microsoft Entra ID?

- **Identity as a Service (IDaaS):** It is a cloud-based identity and access management service managed completely by Microsoft.
    
- **Key Difference from On-Premises AD DS (Active Directory Domain Services):**
    
    - **On-Prem AD DS:** Uses traditional protocols (Kerberos, NTLM, LDAP) to manage local servers, desktop computers, and Group Policies (GPOs).
        
    - **Microsoft Entra ID:** Uses web/cloud protocols (SAML, OAuth 2.0, OpenID Connect) to manage identity, cloud apps (Microsoft 365, SaaS apps), and modern devices.
        

### 2. Core Capabilities

- **Single Sign-On (SSO):** Log in once to access multiple cloud applications without re-typing credentials.
    
- **Multi-Factor Authentication (MFA):** Requires extra verification steps (authenticator app, SMS, push notification) during login.
    
- **Conditional Access:** Grants or blocks access to applications based on specific conditions (e.g., user location, device compliance, risk level).
    
- **Self-Service Password Reset (SSPR):** Allows users to reset their own passwords safely without calling helpdesk.
    

## 🏢 Tenants vs. Microsoft Entra Tenants

### What is a Tenant?

Think of a **tenant** in real estate: an apartment building where multiple families live independently. In cloud computing, a **tenant** represents an isolated instance of a service reserved exclusively for one organization.

An Azure tenant is ==a dedicated, secure instance of [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/create-new-tenant) (formerly Azure Active Directory) that represents your organization==
### What is a Microsoft Entra Tenant?

A **Microsoft Entra Tenant** is a dedicated, secure, and isolated instance of Microsoft Entra ID created when an organization signs up for a Microsoft cloud service (such as Azure, Microsoft 365, or Intune).

- **Boundary:** It serves as the identity security boundary for users, groups, devices, and application registrations.
    
- **Domain Name:** Every tenant gets a default domain ending in `.onmicrosoft.com` (e.g., `company.onmicrosoft.com`), but you can attach custom domains (e.g., `company.com`).
    
- **Multi-Tenant Architecture:** Microsoft hosts millions of Entra tenants on shared cloud infrastructure, but strict data isolation ensures Tenant A cannot see or access Tenant B's data.
    

## 🔗 How Tenants Connect to Azure Subscriptions

- **1 Tenant : Many Subscriptions**
    
    - **Rule:** A single Microsoft Entra tenant can be linked to **multiple** Azure Subscriptions.
        
    - **Rule:** An Azure Subscription can only trust **one** Microsoft Entra tenant at a time for identity authentication.
        

Plaintext

```
               [ Microsoft Entra Tenant ]
                (Users, Groups, Roles)
                          │
         ┌────────────────┴────────────────┐
         ▼                                 ▼
[ Production Subscription ]     [ Development Subscription ]
(VMs, Storage, Databases)       (VMs, App Services, Test DBs)
```

## 💡 Real-World Use Cases & Examples

### Use Case 1: The Modern Enterprise

- **Scenario:** Contoso Corporation uses Microsoft 365 for email and Azure to host their ecommerce app.
    
- **Entra Tenant:** `contoso.onmicrosoft.com`
    
- **Implementation:**
    
    - When an employee (`john@contoso.com`) logs into Azure, Entra ID verifies his password, triggers an MFA prompt on his phone, and grants him access to his assigned resource groups.
        

### Use Case 2: Multi-Tenant Test Environment Isolation

- **Scenario:** A software company wants to test a major identity configuration change without risking their live production user accounts.
    
- **Implementation:**
    
    - They create two separate Entra tenants: **`contoso-prod.onmicrosoft.com`** and **`contoso-dev.onmicrosoft.com`**.
        
    - Any mistake made during testing in the Dev tenant will not impact employees or identity rules in the Production tenant.
        

## 🎯 Quick Exam Recap Questions

- **Does an Entra Tenant cost money to create?**
    
    - **No.** Every new Azure subscription automatically includes a free tier of Microsoft Entra ID. Advanced features (like P1 or P2 licenses for Conditional Access) cost extra.
        
- **Can you manage local Group Policy Objects (GPOs) with Microsoft Entra ID?**
    
    - **No.** GPOs are an on-premises Active Directory (AD DS) feature. Entra ID relies on modern device management solutions like Microsoft Intune.





To make your notes 100% complete and official, here is how you can polish and extend your summary:

## 📝 Complete Notes: The Tenant & Domain Analogy

### 1. The Analogy Breakdown

- **The Organization / Tenant:** **`iceman.com`** is the entire "apartment building" (the isolated boundary in the cloud).
    
- **The Domain Name:** **`iceman.com`** is the address sign on the front door.
    
- **The Users / Accounts:** **`john@iceman.com`**, **`mary@iceman.com`**, and **`admin@iceman.com`** are the residents living inside that building. They share the same address suffix because they belong to the same tenant.
    

### 2. Completed Concept Statements (Fill-in-the-Blank)

If you're writing this down in your study notebook, here are the completed, technical sentences to finalize your notes:

- _"A **Microsoft Entra tenant** represents a single organization (like **`iceman.com`**) and acts as a secure, dedicated identity container in the Microsoft Cloud."_
    
- _"Every user account created inside that tenant gets an identity formatted as **`user@iceman.com`**, allowing them to authenticate into the organization's cloud resources."_
    
- _"Even though millions of tenants exist on Microsoft's shared global infrastructure, strict **data isolation** ensures that people from **`anotherbuilding.com`** cannot enter or view resources inside **`iceman.com`** without explicit permission."_
    

### 3. What You Were Missing (Advanced Addition)

To make your notes completely comprehensive for your exam, add these **two extra edge cases**:

1. **Guest Users (B2B / Business-to-Business):**
    
    - _Analogy:_ Inviting a guest into your apartment building.
        
    - _Concept:_ An admin at `iceman.com` can invite a contractor from `partner.com` (`alex@partner.com`) as a **Guest User**. Alex keeps his original email key card, but is granted temporary visitor access to specific rooms inside `iceman.com`.
        
2. **Default vs. Custom Domains:**
    
    - _Concept:_ When you first create an Azure tenant, Microsoft automatically assigns a temporary domain name like **`iceman.onmicrosoft.com`**.
        
    - _Custom Domain:_ Once you buy your real domain name (`iceman.com`), you link it to the tenant so your users don't have to type `.onmicrosoft.com` every time they sign in.
        

### 💡 Single-Sentence Takeaway for Your Notes

> _"A **Tenant** is the organization container (`iceman.com`), **Users** are the individual identity accounts inside it (`user@iceman.com`), and **Subscriptions** are the resource billing accounts linked to that tenant."_

---

## Related
- [[Microsoft Entra ID]]
- [[Azure Tenant]]
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[AZ-104 - Create Configure Manage Identities]]
- [[Entra ID Licensing Tiers]]
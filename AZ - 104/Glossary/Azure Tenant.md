---
tags: [AZ-104, fundamentals, tenants]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---


# 🏢 Azure Tenant & Microsoft Entra ID Notes

## 1. The Apartment Building Analogy

- **Microsoft Cloud Infrastructure:** The entire city or apartment complex.
    
- **The Tenant / Organization (`iceman.com`):** Your private, dedicated apartment building (the secure boundary in the cloud).
    
- **The Domain Name:** The street address sign posted on the front of the building so everyone knows which organization it is.
    
- **The Users (`john@iceman.com`):** The residents living inside the building who hold individual keycards.
    
- **The Global Admin:** The head building manager with master keys to all rooms and settings inside the building.
    
- **Azure Subscription:** The utility or electric bill account linked to the building for resources consumed.
    

## 🔑 2. Key Rules & Technical Concepts

- **Tenant = Container (Not a Person):** A tenant is a dedicated instance of Microsoft Entra ID that holds users, groups, apps, and permissions. An admin is just a user account _inside_ that tenant with elevated privileges.
    
- **Security & Data Isolation:** Everything inside one tenant is completely isolated from other tenants. People from outside cannot enter unless invited as a **Guest User (B2B)**.
    
- **Tenant vs. Subscription Relationship:**
    
    - One Tenant can manage **many** Azure Subscriptions (e.g., _Dev_, _Test_, _Prod_).
        
    - One Azure Subscription can trust **only one** Entra ID Tenant at a time for authentication.
        
- **Azure RBAC vs. Entra Roles:**
    
    - **Azure RBAC** (Owner, Contributor) manages Azure resources (VMs, networks, storage).
        
    - **Entra ID Roles** (Global Admin, User Admin) manage cloud identities and user permissions.
        
- **Default vs. Custom Domains:**
    
    - **Default Domain:** Created automatically when setting up a tenant (e.g., `company.onmicrosoft.com`).
        
    - **Custom Domain:** Verified custom address (e.g., `iceman.com`) used so users have clean email addresses.
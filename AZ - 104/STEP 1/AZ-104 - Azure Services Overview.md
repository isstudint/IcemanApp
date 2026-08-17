---
tags: [AZ-104, azure-overview, prerequisites]
last-reviewed: 2026-08-08
status: in-progress
domain: identity-governance
---

# Azure Services Overview

## What Azure Actually Is
**Definition:** A collection of online services for building, hosting, and delivering applications — hosted in Microsoft's data centers, accessed over the internet. You pay for what you use and scale up/down as needed.

**Analogy:** Like renting an apartment instead of building a house. You don't own the building, you don't fix the plumbing, you just pay for the space you use and can move to a bigger or smaller unit whenever your needs change.

**Example situation:** A startup needs a website live by next week. Buying servers, racking them, installing an OS — takes weeks. Spinning up an Azure VM or App Service — takes minutes.

Most applications need three core elements: **Compute**, **Storage**, **Networking**. Everything else (AI, DevOps, IoT, analytics) sits on top of these three.

---

## 1. Compute Options

### Virtual Machines (VMs) — IaaS
**Definition:** Full Windows/Linux servers you control, running on Microsoft's hardware.

**Analogy:** Renting an empty apartment — you bring your own furniture, decide the layout, and you're responsible for everything inside it. The landlord (Azure) just handles the building itself.

**Example situation:** Your company has an old accounting app that only runs on a specific Windows Server setup. It can't be rewritten right now. You "lift and shift" — move it as-is onto an Azure VM instead of a physical on-prem server.

---

### App Service — PaaS
**Definition:** A platform that hosts web/mobile apps without you managing the underlying OS or infrastructure.

**Analogy:** Renting a furnished apartment with utilities included — you just move your stuff in (your code) and live there. You don't fix the boiler or repaint the walls.

**Example situation:** A developer has a finished web app and just wants it live. Upload the code to App Service, done — no server setup, no OS patching, no infrastructure decisions.

---

### Containers / ACI / AKS
**Definition:** A container packages an app + everything it needs to run (dependencies, libraries) — but *not* a full OS, unlike a VM. ACI runs a single container easily; AKS orchestrates many containers together.

**Analogy:** A container is like a shipping container — standardized, self-contained, and it runs the same way no matter which ship (server) it's loaded onto. A VM is more like a whole cargo ship — much heavier, includes its own engine (OS) even if you only needed to move one container's worth of goods.

**Example situation:** A team has 15 microservices that need to talk to each other, scale independently, and restart automatically if one crashes. That coordination complexity is exactly what AKS (Kubernetes) exists to manage — ACI alone can't orchestrate that many moving pieces.

---

### Azure Functions — Serverless
**Definition:** Runs individual pieces of code triggered by events. On a Consumption plan, you only pay while the function is actually executing.

**Analogy:** A vending machine instead of a 24-hour store. The store (App Service) is staffed and costs money the whole time it's open, whether or not customers show up. The vending machine (Functions) only "does work" — and only costs anything — the moment someone presses a button.

**Example situation:** A file gets uploaded to Blob Storage once a day. You need a small piece of code to resize the image when that happens — nothing needs to run the other 23 hours and 59 minutes. Functions is built exactly for that.

> [!tip] Memory hook
> IaaS (VMs) = you manage the OS. PaaS (App Service) = Azure manages the OS, you manage the app. Serverless (Functions) = you don't even think about servers, just code that runs on trigger.

---

## 2. Storage Options

### Blob Storage
**Definition:** Object storage with a flat structure (no folders) — good for unstructured data like images, videos, logs. Has Hot / Cool / Archive access tiers.

**Analogy:** A giant self-storage warehouse with labeled bins, not a filing cabinet with folders. You grab what you need by its label (a URL/key), not by navigating a folder tree. Hot tier = a bin near the front door (fast, costs more to keep there). Archive tier = a bin in a locked vault three towns over (cheap to store, expensive and slow to retrieve).

**Example situation:** Your app needs to store thousands of user-uploaded profile pictures. You don't need folder hierarchy, just fast retrieval by ID — that's Blob, Hot tier. Old audit logs you're legally required to keep for 7 years but almost never open — that's Blob, Archive tier.

---

### Azure Files
**Definition:** SMB-based file shares you can mount like a network drive.

**Analogy:** A shared network drive at the office, just hosted in the cloud instead of a server in the closet.

**Example situation:** Multiple VMs need to read/write to the same shared folder of config files, the way they would with a traditional office file server.

---

### Azure SQL Database / MySQL / PostgreSQL / MariaDB
**Definition:** Managed relational (SQL) databases — structured tables with defined relationships between them.

**Analogy:** A perfectly organized spreadsheet system where every sheet has strict, defined columns, and sheets are linked by ID (like a customer ID showing up in both the "Customers" sheet and the "Orders" sheet).

**Example situation:** An e-commerce site needs to reliably track exact inventory counts, customer orders, and payments — where consistency and accuracy (not raw scale) is the priority. That's SQL Database territory.

---

### Cosmos DB — NoSQL
**Definition:** A NoSQL database designed for massive global scale, sacrificing some relational features (strict schemas, complex joins) to achieve that scale.

**Analogy:** Instead of one perfectly organized spreadsheet, imagine millions of sticky notes, each independent, that can be read/written instantly from anywhere in the world without needing to check in with a central filing system.

**Example situation:** A global gaming app needs to store player session data with extremely low latency for millions of concurrent users across continents — traditional relational databases can't scale to that without huge cost and complexity. Cosmos DB is built for exactly this.

---

### Azure Cache for Redis
**Definition:** In-memory caching used to speed up applications by storing frequently-requested data somewhere much faster than a database.

**Analogy:** Keeping your most-used tools on your desk instead of walking to the toolshed (the database) every single time you need them.

**Example situation:** A news site's homepage gets hit thousands of times a minute, but the content only changes every few minutes. Instead of querying the database on every single page load, you cache the homepage data in Redis and serve it instantly.

---

## 3. Networking Basics

### VNet (Virtual Network) & Subnets
**Definition:** A VNet is your own private network inside Azure. Subnets divide it into smaller segments.

**Analogy:** A VNet is like your own private office building. Subnets are like separate floors or departments within that building — same building, but organized into logical sections.

**Example situation:** You want your web servers and your database servers in separate segments so you can apply different security rules to each — web servers on one subnet (more open), database servers on another (locked down, no direct internet access).

---

### VNet Peering
**Definition:** Lets VMs in two different VNets communicate with each other.

**Analogy:** Building a private hallway directly between two separate office buildings, instead of routing every visitor out onto the public street to walk between them.

**Example situation:** Your company has a "Production" VNet and a "Shared Services" VNet (holding a central logging server). Peering lets production VMs send logs directly to the shared VNet without going over the public internet.

---

### VPN vs. ExpressRoute
**Definition:** VPN = encrypted traffic over the *public* internet connecting on-prem to Azure. ExpressRoute = a *private, dedicated* physical connection, bypassing the public internet entirely.

**Analogy:** VPN is like sending a locked, armored truck through regular public highways — secure, but still subject to public traffic and congestion. ExpressRoute is like having your own private highway lane built directly to your destination — faster and more predictable, but expensive to build.

**Example situation:** A small business connecting one office to Azure for occasional file access → VPN is enough. A financial trading firm needing consistent, ultra-low-latency, high-throughput connections to Azure for real-time transactions → ExpressRoute, because reliability and speed justify the cost.

---

## 4. Other Service Categories (breadth overview only)

| Category | Service | Analogy / one-liner |
|---|---|---|
| Migration | **Azure Migrate** | A moving-company scout that inspects your on-prem "house" (servers) first, tells you exactly what size Azure "apartment" you'll need and what it'll cost, before you actually move |
| DevOps | **Azure Pipelines** | An assembly line that automatically builds, tests, and ships your code every time you make a change, instead of doing it by hand each time |
| Dev/Test | **Azure DevTest Labs** | A sandbox with a curfew — lets developers spin up test environments freely, but auto-shuts them down so nobody forgets and leaves the meter running |
| Performance | **Azure CDN** | Local warehouses around the world stocking copies of your most popular products, so customers get them from the nearest one instead of one central factory |
| IoT | **IoT Hub / IoT Central / Sphere** | IoT Hub = the switchboard operator managing millions of device connections; Sphere = the security guard making sure those devices can't be hacked |
| Big Data | **HDInsight / Databricks / Synapse** | Different-branded factories that all run on the same core machinery (Apache Spark) for crunching huge datasets |
| AI/ML | **Cognitive Services vs. ML Studio/ML Services** | Cognitive Services = buying a pre-made AI tool off the shelf (e.g. face detection). ML Services = building your own AI tool from raw materials |
| Integration | **Logic Apps** | An "if this, then that" automation — no-code workflows connecting Azure and outside apps (Twitter, Dropbox, email) |

---

## 5. Designing a Solution — Worked Example (e-commerce/ticket site)

**Analogy for the whole architecture:** think of it like a physical retail store chain — the storefront (App Service) is where customers browse, the stockroom (SQL Database) tracks inventory, the checkout queue (Queue Storage) holds orders during a rush so nobody gets turned away, and regional warehouses (CDN, Traffic Manager) make sure nearby customers get served fast instead of everyone routing through one central store.

```
User → App Service (web app)
     → Azure SQL Database (customer/product data)
     → Azure Cognitive Search (site search)
     → Azure AD B2C (customer authentication — B2C = Business to Customer)
     → Queue Storage (buffers incoming orders so traffic spikes don't overwhelm the system)
     → Azure Functions (triggered when an order lands in the queue → sends confirmation email)
     → Blob Storage (stores the ticket file)
     → Cosmos DB / NoSQL (stores customer reviews)
     → Azure Cache for Redis (speeds up search/session data)
     → CDN (caches static site files globally)
     → Traffic Manager (routes users to the closest regional copy of the app)
     → Application Insights (monitors app usage/performance)
     → Cognitive Services sentiment analysis (classifies reviews as positive/negative)
```

> [!tip] The pattern to notice
> Almost every real architecture is: **compute + database + storage + queue + monitoring**, with extras layered on for scale (CDN, Traffic Manager, Cache) and intelligence (Cognitive Services). Recognizing this pattern helps you reason through scenario questions instead of memorizing services in isolation.

Cost isn't fixed — depends on traffic volume, data stored, and implementation size. Use the **Azure Pricing Calculator** to estimate.

---

## 6. Using the Azure Portal (hands-on basics)

### Billing Account vs. Subscription
**Definition:** A billing account is the *agreement* to use Azure. A subscription is a *collection of resources billed together* under that agreement.

**Analogy:** The billing account is your account with the bank. Subscriptions are individual "cards" tied to that account — you might have a separate card (subscription) for the Marketing department and one for Engineering, each with its own itemized statement, but both ultimately billed to the same bank account.

**Example situation:** A company wants Finance's Azure costs kept completely separate from Engineering's for budgeting and compliance reasons — they create two subscriptions under one billing account.

---

### Resource Group
**Definition:** A container for related resources within a subscription. Best practice: group resources with the same lifecycle (created/deleted together).

**Analogy:** A moving box labeled "kitchen stuff" — everything in it belongs together and gets packed/unpacked as one unit, rather than scattering plates and pans across ten different boxes.

**Example situation:** A VM, its network card, its disk, and its public IP are all created together for one project. Put them in one resource group — when the project ends, deleting that one resource group cleanly removes everything, instead of hunting down five separate resources individually.

---

### Region & Availability Zones
**Definition:** A region is a geographic area with Azure datacenters. A region with 3+ datacenters supports Availability Zones — physically separate datacenters within the region.

**Analogy:** A region is a city. Availability Zones are separate buildings in different parts of that city — if one building loses power, the others keep running, because they're not sharing the same electrical grid.

**Example situation:** A critical app needs to survive a single datacenter outage without going down. Deploy VMs across 3 different Availability Zones in the same region — if one zone fails, the other two keep serving traffic.

---

### Tags
**Definition:** Key-value metadata attached to resources (e.g. `Owner: Rob`) — used for cost tracking and ownership identification, not access control.

**Analogy:** A sticky note on a filing cabinet saying "belongs to Finance" — it doesn't lock the cabinet or restrict who can open it, it just tells you whose stuff is inside when you're doing an audit.

**Example situation:** At the end of the month, Finance needs to know exactly how much each department spent on Azure. Every resource is tagged with a department name, and the billing report is filtered/grouped by that tag.

---

### Deleting Cleanly
**Definition:** Deleting a Resource Group removes everything inside it in one action.

**Analogy:** Throwing away the whole labeled moving box instead of digging through it to remove items one at a time.

**Example situation:** A test environment with a VM, NIC, disk, and public IP is no longer needed. Delete the resource group once — done — instead of deleting 4 separate resources and risking leaving an orphaned disk still costing money.

---

## 7. Using Azure CLI (hands-on basics)

**Definition:** A command-line way to create/manage Azure resources, accessible directly from the browser (Cloud Shell) — no local install required.

**Analogy:** Ordering food by texting a specific code to a number vs. scrolling through an app and tapping buttons. Slower to learn the codes at first, but once you know them, it's much faster than navigating menus every time.

**Example situation:** You need to create the exact same VM configuration 50 times for 50 test environments. Clicking through the portal wizard 50 times is painfully slow — a single CLI script (or better, an ARM template) does it in seconds, repeatably.

Deleting cleanly via CLI: `az group delete --name <resource-group-name>` — same principle as deleting via the portal, just faster and scriptable.

---

## 8. Managing & Monitoring Services (governance/operations layer)

### Azure Monitor (+ Application Insights, Log Analytics)
**Definition:** The umbrella monitoring service. Application Insights = detailed app-level telemetry. Log Analytics = long-running/complex queries across logs from multiple resources.

**Analogy:** Azure Monitor is the hospital's central monitoring station. Application Insights is the vital-signs monitor hooked directly to one patient (your app). Log Analytics is the lab that can run complex tests across records from every patient at once.

**Example situation:** Your app suddenly gets slow. Application Insights shows you *which specific function call* is taking too long. Log Analytics lets you query across VM logs, network logs, and app logs together to find out if it's a wider infrastructure issue.

---

### Azure Advisor
**Definition:** Recommends performance, availability, and cost-saving improvements — e.g. flags underutilized VMs.

**Analogy:** A financial advisor who reviews your spending habits and says "you're paying for a gym membership you never use — cancel it or use it."

**Example situation:** You provisioned a large VM for a workload that only ever uses 10% CPU. Advisor flags it and recommends downsizing to save money.

---

### Azure Security Center + Secure Score
**Definition:** Aggregates security posture across subscriptions, generates a Secure Score, surfaces vulnerabilities and threats. Advisor's security tips actually come from here.

**Analogy:** A home security inspector who walks through your house, points out the unlocked windows and disabled cameras, and gives you an overall "how safe is your house" score.

**Example situation:** A compliance audit asks "how secure is your Azure environment, with evidence?" — Secure Score plus its list of specific recommendations is exactly that evidence.

---

### Azure Policy
**Definition:** Enforces compliance rules across your environment. Security Center uses this to judge how compliant you are.

**Analogy:** A building code inspector who won't let you finish construction unless everything meets code — Policy can actively block non-compliant resources from being created, not just report on them afterward.

**Example situation:** Your company requires every storage account to have encryption enabled. A Policy rule blocks anyone from creating a storage account without encryption turned on, instead of relying on people remembering to check a box.

---

### Azure Blueprints
**Definition:** A collection of ARM templates + policies + role assignments, bundled to deploy and govern an entire environment at once, with deployment tracked for auditing.

**Analogy:** A franchise opening kit — not just the blueprint for the building (ARM template), but also the exact operating rules (policies) and who's allowed to work there (permissions), all packaged together so every new location opens identically and compliantly.

**Example situation:** A company needs every new regional office's Azure environment to have the exact same network setup, the exact same security policies, and the exact same access permissions — every time, with zero drift. Blueprints deploy all of that as one bundled, audited package.

> [!tip] The hierarchy to remember
> ARM Template = one recipe. Blueprint = a cookbook combining multiple recipes + the rules for how they must be cooked (policies) + who's allowed in the kitchen (permissions). Advisor pulls its security tips from Security Center. Security Center uses Azure Policy to judge compliance.

---

## Quick Quiz

> [!question]- Q1: Using the apartment analogy, explain the difference between a VM and App Service.
> VM = renting an empty apartment, you furnish and maintain everything inside. App Service = renting a furnished apartment with utilities included, you just move your code in.

> [!question]- Q2: Why is Azure Functions compared to a vending machine instead of a 24-hour store?
> Because it only "runs" (and only costs money) the moment it's triggered, unlike App Service which runs (and bills) continuously whether or not it's being used.

> [!question]- Q3: In the office-building analogy, what does VNet Peering represent?
> A private hallway built directly between two separate office buildings (VNets), letting them communicate without routing through the public internet.

> [!question]- Q4: A financial trading firm needs ultra-low-latency, high-throughput, highly reliable connectivity to Azure. VPN or ExpressRoute, and why?
> ExpressRoute — the private dedicated "highway lane" justifies its cost when speed and reliability are critical, unlike a VPN sharing the public internet's traffic.

> [!question]- Q5: Using the moving-box analogy, why put a VM, its disk, its NIC, and its public IP in the same Resource Group?
> Because they share the same lifecycle (created/deleted together) — like packing everything for one room into one labeled box instead of scattering items across many boxes.

> [!question]- Q6: What's the difference between what Azure Advisor tells you and what Azure Security Center tells you?
> Advisor covers performance, availability, AND cost recommendations broadly. Security Center specifically covers security posture and generates the Secure Score — and Advisor's security tips actually come from Security Center.

> [!question]- Q7: Using the franchise-kit analogy, what makes a Blueprint different from a single ARM template?
> A Blueprint bundles multiple ARM templates plus policies (the rules) plus role assignments (who's allowed access) together, so an entire compliant environment deploys identically every time — not just the infrastructure alone.

---

## Related
- [[AZ-104 - Identity AD DS to Entra ID]]
- [[AZ-104 - Azure Cloud Shell]]
- [[AZ-104 - ARM Templates]]
- [[AZ-104 - Checklist]]

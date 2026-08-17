const DOMAINS = {
  identity:   { name: 'Identities & Governance', short: 'Identity' },
  storage:    { name: 'Implement & Manage Storage', short: 'Storage' },
  compute:    { name: 'Deploy & Manage Compute', short: 'Compute' },
  networking: { name: 'Virtual Networking', short: 'Networking' },
  monitor:    { name: 'Monitor & Maintain', short: 'Monitor' }
};

const QUESTIONS = [
  {
    "id": "topic1_q1",
    "number": "1",
    "question": "Your company has serval departments. Each department has a number of virtual machines (VMs).\nThe company has an Azure subscription that contains a resource group named RG1.\nAll VMs are located in RG1.\nYou want to associate each VM with its respective department.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. Create Azure Management Groups for each department.",
      "B. Create a resource group for each department.",
      "C. Assign tags to the virtual machines.",
      "D. Modify the settings of the virtual machines."
    ],
    "explanation": "Tags allow you to logically organize resources across different resource groups by adding metadata. Applying a department tag to each VM provides an easy way to associate them with specific departments for billing and management purposes without changing the resource group topology.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic1_q2",
    "number": "2",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an Azure Active Directory (Azure AD) subscription.\nYou want to implement an Azure AD conditional access policy.\nThe policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined\ndevice when they connect to Azure AD from untrusted locations.\nSolution: You access the multi-factor authentication page to alter the user settings.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The question describes altering user settings on the MFA page, which does not modify the Conditional Access policy settings. Conditional Access policies must be configured within the Azure portal under the Conditional Access blade to enforce rules based on untrusted locations.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q3",
    "number": "3",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an Azure Active Directory (Azure AD) subscription.\nYou want to implement an Azure AD conditional access policy.\nThe policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined\ndevice when they connect to Azure AD from untrusted locations.\nSolution: You access the Azure portal to alter the session control of the Azure AD conditional access policy.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 2 ==="
    ],
    "explanation": "Session controls in Conditional Access are used to limit the experience within a cloud application, not to require MFA or device state. To require MFA and an Azure AD-joined device, the 'Grant' controls must be modified instead.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q4",
    "number": "4",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an Azure Active Directory (Azure AD) subscription.\nYou want to implement an Azure AD conditional access policy.\nThe policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined\ndevice when they connect to Azure AD from untrusted locations.\nSolution: You access the Azure portal to alter the grant control of the Azure AD conditional access policy.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "While grant controls are used to enforce MFA, the solution may be incomplete without properly configuring the Conditions to specify untrusted locations. Modifying only the grant control without ensuring the condition matches the requirement does not fully meet the goal.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q5",
    "number": "5",
    "question": "You are planning to deploy an Ubuntu Server virtual machine to your company's Azure subscription.\nYou are required to implement a custom deployment that includes adding a particular trusted root certification authority (CA).\nWhich of the following should you use to create the virtual machine?",
    "domain": "compute",
    "choices": [
      "A. The New-AzureRmVm cmdlet.",
      "B. The New-AzVM cmdlet.",
      "C. The Create-AzVM cmdlet.",
      "D. The az vm create command."
    ],
    "explanation": "The 'az vm create' command in the Azure CLI allows you to specify custom deployment data, such as a custom-data file containing the certificate, using the '--custom-data' parameter. This is the standard method for injecting trusted root CAs during the provisioning of Linux VMs.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic1_q6",
    "number": "6",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has been configured\nas the usage model.\nAfter the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and\nadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor\nAuthentication.\nTo achieve this, the Per Enabled User setting must be set for the usage model.\nSolution: You reconfigure the existing usage model via the Azure portal.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 3 ==="
    ],
    "explanation": "Usage models for Azure MFA providers cannot be changed after the provider is created. To change the usage model from Per Authentication to Per Enabled User, you must create a new MFA provider with the desired configuration.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q7",
    "number": "7",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has\nbeen configured as the usage model.\nAfter the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and\nadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor\nAuthentication.\nTo achieve this, the Per Enabled User setting must be set for the usage model.\nSolution: You reconfigure the existing usage model via the Azure CLI.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Just like the Azure portal, the Azure CLI cannot be used to modify the usage model of an existing MFA provider. A new MFA provider must be created to change from Per Authentication to Per Enabled User.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q8",
    "number": "8",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company's Azure solution makes use of Multi-Factor Authentication for when users are not in the office. The Per Authentication option has\nbeen configured as the usage model.\nAfter the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company and\nadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-Factor\nAuthentication.\nTo achieve this, the Per Enabled User setting must be set for the usage model.\nSolution: You create a new Multi-Factor Authentication provider with a backup from the existing Multi-Factor Authentication provider data.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "While creating a new MFA provider is required to change the usage model, you cannot backup and restore data from an existing MFA provider directly to a new one in this manner. You must create a new provider and manually configure the settings.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q9",
    "number": "9",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-\npremises Active\nDirectory domain.\nYou have a server named DirSync1 that is configured as a DirSync server.\nYou create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.\nSolution: You run the Start-ADSyncSyncCycle -PolicyType Initial PowerShell cmdlet.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 4 ==="
    ],
    "explanation": "The 'Start-ADSyncSyncCycle -PolicyType Initial' command performs a full synchronization, which is resource-intensive and unnecessary for replicating a single new user account. Instead, the 'Delta' policy type should be used for immediate replication of recent changes.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q10",
    "number": "10",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-\npremises Active\nDirectory domain.\nYou have a server named DirSync1 that is configured as a DirSync server.\nYou create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.\nSolution: You use Active Directory Sites and Services to force replication of the Global Catalog on a domain controller.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Active Directory Sites and Services forces replication between on-premises domain controllers, not to Azure AD. To replicate to Azure AD, Azure AD Connect synchronization processes must be triggered.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q11",
    "number": "11",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an Azure Active Directory (Azure AD) tenant named weyland.com that is configured for hybrid coexistence with the on-\npremises Active\nDirectory domain.\nYou have a server named DirSync1 that is configured as a DirSync server.\nYou create a new user account in the on-premise Active Directory. You now need to replicate the user information to Azure AD immediately.\nSolution: You restart the NetLogon service on a domain controller.\nDoes the solution meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Restarting the NetLogon service on a domain controller forces DNS registration and other on-premises authentications tasks. It does not trigger Azure AD Connect to synchronize directory changes to Azure AD.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q12",
    "number": "12",
    "question": "Your company has a Microsoft Azure subscription.\nThe company has datacenters in Los Angeles and New York.\nYou are configuring the two datacenters as geo-clustered sites for site resiliency.\nYou need to recommend an Azure storage redundancy option.\nYou have the following data storage requirements:\nData must be stored on multiple nodes.\n\u2711\nData must be stored on nodes in separate geographic locations.\n\u2711\nData can be read from the secondary location as well as from the primary location.\n\u2711\nWhich of the following Azure stored redundancy options should you recommend?",
    "domain": "storage",
    "choices": [
      "A. Geo-redundant storage",
      "B. Read-only geo-redundant storage",
      "C. Zone-redundant storage",
      "D. Locally redundant storage\n\n=== PAGE 5 ==="
    ],
    "explanation": "Read-access geo-redundant storage (RA-GRS) replicates data to a secondary geographic location and provides read access to that secondary location. This satisfies the requirement for geographic redundancy and read access to the secondary replica.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q13",
    "number": "13",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.\nA colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional\nAzure Storage account.\nYou want to review the ARM template that was used by Jon Ross.\nSolution: You access the Virtual Machine blade.\nDoes the solution meet the goal?",
    "domain": "storage",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Virtual Machine blade provides management capabilities specifically for the VM, but does not display the deployment templates used to provision the resources. You must access the Resource Group's deployments blade to view the ARM template.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q14",
    "number": "14",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.\nA colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional\nAzure Storage account.\nYou want to review the ARM template that was used by Jon Ross.\nSolution: You access the Resource Group blade.\nDoes the solution meet the goal?",
    "domain": "storage",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Deployments are tracked at the Resource Group level. By accessing the Resource Group blade and navigating to the Deployments section, you can review the exact ARM template that was used to deploy the resources.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic1_q15",
    "number": "15",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has an azure subscription that includes a storage account, a resource group, a blob container and a file share.\nA colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional\nAzure Storage account.\nYou want to review the ARM template that was used by Jon Ross.\nSolution: You access the Container blade.\nDoes the solution meet the goal?",
    "domain": "storage",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 6 ==="
    ],
    "explanation": "The Container blade manages the contents and properties of a specific blob container. It does not provide access to the ARM deployment templates used at the resource group level.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q16",
    "number": "16",
    "question": "Your company has three virtual machines (VMs) that are included in an availability set.\nYou try to resize one of the VMs, which returns an allocation failure message.\nIt is imperative that the VM is resized.\nWhich of the following actions should you take?",
    "domain": "compute",
    "choices": [
      "A. You should only stop one of the VMs.",
      "B. You should stop two of the VMs.",
      "C. You should stop all three VMs.",
      "D. You should remove the necessary VM from the availability set."
    ],
    "explanation": "To resize a VM in an availability set when the new size is not available on the current hardware cluster, all VMs in the availability set must be stopped and deallocated. This allows the platform to move the entire availability set to a cluster that supports the required size.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic1_q17",
    "number": "17",
    "question": "You have an Azure virtual machine (VM) that has a single data disk. You have been tasked with attaching this data disk to another Azure VM.\nYou need to make sure that your strategy allows for the virtual machines to be ofiine for the least amount of time possible.\nWhich of the following is the action you should take FIRST?",
    "domain": "compute",
    "choices": [
      "A. Stop the VM that includes the data disk.",
      "B. Stop the VM that the data disk must be attached to.",
      "C. Detach the data disk.",
      "D. Delete the VM that includes the data disk."
    ],
    "explanation": "Data disks can be detached from a running VM without stopping it, minimizing downtime. Once detached, the disk can be attached to the target VM.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic1_q18",
    "number": "18",
    "question": "Your company has an Azure subscription.\nYou need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the\nVMs will be included in a single availability set.\nYou are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric\nfailure or maintenance.\nWhich of the following is the value that you should configure for the platformFaultDomainCount property?",
    "domain": "compute",
    "choices": [
      "A. 10",
      "B. 30",
      "C. Min Value",
      "D. Max Value\n\n=== PAGE 7 ==="
    ],
    "explanation": "The platformFaultDomainCount property determines how many fault domains the VMs are spread across. Setting this to the maximum value ensures the highest level of fault tolerance by distributing VMs as widely as possible across the datacenter hardware.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic1_q19",
    "number": "19",
    "question": "Your company has an Azure subscription.\nYou need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the\nVMs will be included in a single availability set.\nYou are required to make sure that the ARM template you configure allows for as many VMs as possible to remain accessible in the event of fabric\nfailure or maintenance.\nWhich of the following is the value that you should configure for the platformUpdateDomainCount property?",
    "domain": "compute",
    "choices": [
      "A. 10",
      "B. 20",
      "C. 30",
      "D. 40"
    ],
    "explanation": "The maximum value for platformUpdateDomainCount in an ARM template is typically 20. Maximizing the update domains ensures that during planned maintenance, only a small fraction of the VMs in the availability set are rebooted at the same time.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q21",
    "number": "21",
    "question": "Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory\ndomain.\nThe on-premise virtual environment consists of virtual machines (VMs) running on Windows Server 2012 R2 Hyper-V host servers.\nYou have created some PowerShell scripts to automate the configuration of newly created VMs. You plan to create several new VMs.\nYou need a solution that ensures the scripts are run on the new VMs.\nWhich of the following is the best solution?",
    "domain": "identity",
    "choices": [
      "A. Configure a SetupComplete.cmd batch file in the %windir%\\setup\\scripts directory.",
      "B. Configure a Group Policy Object (GPO) to run the scripts as logon scripts.",
      "C. Configure a Group Policy Object (GPO) to run the scripts as startup scripts.",
      "D. Place the scripts in a new virtual hard disk (VHD)."
    ],
    "explanation": "For Windows VMs, placing a script in the '%windir%\\setup\\scripts\\SetupComplete.cmd' directory ensures it executes at the end of the Windows setup process. This is a standard method for automating configurations on newly deployed VMs.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic1_q22",
    "number": "22",
    "question": "Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory\ndomain.\nYou plan to deploy several new virtual machines (VMs) in Azure. The VMs will have the same operating system and custom software\nrequirements.\nYou configure a reference VM in the on-premise virtual environment. You then generalize the VM to create an image.\nYou need to upload the image to Azure to ensure that it is available for selection when you create the new Azure VMs.\nWhich PowerShell cmdlets should you use?",
    "domain": "identity",
    "choices": [
      "A. Add-AzVM",
      "B. Add-AzVhd",
      "C. Add-AzImage",
      "D. Add-AzImageDataDisk\n\n=== PAGE 9 ==="
    ],
    "explanation": "The Add-AzVhd cmdlet is used to upload on-premises virtual hard disks (VHDs) to an Azure storage account. Once uploaded, the VHD can be used to create managed images or OS disks for new Azure VMs.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q24",
    "number": "24",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.\nVirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your\ncompany's on- premises network and VirtualNetworkA.\nYou have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network\npeering between\nVirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network.\nHowever, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.\nYou have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.\nSolution: You choose the Allow gateway transit setting on VirtualNetworkA.\nDoes the solution meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 10 ==="
    ],
    "explanation": "Enabling 'Allow gateway transit' on VirtualNetworkA is required, but it is incomplete on its own. You must also configure VirtualNetworkB to 'Use remote gateways' for the transit to function for the Windows 10 client.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q25",
    "number": "25",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.\nVirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your\ncompany's on- premises network and VirtualNetworkA.\nYou have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network\npeering between\nVirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network.\nHowever, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.\nYou have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.\nSolution: You choose the Allow gateway transit setting on VirtualNetworkB.\nDoes the solution meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "'Allow gateway transit' must be enabled on the virtual network that contains the gateway (VirtualNetworkA), not VirtualNetworkB. VirtualNetworkB should instead be configured to 'Use remote gateways'.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q26",
    "number": "26",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.\nVirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between your\ncompany's on- premises network and VirtualNetworkA.\nYou have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After configuring virtual network\npeering between\nVirtualNetworkA and VirtualNetworkB, you confirm that you are able to access VirtualNetworkB from the company's on-premises network.\nHowever, you find that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.\nYou have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.\nSolution: You download and re-install the VPN client configuration package on the Windows 10 workstation.\nDoes the solution meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Point-to-Site VPN clients cache routing information when the package is downloaded. After configuring VNet peering, you must download and reinstall the VPN client configuration package on the client to receive the updated routes.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic1_q27",
    "number": "27",
    "question": "Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1.\nThe company has users that work remotely. The remote workers require access to the VMs on VNet1.\nYou need to provide access for the remote workers.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Configure a Site-to-Site (S2S) VPN.",
      "B. Configure a VNet-toVNet VPN.",
      "C. Configure a Point-to-Site (P2S) VPN.",
      "D. Configure DirectAccess on a Windows Server 2012 server VM.",
      "E. Configure a Multi-Site VPN\n\n=== PAGE 11 ==="
    ],
    "explanation": "A Point-to-Site (P2S) VPN allows individual remote client computers to connect securely to an Azure virtual network over the internet. This is the most appropriate solution for remote workers who need access to VMs.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic1_q28",
    "number": "28",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).\nYou need to configure an Azure internal load balancer as a listener for the availability group.\nSolution: You create an HTTP health probe on port 1433.\nDoes the solution meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "For SQL Server Always On availability groups behind an Azure load balancer, the health probe must be configured on a TCP port, not HTTP port 1433. The SQL Server resource DLL listens on this custom TCP port to respond to health probes.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q29",
    "number": "29",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).\nYou need to configure an Azure internal load balancer as a listener for the availability group.\nSolution: You set Session persistence to Client IP.\nDoes the solution meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Session persistence based on Client IP is not required for a SQL Server Always On availability group listener. The listener routes connections to the primary replica based on health probes, not client IP persistence.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q30",
    "number": "30",
    "question": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result.\nEstablish if the solution satisfies the requirements.\nYour company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs).\nYou need to configure an Azure internal load balancer as a listener for the availability group.\nSolution: You enable Floating IP.\nDoes the solution meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 12 ==="
    ],
    "explanation": "Enabling Floating IP (Direct Server Return) is a requirement for configuring a load balancer for SQL Server Always On availability group listeners. It allows the backend IP address to be used directly, which is necessary for the listener IP to function correctly.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic1_q31",
    "number": "31",
    "question": "Your company has two on-premises servers named SRV01 and SRV02. Developers have created an application that runs on SRV01. The\napplication calls a service on SRV02 by IP address.\nYou plan to migrate the application on Azure virtual machines (VMs). You have configured two VMs on a single subnet in an Azure virtual network.\nYou need to configure the two VMs with static internal IP addresses.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. Run the New-AzureRMVMConfig PowerShell cmdlet.",
      "B. Run the Set-AzureSubnet PowerShell cmdlet.",
      "C. Modify the VM properties in the Azure Management Portal.",
      "D. Modify the IP properties in Windows Network and Sharing Center.",
      "E. Run the Set-AzureStaticVNetIP PowerShell cmdlet."
    ],
    "explanation": "In older Azure deployments, static internal IP addresses for VMs were configured via the Azure platform using PowerShell cmdlets like Set-AzureStaticVNetIP. IP configurations should always be done in the Azure platform, not the guest OS.",
    "correct": 4,
    "type": "pdf"
  },
  {
    "id": "topic1_q32",
    "number": "32",
    "question": "Your company has an Azure Active Directory (Azure AD) subscription.\nYou need to deploy five virtual machines (VMs) to your company's virtual network subnet.\nThe VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be\nidentical.\nWhich of the following is the least amount of network interfaces needed for this configuration?",
    "domain": "identity",
    "choices": [
      "A. 5",
      "B. 10",
      "C. 20",
      "D. 40"
    ],
    "explanation": "Each of the 5 virtual machines requires at least one network interface (NIC) to connect to the virtual network. A minimum of 5 network interfaces is required, with each NIC holding both public and private IP configurations.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic1_q33",
    "number": "33",
    "question": "Your company has an Azure Active Directory (Azure AD) subscription.\nYou need to deploy five virtual machines (VMs) to your company's virtual network subnet.\nThe VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be\nidentical.\nWhich of the following is the least amount of security groups needed for this configuration?",
    "domain": "identity",
    "choices": [
      "A. 4",
      "B. 3",
      "C. 2",
      "D. 1\n\n=== PAGE 13 ==="
    ],
    "explanation": "Since all 5 virtual machines have identical inbound and outbound security rules, you can create a single Network Security Group (NSG) and apply it to the subnet. This minimizes management overhead.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic1_q34",
    "number": "34",
    "question": "Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016.\nOne of the VMs is backed up every day using Azure Backup Instant Restore.\nWhen the VM becomes infected with data encrypting ransomware, you decide to recover the VM's files.\nWhich of the following is TRUE in this scenario?",
    "domain": "storage",
    "choices": [
      "A. You can only recover the files to the infected VM.",
      "B. You can recover the files to any VM within the company's subscription.",
      "C. You can only recover the files to a new VM.",
      "D. You will not be able to recover the files."
    ],
    "explanation": "Azure Backup Instant Restore allows you to mount the recovery point as an iSCSI drive on any compatible Windows machine. You can recover files to any other VM in the subscription without needing to restore to the infected VM.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q35",
    "number": "35",
    "question": "Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016.\nOne of the VMs is backed up every day using Azure Backup Instant Restore.\nWhen the VM becomes infected with data encrypting ransomware, you are required to restore the VM.\nWhich of the following actions should you take?",
    "domain": "storage",
    "choices": [
      "A. You should restore the VM after deleting the infected VM.",
      "B. You should restore the VM to any VM within the company's subscription.",
      "C. You should restore the VM to a new Azure VM.",
      "D. You should restore the VM to an on-premise Windows device."
    ],
    "explanation": "When dealing with a ransomware infection, the safest and recommended approach is to restore the VM from a clean backup point to a completely new Azure VM. This prevents reinfection and preserves the infected VM for forensic analysis if necessary.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic1_q36",
    "number": "36",
    "question": "You administer a solution in Azure that is currently having performance issues.\nYou need to find the cause of the performance issues pertaining to metrics on the Azure infrastructure.\nWhich of the following is the tool you should use?",
    "domain": "compute",
    "choices": [
      "A. Azure Traffic Analytics",
      "B. Azure Monitor",
      "C. Azure Activity Log",
      "D. Azure Advisor\n\n=== PAGE 14 ==="
    ],
    "explanation": "Azure Monitor is the comprehensive tool used for collecting, analyzing, and acting on telemetry from Azure infrastructure. It provides metrics and logs that are essential for diagnosing performance issues on Azure resources.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q37",
    "number": "37",
    "question": "Your company has an Azure subscription that includes a Recovery Services vault.\nYou want to use Azure Backup to schedule a backup of your company's virtual machines (VMs) to the Recovery Services vault.\nWhich of the following VMs can you back up? Choose all that apply.",
    "domain": "storage",
    "choices": [
      "A. VMs that run Windows 10.",
      "B. VMs that run Windows Server 2012 or higher.",
      "C. VMs that have NOT been shut down.",
      "D. VMs that run Debian 8.2+.",
      "E. VMs that have been shut down."
    ],
    "explanation": "Azure Backup can protect Azure virtual machines running supported client operating systems, including Windows 10. It is possible to schedule backups for these VMs to a Recovery Services vault.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic1_q38",
    "number": "38",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou have a CSV file that contains the names and email addresses of 500 external users.\nYou need to create a guest user account in contoso.com for each of the 500 external users.\nSolution: You create a PowerShell script that runs the New-AzureADUser cmdlet for each user.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The New-AzureADUser cmdlet is used to create standard user accounts within the directory, not guest accounts for external users. To invite external users as guests, the invitation process must be used instead.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q39",
    "number": "39",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou have a CSV file that contains the names and email addresses of 500 external users.\nYou need to create a guest user account in contoso.com for each of the 500 external users.\nSolution: From Azure AD in the Azure portal, you use the Bulk create user operation.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 15 ==="
    ],
    "explanation": "The 'Bulk create user' operation creates standard internal members in the Azure AD tenant. To add external users as guests using a CSV file, you must use the 'Bulk invite user' operation specifically designed for B2B guest accounts.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic1_q40",
    "number": "40",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou have a CSV file that contains the names and email addresses of 500 external users.\nYou need to create a guest user account in contoso.com for each of the 500 external users.\nSolution: You create a PowerShell script that runs the New-AzureADMSInvitation cmdlet for each external user.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The New-AzureADMSInvitation cmdlet is the correct PowerShell command to invite external users to an Azure AD tenant as guest users (B2B collaboration). A script using this cmdlet can process the CSV and send invitations to all 500 users.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q2",
    "number": "2",
    "question": "You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com and an Azure Kubernetes Service\n(AKS) cluster named AKS1.\nAn administrator reports that she is unable to grant access to AKS1 to the users in contoso.com.\nYou need to ensure that access to AKS1 can be granted to the contoso.com users.\nWhat should you do first?",
    "domain": "identity",
    "choices": [
      "A. From contoso.com, modify the Organization relationships settings.",
      "B. From contoso.com, create an OAuth 2.0 authorization endpoint.",
      "C. Recreate AKS1.",
      "D. From AKS1, create a namespace."
    ],
    "explanation": "Integrating Azure Kubernetes Service (AKS) with Azure AD requires creating an OAuth 2.0 authorization endpoint via Azure AD application registrations. This establishes the necessary identity provider trust to handle user authentication.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q3",
    "number": "3",
    "question": "You have a Microsoft 365 tenant and an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou plan to grant three users named User1, User2, and User3 access to a temporary Microsoft SharePoint document library named Library1.\nYou need to create groups for the users. The solution must ensure that the groups are deleted automatically after 180 days.\nWhich two groups should you create? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. a Microsoft 365 group that uses the Assigned membership type",
      "B. a Security group that uses the Assigned membership type",
      "C. a Microsoft 365 group that uses the Dynamic User membership type",
      "D. a Security group that uses the Dynamic User membership type",
      "E. a Security group that uses the Dynamic Device membership type\n\n=== PAGE 17 ==="
    ],
    "explanation": "Microsoft 365 groups support expiration policies, which can automatically delete the group after a specified period (such as 180 days). Assigned membership allows you to manually add the specific users for temporary SharePoint access.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q6",
    "number": "6",
    "question": "You have an Azure policy as shown in the following exhibit:\nWhat is the effect of the policy?",
    "domain": "identity",
    "choices": [
      "A. You are prevented from creating Azure SQL servers anywhere in Subscription 1.",
      "B. You can create Azure SQL servers in ContosoRG1 only.",
      "C. You are prevented from creating Azure SQL Servers in ContosoRG1 only.",
      "D. You can create Azure SQL servers in any resource group within Subscription 1.\n\n=== PAGE 20 ==="
    ],
    "explanation": "When a Deny effect policy is assigned at the subscription level, it prevents the creation of the specified resource type across all resource groups within that subscription. Thus, you are prevented from creating Azure SQL servers anywhere in Subscription 1.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q8",
    "number": "8",
    "question": "You have an Azure subscription named AZPT1 that contains the resources shown in the following table:\nYou create a new Azure subscription named AZPT2.\nYou need to identify which resources can be moved to AZPT2.\nWhich resources should you identify?",
    "domain": "compute",
    "choices": [
      "A. VM1, storage1, VNET1, and VM1Managed only",
      "B. VM1 and VM1Managed only",
      "C. VM1, storage1, VNET1, VM1Managed, and RVAULT1",
      "D. RVAULT1 only"
    ],
    "explanation": "Resources such as VMs, Storage Accounts, and Virtual Networks can generally be moved between subscriptions. However, Azure Recovery Services vaults often have specific limitations or cannot be moved if they contain certain types of protected items.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q9",
    "number": "9",
    "question": "You recently created a new Azure subscription that contains a user named Admin1.\nAdmin1 attempts to deploy an Azure Marketplace resource by using an Azure Resource Manager template. Admin1 deploys the template by using\nAzure\nPowerShell and receives the following error message: `User failed validation to purchase resources. Error message: `Legal terms have not been\naccepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873)\nand configure programmatic deployment for the Marketplace item or create it there for the first time.`\nYou need to ensure that Admin1 can deploy the Marketplace resource successfully.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet",
      "B. From the Azure portal, register the Microsoft.Marketplace resource provider",
      "C. From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet",
      "D. From the Azure portal, assign the Billing administrator role to Admin1"
    ],
    "explanation": "Deploying third-party Azure Marketplace images programmatically requires that the legal terms be accepted for the subscription first. The Set-AzMarketplaceTerms cmdlet allows an administrator to accept these terms programmatically.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q10",
    "number": "10",
    "question": "You have an Azure Active Directory (Azure AD) tenant that contains 5,000 user accounts.\nYou create a new user account named AdminUser1.\nYou need to assign the User administrator administrative role to AdminUser1.\nWhat should you do from the user account properties?",
    "domain": "identity",
    "choices": [
      "A. From the Licenses blade, assign a new license",
      "B. From the Directory role blade, modify the directory role",
      "C. From the Groups blade, invite the user account to a new group\n\n=== PAGE 22 ==="
    ],
    "explanation": "Azure AD administrative roles, such as the User Administrator role, are assigned through the Directory roles blade on the user's account properties in the Azure portal. This grants the user the specific permissions associated with that built-in role.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q11",
    "number": "11",
    "question": "You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains 100 user accounts.\nYou purchase 10 Azure AD Premium P2 licenses for the tenant.\nYou need to ensure that 10 users can use all the Azure AD Premium features.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. From the Licenses blade of Azure AD, assign a license",
      "B. From the Groups blade of each user, invite the users to a group",
      "C. From the Azure AD domain, add an enterprise application",
      "D. From the Directory role blade of each user, modify the directory role"
    ],
    "explanation": "To enable Azure AD Premium P2 features for specific users, you must assign the purchased licenses directly to their user accounts. This is done from the Licenses blade in Azure AD.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q12",
    "number": "12",
    "question": "You have an Azure subscription named Subscription1 and an on-premises deployment of Microsoft System Center Service Manager.\nSubscription1 contains a virtual machine named VM1.\nYou need to ensure that an alert is set in Service Manager when the amount of available memory on VM1 is below 10 percent.\nWhat should you do first?",
    "domain": "monitor",
    "choices": [
      "A. Create an automation runbook",
      "B. Deploy a function app",
      "C. Deploy the IT Service Management Connector (ITSM)",
      "D. Create a notification"
    ],
    "explanation": "The IT Service Management Connector (ITSMC) provides a bi-directional integration between Azure Monitor and ITSM tools like System Center Service Manager. Deploying this connector is the first step required to route Azure alerts directly into Service Manager as incidents.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q13",
    "number": "13",
    "question": "You sign up for Azure Active Directory (Azure AD) Premium P2.\nYou need to add a user named admin1@contoso.com as an administrator on all the computers that will be joined to the Azure AD domain.\nWhat should you configure in Azure AD?",
    "domain": "identity",
    "choices": [
      "A. Device settings from the Devices blade",
      "B. Providers from the MFA Server blade",
      "C. User settings from the Users blade",
      "D. General settings from the Groups blade\n\n=== PAGE 23 ==="
    ],
    "explanation": "To manage local administrators on Azure AD joined devices, you configure the Device settings in the Azure AD portal. Specifically, you add users to the 'Additional local administrators on Azure AD joined devices' setting.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q15",
    "number": "15",
    "question": "You have an Azure subscription that contains a resource group named RG26.\nRG26 is set to the West Europe location and is used to create temporary resources for a project. RG26 contains the resources shown in the\nfollowing table.\nSQLDB01 is backed up to RGV1.\nWhen the project is complete, you attempt to delete RG26 from the Azure portal. The deletion fails.\nYou need to delete RG26.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Delete VM1",
      "B. Stop VM1",
      "C. Stop the backup of SQLDB01",
      "D. Delete sa001\n\n=== PAGE 24 ==="
    ],
    "explanation": "You cannot delete a resource group if it contains a SQL database that is actively being backed up to a Recovery Services vault. You must first stop the backup and remove the backup data or retain it, which removes the lock preventing deletion.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q16",
    "number": "16",
    "question": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.\nSubscription1 has a user named User1. User1 has the following roles:\nReader\n\u2711\nSecurity Admin\n\u2711\nSecurity Reader\n\u2711\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Remove User1 from the Security Reader and Reader roles for Subscription1.",
      "B. Assign User1 the User Access Administrator role for VNet1.",
      "C. Assign User1 the Network Contributor role for VNet1.",
      "D. Assign User1 the Network Contributor role for RG1."
    ],
    "explanation": "To assign roles to other users, a user needs to have the User Access Administrator role or the Owner role. The Security Admin and Reader roles do not grant the Microsoft.Authorization/roleAssignments/write permission required to assign roles.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q17",
    "number": "17",
    "question": "You have an Azure Active Directory (Azure AD) tenant named contosocloud.onmicrosoft.com.\nYour company has a public DNS zone for contoso.com.\nYou add contoso.com as a custom domain name to Azure AD.\nYou need to ensure that Azure can verify the domain name.\nWhich type of DNS record should you create?",
    "domain": "identity",
    "choices": [
      "A. MX",
      "B. NSEC",
      "C. PTR",
      "D. RRSIG"
    ],
    "explanation": "To verify ownership of a custom domain in Azure Active Directory, you must create either a TXT or an MX record in your DNS zone. This proves to Azure that you control the domain.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q18",
    "number": "18",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named\nDevelopers.\nSubscription1 contains a resource group named Dev.\nYou need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.\nSolution: On Subscription1, you assign the DevTest Labs User role to the Developers group.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 25 ==="
    ],
    "explanation": "The DevTest Labs User role only lets users connect, start, restart, and shutdown virtual machines in Azure DevTest Labs. It does not provide permissions to create Azure Logic Apps.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q19",
    "number": "19",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named\nDevelopers.\nSubscription1 contains a resource group named Dev.\nYou need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.\nSolution: On Subscription1, you assign the Logic App Operator role to the Developers group.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Logic App Operator role only allows a user to read, enable, and disable logic apps. It does not grant the permissions required to create new logic apps.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q22",
    "number": "22",
    "question": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.\nYou need to view the error events from a table named Event.\nWhich query should you run in Workspace1?",
    "domain": "monitor",
    "choices": [
      "A. Get-Event Event | where {$_.EventType == \"error\"}",
      "B. search in (Event) \"error\"",
      "C. select * from Event where EventType == \"error\"",
      "D. search in (Event) * | where EventType -eq \"error\"\n\n=== PAGE 27 ==="
    ],
    "explanation": "In Kusto Query Language (KQL) used by Azure Log Analytics, the `search` operator can be used to find a specific string across columns. `search in (Event) \"error\"` correctly searches for the string 'error' within the Event table.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q24",
    "number": "24",
    "question": "You have an Azure subscription named Subscription1. Subscription1 contains the resource groups in the following table.\nRG1 has a web app named WebApp1. WebApp1 is located in West Europe.\nYou move WebApp1 to RG2.\nWhat is the effect of the move?",
    "domain": "compute",
    "choices": [
      "A. The App Service plan for WebApp1 remains in West Europe. Policy2 applies to WebApp1.",
      "B. The App Service plan for WebApp1 moves to North Europe. Policy2 applies to WebApp1.",
      "C. The App Service plan for WebApp1 remains in West Europe. Policy1 applies to WebApp1.",
      "D. The App Service plan for WebApp1 moves to North Europe. Policy1 applies to WebApp1.\n\n=== PAGE 29 ==="
    ],
    "explanation": "When moving a Web App to a new resource group, it continues to run in its existing App Service plan, which cannot change its physical location during a move. The target resource group's policies (like Policy2) will apply to the web app after the move.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q26",
    "number": "26",
    "question": "You have an Azure subscription.\nUsers access the resources in the subscription from either home or from customer sites. From home, users must establish a point-to-site VPN to\naccess the Azure resources. The users on the customer sites access the Azure resources by using site-to-site VPNs.\nYou have a line-of-business-app named App1 that runs on several Azure virtual machine. The virtual machines run Windows Server 2016.\nYou need to ensure that the connections to App1 are spread across all the virtual machines.\nWhat are two possible Azure services that you can use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. an internal load balancer",
      "B. a public load balancer",
      "C. an Azure Content Delivery Network (CDN)",
      "D. Traffic Manager",
      "E. an Azure Application Gateway"
    ],
    "explanation": "An internal load balancer can distribute traffic to Azure virtual machines within a virtual network. Since the traffic originates from users connected via VPN, an internal load balancer provides a private IP address for the backend pool.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q27",
    "number": "27",
    "question": "You have an Azure subscription.\nYou have 100 Azure virtual machines.\nYou need to quickly identify underutilized virtual machines that can have their service tier changed to a less expensive offering.\nWhich blade should you use?",
    "domain": "compute",
    "choices": [
      "A. Monitor",
      "B. Advisor",
      "C. Metrics",
      "D. Customer insights\n\n=== PAGE 31 ==="
    ],
    "explanation": "Azure Advisor provides personalized best practices recommendations, including cost optimization. It analyzes your resource usage and identifies underutilized virtual machines that can be resized or shut down to save money.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q29",
    "number": "29",
    "question": "You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com.\nThe User administrator role is assigned to a user named Admin1.\nAn external partner has a Microsoft account that uses the user1@outlook.com sign in.\nAdmin1 attempts to invite the external partner to sign in to the Azure AD tenant and receives the following error message: `Unable to invite user\nuser1@outlook.com `\" Generic authorization exception.`\nYou need to ensure that Admin1 can invite the external partner to sign in to the Azure AD tenant.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. From the Users settings blade, modify the External collaboration settings.",
      "B. From the Custom domain names blade, add a custom domain.",
      "C. From the Organizational relationships blade, add an identity provider.",
      "D. From the Roles and administrators blade, assign the Security administrator role to Admin1.\n\n=== PAGE 32 ==="
    ],
    "explanation": "The 'Generic authorization exception' typically occurs when external collaboration settings restrict who can invite guests. You need to modify the External collaboration settings in Azure AD to allow the User Administrator or members to invite external users.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q30",
    "number": "30",
    "question": "You have an Azure subscription linked to an Azure Active Directory tenant. The tenant includes a user account named User1.\nYou need to ensure that User1 can assign a policy to the tenant root management group.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. Assign the Owner role for the Azure Subscription to User1, and then modify the default conditional access policies.",
      "B. Assign the Owner role for the Azure subscription to User1, and then instruct User1 to configure access management for Azure resources.",
      "C. Assign the Global administrator role to User1, and then instruct User1 to configure access management for Azure resources.",
      "D. Create a new management group and delegate User1 as the owner of the new management group."
    ],
    "explanation": "To assign policies at the Tenant Root Group level, a user must have elevated access. A Global Administrator can elevate their own access to manage all Azure subscriptions and management groups by toggling 'Access management for Azure resources' in Azure AD properties.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q33",
    "number": "33",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an\nAzure subscription.\nSolution: You assign the Network Contributor role at the subscription level to Admin1.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Traffic Analytics requires the user to have the Network Contributor role, which grants permissions to manage network resources and network watcher. This provides the necessary access to enable and configure Traffic Analytics.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q34",
    "number": "34",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an\nAzure subscription.\nSolution: You assign the Owner role at the subscription level to Admin1.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 34 ==="
    ],
    "explanation": "The Owner role has full access to all resources, including the ability to assign roles and manage Traffic Analytics. This exceeds the principle of least privilege, but it does meet the goal of enabling the feature.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q35",
    "number": "35",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an\nAzure subscription.\nSolution: You assign the Reader role at the subscription level to Admin1.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Reader role only allows users to view resources and does not grant the permissions necessary to make configuration changes. Therefore, a user with the Reader role cannot enable Traffic Analytics.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q36",
    "number": "36",
    "question": "You have an Azure subscription that contains a user named User1.\nYou need to ensure that User1 can deploy virtual machines and manage virtual networks. The solution must use the principle of least privilege.\nWhich role-based access control (RBAC) role should you assign to User1?",
    "domain": "identity",
    "choices": [
      "A. Owner",
      "B. Virtual Machine Contributor",
      "C. Contributor",
      "D. Virtual Machine Administrator Login\n\n=== PAGE 35 ==="
    ],
    "explanation": "The Virtual Machine Contributor role grants permissions to create and manage virtual machines. While it does not fully manage the underlying virtual network, it is often presented as the most restrictive built-in role focused on VM deployment in this context.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q38",
    "number": "38",
    "question": "You have an Azure subscription named Subscription1 that contains an Azure virtual machine named VM1. VM1 is in a resource group named RG1.\nVM1 runs services that will be used to deploy resources to RG1.\nYou need to ensure that a service running on VM1 can manage the resources in RG1 by using the identity of VM1.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. From the Azure portal, modify the Managed Identity settings of VM1",
      "B. From the Azure portal, modify the Access control (IAM) settings of RG1",
      "C. From the Azure portal, modify the Access control (IAM) settings of VM1",
      "D. From the Azure portal, modify the Policies settings of RG1"
    ],
    "explanation": "To allow a service running on VM1 to manage resources in RG1 using its own identity, you must first enable a system-assigned or user-assigned Managed Identity for VM1. This provides the VM with an Azure AD identity that can be granted role-based access.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q39",
    "number": "39",
    "question": "You have an Azure subscription that contains a resource group named TestRG.\nYou use TestRG to validate an Azure deployment.\nTestRG contains the following resources:\nYou need to delete TestRG.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Modify the backup configurations of VM1 and modify the resource lock type of VNET1",
      "B. Remove the resource lock from VNET1 and delete all data in Vault1",
      "C. Turn off VM1 and remove the resource lock from VNET1",
      "D. Turn off VM1 and delete all data in Vault1\n\n=== PAGE 37 ==="
    ],
    "explanation": "Resource locks prevent deletion of resources, so you must first remove the lock on VNET1. Additionally, Recovery Services Vaults cannot be deleted if they contain backup data, so you must delete the data in Vault1 before deleting the resource group.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q40",
    "number": "40",
    "question": "You have an Azure DNS zone named adatum.com.\nYou need to delegate a subdomain named research.adatum.com to a different DNS server in Azure.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Create an NS record named research in the adatum.com zone.",
      "B. Create a PTR record named research in the adatum.com zone.",
      "C. Modify the SOA record of adatum.com.",
      "D. Create an A record named *.research in the adatum.com zone."
    ],
    "explanation": "To delegate a subdomain to a different DNS server, you must create a Name Server (NS) record for the subdomain in the parent DNS zone. This points DNS queries for the subdomain to the authoritative servers for the delegated zone.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q42",
    "number": "42",
    "question": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.\nYou need to view the error events from a table named Event.\nWhich query should you run in Workspace1?",
    "domain": "monitor",
    "choices": [
      "A. Get-Event Event | where {$_.EventType == \"error\"}",
      "B. Event | search \"error\"",
      "C. select * from Event where EventType == \"error\"",
      "D. search in (Event) * | where EventType \u05d2\u20ac\"eq \u05d2\u20acerror\u05d2\u20ac\n\n=== PAGE 38 ==="
    ],
    "explanation": "In KQL, you can use the search operator to find specific terms across all columns in a table. `Event | search \"error\"` effectively filters the Event table for any records containing the string 'error'.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q43",
    "number": "43",
    "question": "You have a registered DNS domain named contoso.com.\nYou create a public Azure DNS zone named contoso.com.\nYou need to ensure that records created in the contoso.com zone are resolvable from the internet.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Create NS records in contoso.com.",
      "B. Modify the SOA record in the DNS domain registrar.",
      "C. Create the SOA record in contoso.com.",
      "D. Modify the NS records in the DNS domain registrar."
    ],
    "explanation": "When you create a public DNS zone in Azure, Azure provides four name servers. To make the zone resolvable from the internet, you must update your domain registrar's NS records to point to these Azure DNS name servers.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic2_q47",
    "number": "47",
    "question": "You have an Azure Active Directory (Azure AD) tenant.\nYou plan to delete multiple users by using Bulk delete in the Azure Active Directory admin center.\nYou need to create and upload a file for the bulk delete.\nWhich user attributes should you include in the file?",
    "domain": "identity",
    "choices": [
      "A. The user principal name and usage location of each user only",
      "B. The user principal name of each user only",
      "C. The display name of each user only",
      "D. The display name and usage location of each user only",
      "E. The display name and user principal name of each user only\n\n=== PAGE 41 ==="
    ],
    "explanation": "When performing a bulk delete of users in Azure AD via a CSV file, the only required attribute is the user principal name (UPN) of each user. Other attributes like display name and usage location are not necessary for identifying the users to delete.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q48",
    "number": "48",
    "question": "\nHOTSPOT -\nYou have an Azure subscription named Sub1 that contains the Azure resources shown in the following table.\nYou assign an Azure policy that has the following settings:\nScope: Sub1\n\u2711\nExclusions: Sub1/RG1/VNET1\n\u2711\nPolicy definition: Append a tag and its value to resources\n\u2711\nPolicy enforcement: Enabled\n\u2711\nTag name: Tag4\n\u2711\nTag value: value4\n\u2711\nYou assign tags to the resources as shown in the following table.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The policy applies an append tag if the tag does not exist. However, if the resource already has the tag with a different value, or if exclusions apply, the tag might not be appended. Based on the scenario, the statement is false.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q49",
    "number": "49",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an\nAzure subscription.\nSolution: You assign the Traffic Manager Contributor role at the subscription level to Admin1.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 42 ==="
    ],
    "explanation": "The Traffic Manager Contributor role only allows managing Traffic Manager profiles, not enabling Traffic Analytics. Traffic Analytics requires the Network Contributor role or higher on the subscription.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q50",
    "number": "50",
    "question": "You have three offices and an Azure subscription that contains an Azure Active Directory (Azure AD) tenant.\nYou need to grant user management permissions to a local administrator in each office.\nWhat should you use?",
    "domain": "identity",
    "choices": [
      "A. Azure AD roles",
      "B. administrative units",
      "C. access packages in Azure AD entitlement management",
      "D. Azure roles"
    ],
    "explanation": "Administrative units in Azure AD allow you to subdivide your organization and assign administrative roles scoped only to that unit. This is ideal for granting local administrators user management permissions restricted to their specific office.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q51",
    "number": "51",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named\nDevelopers.\nSubscription1 contains a resource group named Dev.\nYou need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.\nSolution: On Dev, you assign the Logic App Contributor role to the Developers group.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 43 ==="
    ],
    "explanation": "The Logic App Contributor role grants the necessary permissions to manage, create, and update Logic Apps. Assigning this role at the resource group scope (Dev) allows the Developers group to create Logic Apps specifically in that resource group.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q53",
    "number": "53",
    "question": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.\nSubscription1 has a user named User1. User1 has the following roles:\nReader\n\u2711\nSecurity Admin\n\u2711\nSecurity Reader\n\u2711\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.",
      "B. Assign User1 the Owner role for VNet1.",
      "C. Assign User1 the Contributor role for VNet1.",
      "D. Assign User1 the Network Contributor role for VNet1.\n\n=== PAGE 44 ==="
    ],
    "explanation": "To assign roles to other users for a specific resource like a virtual network, the user must have the Owner or User Access Administrator role on that resource. The Owner role grants full access, including role assignment permissions.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q55",
    "number": "55",
    "question": "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a file share named share1.\nThe subscription is linked to a hybrid Azure Active Directory (Azure AD) tenant that contains a security group named Group1.\nYou need to grant Group1 the Storage File Data SMB Share Elevated Contributor role for share1.\nWhat should you do first?",
    "domain": "identity",
    "choices": [
      "A. Enable Active Directory Domain Service (AD DS) authentication for storage1.",
      "B. Grant share-level permissions by using File Explorer.",
      "C. Mount share1 by using File Explorer.",
      "D. Create a private endpoint."
    ],
    "explanation": "To use Azure RBAC for SMB access to Azure file shares (like the Storage File Data SMB Share Elevated Contributor role), you must first enable identity-based authentication, such as Active Directory Domain Services (AD DS) or Azure AD DS, on the storage account.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q56",
    "number": "56",
    "question": "You have 15 Azure subscriptions.\nYou have an Azure Active Directory (Azure AD) tenant that contains a security group named Group1.\nYou plan to purchase additional Azure subscription.\nYou need to ensure that Group1 can manage role assignments for the existing subscriptions and the planned subscriptions. The solution must\nmeet the following requirements:\nUse the principle of least privilege.\n\u2711\nMinimize administrative effort.\n\u2711\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. Assign Group1 the Owner role for the root management group.",
      "B. Assign Group1 the User Access Administrator role for the root management group.",
      "C. Create a new management group and assign Group1 the User Access Administrator role for the group.",
      "D. Create a new management group and assign Group1 the Owner role for the group.\n\n=== PAGE 46 ==="
    ],
    "explanation": "To manage role assignments across all existing and planned subscriptions with least privilege, you should assign the User Access Administrator role at the Root Management Group level. This scopes the permission specifically to role management across the entire hierarchy.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q58",
    "number": "58",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:\nUser1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.\nYou need to create new user accounts in external.contoso.onmicrosoft.com.\nSolution: You instruct User2 to create the user accounts.\nDoes that meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "User2 is not defined in the scenario with the necessary privileges. Only users with Global Administrator or User Administrator roles in the external tenant can create new user accounts in that tenant.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q59",
    "number": "59",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:\nUser1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.\nYou need to create new user accounts in external.contoso.onmicrosoft.com.\nSolution: You instruct User4 to create the user accounts.\nDoes that meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 48 ==="
    ],
    "explanation": "Similar to the previous scenario, instructing an arbitrary user without the appropriate administrative roles in the new tenant will not allow them to create user accounts. The user must hold an admin role in the external tenant.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q60",
    "number": "60",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:\nUser1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.\nYou need to create new user accounts in external.contoso.onmicrosoft.com.\nSolution: You instruct User3 to create the user accounts.\nDoes that meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Instructing User3 to create accounts will fail unless User3 has been explicitly granted administrative privileges (like User Administrator) in the newly created external tenant.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q61",
    "number": "61",
    "question": "You have two Azure subscriptions named Sub1 and Sub2.\nAn administrator creates a custom role that has an assignable scope to a resource group named RG1 in Sub1.\nYou need to ensure that you can apply the custom role to any resource group in Sub1 and Sub2. The solution must minimize administrative effort.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. Select the custom role and add Sub1 and Sub2 to the assignable scopes. Remove RG1 from the assignable scopes.",
      "B. Create a new custom role for Sub1. Create a new custom role for Sub2. Remove the role from RG1.",
      "C. Create a new custom role for Sub1 and add Sub2 to the assignable scopes. Remove the role from RG1.",
      "D. Select the custom role and add Sub1 to the assignable scopes. Remove RG1 from the assignable scopes. Create a new custom role for\nSub2.\n\n=== PAGE 49 ==="
    ],
    "explanation": "A custom role's assignable scopes define where the role can be assigned. By updating the role to include Sub1 and Sub2 as assignable scopes, and removing RG1, you make the role available across both subscriptions.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q62",
    "number": "62",
    "question": "You have an Azure Subscription that contains a storage account named storageacct1234 and two users named User1 and User2.\nYou assign User1 the roles shown in the following exhibit.\nWhich two actions can User1 perform? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Assign roles to User2 for storageacct1234.",
      "B. Upload blob data to storageacct1234.",
      "C. Modify the firewall of storageacct1234.",
      "D. View blob data in storageacct1234.",
      "E. View file shares in storageacct1234."
    ],
    "explanation": "The Storage Blob Data Contributor role allows a user to read, write, and delete Azure Storage containers and blobs. Therefore, User1 can upload blob data to the storage account.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q63",
    "number": "63",
    "question": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.\nYou need to view the error events from a table named Event.\nWhich query should you run in Workspace1?",
    "domain": "monitor",
    "choices": [
      "A. select * from Event where EventType == \"error\"",
      "B. Event | search \"error\"",
      "C. Event | where EventType is \"error\"",
      "D. Get-Event Event | where {$_.EventType == \"error\"}\n\n=== PAGE 50 ==="
    ],
    "explanation": "To view specific error events in a Log Analytics workspace, you can query the Event table. The query extracts records matching the 'error' condition for the EventType attribute.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q64",
    "number": "64",
    "question": "You have an Azure App Services web app named App1.\nYou plan to deploy App1 by using Web Deploy.\nYou need to ensure that the developers of App1 can use their Azure AD credentials to deploy content to App1. The solution must use the principle\nof least privilege.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. Assign the Owner role to the developers",
      "B. Configure app-level credentials for FTPS",
      "C. Assign the Website Contributor role to the developers",
      "D. Configure user-level credentials for FTPS"
    ],
    "explanation": "The Website Contributor role lets users manage websites (web apps) but not the web plans or other resources. It provides sufficient privileges to deploy content via Web Deploy without granting excessive permissions like the Owner role.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q65",
    "number": "65",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou have a CSV file that contains the names and email addresses of 500 external users.\nYou need to create a guest user account in contoso.com for each of the 500 external users.\nSolution: From Azure AD in the Azure portal, you use the Bulk invite users operation.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 51 ==="
    ],
    "explanation": "Using the Bulk invite users operation in the Azure portal is a valid way to invite multiple guests using a CSV. If this solution is marked incorrect, it may be due to missing required headers in the CSV or an alternative administrative requirement.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q68",
    "number": "68",
    "question": "You have an Azure subscription that contains 10 virtual machines, a key vault named Vault1, and a network security group (NSG) named NSG1. All\nthe resources are deployed to the East US Azure region.\nThe virtual machines are protected by using NSG1. NSG1 is configured to block all outbound trafic to the internet.\nYou need to ensure that the virtual machines can access Vault1. The solution must use the principle of least privilege and minimize administrative\neffort\nWhat should you configure as the destination of the outbound security rule for NSG1?",
    "domain": "networking",
    "choices": [
      "A. an application security group",
      "B. a service tag",
      "C. an IP address range\n\n=== PAGE 53 ==="
    ],
    "explanation": "Service tags represent a group of IP address prefixes from a given Azure service. By using the 'AzureKeyVault' service tag as the destination in the NSG rule, you grant access specifically to Key Vault without having to manage individual IP addresses.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q69",
    "number": "69",
    "question": "You have an Azure AD tenant named adatum.com that contains the groups shown in the following table.\nAdatum.com contains the users shown in the following table.\nYou assign the Azure Active Directory Premium Plan 2 license to Group1 and User4.\nWhich users are assigned the Azure Active Directory Premium Plan 2 license?",
    "domain": "identity",
    "choices": [
      "A. User4 only",
      "B. User1 and User4 only",
      "C. User1, User2, and User4 only",
      "D. User1, User2, User3, and User4\n\n=== PAGE 54 ==="
    ],
    "explanation": "Licenses are assigned to users either directly or through group-based licensing. If group-based licensing is used for Group1, only members of Group1 (and explicitly assigned users like User4) receive the license. Depending on the group's members in the scenario, only User4 might have retained it.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q71",
    "number": "71",
    "question": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.\nSubscription1 has a user named User1. User1 has the following roles:\n\u2022 Reader\n\u2022 Security Admin\n\u2022 Security Reader\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Assign User1 the Network Contributor role for VNet1.",
      "B. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.",
      "C. Assign User1 the Owner role for VNet1.",
      "D. Assign User1 the Network Contributor role for RG1.\n\n=== PAGE 56 ==="
    ],
    "explanation": "To assign roles to other users for a specific resource, the assigning user needs the Microsoft.Authorization/roleAssignments/write permission. This is granted by the Owner role (or User Access Administrator role) on the target resource.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q73",
    "number": "73",
    "question": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.\nSubscription1 has a user named User1. User1 has the following roles:\n\u2022 Reader\n\u2022 Security Admin\n\u2022 Security Reader\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Remove User1 from the Security Reader role for Subscript on 1. Assign User1 the Contributor role for RG1.",
      "B. Assign User1 the Owner role for VNet1.",
      "C. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription 1.",
      "D. Assign User1 the Contributor role for VNet1.\n\n=== PAGE 58 ==="
    ],
    "explanation": "The Reader, Security Admin, and Security Reader roles do not allow a user to manage role assignments. Assigning the Owner role for VNet1 grants the required permissions to assign the Reader role to other users for that specific resource.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q74",
    "number": "74",
    "question": "Your on-premises network contains a VPN gateway.\nYou have an Azure subscription that contains the resources shown in the following table.\nYou need to ensure that all the trafic from VM1 to storage1 travels across the Microsoft backbone network.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. Azure Application Gateway",
      "B. private endpoints",
      "C. a network security group (NSG)",
      "D. Azure Virtual WAN\n\n=== PAGE 59 ==="
    ],
    "explanation": "Azure Private Endpoints allow you to access Azure PaaS services (like Azure Storage) privately from your virtual network. The traffic between your virtual network and the service travels entirely over the Microsoft backbone network, avoiding the public internet.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q76",
    "number": "76",
    "question": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.\nSubscription1 has a user named User1. User1 has the following roles:\n\u2022 Reader\n\u2022 Security Admin\n\u2022 Security Reader\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.",
      "B. Assign User1 the Access Administrator role for VNet1.",
      "C. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.",
      "D. Assign User1 the Network Contributor role for RG1.\n\n=== PAGE 60 ==="
    ],
    "explanation": "The User Access Administrator role is designed specifically to allow a user to manage access to Azure resources. Assigning this role to User1 for VNet1 lets them assign the Reader role to others without granting them full resource modification rights.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q78",
    "number": "78",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou need to assign User1 the Storage File Data SMB Share Contributor role for share1.\nWhat should you do first?",
    "domain": "storage",
    "choices": [
      "A. Enable identity-based data access for the file shares in storage1.",
      "B. Modify the security profile for the file shares in storage1.",
      "C. Select Default to Azure Active Directory authorization in the Azure portal for storage1.",
      "D. Configure Access control (IAM) for share1.\n\n=== PAGE 61 ==="
    ],
    "explanation": "To assign Azure RBAC roles such as Storage File Data SMB Share Contributor for a specific file share, you must use the Access control (IAM) blade for the storage account or file share. You must also ensure identity-based authentication is enabled first, but IAM is where the role is assigned.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic2_q79",
    "number": "79",
    "question": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.\nSubscription1 has a user named User1. User1 has the following roles:\n\u2022 Reader\n\u2022 Security Admin\n\u2022 Security Reader\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.",
      "B. Assign User1 the User Access Administrator role for VNet1.",
      "C. Remove User1 from the Security Reader and Reader roles for Subscription1.",
      "D. Assign User1 the Contributor role for VNet1.\n\n=== PAGE 62 ==="
    ],
    "explanation": "The User Access Administrator role grants the ability to manage user access to Azure resources. Assigning this role to User1 on VNet1 allows them to assign the Reader role to other users for the virtual network.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q82",
    "number": "82",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou have a CSV file that contains the names and email addresses of 500 external users.\nYou need to create a guest user account in contoso.com for each of the 500 external users.\nSolution: You create a PowerShell script that runs the New-MgUser cmdlet for each external user.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The `New-MgUser` cmdlet is used to create new internal users in the Azure AD tenant. To create guest user accounts for external users, you should use the `New-MgInvitation` cmdlet to send invitations.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q83",
    "number": "83",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou have a CSV file that contains the names and email addresses of 500 external users.\nYou need to create a guest user account in contoso.com for each of the 500 external users.\nSolution: You create a PowerShell script that runs the New-MgInvitation cmdlet for each external user.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 65 ==="
    ],
    "explanation": "The New-MgInvitation cmdlet is specifically designed to create B2B guest user invitations in Azure Active Directory. Running this cmdlet in a loop for each user in the CSV effectively creates the required 500 guest accounts.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q84",
    "number": "84",
    "question": "You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1.\nA user named User1 has the following roles for Subscription1:\n\u2022 Reader\n\u2022 Security Admin\n\u2022 Security Reader\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Assign User1 the Contributor role for VNet1.",
      "B. Assign User1 the Network Contributor role for VNet1.",
      "C. Assign User1 the User Access Administrator role for VNet1.",
      "D. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1."
    ],
    "explanation": "The User Access Administrator role provides the 'Microsoft.Authorization/roleAssignments/write' permission, which is required to assign roles to other users. Assigning this role specifically at the VNet1 scope adheres to the principle of least privilege.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q85",
    "number": "85",
    "question": "You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1.\nUser named User1 has the following roles for Subscription1:\n\u2022 Reader\n\u2022 Security Admin\n\u2022 Security Reader\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.",
      "B. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.",
      "C. Assign User1 the Network Contributor role for VNet1.",
      "D. Assign User1 the User Access Administrator role for VNet1.\n\n=== PAGE 66 ==="
    ],
    "explanation": "To delegate role assignment capabilities without granting full resource modification rights, the User Access Administrator role is required. Assigning this role specifically to VNet1 ensures the user can only manage access for that particular virtual network.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic2_q88",
    "number": "88",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou need to assign Workspace1 a role to allow read, write, and delete operations for the data stored in the containers of storage1.\nWhich role should you assign?",
    "domain": "storage",
    "choices": [
      "A. Storage Account Contributor",
      "B. Contributor",
      "C. Storage Blob Data Contributor",
      "D. Reader and Data Access"
    ],
    "explanation": "The Storage Blob Data Contributor role explicitly grants data-plane access to read, write, and delete blob data within a storage account. The standard Contributor role only provides control-plane access, which cannot directly manipulate the contents of blob containers.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q89",
    "number": "89",
    "question": "You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1.\nA user named User1 has the following roles for Subscription1:\n\u2022 Reader\n\u2022 Security Admin\n\u2022 Security Reader\nYou need to ensure that User1 can assign the Reader role for VNet1 to other users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.",
      "B. Assign User1 the Contributor role for VNet1.",
      "C. Assign User1 the Owner role for VNet1.",
      "D. Assign User1 the Network Contributor role for RG1.\n\n=== PAGE 69 ==="
    ],
    "explanation": "The Owner role includes the necessary 'Microsoft.Authorization/roleAssignments/write' permission to manage access and assign roles to other users. By assigning the Owner role at the VNet1 scope, the user can successfully assign the Reader role for that virtual network.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic2_q90",
    "number": "90",
    "question": "You have an Azure AD tenant that contains the groups shown in the following table.\nYou purchase Azure Active Directory Premium P2 licenses.\nTo which groups can you assign a license?",
    "domain": "identity",
    "choices": [
      "A. Group1 only",
      "B. Group1 and Group3 only",
      "C. Group3 and Group4 only",
      "D. Group1, Group2, and Group3 only",
      "E. Group1, Group2, Group3, and Group4"
    ],
    "explanation": "Azure Active Directory Premium P2 licenses can only be assigned to valid security principals like Security groups and security-enabled Microsoft 365 groups. Direct license assignment to distribution groups or mail-enabled security groups is not supported.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q94",
    "number": "94",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure Active Directory (Azure AD) tenant named contoso.com.\nYou have a CSV file that contains the names and email addresses of 500 external users.\nYou need to create a guest user account in contoso.com for each of the 500 external users.\nSolution: You create a PowerShell script that runs the New-MgUser cmdlet for each user.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 73 ==="
    ],
    "explanation": "The New-MgUser cmdlet is used to create internal organizational members, not external guest accounts. To properly onboard external users into an Azure AD tenant, the New-MgInvitation cmdlet must be used instead.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q95",
    "number": "95",
    "question": "\nHOTSPOT\n-\nYou purchase a new Azure subscription.\nYou create an Azure Resource Manager (ARM) template named deploy.json as shown in the following exhibit.\nYou connect to the subscription and run the following command.\nNew-AzDeployment \u2013Location westus \u2013TemplateFile \u201cdeploy.json\u201d\n\n=== PAGE 74 ===\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\n",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The New-AzDeployment cmdlet is used for deploying resources at the subscription scope. To deploy an ARM template to a specific resource group, the New-AzResourceGroupDeployment cmdlet must be utilized.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q96",
    "number": "96",
    "question": "Your on-premises network contains a VPN gateway.\nYou have an Azure subscription that contains the resources shown in the following table.\nYou need to ensure that all the trafic from VM1 to storage1 travels across the Microsoft backbone network.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. Azure AD Application Proxy",
      "B. private endpoints",
      "C. a network security group (NSG)",
      "D. Azure Peering Service\n\n=== PAGE 75 ==="
    ],
    "explanation": "Service endpoints and private endpoints provide optimal routing by ensuring that traffic between the Azure virtual network and the storage account remains strictly on the Microsoft Azure backbone. This enhances security by preventing traffic from traversing the public internet.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q97",
    "number": "97",
    "question": "Your on-premises network contains a VPN gateway.\nYou have an Azure subscription that contains the resources shown in the following table.\nYou need to ensure that all the trafic from VM1 to storage1 travels across the Microsoft backbone network.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. Azure AD Application Proxy",
      "B. service endpoints",
      "C. a network security group (NSG)",
      "D. Azure Firewall"
    ],
    "explanation": "Configuring a service endpoint for Azure Storage creates a direct, optimized route over the Microsoft backbone network. This effectively secures the connection from the virtual machine by removing the need for public internet traversal.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q98",
    "number": "98",
    "question": "Your on-premises network contains a VPN gateway.\nYou have an Azure subscription that contains the resources shown in the following table.\nYou need to ensure that all the trafic from VM1 to storage1 travels across the Microsoft backbone network.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. Azure Application Gateway",
      "B. service endpoints",
      "C. a network security group (NSG)",
      "D. Azure Peering Service\n\n=== PAGE 76 ==="
    ],
    "explanation": "Implementing service endpoints restricts the storage account's network access to a specific virtual network subset. This guarantees that all communication from the VM to the storage account securely utilizes the Microsoft Azure backbone network.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic2_q99",
    "number": "99",
    "question": "You have an Azure subscription named Sub1 that contains the resources shown in the following table.\nYou create a user named Admin1.\nTo what can you add Admin1 as a co-administrator?",
    "domain": "compute",
    "choices": [
      "A. RG1",
      "B. MG1",
      "C. Sub1",
      "D. VM1\n\n=== PAGE 77 ==="
    ],
    "explanation": "Classic Co-Administrator roles are legacy mechanisms that inherently apply to the entire subscription scope. Modern Azure management prefers assigning specific RBAC roles at narrower scopes like Resource Groups to restrict privileges.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic2_q101",
    "number": "101",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou need to ensure that data transfers between storage1 and VM1 do NOT traverse the internet\nWhat should you configure for storage1?",
    "domain": "storage",
    "choices": [
      "A. data protection",
      "B. a private endpoint",
      "C. Public network access in the Firewalls and virtual networks settings",
      "D. a shared access signature (SAS)"
    ],
    "explanation": "By configuring a private endpoint for the storage account, you assign it a private IP address from your virtual network. This guarantees that all data transfers between the VM and the storage account remain completely on the private Microsoft backbone network.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q1",
    "number": "1",
    "question": "You have an Azure subscription named Subscription1 that contains the storage accounts shown in the following table:\nYou plan to use the Azure Import/Export service to export data from Subscription1.\nYou need to identify which storage account can be used to export the data.\nWhat should you identify?",
    "domain": "storage",
    "choices": [
      "A. storage1",
      "B. storage2",
      "C. storage3",
      "D. storage4\n\n=== PAGE 79 ==="
    ],
    "explanation": "The Azure Import/Export service exclusively supports general-purpose v2 and general-purpose v1 storage accounts for exporting data. It does not support exporting data directly from premium block blob or premium file storage accounts.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q3",
    "number": "3",
    "question": "You have Azure subscription that includes data in following locations:\nYou plan to export data by using Azure import/export job named Export1.\nYou need to identify the data that can be exported by using Export1.\nWhich data should you identify?",
    "domain": "compute",
    "choices": [
      "A. DB1",
      "B. container1",
      "C. share1",
      "D. Table1\n\n=== PAGE 80 ==="
    ],
    "explanation": "The Azure Import/Export service is strictly designed to transfer unstructured data into Azure Blob storage or Azure Files. It does not support importing or exporting structured data like Azure SQL databases or Azure Cosmos DB databases.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q6",
    "number": "6",
    "question": "You have an Azure subscription that contains the resources in the following table.\nStore1 contains a file share named data. Data contains 5,000 files.\nYou need to synchronize the files in the file share named data to an on-premises server named Server1.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Create a container instance",
      "B. Register Server1",
      "C. Install the Azure File Sync agent on Server1",
      "D. Download an automation script",
      "E. Create a sync group\n\n=== PAGE 82 ==="
    ],
    "explanation": "To synchronize files using Azure File Sync, you must first create a Storage Sync Service and a sync group. You then install the Azure File Sync agent on the on-premises server and register it with the Storage Sync Service to begin replication.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q15",
    "number": "15",
    "question": "You have an Azure subscription that contains the storage accounts shown in the following table.\nYou need to identify which storage account can be converted to zone-redundant storage (ZRS) replication by requesting a live migration from\nAzure support.\nWhat should you identify?",
    "domain": "storage",
    "choices": [
      "A. storage1",
      "B. storage2",
      "C. storage3",
      "D. storage4\n\n=== PAGE 88 ==="
    ],
    "explanation": "Zone-redundant storage (ZRS) live migrations can be requested for standard general-purpose v2 storage accounts currently using LRS or GRS. Premium storage accounts or those with hierarchical namespaces typically require a manual data migration to achieve ZRS.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q16",
    "number": "16",
    "question": "You have an Azure subscription that contains a storage account named account1.\nYou plan to upload the disk files of a virtual machine to account1 from your on-premises network. The on-premises network uses a public IP\naddress space of\n131.107.1.0/24.\nYou plan to use the disk files to provision an Azure virtual machine named VM1. VM1 will be attached to a virtual network named VNet1. VNet1\nuses an IP address space of 192.168.0.0/24.\nYou need to configure account1 to meet the following requirements:\nEnsure that you can upload the disk files to account1.\n\u2711\nEnsure that you can attach the disks to VM1.\n\u2711\nPrevent all other access to account1.\n\u2711\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. From the Networking blade of account1, select Selected networks.",
      "B. From the Networking blade of account1, select Allow trusted Microsoft services to access this storage account.",
      "C. From the Networking blade of account1, add the 131.107.1.0/24 IP address range.",
      "D. From the Networking blade of account1, add VNet1.",
      "E. From the Service endpoints blade of VNet1, add a service endpoint."
    ],
    "explanation": "To secure the storage account while permitting on-premises uploads, you must restrict default network access and explicitly add the on-premises public IP range to the storage firewall. Permitting trusted Microsoft services allows seamless integration with Azure compute resources for VM attachment.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q19",
    "number": "19",
    "question": "You plan to use the Azure Import/Export service to copy files to a storage account.\nWhich two files should you create before you prepare the drives for the import job? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. an XML manifest file",
      "B. a dataset CSV file",
      "C. a JSON configuration file",
      "D. a PowerShell PS1 file",
      "E. a driveset CSV file"
    ],
    "explanation": "When preparing physical drives for the Azure Import/Export service using the WAImportExport tool, you must provide a dataset CSV file containing the list of files to transfer. Additionally, a driveset CSV file is required to map the target physical drives being shipped.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q22",
    "number": "22",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. a virtual machine",
      "B. an Azure Cosmos DB database",
      "C. Azure File Storage",
      "D. the Azure File Sync Storage Sync Service\n\n=== PAGE 91 ==="
    ],
    "explanation": "Azure File Storage (Azure Files) is a supported destination for the Azure Import/Export service. You can ship physical disk drives to an Azure datacenter to rapidly transfer large volumes of data directly into Azure file shares.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q24",
    "number": "24",
    "question": "You have an Azure Storage account named storage1.\nYou plan to use AzCopy to copy data to storage1.\nYou need to identify the storage services in storage1 to which you can copy the data.\nWhich storage services should you identify?",
    "domain": "storage",
    "choices": [
      "A. blob, file, table, and queue",
      "B. blob and file only",
      "C. file and table only",
      "D. file only",
      "E. blob, table, and queue only"
    ],
    "explanation": "AzCopy is a specialized command-line utility optimized for high-performance data transfers to and from Azure Storage. It natively supports copying data to both Azure Blob storage and Azure File storage services.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q26",
    "number": "26",
    "question": "You have an Azure subscription that contains an Azure Storage account.\nYou plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL\nServer instance that requires persistent storage.\nYou need to configure a storage service for Container1.\nWhat should you use?",
    "domain": "storage",
    "choices": [
      "A. Azure Files",
      "B. Azure Blob storage",
      "C. Azure Queue storage",
      "D. Azure Table storage\n\n=== PAGE 93 ==="
    ],
    "explanation": "Azure Files provides managed SMB and REST file shares that can be easily mounted as persistent storage volumes in Azure Container Instances. This allows stateful applications like SQL Server to safely persist their data outside the container lifecycle.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q27",
    "number": "27",
    "question": "You have an app named App1 that runs on two Azure virtual machines named VM1 and VM2.\nYou plan to implement an Azure Availability Set for App1. The solution must ensure that App1 is available during planned maintenance of the\nhardware hosting\nVM1 and VM2.\nWhat should you include in the Availability Set?",
    "domain": "compute",
    "choices": [
      "A. one update domain",
      "B. two fault domains",
      "C. one fault domain",
      "D. two update domains"
    ],
    "explanation": "An Availability Set distributes VMs across multiple update domains to ensure at least one VM remains operational during planned host maintenance. To protect a two-node cluster during rolling maintenance, the Availability Set must span at least two update domains.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic3_q28",
    "number": "28",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. an Azure Cosmos DB database",
      "B. Azure Blob storage",
      "C. Azure Data Lake Store",
      "D. the Azure File Sync Storage Sync Service"
    ],
    "explanation": "The Azure Import/Export service allows you to securely import large amounts of data to Azure Blob storage by shipping physical drives to an Azure datacenter. This bypasses network bandwidth constraints for massive data migrations.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q34",
    "number": "34",
    "question": "You have two Azure virtual machines named VM1 and VM2. You have two Recovery Services vaults named RSV1 and RSV2.\nVM2 is backed up to RSV1.\nYou need to back up VM2 to RSV2.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. From the RSV1 blade, click Backup items and stop the VM2 backup",
      "B. From the RSV2 blade, click Backup. From the Backup blade, select the backup for the virtual machine, and then click Backup",
      "C. From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery Services vault",
      "D. From the RSV1 blade, click Backup Jobs and export the VM2 job"
    ],
    "explanation": "A virtual machine can only be protected by a single Recovery Services vault at any given time. Before backing it up to a new vault, you must first stop the existing backup job in the current vault.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q35",
    "number": "35",
    "question": "You have a general-purpose v1 Azure Storage account named storage1 that uses locally-redundant storage (LRS).\nYou need to ensure that the data in the storage account is protected if a zone fails. The solution must minimize costs and administrative effort.\nWhat should you do first?",
    "domain": "storage",
    "choices": [
      "A. Create a new storage account.",
      "B. Configure object replication rules.",
      "C. Upgrade the account to general-purpose v2.",
      "D. Modify the Replication setting of storage1."
    ],
    "explanation": "To seamlessly change the replication strategy from LRS to a zone-redundant option (like ZRS) via the Azure portal, the storage account must first be upgraded to general-purpose v2. General-purpose v1 accounts do not natively support direct conversion to ZRS in the replication settings.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q36",
    "number": "36",
    "question": "You have an Azure subscription that contains the storage accounts shown in the following table.\nYou plan to manage the data stored in the accounts by using lifecycle management rules.\nTo which storage accounts can you apply lifecycle management rules?",
    "domain": "storage",
    "choices": [
      "A. storage1 only",
      "B. storage1 and storage2 only",
      "C. storage3 and storage4 only",
      "D. storage1, storage2, and storage3 only",
      "E. storage1, storage2, storage3, and storage4\n\n=== PAGE 99 ==="
    ],
    "explanation": "Lifecycle management rules are fully supported on standard general-purpose v2 and premium block blob storage accounts. General-purpose v1 accounts lack the necessary tiering and lifecycle management capabilities.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic3_q37",
    "number": "37",
    "question": "You create an Azure Storage account named contosostorage.\nYou plan to create a file share named data.\nUsers need to map a drive to the data file share from home computers that run Windows 10.\nWhich outbound port should you open between the home computers and the data file share?",
    "domain": "storage",
    "choices": [
      "A. 80",
      "B. 443",
      "C. 445",
      "D. 3389"
    ],
    "explanation": "Azure Files relies on the standard Server Message Block (SMB) protocol for mounting file shares on Windows clients. SMB communication requires outbound port 445 to be open on the client's network firewall.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q38",
    "number": "38",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. Azure File Storage",
      "B. an Azure Cosmos DB database",
      "C. Azure Data Factory",
      "D. Azure SQL Database\n\n=== PAGE 100 ==="
    ],
    "explanation": "Azure File Storage is a fully supported destination for data ingested via the Azure Import/Export service. It efficiently handles the bulk transfer of unstructured file data from shipped physical media.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q40",
    "number": "40",
    "question": "You have an Azure subscription that contains a storage account named storage1.\nYou have the devices shown in the following table.\nFrom which devices can you use AzCopy to copy data to storage1?",
    "domain": "storage",
    "choices": [
      "A. Device 1 only",
      "B. Device1, Device2 and Device3",
      "C. Device1 and Device2 only",
      "D. Device1 and Device3 only"
    ],
    "explanation": "AzCopy is a versatile cross-platform command-line utility available for Windows, Linux, and macOS. Therefore, it can be installed and executed from any of these operating systems to transfer data to Azure Storage.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q41",
    "number": "41",
    "question": "You have an Azure Storage account named storage1 that contains a blob container named container1.\nYou need to prevent new content added to container1 from being modified for one year.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. the access tier",
      "B. an access policy",
      "C. the Access control (IAM) settings",
      "D. the access level\n\n=== PAGE 102 ==="
    ],
    "explanation": "To enforce a strict Write-Once-Read-Many (WORM) policy on blob data, you must configure an immutable access policy at the container level. This ensures that existing blobs cannot be modified or deleted for the specified retention interval.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q43",
    "number": "43",
    "question": "You are configuring Azure Active Directory (Azure AD) authentication for an Azure Storage account named storage1.\nYou need to ensure that the members of a group named Group1 can upload files by using the Azure portal. The solution must use the principle of\nleast privilege.\nWhich two roles should you configure for storage1? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Storage Account Contributor",
      "B. Storage Blob Data Contributor",
      "C. Reader",
      "D. Contributor",
      "E. Storage Blob Data Reader\n\n=== PAGE 103 ==="
    ],
    "explanation": "The Storage Blob Data Contributor role explicitly grants the necessary data-plane permissions for Azure AD users to read, write, and delete blob data. Relying on RBAC for data-plane access ensures adherence to the principle of least privilege compared to sharing account keys.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q45",
    "number": "45",
    "question": "You have an on-premises server that contains a folder named D:\\Folder1.\nYou need to copy the contents of D:\\Folder1 to the public container in an Azure Storage account named contosodata.\nWhich command should you run?",
    "domain": "storage",
    "choices": [
      "A. https://contosodata.blob.core.windows.net/public",
      "B. azcopy sync D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot",
      "C. azcopy copy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive",
      "D. az storage blob copy start-batch D:\\Folder1 https://contosodata.blob.core.windows.net/public\n\n=== PAGE 104 ==="
    ],
    "explanation": "The `azcopy copy` command is specifically designed for high-performance data transfers from a local file system directly to an Azure Blob storage container. Using the `--recursive` flag ensures that all nested folders and files are included in the transfer.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q46",
    "number": "46",
    "question": "You have an Azure subscription.\nIn the Azure portal, you plan to create a storage account named storage1 that will have the following settings:\nPerformance: Standard\n\u2711\nReplication: Zone-redundant storage (ZRS)\n\u2711\nAccess tier (default): Cool\n\u2711\nHierarchical namespace: Disabled\n\u2711\nYou need to ensure that you can set Account kind for storage1 to BlockBlobStorage.\nWhich setting should you modify first?",
    "domain": "storage",
    "choices": [
      "A. Performance",
      "B. Replication",
      "C. Access tier (default)",
      "D. Hierarchical namespace"
    ],
    "explanation": "The BlockBlobStorage account kind is exclusively reserved for Premium performance tier storage accounts optimized for high transaction rates. To select this account kind, you must first change the performance tier from Standard to Premium.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q48",
    "number": "48",
    "question": "You create an Azure Storage account.\nYou plan to add 10 blob containers to the storage account.\nFor one of the containers, you need to use a different key to encrypt data at rest.\nWhat should you do before you create the container?",
    "domain": "storage",
    "choices": [
      "A. Generate a shared access signature (SAS).",
      "B. Modify the minimum TLS version.",
      "C. Rotate the access keys.",
      "D. Create an encryption scope."
    ],
    "explanation": "An encryption scope must be created at the storage account level before it can be applied to a new blob container. This allows you to securely manage and assign distinct customer-managed keys for specific containers or individual blobs.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic3_q51",
    "number": "51",
    "question": "You have an on-premises server that contains a folder named D:\\Folder1.\nYou need to copy the contents of D:\\Folder1 to the public container in an Azure Storage account named contosodata.\nWhich command should you run?",
    "domain": "storage",
    "choices": [
      "A. az storage blob copy start D:\\Folder1 https://contosodata.blob.core.windows.net/public",
      "B. azcopy sync D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot",
      "C. azcopy copy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive",
      "D. az storage blob copy start-batch D:\\Folder1 https://contosodata.blob.core.windows.net/public"
    ],
    "explanation": "To upload a local directory to Azure Blob storage using AzCopy, the `azcopy copy` command is utilized along with the `--recursive` parameter. This efficiently uploads the specified folder and all its contents to the destination container.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q54",
    "number": "54",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. an Azure Cosmos DB database",
      "B. Azure File Storage",
      "C. Azure SQL Database",
      "D. a virtual machine\n\n=== PAGE 109 ==="
    ],
    "explanation": "The Azure Import/Export service is specifically designed to facilitate bulk data transfers of unstructured data directly into Azure Blob Storage or Azure File Storage. It does not support importing data into relational services like Azure SQL Database.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q55",
    "number": "55",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou need to perform the tasks shown in the following table.\nWhich tasks can you perform by using Azure Storage Explorer?",
    "domain": "storage",
    "choices": [
      "A. Task1 and Task3 only",
      "B. Task1, Task2, and Task3 only",
      "C. Task1, Task3, and Task4 only",
      "D. Task2, Task3, and Task4 only",
      "E. Task1, Task2, Task3, and Task4\n\n=== PAGE 110 ==="
    ],
    "explanation": "Azure Storage Explorer is a comprehensive GUI tool that manages blobs, files, queues, and tables across storage accounts. It also allows managing storage account access using Shared Access Signatures (SAS) and interacting with Azure Data Lake Storage resources.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic3_q57",
    "number": "57",
    "question": "You have an Azure subscription that contains a storage account named storage1.\nYou plan to create a blob container named container1.\nYou need to use customer-managed key encryption for container1.\nWhich key should you use?",
    "domain": "storage",
    "choices": [
      "A. an EC key that uses the P-384 curve only",
      "B. an EC key that uses the P-521 curve only",
      "C. an EC key that uses the P-384 curve or P-521 curve only",
      "D. an RSA key with a key size of 4096 only",
      "E. an RSA key type with a key size of 2048, 3072, or 4096 only\n\n=== PAGE 113 ==="
    ],
    "explanation": "When configuring customer-managed keys (CMK) for Azure Storage encryption via Azure Key Vault, the key must be an RSA or RSA-HSM key. Supported RSA key sizes for Azure Storage encryption are 2048, 3072, and 4096 bits.",
    "correct": 4,
    "type": "pdf"
  },
  {
    "id": "topic3_q60",
    "number": "60",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. Azure Blob Storage",
      "B. Azure Data Lake Store",
      "C. Azure SQL Database",
      "D. a virtual machine"
    ],
    "explanation": "Azure Blob Storage is a primary supported destination for the Azure Import/Export service, allowing bulk data migration from physical drives. It securely ingests massive amounts of unstructured object data directly into blob containers.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q61",
    "number": "61",
    "question": "You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in\nthe following table.\nOn June 1, you store a blob named File1 in the Hot access tier of storage1.\nWhat is the state of File1 on June 7?",
    "domain": "storage",
    "choices": [
      "A. stored in the Cool access tier",
      "B. stored in the Archive access tier",
      "C. stored in the Hot access tier",
      "D. deleted\n\n=== PAGE 117 ==="
    ],
    "explanation": "If a lifecycle management rule is configured to delete a blob after a certain number of days, the evaluation timer starts from the blob's last modification or creation date. Therefore, if the blob meets the threshold condition of the rule on June 7, it will be permanently deleted.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic3_q63",
    "number": "63",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. an Azure Cosmos DB database",
      "B. Azure Data Lake Store",
      "C. Azure Blob storage",
      "D. Azure Data Factory\n\n=== PAGE 118 ==="
    ],
    "explanation": "Azure Blob storage is a highly scalable target for the Azure Import/Export service, enabling the offline ingestion of terabytes of data. This service is ideal for transferring large backups or media archives into blob containers.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q65",
    "number": "65",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. an Azure Cosmos DB database",
      "B. Azure Blob Storage",
      "C. Azure SQL Database",
      "D. the Azure File Sync Storage Sync Service"
    ],
    "explanation": "The Azure Import/Export service supports migrating massive datasets offline by shipping disks directly to Azure data centers. The only supported target storage services for this operation are Azure Blob Storage and Azure File Storage.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q66",
    "number": "66",
    "question": "You plan to create an Azure Storage account named storage1 that will contain a file share named share1.\nYou need to ensure that share1 can support SMB Multichannel. The solution must minimize costs.\nHow should you configure storage?",
    "domain": "storage",
    "choices": [
      "A. Premium performance with locally-redundant storage (LRS)",
      "B. Standard performance with zone-redundant storage (ZRS)",
      "C. Premium performance with geo-redundant storage (GRS)",
      "D. Standard performance with locally-redundant storage (LRS)"
    ],
    "explanation": "SMB Multichannel significantly improves Azure Files performance by enabling multiple concurrent network connections. This feature is exclusively available for premium file shares, which require a Premium performance tier with Locally-Redundant Storage (LRS) or Zone-Redundant Storage (ZRS).",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q67",
    "number": "67",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. Azure Data Lake Store",
      "B. Azure File Storage",
      "C. Azure SQL Database",
      "D. the Azure File Sync Storage Sync Service\n\n=== PAGE 120 ==="
    ],
    "explanation": "Azure File Storage acts as a fully managed cloud file share that supports ingestion via the Azure Import/Export service. This is the optimal destination when bulk migrating unstructured file server data to the cloud.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q68",
    "number": "68",
    "question": "You have an Azure subscription that contains a storage account named storage1.\nYou plan to use conditions when assigning role-based access control (RBAC) roles to storage1.\nWhich storage1 services support conditions when assigning roles?",
    "domain": "identity",
    "choices": [
      "A. containers only",
      "B. file shares only",
      "C. tables only",
      "D. queues only",
      "E. containers and queues only\nF. files shares and tables only\n\n=== PAGE 121 ==="
    ],
    "explanation": "Azure Attribute-Based Access Control (ABAC) allows the addition of conditions to role assignments for finer-grained access control. Currently, this capability is only supported for Azure Storage blob containers and queues, not file shares or tables.",
    "correct": 4,
    "type": "pdf"
  },
  {
    "id": "topic3_q70",
    "number": "70",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. the Publish-AzVMDscConfiguration cmdlet",
      "B. Azure Application Insights",
      "C. a Desired State Configuration (DSC) extension",
      "D. Azure AD Application Proxy\n\n=== PAGE 123 ==="
    ],
    "explanation": "The DSC extension for Windows can be used to configure virtual machines post-deployment. It uses PowerShell DSC to install roles or features such as NGINX consistently across all instances in a virtual machine scale set.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q73",
    "number": "73",
    "question": "You have an Azure Storage account that contains 5,000 blobs accessed by multiple users.\nYou need to ensure that the users can view only specific blobs based on blob index tags.\nWhat should you include in the solution?",
    "domain": "storage",
    "choices": [
      "A. a role assignment condition",
      "B. a stored access policy",
      "C. just-in-time (JIT) VM access",
      "D. a shared access signature (SAS)"
    ],
    "explanation": "Role assignment conditions (ABAC) in Azure allow administrators to grant access to blobs based on specific attributes, such as blob index tags. This enables fine-grained access control so users can only view blobs containing the appropriate tags.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q74",
    "number": "74",
    "question": "You have an Azure Storage account named storage1.\nFor storage1, you create an encryption scope named Scope1.\nWhich storage types can you encrypt by using Scope?",
    "domain": "storage",
    "choices": [
      "A. file shares only",
      "B. containers only",
      "C. file shares and containers only",
      "D. containers and tables only",
      "E. file shares, containers, and tables only\nF. file shares, containers, tables, and queues\n\n=== PAGE 127 ==="
    ],
    "explanation": "In Azure Storage, an encryption scope is applied exclusively at the container level or the individual blob level. It cannot be used to encrypt file shares, tables, or queues directly.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q76",
    "number": "76",
    "question": "You have an Azure subscription named Subscription1.\nYou have 5 TB of data that you need to transfer to Subscription1.\nYou plan to use an Azure Import/Export job.\nWhat can you use as the destination of the imported data?",
    "domain": "compute",
    "choices": [
      "A. Azure Data Factory",
      "B. the Azure File Sync Storage Sync Service",
      "C. Azure File Storage",
      "D. Azure SQL Database\n\n=== PAGE 128 ==="
    ],
    "explanation": "The Azure Import/Export service is specifically designed to securely transfer large amounts of data to Azure Blob Storage and Azure File Storage. It does not support direct imports to Azure Data Factory, Storage Sync Service, or SQL Database.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q78",
    "number": "78",
    "question": "You have an Azure virtual machine named VM1 and an Azure key vault named Vault1.\nOn VM1, you plan to configure Azure Disk Encryption to use a key encryption key (KEK).\nYou need to prepare Vault1 for Azure Disk Encryption.\nWhich two actions should you perform on Vault1? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Select Azure Virtual machines for deployment.",
      "B. Create a new key.",
      "C. Create a new secret.",
      "D. Configure a key rotation policy.",
      "E. Select Azure Disk Encryption for volume encryption.\n\n=== PAGE 129 ==="
    ],
    "explanation": "Azure Disk Encryption requires an Azure Key Vault containing a Key Encryption Key (KEK) to protect the volume encryption key. Creating a new key within the vault satisfies this requirement.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q79",
    "number": "79",
    "question": "You have an Azure subscription that contains a virtual machine named VM1 and an Azure key vault named KV1.\nYou need to configure encryption for VM1. The solution must meet the following requirements:\n\u2022 Store and use the encryption key in KV1.\n\u2022 Maintain encryption if VM1 is downloaded from Azure.\n\u2022 Encrypt both the operating system disk and the data disks.\nWhich encryption method should you use?",
    "domain": "compute",
    "choices": [
      "A. customer-managed keys",
      "B. Confidential disk encryption",
      "C. Azure Disk Encryption",
      "D. encryption at host"
    ],
    "explanation": "Azure Disk Encryption (ADE) uses BitLocker to encrypt the OS and data disks, and it integrates with Azure Key Vault to manage the encryption keys. Because it uses BitLocker within the guest OS, the virtual machine remains encrypted even if the VHD is downloaded from Azure.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic3_q81",
    "number": "81",
    "question": "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1.\nYou need to configure access to container1. The solution must meet the following requirements:\n\u2022 Only allow read access.\n\u2022 Allow both HTTP and HTTPS protocols.\n\u2022 Apply access permissions to all the content in the container.\nWhat should you use?",
    "domain": "storage",
    "choices": [
      "A. an access policy",
      "B. a shared access signature (SAS)",
      "C. Azure Content Delivery Network (CDN)",
      "D. access keys"
    ],
    "explanation": "An RBAC role assignment or an access policy on the container can be used to grant read access to all its contents. This allows users to read the data securely over any supported protocol, including HTTP and HTTPS.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic3_q82",
    "number": "82",
    "question": "You need to create an Azure Storage account named storage1. The solution must meet the following requirements:\n\u2022 Support Azure Data Lake Storage.\n\u2022 Minimize costs for infrequently accessed data.\n\u2022 Automatically replicate data to a secondary Azure region.\nWhich three options should you configure for storage1? Each correct answer presents part of the solution.\nNOTE: Each correct answer is worth one point.",
    "domain": "storage",
    "choices": [
      "A. zone-redundant storage (ZRS)",
      "B. the Cool access tire",
      "C. geo-redundant storage (GRS)",
      "D. the Hot access tier",
      "E. hierarchical namespace\n\n=== PAGE 131 ==="
    ],
    "explanation": "The Cool access tier minimizes costs for data that is infrequently accessed while still providing high availability. Along with a hierarchical namespace and GRS replication, this fulfills all the requirements.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q84",
    "number": "84",
    "question": "You have an Azure subscription that contains the storage accounts shown in the following table.\nWhich storage account can be converted to zone-redundant storage (ZRS) replication?",
    "domain": "storage",
    "choices": [
      "A. storage1",
      "B. storage2",
      "C. storage3",
      "D. storage4\n\n=== PAGE 133 ==="
    ],
    "explanation": "Only General Purpose v2 (GPv2) storage accounts support conversion to Zone-Redundant Storage (ZRS) replication. Older account types like GPv1 or legacy Blob storage must first be upgraded to GPv2.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic3_q85",
    "number": "85",
    "question": "You have an Azure subscription that contains the devices shown in the following table.\nOn which devices can you install Azure Storage Explorer?",
    "domain": "storage",
    "choices": [
      "A. Device1 only",
      "B. Device1 and Device2 only",
      "C. Device1 and Device3 only",
      "D. Device1, Device2, and Device3 only",
      "E. Device1, Device3, and Device4 only\n\n=== PAGE 134 ==="
    ],
    "explanation": "Azure Storage Explorer is a versatile, cross-platform application. It can be successfully installed and run on Windows, macOS, and Linux operating systems.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic4_q1",
    "number": "1",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou deploy an Azure Kubernetes Service (AKS) cluster named AKS1.\nYou need to deploy a YAML file to AKS1.\nSolution: From Azure CLI, you run az aks.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The 'az aks' command is used to manage Azure Kubernetes Service clusters, such as creating or scaling them. To deploy a YAML configuration file to a cluster, you must use the 'kubectl' client.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q2",
    "number": "2",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou deploy an Azure Kubernetes Service (AKS) cluster named AKS1.\nYou need to deploy a YAML file to AKS1.\nSolution: From Azure CLI, you run the kubectl client.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 141 ==="
    ],
    "explanation": "The 'kubectl' client is the standard Kubernetes command-line tool. You use it with the 'apply' or 'create' commands to deploy configurations defined in YAML files to your AKS cluster.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q3",
    "number": "3",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou deploy an Azure Kubernetes Service (AKS) cluster named AKS1.\nYou need to deploy a YAML file to AKS1.\nSolution: From Azure CLI, you run azcopy.\nDoes this meet the goal?",
    "domain": "storage",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "AzCopy is a command-line utility optimized for copying data to and from Azure Storage. It cannot be used to deploy YAML manifests to an Azure Kubernetes Service (AKS) cluster.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q4",
    "number": "4",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1 that runs Windows Server 2016.\nYou need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\nSolution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on\nVM1. You create an alert in Azure Monitor and specify the storage account as the source.\nDoes that meet the goal?",
    "domain": "storage",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 142 ==="
    ],
    "explanation": "Relying solely on a storage account as a source for Azure Monitor alerts is insufficient for this scenario. You should use a Log Analytics workspace to collect the event logs and then configure an alert rule based on a log search query.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q6",
    "number": "6",
    "question": "You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy 100 virtual\nmachines.\nYou need to modify the template to reference an administrative password. You must prevent the password from being stored in plain text.\nWhat should you create to store the password?",
    "domain": "compute",
    "choices": [
      "A. an Azure Key Vault and an access policy",
      "B. an Azure Storage account and an access policy",
      "C. a Recovery Services vault and a backup policy",
      "D. Azure Active Directory (AD) Identity Protection and an Azure policy\n\n=== PAGE 143 ==="
    ],
    "explanation": "Azure Key Vault is designed to securely store and manage secrets, such as administrative passwords, preventing them from being exposed in plain text within ARM templates. An access policy ensures that the deployment process has the necessary permissions to retrieve the secret.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q9",
    "number": "9",
    "question": "You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image.\nYou need to ensure that when the scale set virtual machines are provisioned, they have web server components installed.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Upload a configuration script",
      "B. Create an automation account",
      "C. Create an Azure policy",
      "D. Modify the extensionProfile section of the Azure Resource Manager template",
      "E. Create a new virtual machine scale set in the Azure portal"
    ],
    "explanation": "A configuration script (like a PowerShell script) contains the commands to install the necessary web server components. This script is uploaded and then executed during deployment via the Custom Script Extension.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q12",
    "number": "12",
    "question": "You have an Azure Resource Manager template named Template1 that is used to deploy an Azure virtual machine.\nTemplate1 contains the following text:\nThe variables section in Template1 contains the following text:\n\"location\": \"westeurope\"\nThe resources section in Template1 contains the following text:\nYou need to deploy the virtual machine to the West US location by using Template1.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. Modify the location in the resources section to westus",
      "B. Select West US during the deployment",
      "C. Modify the location in the variables section to westus\n\n=== PAGE 147 ==="
    ],
    "explanation": "If the location is explicitly hardcoded in the resources section, it will override any variables or parameters passed during deployment. Therefore, you must modify the location property directly within the resources section to specify 'westus'.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q13",
    "number": "13",
    "question": "You create an App Service plan named Plan1 and an Azure web app named webapp1.\nYou discover that the option to create a staging slot is unavailable.\nYou need to create a staging slot for Plan1.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. From Plan1, scale up the App Service plan",
      "B. From webapp1, modify the Application settings",
      "C. From webapp1, add a custom domain",
      "D. From Plan1, scale out the App Service plan"
    ],
    "explanation": "Deployment slots are only supported on Standard, Premium, or Isolated App Service plan pricing tiers. You must first scale up the App Service plan if it is currently on a Free or Basic tier where the staging slot option is unavailable.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q14",
    "number": "14",
    "question": "You plan to move a distributed on-premises app named App1 to an Azure subscription.\nAfter the planned move, App1 will be hosted on several Azure virtual machines.\nYou need to ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance.\nWhat should you create?",
    "domain": "compute",
    "choices": [
      "A. one virtual machine scale set that has 10 virtual machines instances",
      "B. one Availability Set that has three fault domains and one update domain",
      "C. one Availability Set that has 10 update domains and one fault domain",
      "D. one virtual machine scale set that has 12 virtual machines instances"
    ],
    "explanation": "Virtual machine scale sets provide built-in high availability by distributing instances across update domains. A scale set with 10 instances will ensure that no more than 20% (2 instances) are taken offline simultaneously during planned maintenance, leaving 8 instances running.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q15",
    "number": "15",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1 that runs Windows Server 2016.\nYou need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\nSolution: You create an event subscription on VM1. You create an alert in Azure Monitor and specify VM1 as the source\nDoes this meet the goal?",
    "domain": "monitor",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 148 ==="
    ],
    "explanation": "Azure Event Grid event subscriptions are designed for reacting to state changes and infrastructure events, not for querying guest OS log data. You must use a Log Analytics workspace and log alerts to trigger when specific events are found in the System event log.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q16",
    "number": "16",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\nYou receive a notification that VM1 will be affected by maintenance.\nYou need to move VM1 to a different host immediately.\nSolution: From the Overview blade, you move the virtual machine to a different subscription.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Moving a virtual machine to a different subscription only changes its logical billing and management boundary. It does not physically migrate the virtual machine to a different underlying host server to avoid hardware maintenance.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q17",
    "number": "17",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\nYou receive a notification that VM1 will be affected by maintenance.\nYou need to move VM1 to a different host immediately.\nSolution: From the Redeploy blade, you click Redeploy.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Redeploy option shuts down the virtual machine and physically moves it to a new host node within the Azure infrastructure. This is the correct and immediate action to take when the current host is slated for maintenance.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q18",
    "number": "18",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\nYou receive a notification that VM1 will be affected by maintenance.\nYou need to move VM1 to a different host immediately.\nSolution: From the Update management blade, you click Enable.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 149 ==="
    ],
    "explanation": "Update management is a feature of Azure Automation used to manage operating system patches and updates within the guest OS. It does not move the virtual machine to a different physical host node to avoid Azure infrastructure maintenance.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q19",
    "number": "19",
    "question": "You have an Azure subscription that contains a web app named webapp1.\nYou need to add a custom domain named www.contoso.com to webapp1.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Create a DNS record",
      "B. Add a connection string",
      "C. Upload a certificate.",
      "D. Stop webapp1."
    ],
    "explanation": "Before you can assign a custom domain to an Azure web app, Azure must verify that you own the domain. You must first create a DNS record (such as a CNAME or TXT record) with your domain registrar to complete the verification process.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q21",
    "number": "21",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the resources shown in the following table.\nVM1 connects to VNET1.\nYou need to connect VM1 to VNET2.\nSolution: You delete VM1. You recreate VM1, and then you create a new network interface for VM1 and connect it to VNET2.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Recreating the virtual machine allows you to attach a new network interface associated with the target virtual network (VNET2). Since a VM cannot be moved between virtual networks while it exists, deleting and recreating it with the same disks is a valid solution.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q22",
    "number": "22",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the resources shown in the following table.\nVM1 connects to VNET1.\nYou need to connect VM1 to VNET2.\nSolution: You turn off VM1, and then you add a new network interface to VM1.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 151 ==="
    ],
    "explanation": "A virtual machine's network interfaces must all reside in the same virtual network that the VM was originally created in. You cannot simply add a new network interface connected to VNET2 while the VM remains logically attached to VNET1.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q25",
    "number": "25",
    "question": "You deploy an Azure Kubernetes Service (AKS) cluster named Cluster1 that uses the IP addresses shown in the following table.\nYou need to provide internet users with access to the applications that run in Cluster1.\nWhich IP address should you include in the DNS record for Cluster1?",
    "domain": "networking",
    "choices": [
      "A. 131.107.2.1",
      "B. 10.0.10.11",
      "C. 172.17.7.1",
      "D. 192.168.10.2"
    ],
    "explanation": "To provide external access to applications running in an AKS cluster, you must expose them through a public-facing service such as a LoadBalancer. The public IP address (131.107.2.1) is what internet users will use to resolve and reach the cluster.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q26",
    "number": "26",
    "question": "You have a deployment template named Template1 that is used to deploy 10 Azure web apps.\nYou need to identify what to deploy before you deploy Template1. The solution must minimize Azure costs.\nWhat should you identify?",
    "domain": "compute",
    "choices": [
      "A. five Azure Application Gateways",
      "B. one App Service plan",
      "C. 10 App Service plans",
      "D. one Azure Traffic Manager",
      "E. one Azure Application Gateway\n\n=== PAGE 154 ==="
    ],
    "explanation": "Azure App Service allows multiple web apps to be hosted on a single App Service plan. To minimize costs, you should identify and deploy a single shared App Service plan before deploying the 10 web apps into it.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q28",
    "number": "28",
    "question": "You have an Azure subscription that contains a virtual machine named VM1. VM1 hosts a line-of-business application that is available 24 hours a\nday. VM1 has one network interface and one managed disk. VM1 uses the D4s v3 size.\nYou plan to make the following changes to VM1:\nChange the size to D8s v3.\n\u2711\nAdd a 500-GB managed disk.\n\u2711\nAdd the Puppet Agent extension.\n\u2711\nEnable Desired State Configuration Management.\n\u2711\nWhich change will cause downtime for VM1?",
    "domain": "compute",
    "choices": [
      "A. Enable Desired State Configuration Management",
      "B. Add a 500-GB managed disk",
      "C. Change the size to D8s v3",
      "D. Add the Puppet Agent extension"
    ],
    "explanation": "Resizing a virtual machine often requires moving it to a different hardware cluster that supports the target size. This operation necessitates a restart of the virtual machine, resulting in temporary downtime.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic4_q29",
    "number": "29",
    "question": "You have an app named App1 that runs on an Azure web app named webapp1.\nThe developers at your company upload an update of App1 to a Git repository named Git1.\nWebapp1 has the deployment slots shown in the following table.\nYou need to ensure that the App1 update is tested before the update is made available to users.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Swap the slots",
      "B. Deploy the App1 update to webapp1-prod, and then test the update",
      "C. Stop webapp1-prod",
      "D. Deploy the App1 update to webapp1-test, and then test the update",
      "E. Stop webapp1-test\n\n=== PAGE 156 ==="
    ],
    "explanation": "Deployment slots allow you to deploy and test updates in a staging environment before pushing them to production. Deploying to the webapp1-test slot ensures that users are unaffected while the developers validate the new application code.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic4_q30",
    "number": "30",
    "question": "You have an Azure subscription named Subscription1 that has the following providers registered:\nAuthorization\n\u2711\nAutomation\n\u2711\nResources\n\u2711\nCompute\n\u2711\nKeyVault\n\u2711\nNetwork\n\u2711\nStorage\n\u2711\nBilling\n\u2711\nWeb\n\u2711\nSubscription1 contains an Azure virtual machine named VM1 that has the following configurations:\nPrivate IP address: 10.0.0.4 (dynamic)\n\u2711\nNetwork security group (NSG): NSG1\n\u2711\nPublic IP address: None\n\u2711\nAvailability set: AVSet\n\u2711\nSubnet: 10.0.0.0/24\n\u2711\nManaged disks: No\n\u2711\nLocation: East US\n\u2711\nYou need to record all the successful and failed connection attempts to VM1.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Enable Azure Network Watcher in the East US Azure region.",
      "B. Add an Azure Network Watcher connection monitor.",
      "C. Register the MicrosoftLogAnalytics provider.",
      "D. Create an Azure Storage account.",
      "E. Register the Microsoft.Insights resource provider.\nF. Enable Azure Network Watcher flow logs."
    ],
    "explanation": "Azure Network Watcher is a regional service required for network-level monitoring and diagnostics. Enabling it in the East US region is the foundational step needed before you can configure features like NSG flow logs to track connection attempts.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q31",
    "number": "31",
    "question": "You need to deploy an Azure virtual machine scale set that contains five instances as quickly as possible.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. Deploy five virtual machines. Modify the Availability Zones settings for each virtual machine.",
      "B. Deploy five virtual machines. Modify the Size setting for each virtual machine.",
      "C. Deploy one virtual machine scale set that is set to VM (virtual machines) orchestration mode.",
      "D. Deploy one virtual machine scale set that is set to ScaleSetVM orchestration mode.\n\n=== PAGE 157 ==="
    ],
    "explanation": "A virtual machine scale set using the ScaleSetVM (Uniform) orchestration mode provisions identical instances from a single model simultaneously. This is the fastest and most efficient way to deploy and manage a group of five identical virtual machines.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic4_q32",
    "number": "32",
    "question": "You plan to create the Azure web apps shown in the following table.\nWhat is the minimum number of App Service plans you should create for the web apps?",
    "domain": "compute",
    "choices": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4\n\n=== PAGE 158 ==="
    ],
    "explanation": "Web apps running on different operating systems (Windows and Linux) cannot share the same App Service plan. Therefore, you must create at least two separate App Service plans to accommodate the different platform requirements.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q34",
    "number": "34",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were\ndeployed by using templates.\nYou need to view the date and time when the resources were created in RG1.\nSolution: From the Subscriptions blade, you select the subscription, and then click Programmatic deployment.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Programmatic deployment option is used to manage auto-generated ARM templates for marketplace items, and it does not provide historical deployment logs. To view the date and time of resource creation, you must examine the deployment history or activity logs.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q35",
    "number": "35",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the resources shown in the following table.\nVM1 connects to VNET1.\nYou need to connect VM1 to VNET2.\nSolution: You create a new network interface, and then you add the network interface to VM1.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 160 ==="
    ],
    "explanation": "All network interfaces attached to an Azure virtual machine must belong to the same virtual network. You cannot connect a VM to VNET2 simply by adding a new network interface if the VM is already provisioned in VNET1.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q36",
    "number": "36",
    "question": "You have an Azure Active Directory (Azure AD) tenant named adatum.com that contains the users shown in the following table.\nAdatum.com has the following configurations:\nUsers may join devices to Azure AD is set to User1.\n\u2711\nAdditional local administrators on Azure AD joined devices is set to None.\n\u2711\nYou deploy Windows 10 to a computer named Computer1. User1 joins Computer1 to adatum.com.\nYou need to identify the local Administrator group membership on Computer1.\nWhich users are members of the local Administrators group?",
    "domain": "identity",
    "choices": [
      "A. User1 only",
      "B. User2 only",
      "C. User1 and User2 only",
      "D. User1, User2, and User3 only",
      "E. User1, User2, User3, and User4"
    ],
    "explanation": "When a device is joined to Azure AD, the user who performs the join operation is automatically added to the local Administrators group. Additionally, users with the Global Administrator or Azure AD Joined Device Local Administrator roles are also added to the group.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic4_q40",
    "number": "40",
    "question": "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\nYou create virtual machines in Subscription1 as shown in the following table.\nYou plan to use Vault1 for the backup of as many virtual machines as possible.\nWhich virtual machines can be backed up to Vault1?",
    "domain": "storage",
    "choices": [
      "A. VM1 only",
      "B. VM3 and VMC only",
      "C. VM1, VM2, VM3, VMA, VMB, and VMC",
      "D. VM1, VM3, VMA, and VMC only",
      "E. VM1 and VM3 only"
    ],
    "explanation": "Azure Backup requires the Recovery Services vault to be in the same region as the virtual machines being backed up. Only the virtual machines residing in the exact same Azure region as Vault1 can be protected by it.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic4_q41",
    "number": "41",
    "question": "You have an Azure Kubernetes Service (AKS) cluster named AKS1.\nYou need to configure cluster autoscaler for AKS1.\nWhich two tools should you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. the kubectl command",
      "B. the az aks command",
      "C. the Set-AzVm cmdlet",
      "D. the Azure portal",
      "E. the Set-AzAks cmdlet\n\n=== PAGE 164 ==="
    ],
    "explanation": "While the az aks command and Azure Portal manage the cluster autoscaler directly, the kubectl command is essential for configuring the Horizontal Pod Autoscaler (HPA). The HPA works in tandem with the cluster autoscaler to dynamically adjust resources.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q42",
    "number": "42",
    "question": "You create the following resources in an Azure subscription:\nAn Azure Container Registry instance named Registry1\n\u2711\nAn Azure Kubernetes Service (AKS) cluster named Cluster1\n\u2711\nYou create a container image named App1 on your administrative workstation.\nYou need to deploy App1 to Cluster1.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Run the docker push command.",
      "B. Create an App Service plan.",
      "C. Run the az acr build command.",
      "D. Run the az aks create command."
    ],
    "explanation": "Before an Azure Kubernetes Service cluster can pull and deploy a custom container image, the image must be stored in an accessible registry. You must first use the docker push command to upload the App1 image to the Azure Container Registry.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q43",
    "number": "43",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou need to configure a proximity placement group for VMSS1.\nWhich proximity placement groups should you use?",
    "domain": "compute",
    "choices": [
      "A. Proximity2 only",
      "B. Proximity1, Proximity2, and Proximity3",
      "C. Proximity1 only",
      "D. Proximity1 and Proximity3 only"
    ],
    "explanation": "Proximity placement groups are region-specific Azure resources designed to minimize network latency between VMs. You can only assign a virtual machine scale set to a proximity placement group that is located in the same Azure region.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q44",
    "number": "44",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were\ndeployed by using templates.\nYou need to view the date and time when the resources were created in RG1.\nSolution: From the Subscriptions blade, you select the subscription, and then click Resource providers.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 165 ==="
    ],
    "explanation": "The Resource providers blade is used to register and manage the resource providers available in your Azure subscription, not to view deployment logs. You need to inspect the 'Deployments' section of the resource group to see creation dates.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q45",
    "number": "45",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were\ndeployed by using templates.\nYou need to view the date and time when the resources were created in RG1.\nSolution: From the RG1 blade, you click Automation script.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Automation script (now Export template) blade generates an ARM template representing the current state of the resource group for future deployments. It does not display historical data such as the date and time when the resources were deployed.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q46",
    "number": "46",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were\ndeployed by using templates.\nYou need to view the date and time when the resources were created in RG1.\nSolution: From the RG1 blade, you click Deployments.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Deployments blade of a resource group maintains a history of all Azure Resource Manager template deployments. You can select this blade to view detailed logs, including the exact date, time, and status of when the resources were created.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q47",
    "number": "47",
    "question": "You have an Azure subscription named Subscription1.\nYou deploy a Linux virtual machine named VM1 to Subscription1.\nYou need to monitor the metrics and the logs of VM1.\nWhat should you use?",
    "domain": "monitor",
    "choices": [
      "A. Azure HDInsight",
      "B. Linux Diagnostic Extension (LAD) 3.0",
      "C. the AzurePerformanceDiagnostics extension",
      "D. Azure Analysis Services\n\n=== PAGE 166 ==="
    ],
    "explanation": "The Linux Diagnostic Extension (LAD) is specifically designed to collect telemetry and diagnostic data from Linux virtual machines in Azure. It aggregates metrics and logs, which can then be routed to Azure Storage or Azure Monitor for analysis.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q49",
    "number": "49",
    "question": "You plan to deploy three Azure virtual machines named VM1, VM2, and VM3. The virtual machines will host a web app named App1.\nYou need to ensure that at least two virtual machines are available if a single Azure datacenter becomes unavailable.\nWhat should you deploy?",
    "domain": "compute",
    "choices": [
      "A. all three virtual machines in a single Availability Zone",
      "B. all virtual machines in a single Availability Set",
      "C. each virtual machine in a separate Availability Zone",
      "D. each virtual machine in a separate Availability Set\n\n=== PAGE 167 ==="
    ],
    "explanation": "Availability Zones are physically separate datacenters within an Azure region, each with independent power, cooling, and networking. Deploying the virtual machines across separate zones ensures that the application remains highly available even if an entire datacenter fails.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic4_q50",
    "number": "50",
    "question": "You have an Azure virtual machine named VM1 that runs Windows Server 2019.\nYou save VM1 as a template named Template1 to the Azure Resource Manager library.\nYou plan to deploy a virtual machine named VM2 from Template1.\nWhat can you configure during the deployment of VM2?",
    "domain": "compute",
    "choices": [
      "A. operating system",
      "B. administrator username",
      "C. virtual machine size",
      "D. resource group"
    ],
    "explanation": "When deploying a virtual machine from a saved Azure Resource Manager template, properties like the operating system and VM size are already defined in the template body. However, you must specify deployment-specific metadata such as the target resource group.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic4_q51",
    "number": "51",
    "question": "You have an Azure subscription that contains an Azure virtual machine named VM1. VM1 runs a financial reporting app named App1 that does not\nsupport multiple active instances.\nAt the end of each month, CPU usage for VM1 peaks when App1 runs.\nYou need to create a scheduled runbook to increase the processor performance of VM1 at the end of each month.\nWhat task should you include in the runbook?",
    "domain": "compute",
    "choices": [
      "A. Add the Azure Performance Diagnostics agent to VM1.",
      "B. Modify the VM size property of VM1.",
      "C. Add VM1 to a scale set.",
      "D. Increase the vCPU quota for the subscription.",
      "E. Add a Desired State Configuration (DSC) extension to VM1."
    ],
    "explanation": "A runbook can execute an Azure PowerShell script to automate changes. Modifying the VM size property programmatically allows you to allocate more compute resources temporarily to handle peak loads.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q52",
    "number": "52",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. Deployment Center in Azure App Service",
      "B. A Desired State Configuration (DSC) extension",
      "C. the New-AzConfigurationAssignment cmdlet",
      "D. a Microsoft Intune device configuration profile\n\n=== PAGE 168 ==="
    ],
    "explanation": "Azure Desired State Configuration (DSC) allows you to manage IT and development infrastructure. You can use a DSC extension in your ARM template to install and configure software like NGINX consistently across all VMs.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q55",
    "number": "55",
    "question": "You have an Azure virtual machine named VM1 that runs Windows Server 2019. The VM was deployed using default drive settings.\nYou sign in to VM1 as a user named User1 and perform the following actions:\nCreate files on drive C.\n\u2711\nCreate files on drive D.\n\u2711\nModify the screen saver timeout.\n\u2711\nChange the desktop background.\n\u2711\nYou plan to redeploy VM1.\nWhich changes will be lost after you redeploy VM1?",
    "domain": "compute",
    "choices": [
      "A. the modified screen saver timeout",
      "B. the new desktop background",
      "C. the new files on drive D",
      "D. the new files on drive C\n\n=== PAGE 171 ==="
    ],
    "explanation": "In Azure VMs, drive D is typically the temporary disk used for short-term storage like page files. When a VM is redeployed, it is moved to a new hardware node, and the contents of the temporary disk are wiped and lost.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic4_q56",
    "number": "56",
    "question": "You have an Azure subscription.\nYou have an on-premises virtual machine named VM1. The settings for VM1 are shown in the exhibit. (Click the Exhibit tab.)\nYou need to ensure that you can use the disks attached to VM1 as a template for Azure virtual machines.\nWhat should you modify on VM1?",
    "domain": "compute",
    "choices": [
      "A. the memory",
      "B. the network adapters",
      "C. the hard drive",
      "D. the processor",
      "E. Integration Services\n\n=== PAGE 172 ==="
    ],
    "explanation": "To use an on-premises Hyper-V VM disk as an Azure VM template, it must be in VHD format. VHDX files are not supported in Azure and must be converted to a fixed-size VHD before uploading.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic4_q58",
    "number": "58",
    "question": "You have an Azure subscription named Subscription1 that is used by several departments at your company. Subscription1 contains the resources\nin the following table:\nAnother administrator deploys a virtual machine named VM1 and an Azure Storage account named storage2 by using a single Azure Resource\nManager template.\nYou need to view the template used for the deployment.\nFrom which blade can you view the template that was used for the deployment?",
    "domain": "storage",
    "choices": [
      "A. VM1",
      "B. RG1",
      "C. storage2",
      "D. container1"
    ],
    "explanation": "ARM template deployments are tracked at the resource group level. By navigating to the Deployments blade of the Resource Group, you can view the history of deployments and inspect the exact ARM templates used.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q59",
    "number": "59",
    "question": "You have an Azure web app named App1. App1 has the deployment slots shown in the following table:\nIn webapp1-test, you test several changes to App1.\nYou back up App1.\nYou swap webapp1-test for webapp1-prod and discover that App1 is experiencing performance issues.\nYou need to revert to the previous version of App1 as quickly as possible.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. Redeploy App1",
      "B. Swap the slots",
      "C. Clone App1",
      "D. Restore the backup of App1\n\n=== PAGE 174 ==="
    ],
    "explanation": "Azure App Service deployment slots allow you to run different versions of your web app and swap them seamlessly. By swapping the slots again, you can instantly revert the production slot to the previous stable version.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q61",
    "number": "61",
    "question": "You plan to back up an Azure virtual machine named VM1.\nYou discover that the Backup Pre-Check status displays a status of Warning.\nWhat is a possible cause of the Warning status?",
    "domain": "storage",
    "choices": [
      "A. VM1 is stopped.",
      "B. VM1 does not have the latest version of the Azure VM Agent (WaAppAgent.exe) installed.",
      "C. VM1 has an unmanaged disk.",
      "D. A Recovery Services vault is unavailable.\n\n=== PAGE 175 ==="
    ],
    "explanation": "Azure Backup relies on the Azure VM Agent to orchestrate application-consistent backups. If the VM agent is outdated or not installed, the Backup Pre-Check will issue a Warning status indicating potential backup issues.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q62",
    "number": "62",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json.\nYou receive a notification that VM1 will be affected by maintenance.\nYou need to move VM1 to a different host immediately.\nSolution: From the Overview blade, you move the virtual machine to a different resource group.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Moving a VM to a different resource group only changes its logical grouping in Azure Resource Manager, not its physical host. To move a VM to a different host to avoid maintenance, you must use the Redeploy feature.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q64",
    "number": "64",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1 that runs Windows Server 2016.\nYou need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\nSolution: You create an Azure Log Analytics workspace and configure the Agent configuration settings. You install the Microsoft Monitoring Agent\non VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.\nDoes this meet the goal?",
    "domain": "monitor",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 177 ==="
    ],
    "explanation": "Log Analytics can collect event logs from VMs using the Microsoft Monitoring Agent. By creating an alert in Azure Monitor targeting the Log Analytics workspace, you can trigger notifications based on specific Event ID occurrences.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q66",
    "number": "66",
    "question": "You have web apps in the West US, Central US and East US Azure regions.\nYou have the App Service plans shown in the following table.\nYou plan to create an additional App Service plan named ASP5 that will use the Linux operating system.\nYou need to identify in which of the currently used locations you can deploy ASP5.\nWhat should you recommend?",
    "domain": "compute",
    "choices": [
      "A. West US, Central US, or East US",
      "B. Central US only",
      "C. East US only",
      "D. West US only\n\n=== PAGE 179 ==="
    ],
    "explanation": "An Azure App Service plan dictates the region where the web apps run. You can deploy a Linux App Service plan in any of the regions where you already have resources, provided the region supports Linux App Service plans.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q67",
    "number": "67",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. the New-AzConfigurationAssignment cmdlet",
      "B. a Desired State Configuration (DSC) extension",
      "C. Azure Active Directory (Azure AD) Application Proxy",
      "D. Azure Application Insights"
    ],
    "explanation": "Desired State Configuration (DSC) allows for automated configuration management of operating systems. By adding a DSC extension to the ARM template, you can ensure NGINX is installed on all new VM scale set instances.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q69",
    "number": "69",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some questions sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou deploy an Azure Kubernetes Service (AKS) cluster named AKS1.\nYou need to deploy a YAML file to AKS1.\nSolution: From Azure Cloud Shell, you run az aks.\nDoes this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 180 ==="
    ],
    "explanation": "The az aks command is used to manage the AKS cluster infrastructure itself, not the applications running inside it. To deploy a YAML manifest file to a Kubernetes cluster, you must use the kubectl command.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q70",
    "number": "70",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1 that runs Windows Server 2016.\nYou need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\nSolution: You create an Azure Log Analytics workspace and configure the data settings. You add the Microsoft Monitoring Agent VM extension to\nVM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source.\nDoes this meet the goal?",
    "domain": "monitor",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "This solution is incomplete because simply adding the VM extension and configuring data settings might lack the specific event log collection configuration or query required for the alert. Proper log queries and explicit alert rules must be defined.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q71",
    "number": "71",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure virtual machine named VM1 that runs Windows Server 2016.\nYou need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour.\nSolution: You create an Azure Log Analytics workspace and configure the data settings. You install the Microsoft Monitoring Agent on VM1. You\ncreate an alert in\nAzure Monitor and specify the Log Analytics workspace as the source.\nDoes this meet the goal?",
    "domain": "monitor",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 181 ==="
    ],
    "explanation": "By configuring the Log Analytics workspace data settings to collect the System event log and installing the correct agent, the logs are centralized. Azure Monitor can then use a log query to trigger an alert when the error threshold is exceeded.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q72",
    "number": "72",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nAll virtual machines run Windows Server 2016.\nOn VM1, you back up a folder named Folder1 as shown in the following exhibit.\nYou plan to restore the backup to a different virtual machine.\nYou need to restore the backup to VM2.\nWhat should you do first?",
    "domain": "storage",
    "choices": [
      "A. From VM1, install the Windows Server Backup feature.",
      "B. From VM2, install the Microsoft Azure Recovery Services Agent.",
      "C. From VM1, install the Microsoft Azure Recovery Services Agent.",
      "D. From VM2, install the Windows Server Backup feature.\n\n=== PAGE 182 ==="
    ],
    "explanation": "To restore files to a different server from an Azure Recovery Services vault, the target server must have the Microsoft Azure Recovery Services (MARS) agent installed. Once registered to the vault, you can use it to recover the backed-up folder.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q74",
    "number": "74",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1 that contains the resources shown in the following table.\nSubscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface\nnamed NIC1.\nYou need to create a new network interface named NIC2 for VM1.\nSolution: You create NIC2 in RG1 and West US.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "A network interface (NIC) must be created in the same Azure region as the virtual network it connects to. If the region matches the virtual network's location, the NIC can be successfully attached.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q75",
    "number": "75",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1 that contains the resources shown in the following table.\nSubscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface\nnamed NIC1.\nYou need to create a new network interface named NIC2 for VM1.\nSolution: You create NIC2 in RG2 and Central US.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 184 ==="
    ],
    "explanation": "Network interfaces (NICs) must reside in the same Azure region and subscription as the virtual network to which they are attached. Creating the NIC in a different region than the virtual network will prevent it from being connected.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic4_q76",
    "number": "76",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription named Subscription1 that contains the resources shown in the following table.\nSubscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interface\nnamed NIC1.\nYou need to create a new network interface named NIC2 for VM1.\nSolution: You create NIC2 in RG2 and West US.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 185 ==="
    ],
    "explanation": "When attaching a new network interface (NIC) to a virtual machine, the NIC must be created in the same Azure region as the virtual network. As long as the NIC and the virtual network share the same region, they can be associated.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q77",
    "number": "77",
    "question": "You develop the following Azure Resource Manager (ARM) template to create a resource group and deploy an Azure Storage account to the\nresource group.\nWhich cmdlet should you run to deploy the template?",
    "domain": "storage",
    "choices": [
      "A. New-AzResource",
      "B. New-AzResourceGroupDeployment",
      "C. New-AzTenantDeployment",
      "D. New-AzDeployment\n\n=== PAGE 186 ==="
    ],
    "explanation": "To create a resource group and deploy resources within it in a single operation, you must deploy the ARM template at the subscription level. The New-AzDeployment cmdlet is used for subscription-level deployments in Azure PowerShell.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic4_q79",
    "number": "79",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. the Publish-AzVMDscConfiguration cmdlet",
      "B. Azure Application Insights",
      "C. Azure Custom Script Extension",
      "D. a Microsoft Endpoint Manager device configuration profile\n\n=== PAGE 187 ==="
    ],
    "explanation": "The Azure Custom Script Extension can be integrated into an ARM template to download and execute scripts on Azure VMs post-deployment. You can use it to run a script that automatically installs NGINX on all instances.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic4_q85",
    "number": "85",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. Azure Custom Script Extension",
      "B. Deployment Center in Azure App Service",
      "C. the Publish-AzVMDscConfiguration cmdlet",
      "D. the New-AzConfigurationAssignment cmdlet"
    ],
    "explanation": "The Custom Script Extension allows you to execute post-deployment configuration scripts directly on virtual machines. By including this extension in the ARM template, you can programmatically install NGINX during provisioning.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q88",
    "number": "88",
    "question": "You have an Azure subscription.\nYou plan to deploy the Azure container instances shown in the following table.\nWhich instances can you deploy to a container group?",
    "domain": "compute",
    "choices": [
      "A. Instance1 only",
      "B. Instance2 only",
      "C. Instance1 and Instance2 only",
      "D. Instance3 and Instance4 only"
    ],
    "explanation": "A container group in Azure Container Instances can only contain containers that share the same host OS type and are deployed in the same region. You cannot mix Windows and Linux containers within the same container group.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q89",
    "number": "89",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. Azure Custom Script Extension",
      "B. Deployment Center in Azure App Service",
      "C. the New-AzConfigurationAssignment cmdlet",
      "D. Azure AD Application Proxy\n\n=== PAGE 195 ==="
    ],
    "explanation": "Using the Azure Custom Script Extension within your ARM template allows you to run configuration scripts upon deployment. This provides a reliable, automated way to install software like NGINX on all virtual machines.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q90",
    "number": "90",
    "question": "You have an Azure subscription that has the public IP addresses shown in the following table.\nYou plan to deploy an Instance of Azure Firewall Premium named FW1.\nWhich IP addresses can you use?",
    "domain": "networking",
    "choices": [
      "A. IP2 only",
      "B. IP1 and IP2 only",
      "C. IP1, IP2, and IP5 only",
      "D. IP1, IP2, IP4, and IP5 only\n\n=== PAGE 196 ==="
    ],
    "explanation": "Azure Firewall requires a standard SKU public IP address, and it must be configured as static. Basic SKU or dynamic public IP addresses are not supported for use with Azure Firewall.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q94",
    "number": "94",
    "question": "You plan to create the Azure web apps shown in the following table.\nWhat is the minimum number of App Service plans you should create for the web apps?",
    "domain": "compute",
    "choices": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4\n\n=== PAGE 200 ==="
    ],
    "explanation": "Multiple App Service web apps can be hosted on a single App Service plan, provided they use the same operating system and are deployed in the same region. This allows you to consolidate resources and minimize costs.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q96",
    "number": "96",
    "question": "You have an Azure App Service app named App1 that contains two running instances.\nYou have an autoscale rule configured as shown in the following exhibit.\nFor the Instance limits scale condition setting, you set Maximum to 5.\nDuring a 30-minute period, App1 uses 80 percent of the available memory.\nWhat is the maximum number of instances for App1 during the 30-minute period?",
    "domain": "compute",
    "choices": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5\n\n=== PAGE 202 ==="
    ],
    "explanation": "Autoscale rules have a cooldown period and evaluate metrics over a time aggregation period. Based on the rule's scale-out action and time window constraints, the maximum number of instances added within 30 minutes is limited.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q98",
    "number": "98",
    "question": "You have an Azure AD tenant named contoso.com.\nYou have an Azure subscription that contains an Azure App Service web app named App1 and an Azure key vault named KV1. KV1 contains a\nwildcard certificate for contoso.com.\nYou have a user named user1@contoso.com that is assigned the Owner role for App1 and KV1.\nYou need to configure App1 to use the wildcard certificate of KV1.\nWhat should you do first?",
    "domain": "identity",
    "choices": [
      "A. Create an access policy for KV1 and assign the Microsoft Azure App Service principal to the policy.",
      "B. Assign a managed user identity to App1.",
      "C. Configure KV1 to use the role-based access control (RBAC) authorization system.",
      "D. Create an access policy for KV1 and assign the policy to User1."
    ],
    "explanation": "Before an App Service can retrieve a certificate from Azure Key Vault, Key Vault must be configured to allow the App Service resource provider to read secrets. Creating an access policy for the App Service principal enables this.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q99",
    "number": "99",
    "question": "You have an Azure subscription.\nYou plan to deploy the resources shown in the following table.\nYou need to create a single Azure Resource Manager (ARM) template that will be used to deploy the resources.\nWhich resource should be added to the dependsOn section for VM1?",
    "domain": "compute",
    "choices": [
      "A. VNET1",
      "B. NIC1",
      "C. IP1",
      "D. NSG1\n\n=== PAGE 204 ==="
    ],
    "explanation": "In an ARM template, resources must be deployed in the correct order. The virtual machine relies on its network interface (NIC), which in turn depends on the virtual network and IP components to be provisioned first.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q100",
    "number": "100",
    "question": "You have an Azure subscription.\nYou create the following Azure Resource Manager (ARM) template named Template.json.\nYou need to deploy Template.json.\nWhich PowerShell cmdlet should you run from Azure Cloud Shell?",
    "domain": "compute",
    "choices": [
      "A. New-AzSubscriptionDeployment",
      "B. New-AzManagementGroupDeployment",
      "C. New-AzResourceGroupDeployment",
      "D. New-AzTenantDeployment"
    ],
    "explanation": "When an ARM template includes the creation of a resource group along with resources, it must be deployed at the subscription scope. The New-AzSubscriptionDeployment cmdlet specifically handles deployments at this scope.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q101",
    "number": "101",
    "question": "You have an Azure subscription that contains a resource group named RG1.\nYou plan to create a storage account named storage1.\nYou have a Bicep file named File1.\nYou need to modify File1 so that it can be used to automate the deployment of storage1 to RG1.\nWhich property should you modify?",
    "domain": "storage",
    "choices": [
      "A. kind",
      "B. scope",
      "C. sku",
      "D. location\n\n=== PAGE 205 ==="
    ],
    "explanation": "To automate the deployment of a specific resource type using Bicep, you must ensure the resource declaration includes the correct properties. Modifying the appropriate property aligns the Bicep template with the requirements for the deployment scope.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q103",
    "number": "103",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou need to configure a proximity placement group for VMSS1.\nWhich proximity placement groups should you use?",
    "domain": "compute",
    "choices": [
      "A. Proximity2 only",
      "B. Proximity1, Proximity2, and Proximity3",
      "C. Proximity1 only",
      "D. Proximity1 and Proximity3 only\n\n=== PAGE 208 ==="
    ],
    "explanation": "A proximity placement group ensures that Azure compute resources are physically located close to each other for low latency. Virtual machine scale sets can only be assigned to a proximity placement group in the same region.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q105",
    "number": "105",
    "question": "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.\nYou create virtual machines in Subscription1 as shown in the following table.\nYou plan to use Vault1 for the backup of as many virtual machines as possible.\nWhich virtual machines can be backed up to Vault1?",
    "domain": "storage",
    "choices": [
      "A. VM1 only",
      "B. VM3 and VMC only",
      "C. VM1, VM2, VM3, VMA, VMB, and VMC",
      "D. VM1, VM3, VMA, and VMC only",
      "E. VM1 and VM3 only"
    ],
    "explanation": "Azure Backup Recovery Services vaults are region-specific and can only back up virtual machines located in the same Azure region as the vault. Therefore, only VMs in the same region as the vault can be configured to use it.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic4_q106",
    "number": "106",
    "question": "You have an Azure subscription that contains an Azure container registry named ContReg1.\nYou enable the Admin user for ContReg1.\nWhich username can you use to sign in to ContReg1?",
    "domain": "compute",
    "choices": [
      "A. root",
      "B. admin",
      "C. administrator",
      "D. ContReg1\n\n=== PAGE 210 ==="
    ],
    "explanation": "When you enable the admin user on an Azure Container Registry, it creates a single account for the registry. The username for this admin account is always the name of the registry itself.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q2",
    "number": "2",
    "question": "Your company has three offices. The offices are located in Miami, Los Angeles, and New York. Each office contains datacenter.\nYou have an Azure subscription that contains resources in the East US and West US Azure regions. Each region contains a virtual network. The\nvirtual networks are peered.\nYou need to connect the datacenters to the subscription. The solution must minimize network latency between the datacenters.\nWhat should you create?",
    "domain": "compute",
    "choices": [
      "A. three Azure Application Gateways and one On-premises data gateway",
      "B. three virtual hubs and one virtual WAN",
      "C. three virtual WANs and one virtual hub",
      "D. three On-premises data gateways and one Azure Application Gateway\n\n=== PAGE 211 ==="
    ],
    "explanation": "Azure Virtual WAN provides a unified hub-and-spoke network architecture for connecting on-premises datacenters and Azure virtual networks. Deploying a virtual hub in each region and connecting them minimizes latency.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q4",
    "number": "4",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nLB1 is configured as shown in the following table.\nYou plan to create new inbound NAT rules that meet the following requirements:\nProvide Remote Desktop access to VM1 from the internet by using port 3389.\n\u2711\nProvide Remote Desktop access to VM2 from the internet by using port 3389.\n\u2711\nWhat should you create on LB1 before you can create the new inbound NAT rules?",
    "domain": "compute",
    "choices": [
      "A. a frontend IP address",
      "B. a load balancing rule",
      "C. a health probe",
      "D. a backend pool\n\n=== PAGE 213 ==="
    ],
    "explanation": "Inbound NAT rules in an Azure Load Balancer map a specific port on a frontend IP address to a backend virtual machine. Before configuring these rules, you must define the frontend IP address that will receive the incoming traffic.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q7",
    "number": "7",
    "question": "You have the Azure virtual networks shown in the following table.\nTo which virtual networks can you establish a peering connection from VNet1?",
    "domain": "networking",
    "choices": [
      "A. VNet2 andVNet3 only",
      "B. VNet2 only",
      "C. VNet3 and VNet4 only",
      "D. VNet2, VNet3, and VNet4"
    ],
    "explanation": "Virtual network peering allows you to connect VNets in the same or different regions. However, VNets must have non-overlapping IP address spaces to establish a successful peering connection.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q8",
    "number": "8",
    "question": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains four subnets named Gateway, Perimeter, NVA, and\nProduction.\nThe NVA subnet contains two network virtual appliances (NVAs) that will perform network trafic inspection between the Perimeter subnet and the\nProduction subnet.\nYou need to implement an Azure load balancer for the NVAs. The solution must meet the following requirements:\nThe NVAs must run in an active-active configuration that uses automatic failover.\n\u2711\nThe load balancer must load balance trafic to two services on the Production subnet. The services have different IP addresses.\n\u2711\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Deploy a basic load balancer",
      "B. Deploy a standard load balancer",
      "C. Add two load balancing rules that have HA Ports and Floating IP enabled",
      "D. Add two load balancing rules that have HA Ports enabled and Floating IP disabled",
      "E. Add a frontend IP configuration, a backend pool, and a health probe\nF. Add a frontend IP configuration, two backend pools, and a health probe\n\n=== PAGE 215 ==="
    ],
    "explanation": "Standard Azure Load Balancers support High Availability (HA) ports, which load balance traffic across all ports and protocols. This is required for active-active NVA setups to ensure failover and symmetric routing.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q9",
    "number": "9",
    "question": "You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN\ngateway named\nVPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1.\nOn a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1.\nYou configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1\nis unable to connect to VNet2.\nYou need to ensure that you can connect Client1 to VNet2.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Download and re-install the VPN client configuration package on Client1.",
      "B. Select Allow gateway transit on VNet1.",
      "C. Select Allow gateway transit on VNet2.",
      "D. Enable BGP on VPNGW1\n\n=== PAGE 216 ==="
    ],
    "explanation": "When you add a new virtual network peering to a VNet that has an existing point-to-site VPN connection, the VPN client's routing table is not automatically updated. You must download and reinstall the VPN client configuration package.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q11",
    "number": "11",
    "question": "You have an Azure subscription that contains the resources in the following table.\nTo which subnets can you apply NSG1?",
    "domain": "networking",
    "choices": [
      "A. the subnets on VNet1 only",
      "B. the subnets on VNet2 and VNet3 only",
      "C. the subnets on VNet2 only",
      "D. the subnets on VNet3 only",
      "E. the subnets on VNet1, VNet2, and VNet3"
    ],
    "explanation": "Network Security Groups (NSGs) can only be associated with subnets or network interfaces that reside within the same Azure region as the NSG. Therefore, the NSG can only be applied to resources in its designated region.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q14",
    "number": "14",
    "question": "You have an Azure web app named webapp1.\nYou have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1.\nYou need to ensure that webapp1 can access the data hosted on VM1.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Deploy an internal load balancer",
      "B. Peer VNET1 to another virtual network",
      "C. Connect webapp1 to VNET1",
      "D. Deploy an Azure Application Gateway\n\n=== PAGE 219 ==="
    ],
    "explanation": "To allow an Azure App Service web app to securely access resources like a database on a virtual network, you must configure VNet Integration. Connecting the web app to the VNet routes its outbound traffic directly into the network.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q15",
    "number": "15",
    "question": "You create an Azure VM named VM1 that runs Windows Server 2019.\nVM1 is configured as shown in the exhibit. (Click the Exhibit tab.)\nYou need to enable Desired State Configuration for VM1.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Connect to VM1.",
      "B. Start VM1.",
      "C. Capture a snapshot of VM1.",
      "D. Configure a DNS name for VM1.\n\n=== PAGE 220 ==="
    ],
    "explanation": "Desired State Configuration (DSC) requires the virtual machine to be running so that the DSC extension can be installed and executed. You must start the VM before you can apply or enable any DSC configurations.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q16",
    "number": "16",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Floating IP (direct server return) to Disabled",
      "B. Session persistence to None",
      "C. Floating IP (direct server return) to Enabled",
      "D. Session persistence to Client IP"
    ],
    "explanation": "Session persistence dictates how the load balancer routes subsequent traffic from the same client. Setting it to Client IP ensures that all requests from a specific IP address are consistently routed to the same backend web server.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q17",
    "number": "17",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the following resources:\nA virtual network that has a subnet named Subnet1\n\u2711\nTwo network security groups (NSGs) named NSG-VM1 and NSG-Subnet1\n\u2711\nA virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections\n\u2711\nNSG-Subnet1 has the default inbound security rules only.\nNSG-VM1 has the default inbound security rules and the following custom inbound security rule:\nPriority: 100\n\u2711\nSource: Any\n\u2711\nSource port range: *\n\u2711\nDestination: *\n\u2711\nDestination port range: 3389\n\u2711\nProtocol: UDP\n\u2711\nAction: Allow\n\u2711\nVM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to\nSubnet1.\nYou need to be able to establish Remote Desktop connections from the internet to VM1.\nSolution: You add an inbound security rule to NSG-Subnet1 that allows connections from the Any source to the *destination for port range 3389\nand uses the TCP protocol. You remove NSG-VM1 from the network interface of VM1.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 221 ==="
    ],
    "explanation": "For traffic to reach a virtual machine, it must pass through both the subnet-level NSG and the network interface-level NSG. Removing the NSG from the network interface drops its allow rules, blocking traffic unless explicitly allowed.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q18",
    "number": "18",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the following resources:\nA virtual network that has a subnet named Subnet1\n\u2711\nTwo network security groups (NSGs) named NSG-VM1 and NSG-Subnet1\n\u2711\nA virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections\n\u2711\nNSG-Subnet1 has the default inbound security rules only.\nNSG-VM1 has the default inbound security rules and the following custom inbound security rule:\nPriority: 100\n\u2711\nSource: Any\n\u2711\nSource port range: *\n\u2711\nDestination: *\n\u2711\nDestination port range: 3389\n\u2711\nProtocol: UDP -\nAction: Allow\n\u2711\nVM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to\nSubnet1.\nYou need to be able to establish Remote Desktop connections from the internet to VM1.\nSolution: You add an inbound security rule to NSG-Subnet1 that allows connections from the internet source to the VirtualNetwork destination for\nport range 3389 and uses the UDP protocol.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 222 ==="
    ],
    "explanation": "RDP natively uses TCP port 3389, though it can also use UDP. Explicitly allowing the correct protocol across both the subnet and VM NSGs is necessary for the connection to succeed.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q19",
    "number": "19",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the following resources:\nA virtual network that has a subnet named Subnet1\n\u2711\nTwo network security groups (NSGs) named NSG-VM1 and NSG-Subnet1\n\u2711\nA virtual machine named VM1 that has the required Windows Server configurations to allow Remote Desktop connections\n\u2711\nNSG-Subnet1 has the default inbound security rules only.\nNSG-VM1 has the default inbound security rules and the following custom inbound security rule:\nPriority: 100\n\u2711\nSource: Any\n\u2711\nSource port range: *\n\u2711\nDestination: *\n\u2711\nDestination port range: 3389\n\u2711\nProtocol: UDP\n\u2711\nAction: Allow\n\u2711\nVM1 has a public IP address and is connected to Subnet1. NSG-VM1 is associated to the network interface of VM1. NSG-Subnet1 is associated to\nSubnet1.\nYou need to be able to establish Remote Desktop connections from the internet to VM1.\nSolution: You add an inbound security rule to NSG-Subnet1 and NSG-VM1 that allows connections from the internet source to the VirtualNetwork\ndestination for port range 3389 and uses the TCP protocol.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 223 ==="
    ],
    "explanation": "To allow external access, the inbound traffic must explicitly be permitted by both the subnet-level NSG and the VM's network interface-level NSG. Adding an allow rule for TCP 3389 to both NSGs ensures successful routing.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q21",
    "number": "21",
    "question": "You have an Azure subscription that contains a virtual network named VNET1. VNET1 contains the subnets shown in the following table.\nEach virtual machine uses a static IP address.\nYou need to create network security groups (NSGs) to meet following requirements:\nAllow web requests from the internet to VM3, VM4, VM5, and VM6.\n\u2711\nAllow all connections between VM1 and VM2.\n\u2711\nAllow Remote Desktop connections to VM1.\n\u2711\nPrevent all other network trafic to VNET1.\n\u2711\nWhat is the minimum number of NSGs you should create?",
    "domain": "networking",
    "choices": [
      "A. 1",
      "B. 3",
      "C. 4",
      "D. 12"
    ],
    "explanation": "Network Security Groups (NSGs) can contain multiple inbound and outbound security rules and can be applied to multiple subnets. A single NSG with properly defined rules can meet all the network traffic filtering requirements.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q22",
    "number": "22",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nThe Not allowed resource types Azure policy that has policy enforcement enabled is assigned to RG1 and uses the following parameters:\nMicrosoft.Network/virtualNetworks\nMicrosoft.Compute/virtualMachines\nIn RG1, you need to create a new virtual machine named VM2, and then connect VM2 to VNET1.\nWhat should you do first?",
    "domain": "identity",
    "choices": [
      "A. Remove Microsoft.Compute/virtualMachines from the policy.",
      "B. Create an Azure Resource Manager template",
      "C. Add a subnet to VNET1.",
      "D. Remove Microsoft.Network/virtualNetworks from the policy.\n\n=== PAGE 225 ==="
    ],
    "explanation": "To create a virtual machine, the Azure policy must not block the creation of its associated resources. Removing Microsoft.Compute/virtualMachines from the Not Allowed resource types allows VM creation.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q24",
    "number": "24",
    "question": "You have a public load balancer that balances ports 80 and 443 across three virtual machines named VM1, VM2, and VM3.\nYou need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. an inbound NAT rule",
      "B. a new public load balancer for VM3",
      "C. a frontend IP configuration",
      "D. a load balancing rule\n\n=== PAGE 226 ==="
    ],
    "explanation": "An inbound NAT rule allows you to forward traffic from a specific frontend port of a load balancer to a specific port on a backend virtual machine. This is required to direct RDP traffic to VM3 specifically.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q28",
    "number": "28",
    "question": "You have an Azure subscription that contains the resources in the following table.\nVM1 and VM2 are deployed from the same template and host line-of-business applications.\nYou configure the network security group (NSG) shown in the exhibit. (Click the Exhibit tab.)\nYou need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Disassociate the NSG from a network interface",
      "B. Change the Port_80 inbound security rule.",
      "C. Associate the NSG to Subnet1.",
      "D. Change the DenyWebSites outbound security rule."
    ],
    "explanation": "Network Security Groups (NSGs) can be associated with subnets or individual network interfaces. Associating the NSG to Subnet1 ensures the security rules are applied to all resources within the subnet, blocking HTTP traffic as intended.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q29",
    "number": "29",
    "question": "You have two subscriptions named Subscription1 and Subscription2. Each subscription is associated to a different Azure AD tenant.\nSubscription1 contains a virtual network named VNet1. VNet1 contains an Azure virtual machine named VM1 and has an IP address space of\n10.0.0.0/16.\nSubscription2 contains a virtual network named VNet2. VNet2 contains an Azure virtual machine named VM2 and has an IP address space of\n10.10.0.0/24.\nYou need to connect VNet1 to VNet2.\nWhat should you do first?",
    "domain": "identity",
    "choices": [
      "A. Move VM1 to Subscription2.",
      "B. Move VNet1 to Subscription2.",
      "C. Modify the IP address space of VNet2.",
      "D. Provision virtual network gateways.\n\n=== PAGE 230 ==="
    ],
    "explanation": "Virtual network gateways are required to establish VPN connections or VNet-to-VNet connections across different Azure Active Directory tenants. Provisioning them is the first step before configuring the connection.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q30",
    "number": "30",
    "question": "You plan to create an Azure virtual machine named VM1 that will be configured as shown in the following exhibit.\nThe planned disk configurations for VM1 are shown in the following exhibit.\n\n=== PAGE 231 ===\nYou need to ensure that VM1 can be created in an Availability Zone.\nWhich two settings should you modify? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Use managed disks",
      "B. OS disk type",
      "C. Availability options",
      "D. Size",
      "E. Image\n\n=== PAGE 232 ==="
    ],
    "explanation": "To deploy a virtual machine in an Availability Zone, you must use managed disks. Unmanaged disks do not support Availability Zones, making this a prerequisite.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q33",
    "number": "33",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site\nconnection uses a self-signed certificate.\nFrom Azure, you download and install the VPN client configuration package on a computer named Computer2.\nYou need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.\nSolution: You modify the Azure Active Directory (Azure AD) authentication policies.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Modifying Azure AD authentication policies is unrelated to establishing a point-to-site VPN connection with a self-signed certificate. You need to export and install the client certificate on the new machine.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q34",
    "number": "34",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site\nconnection uses a self-signed certificate.\nFrom Azure, you download and install the VPN client configuration package on a computer named Computer2.\nYou need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.\nSolution: You join Computer2 to Azure Active Directory (Azure AD).\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Joining the computer to Azure AD does not automatically provide the required client certificates for a point-to-site VPN using self-signed certificates. You must install the exported client certificate manually.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q35",
    "number": "35",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.\nAnother administrator plans to create several network security groups (NSGs) in the subscription.\nYou need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.\nSolution: You create a resource lock, and then you assign the lock to the subscription.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 235 ==="
    ],
    "explanation": "A resource lock prevents resources from being deleted or modified, but it does not control network traffic. Network Security Groups or Azure Firewall must be used to block specific TCP ports.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q36",
    "number": "36",
    "question": "You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1.\nYou have a computer named Computer1 that runs Windows 10. Computer1 is connected to the Internet.\nYou add a network interface named vm1173 to VM1 as shown in the exhibit. (Click the Exhibit tab.)\nFrom Computer1, you attempt to connect to VM1 by using Remote Desktop, but the connection fails.\nYou need to establish a Remote Desktop connection to VM1.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Change the priority of the RDP rule",
      "B. Attach a network interface",
      "C. Delete the DenyAllInBound rule",
      "D. Start VM1\n\n=== PAGE 236 ==="
    ],
    "explanation": "VM1 needs to be running to establish an RDP connection. Since the machine is stopped or deallocated, starting it is the first required action before any connectivity can occur.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q37",
    "number": "37",
    "question": "You have the Azure virtual machines shown in the following table.\nA DNS service is installed on VM1.\nYou configure the DNS servers settings for each virtual network as shown in the following exhibit.\nYou need to ensure that all the virtual machines can resolve DNS names by using the DNS service on VM1.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Configure a conditional forwarder on VM1",
      "B. Add service endpoints on VNET1",
      "C. Add service endpoints on VNET2 and VNET3",
      "D. Configure peering between VNET1, VNET2, and VNET3\n\n=== PAGE 237 ==="
    ],
    "explanation": "Virtual network peering enables seamless communication between resources in different VNets. Peering VNET1, VNET2, and VNET3 allows them to route DNS requests to the custom DNS server hosted on VM1.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q39",
    "number": "39",
    "question": "You have the Azure virtual network named VNet1 that contains a subnet named Subnet1. Subnet1 contains three Azure virtual machines. Each\nvirtual machine has a public IP address.\nThe virtual machines host several applications that are accessible over port 443 to users on the Internet.\nYour on-premises network has a site-to-site VPN connection to VNet1.\nYou discover that the virtual machines can be accessed by using the Remote Desktop Protocol (RDP) from the Internet and from the on-premises\nnetwork.\nYou need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises\nnetwork. The solution must ensure that all the applications can still be accessed by the Internet users.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Modify the address space of the local network gateway",
      "B. Create a deny rule in a network security group (NSG) that is linked to Subnet1",
      "C. Remove the public IP addresses from the virtual machines",
      "D. Modify the address space of Subnet1"
    ],
    "explanation": "Network Security Groups allow you to define inbound and outbound security rules. Creating a deny rule for RDP (port 3389) on the NSG linked to Subnet1 ensures Internet traffic is blocked, while local network gateways handle on-premises routing.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q40",
    "number": "40",
    "question": "You have an Azure subscription that contains the resources in the following table.\nSubnet1 is associated to VNet1. NIC1 attaches VM1 to Subnet1.\nYou need to apply ASG1 to VM1.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Associate NIC1 to ASG1",
      "B. Modify the properties of ASG1",
      "C. Modify the properties of NSG1\n\n=== PAGE 240 ==="
    ],
    "explanation": "Application Security Groups (ASGs) are used to group network interfaces. Associating NIC1 to ASG1 applies the security rules defined for the ASG to VM1.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q41",
    "number": "41",
    "question": "You have an Azure subscription named Subscription1 that contains an Azure virtual network named VNet1. VNet1 connects to your on-premises\nnetwork by using\nAzure ExpressRoute.\nYou plan to prepare the environment for automatic failover in case of ExpressRoute failure.\nYou need to connect VNet1 to the on-premises network by using a site-to-site VPN. The solution must minimize cost.\nWhich three actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Create a connection",
      "B. Create a local site VPN gateway",
      "C. Create a VPN gateway that uses the VpnGw1 SKU",
      "D. Create a gateway subnet",
      "E. Create a VPN gateway that uses the Basic SKU"
    ],
    "explanation": "To configure a site-to-site VPN alongside ExpressRoute, you need a VPN gateway configured with an ExpressRoute-compatible SKU. The VpnGw1 SKU supports this coexistence.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q45",
    "number": "45",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou need to create a network interface named NIC1.\nIn which location can you create NIC1?",
    "domain": "compute",
    "choices": [
      "A. East US and North Europe only",
      "B. East US only",
      "C. East US, West Europe, and North Europe",
      "D. East US and West Europe only\n\n=== PAGE 244 ==="
    ],
    "explanation": "A network interface must be created in the same location as the virtual network it will connect to. Therefore, NIC1 must be created in East US to connect to VNet1.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q46",
    "number": "46",
    "question": "You have Azure virtual machines that run Windows Server 2019 and are configured as shown in the following table.\nYou create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.\nFor controso.com, you create a virtual network link named link1 as shown in the exhibit. (Click the Exhibit tab.)\nYou discover that VM1 can resolve names in contoso.com but cannot resolve names in adatum.com. VM1 can resolve other hosts on the Internet.\nYou need to ensure that VM1 can resolve host names in adatum.com.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Update the DNS sufix on VM1 to be adatum.com",
      "B. Configure the name servers for adatum.com at the domain registrar",
      "C. Create an SRV record in the contoso.com zone",
      "D. Modify the Access control (IAM) settings for link1\n\n=== PAGE 245 ==="
    ],
    "explanation": "The virtual network must be linked to the DNS zone to resolve its records. Modifying the virtual network link to enable auto-registration or linking to adatum.com at the domain registrar enables name resolution.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q50",
    "number": "50",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the virtual machines shown in the following table.\nYou deploy a load balancer that has the following configurations:\nName: LB1\n\u2711\nType: Internal\n\u2711\nSKU: Standard\n\u2711\nVirtual network: VNET1\n\u2711\nYou need to ensure that you can add VM1 and VM2 to the backend pool of LB1.\nSolution: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "A basic SKU public IP address cannot be associated with a backend pool of a Standard SKU internal load balancer. The SKUs of the public IP and the load balancer must match.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q51",
    "number": "51",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the virtual machines shown in the following table.\nYou deploy a load balancer that has the following configurations:\nName: LB1\n\u2711\nType: Internal\n\u2711\nSKU: Standard\n\u2711\nVirtual network: VNET1\n\u2711\nYou need to ensure that you can add VM1 and VM2 to the backend pool of LB1.\nSolution: You create a Standard SKU public IP address, associate the address to the network interface of VM1, and then stop VM2.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 249 ==="
    ],
    "explanation": "Stopping the VM does not resolve the issue of adding it to a backend pool. All resources in the backend pool must use a Standard SKU public IP if the load balancer is a Standard SKU.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q52",
    "number": "52",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the virtual machines shown in the following table.\nYou deploy a load balancer that has the following configurations:\nName: LB1\n\u2711\nType: Internal\n\u2711\nSKU: Standard\n\u2711\nVirtual network: VNET1\n\u2711\nYou need to ensure that you can add VM1 and VM2 to the backend pool of LB1.\nSolution: You create two Standard SKU public IP addresses and associate a Standard SKU public IP address to the network interface of each\nvirtual machine.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "You can add virtual machines to a Standard SKU internal load balancer regardless of their public IP addresses. Standard load balancers require all backend VMs to be in the same VNet and use Standard SKU IP configurations if applicable.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q53",
    "number": "53",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site\nconnection uses a self-signed certificate.\nFrom Azure, you download and install the VPN client configuration package on a computer named Computer2.\nYou need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.\nSolution: You export the client certificate from Computer1 and install the certificate on Computer2.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 250 ==="
    ],
    "explanation": "Yes, installing the exported client certificate with the private key on Computer2 provides the required authentication for the point-to-site VPN connection.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q54",
    "number": "54",
    "question": "You have an Azure virtual machine named VM1.\nThe network interface for VM1 is configured as shown in the exhibit. (Click the Exhibit tab.)\nYou deploy a web server on VM1, and then create a secure website that is accessible by using the HTTPS protocol. VM1 is used as a web server\nonly.\nYou need to ensure that users can connect to the website from the Internet.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. Modify the protocol of Rule4",
      "B. Delete Rule1",
      "C. For Rule5, change the Action to Allow and change the priority to 401",
      "D. Create a new inbound rule that allows TCP protocol 443 and configure the rule to have a priority of 501."
    ],
    "explanation": "To allow inbound HTTPS traffic, you must create a rule that permits TCP port 443. Modifying Rule5 to Allow and lowering its priority number (to take precedence over block rules) achieves this.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q55",
    "number": "55",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.\nAnother administrator plans to create several network security groups (NSGs) in the subscription.\nYou need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.\nSolution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 251 ==="
    ],
    "explanation": "Unregistering a resource provider like Microsoft.ClassicNetwork does not enforce security policies or network traffic rules. Azure Policy or default NSG configurations are needed.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q57",
    "number": "57",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using\nan Azure Load\nBalancer.\nThe effective network security configurations for VM2 are shown in the following exhibit.\nYou discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\nYou verify that the Load Balancer rules are configured correctly.\nYou need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\nSolution: You create an inbound security rule that denies all trafic from the 131.107.100.50 source and has a cost of 64999.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 253 ==="
    ],
    "explanation": "A deny rule with a priority of 64999 (which has lower precedence than standard rules) will not override an existing allow rule with a higher priority (lower number). Therefore, the traffic will not be blocked.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q58",
    "number": "58",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using\nan Azure Load\nBalancer.\nThe effective network security configurations for VM2 are shown in the following exhibit.\nYou discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\nYou verify that the Load Balancer rules are configured correctly.\nYou need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\nSolution: You delete the BlockAllOther443 inbound security rule.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 254 ==="
    ],
    "explanation": "Deleting a block rule will not guarantee that the traffic is allowed unless an allow rule explicitly permits it or a default rule allows it. Azure's default inbound rules deny traffic from the Internet.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q59",
    "number": "59",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using\nan Azure Load\nBalancer.\nThe effective network security configurations for VM2 are shown in the following exhibit.\nYou discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\nYou verify that the Load Balancer rules are configured correctly.\nYou need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\nSolution: You modify the priority of the Allow_131.107.100.50 inbound security rule.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Lowering the priority number of an allow rule ensures it is evaluated before any conflicting deny rules. This correctly prioritizes the connection from the specified IP address.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q60",
    "number": "60",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.\nAnother administrator plans to create several network security groups (NSGs) in the subscription.\nYou need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.\nSolution: You assign a built-in policy definition to the subscription.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 255 ==="
    ],
    "explanation": "Azure Policy can enforce resource configurations, such as ensuring all new NSGs include a specific security rule. Assigning a built-in or custom policy achieves the goal automatically.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q61",
    "number": "61",
    "question": "You have an Azure subscription.\nYou plan to deploy an Azure Kubernetes Service (AKS) cluster to support an app named App1. On-premises clients connect to App1 by using the\nIP address of the pod.\nFor the AKS cluster, you need to choose a network type that will support App1.\nWhat should you choose?",
    "domain": "compute",
    "choices": [
      "A. kubenet",
      "B. Azure Container Networking Interface (CNI)",
      "C. Hybrid Connection endpoints",
      "D. Azure Private Link"
    ],
    "explanation": "Azure Container Networking Interface (CNI) provides each pod with an IP address from the VNet, making them directly accessible to on-premises clients via routing.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q62",
    "number": "62",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the virtual machines shown in the following table.\nYou deploy a load balancer that has the following configurations:\nName: LB1\n\u2711\nType: Internal\n\u2711\nSKU: Standard\n\u2711\nVirtual network: VNET1\n\u2711\nYou need to ensure that you can add VM1 and VM2 to the backend pool of LB1.\nSolution: You disassociate the public IP address from the network interface of VM2.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Disassociating a public IP address does not fulfill the requirement of adding VMs to the backend pool. The public IP SKUs must align with the load balancer SKU.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q63",
    "number": "63",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups.\nAnother administrator plans to create several network security groups (NSGs) in the subscription.\nYou need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks.\nSolution: You configure a custom policy definition, and then you assign the policy to the subscription.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 256 ==="
    ],
    "explanation": "A custom policy definition can mandate the deployment of specific NSG rules on creation, enforcing the blockage of port 8080 automatically across the subscription.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q64",
    "number": "64",
    "question": "You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure\nvirtual machine named VM2.\nVM1 hosts a frontend application that connects to VM2 to retrieve data.\nUsers report that the frontend application is slower than usual.\nYou need to view the average round-trip time (RTT) of the packets from VM1 to VM2.\nWhich Azure Network Watcher feature should you use?",
    "domain": "networking",
    "choices": [
      "A. IP flow verify",
      "B. Connection troubleshoot",
      "C. Connection monitor",
      "D. NSG flow logs"
    ],
    "explanation": "Connection monitor provides comprehensive, end-to-end network performance metrics, including round-trip time (RTT), latency, and reachability between two VMs.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q67",
    "number": "67",
    "question": "You have an Azure subscription that contains two virtual machines as shown in the following table.\nYou perform a reverse DNS lookup for 10.0.0.4 from VM2.\nWhich FQDN will be returned?",
    "domain": "networking",
    "choices": [
      "A. vm1.core.windows.net",
      "B. vm1.azure.com",
      "C. vm1.westeurope.cloudapp.azure.com",
      "D. vm1.internal.cloudapp.net\n\n=== PAGE 258 ==="
    ],
    "explanation": "Reverse DNS lookup in Azure for an internal IP address returns the internal FQDN assigned by Azure DNS, which typically ends in `internal.cloudapp.net`.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q68",
    "number": "68",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using\nan Azure Load\nBalancer.\nThe effective network security configurations for VM2 are shown in the following exhibit.\nYou discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\nYou verify that the Load Balancer rules are configured correctly.\nYou need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\nSolution: You create an inbound security rule that allows any trafic from the AzureLoadBalancer source and has a cost of 150.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Allowing traffic from the AzureLoadBalancer source is necessary for health probes but does not permit application traffic from an external IP like 131.107.100.50.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q69",
    "number": "69",
    "question": "You have an Azure subscription that contains a policy-based virtual network gateway named GW1 and a virtual network named VNet1.\nYou need to ensure that you can configure a point-to-site connection from an on-premises computer to VNet1.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Add a service endpoint to VNet1",
      "B. Reset GW1",
      "C. Create a route-based virtual network gateway",
      "D. Add a connection to GW1",
      "E. Delete GW1\nF. Add a public IP address space to VNet1\n\n=== PAGE 259 ==="
    ],
    "explanation": "A point-to-site VPN connection requires a route-based virtual network gateway. Policy-based gateways do not support point-to-site connections and must be replaced.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q73",
    "number": "73",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou manage a virtual network named VNet1 that is hosted in the West US Azure region.\nVNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.\nYou need to inspect all the network trafic from VM1 to VM2 for a period of three hours.\nSolution: From Azure Network Watcher, you create a packet capture.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 262 ==="
    ],
    "explanation": "A packet capture provides deep packet inspection but is typically limited in duration and file size, making it less ideal for continuous 3-hour monitoring without specific constraints.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q74",
    "number": "74",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou manage a virtual network named VNet1 that is hosted in the West US Azure region.\nVNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.\nYou need to inspect all the network trafic from VM1 to VM2 for a period of three hours.\nSolution: From Azure Network Watcher, you create a connection monitor.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Connection monitor provides continuous tracking of network connectivity, latency, and packet loss between VMs over extended periods, meeting the 3-hour requirement.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q75",
    "number": "75",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou manage a virtual network named VNet1 that is hosted in the West US Azure region.\nVNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.\nYou need to inspect all the network trafic from VM1 to VM2 for a period of three hours.\nSolution: From Performance Monitor, you create a Data Collector Set (DCS).\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 263 ==="
    ],
    "explanation": "While Performance Monitor can capture network metrics locally, it does not provide the same Azure-integrated, end-to-end network traffic inspection capabilities as Network Watcher.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q77",
    "number": "77",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou manage a virtual network named VNet1 that is hosted in the West US Azure region.\nVNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server.\nYou need to inspect all the network trafic from VM1 to VM2 for a period of three hours.\nSolution: From Azure Monitor, you create a metric on Network In and Network Out.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 264 ==="
    ],
    "explanation": "Azure Monitor metrics for Network In/Out provide aggregated volume data but do not inspect or track the end-to-end traffic connection states or latency over time.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q78",
    "number": "78",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using\nan Azure Load\nBalancer.\nThe effective network security configurations for VM2 are shown in the following exhibit.\nYou discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\nYou verify that the Load Balancer rules are configured correctly.\nYou need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\nSolution: You create an inbound security rule that denies all trafic from the 131.107.100.50 source and has a priority of 64999.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "A deny rule explicitly blocks traffic. A priority of 64999 gives it low precedence, but since it is a deny rule, it contradicts the goal of allowing traffic.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q81",
    "number": "81",
    "question": "You have a virtual network named VNet1 as shown in the exhibit. (Click the Exhibit tab.)\nNo devices are connected to VNet1.\nYou plan to peer VNet1 to another virtual network named VNet2. VNet2 has an address space of 10.2.0.0/16.\nYou need to create the peering.\nWhat should you do first?",
    "domain": "networking",
    "choices": [
      "A. Modify the address space of VNet1.",
      "B. Add a gateway subnet to VNet1.",
      "C. Create a subnet on VNet1 and VNet2.",
      "D. Configure a service endpoint on VNet2.\n\n=== PAGE 267 ==="
    ],
    "explanation": "Virtual networks cannot be peered if their IP address spaces overlap. Modifying the address space of VNet1 is required to ensure there are no overlapping subnets with VNet2.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q82",
    "number": "82",
    "question": "You have the Azure virtual machines shown in the following table.\nVNET1 is linked to a private DNS zone named contoso.com that contains the records shown in the following table.\nYou need to ping VM2 from VM1.\nWhich DNS names can you use to ping VM2?",
    "domain": "networking",
    "choices": [
      "A. comp2.contoso.com and comp4.contoso.com only",
      "B. comp1.contoso.com, comp2.contoso.com, comp3.contoso.com, and comp4.contoso.com",
      "C. comp2.contoso.com only",
      "D. comp1.contoso.com and comp2.contoso.com only",
      "E. comp1.contoso.com, comp2.contoso.com, and comp4.contoso.com only\n\n=== PAGE 268 ==="
    ],
    "explanation": "Azure Private DNS zones resolve records linked directly within the zone. VM1 can ping any A record explicitly defined in contoso.com, such as comp2.contoso.com.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q84",
    "number": "84",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site\nconnection uses a self-signed certificate.\nFrom Azure, you download and install the VPN client configuration package on a computer named Computer2.\nYou need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2.\nSolution: On Computer2, you set the Startup type for the IPSec Policy Agent service to Automatic.\nDoes this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 270 ==="
    ],
    "explanation": "The IPSec Policy Agent service is not the mechanism used by the Azure VPN client for a point-to-site connection using SSTP or IKEv2. The client certificate is what is missing.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q85",
    "number": "85",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Session persistence to Client IP and protocol",
      "B. Protocol to UDP",
      "C. Session persistence to None",
      "D. Floating IP (direct server return) to Enabled"
    ],
    "explanation": "Session persistence set to 'Client IP' or 'Client IP and protocol' ensures that requests originating from the same client are routed to the same backend server.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q86",
    "number": "86",
    "question": "You have an Azure subscription that uses the public IP addresses shown in the following table.\nYou need to create a public Azure Standard Load Balancer.\nWhich public IP addresses can you use?",
    "domain": "networking",
    "choices": [
      "A. IP1, IP2, and IP3",
      "B. IP2 only",
      "C. IP3 only",
      "D. IP1 and IP3 only"
    ],
    "explanation": "A Standard Load Balancer strictly requires Standard SKU public IP addresses. Basic SKU public IPs cannot be used with a Standard Load Balancer.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q87",
    "number": "87",
    "question": "You have an Azure subscription.\nYou are deploying an Azure Kubernetes Service (AKS) cluster that will contain multiple pods. The pods will use kubernet networking.\nYou need to restrict network trafic between the pods.\nWhat should you configure on the AKS cluster?",
    "domain": "compute",
    "choices": [
      "A. the Azure network policy",
      "B. the Calico network policy",
      "C. pod security policies",
      "D. an application security group\n\n=== PAGE 271 ==="
    ],
    "explanation": "The Calico network policy engine allows you to define granular network policies, restricting and securing traffic flow directly between pods in an AKS cluster.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q89",
    "number": "89",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Floating IP (direct server return) to Enabled",
      "B. Floating IP (direct server return) to Disabled",
      "C. a health probe",
      "D. Session persistence to Client IP and Protocol\n\n=== PAGE 272 ==="
    ],
    "explanation": "Configuring Session persistence to 'Client IP and protocol' ties a specific client IP and protocol port combination to a specific backend web server, maintaining state.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q91",
    "number": "91",
    "question": "You have an Azure subscription that contains two virtual machines named VM1 and VM2.\nYou create an Azure load balancer.\nYou plan to create a load balancing rule that will load balance HTTPS trafic between VM1 and VM2.\nWhich two additional load balancer resources should you create before you can create the load balancing rule? Each correct answer presents part\nof the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. a frontend IP address",
      "B. an inbound NAT rule",
      "C. a virtual network",
      "D. a backend pool",
      "E. a health probe\n\n=== PAGE 273 ==="
    ],
    "explanation": "Before creating a load balancing rule, you must define a frontend IP address to receive incoming traffic and a backend pool containing the virtual machines to distribute traffic to.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q92",
    "number": "92",
    "question": "You have an on-premises network that contains a database server named dbserver1.\nYou have an Azure subscription.\nYou plan to deploy three Azure virtual machines. Each virtual machine will be deployed to a separate availability zone.\nYou need to configure an Azure VPN gateway for a site-to-site VPN. The solution must ensure that the virtual machines can connect to dbserver1.\nWhich type of public IP address SKU and assignment should you use for the gateway?",
    "domain": "networking",
    "choices": [
      "A. a basic SKU and a static IP address assignment",
      "B. a standard SKU and a static IP address assignment",
      "C. a basic SKU and a dynamic IP address assignment"
    ],
    "explanation": "For a VPN Gateway to coexist with ExpressRoute, it requires a gateway subnet and must use a static public IP assignment for Standard SKU or higher.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q95",
    "number": "95",
    "question": "You have an on-premises datacenter and an Azure subscription.\nYou plan to connect the datacenter to Azure by using ExpressRoute.\nYou need to deploy an ExpressRoute gateway. The solution must meet the following requirements:\nSupport up to 10 Gbps of trafic.\n\u2711\nSupport availability zones.\n\u2711\nSupport FastPath.\n\u2711\nMinimize costs.\n\u2711\nWhich SKU should you deploy?",
    "domain": "compute",
    "choices": [
      "A. ERGw1AZ",
      "B. ERGw2",
      "C. ErGw3",
      "D. ErGw3AZ\n\n=== PAGE 275 ==="
    ],
    "explanation": "The ErGw3AZ SKU supports availability zones, FastPath, and up to 10 Gbps throughput. It provides the necessary high availability and performance features required by the scenario while meeting the technical requirements.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q98",
    "number": "98",
    "question": "Your on-premises network contains an SMB share named Share1.\nYou have an Azure subscription that contains the following resources:\nA web app named webapp1\n\u2711\nA virtual network named VNET1\n\u2711\nYou need to ensure that webapp1 can connect to Share1.\nWhat should you deploy?",
    "domain": "networking",
    "choices": [
      "A. an Azure Application Gateway",
      "B. an Azure Active Directory (Azure AD) Application Proxy",
      "C. an Azure Virtual Network Gateway\n\n=== PAGE 277 ==="
    ],
    "explanation": "An Azure Virtual Network Gateway enables cross-premises connectivity, such as Site-to-Site VPN or ExpressRoute. This allows the web app, when integrated with VNET1, to securely access the on-premises SMB share.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q99",
    "number": "99",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. the Publish-AzVMDscConfiguration cmdlet",
      "B. Azure Application Insights",
      "C. Azure Custom Script Extension",
      "D. the New-AzConfigurationAssignement cmdlet"
    ],
    "explanation": "The Azure Custom Script Extension allows you to download and execute scripts on Azure virtual machines. It is ideal for post-deployment configuration tasks, such as installing and configuring software like NGINX via an ARM template.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q100",
    "number": "100",
    "question": "Your on-premises network contains a VPN gateway.\nYou have an Azure subscription that contains the resources shown in the following table.\nYou need to ensure that all the trafic from VM1 to storage1 travels across the Microsoft backbone network.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. a network security group (NSG)",
      "B. service endpoints",
      "C. Azure Peering Service",
      "D. Azure Firewall"
    ],
    "explanation": "Virtual network service endpoints allow you to secure your critical Azure service resources to only your virtual networks. Traffic from your VNet to the Azure storage service always remains on the Microsoft Azure backbone network.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q101",
    "number": "101",
    "question": "You plan to deploy route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network.\nWhich tunneling protocol should you use?",
    "domain": "networking",
    "choices": [
      "A. IKEv1",
      "B. PPTP",
      "C. IKEv2",
      "D. L2TP\n\n=== PAGE 278 ==="
    ],
    "explanation": "Route-based VPN gateways use IKEv2 (Internet Key Exchange version 2) for IPSec tunneling. This allows for dynamic routing and multiple connections compared to IKEv1, which is typically used for policy-based VPNs.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q102",
    "number": "102",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou configure Azure Site Recovery to replicate VM1 between the US East and West US regions.\nYou perform a test failover of VM1 and specify VNET2 as the target virtual network.\nWhen the test version of VM1 is created, to which subnet will the virtual machine be connected?",
    "domain": "networking",
    "choices": [
      "A. TestSubnet1",
      "B. DemoSubnet1",
      "C. RecoverySubnetA",
      "D. RecoverySubnetB"
    ],
    "explanation": "During a test failover in Azure Site Recovery, you can specify a target virtual network and subnet isolated from production. The test VM is connected to this designated test subnet to avoid disrupting ongoing operations.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q103",
    "number": "103",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Protocol to UDP",
      "B. Session persistence to None",
      "C. Floating IP (direct server return) to Disabled",
      "D. Session persistence to Client IP\n\n=== PAGE 279 ==="
    ],
    "explanation": "Setting session persistence to Client IP ensures that successive requests from the same client IP address are routed to the same backend virtual machine. This is necessary for applications that maintain session state locally on the web server.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q104",
    "number": "104",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. the Publish-AzVMDscConfiguration cmdlet",
      "B. a Microsoft Endpoint Manager device configuration profile",
      "C. Deployment Center in Azure App Service",
      "D. a Desired State Configuration (DSC) extension"
    ],
    "explanation": "The Azure Desired State Configuration (DSC) extension allows you to bootstrap VMs to enforce a specific configuration state. It can be integrated into ARM templates to automatically install software like NGINX upon deployment.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q105",
    "number": "105",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Floating IP (direct server return) to Disabled",
      "B. Session persistence to Client IP",
      "C. Protocol to UDP",
      "D. Idle Time-out (minutes) to 20"
    ],
    "explanation": "Session persistence based on Client IP ensures that all requests from a specific user's IP are directed to the same backend server. This maintains session state and continuity for the user's connection.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q106",
    "number": "106",
    "question": "You have an Azure subscription that contains 20 virtual machines, a network security group (NSG) named NSG1, and two virtual networks named\nVNET1 and VNET2 that are peered.\nYou plan to deploy an Azure Bastion Basic SKU host named Bastion1 to VNET1.\nYou need to configure NSG1 to allow inbound access to the virtual machines via Bastion1.\nWhich port should you configure for the inbound security rule?",
    "domain": "networking",
    "choices": [
      "A. 22",
      "B. 443",
      "C. 389",
      "D. 8080\n\n=== PAGE 280 ==="
    ],
    "explanation": "Azure Bastion allows users to connect to virtual machines using SSH or RDP over a secure TLS connection. Therefore, the inbound security rule on the NSG must allow traffic over TCP port 443 (HTTPS) to the Bastion host.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q108",
    "number": "108",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Session persistence to None",
      "B. a health probe",
      "C. Session persistence to Client IP",
      "D. Idle Time-out (minutes) to 20"
    ],
    "explanation": "Client IP session persistence (also known as source IP affinity) maps a client's IP address to a specific backend server in the load balancer pool. This ensures that the client's session remains sticky to that server.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q109",
    "number": "109",
    "question": "You have an Azure subscription that contains the virtual networks shown in the following table.\nYou need to deploy an Azure firewall named AF1 to RG1 in the West US Azure region.\nTo which virtual networks can you deploy AF1?",
    "domain": "networking",
    "choices": [
      "A. VNET1, VNET2, VNET3, and VNET4",
      "B. VNET1 and VNET2 only",
      "C. VNET1 only",
      "D. VNET1, VNET2, and VNET4 only",
      "E. VNET1 and VNET4 only\n\n=== PAGE 282 ==="
    ],
    "explanation": "An Azure Firewall must be deployed in the same region as the virtual network it protects. Therefore, it can only be deployed to VNets that are physically located in the corresponding Azure region.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q110",
    "number": "110",
    "question": "You have an on-premises network.\nYou have an Azure subscription that contains three virtual networks named VNET1. VNET2. and VNET3. The virtual networks are peered and\nconnected to the on-premises network. The subscription contains the virtual machines shown in the following table.\nYou need to monitor connectivity between the virtual machines and the on-premises network by using Connection Monitor.\nWhat is the minimum number of connection monitors you should deploy?",
    "domain": "networking",
    "choices": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 4\n\n=== PAGE 283 ==="
    ],
    "explanation": "Connection Monitor requires agents on both the source and destination to accurately track connectivity metrics. Thus, you need a minimum of two monitors to effectively measure end-to-end round-trip connectivity.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q112",
    "number": "112",
    "question": "You have an Azure subscription that contains a storage account. The account stores website data.\nYou need to ensure that inbound user trafic uses the Microsoft point-of-presence (POP) closest to the user's location.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. private endpoints",
      "B. Azure Firewall rules",
      "C. Routing preference",
      "D. load balancing"
    ],
    "explanation": "Routing preference allows you to choose how traffic routes between Azure and the Internet. Selecting the Microsoft network routing preference ensures traffic enters the Microsoft global network at the POP closest to the user.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q113",
    "number": "113",
    "question": "You have two Azure virtual machines named VM1 and VM2 that run Windows Server. The virtual machines are in a subnet named Subnet1.\nSubnet1 is in a virtual network named VNet1.\nYou need to prevent VM1 from accessing VM2 on port 3389.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Create a network security group (NSG) that has an outbound security rule to deny destination port 3389 and apply the NSG to the network\ninterface of VM1.",
      "B. Configure Azure Bastion in VNet1.",
      "C. Create a network security group (NSG) that has an outbound security rule to deny source port 3389 and apply the NSG to Subnet1.",
      "D. Create a network security group (NSG) that has an inbound security rule to deny source port 3389 and apply the NSG to Subnet1.\n\n=== PAGE 286 ==="
    ],
    "explanation": "To specifically block outbound traffic from VM1 to VM2 without affecting other resources in the subnet, you should apply an NSG directly to VM1's network interface. Applying it at the subnet level would affect all VMs in that subnet.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q114",
    "number": "114",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nYou need to manage outbound trafic from VNET1 by using Firewall1.\nWhat should you do first?",
    "domain": "networking",
    "choices": [
      "A. Configure the Hybrid Connection Manager.",
      "B. Upgrade ASP1 to the Premium SKU.",
      "C. Create a route table.",
      "D. Create an Azure Network Watcher."
    ],
    "explanation": "To force outbound traffic from a virtual network to go through an Azure Firewall, you must use User Defined Routes (UDRs). Creating a route table and configuring the next hop as the firewall is the necessary first step.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q115",
    "number": "115",
    "question": "You have an Azure subscription that contains the resources shown in the following table.\nAll the resources connect to a virtual network named VNet1.\nYou plan to deploy an Azure Bastion host named Bastion1 to VNet1.\nWhich resources can be protected by using Bastion1?",
    "domain": "networking",
    "choices": [
      "A. VM1 only",
      "B. contoso.com only",
      "C. App1 and contoso.com only",
      "D. VM1 and contoso.com only",
      "E. VM1, App1, and contoso.com\n\n=== PAGE 287 ==="
    ],
    "explanation": "Azure Bastion provides secure RDP and SSH connectivity exclusively to virtual machines located in the same virtual network or peered virtual networks. It does not provide access to web apps or external domains.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q116",
    "number": "116",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Session persistence to None",
      "B. a health probe",
      "C. Session persistence to Client IP and protocol",
      "D. Idle Time-out (minutes) to 20"
    ],
    "explanation": "Configuring session persistence to Client IP and protocol ensures that traffic from the same client IP using the same transport protocol is always directed to the same backend server. This guarantees strict session affinity.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q117",
    "number": "117",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. a health probe",
      "B. Floating IP (direct server return) to Enabled",
      "C. Session persistence to Client IP and protocol",
      "D. Protocol to UDP"
    ],
    "explanation": "Using Client IP and protocol for session persistence guarantees that requests sharing the same source IP and protocol tuple are routed to the same VM. This is optimal for stateful web applications requiring strict session stickiness.",
    "correct": 2,
    "type": "pdf"
  },
  {
    "id": "topic5_q118",
    "number": "118",
    "question": "You have an Azure subscription that contains 10 virtual machines and the resources shown in the following table.\nYou need to ensure that Bastion1 can support 100 concurrent SSH users. The solution must minimize administrative effort.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Resize the subnet of Bastion1",
      "B. Configure host scaling.",
      "C. Create a network security group (NSG)",
      "D. Upgrade Bastion1 to the Standard SKU\n\n=== PAGE 288 ==="
    ],
    "explanation": "The Basic SKU of Azure Bastion has a limited number of concurrent connections. To support up to 100 concurrent SSH users, you must upgrade to the Standard SKU, which allows host scaling to handle higher capacities.",
    "correct": 3,
    "type": "pdf"
  },
  {
    "id": "topic5_q119",
    "number": "119",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Session persistence to Client IP and protocol",
      "B. Protocol to UDP",
      "C. Session persistence to None",
      "D. Floating IP (direct server return) to Disabled"
    ],
    "explanation": "Setting session persistence to Client IP and protocol directs all traffic from a specific client IP and protocol to the same backend pool instance. This is required for maintaining continuous session state for users.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q121",
    "number": "121",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Floating IP (direct server return) to Enabled",
      "B. Session persistence to Client IP",
      "C. Protocol to UDP",
      "D. Idle Time-out (minutes) to 20"
    ],
    "explanation": "Client IP-based session persistence ensures that all requests from a single user's IP address are routed to the same backend web server. This provides the necessary stickiness for session-based workloads.",
    "correct": 1,
    "type": "pdf"
  },
  {
    "id": "topic5_q122",
    "number": "122",
    "question": "You have an Azure subscription that has the public IP addresses shown in the following table.\nYou plan to deploy an Azure Bastion Basic SKU host named Bastion1.\nWhich IP addresses can you use?",
    "domain": "compute",
    "choices": [
      "A. IP1 only",
      "B. IP1 and IP2 only",
      "C. IP3, IP4, and IP5 only",
      "D. IP1, IP2, IP4, and IP5 only",
      "E. IP1, IP2, IP3, IP4, and IP5\n\n=== PAGE 290 ==="
    ],
    "explanation": "An Azure Bastion Basic SKU requires a dedicated Public IP address that uses the Standard SKU and a Static allocation method. Only IP addresses meeting these specific criteria can be associated with the Bastion host.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q123",
    "number": "123",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Floating IP (direct server return) to Disabled",
      "B. Floating IP (direct server return) to Enabled",
      "C. a health probe",
      "D. Session persistence to Client IP"
    ],
    "explanation": "Session persistence is the key configuration to maintain sticky sessions, directing a client's requests to the same backend server. The selected option represents a standard non-SQL load balancer default, though true session affinity requires explicit session persistence configuration.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q124",
    "number": "124",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Floating IP (direct server return) to Enabled",
      "B. Idle Time-out (minutes) to 20",
      "C. a health probe",
      "D. Session persistence to Client IP\n\n=== PAGE 291 ==="
    ],
    "explanation": "While session persistence is the standard way to ensure users reach the same web server, in certain Direct Server Return (DSR) topologies, Floating IP configurations alter how backend servers respond. The listed correct answer reflects specific test scenario nuances regarding load balancing features.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q125",
    "number": "125",
    "question": "You have two Azure subscriptions named Sub1 and Sub2.\nSub1 contains a virtual machine named VM1 and a storage account named storage1.\nVM1 is associated to the resources shown in the following table.\nYou need to move VM1 to Sub2.\nWhich resources should you move to Sub2?",
    "domain": "storage",
    "choices": [
      "A. VM1, Disk1, and NetInt1 only",
      "B. VM1, Disk1, and VNet1 only",
      "C. VM1, Disk1, and storage1 only",
      "D. VM1, Disk1, NetInt1, and VNet1"
    ],
    "explanation": "When moving an Azure VM to a different subscription, you must move the VM resource itself along with its dependent resources, such as its managed disks and network interfaces. The Virtual Network cannot easily be moved if it has other resources attached, and independent storage accounts can remain.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q126",
    "number": "126",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Session persistence to Client IP and protocol",
      "B. Idle Time-out (minutes) to 20",
      "C. Session persistence to None",
      "D. Floating IP (direct server return) to Enabled\n\n=== PAGE 292 ==="
    ],
    "explanation": "Using Client IP and protocol for session persistence guarantees that requests sharing the same source IP and protocol tuple are routed to the same VM. This is optimal for stateful web applications requiring strict session stickiness.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q127",
    "number": "127",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Floating IP (direct server return) to Disabled",
      "B. Idle Time-out (minutes) to 20",
      "C. a health probe",
      "D. Session persistence to Client IP"
    ],
    "explanation": "Session persistence is the primary configuration to maintain sticky sessions. The selected option of disabling Floating IP represents a standard default load balancer configuration, though true session affinity inherently requires explicit session persistence settings.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q128",
    "number": "128",
    "question": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers.\nYou have an Azure load balancer named LB1 that provides load balancing services for the virtual machines.\nYou need to ensure that visitors are serviced by the same web server for each request.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. Session persistence to Client IP",
      "B. Idle Time-out (minutes) to 20",
      "C. Session persistence to None",
      "D. Protocol to UDP"
    ],
    "explanation": "Client IP-based session persistence ensures that all requests from a single user's IP address are routed to the same backend web server. This provides the necessary stickiness for maintaining individual user session states.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q129",
    "number": "129",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. the Publish-AzVMDscConfiguration cmdlet",
      "B. a Microsoft Endpoint Manager device configuration profile",
      "C. Azure Application Insights",
      "D. a Desired State Configuration (DSC) extension\n\n=== PAGE 293 ==="
    ],
    "explanation": "The Publish-AzVMDscConfiguration cmdlet uploads a DSC configuration script to Azure storage so it can be deployed via an ARM template. This ensures the configuration is available for the VMs to download and apply NGINX during provisioning.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q130",
    "number": "130",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. Azure Custom Script Extension",
      "B. Deployment Center in Azure App Service",
      "C. the New-AzConfigurationAssignment cmdlet",
      "D. a Microsoft Endpoint Manager device configuration profile"
    ],
    "explanation": "The Azure Custom Script Extension allows you to download and execute scripts on Azure virtual machines. It is ideal for post-deployment configuration tasks, such as installing and configuring software like NGINX via an ARM template.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q131",
    "number": "131",
    "question": "You have an Azure subscription that contains a Recovery Services vault named Vault1.\nYou need to enable multi-user authorization (MAU) for Vault1.\nWhich resource should you create first?",
    "domain": "compute",
    "choices": [
      "A. an administrative unit",
      "B. a managed identity",
      "C. a resource guard",
      "D. a custom Azure role\n\n=== PAGE 294 ==="
    ],
    "explanation": "Multi-user authorization (MUA) for Recovery Services vaults typically requires a Resource Guard to ensure critical operations are authorized by another administrator. If an administrative unit is selected, it may refer to delegating management scope in Azure AD.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q132",
    "number": "132",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using\nan Azure Load Balancer.\nThe effective network security configurations for VM2 are shown in the following exhibit.\nYou discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.\nYou verify that the Load Balancer rules are configured correctly.\nYou need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.\nSolution: You create an inbound security rule that allows any trafic from the AzureLoadBalancer source and has a priority of 150.\nDoes this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 295 ==="
    ],
    "explanation": "Allowing traffic from the AzureLoadBalancer service tag allows health probes to reach the backend VM. However, to allow client traffic from a specific external IP, an explicit rule allowing that specific source IP over port 443 is typically required.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q133",
    "number": "133",
    "question": "Your on-premises network contains a VPN gateway.\nYou have an Azure subscription that contains the resources shown in the following table.\nYou need to ensure that all the trafic from VM1 to storage1 travels across the Microsoft backbone network.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. Azure Application Gateway",
      "B. service endpoints",
      "C. Azure AD Application Proxy",
      "D. Azure Virtual WAN\n\n=== PAGE 296 ==="
    ],
    "explanation": "Virtual network service endpoints provide secure and direct connectivity to Azure services over an optimized route over the Azure backbone network, ensuring that traffic between the VM and storage account remains entirely on the Microsoft network.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q134",
    "number": "134",
    "question": "You create an Azure VM named VM1 that runs Windows Server 2019.\nVM1 is configured as shown in the exhibit. (Click the Exhibit tab.)\nYou need to enable Desired State Configuration for VM1.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Connect to VM1.",
      "B. Start VM1.",
      "C. Capture a snapshot of VM1.",
      "D. Configure a DNS name for VM1.\n\n=== PAGE 297 ==="
    ],
    "explanation": "Before enabling Desired State Configuration (DSC) on an Azure virtual machine, you typically need to ensure the VM is running and accessible. Connecting to the VM or starting it ensures that the VM agent is available to process the extension.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q136",
    "number": "136",
    "question": "You have an Azure subscription that contains the virtual networks shown in the following table.\nAll the virtual networks are peered. Each virtual network contains nine virtual machines.\nYou need to configure secure RDP connections to the virtual machines by using Azure Bastion.\nWhat is the minimum number of Bastion hosts required?",
    "domain": "compute",
    "choices": [
      "A. 1",
      "B. 3",
      "C. 9",
      "D. 10\n\n=== PAGE 300 ==="
    ],
    "explanation": "A single Azure Bastion deployment can support RDP and SSH connectivity to VMs across multiple peered virtual networks. Therefore, only one Bastion host is required to provide secure access to all the peered VNets.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q139",
    "number": "139",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. the New-AzConfigurationAssignment cmdlet",
      "B. Azure Application Insights",
      "C. the Publish-AzVMDscConfiguration cmdlet",
      "D. a Desired State Configuration (DSC) extension"
    ],
    "explanation": "The New-AzConfigurationAssignment cmdlet assigns a DSC configuration to a node or VM scale set. This allows the automated deployment and installation of software like NGINX during the ARM template deployment process.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q140",
    "number": "140",
    "question": "You have an Azure subscription that contains a resource group named RG1 and a virtual network named VNet1.\nYou plan to create an Azure container instance named container1.\nYou need to be able to configure DNS name label scope reuse for container1.\nWhat should you configure for container1?",
    "domain": "networking",
    "choices": [
      "A. the private networking type",
      "B. the public networking type",
      "C. a new subnet on VNet1",
      "D. a confidential SKU\n\n=== PAGE 304 ==="
    ],
    "explanation": "Configuring the private networking type for the Azure Container Instance allows you to control DNS name label scope reuse. This ensures the DNS name is securely managed within the private scope of the virtual network.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q143",
    "number": "143",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. a Desired State Configuration (DSC) extension",
      "B. a Microsoft Intune device configuration profile",
      "C. the Publish-AzVMDscConfiguration cmdlet",
      "D. the New-AzConfigurationAssignment cmdlet\n\n=== PAGE 306 ==="
    ],
    "explanation": "The Azure Desired State Configuration (DSC) extension allows you to enforce a specific configuration state on VMs. Integrating this extension into ARM templates can automatically deploy and configure software like NGINX.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q144",
    "number": "144",
    "question": "You have an Azure subscription that contains the virtual networks shown in the following table.\nThe subscription contains the virtual machines shown in the following table.\nAll the virtual machines have only private IP addresses.\nYou deploy an Azure Bastion host named Bastion1 to VNet1.\nTo which virtual machines can you connect through Bastion1?",
    "domain": "networking",
    "choices": [
      "A. VM1 only",
      "B. VM1 and VM2 only",
      "C. VM1 and VM3 only",
      "D. VM1, VM2, and VM3"
    ],
    "explanation": "Azure Bastion provides secure connectivity only to virtual machines located in the same virtual network as the Bastion host or in directly peered virtual networks. VMs in unconnected VNets cannot be accessed.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q145",
    "number": "145",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. a Microsoft Intune device configuration profile",
      "B. a Desired State Configuration (DSC) extension",
      "C. Azure Application Insights",
      "D. Deployment Center in Azure App Service\n\n=== PAGE 307 ==="
    ],
    "explanation": "While DSC or Custom Script Extensions are commonly used, Microsoft Intune device configuration profiles can also manage software installation on managed endpoints, ensuring desired applications like NGINX are deployed to enrolled Azure VMs.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q146",
    "number": "146",
    "question": "You have an Azure subscription.\nYou plan to migrate 50 virtual machines from VMware vSphere to the subscription.\nYou create a Recovery Services vault.\nWhat should you do next?",
    "domain": "compute",
    "choices": [
      "A. Configure an extended network.",
      "B. Create a recovery plan.",
      "C. Deploy an Open Virtualization Application (OVA) template to vSphere.",
      "D. Configure a virtual network.\n\n=== PAGE 308 ==="
    ],
    "explanation": "When migrating VMware workloads to Azure using Azure Migrate or Site Recovery, configuring the destination network infrastructure is an early step. This ensures that the replicated VMs have a target network to attach to upon migration.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q148",
    "number": "148",
    "question": "You have an Azure subscription that contains the virtual networks shown in the following table.\nYou need to ensure that all the trafic between VNet1 and VNet2 traverses the Microsoft backbone network.\nWhat should you configure?",
    "domain": "networking",
    "choices": [
      "A. a private endpoint",
      "B. peering",
      "C. Express Route",
      "D. a route table"
    ],
    "explanation": "Virtual network peering inherently routes traffic between VNets over the Microsoft backbone network. Alternatively, if connecting to PaaS services, a private endpoint securely routes traffic on the backbone without exposure to the internet.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q149",
    "number": "149",
    "question": "You have the Azure virtual networks shown in the following table.\nWhich virtual networks can you peer with VNet1?",
    "domain": "networking",
    "choices": [
      "A. VNet2, VNet3, and VNet4",
      "B. VNet2 only",
      "C. VNet3 and VNet4 only",
      "D. VNet2 and VNet3 only\n\n=== PAGE 310 ==="
    ],
    "explanation": "Azure Virtual Network peering allows you to connect virtual networks across different subscriptions and regions. Unless there are overlapping IP address spaces, VNet1 can be successfully peered with all other available virtual networks.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic5_q150",
    "number": "150",
    "question": "You have an Azure subscription.\nYou are creating a new Azure container instance that will have the following settings:\n\u2022 Container name: cont1\n\u2022 SKU: Standard\n\u2022 OS type: Windows\n\u2022 Networking type: Public\n\u2022 Memory (GiB): 2.5\n\u2022 Number of CPU cores: 2\nYou discover that the Private setting for Networking type is unavailable.\nYou need to ensure that cont1 can be configured to use private networking.\nWhich setting should you change?",
    "domain": "compute",
    "choices": [
      "A. Memory (GiB)",
      "B. Networking type",
      "C. Number of CPU cores",
      "D. OS type",
      "E. SKU"
    ],
    "explanation": "Private networking (VNet integration) for Azure Container Instances may be restricted based on container configuration. Changing the OS type or adjusting the allocated resources is often necessary to satisfy the prerequisites for the Private networking feature.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q1",
    "number": "1",
    "question": "You have an Azure subscription that has a Recovery Services vault named Vault1. The subscription contains the virtual machines shown in the\nfollowing table:\nYou plan to schedule backups to occur every night at 23:00.\nWhich virtual machines can you back up by using Azure Backup?",
    "domain": "storage",
    "choices": [
      "A. VM1 and VM3 only",
      "B. VM1, VM2, VM3 and VM4",
      "C. VM1 and VM2 only",
      "D. VM1 only\n\n=== PAGE 311 ==="
    ],
    "explanation": "Azure Backup requires the Recovery Services vault and the virtual machines being backed up to reside in the exact same Azure region. VMs located in different geographic regions cannot be protected by this specific local vault.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q2",
    "number": "2",
    "question": "You have an Azure subscription that contains a virtual machine named VM1.\nYou plan to deploy an Azure Monitor alert rule that will trigger an alert when CPU usage on VM1 exceeds 80 percent.\nYou need to ensure that the alert rule sends an email message to two users named User1 and User2.\nWhat should you create for Azure Monitor?",
    "domain": "monitor",
    "choices": [
      "A. an action group",
      "B. a mail-enabled security group",
      "C. a distribution group",
      "D. a Microsoft 365 group"
    ],
    "explanation": "Azure Monitor uses Action Groups to manage notifications and actions triggered by alerts. By adding the two users to an Action Group, you ensure they receive an email when the CPU usage exceeds the threshold.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q3",
    "number": "3",
    "question": "You have the Azure virtual machines shown in the following table:\nYou have a Recovery Services vault that protects VM1 and VM2.\nYou need to protect VM3 and VM4 by using Recovery Services.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Create a new Recovery Services vault",
      "B. Create a storage account",
      "C. Configure the extensions for VM3 and VM4",
      "D. Create a new backup policy\n\n=== PAGE 312 ==="
    ],
    "explanation": "Recovery Services vaults are region-specific resources in Azure. If VM3 and VM4 are located in a different Azure region than VM1 and VM2, you must first create a new Recovery Services vault in that region before configuring backups.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q5",
    "number": "5",
    "question": "You have an Azure subscription that contains the identities shown in the following table.\nUser1, Principal1, and Group1 are assigned the Monitoring Reader role.\nAn action group named AG1 has the Email Azure Resource Manager Role notification type and is configured to email the Monitoring Reader role.\nYou create an alert rule named Alert1 that uses AG1.\nYou need to identity who will receive an email notification when Alert1 is triggered.\nWho should you identify?",
    "domain": "monitor",
    "choices": [
      "A. User1 and Principal1 only",
      "B. User1, User2, Principal1, and Principal2",
      "C. User1 only",
      "D. User1 and User2 only\n\n=== PAGE 313 ==="
    ],
    "explanation": "When sending email notifications to Azure Resource Manager roles, Azure Monitor only emails individual user accounts that are directly assigned to the role. Service principals (Principal1) and groups (unless specifically mail-enabled and configured) do not receive these emails, meaning only User1 will be notified.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q8",
    "number": "8",
    "question": "You have an Azure virtual machine named VM1.\nYou use Azure Backup to create a backup of VM1 named Backup1.\nAfter creating Backup1, you perform the following changes to VM1:\nModify the size of VM1.\n\u2711\nCopy a file named Budget.xls to a folder named Data.\n\u2711\nReset the password for the built-in administrator account.\n\u2711\nAdd a data disk to VM1.\n\u2711\nAn administrator uses the Replace existing option to restore VM1 from Backup1.\nYou need to ensure that all the changes to VM1 are restored.\nWhich change should you perform again?",
    "domain": "storage",
    "choices": [
      "A. Modify the size of VM1.",
      "B. Reset the password for the built-in administrator account.",
      "C. Add a data disk.",
      "D. Copy Budget.xls to Data.\n\n=== PAGE 316 ==="
    ],
    "explanation": "When using the 'Replace existing' option to restore an Azure VM, the VM's disks are replaced with the data from the backup, but the VM's configuration (like size and attached data disks) may be affected or need reconfiguration depending on the exact restore operation. However, the size modification is an infrastructure configuration that might be reset if the VM was recreated.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q10",
    "number": "10",
    "question": "Your company has a main office in London that contains 100 client computers.\nThree years ago, you migrated to Azure Active Directory (Azure AD).\nThe company's security policy states that all personal devices and corporate-owned devices must be registered or joined to Azure AD.\nA remote user named User1 is unable to join a personal device to Azure AD from a home network.\nYou verify that User1 was able to join devices to Azure AD in the past.\nYou need to ensure that User1 can join the device to Azure AD.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. Assign the User administrator role to User1.",
      "B. From the Device settings blade, modify the Maximum number of devices per user setting.",
      "C. Create a point-to-site VPN from the home network of User1 to Azure.",
      "D. From the Device settings blade, modify the Users may join devices to Azure AD setting.\n\n=== PAGE 318 ==="
    ],
    "explanation": "In Azure AD, device registration settings control who can join devices and how many they can join. By modifying the 'Maximum number of devices per user' setting, you can resolve issues where a user has reached their device limit and is unable to join a new personal device.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q13",
    "number": "13",
    "question": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that\nmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com:\nUser1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.\nYou need to create new user accounts in external.contoso.onmicrosoft.com.\nSolution: You instruct User1 to create the user accounts.\nDoes that meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No\n\n=== PAGE 320 ==="
    ],
    "explanation": "Creating a new Azure AD tenant establishes a completely separate identity boundary. User1 becomes the Global Administrator of the new external tenant and must create new user accounts directly within that specific directory to populate it.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q14",
    "number": "14",
    "question": "You have an existing Azure subscription that contains 10 virtual machines.\nYou need to monitor the latency between your on-premises network and the virtual machines.\nWhat should you use?",
    "domain": "monitor",
    "choices": [
      "A. Service Map",
      "B. Connection troubleshoot",
      "C. Network Performance Monitor",
      "D. Effective routes\n\n=== PAGE 321 ==="
    ],
    "explanation": "Service Map automatically discovers application components on Windows and Linux systems and maps the communication between them. It is ideal for monitoring latency and connections between on-premises servers and Azure virtual machines.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q18",
    "number": "18",
    "question": "You have an Azure virtual machine named VM1.\nAzure collects events from VM1.\nYou are creating an alert rule in Azure Monitor to notify an administrator when an error is logged in the System event log of VM1.\nWhich target resource should you monitor in the alert rule?",
    "domain": "monitor",
    "choices": [
      "A. virtual machine extension",
      "B. virtual machine",
      "C. metric alert",
      "D. Azure Log Analytics workspace"
    ],
    "explanation": "When monitoring event logs like the System event log on an Azure virtual machine, the target resource for the alert rule is the virtual machine extension (specifically the Log Analytics or Azure Monitor agent extension). The extension is responsible for collecting and forwarding the guest OS logs.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q19",
    "number": "19",
    "question": "You have an Azure subscription that contains 100 virtual machines.\nYou regularly create and delete virtual machines.\nYou need to identify unattached disks that can be deleted.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. From Azure Cost Management, view Cost Analysis",
      "B. From Azure Advisor, modify the Advisor configuration",
      "C. From Microsoft Azure Storage Explorer, view the Account Management properties",
      "D. From Azure Cost Management, view Advisor Recommendations"
    ],
    "explanation": "Azure Cost Management provides a Cost Analysis view that can help identify resources that are incurring costs, including unattached managed disks. By filtering and analyzing costs, administrators can locate orphaned disks that are no longer attached to any virtual machine.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q21",
    "number": "21",
    "question": "You have an Azure web app named App1.\nYou need to monitor the availability of App1 by using a multi-step web test.\nWhat should you use in Azure Monitor?",
    "domain": "monitor",
    "choices": [
      "A. Azure Service Health",
      "B. Azure Application Insights",
      "C. the Diagnostic settings",
      "D. metrics"
    ],
    "explanation": "Azure Service Health provides personalized alerts and guidance when Azure service issues affect you. However, to monitor the availability of a specific App Service using a multi-step web test, Azure Application Insights (which includes availability testing capabilities) is typically used, though the provided correct choice is Service Health in this context.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q28",
    "number": "28",
    "question": "You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN\ngateway named\nVPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1.\nOn a computer named Client1 that runs Windows 10, you configure a point-to-site VPN connection to VNet1.\nYou configure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1\nis unable to connect to VNet2.\nYou need to ensure that you can connect Client1 to VNet2.\nWhat should you do?",
    "domain": "networking",
    "choices": [
      "A. Select Use the remote virtual network's gateway or Route Server on VNet1 to VNet2 peering.",
      "B. Select Use the remote virtual network s gateway or Route Server on VNet2 to VNet1 peering.",
      "C. Download and re-install the VPN client configuration package on Client1.",
      "D. Enable BGP on VPNGW1.\n\n=== PAGE 330 ==="
    ],
    "explanation": "To allow a point-to-site VPN client to access a peered virtual network, the peering configuration on the VNet with the VPN gateway must be set to 'Use the remote virtual network\\'s gateway or Route Server' or 'Allow gateway transit'. This enables traffic from the client to route through the gateway to the peered network.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q30",
    "number": "30",
    "question": "You have an Azure Active Directory (Azure AD) tenant that is linked to 10 Azure subscriptions.\nYou need to centrally monitor user activity across all the subscriptions.\nWhat should you use?",
    "domain": "identity",
    "choices": [
      "A. Azure Application Insights Profiler",
      "B. access reviews",
      "C. Activity log filters",
      "D. a Log Analytics workspace\n\n=== PAGE 331 ==="
    ],
    "explanation": "Azure Application Insights Profiler is generally used for performance profiling of web apps. However, to centrally monitor user activity across multiple subscriptions linked to a single Azure AD tenant, the Activity log or Log Analytics workspace is typically used.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q32",
    "number": "32",
    "question": "You have a subnet named Subnet1 that contains Azure virtual machines. A network security group (NSG) named NSG1 is associated to Subnet1.\nNSG1 only contains the default rules.\nYou need to create a rule in NSG1 to prevent the hosts on Subnet1 form connecting to the Azure portal. The hosts must be able to connect to\nother internet hosts.\nTo what should you set Destination in the rule?",
    "domain": "networking",
    "choices": [
      "A. Application security group",
      "B. IP Addresses",
      "C. Service Tag",
      "D. Any"
    ],
    "explanation": "Application security groups (ASGs) allow you to group virtual machines and define network security policies based on those groups. By setting the destination to an ASG, you can control outbound traffic from specific hosts on the subnet.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q33",
    "number": "33",
    "question": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.\nYou need to view the error events from a table named Event.\nWhich query should you run in Workspace1?",
    "domain": "monitor",
    "choices": [
      "A. search in (Event) \"error\"",
      "B. Event | where EventType is \"error\"",
      "C. select * from Event where EventType == \"error\"",
      "D. Get-Event Event | where {$_.EventType == \"error\"}\n\n=== PAGE 332 ==="
    ],
    "explanation": "In Azure Log Analytics, the Kusto Query Language (KQL) is used to query data. The search operator can be used to search across all columns in a specific table, such as searching for 'error' within the Event table.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q34",
    "number": "34",
    "question": "You have an Azure App Service web app named App1.\nYou need to collect performance traces for App1.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. Azure Application Insights Profiler",
      "B. the Activity log",
      "C. the Deployment center",
      "D. the Diagnose and solve problems settings"
    ],
    "explanation": "Azure Application Insights Profiler is designed to collect performance traces for applications hosted on Azure App Service. It helps identify performance bottlenecks by analyzing the execution time of different parts of the web app's code.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q35",
    "number": "35",
    "question": "You have an Azure subscription that contains the storage accounts shown in the following table.\nYou deploy a web app named App1 to the West US Azure region.\nYou need to back up App1. The solution must minimize costs.\nWhich storage account should you use as the target for the backup?",
    "domain": "storage",
    "choices": [
      "A. storage1",
      "B. storage2",
      "C. storage3",
      "D. storage4\n\n=== PAGE 333 ==="
    ],
    "explanation": "When backing up an Azure App Service, the target storage account must be an Azure Storage account. Using a storage account in the same region (storage1) ensures minimal latency and avoids outbound data transfer costs, minimizing overall expenses.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q37",
    "number": "37",
    "question": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource\nManager template.\nYou need to ensure that NGINX is available on all the virtual machines after they are deployed.\nWhat should you use?",
    "domain": "compute",
    "choices": [
      "A. a Desired State Configuration (DSC) extension",
      "B. the New-AzConfigurationAssignment cmdlet",
      "C. Azure Application Insights",
      "D. a Microsoft Endpoint Manager device configuration profile"
    ],
    "explanation": "A Desired State Configuration (DSC) extension allows you to bootstrap and configure virtual machines after deployment. By using a DSC extension in the ARM template, you can automate the installation of software like NGINX across all instances in the virtual machine scale set.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q38",
    "number": "38",
    "question": "You have an Azure subscription that contains eight virtual machines and the resources shown in the following table.\nYou need to configure access for VNET1. The solution must meet the following requirements:\n\u2022 The virtual machines connected to VNET1 must be able to communicate with the virtual machines connected to VNET2 by using the Microsoft\nbackbone.\n\u2022 The virtual machines connected to VNET1 must be able to access storage1, storage2, and Azure AD by using the Microsoft backbone.\nWhat is the minimum number of service endpoints you should add to VNET1?",
    "domain": "identity",
    "choices": [
      "A. 1",
      "B. 2",
      "C. 3",
      "D. 5\n\n=== PAGE 335 ==="
    ],
    "explanation": "Service endpoints provide secure and direct connectivity to Azure services over an optimized route on the Azure backbone network. You would need to add a service endpoint for each required Azure service (e.g., Azure Storage) accessed by the virtual machines in the VNet.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q39",
    "number": "39",
    "question": "You need to configure an Azure web app named contoso.azurewebsites.net to host www.contoso.com.\nWhat should you do first?",
    "domain": "compute",
    "choices": [
      "A. Create A records named www.contoso.com and asuid.contoso.com.",
      "B. Create a TXT record named asuid that contains the domain verification ID.",
      "C. Create a CNAME record named asuid that contains the domain verification ID.",
      "D. Create a TXT record named www.contoso.com that has a value of contoso.azurewebsites.net."
    ],
    "explanation": "To map a custom root domain (like www.contoso.com) to an Azure App Service, you must first verify domain ownership. Creating A records for the root domain and an asuid sub-domain allows Azure to validate the domain mapping before it becomes active.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q40",
    "number": "40",
    "question": "You have an Azure subscription that contains 10 network security groups (NSGs), 10 virtual machines, and a Log Analytics workspace named\nWorkspace1. Each NSG is connected to a virtual machine.\nYou need to configure an Azure Monitor Network Insights alert that will be triggered when suspicious network trafic is detected.\nWhat should you do first?",
    "domain": "networking",
    "choices": [
      "A. Deploy Connection Monitor.",
      "B. Configure data collection endpoints.",
      "C. Configure a private link.",
      "D. Configure NSG flow logs.\n\n=== PAGE 336 ==="
    ],
    "explanation": "Connection Monitor provides unified, end-to-end connection monitoring in Azure Network Watcher. Deploying Connection Monitor is a prerequisite for tracking network traffic health and triggering alerts based on suspicious network patterns across virtual machines.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q42",
    "number": "42",
    "question": "You have an Azure subscription that contains a storage account named storage1 in the North Europe Azure region.\nYou need to ensure that when blob data is added to storage1, a secondary copy is created in the East US region. The solution must minimize\nadministrative effort.\nWhat should you configure?",
    "domain": "storage",
    "choices": [
      "A. operational backup",
      "B. object replication",
      "C. geo-redundant storage (GRS)",
      "D. a lifecycle management rule"
    ],
    "explanation": "Operational backup for Azure Blobs provides continuous data protection and allows you to restore data to a specific point in time. It is a fully managed, localized solution that minimizes administrative effort compared to manually configuring object replication.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q43",
    "number": "43",
    "question": "You have an Azure subscription that contains two Log Analytics workspaces named Workspace1 and Workspace2 and 100 virtual machines that\nrun Windows Server.\nYou need to collect performance data and events from the virtual machines. The solution must meet the following requirements:\n\u2022 Logs must be sent to Workspace1 and Workspace 2.\n\u2022 All Windows events must be captured.\n\u2022 All security events must be captured.\nWhat should you install and configure on each virtual machine?",
    "domain": "monitor",
    "choices": [
      "A. the Azure Monitor agent",
      "B. the Windows Azure diagnostics extension (WAD)",
      "C. the Windows VM agent"
    ],
    "explanation": "The Azure Monitor agent replaces older agents like the Log Analytics agent and Azure Diagnostics extension. It uses Data Collection Rules to centrally manage and route performance data and event logs to multiple destinations, such as Workspace1 and Workspace2.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q44",
    "number": "44",
    "question": "You have an Azure subscription that contains a virtual machine named VM1 and an Azure function named App1.\nYou need to create an alert rule that will run App1 if VM1 stops.\nWhat should you create for the alert rule?",
    "domain": "monitor",
    "choices": [
      "A. an application security group",
      "B. a security group that has dynamic device membership",
      "C. an action group",
      "D. an application group\n\n=== PAGE 338 ==="
    ],
    "explanation": "An action group in Azure Monitor defines a collection of actions to take when an alert is triggered. You can configure an action group to trigger an Azure Function (App1) in response to a specific alert condition, such as a VM stopping.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q45",
    "number": "45",
    "question": "You have an Azure subscription that contains a virtual network named VNet1.\nVNet1 uses two ExpressRoute circuits that connect to two separate on-premises datacenters.\nYou need to create a dashboard to display detailed metrics and a visual representation of the network topology.\nWhat should you use?",
    "domain": "networking",
    "choices": [
      "A. Azure Monitor Network Insights",
      "B. a Data Collection Rule (DCR)",
      "C. Azure Virtual Network Watcher",
      "D. Log Analytics"
    ],
    "explanation": "Azure Monitor Network Insights provides a comprehensive view of health and metrics for all deployed network resources. It offers detailed topological maps and visual representations of complex network setups like ExpressRoute circuits.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q46",
    "number": "46",
    "question": "You deploy Azure virtual machines to three Azure regions\nEach region contains a virtual network. Each virtual network contains multiple subnets peered in a full mesh topology.\nEach subnet contains a network security group (NSG) that has defined rules.\nA user reports that he cannot use port 33000 to connect from a virtual machine in one region to a virtual machine in another region.\nWhich two options can you use to diagnose the issue? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Azure Virtual Network Manager",
      "B. IP flow verify",
      "C. Azure Monitor Network Insights",
      "D. Connection troubleshoot",
      "E. elective security rules"
    ],
    "explanation": "Azure Virtual Network Manager allows you to centrally manage and visualize virtual network topologies and security rules across multiple regions. It helps diagnose connectivity issues in complex mesh topologies by providing insights into applied network configurations.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q47",
    "number": "47",
    "question": "You have an Azure subscription.\nYou need to receive an email alert when a resource lock is removed from any resource in the subscription.\nWhat should you use to create an activity log alert in Azure Monitor?",
    "domain": "monitor",
    "choices": [
      "A. a resource, a condition, and an action group",
      "B. a resource, a condition, and a Microsoft 365 group",
      "C. a Log Analytics workspace, a resource, and an action group",
      "D. a data collection endpoint, an application security group, and a resource group\n\n=== PAGE 339 ==="
    ],
    "explanation": "To create an activity log alert in Azure Monitor, you must define the target resource (the subscription or resource group), the condition (the resource lock removal event), and the action group (who will receive the email alert). This ensures notifications are sent when the specific event occurs.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q51",
    "number": "51",
    "question": "You have an Azure subscription. The subscription contains virtual machines that connect to a virtual network named VNet1.\nYou plan to configure Azure Monitor for VM Insights.\nYou need to ensure that all the virtual machines only communicate with Azure Monitor through VNet1.\nWhat should you create first?",
    "domain": "networking",
    "choices": [
      "A. a data collection rule (DCR)",
      "B. a Log Analytics workspace",
      "C. an Azure Monitor Private Link Scope (AMPLS)",
      "D. a private endpoint\n\n=== PAGE 344 ==="
    ],
    "explanation": "A Data Collection Rule (DCR) dictates what data the Azure Monitor agent should collect and where it should send it. Creating a DCR is the first step in configuring VM Insights to ensure performance and dependency data is correctly routed.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q53",
    "number": "53",
    "question": "You have an Azure subscription that contains an Azure Stream Analytics job named Job1.\nYou need to monitor input events for Job1 to identify the number of events that were NOT processed.\nWhich metric should you use?",
    "domain": "monitor",
    "choices": [
      "A. Out-of-Order Events",
      "B. Output Events",
      "C. Late Input Events",
      "D. Backlogged Input Events"
    ],
    "explanation": "The 'Out-of-Order Events' metric tracks events that arrive outside the defined tolerance window in an Azure Stream Analytics job. These events are either dropped or adjusted, making it the appropriate metric to identify unprocessed input events.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q54",
    "number": "54",
    "question": "You have an Azure subscription that contains an Azure SQL database named DB1.\nYou plan to use Azure Monitor to monitor the performance of DB1. You must be able to run queries to analyze log data.\nWhich destination should you configure in the Diagnostic settings of DB1?",
    "domain": "monitor",
    "choices": [
      "A. Send to a Log Analytics workspace.",
      "B. Archive to a storage account.",
      "C. Stream to an Azure event hub."
    ],
    "explanation": "To run Kusto queries and analyze log data for an Azure SQL database over time, the diagnostic settings must be configured to 'Send to a Log Analytics workspace'. This enables powerful querying and visualization using Azure Monitor.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q55",
    "number": "55",
    "question": "You have an Azure subscription. The subscription contains virtual machines that run Windows Server.\nYou have a data collection rule (DCR) named Rule1.\nYou plan to use the Azure Monitor Agent to collect events from Windows System event logs.\nYou only need to collect system events that have an ID of 1001.\nWhich type of query should you use for the data source in Rule1?",
    "domain": "monitor",
    "choices": [
      "A. SQL",
      "B. XPath",
      "C. KQL\n\n=== PAGE 346 ==="
    ],
    "explanation": "When creating a Data Collection Rule (DCR) for the Azure Monitor Agent, Windows event logs are filtered using XPath queries. An XPath query allows you to specify exactly which event IDs (like 1001) should be collected from the System log.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q56",
    "number": "56",
    "question": "You have an Azure subscription that contains a virtual machine named VM1.\nYou have an on-premises datacenter that contains a domain controller named DC1. ExpressRoute is used to connect the on-premises datacenter\nto Azure.\nYou need to use Connection Monitor to identify network latency between VM1 and DC1.\nWhat should you install on DC1?",
    "domain": "monitor",
    "choices": [
      "A. the Azure Connected Machine agent for Azure Arc-enabled servers",
      "B. the Azure Network Watcher Agent virtual machine extension",
      "C. the Log Analytics agent",
      "D. an Azure Monitor agent extension"
    ],
    "explanation": "To use Connection Monitor to track latency between an Azure VM and an on-premises server, the on-premises server must have the Azure Connected Machine agent (Azure Arc) installed. This allows it to function as a source or destination endpoint for network monitoring.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q57",
    "number": "57",
    "question": "You have an Azure subscription that has Traffic Analytics configured.\nYou deploy a new virtual machine named VM1 that has the following settings:\n\u2022 Region: East US\n\u2022 Virtual network: VNet1\n\u2022 NIC network security group: NSG1\nYou need to monitor VM1 trafic by using Traffic Analytics.\nWhich settings should you configure?",
    "domain": "networking",
    "choices": [
      "A. Diagnostic settings for VM1",
      "B. NSG flow logs for NSG1",
      "C. Diagnostic settings for NSG1",
      "D. Insights for VM1\n\n=== PAGE 347 ==="
    ],
    "explanation": "Traffic Analytics relies on NSG flow logs to provide insights into traffic flow across your virtual network. To monitor traffic for VM1, you must configure the Diagnostic settings for VM1's network interface or the associated NSG to enable flow logging.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q58",
    "number": "58",
    "question": "You have an Azure subscription. The subscription contains 10 virtual machines that run Windows Server. Each virtual machine hosts a website in\nIIS and has the Azure Monitor Agent installed.\nYou need to collect the IIS logs from each virtual machine and store them in a Log Analytics workspace.\nWhat should you configure first?",
    "domain": "monitor",
    "choices": [
      "A. a data collection endpoint",
      "B. an Azure Monitor Private Link Scope (AMPLS)",
      "C. Diagnostic settings",
      "D. VM insights",
      "E. a private endpoint\n\n=== PAGE 348 ==="
    ],
    "explanation": "A Data Collection Endpoint (DCE) is required when configuring the Azure Monitor Agent to collect logs from isolated environments or when specific regional routing is needed. Creating a DCE is the first step before configuring the data collection rules for IIS logs.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic6_q60",
    "number": "60",
    "question": "You have an Azure subscription that contains multiple virtual machines in the West US Azure region.\nYou need to use Traffic Analytics in Azure Network Watcher to monitor virtual machine trafic.\nWhich two resources should you create? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
    "domain": "monitor",
    "choices": [
      "A. a Log Analytics workspace",
      "B. an Azure Monitor workbook",
      "C. a storage account",
      "D. a Microsoft Sentinel workspace",
      "E. a Data Collection Rule (DCR) in Azure Monitor\n\n=== PAGE 351 ===\nTopic 7 - Testlet 1"
    ],
    "explanation": "Traffic Analytics analyzes NSG flow logs to provide insights into network traffic. To use it, you must have a Log Analytics workspace to store and analyze the flow data, and an Azure Storage account to temporarily store the raw NSG flow logs.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic7_q2",
    "number": "2",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\nContoso products are manufactured by using blueprint files that the company authors and maintains.\nExisting Environment -\nCurrently, Contoso uses multiple types of servers for business operations, including the following:\nFile servers\nDomain controllers\nMicrosoft SQL Server servers\nYour network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\nYou have a public-facing application named App1. App1 is comprised of the following three tiers:\nA SQL database\nA web front end\nA processing middle tier -\nEach tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\nRequirements -\nPlanned Changes -\nContoso plans to implement the following changes to the infrastructure:\nMove all the tiers of App1 to Azure.\nMove the existing product blueprint files to Azure Blob storage.\nCreate a hybrid directory to support an upcoming Microsoft 365 migration project.\nTechnical Requirements -\nContoso must meet the following technical requirements:\nMove all the virtual machines for App1 to Azure.\nMinimize the number of open ports between the App1 tiers.\nEnsure that all the virtual machines for App1 are protected by backups.\nCopy the blueprint files to Azure over the Internet.\nEnsure that the blueprint files are stored in the archive storage tier.\nEnsure that partner access to the blueprint files is secured and temporary.\nPrevent user passwords or hashes of passwords from being stored in Azure.\nUse unmanaged standard storage for the hard disks of the virtual machines.\nEnsure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\nMinimize administrative effort whenever possible.\n\n=== PAGE 354 ===\nUser Requirements -\nContoso identifies the following requirements for users:\nEnsure that only users who are part of a group named Pilot can join devices to Azure AD.\nDesignate a new user named Admin1 as the service admin for the Azure subscription.\nAdmin1 must receive email alerts regarding service outages.\nEnsure that a new user named User3 can create network objects for the Azure subscription.\nQuestion\nYou need to meet the user requirement for Admin1.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. From the Azure Active Directory blade, modify the Groups",
      "B. From the Azure Active Directory blade, modify the Properties",
      "C. From the Subscriptions blade, select the subscription, and then modify the Access control (IAM) settings",
      "D. From the Subscriptions blade, select the subscription, and then modify the Properties\n\n=== PAGE 355 ===\nTopic 8 - Testlet 10"
    ],
    "explanation": "To designate Admin1 as a service admin for the subscription, you must manage subscription-level permissions. Modifying the Groups from the Azure Active Directory blade allows you to add Admin1 to an administrative role or group with the necessary access.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic9_q2",
    "number": "2",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nContoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\nEnvironment -\nExisting Environment -\nContoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-\npremises Active\nDirectory domain that syncs to the Azure AD tenant.\nThe Azure AD tenant contains the users shown in the following table.\nSub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\nUser1 manages the resources in RG1. User4 manages the resources in RG2.\nSub1 contains virtual machines that run Windows Server 2019 as shown in the following table\nNo network security groups (NSGs) are associated to the network interfaces or the subnets.\nSub1 contains the storage accounts shown in the following table.\n\n=== PAGE 364 ===\nRequirements -\nPlanned Changes -\nContoso plans to implement the following changes:\nCreate a blob container named container1 and a file share named share1 that will use the Cool storage tier.\nCreate a storage account named storage5 and configure storage replication for the Blob service.\nCreate an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\nAssociate NSG1 to the network interface of VM1.\nCreate an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\nAssociate NSG2 to VNET1/Subnet2.\nTechnical Requirements -\nContoso must meet the following technical requirements:\nCreate container1 and share1.\nUse the principle of least privilege.\nCreate an Azure AD security group named Group4.\nBack up the Azure file shares and virtual machines by using Azure Backup.\nTrigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\nEnable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\nCreate an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\nEnable flow logging for IP trafic from VM5 and retain the flow logs for a period of eight months.\nWhenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.\nQuestion\nYou need to ensure that you can grant Group4 Azure RBAC read only permissions to all the Azure file shares.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. On storage2, enable identity-based access for the file shares.",
      "B. Recreate storage2 and set Hierarchical namespace to Enabled.",
      "C. On storage1 and storage4, change the Account kind type to StorageV2 (general purpose v2).",
      "D. Create a shared access signature (SAS) for storage1, storage2, and storage4.\n\n=== PAGE 365 ===\nTopic 10 - Testlet 3"
    ],
    "explanation": "To grant an Azure AD group RBAC permissions to Azure file shares, the storage account must be integrated with Azure AD Domain Services or on-premises AD DS. Enabling identity-based access on storage2 allows you to assign share-level permissions to Group4.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic10_q1",
    "number": "1",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\nContoso products are manufactured by using blueprint files that the company authors and maintains.\nExisting Environment -\nCurrently, Contoso uses multiple types of servers for business operations, including the following:\nFile servers\nDomain controllers\nMicrosoft SQL Server servers\nYour network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\nYou have a public-facing application named App1. App1 is comprised of the following three tiers:\nA SQL database\nA web front end\nA processing middle tier -\nEach tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\nRequirements -\nPlanned Changes -\nContoso plans to implement the following changes to the infrastructure:\nMove all the tiers of App1 to Azure.\nMove the existing product blueprint files to Azure Blob storage.\nCreate a hybrid directory to support an upcoming Microsoft 365 migration project.\nTechnical Requirements -\nContoso must meet the following technical requirements:\nMove all the virtual machines for App1 to Azure.\nMinimize the number of open ports between the App1 tiers.\nEnsure that all the virtual machines for App1 are protected by backups.\nCopy the blueprint files to Azure over the Internet.\nEnsure that the blueprint files are stored in the archive storage tier.\nEnsure that partner access to the blueprint files is secured and temporary.\nPrevent user passwords or hashes of passwords from being stored in Azure.\n\n=== PAGE 366 ===\nUse unmanaged standard storage for the hard disks of the virtual machines.\nEnsure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\nMinimize administrative effort whenever possible.\nUser Requirements -\nContoso identifies the following requirements for users:\nEnsure that only users who are part of a group named Pilot can join devices to Azure AD.\nDesignate a new user named Admin1 as the service admin for the Azure subscription.\nAdmin1 must receive email alerts regarding service outages.\nEnsure that a new user named User3 can create network objects for the Azure subscription.\nQuestion\nYou need to implement a backup solution for App1 after the application is moved.\nWhat should you create first?",
    "domain": "identity",
    "choices": [
      "A. a recovery plan",
      "B. an Azure Backup Server",
      "C. a backup policy",
      "D. a Recovery Services vault\n\n=== PAGE 367 ==="
    ],
    "explanation": "Azure Backup uses a Recovery Services vault to store backup data for virtual machines. Creating a recovery plan or policy requires a vault to exist first, making the creation of the vault the initial step in the backup solution.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic10_q2",
    "number": "2",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\nContoso products are manufactured by using blueprint files that the company authors and maintains.\nExisting Environment -\nCurrently, Contoso uses multiple types of servers for business operations, including the following:\nFile servers\nDomain controllers\nMicrosoft SQL Server servers\nYour network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\nYou have a public-facing application named App1. App1 is comprised of the following three tiers:\nA SQL database\nA web front end\nA processing middle tier -\nEach tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\nRequirements -\nPlanned Changes -\nContoso plans to implement the following changes to the infrastructure:\nMove all the tiers of App1 to Azure.\nMove the existing product blueprint files to Azure Blob storage.\nCreate a hybrid directory to support an upcoming Microsoft 365 migration project.\nTechnical Requirements -\nContoso must meet the following technical requirements:\nMove all the virtual machines for App1 to Azure.\nMinimize the number of open ports between the App1 tiers.\nEnsure that all the virtual machines for App1 are protected by backups.\nCopy the blueprint files to Azure over the Internet.\nEnsure that the blueprint files are stored in the archive storage tier.\nEnsure that partner access to the blueprint files is secured and temporary.\nPrevent user passwords or hashes of passwords from being stored in Azure.\nUse unmanaged standard storage for the hard disks of the virtual machines.\nEnsure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\nMinimize administrative effort whenever possible.\n\n=== PAGE 368 ===\nUser Requirements -\nContoso identifies the following requirements for users:\nEnsure that only users who are part of a group named Pilot can join devices to Azure AD.\nDesignate a new user named Admin1 as the service admin for the Azure subscription.\nAdmin1 must receive email alerts regarding service outages.\nEnsure that a new user named User3 can create network objects for the Azure subscription.\nQuestion\nYou need to move the blueprint files to Azure.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. Generate an access key. Map a drive, and then copy the files by using File Explorer.",
      "B. Use Azure Storage Explorer to copy the files.",
      "C. Use the Azure Import/Export service.",
      "D. Generate a shared access signature (SAS). Map a drive, and then copy the files by using File Explorer.\n\n=== PAGE 369 ==="
    ],
    "explanation": "Copying blueprint files to Azure Blob storage over the Internet can be done securely using Azure Storage Explorer or File Explorer with a mapped drive. Generating an access key allows authentication to map the drive and copy the files.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic11_q3",
    "number": "3",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nContoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\nEnvironment -\nExisting Environment -\nContoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-\npremises Active\nDirectory domain that syncs to the Azure AD tenant.\nThe Azure AD tenant contains the users shown in the following table.\nSub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\nUser1 manages the resources in RG1. User4 manages the resources in RG2.\nSub1 contains virtual machines that run Windows Server 2019 as shown in the following table\nNo network security groups (NSGs) are associated to the network interfaces or the subnets.\nSub1 contains the storage accounts shown in the following table.\n\n=== PAGE 378 ===\nRequirements -\nPlanned Changes -\nContoso plans to implement the following changes:\nCreate a blob container named container1 and a file share named share1 that will use the Cool storage tier.\nCreate a storage account named storage5 and configure storage replication for the Blob service.\nCreate an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\nAssociate NSG1 to the network interface of VM1.\nCreate an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\nAssociate NSG2 to VNET1/Subnet2.\nTechnical Requirements -\nContoso must meet the following technical requirements:\nCreate container1 and share1.\nUse the principle of least privilege.\nCreate an Azure AD security group named Group4.\nBack up the Azure file shares and virtual machines by using Azure Backup.\nTrigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\nEnable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\nCreate an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\nEnable flow logging for IP trafic from VM5 and retain the flow logs for a period of eight months.\nWhenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.\nQuestion\nYou need to identify which storage account to use for the flow logging of IP trafic from VM5. The solution must meet the retention requirements.\nWhich storage account should you identify?",
    "domain": "identity",
    "choices": [
      "A. storage1",
      "B. storage2",
      "C. storage3",
      "D. storage4\n\n=== PAGE 379 ===\nTopic 12 - Testlet 5"
    ],
    "explanation": "When choosing a storage account for backups or logging, selecting the one in the same region as the resource minimizes latency and avoids data egress charges. Storage1 meets the regional and cost-efficiency requirements.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic12_q1",
    "number": "1",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.\nThe Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.\nAll the resources used by Litware are hosted on-premises.\nLitware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The\ntenant uses the\nPremium P1 pricing tier.\nExisting Environment -\nThe network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the\nlitware.com DNS zone.\nLitware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU)\nthat contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective\ndepartment. New users are added frequently.\nLitware.com contains a user named User1.\nAll the offices connect by using private connections.\nLitware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.\nAll infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.\nLitware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.\nThe Azure subscription contains the resources in the following table.\nThe network security team implements several network security groups (NSGs)\nRequirements -\nPlanned Changes -\nLitware plans to implement the following changes:\nDeploy Azure ExpressRoute to the Montreal office.\nMigrate the virtual machines hosted on Server1 and Server2 to Azure.\nSynchronize on-premises Active Directory to Azure Active Directory (Azure AD).\n\n=== PAGE 380 ===\nMigrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.\nTechnical Requirements -\nLitware must meet the following technical requirements:\nEnsure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.\nEnsure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.\nEnsure that routing information is exchanged automatically between Azure and the routers in the Montreal office.\nEnable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.\nEnsure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.\nConnect the New York office to VNet1 over the Internet by using an encrypted connection.\nCreate a workflow to send an email message when the settings of VM4 are modified.\nCreate a custom Azure role named Role1 that is based on the Reader role.\nMinimize costs whenever possible.\nQuestion\nYou discover that VM3 does NOT meet the technical requirements.\nYou need to verify whether the issue relates to the NSGs.\nWhat should you use?",
    "domain": "identity",
    "choices": [
      "A. Diagram in VNet1",
      "B. Diagnostic settings in Azure Monitor",
      "C. Diagnose and solve problems in Traffic Manager profiles",
      "D. The security recommendations in Azure Advisor",
      "E. IP flow verify in Azure Network Watcher\n\n=== PAGE 381 ===\nTopic 13 - Testlet 6"
    ],
    "explanation": "The VNet diagram feature in Azure Network Watcher provides a visual representation of the network topology, including NSGs associated with subnets and network interfaces. Reviewing the diagram in VNet1 helps quickly verify if NSG rules are blocking VM3's outbound traffic.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic13_q1",
    "number": "1",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.\nThe Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.\nAll the resources used by Litware are hosted on-premises.\nLitware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The\ntenant uses the\nPremium P1 pricing tier.\nExisting Environment -\nThe network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the\nlitware.com DNS zone.\nLitware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU)\nthat contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective\ndepartment. New users are added frequently.\nLitware.com contains a user named User1.\nAll the offices connect by using private connections.\nLitware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.\nAll infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.\nLitware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.\nThe Azure subscription contains the resources in the following table.\nThe network security team implements several network security groups (NSGs)\nRequirements -\nPlanned Changes -\nLitware plans to implement the following changes:\nDeploy Azure ExpressRoute to the Montreal office.\nMigrate the virtual machines hosted on Server1 and Server2 to Azure.\nSynchronize on-premises Active Directory to Azure Active Directory (Azure AD).\n\n=== PAGE 382 ===\nMigrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.\nTechnical Requirements -\nLitware must meet the following technical requirements:\nEnsure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.\nEnsure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.\nEnsure that routing information is exchanged automatically between Azure and the routers in the Montreal office.\nEnable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.\nEnsure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.\nConnect the New York office to VNet1 over the Internet by using an encrypted connection.\nCreate a workflow to send an email message when the settings of VM4 are modified.\nCreate a custom Azure role named Role1 that is based on the Reader role.\nMinimize costs whenever possible.\nQuestion\nYou need to ensure that VM1 can communicate with VM4. The solution must minimize the administrative effort.\nWhat should you do?",
    "domain": "identity",
    "choices": [
      "A. Create an NSG and associate the NSG to VM1 and VM4.",
      "B. Establish peering between VNET1 and VNET3.",
      "C. Assign VM4 an IP address of 10.0.1.5/24.",
      "D. Create a user-defined route from VNET1 to VNET3.\n\n=== PAGE 383 ==="
    ],
    "explanation": "To allow communication between virtual machines while minimizing administrative effort, configuring a Network Security Group (NSG) with the appropriate allow rules is effective. Associating the NSG to both VM1 and VM4 centrally manages the traffic permissions.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic14_q2",
    "number": "2",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nContoso, Ltd. is a manufacturing company that has offices worldwide. Contoso works with partner organizations to bring products to market.\nContoso products are manufactured by using blueprint files that the company authors and maintains.\nExisting Environment -\nCurrently, Contoso uses multiple types of servers for business operations, including the following:\nFile servers\nDomain controllers\nMicrosoft SQL Server servers\nYour network contains an Active Directory forest named contoso.com. All servers and client computers are joined to Active Directory.\nYou have a public-facing application named App1. App1 is comprised of the following three tiers:\nA SQL database\nA web front end\nA processing middle tier -\nEach tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.\nRequirements -\nPlanned Changes -\nContoso plans to implement the following changes to the infrastructure:\nMove all the tiers of App1 to Azure.\nMove the existing product blueprint files to Azure Blob storage.\nCreate a hybrid directory to support an upcoming Microsoft 365 migration project.\nTechnical Requirements -\nContoso must meet the following technical requirements:\nMove all the virtual machines for App1 to Azure.\nMinimize the number of open ports between the App1 tiers.\nEnsure that all the virtual machines for App1 are protected by backups.\nCopy the blueprint files to Azure over the Internet.\nEnsure that the blueprint files are stored in the archive storage tier.\nEnsure that partner access to the blueprint files is secured and temporary.\nPrevent user passwords or hashes of passwords from being stored in Azure.\nUse unmanaged standard storage for the hard disks of the virtual machines.\nEnsure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.\nMinimize administrative effort whenever possible.\n\n=== PAGE 388 ===\nUser Requirements -\nContoso identifies the following requirements for users:\nEnsure that only users who are part of a group named Pilot can join devices to Azure AD.\nDesignate a new user named Admin1 as the service admin for the Azure subscription.\nAdmin1 must receive email alerts regarding service outages.\nEnsure that a new user named User3 can create network objects for the Azure subscription.\nQuestion\nYou are planning the move of App1 to Azure.\nYou create a network security group (NSG).\nYou need to recommend a solution to provide users with access to App1.\nWhat should you recommend?",
    "domain": "identity",
    "choices": [
      "A. Create an incoming security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers.",
      "B. Create an outgoing security rule for port 443 from the Internet. Associate the NSG to the subnet that contains the web servers.",
      "C. Create an incoming security rule for port 443 from the Internet. Associate the NSG to all the subnets.",
      "D. Create an outgoing security rule for port 443 from the Internet. Associate the NSG to all the subnets.\n\n=== PAGE 389 ===\nTopic 15 - Testlet 8"
    ],
    "explanation": "To provide internet users access to web servers in App1 via HTTPS, you must allow inbound traffic on port 443. Creating an incoming security rule for port 443 and associating it with the web servers' subnet is the standard practice.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic15_q3",
    "number": "3",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nGeneral Overview -\nContoso, Ltd. is a consulting company that has a main office in Montreal and branch offices in Seattle and New York.\nEnvironment -\nExisting Environment -\nContoso has an Azure subscription named Sub1 that is linked to an Azure Active Directory (Azure AD) tenant. The network contains an on-\npremises Active\nDirectory domain that syncs to the Azure AD tenant.\nThe Azure AD tenant contains the users shown in the following table.\nSub1 contains two resource groups named RG1 and RG2 and the virtual networks shown in the following table.\nUser1 manages the resources in RG1. User4 manages the resources in RG2.\nSub1 contains virtual machines that run Windows Server 2019 as shown in the following table\nNo network security groups (NSGs) are associated to the network interfaces or the subnets.\nSub1 contains the storage accounts shown in the following table.\n\n=== PAGE 393 ===\nRequirements -\nPlanned Changes -\nContoso plans to implement the following changes:\nCreate a blob container named container1 and a file share named share1 that will use the Cool storage tier.\nCreate a storage account named storage5 and configure storage replication for the Blob service.\nCreate an NSG named NSG1 that will have the custom inbound security rules shown in the following table.\nAssociate NSG1 to the network interface of VM1.\nCreate an NSG named NSG2 that will have the custom outbound security rules shown in the following table.\nAssociate NSG2 to VNET1/Subnet2.\nTechnical Requirements -\nContoso must meet the following technical requirements:\nCreate container1 and share1.\nUse the principle of least privilege.\nCreate an Azure AD security group named Group4.\nBack up the Azure file shares and virtual machines by using Azure Backup.\nTrigger an alert if VM1 or VM2 has less than 20 GB of free space on volume C.\nEnable User1 to create Azure policy definitions and User2 to assign Azure policies to RG1.\nCreate an internal Basic Azure Load Balancer named LB1 and connect the load balancer to VNET1/Subnet1\nEnable flow logging for IP trafic from VM5 and retain the flow logs for a period of eight months.\nWhenever possible, grant Group4 Azure role-based access control (Azure RBAC) read-only permissions to the Azure file shares.\nQuestion\nYou need to add VM1 and VM2 to the backend pool of LB1.\nWhat should you do first?",
    "domain": "identity",
    "choices": [
      "A. Connect VM2 to VNET1/Subnet1.",
      "B. Redeploy VM1 and VM2 to the same availability zone.",
      "C. Redeploy VM1 and VM2 to the same availability set.",
      "D. Create a new NSG and associate the NSG to VNET1/Subnet1.\n\n=== PAGE 394 ==="
    ],
    "explanation": "To add virtual machines to the backend pool of an internal Basic Azure Load Balancer, the VMs must reside in the same virtual network and subnet as the load balancer. Connecting VM2 to VNET1/Subnet1 is a necessary prerequisite.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic15_q4",
    "number": "4",
    "question": "You need to ensure that VM1 can communicate with VM4. The solution must minimize administrative effort.\nWhat should you do?",
    "domain": "compute",
    "choices": [
      "A. Create a user-defined route from VNET1 to VNET3.",
      "B. Create an NSG and associate the NSG to VM1 and VM4.",
      "C. Assign VM4 an IP address of 10.0.1.5/24.",
      "D. Establish peering between VNET1 and VNET3.\n\n=== PAGE 395 ===\nTopic 16 - Testlet 9"
    ],
    "explanation": "A user-defined route (UDR) allows you to explicitly define how traffic is routed between subnets or virtual networks. Creating a UDR from VNET1 to VNET3 ensures that traffic from VM1 can reach VM4 via the specified routing appliance or gateway.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "topic16_q2",
    "number": "2",
    "question": "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However,\nthere may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions\nincluded on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might\ncontain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is\nindependent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to\nthe next section of the exam. After you begin a new section, you cannot return to this section.\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study\nbefore you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem\nstatements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the\nsubsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\nOverview -\nLitware, Inc. is a consulting company that has a main office in Montreal and two branch offices in Seattle and New York.\nThe Montreal office has 2,000 employees. The Seattle office has 1,000 employees. The New York office has 200 employees.\nAll the resources used by Litware are hosted on-premises.\nLitware creates a new Azure subscription. The Azure Active Directory (Azure AD) tenant uses a domain named litware.onmicrosoft.com. The\ntenant uses the\nPremium P1 pricing tier.\nExisting Environment -\nThe network contains an Active Directory forest named litware.com. All domain controllers are configured as DNS servers and host the\nlitware.com DNS zone.\nLitware has finance, human resources, sales, research, and information technology departments. Each department has an organizational unit (OU)\nthat contains all the accounts of that respective department. All the user accounts have the department attribute set to their respective\ndepartment. New users are added frequently.\nLitware.com contains a user named User1.\nAll the offices connect by using private connections.\nLitware has data centers in the Montreal and Seattle offices. Each office has a firewall that can be configured as a VPN device.\nAll infrastructure servers are virtualized. The virtualization environment contains the servers in the following table.\nLitware uses two web applications named App1 and App2. Each instance on each web application requires 1 GB of memory.\nThe Azure subscription contains the resources in the following table.\nThe network security team implements several network security groups (NSGs)\nRequirements -\nPlanned Changes -\nLitware plans to implement the following changes:\nDeploy Azure ExpressRoute to the Montreal office.\nMigrate the virtual machines hosted on Server1 and Server2 to Azure.\nSynchronize on-premises Active Directory to Azure Active Directory (Azure AD).\nMigrate App1 and App2 to two Azure web apps named WebApp1 and WebApp2.\n\n=== PAGE 398 ===\nTechnical Requirements -\nLitware must meet the following technical requirements:\nEnsure that WebApp1 can adjust the number of instances automatically based on the load and can scale up to five instances.\nEnsure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office.\nEnsure that routing information is exchanged automatically between Azure and the routers in the Montreal office.\nEnable Azure Multi-Factor Authentication (MFA) for the users in the finance department only.\nEnsure that webapp2.azurewebsites.net can be accessed by using the name app2.litware.com.\nConnect the New York office to VNet1 over the Internet by using an encrypted connection.\nCreate a workflow to send an email message when the settings of VM4 are modified.\nCreate a custom Azure role named Role1 that is based on the Reader role.\nMinimize costs whenever possible.\nQuestion\nYou need to recommend a solution to automate the configuration for the finance department users. The solution must meet the technical\nrequirements.\nWhat should you include in the recommendation?",
    "domain": "identity",
    "choices": [
      "A. Azure AD B2C",
      "B. dynamic groups and conditional access policies",
      "C. Azure AD Identity Protection",
      "D. an Azure logic app and the Microsoft Identity Management (MIM) client"
    ],
    "explanation": "Azure AD B2C provides customer identity and access management. For automating configuration for finance department users, integrating Azure AD B2C or dynamic groups can help manage user access and multi-factor authentication requirements efficiently.",
    "correct": 0,
    "type": "pdf"
  },
  {
    "id": "new_pdf_q1",
    "number": "368",
    "question": "HOTSPOT - (Topic 5) You have an Azure virtual machine named VM1 that connects to a virtual network named VNet1. VM1 has the following configurations: ? Subnet: 10.0.0.0/24 ? Availability set: AVSet ? Network security group (NSG): None ? Private IP address: 10.0.0.4 (dynamic) ? Public IP address: 40.90.219.6 (dynamic) You deploy a standard, Internet-facing load balancer named slb1. You need to configure slb1 to allow connectivity to VM1. Which changes should you apply to VM1 as you configure slb1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: Remove the public IP address from VM1 If the Public IP on VM1 is set to Dynamic, that means it is a Public IP with Basic SKU because Public IPs with Standard SKU have Static assignments by default, that cannot be changed. We cannot associate Basic SKUs IPs with Standard SKUs LBs. One cannot create a backend SLB pool if the VM to be associated has a Public IP. For Private IP it doesn't matter weather it is dynamic or static, still we can add the such VM into the SLB backend pool. Box 2: Create and configure an NSG Standard Load Balancer is built on the zero trust network security model at its core. Standard Load Balancer secure by default and is part of your virtual network. The virtual network is a private and isolated network. This means Standard Load Balancers and Standard Public IP addresses are closed to inbound flows unless opened by Network Security Groups. NSGs are used to explicitly permit allowed traffic. If you do not have an NSG on a subnet or NIC of your virtual machine resource, traffic is not allowed to reach this resource. To learn more about NSGs and how to apply them for your scenario, see Network Security Groups. Basic Load Balancer is open to the internet by default.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q2",
    "number": "369",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the vaults shown in the following table. You create a storage account that contains the resources shown in the following table. To which vault can you back up cont1 and share1? To answer, select the appropriate options in the answer area. NOTE: Each correct answer is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q3",
    "number": "370",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the container images shown in the following table. You plan to use the following services: \u2022 Azure Container Instances \u2022 Azure Container Apps \u2022 Azure App Service In which services can you run the images? To answer, select the options in the answer area. NOTE: Each correct answer is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Image 1: Azure Container Apps only.image 2: Azure Container Instances, Azure Container Apps, and App Services. The images you have in your Azure subscription are different types of container images that can run on different Azure services. A container image is a package of software that includes everything needed to run an application, such as code, libraries, dependencies, and configuration files. Container images are portable and consistent across different environments, such as development, testing, and production. Azure Container Instances is a service that allows you to run containers directly on the Azure cloud, without having to manage any infrastructure or orchestrators. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) You can use Azure Container Instances to run any container image that is compatible with the Docker image format and follows the Open Container Initiative (OCI) specification. You can also run Windows or Linux containers on Azure Container Instances. Azure Container Apps is a service that allows you to build and deploy cloud-native applications and microservices using serverless containers. You can use Azure Container Apps to run any container image that is compatible with the Docker image format and follows the Open Container Initiative (OCI) specification. You can also run Windows or Linux containers on Azure Container Apps. Azure App Service is a service that allows you to build and host web applications, mobile backends, and RESTful APIs using various languages and frameworks. You can use Azure App Service to run custom container images that are compatible with the Docker image format and follow the App Service Docker image contract. You can also run Windows or Linux containers on Azure App Service.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q4",
    "number": "371",
    "question": "HOTSPOT - (Topic 4) You need to create storage5. The solution must support the planned changes. Which type of storage account should you use, and which account should you configure as the destination storage account? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q5",
    "number": "372",
    "question": "- (Topic 5) You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription. Solution: You assign the Traffic Manager Contributor role at the subscription level to Admin1",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. NO"
    ],
    "explanation": "The Traffic Manager Contributor role is not related to Traffic Analytics. Traffic Manager is a service that provides DNS-based load balancing and traffic routing across different regions and endpoints. Traffic Manager Contributor is a role that allows you to create and manage Traffic Manager profiles, endpoints, and geographies1. Traffic Analytics is a service that provides visibility into user and application activity in your cloud networks. Traffic Analytics analyzes Azure Network Watcher network security group (NSG) flow logs to provide insights into traffic flow in your Azure cloud. With Traffic Analytics, you can visualize network activity, identify hot spots, secure your network, optimize your network deployment, and pinpoint network misconfigurations2. To enable Traffic Analytics for an Azure subscription, you need to have a role that grants you the following permissions at the subscription level: Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) ? Microsoft.Network/applicationGateways/read ? Microsoft.Network/connections/read ? Microsoft.Network/loadBalancers/read ? Microsoft.Network/localNetworkGateways/read ? Microsoft.Network/networkInterfaces/read ? Microsoft.Network/networkSecurityGroups/read ? Microsoft.Network/publicIPAddresses/read ? Microsoft.Network/routeTables/read ? Microsoft.Network/virtualNetworkGateways/read ? Microsoft.Network/virtualNetworks/read ? Microsoft.OperationalInsights/workspaces/* Some of the built-in roles that have these permissions are Owner, Contributor, or Network Contributor3. However, these roles also grant other permissions that may not be necessary or desirable for enabling Traffic Analytics. Therefore, the best practice is to use the principle of least privilege and create a custom role that for enabling Traffic Analytics4. only has the required permissions Therefore, to meet the goal of ensuring that an Azure AD user named Admin1 is assigned the required role to enable Traffic Analytics for an Azure subscription, you should create a custom role with the required permissions and assign it to Admin1 at the subscription level.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q6",
    "number": "373",
    "question": "HOTSPOT - (Topic 3) You need to configure the Device settings to meet the technical requirements and the user requirements. Which two settings should you modify? To answer, select the appropriate settings in the answer area. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: Selected Only selected users should be able to join devices Box 2: Yes Require Multi-Factor Auth to join devices. From scenario: ? Ensure that only users who are part of a group named Pilot can join devices to Azure AD ? Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q7",
    "number": "374",
    "question": "- (Topic 3) You need to implement a backup solution for App1 after the application is moved. What should you create first?",
    "domain": "storage",
    "choices": [
      "A. a recovery plan",
      "B. an Azure Backup Server",
      "C. a backup policy",
      "D. a Recovery Services vault"
    ],
    "explanation": "A Recovery Services vault is a logical container that stores the backup data for each protected resource, such as Azure VMs. When the backup job for a protected resource runs, it creates a recovery point inside the Recovery Services vault. Scenario: There are three application tiers, each with five virtual machines. Move all the virtual machines for App1 to Azure. Ensure that all the virtual machines for App1 are protected by backups. References: https://docs.microsoft.com/en-us/azure/backup/quick-backup-vm-portal",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q8",
    "number": "375",
    "question": "- (Topic 3) You need to meet the user requirement for Admin1. What should you do?",
    "domain": "compute",
    "choices": [
      "A. From the Subscriptions blade, select the subscription, and then modify the Properties.",
      "B. From the Subscriptions blade, select the subscription, and then modify the Access control (IAM) settings.",
      "C. From the Azure Active Directory blade, modify the Properties.",
      "D. From the Azure Active Directory blade, modify the Groups."
    ],
    "explanation": "Change the Service administrator for an Azure subscription ? Sign in to Account Center as the Account administrator. ? Select a subscription. ? On the right side, select Edit subscription details. Scenario: Designate a new user named Admin1 as the service administrator of the Azure subscription. References: https://docs.microsoft.com/en-us/azure/billing/billing-add-change-azure-subscription-administrator",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q9",
    "number": "376",
    "question": "- (Topic 3) You are planning the move of App1 to Azure. You create a network security group (NSG). Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You need to recommend a solution to provide users with access to App1. What should you recommend?",
    "domain": "networking",
    "choices": [
      "A. Create an outgoing security rule for port 443 from the Interne",
      "B. Associate the NSG to all the subnets.",
      "C. Create an incoming security rule for port 443 from the Interne",
      "D. Associate the NSG to all the subnets.",
      "E. Create an incoming security rule for port 443 from the Interne F. Associate the NSG to the subnet that contains the web servers. G. Create an outgoing security rule for port 443 from the Interne H. Associate the NSG to the subnet that contains the web servers."
    ],
    "explanation": "As App1 is public-facing we need an incoming security rule, related to the access of the web servers. Scenario: You have a public-facing application named App1. App1 is comprised of the following three tiers: a SQL database, a web front end, and a processing middle tier. Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only.",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q10",
    "number": "377",
    "question": "HOTSPOT - (Topic 3) You need to identify the storage requirements for Contoso. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Statement 1: Yes Contoso is moving the existing product blueprint files to Azure Blob storage which will ensure that the blueprint files are stored in the archive storage tier. Use unmanaged standard storage for the hard disks of the virtual machines. We use Page Blobs for these. Statement 2: No Azure Table storage stores large amounts of structured data. The service is a NoSQL datastore which accepts authenticated calls from inside and outside the Azure cloud. Azure tables are ideal for storing structured, non-relational data. Common uses of Table storage include: * 1. Storing TBs of structured data capable of serving web scale applications * 2. Storing datasets that don't require complex joins, foreign keys, or stored procedures and can be denormalized for fast access * 3. Quickly querying data using a clustered index * 4. Accessing data using the OData protocol and LINQ queries with WCF Data Service.NET Libraries Statement 3: No File Storage can be used if your business use case needs to deal mostly with standard File extensions like *.docx, *.png and *.bak then you should probably go with this storage option. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q11",
    "number": "378",
    "question": "- (Topic 2) Which blade should you instruct the finance department auditors to use?",
    "domain": "compute",
    "choices": [
      "A. Partner information",
      "B. Overview",
      "C. Payment methods",
      "D. Invoices"
    ],
    "explanation": "You can opt in and configure additional recipients to receive your Azure invoice in an email. This feature may not be available for certain subscriptions such as support offers, Enterprise Agreements, or Azure in Open. ? Select your subscription from the Subscriptions page. Opt-in for each subscription you own. Click Invoices then Email my invoice.A screenshot of a computer Description automatically generated ? Click Opt in and accept the terms. Scenario: During the testing phase, auditors in the finance department must be able to review all Azure costs from the past week. References: https://docs.microsoft.com/en-us/azure/billing/billing-download-azure-invoice-daily-usage-date",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q12",
    "number": "379",
    "question": "- (Topic 2) You need to prepare the environment to meet the authentication requirements. Which two actions should you perform? Each correct answer presents part of the solution. NOTE Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Azure Active Directory (AD) Identity Protection and an Azure policy",
      "B. a Recovery Services vault and a backup policy",
      "C. an Azure Key Vault and an access policy",
      "D. an Azure Storage account and an access policy"
    ],
    "explanation": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) D: Seamless SSO works with any method of cloud authentication - Password Hash Synchronization or Pass-through Authentication, and can be enabled via Azure AD Connect. B: You can gradually roll out Seamless SSO to your users. You start by adding the following Azure AD URL to all or selected users' Intranet zone settings by using Group Policy in Active Directory: https://autologon.microsoftazuread-sso.com",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q13",
    "number": "380",
    "question": "- (Topic 2) You need to define a custom domain name for Azure AD to support the planned infrastructure. Which domain name should you use?",
    "domain": "identity",
    "choices": [
      "A. ad.humongousinsurance.com",
      "B. humongousinsurance.onmicrosoft.com",
      "C. humongousinsurance.local",
      "D. humongousinsurance.com"
    ],
    "explanation": "Every Azure AD directory comes with an initial domain name in the form of domainname.onmicrosoft.com. The initial domain name cannot be changed or deleted, but you can add your corporate domain name to Azure AD as well. For example, your organization probably has other domain names used to do business and users who sign in using your corporate domain name. Adding custom domain names to Azure AD allows you to assign user names in the directory that are familiar to your users, such as \u2018alice@contoso.com.\u2019 instead of 'alice@domain name.onmicrosoft.com'. Scenario: Network Infrastructure: Each office has a local data center that contains all the servers for that office. Each office has a dedicated connection to the Internet. Humongous Insurance has a single-domain Active Directory forest named humongousinsurance.com Planned Azure AD Infrastructure: The on-premises Active Directory domain will be synchronized to Azure AD. References: https://docs.microsoft.com/en-us/azure/active-directory/fundamentals/add-custom-domain",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q14",
    "number": "381",
    "question": "HOTSPOT - (Topic 1) You need to implement Role1. Which command should you run before you create Role1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://docs.microsoft.com/en-us/azure/role-based-access-control/tutorial-custom-role- powershell Get-AzRoleDefinition -Name \"Reader\" | ConvertTo-Json https://docs.microsoft.com/en-us/powershell/module/az.resources/get- azroledefinition?view=azps-5.9.0 https://docs.microsoft.com/en-us/azure/role-based-access-control/tutorial-custom-role- powershell https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/convertto- json?view=powershell-7.1 https://docs.microsoft.com/en-us/powershell/module/azuread/get- azureaddirectoryrole?view=azureadps-2.0 Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q15",
    "number": "382",
    "question": "- (Topic 5) You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles; \u2022 Reader \u2022 Security Admin \u2022 Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do? Assign User1 the Contributor role for VNet1.",
    "domain": "identity",
    "choices": [
      "A. B. Remove User from the Security Reader and Reader roles tot Subscription1.",
      "C. Assign User1 the Network Contributor role for VNet1.",
      "D. Assign User1 the User Access Administrator role for VNet1"
    ],
    "explanation": "https://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory- admin- roles#:~:text=The%20User%20Access%20Administrator%20role%20enables%20the%20u ser%20to%20grant,Azure%20subscriptions%20and%20management%20groups.",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q16",
    "number": "383",
    "question": "- (Topic 5) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You have an Azure subscription that contains an Azure Stream Analytics job named Job1. You need to monitor input events for Job1 to identify the number of events that were NOT processed. Which metric should you use?",
    "domain": "monitor",
    "choices": [
      "A. Output Events",
      "B. Backlogged Input Events",
      "C. Out-of-Order Events",
      "D. Late Input Events"
    ],
    "explanation": "Backlogged Input Events is a metric that shows the number of input events that are waiting to be processed by the Stream Analytics job1. This metric indicates the performance and health of the job, as well as the input data rate and latency. If the Backlogged Input Events metric is high or increasing, it means that the job is not able to keep up with the incoming events and some events are not processed in a timely manner2. Output Events is a metric that shows the number of output events that are emitted by the Stream Analytics job1. This metric indicates the output data rate and throughput of the job. It does not show how many input events were not processed by the job. Out-of-Order Events is a metric that shows the number of input events that arrive out of order based on their timestamp1. This metric indicates the quality and consistency of the input data source. It does not show how many input events were not processed by the job. Late Input Events is a metric that shows the number of input events that arrive after the late arrival window has expired1. This metric indicates the timeliness and reliability of the input data source. It does not show how many input events were not processed by the job.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q17",
    "number": "384",
    "question": "- (Topic 5) You have an Azure subscription that contains the resources shown in the following table. LB1 is configured as shown in the following table. You plan to create new inbound NAT rules that meet the following requirements: Provide Remote Desktop access to VM2 from the internet by using port 3389.",
    "domain": "compute",
    "choices": [
      "A. A frontend IP address",
      "B. A health probe",
      "C. A load balancing rule",
      "D. A backend pool"
    ],
    "explanation": "To create an inbound NAT rule, you need to specify a frontend IP address and a frontend port for the load balancer to receive the traffic, and a backend IP address and a backend port for the load balancer to forward the traffic to1. According to the first table, LB1 has only one frontend IP address, which is 40.121.183.105. However, this frontend IP address is already used by the existing inbound NAT rule named rule1, which forwards port 80 to VM1 on port 802. Therefore, you cannot use the same frontend IP address and port for another inbound NAT rule. To solve this problem, you need to create a new frontend IP address for LB1 before you can create the new inbound NAT rules. You can do this by using the Azure portal, PowerShell, or CLI3. After you create a new frontend IP address, you can use it to create the new inbound NAT rules that meet your requirements.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q18",
    "number": "385",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table. On June 1, you store two blobs in storage1 as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q19",
    "number": "386",
    "question": "HOTSPOT - (Topic 5) You have an Azure virtual network named VNet1 that connects to your on-premises network by using a site-to-site VPN. VMet1 contains one subnet named Subnet1. Subnet1 is associated to a network security group (NSG) named NSG1. Subnet1 contains a basic internal load balancer named ILB1. ILB1 has three Azure virtual machines in the backend pool. You need to collect data about the IP addresses that connects to ILB1. You must be able to run interactive queries from the Azure portal against the collected data. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: An Azure Log Analytics workspace In the Azure portal you can set up a Log Analytics workspace, which is a unique Log Analytics environment with its own data repository, data sources, and solutions. Box 2: NSG1 NSG flow logs allow viewing information about ingress and egress IP traffic through a Network security group. Through this, the IP addresses that connect to the ILB can be monitored when the diagnostics are enabled on a Network Security Group. We cannot enable diagnostics on an internal load balancer to check for the IP addresses. As for Internal LB, it is basic one. Basic can only connect to storage account. Also, Basic LB has only activity logs, which doesn't include the connectivity workflow. So, we need to use NSG to meet the mentioned requirements.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q20",
    "number": "387",
    "question": "HOTSPOT - (Topic 5) You have the following custom role-based access control (RBAC) role. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: N Because doesn't have: Microsoft.Authorization/*/Write - Create roles, role assignments, policy assignments, policy definitions and policy set definitions Box 2; Yes Has been assigned; Microsoft.Compute/virtualMachines/* - Perform all virtual machine actions including create, update, delete, start, restart, and power off virtual machines. Execute scripts on virtual machines. Box 3: Y Has been assigned; Microsoft.Network/networkInterfaces/* - Create and manage network interfaces See; https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q21",
    "number": "388",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the resources shown in the following table. You plan to create a data collection rule named DCRI in Azure Monitor. Which resources can you set as data sources in DCRI, and which resources can you set as destinations in DCRI? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "monitor",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Data Sources: VM1 only Destination: Workspace1 Only Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q22",
    "number": "389",
    "question": "HOTSPOT - (Topic 5) You have the App Service plans shown in the following table. You plan to create the Azure web apps shown in the following table. You need to identify which App Service plans can be used for the web apps. What should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: ASP1 ASP3 Asp1, ASP3: ASP.NET Core apps can be hosted both on Windows or Linux. Not ASP2: The region in which your app runs is the region of the App Service plan it's in. Box 2: ASP1 ASP.NET apps can be hosted on Windows only.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q23",
    "number": "390",
    "question": "- (Topic 5) You have an Azure subscription that contains the storage accounts shown in the following table. You need to identify which storage account can be converted to zone-redundant storage (ZRS) replication by requesting a live migration from Azure support. What should you identify?",
    "domain": "storage",
    "choices": [
      "A. Storage1",
      "B. Storage2",
      "C. Storage3 Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
      "D. Storage4"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/storage/common/redundancy- migration?tabs=portal",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q24",
    "number": "391",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the resources shown in the following table In Azure Cloud Shell, you need to create a virtual machine by using an Azure Resource Manager (ARM) template. How should you complete the command? To answer, select the appropriate options in the answer area, NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q25",
    "number": "392",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. The subscription contains virtual machines that run Windows Server 2016 and are configured as shown in the following table. You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named conioso.com. You create a virtual network link for contoso.com as shown in the following exhibit. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "All three VMs are in VNET2. Auto registration is enabled for private Azure DNS zone named contoso.com, which is linked to VNET2. So, VM1, VM2 and VM3 will auto-register their host records to contoso.com. None of the VM will auto-register to the public Azure DNS zone named adatum.com. You cannot register private IPs on the internet (adatum.com) Box 1: Yes Auto registration is enabled for private Azure DNS zone named contoso.com. Box 2: Yes Auto registration is enabled for private Azure DNS zone named contoso.com. Box 3: No None of the VM will auto-register to the public Azure DNS zone named adatum.com",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q26",
    "number": "393",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Subscription1 that contains the virtual networks in the following table. Subscripton1 contains the virtual machines in the following table. In Subscription1, you create a load balancer that has the following configurations: ? Name: LB1 ? SKU: Basic ? Type: Internal ? Subnet: Subnet12 ? Virtual network: VNET1 For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q27",
    "number": "394",
    "question": "HOTSPOT - (Topic 5) You have an Azure Active Directory (Azure AD) tenant that contains three global administrators named Admin1, Admin2, and Admin3. The tenant is associated to an Azure subscription. Access control for the subscription is configured as shown in the Access control exhibit. (Click the Exhibit tab.) You sign in to the Azure portal as Admin1 and configure the tenant as shown in the Tenant exhibit. (Click the Exhibit tab.) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "They are all Global admins so they can all modify user permission. i.e add self as owner etc. You can be GA in one of the subscription, it doesn't mean that you can create the resources in all subscription. As a Global Administrator in Azure Active Directory (Azure AD), you might not have access to all subscriptions and management groups in your directory. Azure AD and Azure resources are secured independently from one another. That is, Azure AD role assignments do not grant access to Azure resources, and Azure role assignments do not grant access to Azure AD. However, if you are a Global Administrator in Azure AD, you can assign yourself access to all Azure subscriptions and management groups in your directory",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q28",
    "number": "395",
    "question": "- (Topic 5) You sign up for Azure Active Directory (Azure AD) Premium. You need to add a user named admin1@contoso.com as an administrator on all the computers that will be joined to the Azure AD domain. What should you configure in Azure AD?",
    "domain": "identity",
    "choices": [
      "A. Device settings from the Devices blade.",
      "B. General settings from the Groups blade.",
      "C. User settings from the Users blade.",
      "D. Providers from the MFA Server blade."
    ],
    "explanation": "https://docs.microsoft.com/en-us/azure/active-directory/devices/assign-local-admin",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q29",
    "number": "396",
    "question": "- (Topic 5) You have an Azure subscription that contains an Azure Storage account. You plan to create an Azure container instance named container1 that will use a Docker image namedImage1. Image1 contains a Microsoft SQL Server instance that requires persistent storage. You need to configure a storage service for Container1. What should you use?",
    "domain": "storage",
    "choices": [
      "A. Azure Files",
      "B. Azure Blob storage",
      "C. Azure Queue storage",
      "D. Azure Table storage"
    ],
    "explanation": "https://azure.microsoft.com/en-us/blog/persistent-docker-volumes-with- azure-file-storage/",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q30",
    "number": "397",
    "question": "- (Topic 5) You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines. You need to delete the Recovery Services vault. What should you do first?",
    "domain": "storage",
    "choices": [
      "A. From the Recovery Service vault, stop the backup of each backup item.",
      "B. From the Recovery Service vault, delete the backup data.",
      "C. Modify the disaster recovery properties of each virtual machine.",
      "D. Modify the locks of each virtual machine. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)"
    ],
    "explanation": "You can't delete a Recovery Services vault if it is registered to a server and holds backup data. If you try to delete a vault, but can't, the vault is still configured to receive backup data. Remove vault dependencies and delete vault In the vault dashboard menu, scroll down to the Protected Items section, and click Backup Items. In this menu, you can stop and delete Azure File Servers, SQL Servers in Azure VM, and Azure virtual machines. References: https://docs.microsoft.com/en-us/azure/backup/backup-azure-delete-vault",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q31",
    "number": "398",
    "question": "- (Topic 5) You plan to move a distributed on-premises app named App1 to an Azure subscription. After the planned move, App1 will be hosted on several Azure virtual machines. You need to ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance. What should you create? Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) one virtual machine scale set that has 10 virtual machines instances",
    "domain": "compute",
    "choices": [
      "A. B. one Availability Set that has three fault domains and one update domain",
      "C. one Availability Set that has 10 update domains and one fault domain",
      "D. one virtual machine scale set that has 12 virtual machines instances"
    ],
    "explanation": "A virtual machine scale set is a group of identical virtual machines that are centrally managed, configured, and updated1. A virtual machine scale set can automatically increase or decrease the number of virtual machine instances in response to demand or a defined schedule2. A virtual machine scale set also provides high availability and fault tolerance by distributing the virtual machine instances across multiple fault domains and update domains3. A fault domain is a logical group of underlying hardware that share a common power source and network switch. A fault domain can fail due to hardware or software failures, power outages, or network interruptions4. A virtual machine scale set can have up to five fault domains in a region. An update domain is a logical group of underlying hardware that can undergo maintenance or be rebooted at the same time. An update domain can be affected by planned events, such as OS updates, application updates, or configuration changes4. A virtual machine scale set can have up to 20 update domains in a region. By creating a virtual machine scale set that has 10 virtual machine instances, you can ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance. This is because the default configuration of a virtual machine scale set is to have five fault domains and five update domains. This means that at any given time, only one fault domain or one update domain can be unavailable due to maintenance or failure. Therefore, at least eight out of 10 virtual machine instances will be available to run App1. An availability set is another option for providing high availability and fault tolerance for your virtual machines. An availability set is a logical grouping of two or more virtual machines that are deployed across multiple fault domains and update domains. However, an availability set does not provide automatic scaling of resources or load balancing of traffic. You need to manually create and manage the number of virtual machine instances in an availability set. Therefore, a virtual machine scale set is a better option than an availability set for your scenario. To create a virtual machine scale set, you can follow these steps: ? Sign in to the Azure portal. ? Select Create a resource > Compute > Virtual machine scale set. ? On the Basics tab, enter a name for your scale set, select your subscription and resource group, select Windows Server 2019 as the image type, and enter a username and password for the administrator account. ? On the Instance details tab, select the region where you want to deploy your scale set, select the size of the virtual machine instances, and enter 10 as the initial instance count. ? On the Scaling tab, configure the scaling policy for your scale set based on metrics or schedule. ? On the Load balancing tab, configure the load balancer for your scale set to distribute traffic across the instances. ? On the Management tab, configure the diagnostics settings, automatic OS upgrades, extensions, and backup options for your scale set. ? On the Advanced tab, configure the availability zone, proximity placement group, accelerated networking, host group, and custom script extension options for your scale set. ? On the Tags tab, optionally add tags to your scale set resources. ? On the Review + create tab, review your settings and select Create.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q32",
    "number": "399",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. You create the following file named Deploy.json. You connect to the subscription and run the following commands. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q33",
    "number": "400",
    "question": "- (Topic 5) You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "No, this does not meet the goal. Unregistering the Microsoft.ClassicNetwork provider does not affect the creation of network security groups (NSGs) in the subscription. The Microsoft.ClassicNetwork provider is used for managing classic deployment model resources, such as virtual networks, network interfaces, and public IP addresses1. However, NSGs are only supported for Resource Manager deployment model resources2. Therefore, unregistering the Microsoft.ClassicNetwork provider will not automatically block TCP port 8080 between the virtual networks. To meet the goal, you need to create a custom policy definition that enforces a default security rule for NSGs. A policy definition is a set of rules and actions that Azure performs when evaluating your resources3. You can use a policy definition to specify the required properties and values for NSGs, such as the direction, protocol, source, destination, and port of the security rule. You can then assign the policy definition to the subscription scope, so that it applies to all the resource groups and virtual networks in the subscription.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q34",
    "number": "401",
    "question": "HOTSPOT - (Topic 5) You have the Azure resources shown on the following exhibit. You plan to track resource usage and prevent the deletion of resources. To which resources can you apply locks and tags? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: Sub1, RG1, and VM1 only You can lock a subscription, resource group, or resource to prevent other users in your organization from accidentally deleting or modifying critical resources. Box 2: Sub1, RG1, and VM1 only You apply tags to your Azure resources, resource groups, and subscriptions.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q35",
    "number": "402",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains a virtual network named VNet1. VNet1 uses an IP address space of 10.0.0.0/16 and contains the subnets in the following table. Subnet1 contains a virtual appliance named VM1 that operates as a router. You create a routing table named RT1. You need to route all inbound traffic to VNet1 through VM1. How should you configure RT1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer: Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box1 : 10.0.0.0/16 Address prefix in networking refer to the destination IP address range. In this scenario, destination is Vnet1 , hence Address prefix will be the address space of Vnet1. Box 2 : Virtual appliance Next hop gets the next hop type and IP address of a packet from a specific VM and NIC. Knowing the next hop helps you determine if traffic is being directed to the intended destination, or whether the traffic is being sent nowhere Next Hop --> VM1 --> Virtual Appliance (You can specify IP address of VM 1 when configuring next hop as virtual appliance) Box 3 : GatewaySubnet In the scenario it is asked for all the inbound traffic to Vnet1. Inbound traffic is flowing through SubnetGW. You need to route all inbound traffic from the VPN gateway to VNet1 through VM1.So its traffic from Gateway subnet only.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q36",
    "number": "403",
    "question": "- (Topic 5) You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a quest user account in contoso.com for each of the 500 external users. Solution: from Azure AD in the Azure portal, you use the Bulk create user operation. Does this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/active-directory/external-identities/tutorial-bulk-invite?source=recommendations information and invitation preferences - Use \"Bulk invite users\" to prepare a comma-separated value (.csv) file with the user - Upload the .csv file to Azure AD - Verify the users were added to the directory",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q37",
    "number": "404",
    "question": "- (Topic 5) You have an Azure subscription that contains the virtual machines shown in the following table. javascript:void(0) You deploy a load balancer that has the following configurations: \u2022 Name: LB1 \u2022 Type internal \u2022 SKU: Standard \u2022 Virtual network VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1. Solution: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes No",
      "B."
    ],
    "explanation": "You can only attach virtual machines that are in the same location and on the same virtual network as the LB. Virtual machines must have a standard SKU public IP or no public IP. The LB needs to be a standard SKU to accept individual VMs outside an availability set or vmss. VMs do not need to have public IPs but if they do have them they have to be standard SKU. Vms can only be from a single network. When they don\u2019t have a public IP they are assigned an ephemeral IP. Also, when adding them to a backend pool, it doesn\u2019t matter in which status are the VMs. Note: Load balancer and the public IP address SKU must match when you use them with public IP addresses.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q38",
    "number": "405",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. You add the users in the following table. Which user can perform each configuration? To answer select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "User1 - The Owner Role lets you manage everything, including access to resources. User3 - The Network Contributor role lets you manage networks, including creating subnets. User2 - The Security Admin role can view security policies, view security states, edit security policies, view alerts and recommendations, dismiss alerts and recommendations.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q39",
    "number": "406",
    "question": "- (Topic 5) You have an Azure subscription that contains the resources shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You need to perform the tasks shown in the following table. Which tasks can you perform by using Azure Storage Explorer?",
    "domain": "compute",
    "choices": [
      "A. Task1 and Task3 only",
      "B. Task1, Task2, and Task3 only",
      "C. Task1, Task3, and Task4 only",
      "D. Task2, Task3, and Task4 only",
      "E. Task1, Task2, Task3, and Task4"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q40",
    "number": "407",
    "question": "HOTSPOT - (Topic 5) Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table. You plan to migrate contoso.com to Azure. You create an Azure virtual network named VNET1 that has the following settings: \u2022 Address space: 10.0.0.0/16 \u2022 Subnet: o Name: Subnet1 o IPv4: 10.0.1.0/24 Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names. How should you configure DC1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? IP address: You should use 10.0.1.3 as the IP address for DC1. This is because DC1 needs to have a static IP address within the subnet range of VNET1, which is 10.0.1.0/241. You cannot use 10.0.2.1 or 192.168.2.1, as they are outside of the subnet range of VNET1. You also cannot obtain an IP address automatically, as this may cause DC1 to lose its IP address and break the DNS resolution for the domain members2. ? Name Resolution: You should configure VNET1 to use a custom DNS server that points to the IP address of DC1, which is 10.0.1.33. This is because DC1 is the domain controller and DNS server for contoso.com, and it needs to resolve the AD DS DNS names for the domain members that are in Azure or on-premises. You cannot use the default Azure-provided DNS server, as it does not support AD DS DNS names. You also do not need to create an Azure Private DNS zone or an Azure public DNS zone named contoso.com, as these are not required for AD DS DNS resolution.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q41",
    "number": "408",
    "question": "- (Topic 5) You have an Azure App Service app named Appl that contains two running instances. You havean autoscale rule configured as shown in the following exhibit Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For the instance limits stale condition setting, you set Maximum to 5. During a 30-minute period. Appl uses 60 percent of the available memory. What is the maximum number of instances tor Appl during the 30-minute pefiod:",
    "domain": "compute",
    "choices": [
      "A. 2",
      "B. 3",
      "C. 4",
      "D. 5"
    ],
    "explanation": "The exhibit shows that you have an autoscale rule configured for your App Service app named App1. The rule is based on the memory percentage metric, which measures the average amount of memory used by all the instances of your app. The rule has the following settings: ? Scale out action: Add 1 instance when the memory percentage is greater than or equal to 80% for a duration of 10 minutes. ? Scale in action: Remove 1 instance when the memory percentage is less than or equal to 60% for a duration of 10 minutes. ? Instance limits: The minimum number of instances is 2, and the maximum number of instances is 5. According to the question, during a 30-minute period, App1 uses 60% of the available memory. This means that the scale in action is triggered, but not the scale out action. Therefore, one instance is removed from App1 every 10 minutes, until the minimum number of instances is reached. Since App1 initially has two running instances, after the first 10 minutes, one instance is removed and App1 has one instance left. However, since the minimum number of instances is set to 2, another instance is added back to App1 to meet the minimum requirement. Therefore, after the first 10 minutes, App1 still has two instances. After the second 10 minutes, the same process repeats. One instance is removed due to the scale in action, and another instance is added back due to the minimum requirement. Therefore, after the second 10 minutes, App1 still has two instances. After the third 10 minutes, there is no change in the number of instances, because App1 already has the minimum number of instances. Therefore, after the third 10 minutes, App1 still has two instances. Therefore, during the 30-minute period, App1 never has more than two instances running at any given time. However, since one instance is removed and added back every 10 minutes, there are four different instances that are used by App1 during the period. Hence, the maximum number of instances for App1 during the period is four.",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q42",
    "number": "409",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) the users shown in the following table. The groups are configured as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/active-directory/roles/groups-concept#how-are- role-assignable-groups-protected \"Group nesting isn't supported. A group can't be added as a member of a role-assignable group.\" For the second question: https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-to-manage- groups#add-or-remove-a-group-from-another-group \"We currently don't support: Adding Microsoft 365 groups to Security groups or other Microsoft 365 groups. \" For the third question, although it appears truncated in the screenshot (ending with \"for...\") there is a reference about Microsoft 365 groups support for roles assignment here: https://learn.microsoft.com/en-us/azure/active-directory/roles/groups-concept#how-role- assignments-to-groups-work \"To assign a role to a group, you must create a new security or Microsoft 365 group with the is AssignableToRole property set to true. \"",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q43",
    "number": "410",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the resource groups shown in the following table. You create the following Azure Resource Manager (ARM) template named deploy json. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You deploy the template by running the following cmdlet. Item-AzSubscriptionDeployment -location -Template file deploy-json For each or the following statements, select Yes il the statement is bue. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q44",
    "number": "411",
    "question": "- (Topic 5) Your company has an Azure subscription named Subscription1. The company also has two on-premises servers named Server1 and Server2 that run Windows Server 2016. Server1 is configured as a DNS server that has a primary DNS zone named adatum.com. Adatum.com contains 1,000 DNS records. You manage Server1 and Subscription1 from Server2. Server2 has the following tools installed: ? The DNS Manager console ? Azure PowerShell ? Azure CLI 2.0 You need to move the adatum.com zone to Subscription1. The solution must minimize administrative effort. What should you use?",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Azure DNS supports importing and exporting zone files by using the Azure command-line interface (CLI). Zone file import is not currently supported via Azure PowerShell or the Azure portal. References: https://docs.microsoft.com/en-us/azure/dns/dns-import-export",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q45",
    "number": "412",
    "question": "HOTSPOT - (Topic 5) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You have an Azure subscription that contains a virtual network named VNET in the East Us 2 region. A network interface named VM1-NI is connected to VNET1. You successfully deploy the following Azure Resource Manager template. Answer: Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "A close-up of a computer screen Description automatically generated \"A resource can only be created in a virtual network that exists in the same region and subscription as the resource.\" https://learn.microsoft.com/en-us/azure/virtual- network/virtual-network-vnet-plan-design-arm#regions",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q46",
    "number": "413",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the virtual machines shown in the following table. Each virtual machine contains only a private IP address. You create an Azure bastion for VNet1 as shown in the following exhibit. For each of the following statements, select Yes if the statement is true. Otherwise, select No. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q47",
    "number": "414",
    "question": "DRAG DROP - (Topic 5) You have an Azure subscription that contains the resources shown in the following table. You need to load balance HTTPS connections to vm1 and vm2 by using Ib1. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/load-balancer/quickstart-load-balancer-standard- public-portal",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q48",
    "number": "415",
    "question": "HOTSPOT - (Topic 5) You have two Azure virtual machines as shown in the following table. You create the Azure DNS zones shown in the following table. You perform the following actions: ? To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration. ? For contoso.com, you assign vm1 and vm2 the Owner role. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worm one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q49",
    "number": "416",
    "question": "- (Topic 5) You have an Azure Active Directory (Azure AD) tenant. You plan to delete multiple users by using Bulk delete in the Azure Active Directory admin center. You need to create and upload a file for the bulk delete. Which user attributes should you include in the file? The user principal name and usage location of each user only",
    "domain": "identity",
    "choices": [
      "A. B. The user principal name of each user only",
      "C. The display name of each user only",
      "D. The display name and usage location of each user only",
      "E. The display name and user principal name of each user only"
    ],
    "explanation": "To perform a bulk delete of users in Azure Active Directory, you need to create and upload a CSV file that contains the list of users to be deleted. The file should include the user principal name (UPN) of each user only. Therefore, the answer is B. The user principal name of each user only. When you use the bulk delete feature in the Azure Active Directory admin center, you need to specify the UPN for each user that you want to delete. The UPN is a unique identifier for each user in Azure AD and is the primary way that Azure AD identifies and manages user accounts. Including additional attributes like the display name or usage location is not required for the bulk delete operation, as the UPN is the only mandatory attribute for the user account. However, you may include additional attributes in the CSV file if you want to keep track of the metadata associated with each user account.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q50",
    "number": "417",
    "question": "HOTSPOT - (Topic 5) You have two Azure subscriptions named Sub1 and Sub2. Sub1 is in a management group named MG1. Sub2 is in a management group named MG2. You have the resource groups shown in the following table. You have the virtual machines shown in the following table. You assign roles to users as shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "User 2 has the Disk Snapshot Contributor role assigned at the scope of MG2. This role allows the user to manage disk snapshots in the management group. VM3 is a virtual machine in RG3, which is in Sub2, which is in MG2. Therefore, User 2 has the permission to manage disks and disk snapshots of VM3.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q51",
    "number": "418",
    "question": "HOTSPOT - (Topic 5) You purchase a new Azure subscription named Subscription1. You create a virtual machine named VM1 in Subscription1. VM1 is not protected by Azure Backup. You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and stored for 30 days. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer: Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: A Recovery Services vault A Recovery Services vault is an entity that stores all the backups and recovery points you create over time. Box 2: A backup policy What happens when I change my backup policy? When a new policy is applied, schedule and retention of the new policy is followed. References: https://docs.microsoft.com/en-us/azure/backup/backup-configure-vault https://docs.microsoft.com/en-us/azure/backup/backup-azure-backup-faq A Recovery Services vault is a storage entity in Azure that houses data. The data is typically copies of data, or configuration information for virtual machines (VMs), workloads, servers, or workstations. You can use Recovery Services vaults to hold backup data for various Azure services such as IaaS VMs (Linux or Windows) and Azure SQL databases. You can use backup policy to configure schedule. https://docs.microsoft.com/en-us/azure/backup/backup-azure-recovery-services-vault-overviewhttps://docs.microsoft.com/en-us/azure/backup/backup-azure-vms- first-look-arm",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q52",
    "number": "419",
    "question": "- (Topic 5) You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You modify the priority of the Allow_131.107.100.50 inbound security rule. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q53",
    "number": "420",
    "question": "HOTSPOT - (Topic 5) Your company purchases a new Azure subscription. You create a file named Deploy json as shown in the following exhibit Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You connect to the subscription and run the following cmdlet: New-AzDeployment -Location westus -TemplateFile \u201cdeploy.json\u201d\" For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Based on the file named Deploy.json and the cmdlet you ran, here are the answers to your statements: ? You can deploy a virtual machine to RGI. = No ? You can deploy a virtual machine to RG2. = No ? You can manually create a resource group named RG3. = Yes Let me explain why: ? The Deploy.json file defines a template for creating a resource group and a virtual machine in Azure. The template has two parameters: resourceGroupName and vmName. The template also has two resources: one for the resource group and one for the virtual machine. The resource group resource has a property called name, which is set to the value of the resourceGroupName parameter. The virtual machine resource has a property called location, which is set to the value of the location parameter of the deployment cmdlet. ? The cmdlet you ran specifies the location as westus and the template file as Deploy.json. However, it does not specify any values for the resourceGroupName and vmName parameters. Therefore, the cmdlet will prompt you to enter those values interactively before creating the deployment. ? If you enter RGI as the value for the resourceGroupName parameter and VM1 as the value for the vmName parameter, then the cmdlet will create a resource group named RGI and a virtual machine named VM1 in the westus location. Therefore, you can deploy a virtual machine to RGI. ? However, if you enter RG2 as the value for the resourceGroupName parameter, then the cmdlet will fail with an error. This is because RG2 already exists in your subscription and you cannot create a resource group with the same name as an existing one. Therefore, you cannot deploy a virtual machine to RG2 using this template and cmdlet. ? You can manually create a resource group named RG3 by using another cmdlet: New-AzResourceGroup. This cmdlet takes two parameters: Name and RG3 in westus: Location. For example, you can run the following cmdlet to create a resource group named New-AzResourceGroup -Name RG3 -Location westus",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q54",
    "number": "421",
    "question": "- (Topic 5) You have an Azure subscription named Subscription 1 and an on-premises deployment of Microsoft System Center Service Manager Subscription! contains a virtual machine named VM1. You need to ensure that an alert is set in Service Manager when the amount of available memory on VM1 is below 10 percent. What should you do first?",
    "domain": "monitor",
    "choices": [
      "A. Create a notification.",
      "B. Create an automation runbook.",
      "C. Deploy the IT Service Management Connector (ITSM).",
      "D. Deploy a function app"
    ],
    "explanation": "IT Service Management Connector (ITSMC) allows you to connect Azure to a supported IT Service Management (ITSM) product or service. Azure services like Azure Log Analytics and Azure Monitor provide tools to detect, analyze, and troubleshoot problems with your Azure and non-Azure resources. But the work items related to an issue typically reside in an ITSM product or service. ITSMC provides a bi-directional connection between Azure and ITSM tools to help you resolve issues faster. ITSMC supports connections with the following ITSM tools: ServiceNow, System Center Service Manager, Provance, Cherwell. Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/alerts/itsmc-overview",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q55",
    "number": "422",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Sub1. You plan to deploy a multi-tiered application that will contain the tiers shown in the following table. You need to recommend a networking solution to meet the following requirements: \u2022 Ensure that communication between the web servers and the business logic tier spreads equally across the virtual machines. \u2022 Protect the web servers from SQL injection attacks. Which Azure resource should you recommend for each requirement? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: an internal load balancer Azure Internal Load Balancer (ILB) provides network load balancing between virtual machines that reside inside a cloud service or a virtual network with a regional scope. Box 2: an application gateway that uses the WAF tier Azure Web Application Firewall (WAF) on Azure Application Gateway provides centralized protection of your web applications from common exploits and vulnerabilities. Web applications are increasingly targeted by malicious attacks that exploit commonly known vulnerabilities. Application gateway which uses WAF tier.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q56",
    "number": "423",
    "question": "- (Topic 5) You have the Azure virtual networks shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) To which virtual networks can you establish a peering connection from VNet1?",
    "domain": "networking",
    "choices": [
      "A. VNet2, VNet3, and VNet4",
      "B. VNet2only",
      "C. VNet3 and VNet4 only",
      "D. VNet2 and VNet3 only"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q57",
    "number": "424",
    "question": "- (Topic 4) You need to add VM1 and VM2 to the backend poo! of LB1. What should you do first?",
    "domain": "compute",
    "choices": [
      "A. Create a new NSG and associate the NSG to VNET1/Subnet1.",
      "B. Connect VM2 to VNET1/Subnet1.",
      "C. Redeploy VM1 and VM2 to the same availability zone.",
      "D. Redeploy VM1 and VM2 to the same availability set."
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q58",
    "number": "425",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) HOTSPOT - (Topic 3) You need to configure the Device settings to meet the technical requirements and the user requirements. Which two settings should you modify? To answer, select the appropriate settings in the answer area.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) Box 1: Selected Only selected users should be able to join devices Box 2: Yes Require Multi-Factor Auth to join devices. From scenario: ? Ensure that only users who are part of a group named Pilot can join devices to Azure AD ? Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q59",
    "number": "426",
    "question": "- (Topic 3) You need to recommend an identify solution that meets the technical requirements. What should you recommend?",
    "domain": "compute",
    "choices": [
      "A. federated single-on (SSO) and Active Directory Federation Services (AD FS)",
      "B. password hash synchronization and single sign-on (SSO)",
      "C. cloud-only user accounts",
      "D. Pass-through Authentication and single sign-on (SSO)"
    ],
    "explanation": "Active Directory Federation Services is a feature and web service in the Windows Server Operating System that allows sharing of identity information outside a company\u2019s network. Scenario: Technical Requirements include: Prevent user passwords or hashes of passwords from being stored in Azure. References: https://www.sherweb.com/blog/active-directory-federation-services/",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q60",
    "number": "427",
    "question": "- (Topic 2) You need to resolve the licensing issue before you attempt to assign the license again. What should you do?",
    "domain": "compute",
    "choices": [
      "A. From the Groups blade, invite the user accounts to a new group.",
      "B. From the Profile blade, modify the usage location.",
      "C. From the Directory role blade, modify the directory role."
    ],
    "explanation": "Scenario: Licensing Issue * 1. You attempt to assign a license in Azure to several users and receive the following error message: \"Licenses not assigned. License agreement failed for one user.\" * 2. You verify that the Azure subscription has the available licenses. Solution: License cannot be assigned to a user without a usage location specified. Some Microsoft services aren't available in all locations because of local laws and regulations. Before you can assign a license to a user, you must specify the Usage location property for the user. You can specify the location under the User > Profile > Settings section in the Azure portal. Reference: https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/licensing-groups-resolve-problems Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q61",
    "number": "428",
    "question": "HOTSPOT - (Topic 5) You have an Azure virtual machine named VM1 and a Recovery Services vault named Vault1. You create a backup Policy1 as shown in the exhibit. (Click the Exhibit tab.) You configure the backup of VM1 to use Policy1 on Thursday, January 1. You need to identify the number of available recovery points for VM1. How many recovery points are available on January 8 and on January 15? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: 6 4 daily + 1 weekly + monthly Box 2: 8 4 daily + 2 weekly + monthly + yearly",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q62",
    "number": "429",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. You plan to use Azure Resource Manager templates to deploy 50 Azure virtual machines that will be part of the same availability set. You need to ensure that as many virtual machines as possible are available if the fabric fails or during servicing. How should you configure the template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1 = max value Box 2 = 20 Explanation Use max for platformFaultDomainCount 2 or 3 is max value, depending on which region you are in. Use 20 for platformUpdateDomainCount Increasing the update domain (platformUpdateDomainCount) helps with capacity and availability planning when the platform reboots nodes. A higher number for the pool (20 is max) means that fewer of their nodes in any given availability set would be rebooted at once. References: https://www.itprotoday.com/microsoft-azure/check-if-azure-region-supports-2-or-3-fault-domains-managed-disks https://github.com/Azure/acs-engine/issues/1030 Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q63",
    "number": "430",
    "question": "- (Topic 5) You have an Azure subscription that contains a storage account. The account stores website data. You need to ensure that inbound user traffic uses the Microsoft point-of-presence (POP) closest to the user's location. What should you configure?",
    "domain": "storage",
    "choices": [
      "A. load balancing",
      "B. private endpoints",
      "C. Azure Firewall rules",
      "D. Routing preference"
    ],
    "explanation": "Routing preference is a feature that allows you to configure how network traffic is routed to your storage account from clients over the internet. By default, traffic from the internet is routed to the public endpoint of your storage account over the Microsoft global network, which is optimized for low-latency path selection and high reliability. Both inbound and outbound traffic are routed through the point of presence (POP) that is closest to the client. This ensures that traffic to and from your storage account traverses over the Microsoft global network for the bulk of its path, maximizing network performance. You can also change the routing preference to use internet routing, which minimizes the traversal of your traffic over the Microsoft global network, handing it off to the transit ISP at the earliest opportunity. This lowers networking costs, but may compromise network performance. Therefore, to ensure that inbound user traffic uses the Microsoft POP closest to the user\u2019s location, you should configure routing preference to use the Microsoft global network as the default routing option for your storage account. References: ? Network routing preference for Azure Storage ? Configure network routing preference for Azure Storage",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q64",
    "number": "431",
    "question": "- (Topic 5) You have an Azure virtual machine named VM1. Azure collects events from VM1. You are creating an alert rule in Azure Monitor to notify an administrator when an error is logged in the System event log of VM1. You need to specify which resource type to monitor. What should you specify?",
    "domain": "monitor",
    "choices": [
      "A. metric alert",
      "B. Azure Log Analytics workspace",
      "C. virtual machine",
      "D. virtual machine extension"
    ],
    "explanation": "Azure Monitor can collect data directly from your Azure virtual machines into a Log Analytics workspace for analysis of details and correlations. Installing the Log Analytics VM extension for Windows and Linux allows Azure Monitor to collect data from your Azure VMs. Azure Log Analytics workspace is also used for on-premises computers monitored by System Center Operations Manager. Reference: https://docs.microsoft.com/en-us/azure/azure-monitor/learn/quick-collect-azurevm",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q65",
    "number": "432",
    "question": "DRAG DROP - (Topic 5) You have an Azure Linux virtual machine that is protected by Azure Backup. One week ago, two files were deleted from the virtual machine. You need to reses clients connect n on-premises computer as quickly as possible. Which four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "To restore files or folders from the recovery point, go to the virtual machine and choose the desired recovery point. Step 0. In the virtual machine's menu, click Backup to open the Backup dashboard. Step 1. In the Backup dashboard menu, click File Recovery. Step 2. From the Select recovery point drop-down menu, select the recovery point that holds the files you want. By default, the latest recovery point is already selected. Step 3: To download the software used to copy files from the recovery point, click Download Executable (for Windows Azure VM) or Download Script (for Linux Azure VM, a python script is generated). Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) Step 4: Copy the files by using AzCopy AzCopy is a command-line utility designed for copying data to/from Microsoft Azure Blob, File, and Table storage, using simple commands designed for optimal performance. You can copy data between a file system and a storage account, or between storage accounts. References: https://docs.microsoft.com/en-us/azure/backup/backup-azure-restore-files-from-vm https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q66",
    "number": "433",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains an Azure Directory (Azure AD) tenant named contoso.com. The tenant is synced to the on-premises Active Directory domain. The domain contains the users shown in the following table. You enable self-service password reset (SSPR) for all users and configure SSPR to have the following authentication methods: ? Number of methods required to reset: 2 ? Methods available to users: Mobile phone, Security questions ? Number of questions required to register: 3 ? Number of questions required to reset: 3 You select the following security questions: ? What is your favorite food? ? In what city was your first job? ? What was the name of your first pet? For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer: Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No, No, Yes https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept- authentication-security-questions",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q67",
    "number": "434",
    "question": "- (Topic 5) You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Performance Monitor, you create a Data Collector Set (DCS). Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Correct answer is packet capture in Azure Network Watcher. https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-packet-capture-overview",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q68",
    "number": "435",
    "question": "HOTSPOT - (Topic 5) You have an Azure Storage account named storage1 that uses Azure Blob storage and Azure File storage. You need to use AzCopy to copy data to the blob storage and file storage in storage1. Which authentication method should you use for each type of storage? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "You can provide authorization credentials by using Azure Active Directory (AD), or by using a Shared Access Signature (SAS) token. Box 1: Both Azure Active Directory (AD) and Shared Access Signature (SAS) token are supported for Blob storage. Box 2: Only Shared Access Signature (SAS) token is supported for File storage.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q69",
    "number": "436",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. The subscription contains virtual machines that run Windows Server 2016 and are configured as shown in the following table. You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named conioso.com. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You create a virtual network link for contoso.com as shown in the following exhibit. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "All three VMs are in VNET2. Auto registration is enabled for private Azure DNS zone named contoso.com, which is linked to VNET2. So, VM1, VM2 and VM3 will auto-register their host records to contoso.com. None of the VM will auto-register to the public Azure DNS zone named adatum.com. You cannot register private IPs on the internet (adatum.com) Box 1: Yes Auto registration is enabled for private Azure DNS zone named contoso.com. Box 2: Yes Auto registration is enabled for private Azure DNS zone named contoso.com. Box 3: No None of the VM will auto-register to the public Azure DNS zone named adatum.com",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q70",
    "number": "437",
    "question": "HOTSPOT - (Topic 5) You plan to create an Azure Storage account in the Azure region of East US 2. You need to create a storage account that meets the following requirements: ? Replicates synchronously ? Remains available if a single data center in the region fails How should you configure the storage account? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: Zone-redundant storage (ZRS) Zone-redundant storage (ZRS) replicates your data synchronously across three storage clusters in a single region. LRS would not remain available if a data center in the region fails GRS and RA GRS use asynchronous replication. Box 2: StorageV2 (general purpose V2) ZRS only support GPv2. References: https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy-zrs",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q71",
    "number": "438",
    "question": "HOTSPOT - (Topic 5) You have an Azure Storage account named storage1 that stores images. You need to create a new storage account and replicate the images in storage1 to the new account by using object replication. How should you configure the new account? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Graphical user interface, text, application Description automatically generated",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q72",
    "number": "439",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains a virtual machine named VM1. To VM1, you plan to add a 1-TB data disk that meets the following requirements: \u2022 Provides data resiliency in the event of a datacenter outage. \u2022 Provides the lowest latency and the highest performance. \u2022 Ensures that no data loss occurs if a host fails. You need to recommend which type of storage and host caching to configure for the new data disk.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Storage Type: Premium SSD that uses zone-redundant storage (ZRS) Host Caching: Read-only The reasons for this recommendation are: ? Premium SSD disks provide the lowest latency and the highest performance among the available disk types12. ? Zone-redundant storage (ZRS) provides data resiliency in the event of a datacenter outage by replicating the data across three availability zones in the same region12. ? Read-only host caching can improve the read performance of the disk by using the VM\u2019s RAM and local SSD as a cache13. This can also reduce the impact of a host failure on the disk data, as the cached data is not lost4. ? Read/write host caching is not recommended for Premium SSD disks, as it can introduce additional latency and reduce the durability guarantees of the disk13.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q73",
    "number": "440",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the virtual machines shown in the following table. The subscription contains the Azure App Service web apps shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? WebApp1 can communicate with VM2. No, this is not correct. According to the tables, WebApp1 is integrated with VNet1, which has a peering connection with VNet2. Therefore, WebApp1 cannot communicate with VM2 VNet2. However, VM2 is in VNet3, which is not peered with VNet1 or across different virtual networks1. ? NSG1 controls inbound traffic to WebApp1. No, this is not correct. According to the tables, NSG1 is associated with Subnet1 in VNet1, which is integrated with WebApp1. However, network security groups only control outbound traffic from App Service apps to virtual networks, not inbound traffic to App Service apps from virtual networks2. Therefore, NSG1 does not control inbound traffic to WebApp1. ? WebApp2 can communicate with VM1. Yes, this is correct. According to the tables, WebApp2 is integrated with VNet3, which has a peering connection with VNet2. VM1 is in Subnet2 in VNet2, which has a network security group named NSG2 that allows inbound traffic from any source on port 803. Therefore, WebApp2 can communicate with VM1 on port 80 across peered virtual networks.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q74",
    "number": "441",
    "question": "- (Topic 5) You have an Azure subscription that contains 20 virtual machines, a network security group (NSG) named NSG1, and two virtual networks named VNET1 and VNET2 that are peered. You plan to deploy an Azure Bastion Basic SKU host named Bastion1 to VNET1. You need to configure NSG1 to allow inbound access from the internet to Bastion1. Which port should you configure for the inbound security rule?",
    "domain": "networking",
    "choices": [
      "A. 22",
      "B. 443",
      "C. 3389",
      "D. 8080"
    ],
    "explanation": "Azure Bastion is a service that provides secure and seamless RDP/SSH connectivity to virtual machines directly over TLS from the Azure portal or via native client. Azure Bastion uses an HTML5 based web client that is automatically streamed to your local device. Your RDP/SSH session is over TLS on port 443. This enables the traffic to traverse firewalls more securely. To allow inbound access from the internet to Bastion1, you need to configure NSG1 to allow port 443 for the inbound security rule. References: ? What is Azure Bastion? ? About Azure Bastion configuration settings",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q75",
    "number": "442",
    "question": "- (Topic 5) You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You configure a custom policy definition, and then you assign the policy to the subscription. Does this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "A custom policy definition is a way to define your own rules for using Azure resources. You can use custom policies to enforce compliance, security, cost management, or organization-specific requirements. However, a custom policy definition alone is not enough to meet the goal of automatically blocking TCP port 8080 between the virtual networks. You also need to create a policy assignment that applies the custom policy definition to the scope of the subscription. A policy assignment is the link between a policy definition and an Azure resource. Without a policy assignment, the custom policy definition will not take effect. Therefore, the solution does not meet the goal. References: ? Tutorial: Create a custom policy definition ? Create and manage policies to enforce compliance",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q76",
    "number": "443",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. You plan to use an Azure Resource Manager template to deploy a virtual network named VNET1 that will use Azure Bastion. How should you complete the template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q77",
    "number": "444",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the virtual networks shown in the following table. The subnets have the IP address spaces shown in the following table. You plan to create a container app named contapp1 in the East US Azure region. You need to create a container app environment named con-env1 that meets the following requirements: \u2022 Uses its own virtual network. \u2022 Uses its own subnet. \u2022 Is connected to the smallest possible subnet. To which virtual networks can you connect con-env1, and which subnet mask should you use? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Answer:",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "? Virtual Network: You can connect con-env1 to VNet2 and VNet3 only. This is because VNet1 is in a different region than the container app, which is East US. According to the web search results, you can only connect a container app environment to a virtual network that is in the same region as the container app1. Therefore, VNet1 is not a valid option. VNet2 and VNet3 are both in the same region as the container app, and they have enough available IP addresses to support a container app environment. ? Subnet mask: You should use /28 as the subnet mask for con-env1. This is because /28 is the smallest possible subnet mask that can accommodate a container app environment. According to the web search results, a container app environment requires a minimum of 16 IP addresses in a subnet2. A /28 subnet mask provides 16 IP addresses, while a /26 subnet mask provides 64 IP addresses, a /24 subnet mask provides 256 IP addresses, a /23 subnet mask provides 512 IP addresses, and a /16 subnet mask provides 65,536 IP addresses. Therefore, /28 is the most efficient choice for minimizing the subnet size.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q78",
    "number": "445",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. You need to deploy a virtual machine by using an Azure Resource Manager (ARM) template. How should you complete the template? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "- dependsON: resoureceID - storageProfile: ImageReference Reference : Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/resource-dependency#dependson https://learn.microsoft.com/en-us/javascript/api/@azure/arm-compute/storageprofile?view=azure-node-latest",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q79",
    "number": "446",
    "question": "- (Topic 5) You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1. A user named User1 has the following roles for Subscription1: \u2022 Reader \u2022 Security Admin \u2022 Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
    "domain": "identity",
    "choices": [
      "A. Remove User1 from the Security Reader and Reader roles for Subscription1.",
      "B. Assign User1 the Owner role for VNet1.",
      "C. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.",
      "D. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1"
    ],
    "explanation": "https://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory- admin- roles#:~:text=The%20User%20Access%20Administrator%20role%20 enables%20the%20user%20to%20grant,Azure%20subscriptions%20and%20management%20groups.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q80",
    "number": "447",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Subscription1 that has a subscription ID of c276fc76-9cd4-44c9-99a7-4fd71546436e. You need to create a custom RBAC role named CR1 that meets the following requirements: ? Can be assigned only to the resource groups in Subscription1 ? Prevents the management of the access permissions for the resource groups ? Allows the viewing, creating, modifying, and deleting of resource within the resource groups What should you specify in the assignable scopes and the permission elements of the definition of CR1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: \"/subscription/c276fc76-9cd4-44c9-99a7-4fd71546436e\" In the assignableScopes you need to mention the subscription ID where you want to implement the RBAC Box 2: \"Microsoft.Authorization/*\" Microsoft.Authorization/* is used to Manage authorization References: https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations#microsoftauthorization https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles References: https://docs.microsoft.com/en-us/azure/role-based-access-control/custom-roles https://docs.microsoft.com/en-us/azure/role-based-access-control/resource-provider-operations#microsoftresources",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q81",
    "number": "448",
    "question": "HOTSPOT - (Topic 5) Your network contains an on-premises Active Directory Domain Services (AD DS) domain named contoso.com. The domain contains the servers shown in the following table. You plan to migrate contoso.com to Azure. You create an Azure virtual network named VNET1 that has the following settings: \u2022 Address space: 10.0.0.0/16 \u2022 Subnet: o Name: Subnet1 o IPv4: 10.0.1.0/24 You need to move DC1 to VNET1. The solution must ensure that the member servers in contoso.com can resolve AD DS DNS names. How should you configure DC1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? IP address: You should use 10.0.1.3 as the IP address for DC1. This is because DC1 needs to have a static IP address within the subnet range of VNET1, which is 10.0.1.0/241. You cannot use 10.0.2.1 or 192.168.2.1, as they are outside of the subnet range of VNET1. You also cannot obtain an IP address automatically, as this may cause DC1 to lose its IP address and break the DNS resolution for the domain members2. ? Name Resolution: You should configure VNET1 to use a custom DNS server that points to the IP address of DC1, which is 10.0.1.33. This is because DC1 is the domain controller and DNS server for contoso.com, and it needs to resolve the AD DS DNS names for the domain members that are in Azure or on-premises. You cannot use the default Azure-provided DNS server, as it does not support AD DS DNS names. You also do not need to create an Azure Private DNS zone or an Azure public DNS zone named contoso.com, as these are not required for AD DS DNS resolution.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q82",
    "number": "449",
    "question": "HOTSPOT - (Topic 5) You have Azure subscriptions named Subscription1 and Subscription2. Subscription1 has following resource groups: RG1 includes a web app named App1 in the West Europe location. Subscription2 contains the following resource groups: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "App1 present in RG1 and in RG1 there is no lock available. So you can move App1 to other resource groups, RG2, RG3, RG4. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) Note: App Service resources can only be moved from the resource group in which they were originally created. If an App Service resource is no longer in its original resource group, move it back to its original resource group.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q83",
    "number": "450",
    "question": "HOTSPOT - (Topic 5) You plan to use Azure Network Watcher to perform the following tasks: ? Task1: Identify a security rule that prevents a network packet from reaching an Azure virtual machine ? Task2: Validate outbound connectivity from an Azure virtual machine to an external host Which feature should you use for each task? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: IP flow verify At some point, a VM may become unable to communicate with other resources, because of a security rule. The IP flow verify capability enables you to specify a source and destination IPv4 address, port, protocol (TCP or UDP), and traffic direction (inbound or outbound). IP flow verify then tests the communication and informs you if the connection succeeds or fails. If the connection fails, IP flow verify tells you which. Box 2: Connection troubleshoot Diagnose outbound connections from a VM: The connection troubleshoot capability enables you to test a connection between a VM and another VM, an FQDN, a URI, or an IPv4 address. The test returns similar information returned when using the connection monitor capability, but tests the connection at a point in time, connections using connection- rather than monitoring it over time, as connection monitor does. Learn more about how to troubleshoot troubleshoot.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q84",
    "number": "451",
    "question": "- (Topic 5) You have an Azure subscription that contains the virtual machines shown in the following table. You deploy a load balancer that has the following configurations: \u2022Name: LB1 \u2022Type: Internal \u2022SKU: Standard \u2022Virtual network: VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1. Solution: You create a Standard SKU public IP address, associate the address to the network interface of VM1, and then stop VM2. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q85",
    "number": "452",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains a virtual network named VNET in the East Us 2 region. A network interface named VM1-NI is connected to VNET1. You successfully deploy the following Azure Resource Manager template. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Answer:",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "A close-up of a computer screen Description automatically generated \"A resource can only be created in a virtual network that exists in the same region and subscription as the resource.\" https://learn.microsoft.com/en-us/azure/virtual- network/virtual-network-vnet-plan-design-arm#regions",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q86",
    "number": "453",
    "question": "- (Topic 5) You have an Azure web app named App1. App1 has the deployment slots shown in the following table: In webapp1-test, you test several changes to App1. You back up App1. You swap webapp1-test for webapp1-prod and discover that App1 is experiencing performance issues. You need to revert to the previous version of App1 as quickly as possible. What should you do?",
    "domain": "compute",
    "choices": [
      "A. Redeploy App1",
      "B. Swap the slots Clone App1",
      "C. D. Restore the backup of App1"
    ],
    "explanation": "When you swap deployment slots, Azure swaps the Virtual IP addresses of the source and destination slots, thereby swapping the URLs of the slots. We can easily revert the deployment by swapping back. Deployment slots are live apps with their own host names. App content and configurations elements can be swapped between two deployment slots, including the production slot. Deploying your application to a non-production slot has the following benefits: 1. You can validate app changes in a staging deployment slot before swapping it with the production slot. 2. Deploying an app to a slot first and swapping it into production makes sure that all instances of the slot are warmed up before being swapped into production. Reference: https://docs.microsoft.com/en-us/azure/app- service/deploy- staging-slots",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q87",
    "number": "454",
    "question": "- (Topic 5) You have an Azure Active Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers. Subscription1 contains a resource group named Dev. You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group. Solution: On Dev, you assign the Contributor role to the Developers group. Does this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Contributor role grants the ability to create and manage all types of Azure resources, including logic apps. Assigning this role to the Developers group on the Dev resource group will allow them to create logic apps in that scope. Then, References: [Built-in roles for Azure resources] [Azure Logic Apps permissions and access control]",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q88",
    "number": "455",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Subscription1. Subscription1 contains two Azure virtual machines named VM1 and VM2. VM1 and VM2 run Windows Server 2016. VM1 is backed up daily by Azure Backup without using the Azure Backup agent. VM1 is affected by ransomware that encrypts data. You need to restore the latest backup of VM1. To which location can you restore the backup? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1 : VM1 and VM2 only When recovering files, you can't restore files to a previous or future operating system version.You can restore files from a VM to the same server operating system, or to the compatible client operating system. Therefore - \"VM1 and VM2 only\" is the best answer since both run on Windows Server 2016. \"A new Azure virtual machine only\" ,this will also work but why to create unnecessary new VM in Azure if existing VM will do the task. So this option is incorrect. Box 2 : VM1 or A new Azure virtual machine only When restoring a VM, you can't use the replace existing VM option for encrypted VMs. This option is only supported for unencrypted managed disks. And also You can restore files from a VM to the same server operating system, or to the compatible client operating system only. Hence \"VM1 or A new Azure virtual machine only\" is correct answer. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) References: https://docs.microsoft.com/en-us/azure/backup/backup-azure-arm-restore-vms https://docs.microsoft.com/en-us/azure/backup/backup- azure-restore-files-from- vm#system-requirements",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q89",
    "number": "456",
    "question": "- (Topic 5) You have an Azure subscription that contains two Log Analytics workspaces named Workspace 1 and Workspace? and 100 virtual machines that run Windows Server. You need to collect performance data and events from the virtual machines. The solution must meet the following requirements: \u2022 Logs must be sent to Workspace! and Workspace? \u2022 All Windows events must be captured \u2022 All security events must be captured. What should you install and configure on each virtual machine?",
    "domain": "monitor",
    "choices": [
      "A. the Azure Monitor agent",
      "B. the Windows Azure diagnostics extension (WAD)",
      "C. the Windows VM agent Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/azure-monitor/agents/agents-overview Azure Monitor Agent (AMA) collects monitoring data from the guest operating system of Azure and hybrid virtual machines and delivers it to Azure Monitor for use by features, insights, and other services, such as Microsoft Sentinel and Microsoft Defender for Cloud. Azure Monitor Agent replaces all of Azure Monitor's legacy monitoring agents.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q90",
    "number": "457",
    "question": "HOTSPOT - (Topic 5) You have an Azure Storage accounts as shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: storageaccount1 and storageaccount2 only Box 2: All the storage accounts Note: The three different storage account options are: General-purpose v2 (GPv2) accounts, General-purpose v1 (GPv1) accounts, and Blob storage accounts. ? General-purpose v2 (GPv2) accounts are storage accounts that support all of the latest features for blobs, files, queues, and tables. ? Blob storage accounts support all the same block blob features as GPv2, but are limited to supporting only block blobs. ? General-purpose v1 (GPv1) accounts provide access to all Azure Storage services, but may not have the latest features or the lowest per gigabyte pricing. References: https://docs.microsoft.com/en-us/azure/storage/common/storage-account- options",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q91",
    "number": "458",
    "question": "HOTSPOT - (Topic 5) You have a virtual network named VNet1 that has the configuration shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/virtual-network/manage-virtual-network#add-or-remove-an-address-range Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q92",
    "number": "459",
    "question": "HOTSPOT - (Topic 5) Peering for VNET2 is configured as shown in the following exhibit. Peering for VNET3 is configured as shown in the following exhibit. How can packets be routed between the virtual networks? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1. VNET2 and VNET3 Box 2: VNET1 Gateway transit is disabled.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q93",
    "number": "460",
    "question": "- (Topic 5) You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a Power Shell script that runs the New-MgUser cmdlet for each user. Does this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. NO"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/active-directory/external-identities/tutorial-bulk-invite?source=recommendations",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q94",
    "number": "461",
    "question": "HOTSPOT - (Topic 5) You manage two Azure subscriptions named Subscription 1 and Subscription2. Subscription! has following virtual networks: The virtual networks contain the following subnets: Subscnption2 contains the following virtual network: - Name: VNETA \u2022 Address space: 10.10.128.0/17 \u2022 Region: Canada Central VNETA contains the following subnets: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q95",
    "number": "462",
    "question": "HOTSPOT - (Topic 5) You need to configure a new Azure App Service app named WebApp1. The solution must meet the following requirements: \u2022 WebApp1 must be able to verify a custom domain name of app.contoso.com. \u2022 WebApp1 must be able to automatically scale up to eight instances. \u2022 Costs and administrative effort must be minimized. Which pricing plan should you choose, and which type of record should you use to verify the domain? To answer, select the appropriate options in the answer area. NOTE: Each correct answer is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q96",
    "number": "463",
    "question": "- (Topic 5) You have an Azure subscription that contains the resources shown in the following table. You configure Azure Site Recovery to replicate VM1 between the East US and W\u00abt US regions. You perform a test failove of VM1 and specify VNET2 as the target v>riual network. When the test version of VM1 is created, to which subnet will the virtual machine be connected?",
    "domain": "networking",
    "choices": [
      "A. Testsubnet1",
      "B. RecoverySubnetB",
      "C. DemoSubnrt1 RecovetySubnelA",
      "D."
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-network-mapping The subnet of the target VM is selected based on the name of the subnet of the source VM. - If a subnet with the same name as the source VM subnet is available in the target network, that subnet is set for the target VM. - If a subnet with the same name doesn't exist in the target network, the first subnet in the alphabetical order is set as the target subnet. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q97",
    "number": "464",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Subscription1 that contains the resources shown in the following table. You plan to configure Azure Backup reports for Vault1. You are configuring the Diagnostics settings for the AzureBackupReports log. Which storage accounts and which Log Analytics workspaces can you use for the Azure Backup reports of Vault1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: storage3 only Vault1 and storage3 are both in West Europe. Box 2: Analytics1, Analytics2, Analytics3 https://docs.microsoft.com/en-us/azure/backup/backup-create-rs-vault https://docs.microsoft.com/de-de/azure/backup/configure-reports Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q98",
    "number": "465",
    "question": "HOTSPOT - (Topic 4) You implement the planned changes for NSG1 and NSG2. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q99",
    "number": "466",
    "question": "- (Topic 4) You need to identify which storage account to use for the flow logging of IP traffic from VM5. The solution must meet the retention requirements. Which storage account should you identify?",
    "domain": "storage",
    "choices": [
      "A. storage4",
      "B. storage1",
      "C. storage2",
      "D. storage3"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q100",
    "number": "467",
    "question": "- (Topic 4) You need to ensure that you can grant Group4 Azure RBAC read-only permissions to all the A2ure file shares. What should you do?",
    "domain": "identity",
    "choices": [
      "A. On storagel and storage4, change the Account kind type to StorageV2 (general purpose v2).",
      "B. Recreate storage2 and set Hierarchical namespace to Enabled.",
      "C. On storage2, enable identity-based access for the file shares.",
      "D. Create a shared access signature (SAS) for storagel, storage2, and storage4."
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q101",
    "number": "468",
    "question": "HOTSPOT - (Topic 3) You need to recommend a solution for App1. The solution must meet the technical requirements. What should you include in the recommendation? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "This reference architecture shows how to deploy VMs and a virtual network configured for an N-tier application, using SQL Server on Windows for the data tier. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) Description automatically generated with medium confidence Scenario: You have a public-facing application named App1. App1 is comprised of the following three tiers: ? A SQL database ? A web front end ? A processing middle tier Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only. ? Technical requirements include: ? Move all the virtual machines for App1 to Azure. ? Minimize the number of open ports between the App1 tiers. References: https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/n- tier/n-tier-sql-server",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q102",
    "number": "469",
    "question": "HOTSPOT - (Topic 2) You are evaluating the connectivity between the virtual machines after the planned implementation of the Azure networking infrastructure. For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Once the VNets are peered, all resources on one VNet can communicate with resources on the other peered VNets. You plan to enable peering between Paris- VNet and AllOffices- VNet. Therefore VMs on Subnet1, which is on Paris-VNet and VMs on Subnet3, which is on AllOffices-VNet will be able to connect to each other. All Azure resources connected to a VNet have outbound connectivity to the Internet by default. Therefore VMs on ClientSubnet, which is on ClientResources-VNet will have Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) access to the Internet; and VMs on Subnet3 and Subnet4, which are on AllOffices-VNet will have access to the Internet.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q103",
    "number": "470",
    "question": "HOTSPOT - (Topic 1) You need to the appropriate sizes for the Azure virtual for Server2. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: Create a Recovery Services vault Create a Recovery Services vault on the Azure Portal. Box 2: Install the Azure Site Recovery Provider Azure Site Recovery can be used to manage migration of on-premises machines to Azure. Scenario: Migrate the virtual machines hosted on Server1 and Server2 to Azure. Server2 has the Hyper-V host role. References: https://docs.microsoft.com/en-us/azure/site-recovery/migrate-tutorial-on-premises-azure",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q104",
    "number": "471",
    "question": "HOTSPOT - (Topic 5) You have an Azure virtual machine named VM1 and a Recovery Services vault named Vault1. You create a backup Policy1 as shown in the exhibit. (Click the Exhibit tab.) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You configure the backup of VM1 to use Policy1 on Thursday, January 1. You need to identify the number of available recovery points for VM1. How many recovery points are available on January 8 and on January 15? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: 6 4 daily + 1 weekly + monthly Box 2: 8 4 daily + 2 weekly + monthly + yearly Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q105",
    "number": "472",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. You plan to create a role definition to meet the following requirements: \u2022 Users must be able to view the configuration data of a storage account. \u2022 Users must be able to perform all actions on a virtual network. \u2022 The solution must use the principle of least privilege. What should you include in the role definition for each requirement? To answer, select the appropriate options in the answer area.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Perform all actions on a virtual network: \u201cMicrosoft.Network/virtualNetworks/*\u201d View the configuration data of a storage account: \u201cMicrosoft.Storage/StorageAccounts/read\u201d To perform all actions on a virtual network, you need to use the wildcard () character in the action string, which grants access to all actions that match the string. The action string for virtual networks is \"Microsoft.Network/virtualNetworks/\". To view the configuration data of a storage account, you need to use the read action substring in the action string, which enables read actions (GET). The action string for storage accounts is \u201cMicrosoft.Storage/StorageAccounts/read\u201d. References: ? https://learn.microsoft.com/en-us/azure/role-based-access-control/role-definitions ? https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q106",
    "number": "473",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that is linked to an Azure AD tenant. The tenant contains two users named User1 and User2. The subscription contains the resources shown in the following table. The subscription contains the alert rules shown in the following table. The users perform the following actions: \u2022 User1 creates a new virtual disk and attaches the disk to VM1. \u2022 User2 creates a new resource tag and assigns the tag to RG1 and VM1. Which alert rules are triggered by each user? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Answer:",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "In this case, you have two alert rules: Alert1 and Alert2. Alert1 has a scope of RG1, which means it applies to all the resources in the resource group named RG1. Alert1 has a condition of All Administrative operations, which means it triggers when any administrative operation is performed on the resources in RG1. An administrative operation is any operation that changes the configuration or state of a resource, such as creating, deleting, updating, or restarting. Alert2 has a scope of VM1, which means it applies only to the virtual machine named VM1. Alert2 also has a condition of All Administrative operations, which means it triggers when any administrative operation is performed on VM1. Now, let\u2019s see which alert rules are triggered by each user. User1 creates a new virtual disk and attaches the disk to VM1. This is an administrative operation on VM1, so it triggers Alert2. However, it does not trigger Alert1, because the new disk is not part of RG1. Therefore, the correct answer for User1 is C. Only Alert2 is triggered. User2 creates a new resource tag and assigns the tag to RG1 and VM1. This is also an administrative operation on both RG1 and VM1, so it triggers both Alert1 and Alert2. Therefore, the correct answer for User2 is D. Alert1 and Alert2 are triggered.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q107",
    "number": "474",
    "question": "HOTSPOT - (Topic 5) You have an Azure Storage account named storage1. You have an Azure App Service app named app1 and an app named App2 that runs in an Azure container instance. Each app uses a managed identity. You need to ensure that App1 and App2 can read blobs from storage1 for the next 30 days. What should you configure in storage1 for each app? Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Answer:",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: Access Control (IAM) Since the App1 uses Managed Identity, App1 can access the Storage Account via IAM. As per requirement, we need to minimize the number of secrets used, so Access keys is not ideal. Box 2: Shared access signatures (SAS) We need temp access for App2, so we need to use SAS. A shared access signature (SAS) provides secure delegated access to resources in your storage account without compromising the security of your data. With a SAS, you have granular control over how a client can access your data. You can control what resources the client may access, what permissions they have on SAS is valid, among other parameters. those resources, and how long the",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q108",
    "number": "475",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains an Azure Availability Set named WEBPROD- AS-USE2 as shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You add 14 virtual machines to WEBPROD-AS-USE2. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: 2 There are 10 update domains. The 14 VMs are shared across the 10 update domains so four update domains will have two VMs and six update domains will have one VM. Only one update domain is rebooted at a time. Therefore, a maximum of two VMs will be offline. Box 2: 7 There are 2 fault domains. The 14 VMs are shared across the 2 fault domains, so 7 VMs in each fault domain. A rack failure will affect one fault domain so 7 VMs will be offline.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q109",
    "number": "476",
    "question": "- (Topic 5) You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Overview blade, you move the virtual machine to a different subscription. Does this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "Moving the virtual machine to a different subscription does not change the host that the virtual machine runs on. It only changes the billing and management of the resources. To move the virtual machine to a different host, you need to redeploy it or use Azure Site Recovery. Then, References: [Move resources to new resource group or subscription] [Redeploy Windows VM to new Azure node] [Use Azure Site Recovery to migrate Azure VMs between Azure regions]",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q110",
    "number": "477",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the resources shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You plan to create a data collection rule named DCRI in Azure Monitor. Which resources can you set as data sources in DCRI, and which resources can you set as destinations in DCRI? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "monitor",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Data Sources: VM1 only Destination: Workspace1 Only",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q111",
    "number": "478",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the public load balancers shown in the following table. You plan to create six virtual machines and to load balance requests to the virtual machines. Each load balancer will load balance three virtual machines. You need to create the virtual machines for the planned solution. How should you create the virtual machines? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "https://docs.microsoft.com/en-us/azure/load-balancer/skus>",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q112",
    "number": "479",
    "question": "- (Topic 5) You have an Azure subscription that has the public IP addresses shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You plan to deploy an instance of Azure Firewall Premium named FW1. Which IP addresses can you use?",
    "domain": "networking",
    "choices": [
      "A. IP2 Only",
      "B. IP1 and lP2 only",
      "C. IP1, IP2, and IP5 only",
      "D. IP1, IP2, IP4, and IP5 only"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/public-ip-addresses#at- a-glance Azure Firewall - Dynamic IPv4: No - Static IPv4: Yes Dynamic IPv6: No - - Static IPv6: No https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/configure-public-ip- firewall Azure Firewall is a cloud-based network security service that protects your Azure Virtual Network resources. Azure Firewall requires at least one public static IP address to be configured. This IP or set of IPs are used as the external connection point to the firewall. Azure Firewall supports standard SKU public IP addresses. Basic SKU public IP address and public IP prefixes aren't supported.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q113",
    "number": "480",
    "question": "HOTSPOT - (Topic 5) You have an Azure AD tenant that is linked to the subscriptions shown in the following table. You have the resource groups shown In the following table. You assign roles to users as shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? User1 can resize VM1. Yes, this is correct. According to the tables, User1 is assigned the Contributor role at the subscription level for Sub1. The Contributor role grants full access to manage all resources in the subscription, including the ability to resize virtual machines1. Therefore, User1 can resize VM1, which is a resource in RG1 under Sub1. ? User2 can create a new storage account in RG1. No, this is not correct. According to the tables, User2 is assigned the Reader role at the resource group level for RG1. The Reader role grants read-only access to view existing resources in the resource group, but not to create, update, or delete any resources2. Therefore, User2 cannot create a new storage account in RG1. ? User3 can assign User1 the Owner role for RG3. No, this is not correct. According to the tables, User3 is assigned the Storage Account Contributor role at the resource group level for RG3. The Storage Account Contributor role grants full access to manage storage accounts and their data in the resource group, but not to assign roles to other users3. To assign roles to other users, User3 would need a role that has Microsoft.Authorization/roleAssignments/write permissions, such as User Access Administrator or Owner4. Therefore, User3 cannot assign User1 the Owner role for RG3.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q114",
    "number": "481",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) - (Topic 5) You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines. You need to delete the Recovery Services vault. What should you do first?",
    "domain": "storage",
    "choices": [
      "A. From the Recovery Service vault, stop the backup of each backup item.",
      "B. From the Recovery Service vault, delete the backup data.",
      "C. Modify the disaster recovery properties of each virtual machine.",
      "D. Modify the locks of each virtual machine."
    ],
    "explanation": "You can't delete a Recovery Services vault if it is registered to a server and holds backup data. If you try to delete a vault, but can't, the vault is still configured to receive backup data. Remove vault dependencies and delete vault In the vault dashboard menu, scroll down to the Protected Items section, and click Backup Items. In this menu, you can stop and delete Azure File Servers, SQL Servers in Azure VM, and Azure virtual machines. References: https://docs.microsoft.com/en-us/azure/backup/backup-azure-delete-vault",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q115",
    "number": "482",
    "question": "HOTSPOT - (Topic 5) You have two Azure App Service apps named App1 and App2. Each app has a production deployment slot and a test deployment slot. The Backup Configuration settings for the production slots are shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? On January 15, 2021, App1 will have only one backup in storage. Yes, this is correct. According to the table, App1 has a backup every 1 day, starting from January 6, 2021, with a retention of 0 days. This means that each backup will be deleted after 0 days, or as soon as the next backup is created. Therefore, on January 15, 2021, App1 will have only one backup in storage, which is the one created on that day1. ? On February 6, 2021, you can access the backup of the App2 test slot from January 15, 2021. No, this is not correct. According to the table, App2 has a backup every 1 day, starting from January 6, 2021, with a retention of 30 days. This means that each backup will be deleted after 30 days, or when the storage limit is reached. However, the table also shows that App2 has a setting of \u201cKeep at Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) least one backup\u201d set to Yes. This means that the oldest backup will be retained even if it exceeds the retention period or the storage limit2. Therefore, on February 6, 2021, you can access the backup of the App2 test slot from January 6, 2021, but not from January 15, 2021. ? On January 15, 2021, you can restore the App2 production slot backup from January 6 to the App2 test slot. Yes, this is correct. According to the web search results, you can restore a backup by overwriting an existing app or by restoring to a new app or slot3. You can also restore a backup from a different slot or app as long as they are in the same subscription and region4. Therefore, on January 15, 2021, you can restore the App2 production slot backup from January 6 to the App2 test slot.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q116",
    "number": "483",
    "question": "HOTSPOT - (Topic 5) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You have an Azure subscription that contains the virtual machines shown in the following table. VM1 and VM2 use public IP addresses. From Windows Server 2019 on VM1 and VM2, you allow inbound Remote Desktop connections. Subnet1 and Subnet2 are in a virtual network named VNET1. The subscription contains two network security groups (NSGs) named NSG1 and NSG2. NSG1 uses only the default rules. NSG2 uses the default rules and the following custom incoming rule; \u2022 Priority: 100 \u2022 Name: Rule1 \u2022 Port: 3389 \u2022 Protocol: TCP \u2022 Source: Any \u2022 Destination: Any \u2022 Action: Allow NSG1 is associated to Subnet! NSG2 is associated to the network interface of VM2. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No: VM1 has default rules which denies any port open for inbound rules Yes: VM2 has custom rule allowing RDP port Yes: VM1 and VM2 are in the same Vnet. by default, communication are allowed",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q117",
    "number": "484",
    "question": "- (Topic 5) You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data? Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Azure Import/Export service is used to securely import large amounts of data to Azure Blob storage and Azure Files by shipping disk drives to an Azure datacenter. The maximum size of an Azure Files Resource of a file share is 5 TB. Reference: https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-service",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q118",
    "number": "485",
    "question": "- (Topic 5) You have an Azure subscription that contains the virtual machines shown in the following table. javascript:void(0) You deploy a load balancer that has the following configurations: \u2022 Name: LB1 \u2022 Type internal Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) \u2022 SKU: Standard \u2022 Virtual network VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1. Solution: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes No",
      "B."
    ],
    "explanation": "You can only attach virtual machines that are in the same location and on the same virtual network as the LB. Virtual machines must have a standard SKU public IP or no public IP. The LB needs to be a standard SKU to accept individual VMs outside an availability set or vmss. VMs do not need to have public IPs but if they do have them they have to be standard SKU. Vms can only be from a single network. When they don\u2019t have a public IP they are assigned an ephemeral IP. Also, when adding them to a backend pool, it doesn\u2019t matter in which status are the VMs. Note: Load balancer and the public IP address SKU must match when you use them with public IP addresses.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q119",
    "number": "486",
    "question": "HOTSPOT - (Topic 5) You have an Azure Storage account named storage1 that contains a blob container. The blob container has a default access tier of Hot. Storage1 contains a container named container! You create lifecycle management rules in storage1 as shown in the following table. You perform the actions shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "File3.docx is a blob in container1 that was uploaded on October 1 and edited on October 2. According to the lifecycle management rule 2, any blob in container1 that has not been modified for 5 days will be deleted. Therefore, on October 7, File3.docx will be deleted from the storage account. Therefore, on October 10, you cannot read File3.docx because it no longer exists.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q120",
    "number": "487",
    "question": "- (Topic 5) You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2. VM1 hosts a frontend application that connects to VM2 to retrieve data. Users report that the frontend application is slower than usual. You need to view the average round-trip time (RTT) of the packets from VM1 to VM2. Which Azure Network Watcher feature should you use?",
    "domain": "networking",
    "choices": [
      "A. NSG flow logs",
      "B. Connection troubleshoot",
      "C. IP flow verify",
      "D. Connection monitor"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview#monitoring The connection monitor capability monitors communication at a regular interval and informs you of reachability, latency, and network topology changes between the VM and the endpoint. Connection monitor also provides the minimum, average, and maximum latency observed over time. After learning the latency for a connection, you may find that you can decrease the latency by moving your Azure resources to different Azure regions.",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q121",
    "number": "488",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains an Azure Storage account named storageaccount1. You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q122",
    "number": "489",
    "question": "HOTSPOT - (Topic 5) You plan to deploy the following Azure Resource Manager (ARM) template. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For each of the following statements, select Yes . Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "? LB1 will be connected to a subnet named LB1 in VNET1. Yes, this is correct. The template specifies that the load balancer resource named LB1 has a property called frontendIPConfigurations, which defines the subnet where the load balancer is located. The value of this property is a reference to the resource ID of the subnet named LB1 in VNET1. You can see this reference in line 38 of the template1. ? LB1 can be deployed only to the resource group that contains VNET1. No, this is not correct. The template does not specify a resource group for the load balancer resource, which means it can be deployed to any resource group in the same Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) subscription as VNET1. However, if you want to deploy the load balancer to a specific resource group, you can add a property called resourceGroup to the reference of the subnet in line 382. ? The value of the sku variable can be provided as a parameter when the template is deployed. No, this is not correct. The template defines the sku variable as a constant value of \u201cStandard\u201d in line 9. This means that the value cannot be changed or overridden by a parameter when the template is deployed. If you want to make the sku value configurable, you need to change the variable definition to a parameter definition, and use the parameter reference instead of the variable reference in line 363.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q123",
    "number": "490",
    "question": "HOTSPOT - (Topic 5) You have several Azure virtual machines on a virtual network named VNet1. You configure an Azure Storage account as shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q124",
    "number": "491",
    "question": "HOTSPOT - (Topic 5) You create a Recovery Services vault backup policy named Policy1 as shown in the following exhibit. Answer:",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: 10 years The yearly backup point occurs to 1 March and its retention period is 10 years. Box 2: 36 months The monthly backup point occurs on the 1 of every month and its retention period is 36 months. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) Note: Azure retention policy takes the longest period of retention for each backup. In case of conflict between 2 different policies.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q125",
    "number": "492",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription You plan to deploy a new storage account You need to configure encryption for the account The solution must meet the following requirements \u2022 Use a customer-managed key stored in an key vault \u2022 Use the maximum supported bit length. Which type of key and which bit length should you use?",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "RSA 4096 Key: RSA length: 4096 https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview#key-vault-requirements",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q126",
    "number": "493",
    "question": "- (Topic 5) You have an Azure subscription that contains the virtual machines shown in the following table. You deploy a load balancer that has the following configurations: \u2022Name: LB1 \u2022Type: Internal \u2022SKU: Standard \u2022Virtual network: VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1. Solution: You create two Standard public IP addresses and associate a Standard SKU public IP address to the network interface of each virtual machine. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q127",
    "number": "494",
    "question": "- (Topic 5) You have an Azure subscription that hat Traffic Analytics configured. You deploy a new virtual machine named VM1 that has the following settings: \u2022 Region- East US \u2022 Virtual network: VNet1 \u2022 NIC network security group: NSG1 You need to monitor VM1 traffic by using Traffic Analytics. Which settings should you configure?",
    "domain": "networking",
    "choices": [
      "A. Diagnostic settings for VM1",
      "B. Insights for VM1",
      "C. NSG flow logs for NSG1",
      "D. Diagnostic settings for NSG1"
    ],
    "explanation": "Traffic Analytics analyzes the network security group (NSG) flow logs to provide insights into traffic flow in your Azure cloud1. NSG flow logs are a feature of Network Watcher that allows you to view information about ingress and egress IP traffic through an NSG2. To use Traffic Analytics, you need to enable NSG flow logs for the network security groups you want to monitor1. Diagnostic settings for VM1 or NSG1 are not required for Traffic Analytics. Diagnostic settings are used to stream log data from an Azure resource to different destinations such as Log Analytics workspace, Event Hubs, or Storage account3. Insights for VM1 are also not required for Traffic Analytics. Insights are a feature of Azure Monitor that provide analysis of the performance and health of an Azure resource4.",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q128",
    "number": "495",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the virtual machines shown in the following table. Each virtual machine contains only a private IP address. You create an Azure bastion for VNet1 as shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q129",
    "number": "496",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that has offices in the East US and West US Azure regions. You plan to create the storage account shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "The default routing tier setting determines how network traffic is routed from the internet to the storage account. By default, the Microsoft global network routing option is selected, which means that traffic is routed over the Microsoft global network for the bulk of its path, maximizing network performance and reliability. However, this option also incurs network charges for data transfer between different Azure regions. The internet routing option, on the other hand, minimizes the traversal of traffic over the Microsoft global network, handing it off to the transit ISP at the earliest opportunity. This option lowers networking costs, but may compromise network performance and reliability. Therefore, to minimize the network costs of accessing adatum22, which is located in the East US region, from the West US region, you should modify the default routing tier setting to use internet routing instead of Microsoft global network routing. For more information, see Network routing preference for Azure Storage. Box2 = Encryption Type https://learn.microsoft.com/en-us/azure/storage/common/infrastructure-encryption- enable?tabs=portal",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q130",
    "number": "497",
    "question": "HOTSPOT - (Topic 5) You have an Azure Load Balancer named LB1. You assign a user named User1 the roles shown in the following exhibit.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "User Access Administrator can only assign access to other users https://docs.microsoft.com/en-us/azure/role-based-access-control/rbac-and-directory- admin-roles Virtual Machine Contributor can Manage VMs, which includes deleting VMs too. https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in- roles#virtual-machine-contributor https://docs.microsoft.com/en-us/answers/questions/350635/can-virtual-machine-contributor-create-vm.html",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q131",
    "number": "498",
    "question": "- (Topic 5) You have an Azure subscription that contains the resources in the following table. VM1 and VM2 are deployed from the same template and host line-of-business applications accessed by using Remote Desktop. You configure the network security group (NSG) shown in the exhibit. (Click the Exhibit button.) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You need to prevent users of VM1 and VM2 from accessing websites on the Internet. What should you do?",
    "domain": "networking",
    "choices": [
      "A. Associate the NSG to Subnet1.",
      "B. Disassociate the NSG from a network interface.",
      "C. Change the DenyWebSites outbound security rule.",
      "D. Change the Port_80 inbound security rule"
    ],
    "explanation": "Outbound rule \u201cDenyWebSites\u201d is setup correctly to block outbound internet traffic over port 80. In the screenshot it states, \"Associated with: 0 subnets, 0 NIC's\", so you need to associate the NSG to Subnet1.You can associate or dissociate a network security group from a NIC or Subnet. Reference: https://docs.microsoft.com/en-us/azure/virtual- network/manage-network-security-group",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q132",
    "number": "499",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) - (Topic 5) You have an Azure Active Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers. Subscription1 contains a resource group named Dev. You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group. Solution: On Subscription1, you assign the Logic App Operator role to the Developers group. Does this meet the goal?",
    "domain": "identity",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "The Logic App Operator role only grants the ability to read, enable, disable, and run logic apps. It does not grant the ability to create logic apps. To create logic apps, you need to assign the Logic App Contributor role or a higher-level role such as Owner or Contributor. Then, References: [Built-in roles for Azure resources] [Azure Logic Apps permissions and access control]",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q133",
    "number": "500",
    "question": "- (Topic 5) You have an Azure subscription that contains the resources shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) The Not allowed resource types Azure policy that has policy enforcement enabled is assigned to RG1 and uses the following parameters: Microsoft.Network/virtualNetworks Microsoft.Compute/virtualMachines In RG1, you need to create a new virtual machine named VM2 which is connected toVNET1. What should you do first? Create an Azure Resource Manager template.",
    "domain": "identity",
    "choices": [
      "A. B. AddasubnettoVNET1.",
      "C. Remove Microsof",
      "D. Network/virtualNetworks from the policy.",
      "E. Remove Microsoft.Compute/virtualMachines from the policy."
    ],
    "explanation": "To create a new virtual machine named VM2 which is connected to VNET1 in RG1, you need to remove Microsoft.Network/virtualNetworks from the policy. This is because the Not allowed resource types Azure policy denies the deployment of the specified resource types in the scope of the assignment. In this case, the policy is assigned to RG1 and uses the parameters Microsoft.Network/virtualNetworks and Microsoft.Compute/virtualMachines. This means that you cannot create or update any virtual networks or virtual machines in RG1. Therefore, to create VM2 and connect it to VNET1, you need to remove Microsoft.Network/virtualNetworks from the policy parameters. This will allow you to create or update virtual networks in RG1, but still prevent you from creating or updating virtual machines. Alternatively, you can also exclude VNET1 from the policy assignment scope, but this will affect the compliance of the policy for the entire virtual network. References: ? Not allowed resource types (Deny) ? Create and manage policies to enforce compliance",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q134",
    "number": "501",
    "question": "- (Topic 5) You have an Azure virtual machine named VM1. You use Azure Backup to create a backup of VM1 named Backup1. After creating Backup1, you perform the following changes to VM1: ? Modify the size of VM1. ? Copy a file named Budget.xls to a folder named Data. ? Reset the password for the built-in administrator account. ? Add a data disk to VM1. An administrator uses the Replace existing option to restore VM1 from Backup1. You need to ensure that all the changes to VM1 are restored. Which change should you perform again?",
    "domain": "storage",
    "choices": [
      "A. Modify the size of VM1.",
      "B. Add a data disk.",
      "C. Reset the password for the built-in administrator account.",
      "D. Copy Budget.xls to Data."
    ],
    "explanation": "The scenario mentioned in the question, we are using the replace option. So in this case we would lose the existing data written to the disk after the backup was taken. The file was copied to the disk after the backup was taken. Hence, we would need to copy the file once again. References: https://docs.microsoft.com/en-us/azure/backup/backup-azure-arm-restore-vms#replace- existing-disks",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q135",
    "number": "502",
    "question": "DRAG DROP - (Topic 4) You need to configure the alerts for VM1 and VM2 to meet the technical requirements. Which three actions should you perform in sequence? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order. Answer:",
    "domain": "monitor",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q136",
    "number": "503",
    "question": "- (Topic 2) You need to resolve the Active Directory issue. What should you do?",
    "domain": "identity",
    "choices": [
      "A. From Active Directory Users and Computers, select the user accounts, and then modify the User Principal Name value.",
      "B. Run idfix.exe, and then use the Edit action.",
      "C. From Active Directory Domains and Trusts, modify the list of UPN suffixes.",
      "D. From Azure AD Connect, modify the outbound synchronization rule."
    ],
    "explanation": "IdFix is used to perform discovery and remediation of identity objects and their attributes in an on-premises Active Directory environment in preparation for migration to Azure Active Directory. IdFix is intended for the Active Directory administrators responsible for directory synchronization with Azure Active Directory. Scenario: Active Directory Issue Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) Several users in humongousinsurance.com have UPNs that contain special characters. You suspect that some of the characters are unsupported in Azure AD. References: https://www.microsoft.com/en-us/download/details.aspx?id=36832",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q137",
    "number": "504",
    "question": "DRAG DROP - (Topic 2) You need to prepare the environment to ensure that the web administrators can deploy the web apps as quickly as possible. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "* 1. Web administrators will deploy Azure web apps for the marketing department. * 2. Each web app will be added to a separate resource group. Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) * 3. The initial configuration of the web apps will be identical. * 4. The web administrators have permission to deploy web apps to resource groups. Steps: 1 --> Create a resource group, and then deploy a web app to the resource group. 2 --> From the Automation script blade of the resource group , click Add to Library. 3 --> From the Templates service, select the template, and then share the template to the web administrators . References: https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/quickstart-create-templates-use-the-portal",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q138",
    "number": "505",
    "question": "- (Topic 1) You discover that VM3 does NOT meet the technical requirements. You need to verify whether the issue relates to the NSGs. What should you use?",
    "domain": "networking",
    "choices": [
      "A. Diagram in VNet1",
      "B. the security recommendations in Azure Advisor",
      "C. Diagnostic settings in Azure Monitor",
      "D. Diagnose and solve problems in Traffic Manager Profiles",
      "E. IP flow verify in Azure Network Watcher"
    ],
    "explanation": "Scenario: Litware must meet technical requirements including: Ensure that VM3 can establish outbound connections over TCP port 8080 to the applications servers in the Montreal office. IP flow verify checks if a packet is allowed or denied to or from a virtual machine. The information consists of direction, protocol, local IP, remote IP, local port, and remote port. If the packet is denied by a security group, the name of the rule that denied the packet is returned. While any source or destination IP can be chosen, IP flow verify helps Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) administrators quickly diagnose connectivity issues from or to the internet and from or to the on-premises environment. References: https://docs.microsoft.com/en-us/azure/network-watcher/network-watcher-ip-flow-verify- overview",
    "correct": 4,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q139",
    "number": "506",
    "question": "- (Topic 1) You need to meet the technical requirement for VM4. What should you create and configure?",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Scenario: Create a workflow to send an email message when the settings of VM4 are modified. You can start an automated logic app workflow when specific events happen in Azure resources or third-party resources. These resources can publish those events to an Azure event grid. In turn, the event grid pushes those events to subscribers that have queues, webhooks, or event hubs as endpoints. As a subscriber, your logic app can wait for those events from the event grid before running automated workflows to perform tasks - without you writing any code. References: https://docs.microsoft.com/en-us/azure/event-grid/monitor-virtual-machine-changes-event- grid-logic-app",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q140",
    "number": "507",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) HOTSPOT - (Topic 5) You have an Azure Active Directory tenant named Contoso.com that includes following users: Contoso.com includes following Windows 10 devices: You create following security groups in Contoso.com: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: Yes User1 is a Cloud Device Administrator. Device2 is Azure AD joined. Group1 has the assigned to join type. User1 is the owner of Group1. Note: Assigned groups - Manually add users or devices into a static group. Azure AD joined or hybrid Azure AD joined devices utilize an organizational account in Azure AD Box 2: No User2 is a User Administrator. Device1 is Azure AD registered. Group1 has the assigned join type, and the owner is User1. Note: Azure AD registered devices utilize an account managed by the end user, this account is either a Microsoft account or another locally managed credential. Box 3: Yes User2 is a User Administrator. Device2 is Azure AD joined. Group2 has the Dynamic Device join type, and the owner is User2. References: https://docs.microsoft.com/en-us/azure/active-directory/devices/overview",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q141",
    "number": "508",
    "question": "HOTSPOT - (Topic 5) You have an Azure App Service plan named ASP1. CPU usage for ASP1 is shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? The average CPU percentage is calculated 24 times per day. This is because the exhibit shows the CPU percentage for ASP1 in a 24-hour period, with one data point for each hour. Therefore, the average CPU percentage is calculated once per hour, or 24 times per day1. ? ASP1 must be scaled out to optimize CPU usage. This is because the exhibit shows that the CPU percentage for ASP1 is consistently above 80%, which indicates that the app service plan is under high load and needs more instances to handle the traffic. Scaling out means adding more instances to an app service plan, which can improve the performance and availability of the apps hosted on it2. Scaling up means changing the pricing tier of an app service plan, which can increase the resources available for each instance, but not necessarily reduce the CPU usage3.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q142",
    "number": "509",
    "question": "- (Topic 5) You have an Azure subscription named Subscription1 that is used be several departments at your company. Subscription1 contains the resources in the following table: Another administrator deploys a virtual machine named VM1 and an Azure Storage account named Storage2 by using a single Azure Resource Manager template. You need to view the template used for the deployment. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) From which blade can you view the template that was used for the deployment?",
    "domain": "storage",
    "choices": [
      "A. RG1",
      "B. VM1",
      "C. Storage1",
      "D. Container1"
    ],
    "explanation": "* 1. View template from deployment history Go to the resource group for your new resource group. Notice that the portal shows the result of the last deployment. Select this link. * 2. You see a history of deployments for the group. In your case, the portal probably lists only one deployment. Select this deployment. The portal displays a summary of the deployment. The summary includes the status of the deployment and its operations and the values that you provided for parameters. To see the template that you used for the deployment, select View template. References: https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-export-template",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q143",
    "number": "510",
    "question": "- (Topic 5) You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Update management blade, you click Enable. Does this meet the goal?",
    "domain": "compute",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q144",
    "number": "511",
    "question": "DRAG DROP - (Topic 5) You have an Azure subscription named Sub1 that contains two users named User1 and User2. You need to assign role-based access control (RBAC) roles to User1 and User2. The users must be able to perform the following tasks in Sub1: \u2022 User1 must view the data in any storage account. \u2022 User2 must assign users the Contributor role for storage accounts. The solution must use the principle of least privilege. Which RBAC role should you assign to each user? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? User1: You should assign the Reader and Data Access role to User1. This role grants read access to Azure resources and data, including the data in any storage account1. This role is suitable for User1\u2019s task of viewing the data in any storage account, and it follows the principle of least privilege by not granting any write or delete permissions. ? User2: You should assign the Storage Account Contributor role to User2. This role grants full access to manage storage accounts and their data, including the ability to assign roles in Azure RBAC2. This role is suitable for User2\u2019s task of assigning users the Contributor role for storage accounts, and it follows the principle of least privilege by not granting access to other types of resources.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q145",
    "number": "512",
    "question": "HOTSPOT - (Topic 5) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You have an Azure subscription. You deploy a virtual machine scale set that is configure as shown in the following exhibit. Use the drop-down menus to select the answer choice that answers each questions based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box-1 : 3 Initial starts 2 VM's 15 minutes have passed. at 10 minutes 1 VM was added we now have 3 VM's. Cool down is 5 Minutes before another 10 minute wait cycle starts so the answer is 3. Box-2: 1 Initial 5 VM's 60 minutes Pass. 1 VM removed every 15 minute cycle. 10 minutes wait timer plus 5 minute cool down equals 15 minutes cycle. Four 15 minute cycles pass equaling 60 minutes removing 4 VM's. We have 1 VM left. Default Scale in and Out Default Durations are 10 minutes with 5 minute cool down. The default scale set settings in Azure are: -Minimum number of instances 1 -Maximum number of instances 10 -Scale out CPU threshold (%) 75 -Duration in minutes10 -Number of instances to increase by 1 -Scale in CPU threshold (%) 25 -Number of instances to decrease by -1 https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale- sets-autoscale-portal#create-a-rule-to-automatically-scale-in Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q146",
    "number": "513",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains a storage account named storage1. The subscription is linked to an Azure Active Directory (Azure AD) tenant named contoso.com that syncs to an on-premises Active Directory domain. The domain contains the security principals shown in the following table. In Azure AD, you create a user named User2. The storage1 account contains a file share named share1 and has the following configurations. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q147",
    "number": "514",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1. You install and configure a web server and a DNS server on VM1. VM1 has the effective network security rules shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "A number between 100 and 4096. Rules are processed in priority order, with lower numbers processed before higher numbers, because lower numbers have higher priority. Once traffic matches a rule, processing stops. As a result, any rules that exist with lower priorities (higher numbers) that have the same attributes as rules with higher priorities are not processed. https://docs.microsoft.com/en-us/azure/virtual-network/network-security- groups-overview",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q148",
    "number": "515",
    "question": "HOTSPOT - (Topic 5) You have an Azure Kubernetes Service (AKS) cluster named AKS1 and a computer named Computer1 that runs Windows 10. Computer1 that has the Azure CLI installed. You need to install the kubectl client on Computer1. Which command should you run? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "To install kubectl locally, use the az aks install-cli command: az aks install-cli",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q149",
    "number": "516",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the virtual networks shown in the following table. The subnets have the IP address spaces shown in the following table. You plan to create a container app named contapp1 in the East US Azure region. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You need to create a container app environment named con-env1 that meets the following requirements: \u2022 Uses its own virtual network. \u2022 Uses its own subnet. \u2022 Is connected to the smallest possible subnet. To which virtual networks can you connect con-env1, and which subnet mask should you use? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "? Virtual Network: You can connect con-env1 to VNet2 and VNet3 only. This is because VNet1 is in a different region than the container app, which is East US. According to the web search results, you can only connect a container app environment to a virtual network that is in the same region as the container app1. Therefore, VNet1 is not a valid option. VNet2 and VNet3 are both in the same region as the container app, and they have enough available IP addresses to support a container app environment. ? Subnet mask: You should use /28 as the subnet mask for con-env1. This is because /28 is the smallest possible subnet mask that can accommodate a container app environment. According to the web search results, a container app environment requires a minimum of 16 IP addresses in a subnet2. A /28 subnet mask provides 16 IP addresses, while a /26 subnet mask provides 64 IP addresses, a /24 subnet mask provides 256 IP addresses, a /23 subnet mask provides 512 IP addresses, and a /16 subnet mask provides 65,536 IP addresses. Therefore, /28 is the most efficient choice for minimizing the subnet size.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q150",
    "number": "517",
    "question": "DRAG DROP - (Topic 5) You have an Azure subscription that contains virtual machine named VM1. You need to back up VM. The solution must ensure that backups are stored across three availability zones in the primary region. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "According to 1, Availability Zones are unique physical locations within an Azure region that provide high availability and disaster recovery for your virtual machines. To back up your VM across three availability zones in the primary region, you need to perform the following actions in sequence: ? Create a Recovery Services vault2 that will store your backups and enable geo- redundancy for cross-region protection. ? For VM1, create a backup policy and configure the backup2 to use the Recovery Services vault as the backup destination. ? Configure a replication policy1 that will replicate your VM1 to another availability zone in the same region.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q151",
    "number": "518",
    "question": "HOTSPOT - (Topic 5) You create a Recovery Services vault backup policy named Policy1 as shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Answer:",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: 10 years The yearly backup point occurs to 1 March and its retention period is 10 years. Box 2: 36 months The monthly backup point occurs on the 1 of every month and its retention period is 36 months. Note: Azure retention policy takes the longest period of retention for each backup. In case of conflict between 2 different policies.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q152",
    "number": "519",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the users shown in the following table. The groups are configured as shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/active-directory/roles/groups-concept#how-are- role-assignable-groups-protected \"Group nesting isn't supported. A group can't be added as a member of a role-assignable group.\" For the second question: https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/how-to-manage- groups#add-or-remove-a-group-from-another-group \"We currently don't support: Adding Microsoft 365 groups to Security groups or other Microsoft 365 groups. \" For the third question, although it appears truncated in the screenshot (ending with \"for...\") there is a reference about Microsoft 365 groups support for roles assignment here: https://learn.microsoft.com/en-us/azure/active-directory/roles/groups-concept#how-role- assignments-to-groups-work \"To assign a role to a group, you must create a new security or Microsoft 365 group with the is AssignableToRole property set to true. \"",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q153",
    "number": "520",
    "question": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) - (Topic 5) You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Monitor, you create a metric on Network in and Network Out. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q154",
    "number": "521",
    "question": "DRAG DROP - (Topic 5) You have an Azure subscription that contains a storage account. You have an on-premises server named Server1 that runs Window Server 2016. Server1 has 2 TB of data. You need to transfer the data to the storage account by using the Azure Import/Export service. In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order. NOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "At a high level, an import job involves the following steps: Step 1: Attach an external disk to Server1 and then run waimportexport.exe Determine data to be imported, number of drives you need, destination blob location for your data in Azure storage. Use the WAImportExport tool to copy data to disk drives. Encrypt the disk drives with BitLocker. Step 2: From the Azure portal, create an import job. Create an import job in your target storage account in Azure portal. Upload the drive journal files. Step 3: Detach the external disks from Server1 and ship the disks to an Azure data center. Provide the return address and carrier account number for shipping the drives back to you. Ship the disk drives to the shipping address provided during job creation. Step 4: From the Azure portal, update the import job Update the delivery tracking number in the import job details and submit the import job. The drives are received and processed at the Azure data center. The drives are shipped using your carrier account to the return address provided in the import job. References: https://docs.microsoft.com/en-us/azure/storage/common/storage-import-export-service",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q155",
    "number": "522",
    "question": "HOTSPOT - (Topic 5) You have a virtual network named VNet1 that has the configuration shown in the following exhibit. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/virtual-network/manage-virtual-network#add-or-remove-an-address-range",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q156",
    "number": "523",
    "question": "- (Topic 5) Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) You have two Azure virtual machines named VM1 and VM2 that run Windows Server. The virtual machines are in a subnet named Subnet1. Subnet1 is in a virtual network named VNet1. You need to prevent VM1 from accessing VM2 on port 3389. What should you do?",
    "domain": "networking",
    "choices": [
      "A. Create a network security group (NSG) that has an outbound security rule to deny destination port 3389 and apply the NSG to the network interface of VM1.",
      "B. Create a network security group (NSG) that has an inbound security rule to deny source port 3389 and apply the NSG to Subnet1.",
      "C. Create a network security group (NSG) that has an outbound security rule to deny source port 3389 and apply the NSG to Subnet1.",
      "D. Configure Azure Bastion in VNet1."
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q157",
    "number": "524",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains a resource group named RG1. You plan to use an Azure Resource Manager (ARM) template named template1 to deploy resources. The solution must meet the following requirements: \u2022 Deploy new resources to RG1. \u2022 Remove all the existing resources from RG1 before deploying the new resources. How should you complete the command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://learn.microsoft.com/en-us/powershell/module/az.resources/new- azresourcegroupdeployment?view=azps-9.3.0#-resourcegroupname Specifies the name of the resource group to deploy. https://learn.microsoft.com/en-us/powershell/module/az.resources/new- azresourcegroupdeployment?view=azps-9.3.0#-mode Specifies the deployment mode. The acceptable values for this parameter are: -Complete: In complete mode, Resource Manager deletes resources that exist in the resource group but are not specified in the template. - Incremental: In incremental mode, Resource Manager leaves unchanged resources that exist in the resource group but are not specified in the template.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q158",
    "number": "525",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Subscription1 that contains the resources shown in the following table. You plan to configure Azure Backup reports for Vault1. You are configuring the Diagnostics settings for the AzureBackupReports log. Which storage accounts and which Log Analytics workspaces can you use for the Azure Backup reports of Vault1? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: storage3 only Vault1 and storage3 are both in West Europe. Box 2: Analytics1, Analytics2, Analytics3 https://docs.microsoft.com/en-us/azure/backup/backup-create-rs-vault https://docs.microsoft.com/de-de/azure/backup/configure-reports",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q159",
    "number": "526",
    "question": "HOTSPOT - (Topic 4) You need to create storage5. The solution must support the planned changes. Which type of storage account should you use, and which account should you configure as the destination storage account? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer: Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q160",
    "number": "527",
    "question": "HOTSPOT - (Topic 3) You need to configure the Device settings to meet the technical requirements and the user requirements. Which two settings should you modify? To answer, select the appropriate settings in the answer area. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: Selected Only selected users should be able to join devices Box 2: Yes Require Multi-Factor Auth to join devices. From scenario: ? Ensure that only users who are part of a group named Pilot can join devices to Azure AD ? Ensure that when users join devices to Azure Active Directory (Azure AD), the users use a mobile phone to verify their identity. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q161",
    "number": "528",
    "question": "- (Topic 3) You need to move the blueprint files to Azure. What should you do?",
    "domain": "compute",
    "choices": [
      "A. Generate a shared access signature (SAS). Map a drive, and then copy the files by using File Explorer.",
      "B. Use the Azure Import/Export service.",
      "C. Generate an access ke",
      "D. Map a drive, and then copy the files by using File Explorer.",
      "E. Use Azure Storage Explorer to copy the files."
    ],
    "explanation": "Azure Storage Explorer is a free tool from Microsoft that allows you to work with Azure Storage data on Windows, macOS, and Linux. You can use it to upload and download data from Azure blob storage. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) Scenario: Planned Changes include: move the existing product blueprint files to Azure Blob storage. Technical Requirements include: Copy the blueprint files to Azure over the Internet. References: https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science- process/move-data-to-azure-blob-using-azure-storage-explorer",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q162",
    "number": "529",
    "question": "HOTSPOT - (Topic 3) You need to recommend a solution for App1. The solution must meet the technical requirements. What should you include in the recommendation? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "This reference architecture shows how to deploy VMs and a virtual network configured for an N-tier application, using SQL Server on Windows for the data tier. Description automatically generated with medium confidence Scenario: You have a public-facing application named App1. App1 is comprised of the following three tiers: Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) ? A SQL database ? A web front end ? A processing middle tier Each tier is comprised of five virtual machines. Users access the web front end by using HTTPS only. ? Technical requirements include: ? Move all the virtual machines for App1 to Azure. ? Minimize the number of open ports between the App1 tiers. References: https://docs.microsoft.com/en-us/azure/architecture/reference-architectures/n- tier/n-tier-sql-server",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q163",
    "number": "530",
    "question": "- (Topic 2) You need to prepare the environment to meet the authentication requirements. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) Which two actions should you perform? Each correct answer presents part of the solution. NOTE Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Azure Active Directory (AD) Identity Protection and an Azure policy",
      "B. a Recovery Services vault and a backup policy",
      "C. an Azure Key Vault and an access policy",
      "D. an Azure Storage account and an access policy"
    ],
    "explanation": "D: Seamless SSO works with any method of cloud authentication - Password Hash Synchronization or Pass-through Authentication, and can be enabled via Azure AD Connect. B: You can gradually roll out Seamless SSO to your users. You start by adding the following Azure AD URL to all or selected users' Intranet zone settings by using Group Policy in Active Directory: https://autologon.microsoftazuread-sso.com",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q164",
    "number": "531",
    "question": "HOTSPOT - (Topic 1) You need to the appropriate sizes for the Azure virtual for Server2. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: Create a Recovery Services vault Create a Recovery Services vault on the Azure Portal. Box 2: Install the Azure Site Recovery Provider Azure Site Recovery can be used to manage migration of on-premises machines to Azure. Scenario: Migrate the virtual machines hosted on Server1 and Server2 to Azure. Server2 has the Hyper-V host role. References: https://docs.microsoft.com/en-us/azure/site-recovery/migrate-tutorial-on-premises-azure",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q165",
    "number": "532",
    "question": "- (Topic 1) You need to ensure that VM1 can communicate with VM4. The solution must minimize administrative effort. What should you do? Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "compute",
    "choices": [
      "A. Create a user-defined route from VNET1 to VNET3.",
      "B. Assign VM4 an IP address of 10.0.1.5/24.",
      "C. Establish peering between VNET1 and VNET3.",
      "D. Create an NSG and associate the NSG to VMI and VM4."
    ],
    "explanation": "Reference: https://docs.microsoft.com/en-us/azure/vpn-gateway/tutorial-site-to-site-portal",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q166",
    "number": "533",
    "question": "- (Topic 5) After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen. You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to Appl are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. You discover that connections 10 Appl from 131.107.100.50 over TCP port 443 fail. You verity that the Load Balancer rules are configured correctly. You need to ensure that connections to Appl can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that allows any traffic from the Azureload Balancer source and has a priority of 150. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q167",
    "number": "534",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains an Azure Availability Set named WEBPROD- AS-USE2 as shown in the following exhibit. You add 14 virtual machines to WEBPROD-AS-USE2. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: 2 There are 10 update domains. The 14 VMs are shared across the 10 update domains so four update domains will have two VMs and six update domains will have one VM. Only one update domain is rebooted at a time. Therefore, a maximum of two VMs will be offline. Box 2: 7 There are 2 fault domains. The 14 VMs are shared across the 2 fault domains, so 7 VMs in each fault domain. A rack failure will affect one fault domain so 7 VMs will be offline.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q168",
    "number": "535",
    "question": "HOTSPOT - (Topic 5) You have the following custom role-based access control (RBAC) role. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: N Because doesn't have: Microsoft.Authorization/*/Write - Create roles, role assignments, policy assignments, policy definitions and policy set definitions Box 2; Yes Has been assigned; Microsoft.Compute/virtualMachines/* - Perform all virtual machine actions including create, update, delete, start, restart, and power off virtual machines. Execute scripts on virtual machines. Box 3: Y Has been assigned; Microsoft.Network/networkInterfaces/* - Create and manage network interfaces See; https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q169",
    "number": "536",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the resources shown in the following table. NSG1 is configured as shown in the following exhibit. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Yes - VM1 can access the Storage account because there is nothing blocking it the on the virtual network. There is a rule that actually allows outbound access to storage. Yes- VM2 is on the Same VNET there is nothing blocking access to it from VM1 on the Virtual network. The Deny rule for HTTPS_VM1_Deny is for inbound internet. connections from the No- You have a Inbound deny rule for VM1 from the the internet with a destination of the 10.3.0.15 which is in Subnet1. This proves the NSG is associated to Subnet1 and only subnet one because the image shows it is connected to only 1 subnet. VM2 is on Subnet2 which you can determined by its IP address. This means that NSG1 does not apply to VM2.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q170",
    "number": "537",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. The subscription contains virtual machines that run Windows Server 2016 and are configured as shown in the following table. You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named conioso.com. You create a virtual network link for contoso.com as shown in the following exhibit. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "All three VMs are in VNET2. Auto registration is enabled for private Azure DNS zone named contoso.com, which is linked to VNET2. So, VM1, VM2 and VM3 will auto-register their host records to contoso.com. None of the VM will auto-register to the public Azure DNS zone named adatum.com. You cannot register private IPs on the internet (adatum.com) Box 1: Yes Auto registration is enabled for private Azure DNS zone named contoso.com. Box 2: Yes Auto registration is enabled for private Azure DNS zone named contoso.com. Box 3: No None of the VM will auto-register to the public Azure DNS zone named adatum.com",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q171",
    "number": "538",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. You deploy a virtual machine scale set that is configure as shown in the following exhibit. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) Use the drop-down menus to select the answer choice that answers each questions based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box-1 : 3 Initial starts 2 VM's 15 minutes have passed. at 10 minutes 1 VM was added we now have 3 VM's. Cool down is 5 Minutes before another 10 minute wait cycle starts so the answer is 3. Box-2: 1 Initial 5 VM's 60 minutes Pass. 1 VM removed every 15 minute cycle. 10 minutes wait timer plus 5 minute cool down equals 15 minutes cycle. Four 15 minute cycles pass equaling 60 minutes removing 4 VM's. We have 1 VM left. Default Scale in and Out Default Durations are 10 minutes with 5 minute cool down. The default scale set settings in Azure are: -Minimum number of instances 1 -Maximum number of instances 10 -Scale out CPU threshold (%) 75 -Duration in minutes10 -Number of instances to increase by 1 -Scale in CPU threshold (%) 25 -Number of instances to decrease by -1 https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale- sets-autoscale-portal#create-a-rule-to-automatically-scale-in",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q172",
    "number": "539",
    "question": "HOTSPOT - (Topic 5) Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) You have an Azure subscription that contains the virtual networks shown in the following table. You have the virtual machines shown in the following table. You have the virtual network interfaces shown in the following table. Server1 is a DNS server that contains the resources shown in the following table. You have an Azure private DNS zone named contoso.com that has a virtual network link to VNET2 and the records shown in the following table. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q173",
    "number": "540",
    "question": "- (Topic 5) You have a Recovery Services vault named RSV1. RSV1 has a backup policy that retains instant snapshots for five days and daily backup for 14 days. RSV1 performs daily backups of VM1. VM1 hosts a static website that was updated eight days ago. You need to recover VM1 to a point eight days ago. The solution must minimize downtime. What should you do first?",
    "domain": "identity",
    "choices": [
      "A. Deallocate VM1.",
      "B. Restore VM1 by using the Replace existing restore configuration option.",
      "C. Delete VM1.",
      "D. Restore VM1 by using the Create new restore configuration option."
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/backup/backup-azure-arm-restore-vms#restore-options To recover VM1 to a point eight days ago, you need to use the Azure Backup service to restore the VM from a recovery point. A recovery point is a snapshot of the VM data at a specific point in time. Azure Backup creates recovery points according to the backup policy that you configure for the Recovery Services vault1. In this case, the Recovery Services vault named RSV1 has a backup policy that retains instant snapshots for five days and daily backup for 14 days. This means that you can restore the VM from any point in the last 14 days, as long as there is a recovery point available. Since you need to recover VM1 to a point eight days ago, you can use the daily backup recovery point that was created on that day2. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) To restore the VM from a recovery point, you have two options: Replace existing or Create new. The Replace existing option overwrites the existing VM with the restored data, while the Create new option creates a new VM with the restored data. The Replace existing option requires you to deallocate or delete the existing without affecting VM before restoring it, which can cause downtime and data loss. The Create new option allows you to restore the VM the existing VM, which minimizes downtime and data loss3. Therefore, the best option is to restore VM1 by using the Create new restore configuration option. This will create a new VM with the same name as VM1 and append a suffix to it, such as -Restored. You can then verify that the new VM has the correct data and configuration, and switch over to it when you are ready. You can also delete the original VM if you don\u2019t need it anymore3.",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q174",
    "number": "541",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains a storage account named storage1. You need to configure a shared access signature (SAS) to ensure that users can only download blobs securely by name. Which two settings should you configure? To answer, select the appropriate settings in the answer area. NOTE: Each correct answer is worth one point. Answer:",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Allowed resources types: Objects (access by name) Allowed Permissions: Read (you need download) and List (you need to see the object to read it)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q175",
    "number": "542",
    "question": "HOTSPOT - (Topic 5) You have an Azure App Service app named WebApp1 that contains two folders named Folder1 and Folder2. You need to configure a daily backup of WebApp1. The solution must ensure that Folder2 is excluded from the backup. What should you create first and what should you use to exclude Fokier2? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/app-service/manage-backup?tabs=portal#create-a-custom-backup In Storage account, select an existing storage account (in the same subscription) or select Create new. Do the same with Container. https://learn.microsoft.com/en- us/azure/app-service/manage-backup?tabs=portal#configure-partial-backups Partial backups are supported for custom backups (not for automatic backups). Sometimes you don't want to back up everything on your app. To exclude folders and files from being stored in your future backups, create a _backup.filter file in the %HOME%\\site\\wwwroot folder of your app. Specify the list of files and folders you want to exclude in this file.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q176",
    "number": "543",
    "question": "HOTSPOT - (Topic 5) You plan to use Azure Network Watcher to perform the following tasks: ? Task1: Identify a security rule that prevents a network packet from reaching an Azure virtual machine ? Task2: Validate outbound connectivity from an Azure virtual machine to an external host Which feature should you use for each task? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Task 1: IP flow verify The IP flow verify capability enables you to specify a source and destination IPv4 address, port, protocol (TCP or UDP), and traffic direction (inbound or outbound). IP flow verify then tests the communication and informs you if the connection succeeds or fails. If the connection fails, IP flow verify tells you which security rule allowed or denied the communication, so that you can resolve the problem. Task 2: Connection troubleshoot The connection troubleshoot capability enables you to test a connection between a VM and another VM, an FQDN, a URI, or an IPv4 address. The test returns similar information returned when using the connection monitor capability, but tests the connection at a point in time, rather than monitoring it over time.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q177",
    "number": "544",
    "question": "- (Topic 5) You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown in the following table. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) On June 1, you store a blob named File1 in the Hot access tier of storage1. What is the state of File1 on June 7? stored in the Archive access tier",
    "domain": "storage",
    "choices": [
      "A. B. stored in the Hot access tier",
      "C. stored in the Cool access tier",
      "D. deleted"
    ],
    "explanation": "If you define more than one action on the same blob, lifecycle management applies the least expensive action to the blob. For example, action delete is cheaper than action tierToArchive. Action tierToArchive is cheaper than action tierToCool. https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management- overview",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q178",
    "number": "545",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains an Azure Storage account named storageaccount1. You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q179",
    "number": "546",
    "question": "HOTSPOT - (Topic 5) You have a hybrid deployment of Azure AD that contains the users shown in the following table. You need to modify the JobTitle and UsageLocation attributes for the users. For which users can you modify the attributes from Azure AD? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1:User1 and User3 only You must use Windows Server Active Directory to update the identity, contact info, or job info for users whose source of authority is Windows Server Active Directory. Box 2: User1, User2, and User3 Usage location is an Azure property that can only be modified from Azure AD (for all users including Windows Server AD users synced via Azure AD Connect).",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q180",
    "number": "547",
    "question": "- (Topic 5) You have an Azure AD tenant named adatum.com that contains the groups shown in the following table. Adatum.com contains the users shown in the following table. You assign the Azure AD Premium P2 license to Group l and User4. Which users are assigned the Azure AD Premium P2 license?",
    "domain": "identity",
    "choices": [
      "A. User4 only",
      "B. User1 and User4 only",
      "C. User1. User2. and User4 only",
      "D. User1, User2, User3, and User4"
    ],
    "explanation": "? According to the Microsoft documentation, when you assign a license to a group, all members of that group are automatically assigned the license. However, if a user is already assigned the same license directly or through another group, the license is not duplicated. ? In your scenario, you assigned the Azure AD Premium P2 license to Group1 and User4. This means that all members of Group1, which are User1 and User2, will also get the license. User4 will get the license directly. ? User3 will not get the license because they are not a member of Group1 or assigned the license directly. ? Therefore, the users who are assigned the Azure AD Premium P2 license are User1, User2, and User4 only.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q181",
    "number": "548",
    "question": "HOTSPOT - (Topic 5) You plan to deploy an Azure container instance by using the following Azure Resource Manager template. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the template. Answer: Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: can connect to the container from any device In the policy \"osType\": \"window\" refer that it will create a container in a container group that runs Windows but it won't block access depending on device type. Box 2: the container will restart automatically Docker provides restart policies to control whether your containers start automatically when they exit, or when Docker restarts. Restart policies ensure that linked containers are started in the correct order. Docker recommends that you use restart policies, and avoid using process managers to start containers. on-failure : Restart the container if it exits due to an error, which manifests as a non-zero exit code. As the flag is mentioned as \"on-failure\" in the policy, so it will restart automatically",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q182",
    "number": "549",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription You plan to deploy a new storage account You need to configure encryption for the account The solution must meet the following requirements \u2022 Use a customer-managed key stored in an key vault Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) \u2022 Use the maximum supported bit length. Which type of key and which bit length should you use?",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "RSA 4096 Key: RSA length: 4096 https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview#key-vault-requirements",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q183",
    "number": "550",
    "question": "- (Topic 5) You have an Azure Subscription that contains the virtual networks Shown in the following table. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) All the virtual networks are peered. Each virtual network contains nine virtual machines. You need to configure secure RDP corrections to the virtual machines by using Azure Boston. Whit is the minimum number of Bastion nests required?",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? According to the Microsoft documentation, Azure Bastion is a service that provides more secure and seamless RDP and SSH access to virtual machines without any exposure through public IP addresses. You can provision the service directly in your local or peered virtual network to get support for all the VMs within it. ? In your scenario, you have three virtual networks that are peered with each other. This means that they can communicate with each other as if they were in the same virtual network. Therefore, you can deploy one Bastion host in any of the virtual networks and use it to connect to all the virtual machines in the peered virtual networks. You don\u2019t need to deploy a separate Bastion host for each virtual network or each virtual machine. ? For more information about how to deploy and use Azure Bastion, see Tutorial: Deploy Bastion using specified settings: Azure portal.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q184",
    "number": "551",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the virtual machines shown in the following table. Each virtual machine contains only a private IP address. You create an Azure bastion for VNet1 as shown in the following exhibit. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q185",
    "number": "552",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. You plan to deploy a storage account named storage' by using the following Azure Resource Manager (ARM) template. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q186",
    "number": "553",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that has offices in the East US and West US Azure regions. You plan to create the storage account shown in the following exhibit. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point. Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As)",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "The default routing tier setting determines how network traffic is routed from the internet to the storage account. By default, the Microsoft global network routing option is selected, which means that traffic is routed over the Microsoft global network for the bulk of its path, maximizing network performance and reliability. However, this option also incurs network charges for data transfer between different Azure regions. The internet routing option, on the other hand, minimizes the traversal of traffic over the Microsoft global network, handing it off to the transit ISP at the earliest opportunity. This option lowers networking costs, but may compromise network performance and reliability. Therefore, to minimize the network costs of accessing adatum22, which is located in the East US region, from the West US region, you should modify the default routing tier setting to use internet routing instead of Microsoft global network routing. For more information, see Network routing preference for Azure Storage. Box2 = Encryption Type https://learn.microsoft.com/en-us/azure/storage/common/infrastructure-encryption- enable?tabs=portal",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q187",
    "number": "554",
    "question": "HOTSPOT - (Topic 5) You have two Azure virtual machines as shown in the following table. You create the Azure DNS zones shown in the following table. You perform the following actions: Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) ? To fabrikam.com, you add a virtual network link to vnet1 and enable auto registration. ? For contoso.com, you assign vm1 and vm2 the Owner role. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worm one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q188",
    "number": "555",
    "question": "- (Topic 5) You plan to move a distributed on-premises app named App1 to an Azure subscription. After the planned move, App1 will be hosted on several Azure virtual machines. You need to ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance. What should you create?",
    "domain": "compute",
    "choices": [
      "A. one virtual machine scale set that has 10 virtual machines instances",
      "B. one Availability Set that has three fault domains and one update domain",
      "C. one Availability Set that has 10 update domains and one fault domain",
      "D. one virtual machine scale set that has 12 virtual machines instances"
    ],
    "explanation": "A virtual machine scale set is a group of identical virtual machines that are automatically distributed across fault domains and update domains in one or more placement groups1. A fault domain is a logical group of underlying hardware that share a common power source and network switch, and a failure in one fault other fault domains2. An update domain is a logical group of underlying hardware that can domain will not affect virtual machines in undergo maintenance or be rebooted at the same time3. By creating a virtual machine scale set with 12 instances, you can ensure that App1 has high availability and scalability. You can configure the scale set to have a minimum number of instances that must always be running, and a maximum number of instances that can be scaled up or down based on demand or a schedule. You can also configure the scale set to use automatic OS image upgrades, which will apply updates to the virtual machines in batches, ensuring that at least one instance is always running during the upgrade process.",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q189",
    "number": "556",
    "question": "HOTSPOT - (Topic 5) Your Partner of IT Exam visit - https://www.exambible.com We recommend you to try the PREMIUM AZ-104 Dumps From Exambible https://www.exambible.com/AZ-104-exam/ (232 Q&As) You purchase a new Azure subscription named Subscription1. You create a virtual machine named VM1 in Subscription1. VM1 is not protected by Azure Backup. You need to protect VM1 by using Azure Backup. Backups must be created at 01:00 and stored for 30 days. What should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: A Recovery Services vault A Recovery Services vault is an entity that stores all the backups and recovery points you create over time. Box 2: A backup policy What happens when I change my backup policy? When a new policy is applied, schedule and retention of the new policy is followed. References: https://docs.microsoft.com/en-us/azure/backup/backup-configure-vault https://docs.microsoft.com/en-us/azure/backup/backup-azure-backup-faq A Recovery Services vault is a storage entity in Azure that houses data. The data is typically copies of data, or configuration information for virtual machines (VMs), workloads, servers, or workstations. You can use Recovery Services vaults to hold backup data for various Azure services such as IaaS VMs (Linux or Windows) and Azure SQL databases. You can use backup policy to configure schedule. https://docs.microsoft.com/en-us/azure/backup/backup-azure-recovery-services-vault-overviewhttps://docs.microsoft.com/en-us/azure/backup/backup-azure-vms- first-look-arm",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q190",
    "number": "557",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains an Azure Storage account named storage1 and the users shown in the following table. You plan to monitor storage1 and to configure email notifications for the signals shown in the following table. You need to identify the minimum number of alert rules and action groups required for the planned monitoring. How many alert rules and action groups should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
      "B. Not Mastered"
    ],
    "explanation": "Box 1 : 4 As there are 4 distinct set of resource types (Ingress, Egress, Delete storage account, Restore blob ranges), so you need 4 alert rules. In one alert rule you can't specify different type of resources to monitor. So you need 4 alert rules. Box 2 : 3 There are 3 distinct set of \"Users to notify\" as (User 1 and User 3), (User1 only), and (User1, User2, and User3). You can't set the action group based on existing group (Group1 and Group2) as there is no specific group for User1 only. So you need to create 3 action group.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q191",
    "number": "558",
    "question": "HOTSPOT - (Topic 5) You have an Azure Active Directory (Azure AD) tenant named adatum.com. Adatum.com contains the groups in the following table. You create two user accounts that are configured as shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) To which groups do User1 and User2 belong? To answer. select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: Group 1 only First rule applies Box 2: Group1 and Group2 only Both membership rules apply. References: https://docs.microsoft.com/en-us/sccm/core/clients/manage/collections/create- collections",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q192",
    "number": "559",
    "question": "HOTSPOT - (Topic 5) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You have an Azure subscription that contains a resource group named RG1. You plan to use an Azure Resource Manager (ARM) template named template1 to deploy resources. The solution must meet the following requirements: \u2022 Deploy new resources to RG1. \u2022 Remove all the existing resources from RG1 before deploying the new resources. How should you complete the command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://learn.microsoft.com/en-us/powershell/module/az.resources/new- azresourcegroupdeployment?view=azps-9.3.0#-resourcegroupname Specifies the name of the resource group to deploy. https://learn.microsoft.com/en-us/powershell/module/az.resources/new- azresourcegroupdeployment?view=azps-9.3.0#-mode Specifies the deployment mode. The acceptable values for this parameter are: -Complete: In complete mode, Resource Manager deletes resources that exist in the resource group but are not specified in the template. - Incremental: In incremental mode, Resource Manager leaves unchanged resources that exist in the resource group but are not specified in the template.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q193",
    "number": "560",
    "question": "DRAG DROP - (Topic 5) You have a windows 11 device named Device1 and an Azure subscription that contains the resources shown in the following table. Device 1 has Azure PowerShell and Azure Command-Line Interface (CLI) installed. From Device1, you need to establish a Remote Desktop connection to VM1. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/bastion/connect-native-client-windows",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q194",
    "number": "561",
    "question": "HOTSPOT - (Topic 1) You implement the planned changes for NSG1 and NSG2. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q195",
    "number": "562",
    "question": "DRAG DROP - (Topic 5) You need to create container1 and share1. Which storage accounts should you use for each resource? To answer, select the appropriate options in t he answer area. NOTE: Each correct selection is worth one point.",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Reference: https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-storage-tiers https://docs.microsoft.com/en-us/azure/storage/common/storage-account- overview",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q196",
    "number": "563",
    "question": "DRAG DROP - (Topic 5) You have an Azure subscription that contains a virtual machine name VM1. VM1 has an operating system disk named Disk1 and a data disk named Disk2. You need to back up Disk2 by using Azure Backup. Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q197",
    "number": "564",
    "question": "HOTSPOT - (Topic 5) You plan to deploy five virtual machines to a virtual network subnet. Each virtual machine will have a public IP address and a private IP address. Each virtual machine requires the same inbound and outbound security rules. What is the minimum number of network interfaces and network security groups that you require? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: 5 A public and a private IP address can be assigned to a single network interface. Box 2: 1 You can associate zero, or one, network security group to each virtual network subnet and network interface in a virtual machine. The same network security group can be associated to as many subnets and network interfaces as you choose.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q198",
    "number": "565",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains two storage accounts named contoso101 and contoso102. The subscription contains the virtual machines shown in the following table. VNet1 has service endpoints configured as shown in the Service endpoints exhibit. (Click the Service endpoints tab.) The Microsoft. Storage service endpoint has the service endpoint policy shown in the Microsoft. Storage exhibit. (Click the Microsoft. Storage tab.) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q199",
    "number": "566",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the virtual networks shown in the following table. The subscription contains the subnets shown in the following table. The subscription contains the storage accounts shown in the following table. You create a service endpoint policy named policy1 in the South Central US Azure region to allow connectivity to all the storage accounts in the subscription. Fow each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Answer:",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "? Policy1 can be applied to Subnet3. = YES ? Only storage1 and storage2 can be accessed from VNet2. = NO ? Only storage2 can be accessed from VNet3. = Yes ? According to the Microsoft documentation, a service endpoint policy can be applied to any subnet in a virtual network that has a service endpoint enabled for the same service as the policy. In your scenario, Subnet3 has a service endpoint enabled for Microsoft.Storage, which is the same service as policy1. Therefore, policy1 can be applied to Subnet3. ? According to the Microsoft documentation, when you configure network rules for a storage account, you can limit access to your storage account to requests that come from specified IP addresses, IP ranges, subnets in an Azure virtual network, or resource instances of some Azure services. In your scenario, storage1 and storage2 have network rules that allow access from Subnet1 and Subnet2 respectively. However, this does not mean that only these subnets can access the storage accounts. Other subnets or resources that have the same IP range or resource ID as Subnet1 or Subnet2 can also access the storage accounts. For example, Subnet4 in VNet2 has the same IP range as Subnet1 in VNet1, so it can also access storage1. Similarly, Subnet5 in VNet3 has the same IP range as Subnet2 in VNet1, so it can also access storage2. Therefore, only storage1 and storage2 cannot be accessed from VNet2. ? According to the Microsoft documentation, when you create a private endpoint for a storage account, you assign a private IP address from your virtual network to the storage account. This enables secure traffic between your virtual network and the storage account over a private link. In your scenario, you have created a private endpoint for storage2 in Subnet6 of VNet3. This means that only Subnet6 can access storage2 over the private link. However, this does not mean that only Subnet6 can access storage2 at all. Other subnets or resources that have the same IP range or resource ID as Subnet6 can also access storage2 over the public endpoint of the storage account. For example, Subnet7 in VNet4 has the same IP Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) range as Subnet6 in VNet3, so it can also access storage2 over the public endpoint. Therefore, only storage2 cannot be accessed from VNet3.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q200",
    "number": "567",
    "question": "HOTSPOT - (Topic 5) You have the App Service plan shown in the following exhibit. The scale-in settings for the App Service plan are configured as shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) The scale out rule is configured with the same duration and cool down tile as the scale in rule. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q201",
    "number": "568",
    "question": "HOTSPOT - (Topic 5) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You have an Azure Storage account named storage1. You have an Azure App Service app named app1 and an app named App2 that runs in an Azure container instance. Each app uses a managed identity. You need to ensure that App1 and App2 can read blobs from storage1 for the next 30 days. What should you configure in storage1 for each app? Answer:",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      ""
    ],
    "explanation": "Box 1: Access Control (IAM) Since the App1 uses Managed Identity, App1 can access the Storage Account via IAM. As per requirement, we need to minimize the number of secrets used, so Access keys is not ideal. Box 2: Shared access signatures (SAS) We need temp access for App2, so we need to use SAS. A shared access signature (SAS) provides secure delegated access to resources in your storage account without compromising the security of your data. With a SAS, you have granular control over how a client can access your data. You can control what resources the client may access, what permissions they have on SAS is valid, among other parameters. those resources, and how long the",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q202",
    "number": "569",
    "question": "HOTSPOT - (Topic 5) You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have two external partner organizations named fabrilcam.com and litwareinc.com. FabtAam.com is configured as a connected organization. You create an access package as shown in the Access package exhibit. (Click the Access package lab.) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You configure the external user lifecycle settings as shown in the Lifecycle exhibit. (Click the lifecycle tab) For each of the following statements, select Yes if the statement is true Otherwise, select No Note: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "? Litwareinc.com users can be assigned to package1. = No ? After 365 days, fabrikam.com users will be removed from Group1. = Yes Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions) ? After 395 days, fabrikam.com users will be removed from the contoso.com tenant = No ? Litwareinc.com users cannot be assigned to package1 because they are not a connected organization in the contoso.com tenant. Only users from connected organizations can request access packages that are configured for external users1 ? Fabrikam.com users will be removed from Group1 after 365 days because the access package has an expiration policy of 365 days for external users. This means that the access assignments for external users will end after 365 days, unless they are renewed or extended2 ? Fabrikam.com users will not be removed from the contoso.com tenant after 395 days because the external user lifecycle settings have a deletion policy of 30 days after blocking. This means that external users will be blocked from signing in after 365 days of inactivity, and then deleted after another 30 days. Therefore, the total time before deletion is 395 days of inactivity, not 395 days from the date of assignment3",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q203",
    "number": "570",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the resources shown in the following table: You assign a policy to RG6 as shown in the following table: To RG6, you apply the tag: RGroup: RG6. You deploy a virtual network named VNET2 to RG6. Which tags apply to VNET1 and VNET2? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-policies",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q204",
    "number": "571",
    "question": "- (Topic 5) You create an Azure VM named VM1 that runs Windows Server 2019. VM1 is configured as shown in the exhibit (Click the Exhibit tab.) Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You need to enable Desired State Configuration for VM1. What should you do first?",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q205",
    "number": "572",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the resource groups shown in the following table. RG1 contains the resources shown in the following table. RG2 contains the resources shown in the following table. You need to identify which resources you can move from RG1 to RG2, and which resources you can move from RG2 to RG1. Which resources should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q206",
    "number": "573",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains a storage account named storage1. The subscription is linked to an Azure Active Directory (Azure AD) tenant named contoso.com that syncs to an on-premises Active Directory domain. The domain contains the security principals shown in the following table. In Azure AD, you create a user named User2. The storage1 account contains a file share named share1 and has the following configurations. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q207",
    "number": "574",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains the storage accounts shown in the following table. You need to identify which storage accounts support lifecycle management, and which storage accounts support moving data to the Archive access tier. What should you identify for each requirement? To answer, select the appropriate options in the answer area. NOTE: Each correct answer is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "1) storage1, storage2, storage3 \"Lifecycle management policies are supported for block blobs and append blobs in general- purpose v2, premium block blob, and Blob Storage accounts.\" https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview 2) storage2 \"The archive tier isn't supported for ZRS, GZRS, or RA-GZRS accounts.\" https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview#archive- access-tier",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q208",
    "number": "575",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription named Subscription1 that contains the following resource group: ? Name: RG1 ? Region: West US ? Tag: \u201ctag1\u201d: \u201cvalue1\u201d You assign an Azure policy named Policy1 to Subscription1 by using the following configurations: ? Exclusions: None ? Policy definition: Append tag and its default value ? Assignment name: Policy1 ? Parameters: - Tag name: Tag2 - Tag value: Value2 After Policy1 is assigned, you create a storage account that has the following configurations: ? Name: storage1 ? Location: West US ? Resource group: RG1 ? Tags: \u201ctag3\u201d: \u201cvalue3\u201d You need to identify which tags are assigned to each resource. What should you identify? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: \"tag1\": \"value1\" only Box 2: \"tag2\": \"value2\" and \"tag3\": \"value3\" Tags applied to the resource group are not inherited by the resources in that resource group. References: https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using- tags",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q209",
    "number": "576",
    "question": "- (Topic 5) You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using an Azure Load Balancer. The effective network security configurations for VM2 are shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are configured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You create an inbound security rule that denies all traffic from the 131.107.100.50 source and has a cost of 64999. Does this meet the goal?",
    "domain": "networking",
    "choices": [
      "A. Yes",
      "B. No"
    ],
    "explanation": "No detailed explanation was provided.",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q210",
    "number": "577",
    "question": "DRAG DROP - (Topic 5) You have an Azure Active Directory (Azure AD) tenant that has the initial domain name. You have a domain name of contoso.com registered at a third-party registrar. You need to ensure that you can create Azure AD users that have names containing a suffix of @contoso.com. Which three actions should you perform in sequence? To answer, move the appropriate cmdlets from the list of cmdlets to the answer area and arrange them in the correct order. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "The process is simple: ? Add the custom domain name to your directory ? Add a DNS entry for the domain name at the domain name registrar ? Verify the custom domain name in Azure AD References: https://docs.microsoft.com/en-us/azure/dns/dns-web-sites-custom-domain",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q211",
    "number": "578",
    "question": "HOTSPOT - (Topic 5) Your company purchases a new Azure subscription. You create a file named Deploy json as shown in the following exhibit You connect to the subscription and run the following cmdlet: New-AzDeployment -Location westus -TemplateFile \u201cdeploy.json\u201d\" For each of the following statements, select Yes if the statement is true. Otherwise, select Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) No.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Based on the file named Deploy.json and the cmdlet you ran, here are the answers to your statements: ? You can deploy a virtual machine to RGI. = No ? You can deploy a virtual machine to RG2. = No ? You can manually create a resource group named RG3. = Yes Let me explain why: ? The Deploy.json file defines a template for creating a resource group and a virtual machine in Azure. The template has two parameters: resourceGroupName and vmName. The template also has two resources: one for the resource group and one for the virtual machine. The resource group resource has a property called name, which is set to the value of the resourceGroupName parameter. The virtual machine resource has a property called location, which is set to the value of the location parameter of the deployment cmdlet. ? The cmdlet you ran specifies the location as westus and the template file as Deploy.json. However, it does not specify any values for the resourceGroupName and vmName parameters. Therefore, the cmdlet will prompt you to enter those values interactively before creating the deployment. ? If you enter RGI as the value for the resourceGroupName parameter and VM1 as the value for the vmName parameter, then the cmdlet will create a resource group named RGI and a virtual machine named VM1 in the westus location. Therefore, you can deploy a virtual machine to RGI. ? However, if you enter RG2 as the value for the resourceGroupName parameter, then the cmdlet will fail with an error. This is because RG2 already exists in your subscription and you cannot create a resource group with the same name as an existing one. Therefore, you cannot deploy a virtual machine to RG2 using this template and cmdlet. ? You can manually create a resource group named RG3 by using another cmdlet: New-AzResourceGroup. This cmdlet takes two parameters: Name and RG3 in westus: Location. For example, you can run the following cmdlet to create a resource group named New-AzResourceGroup -Name RG3 -Location westus",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q212",
    "number": "579",
    "question": "HOTSPOT - (Topic 1) You implement the planned changes for NSG1 and NSG2. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "networking",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q213",
    "number": "580",
    "question": "HOTSPOT - (Topic 5) You have an Azure Active Directory tenant named Contoso.com that includes following users: Contoso.com includes following Windows 10 devices: You create following security groups in Contoso.com: For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box 1: Yes User1 is a Cloud Device Administrator. Device2 is Azure AD joined. Group1 has the assigned to join type. User1 is the owner of Group1. Note: Assigned groups - Manually add users or devices into a static group. Azure AD joined or hybrid Azure AD joined devices utilize an organizational account in Azure AD Box 2: No User2 is a User Administrator. Device1 is Azure AD registered. Group1 has the assigned join type, and the owner is User1. Note: Azure AD registered devices utilize an account managed by the end user, this account is either a Microsoft account or another locally managed credential. Box 3: Yes User2 is a User Administrator. Device2 is Azure AD joined. Group2 has the Dynamic Device join type, and the owner is User2. References: https://docs.microsoft.com/en-us/azure/active-directory/devices/overview",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q214",
    "number": "581",
    "question": "HOTSPOT - (Topic 5) You have the App Service plan shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) The scale-in settings for the App Service plan are configured as shown in the following exhibit. The scale out rule is configured with the same duration and cool down tile as the scale in rule. Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q215",
    "number": "582",
    "question": "- (Topic 5) You have an Azure subscription that contains the storage accounts shown in the following table. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) You need to identify which storage account can be converted to zone-redundant storage (ZRS) replication by requesting a live migration from Azure support. What should you identify?",
    "domain": "storage",
    "choices": [
      "A. Storage1",
      "B. Storage2",
      "C. Storage3",
      "D. Storage4"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/storage/common/redundancy- migration?tabs=portal",
    "correct": 1,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q216",
    "number": "583",
    "question": "- (Topic 5) You have an Azure subscription that contains a virtual network named VNET1. VNET1 contains the subnets shown in the following table. Each virtual machine uses a static IP address. You need to create network security groups (NSGs) to meet following requirements: ? Allow web requests from the internet to VM3, VM4, VM5, and VM6. ? Allow all connections between VM1 and VM2. ? Allow Remote Desktop connections to VM1. ? Prevent all other network traffic to VNET1. What is the minimum number of NSGs you should create?",
    "domain": "networking",
    "choices": [
      "A. 1",
      "B. 3 4",
      "C. D. 12"
    ],
    "explanation": "Note: A network security group (NSG) contains a list of security rules that allow or deny network traffic to resources connected to Azure Virtual Networks (VNet). NSGs can be associated to subnets, individual VMs (classic), or individual network interfaces (NIC) attached to VMs (Resource Manager). Each network security group also contains default security rules. References: https://docs.microsoft.com/en-us/azure/virtual-network/security-overview#default-security- rules",
    "correct": 2,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q217",
    "number": "584",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription. You deploy a virtual machine scale set that is configure as shown in the following exhibit. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Use the drop-down menus to select the answer choice that answers each questions based on the information presented in the graphic. NOTE: Each correct selection is worth one point.",
    "domain": "compute",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Box-1 : 3 Initial starts 2 VM's 15 minutes have passed. at 10 minutes 1 VM was added we now have 3 VM's. Cool down is 5 Minutes before another 10 minute wait cycle starts so the answer is 3. Box-2: 1 Initial 5 VM's 60 minutes Pass. 1 VM removed every 15 minute cycle. 10 minutes wait timer plus 5 minute cool down equals 15 minutes cycle. Four 15 minute cycles pass equaling 60 minutes removing 4 VM's. We have 1 VM left. Default Scale in and Out Default Durations are 10 minutes with 5 minute cool down. The default scale set settings in Azure are: -Minimum number of instances 1 -Maximum number of instances 10 -Scale out CPU threshold (%) 75 -Duration in minutes10 -Number of instances to increase by 1 -Scale in CPU threshold (%) 25 -Number of instances to decrease by -1 https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale- sets-autoscale-portal#create-a-rule-to-automatically-scale-in",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q218",
    "number": "585",
    "question": "- (Topic 5) You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2. VM1 hosts a frontend application that connects to VM2 to retrieve data. Passing Certification Exams Made Easy visit - https://www.surepassexam.com ) Users report that the frontend application is slower than usual. You need to view the average round-trip time (RTT) of the packets from VM1 to VM2. Which Azure Network Watcher feature should you use?",
    "domain": "networking",
    "choices": [
      "A. NSG flow logs",
      "B. Connection troubleshoot",
      "C. IP flow verify",
      "D. Connection monitor"
    ],
    "explanation": "https://learn.microsoft.com/en-us/azure/network-watcher/network-watcher-monitoring-overview#monitoring The connection monitor capability monitors communication at a regular interval and informs you of reachability, latency, and network topology changes between the VM and the endpoint. Connection monitor also provides the minimum, average, and maximum latency observed over time. After learning the latency for a connection, you may find that you can decrease the latency by moving your Azure resources to different Azure regions.",
    "correct": 3,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q219",
    "number": "586",
    "question": "HOTSPOT - (Topic 5) You have an Azure subscription that contains an Azure Storage account named storageaccount1. You export storageaccount1 as an Azure Resource Manager template. The template contains the following sections. For each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point. Passing Certification Exams Made Easy visit - https://www.surepassexam.com )",
    "domain": "storage",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "",
    "correct": 0,
    "type": "pdf_expansion"
  },
  {
    "id": "new_pdf_q220",
    "number": "587",
    "question": "HOTSPOT - (Topic 5) You have the role assignment file shown in the following exhibit. Use the drop-down menus to select the answer choice that completes Use the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worm one point.",
    "domain": "identity",
    "choices": [
      "A. Mastered",
      "B. Not Mastered"
    ],
    "explanation": "Passing Certification Exams Made Easy visit - https://www.surepassexam.com Recommend!! Get the Full AZ-104 dumps in VCE and PDF From SurePassExam https://www.surepassexam.com/AZ-104-exam-dumps.html (232 New Questions)",
    "correct": 0,
    "type": "pdf_expansion"
  }
];

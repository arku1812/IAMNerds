// Course catalogue for IAMNerds. Every course is 30 hours.
export const COURSES = [
 {
  "slug": "iam-fundamentals",
  "title": "IAM Fundamentals",
  "tag": "FOUNDATION",
  "category": "Foundation",
  "hours": 30,
  "free": true,
  "scope": "Vendor-neutral IAM, IGA, PAM, SSO and NHI basics",
  "tagline": "Every nerd starts somewhere.",
  "intro": "The starting point: the core ideas behind identity governance, access management, privileged access and non-human identities, before you pick a platform.",
  "lab": "Browser-based exercises, no tenant needed",
  "modules": [
   {
    "name": "Identity basics",
    "topics": "Identities, accounts, authentication vs authorization, the identity lifecycle",
    "lab": "Map the identities in a sample company"
   },
   {
    "name": "Access models",
    "topics": "RBAC, ABAC, least privilege, segregation of duties",
    "lab": "Spot toxic access combinations"
   },
   {
    "name": "Identity governance",
    "topics": "Joiner-mover-leaver, access requests, certifications",
    "lab": "Walk through a joiner-mover-leaver case"
   },
   {
    "name": "Access management",
    "topics": "SSO, SAML, OpenID Connect, MFA, conditional access",
    "lab": "Decode a SAML assertion"
   },
   {
    "name": "Privileged access",
    "topics": "Privileged accounts, vaulting, session recording, just-in-time access",
    "lab": "Sketch a vault structure"
   },
   {
    "name": "Non-human identities & AI agents",
    "topics": "Service accounts, secrets, AI agents; Owner, Purpose, Scope, Expiry",
    "lab": "Assign owners to service accounts"
   },
   {
    "name": "Compliance",
    "topics": "ISO 27001, NIS2 and audit evidence for identity",
    "lab": "Prepare evidence for an access review"
   }
  ],
  "capstone": null
 },
 {
  "slug": "one-identity-manager",
  "title": "One Identity Manager",
  "tag": "IGA",
  "category": "IGA",
  "hours": 30,
  "free": false,
  "scope": "Identity Manager on-premises, Web Portal",
  "tagline": "From Designer to DBQueue, minus the 3 a.m. panic.",
  "intro": "From using the Web Portal to designing and tuning complex Identity Manager solutions.",
  "lab": "Prepared lab virtual machines (subject to vendor licence terms)",
  "modules": [
   {
    "name": "Product overview",
    "topics": "IGA concepts, architecture (database, Job Server, Application Server, API Server), editions and modules",
    "lab": "Tour of a running system"
   },
   {
    "name": "Tools",
    "topics": "Launchpad, Manager, Designer, Synchronization Editor, Web Portal",
    "lab": "Find an identity and its entitlements"
   },
   {
    "name": "Identities & accounts",
    "topics": "Identities, user accounts, account definitions, manage levels",
    "lab": "Create an identity, trace its accounts"
   },
   {
    "name": "Requests & approvals",
    "topics": "IT Shop, shelves, service items, approval policies",
    "lab": "Request and approve access"
   },
   {
    "name": "Attestation basics",
    "topics": "Attestation policies, attestors, running a campaign",
    "lab": "Complete an attestation"
   },
   {
    "name": "Installation & setup",
    "topics": "Database, Job Server, Application Server, Web Portal install and configuration",
    "lab": "Install a lab system"
   },
   {
    "name": "Connecting systems",
    "topics": "Target system connectors (AD, Entra ID, SAP, LDAP, CSV), synchronization projects, mappings, workflows",
    "lab": "Build an AD sync project"
   },
   {
    "name": "HR integration",
    "topics": "Identity import, identity lifecycle, joiner-mover-leaver processes",
    "lab": "Import identities from a CSV HR feed"
   },
   {
    "name": "Roles & policies",
    "topics": "Business roles, departments, cost centers, dynamic roles, inheritance",
    "lab": "Model role-based provisioning"
   },
   {
    "name": "Compliance",
    "topics": "Compliance rules, SoD, company policies, risk index",
    "lab": "Build an SoD rule and remediate"
   },
   {
    "name": "Processes & jobs",
    "topics": "Process orchestration, Job Queue, DBQueue, troubleshooting failed jobs",
    "lab": "Fix a broken provisioning process"
   },
   {
    "name": "Operations",
    "topics": "Transport packages, schedules, logging, backup, upgrades",
    "lab": "Move changes between environments"
   },
   {
    "name": "Customizing in Designer",
    "topics": "Schema extensions, custom columns and tables, templates, formatting, scripts (VB.NET)",
    "lab": "Add a custom attribute end to end"
   },
   {
    "name": "Custom processes & events",
    "topics": "Process design, events, generation conditions, process steps",
    "lab": "Build a custom approval notification"
   },
   {
    "name": "Web Portal customization",
    "topics": "API Server, Angular-based Web Portal, custom API methods",
    "lab": "Add a custom portal view"
   },
   {
    "name": "Performance tuning",
    "topics": "DBQueue tuning, slow processes, SQL analysis, Job Server scaling",
    "lab": "Diagnose a slow environment"
   },
   {
    "name": "Architecture & design",
    "topics": "Multi-environment design, high availability, solution documentation",
    "lab": "Design document for a sample client"
   }
  ],
  "capstone": "End-to-end: HR source, AD + Entra ID, role model, attestation, SoD"
 },
 {
  "slug": "sailpoint",
  "title": "SailPoint",
  "tag": "IGA",
  "category": "IGA",
  "hours": 30,
  "free": false,
  "scope": "IdentityIQ, Identity Security Cloud",
  "tagline": "Aggregate, correlate, certify. Repeat without tears.",
  "intro": "Both IdentityIQ (on-premises) and Identity Security Cloud (SaaS), with shared basics and separate labs for each product.",
  "lab": "Vendor trial or developer tenant",
  "modules": [
   {
    "name": "SailPoint overview",
    "topics": "IdentityIQ vs Identity Security Cloud, architecture, identity cube / identity profile",
    "lab": "Tour of both products"
   },
   {
    "name": "Identities & sources",
    "topics": "Authoritative sources, accounts, entitlements, correlation",
    "lab": "Inspect an identity and its accounts"
   },
   {
    "name": "Access requests",
    "topics": "Request center, approvals, access profiles",
    "lab": "Request and approve access"
   },
   {
    "name": "Certifications",
    "topics": "Manager and targeted certifications, decisions, remediation",
    "lab": "Complete a certification"
   },
   {
    "name": "Connecting sources",
    "topics": "Connectors (AD, Entra ID, JDBC, delimited file, SaaS), aggregation, schemas, VA / IQService",
    "lab": "Connect AD and a CSV HR source"
   },
   {
    "name": "Identity lifecycle",
    "topics": "Identity attributes, lifecycle states, joiner-mover-leaver, provisioning policies",
    "lab": "Automate joiner and leaver"
   },
   {
    "name": "Roles & access modeling",
    "topics": "Access profiles, business and IT roles, role mining",
    "lab": "Build a role from access data"
   },
   {
    "name": "Policies",
    "topics": "SoD policies, violations, policy-based approvals",
    "lab": "Create and trigger an SoD policy"
   },
   {
    "name": "IdentityIQ configuration",
    "topics": "Rules (BeanShell), tasks, workflows, debug pages",
    "lab": "Write an attribute rule"
   },
   {
    "name": "Identity Security Cloud configuration",
    "topics": "Transforms, rules, workflows, event triggers, APIs",
    "lab": "Build a transform and a workflow"
   },
   {
    "name": "Reporting & operations",
    "topics": "Reports, search, audit events, health checks",
    "lab": "Build an access report"
   },
   {
    "name": "Advanced IdentityIQ",
    "topics": "Custom workflows, plugins, quicklinks, deployment with SSB",
    "lab": "Package and deploy a change"
   },
   {
    "name": "Advanced Identity Security Cloud",
    "topics": "REST APIs, SaaS connectivity, custom connectors, CI/CD for configuration",
    "lab": "Automate configuration via API"
   },
   {
    "name": "Performance & scaling",
    "topics": "Aggregation tuning, task partitioning, troubleshooting",
    "lab": "Diagnose a slow aggregation"
   },
   {
    "name": "Architecture & migration",
    "topics": "Solution design, IdentityIQ to Identity Security Cloud migration planning",
    "lab": "Migration plan for a sample client"
   }
  ],
  "capstone": "End-to-end tenant: HR, AD, a SaaS app, roles, SoD, certification"
 },
 {
  "slug": "omada",
  "title": "Omada",
  "tag": "IGA",
  "category": "IGA",
  "hours": 30,
  "free": false,
  "scope": "Omada Identity, Omada Identity Cloud",
  "tagline": "Governance with a data model that makes sense.",
  "intro": "Omada Identity and Omada Identity Cloud, following Omada's best-practice process framework.",
  "lab": "Prepared lab virtual machines (subject to vendor licence terms)",
  "modules": [
   {
    "name": "Omada overview",
    "topics": "Omada Identity vs Omada Identity Cloud, architecture, data model",
    "lab": "Tour of the portal"
   },
   {
    "name": "Identities & accounts",
    "topics": "Identities, accounts, resources, ownership",
    "lab": "Inspect an identity"
   },
   {
    "name": "Access requests",
    "topics": "Self-service requests, approvals, delegation",
    "lab": "Request and approve access"
   },
   {
    "name": "Access reviews",
    "topics": "Survey-based reviews, review campaigns, decisions",
    "lab": "Complete a review"
   },
   {
    "name": "Connectivity",
    "topics": "Connectors, data collection and provisioning, Omada Provisioning Service",
    "lab": "Connect AD and an HR file"
   },
   {
    "name": "Identity lifecycle",
    "topics": "Joiner-mover-leaver processes, identity attributes, contexts",
    "lab": "Automate joiner and leaver"
   },
   {
    "name": "Role & policy model",
    "topics": "Business roles, assignment policies, context-based access",
    "lab": "Build context-based roles"
   },
   {
    "name": "Compliance",
    "topics": "SoD constraints, compliance workbench, violation handling",
    "lab": "Create and resolve an SoD violation"
   },
   {
    "name": "Process configuration",
    "topics": "Workflows, surveys, approval flows, notifications",
    "lab": "Customize an approval flow"
   },
   {
    "name": "Reporting & operations",
    "topics": "Reports, audit, monitoring, troubleshooting",
    "lab": "Build an audit report"
   },
   {
    "name": "Advanced configuration",
    "topics": "Data model extensions, custom properties, views, configuration packages",
    "lab": "Extend the data model"
   },
   {
    "name": "Integration & APIs",
    "topics": "REST/OData APIs, event-based integrations, custom connectors",
    "lab": "Automate a task via API"
   },
   {
    "name": "Architecture & deployment",
    "topics": "Cloud vs on-premises design, environments, migration to Omada Identity Cloud",
    "lab": "Design for a sample client"
   }
  ],
  "capstone": "End-to-end: HR, AD, roles, SoD, review campaign"
 },
 {
  "slug": "saviynt",
  "title": "Saviynt",
  "tag": "IGA",
  "category": "IGA",
  "hours": 30,
  "free": false,
  "scope": "Saviynt Enterprise Identity Cloud",
  "tagline": "Cloud-native IGA, configured properly.",
  "intro": "Saviynt Enterprise Identity Cloud, from daily administration to application access governance.",
  "lab": "Prepared lab virtual machines (subject to vendor licence terms)",
  "modules": [
   {
    "name": "Saviynt overview",
    "topics": "Platform architecture, modules (IGA, application access, PAM), tenant navigation",
    "lab": "Tour of a tenant"
   },
   {
    "name": "Identities & accounts",
    "topics": "Users, accounts, entitlements, endpoints, security systems",
    "lab": "Inspect a user's access"
   },
   {
    "name": "Access requests",
    "topics": "ARS, request forms, approval workflows",
    "lab": "Request and approve access"
   },
   {
    "name": "Certifications",
    "topics": "User manager, entitlement owner and role campaigns",
    "lab": "Complete a campaign"
   },
   {
    "name": "Connections",
    "topics": "Connectors (AD, REST, DB, SAP), import jobs, provisioning, connection JSON",
    "lab": "Connect AD and a REST app"
   },
   {
    "name": "Identity lifecycle",
    "topics": "User imports, rules (user update, technical), birthright access",
    "lab": "Automate joiner and leaver"
   },
   {
    "name": "Roles",
    "topics": "Enterprise and application roles, role mining, role lifecycle",
    "lab": "Build and certify a role"
   },
   {
    "name": "Workflows",
    "topics": "Parallel, serial and conditional workflows, escalations",
    "lab": "Build a conditional approval"
   },
   {
    "name": "Compliance & SoD",
    "topics": "Rulesets, SoD analysis, mitigating controls",
    "lab": "Detect and mitigate an SoD conflict"
   },
   {
    "name": "Analytics & operations",
    "topics": "Analytics queries, jobs, logs, troubleshooting",
    "lab": "Build an analytics report"
   },
   {
    "name": "Application access governance",
    "topics": "Fine-grained access for SAP and SaaS apps, cross-application SoD",
    "lab": "Cross-app SoD analysis"
   },
   {
    "name": "Advanced connectors & APIs",
    "topics": "REST connector design, Saviynt APIs, transports between environments",
    "lab": "Build a custom REST connector"
   },
   {
    "name": "Architecture & design",
    "topics": "Solution design, multi-environment strategy, migration from other IGA tools",
    "lab": "Design for a sample client"
   }
  ],
  "capstone": "End-to-end: HR, AD, a SaaS app, roles, SoD, certification"
 },
 {
  "slug": "sap-identity-authorizations",
  "title": "SAP Identity & Authorizations",
  "tag": "SAP",
  "category": "SAP",
  "hours": 30,
  "free": false,
  "scope": "SAP ABAP / S/4HANA security, SAP GRC Access Control",
  "tagline": "PFCG without the guesswork.",
  "intro": "SAP user and role management in ABAP systems and S/4HANA, plus SAP GRC Access Control.",
  "lab": "Prepared lab virtual machines (subject to vendor licence terms)",
  "modules": [
   {
    "name": "SAP security basics",
    "topics": "Clients, users, authorization concept, authorization objects and fields",
    "lab": "Log on and explore a user"
   },
   {
    "name": "User management",
    "topics": "SU01, SU10, user types, password and logon rules",
    "lab": "Create and lock users"
   },
   {
    "name": "Roles",
    "topics": "PFCG single, composite and derived roles, profiles",
    "lab": "Build a single role"
   },
   {
    "name": "Reporting",
    "topics": "SUIM, SU53, ST01 / STAUTHTRACE",
    "lab": "Trace a missing authorization"
   },
   {
    "name": "Role design",
    "topics": "SU24 proposals, derived roles by org level, naming conventions",
    "lab": "Build a derived role set"
   },
   {
    "name": "S/4HANA & Fiori",
    "topics": "Business catalogs, spaces and pages, Fiori launchpad roles, OData services",
    "lab": "Grant a Fiori app end to end"
   },
   {
    "name": "Central user administration",
    "topics": "CUA setup, distribution, troubleshooting",
    "lab": "Distribute users to a child system"
   },
   {
    "name": "Critical access",
    "topics": "SAP_ALL, critical transactions, emergency users, security audit log (SM19/SM20, RSAU)",
    "lab": "Audit critical access"
   },
   {
    "name": "Integration with IGA",
    "topics": "Provisioning SAP users and roles from One Identity, SailPoint or Saviynt",
    "lab": "Provision a user from an IGA tool"
   },
   {
    "name": "Transports & operations",
    "topics": "Role transports, mass changes, user comparison (PFUD)",
    "lab": "Transport a role change"
   },
   {
    "name": "SAP GRC Access Control",
    "topics": "Access Risk Analysis, Emergency Access Management, Access Request Management, Business Role Management",
    "lab": "Run a risk analysis and firefighter session"
   },
   {
    "name": "SoD rulesets",
    "topics": "Ruleset design, mitigating controls, remediation projects",
    "lab": "Remediate SoD conflicts"
   },
   {
    "name": "Redesign projects",
    "topics": "Role redesign methodology, S/4HANA migration security",
    "lab": "Redesign plan for a sample client"
   }
  ],
  "capstone": "Role concept, GRC setup and IGA integration for a sample company"
 },
 {
  "slug": "sap-cloud-identity-services",
  "title": "SAP Cloud Identity Services",
  "tag": "SAP",
  "category": "SAP",
  "hours": 30,
  "free": false,
  "scope": "Identity Authentication, Identity Provisioning, BTP",
  "tagline": "IAS, IPS and BTP, untangled.",
  "intro": "Identity for SAP cloud applications on SAP BTP.",
  "lab": "SAP BTP trial account",
  "modules": [
   {
    "name": "Overview",
    "topics": "SAP BTP basics, Identity Authentication, Identity Provisioning, Identity Directory, tenant setup",
    "lab": "Activate a trial tenant"
   },
   {
    "name": "Users & groups",
    "topics": "User management, groups, user import",
    "lab": "Create users and groups"
   },
   {
    "name": "Authentication basics",
    "topics": "Logon, applications, MFA options",
    "lab": "Register an application"
   },
   {
    "name": "Single sign-on",
    "topics": "SAML 2.0 and OpenID Connect, trust with BTP subaccounts and SAP SaaS apps",
    "lab": "Set up SSO to a BTP app"
   },
   {
    "name": "Corporate identity providers",
    "topics": "Proxy mode with Entra ID, Okta or Ping, conditional authentication",
    "lab": "Federate with Entra ID"
   },
   {
    "name": "Risk-based authentication",
    "topics": "Rules by IP, group and user type, MFA enforcement",
    "lab": "Enforce MFA for admins"
   },
   {
    "name": "Identity Provisioning",
    "topics": "Source and target systems, transformations, jobs (S/4HANA Cloud, SuccessFactors, Entra ID)",
    "lab": "Provision users to S/4HANA Cloud"
   },
   {
    "name": "Authorization management",
    "topics": "Role collections, groups to roles, policies",
    "lab": "Map groups to role collections"
   },
   {
    "name": "Hybrid scenarios",
    "topics": "Integrating with on-premises SAP and IGA tools, SCIM API",
    "lab": "Push users via SCIM"
   }
  ],
  "capstone": "SSO plus provisioning for a SuccessFactors to S/4HANA Cloud landscape"
 },
 {
  "slug": "microsoft-entra-id",
  "title": "Microsoft Entra ID",
  "tag": "ACCESS",
  "category": "Access management",
  "hours": 30,
  "free": false,
  "scope": "Entra ID, Entra ID Governance, PIM",
  "tagline": "Conditional Access, unconditionally explained.",
  "intro": "Entra ID from tenant basics to identity governance. The content overlaps with the Microsoft SC-300 exam topics, which helps if you are preparing for it.",
  "lab": "Microsoft Entra developer tenant",
  "modules": [
   {
    "name": "Entra ID overview",
    "topics": "Tenants, licences (P1, P2, ID Governance), admin centers, directory roles",
    "lab": "Set up a developer tenant"
   },
   {
    "name": "Users & groups",
    "topics": "Users, guests, security and Microsoft 365 groups, dynamic groups",
    "lab": "Create users and dynamic groups"
   },
   {
    "name": "Authentication basics",
    "topics": "Passwords, MFA, self-service password reset, security defaults",
    "lab": "Enable MFA and SSPR"
   },
   {
    "name": "Hybrid identity",
    "topics": "Entra Connect Sync vs Cloud Sync, password hash sync, pass-through auth, federation",
    "lab": "Sync users from AD"
   },
   {
    "name": "Conditional Access",
    "topics": "Policies, conditions, grant controls, named locations, report-only mode",
    "lab": "Build a baseline policy set"
   },
   {
    "name": "Passwordless & strong auth",
    "topics": "Authentication methods policy, FIDO2, Windows Hello, Authenticator",
    "lab": "Roll out passwordless for a group"
   },
   {
    "name": "Applications",
    "topics": "Enterprise apps, SAML/OIDC SSO, app registrations, consent, app proxy",
    "lab": "Add SSO for a SaaS app"
   },
   {
    "name": "Provisioning",
    "topics": "SCIM provisioning, HR-driven provisioning (Workday, SuccessFactors)",
    "lab": "Provision users to a SaaS app"
   },
   {
    "name": "Privileged Identity Management",
    "topics": "Eligible vs active roles, activation, approvals, PIM for groups",
    "lab": "Make Global Admin eligible-only"
   },
   {
    "name": "Monitoring",
    "topics": "Sign-in and audit logs, Identity Protection, workbooks",
    "lab": "Investigate a risky sign-in"
   },
   {
    "name": "ID Governance",
    "topics": "Entitlement management, access packages, access reviews, lifecycle workflows",
    "lab": "Build an access package with review"
   },
   {
    "name": "Workload identities",
    "topics": "Service principals, managed identities, workload identity federation, app governance",
    "lab": "Remove secrets from an app"
   },
   {
    "name": "Zero Trust architecture",
    "topics": "Admin tiering, emergency access accounts, cross-tenant access, B2B / B2C",
    "lab": "Design a Zero Trust baseline"
   },
   {
    "name": "Automation",
    "topics": "Microsoft Graph API and PowerShell, policy as code",
    "lab": "Automate guest cleanup via Graph"
   }
  ],
  "capstone": "Secure a sample tenant: hybrid sync, CA, PIM, governance"
 },
 {
  "slug": "active-directory",
  "title": "Active Directory",
  "tag": "DIRECTORY",
  "category": "Directory",
  "hours": 30,
  "free": false,
  "scope": "AD DS, Group Policy, tiering, recovery",
  "tagline": "The forest, the trees, and the tiering model.",
  "intro": "AD DS administration, then security hardening and recovery.",
  "lab": "Prepared lab virtual machines (subject to vendor licence terms)",
  "modules": [
   {
    "name": "AD fundamentals",
    "topics": "Forests, domains, domain controllers, sites, FSMO roles, DNS",
    "lab": "Build a lab domain"
   },
   {
    "name": "Objects",
    "topics": "Users, groups (scopes and types), computers, OUs",
    "lab": "Structure OUs and groups"
   },
   {
    "name": "Group Policy basics",
    "topics": "GPO linking, inheritance, filtering, common settings",
    "lab": "Apply a password and lockout policy"
   },
   {
    "name": "Authentication",
    "topics": "Kerberos, NTLM, service accounts, gMSAs",
    "lab": "Replace a service account with a gMSA"
   },
   {
    "name": "Delegation & permissions",
    "topics": "ACLs, delegation of control, AdminSDHolder",
    "lab": "Delegate helpdesk password resets"
   },
   {
    "name": "Replication & sites",
    "topics": "Replication topology, site links, troubleshooting (repadmin, dcdiag)",
    "lab": "Fix a replication issue"
   },
   {
    "name": "Automation",
    "topics": "PowerShell for AD, bulk changes, stale account cleanup",
    "lab": "Script a leaver cleanup"
   },
   {
    "name": "Hybrid",
    "topics": "Preparing AD for Entra Connect, UPN suffixes, attribute hygiene",
    "lab": "Prepare a domain for sync"
   },
   {
    "name": "AD security",
    "topics": "Tiering model, privileged access workstations, LAPS, protected users",
    "lab": "Implement Tier 0 separation"
   },
   {
    "name": "Attack paths",
    "topics": "Kerberoasting, delegation abuse, ACL attack paths, detection",
    "lab": "Find and close attack paths"
   },
   {
    "name": "AD Certificate Services basics",
    "topics": "PKI, templates, common misconfigurations",
    "lab": "Fix a vulnerable template"
   },
   {
    "name": "Backup & recovery",
    "topics": "System state backup, authoritative restore, forest recovery planning",
    "lab": "Restore a deleted OU"
   }
  ],
  "capstone": "Security assessment and hardening plan for a sample domain"
 },
 {
  "slug": "okta",
  "title": "Okta",
  "tag": "ACCESS",
  "category": "Access management",
  "hours": 30,
  "free": false,
  "scope": "Workforce Identity, Lifecycle Management, Workflows, Identity Governance",
  "tagline": "Universal Directory, universally understood.",
  "intro": "Okta Workforce Identity, from directory and SSO to automation and governance.",
  "lab": "Okta integrator (developer) org",
  "modules": [
   {
    "name": "Okta overview",
    "topics": "Org setup, admin console, admin roles, Universal Directory",
    "lab": "Set up an integrator org"
   },
   {
    "name": "Users & groups",
    "topics": "Profiles, groups, group rules, profile mappings",
    "lab": "Create users and group rules"
   },
   {
    "name": "SSO basics",
    "topics": "App integration catalog, SAML vs OIDC, end-user dashboard",
    "lab": "Add SSO for a SaaS app"
   },
   {
    "name": "Directory integration",
    "topics": "AD and LDAP agents, delegated authentication, HR as a source",
    "lab": "Integrate AD"
   },
   {
    "name": "Authentication policies",
    "topics": "Global session policy, app sign-in policies, authenticators, Okta Verify, FastPass",
    "lab": "Enforce phishing-resistant MFA"
   },
   {
    "name": "Lifecycle Management",
    "topics": "SCIM provisioning, attribute mastering, deprovisioning",
    "lab": "Provision and deprovision a SaaS app"
   },
   {
    "name": "Custom apps",
    "topics": "OIDC and SAML app setup, custom attributes, inline hooks",
    "lab": "Integrate a custom web app"
   },
   {
    "name": "Monitoring",
    "topics": "System Log, reports, ThreatInsight, log streaming",
    "lab": "Investigate a failed sign-in"
   },
   {
    "name": "Okta Workflows",
    "topics": "Flows, connectors, tables, event hooks",
    "lab": "Automate a leaver workflow"
   },
   {
    "name": "Okta Identity Governance",
    "topics": "Access requests, access certifications, entitlement management",
    "lab": "Run an access certification"
   },
   {
    "name": "APIs & automation",
    "topics": "Okta APIs, Terraform provider, API tokens and OAuth for Okta",
    "lab": "Manage config as code"
   },
   {
    "name": "Architecture",
    "topics": "Multi-org design, hub-and-spoke, migration from other IdPs",
    "lab": "Design for a sample client"
   }
  ],
  "capstone": "Org with AD, SSO, MFA policies, provisioning and a Workflows leaver"
 },
 {
  "slug": "onelogin",
  "title": "OneLogin",
  "tag": "ACCESS",
  "category": "Access management",
  "hours": 30,
  "free": false,
  "scope": "SSO, MFA, provisioning",
  "tagline": "SSO and MFA, sensibly mapped.",
  "intro": "OneLogin workforce access management.",
  "lab": "Vendor trial or developer tenant",
  "modules": [
   {
    "name": "OneLogin overview",
    "topics": "Account setup, admin console, admin privileges",
    "lab": "Tour of an account"
   },
   {
    "name": "Users, roles & groups",
    "topics": "Users, roles, groups, custom user fields",
    "lab": "Create users and roles"
   },
   {
    "name": "SSO basics",
    "topics": "App catalog, SAML and OIDC apps, portal",
    "lab": "Add SSO for a SaaS app"
   },
   {
    "name": "Directory integration",
    "topics": "AD connector, LDAP, HR sources",
    "lab": "Sync users from AD"
   },
   {
    "name": "Authentication",
    "topics": "User policies, MFA factors, SmartFactor authentication",
    "lab": "Enforce MFA by risk"
   },
   {
    "name": "Mappings & rules",
    "topics": "User mappings, app rules for role and attribute assignment",
    "lab": "Assign apps by department"
   },
   {
    "name": "Provisioning",
    "topics": "SCIM and built-in provisioning, deprovisioning actions",
    "lab": "Provision to a SaaS app"
   },
   {
    "name": "Custom apps & APIs",
    "topics": "Custom SAML/OIDC connectors, OneLogin API",
    "lab": "Integrate a custom app"
   },
   {
    "name": "Monitoring",
    "topics": "Events, reports, troubleshooting sign-ins",
    "lab": "Investigate a failed login"
   }
  ],
  "capstone": "Account with AD, SSO, MFA policies and provisioning"
 },
 {
  "slug": "ping-identity",
  "title": "Ping Identity",
  "tag": "ACCESS",
  "category": "Access management",
  "hours": 30,
  "free": false,
  "scope": "PingFederate, PingAccess, PingOne, DaVinci",
  "tagline": "Federation for grown-ups.",
  "intro": "Ping's software products (PingFederate, PingAccess, PingDirectory) and its cloud platform (PingOne, DaVinci).",
  "lab": "PingOne trial plus lab virtual machines",
  "modules": [
   {
    "name": "Ping overview",
    "topics": "Product portfolio, software vs PingOne cloud, federation concepts",
    "lab": "Tour of PingOne"
   },
   {
    "name": "Federation basics",
    "topics": "SAML, OAuth 2.0, OpenID Connect, tokens and claims",
    "lab": "Decode SAML and JWT tokens"
   },
   {
    "name": "PingOne basics",
    "topics": "Environments, users, populations, applications",
    "lab": "Add SSO for an app in PingOne"
   },
   {
    "name": "PingFederate setup",
    "topics": "Installation, clustering, data stores, adapters",
    "lab": "Install a PingFederate cluster"
   },
   {
    "name": "SSO connections",
    "topics": "SP and IdP connections, attribute contracts, authentication policies",
    "lab": "Federate with a SaaS app"
   },
   {
    "name": "OAuth & OIDC in PingFederate",
    "topics": "Clients, grant types, access token management, scopes",
    "lab": "Protect an API with OAuth"
   },
   {
    "name": "PingAccess",
    "topics": "Web and API access, policies, agents vs gateway",
    "lab": "Protect a legacy web app"
   },
   {
    "name": "PingDirectory",
    "topics": "Directory setup, schema, replication, data sync",
    "lab": "Sync users into PingDirectory"
   },
   {
    "name": "PingOne MFA & risk",
    "topics": "MFA policies, PingOne Protect risk signals",
    "lab": "Add risk-based MFA"
   },
   {
    "name": "DaVinci orchestration",
    "topics": "Flows, connectors, registration and login journeys",
    "lab": "Build a passwordless login flow"
   },
   {
    "name": "Customer identity (CIAM)",
    "topics": "Registration, progressive profiling, consent, social login",
    "lab": "Build a customer sign-up journey"
   },
   {
    "name": "Operations & DevOps",
    "topics": "Configuration as code, Ping DevOps images, upgrades, monitoring",
    "lab": "Deploy PingFederate with containers"
   },
   {
    "name": "Architecture",
    "topics": "Hybrid design, migration to PingOne, high availability",
    "lab": "Design for a sample client"
   }
  ],
  "capstone": "Workforce SSO plus customer login journey with MFA"
 },
 {
  "slug": "cyberark",
  "title": "CyberArk",
  "tag": "PAM",
  "category": "PAM",
  "hours": 30,
  "free": false,
  "scope": "Privilege Cloud / PAM Self-Hosted, Secrets Manager, EPM",
  "tagline": "Vault it, rotate it, record it.",
  "intro": "CyberArk privileged access management, self-hosted and Privilege Cloud, plus secrets and endpoint privilege. The content is aligned to the topics of CyberArk's Defender and Sentry exams.",
  "lab": "Prepared lab virtual machines (subject to vendor licence terms)",
  "modules": [
   {
    "name": "PAM fundamentals",
    "topics": "Privileged accounts, risks, CyberArk portfolio, PAM Self-Hosted vs Privilege Cloud",
    "lab": "Tour of the PVWA"
   },
   {
    "name": "Components",
    "topics": "Vault, PVWA, CPM, PSM, PSM for SSH, connectors",
    "lab": "Map components in a lab"
   },
   {
    "name": "Using the vault",
    "topics": "Safes, accounts, checking out passwords, connecting via PSM",
    "lab": "Connect to a server via PSM"
   },
   {
    "name": "Installation",
    "topics": "Vault hardening, component installation, Privilege Cloud connectors",
    "lab": "Install CPM and PSM"
   },
   {
    "name": "Safes & permissions",
    "topics": "Safe design, members, permissions, dual control, exclusive access",
    "lab": "Build a safe model"
   },
   {
    "name": "Platforms & rotation",
    "topics": "Platform settings, password policies, reconciliation, dependencies",
    "lab": "Rotate a Windows service account"
   },
   {
    "name": "Session management",
    "topics": "PSM connection components, recordings, session monitoring",
    "lab": "Review a recorded session"
   },
   {
    "name": "Account discovery",
    "topics": "Discovery and onboarding rules, accounts feed",
    "lab": "Onboard discovered accounts"
   },
   {
    "name": "Integrations",
    "topics": "LDAP/AD, SAML SSO, SIEM, ticketing, IGA integration",
    "lab": "Send audit events to a SIEM"
   },
   {
    "name": "Secrets management",
    "topics": "Conjur / Secrets Manager, Credential Providers, removing hard-coded secrets",
    "lab": "Secure an app's database password"
   },
   {
    "name": "Endpoint Privilege Manager",
    "topics": "Least privilege on endpoints, policies, application control",
    "lab": "Remove local admin rights"
   },
   {
    "name": "High availability & DR",
    "topics": "Vault clustering, DR vault, backup and recovery",
    "lab": "Fail over to DR"
   },
   {
    "name": "Architecture & program",
    "topics": "PAM program design, onboarding roadmap, tiering with AD and Entra ID",
    "lab": "Design for a sample client"
   }
  ],
  "capstone": "Safe model, rotation, PSM and secrets for a sample company"
 },
 {
  "slug": "beyondtrust",
  "title": "BeyondTrust",
  "tag": "PAM",
  "category": "PAM",
  "hours": 30,
  "free": false,
  "scope": "Password Safe, Privileged Remote Access, Endpoint Privilege Management",
  "tagline": "Least privilege, enforced at the endpoint.",
  "intro": "BeyondTrust's main PAM products: Password Safe, Privileged Remote Access and Endpoint Privilege Management.",
  "lab": "Prepared lab virtual machines (subject to vendor licence terms)",
  "modules": [
   {
    "name": "PAM fundamentals",
    "topics": "Privileged access risks, BeyondTrust portfolio, cloud vs on-premises",
    "lab": "Tour of the consoles"
   },
   {
    "name": "Password Safe basics",
    "topics": "Managed systems, managed accounts, requests, session access",
    "lab": "Request and use a privileged account"
   },
   {
    "name": "Remote access basics",
    "topics": "Privileged Remote Access, Jump clients, vendor access",
    "lab": "Connect a vendor via a Jump client"
   },
   {
    "name": "Password Safe setup",
    "topics": "Deployment, discovery scans, functional accounts, password policies",
    "lab": "Discover and onboard accounts"
   },
   {
    "name": "Access policies",
    "topics": "Smart rules, access policies, approvals, dual control",
    "lab": "Build an approval policy"
   },
   {
    "name": "Session management",
    "topics": "Session proxy, recordings, keystroke logging, monitoring",
    "lab": "Review a recorded session"
   },
   {
    "name": "Privileged Remote Access setup",
    "topics": "Jump groups, jump items, session policies, vendor onboarding",
    "lab": "Set up vendor access with approval"
   },
   {
    "name": "Endpoint Privilege Management",
    "topics": "Windows and macOS policies, application rules, removing local admin",
    "lab": "Remove local admin with app elevation"
   },
   {
    "name": "Integrations",
    "topics": "AD, SAML, SIEM, ticketing, APIs",
    "lab": "Send events to a SIEM"
   },
   {
    "name": "Secrets & DevOps",
    "topics": "Secrets Safe, API registrations, application-to-application passwords",
    "lab": "Replace a hard-coded password"
   },
   {
    "name": "Identity security analytics",
    "topics": "Identity Security Insights, detecting privilege risks",
    "lab": "Review identity threat findings"
   },
   {
    "name": "Architecture & program",
    "topics": "HA design, PAM roadmap, integration with IGA",
    "lab": "Design for a sample client"
   }
  ],
  "capstone": "Password Safe, remote vendor access and EPM for a sample company"
 }
];

export const GROUPS = [
 {
  "title": "Start here",
  "text": "Vendor-neutral. The concepts every platform course builds on.",
  "slugs": [
   "iam-fundamentals"
  ]
 },
 {
  "title": "Identity governance & administration",
  "text": "Lifecycle, roles, requests and certifications.",
  "slugs": [
   "one-identity-manager",
   "sailpoint",
   "omada",
   "saviynt"
  ]
 },
 {
  "title": "SAP identity",
  "text": "Where business roles meet ERP authorizations.",
  "slugs": [
   "sap-identity-authorizations",
   "sap-cloud-identity-services"
  ]
 },
 {
  "title": "Access management & directories",
  "text": "Single sign-on, authentication and the directories everything depends on.",
  "slugs": [
   "microsoft-entra-id",
   "active-directory",
   "okta",
   "onelogin",
   "ping-identity"
  ]
 },
 {
  "title": "Privileged access management",
  "text": "Control over the accounts that can do the most damage.",
  "slugs": [
   "cyberark",
   "beyondtrust"
  ]
 }
];

export const PATHS = [
 {
  "name": "IGA Track",
  "tag": "IGA",
  "text": "Identity governance from directory basics to a full IGA platform: lifecycle, roles, requests and certifications.",
  "steps": [
   "iam-fundamentals",
   "active-directory",
   "one-identity-manager|sailpoint|omada|saviynt"
  ]
 },
 {
  "name": "SAP Security Track",
  "tag": "SAP",
  "text": "SAP authorizations on-premises and in the cloud, from PFCG roles to GRC and BTP.",
  "steps": [
   "iam-fundamentals",
   "sap-identity-authorizations",
   "sap-cloud-identity-services"
  ]
 },
 {
  "name": "Access Management Track",
  "tag": "ACCESS",
  "text": "Single sign-on, MFA, federation and provisioning across cloud identity providers.",
  "steps": [
   "iam-fundamentals",
   "microsoft-entra-id",
   "okta|onelogin|ping-identity"
  ]
 },
 {
  "name": "PAM Track",
  "tag": "PAM",
  "text": "Privileged accounts, vaults, session recording and secrets, on top of a hardened directory.",
  "steps": [
   "iam-fundamentals",
   "active-directory",
   "cyberark|beyondtrust"
  ]
 }
];

export const bySlug = (slug) => COURSES.find((c) => c.slug === slug);
export const SITE = 'https://iamnerds.io';
export const WHATSAPP = '919703330367';
export const EMAIL = 'hello@iamnerds.io';

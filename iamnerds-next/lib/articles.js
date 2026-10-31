// Blog articles. Each answer is plain text; keep answers short and interview-ready.

export const ARTICLES = [
  {
    slug: 'sailpoint-interview-questions',
    title: 'SailPoint Interview Questions and Answers (IdentityIQ & Identity Security Cloud)',
    short: 'SailPoint interview questions',
    description: '20 SailPoint interview questions with clear answers on IdentityIQ and Identity Security Cloud: aggregation, correlation, roles, certifications, rules, transforms and troubleshooting.',
    date: '2026-11-01',
    course: 'sailpoint',
    tag: 'IGA',
    intro: [
      'SailPoint interviews usually test three things: whether you understand identity governance concepts, whether you have configured IdentityIQ (IIQ) or Identity Security Cloud (ISC) yourself, and how you troubleshoot when provisioning goes wrong.',
      'These are the questions we see most often, grouped from fundamentals to scenarios. Practise answering them out loud with an example from your own work.',
    ],
    sections: [
      {
        title: 'Fundamentals',
        qa: [
          ['What is the difference between IdentityIQ and Identity Security Cloud?', 'IdentityIQ is installed and run by the customer (on-premises or in their own cloud) and is customised with Java, BeanShell rules and workflows. Identity Security Cloud is SailPoint\'s multi-tenant SaaS: it reaches on-premises systems through a Virtual Appliance, and is configured mainly through the UI, transforms, workflows and REST APIs. Code-level customisation in ISC is limited to cloud rules, which SailPoint reviews before deployment.'],
          ['What is an authoritative source?', 'The trusted source of identity data, usually the HR system. Accounts from an authoritative source create and update identities, while other sources only add accounts to existing identities.'],
          ['What is aggregation?', 'Reading accounts, entitlements and groups from a connected source into SailPoint. Account aggregation brings in accounts; group (entitlement) aggregation brings in groups and their attributes. Delta aggregation reads only changes since the last run, where the connector supports it.'],
          ['What is correlation?', 'Linking an aggregated account to the identity that owns it, for example by matching employee ID or email. Accounts that cannot be matched stay uncorrelated and need a correlation rule fix or manual correlation.'],
          ['What is the Identity Cube in IdentityIQ?', 'The identity object that holds everything SailPoint knows about a person: identity attributes, linked accounts, entitlements, roles, policy violations and history.'],
        ],
      },
      {
        title: 'Lifecycle, roles and access',
        qa: [
          ['How do joiner, mover and leaver processes work?', 'They are triggered by changes in identity data. In IdentityIQ, lifecycle events fire when an identity is created or an attribute changes and start a workflow. In Identity Security Cloud, the identity profile calculates a lifecycle state (for example active or inactive) that drives which access profiles are assigned and which accounts are enabled or disabled.'],
          ['What does an identity refresh do in IdentityIQ?', 'It recalculates identity attributes, assigns or removes roles based on assignment rules, checks policies, refreshes entitlement data and can trigger lifecycle events and provisioning, depending on the task options.'],
          ['Business roles vs IT roles?', 'An IT role groups the technical entitlements needed for a job function. A business role describes the job in business terms, is assigned to people by rules or requests, and requires or permits IT roles. Separating them keeps the business view stable while technical access changes.'],
          ['What is an access profile in Identity Security Cloud?', 'A bundle of entitlements from a single source that can be requested or assigned. Roles in ISC group access profiles (and entitlements) across sources.'],
          ['What is a provisioning policy?', 'A form that defines how attributes are set when SailPoint creates or updates an account, for example how the username and initial OU are generated.'],
        ],
      },
      {
        title: 'Certifications and policies',
        qa: [
          ['Which certification types have you configured?', 'Common ones are manager certifications, targeted certifications for a specific application or entitlement, entitlement owner certifications and role composition certifications. Mention scheduling, reminders, escalation and how revocations are remediated.'],
          ['What happens when a reviewer revokes access?', 'The revocation creates a remediation request. SailPoint provisions the removal through the connector, or creates a work item for manual fulfilment when the source is not connected, and the next aggregation confirms that the access is gone.'],
          ['How do separation of duties (SoD) policies work?', 'A policy defines conflicting entitlements or roles. Detective checks find violations on existing identities; preventive checks flag or block conflicting requests before approval. Violations can be remediated or allowed with a time-bound exception.'],
        ],
      },
      {
        title: 'Configuration and customisation',
        qa: [
          ['Which IdentityIQ rule types have you written?', 'Typical examples are BuildMap and Customization rules during aggregation, Correlation rules, Creation rules for new identities, Before and After Provisioning rules, and field value rules in provisioning policies. Be ready to explain one rule you wrote and why.'],
          ['What are transforms in Identity Security Cloud?', 'JSON-defined operations that calculate identity attributes from source data, such as lower, concat, dateFormat, firstValid and lookup. They replace much of the custom code that IdentityIQ needs for the same job.'],
          ['What are the Virtual Appliance and IQService?', 'The Virtual Appliance runs in the customer network and lets Identity Security Cloud connect to on-premises sources. IQService is a Windows service that both products use for Active Directory tasks the connector cannot do alone, such as setting passwords or running native Windows scripts.'],
          ['How do you move configuration between environments?', 'In IdentityIQ, with the Services Standard Build (SSB) or exported XML objects, plus environment-specific property files. In Identity Security Cloud, with configuration export and import through the APIs or the SailPoint CLI, ideally from source control.'],
        ],
      },
      {
        title: 'Troubleshooting scenarios',
        qa: [
          ['A leaver still has an active account. How do you investigate?', 'Check that the HR change reached SailPoint (last aggregation), that the identity attribute and lifecycle state changed, that the leaver event or state triggered, then look at the provisioning transaction and connector errors. Finally confirm whether the account is correlated to that identity at all.'],
          ['Aggregation has become slow. What do you check?', 'Compare the number of accounts with earlier runs, check for heavy customization rules, use delta aggregation and partitioning where the connector supports them, review task server resources, and look at connector logs or source response times.'],
          ['Where do you look first when something fails?', 'In IdentityIQ: task results, provisioning transactions, the debug pages and the log4j2 logs. In Identity Security Cloud: Search and account activity, source health, and the Virtual Appliance logs.'],
        ],
      },
    ],
  },
  {
    slug: 'one-identity-manager-interview-questions',
    title: 'One Identity Manager Interview Questions and Answers',
    short: 'One Identity Manager interview questions',
    description: '17 One Identity Manager interview questions with clear answers: architecture, DBQueue vs Job queue, account definitions, synchronization, IT Shop, attestation, processes and performance.',
    date: '2026-11-01',
    course: 'one-identity-manager',
    tag: 'IGA',
    intro: [
      'One Identity Manager interviews go deep quickly. Expect questions on the architecture, how the database and Job servers work together, and how you customise the product without breaking upgrades.',
      'These questions follow the order an interviewer usually takes, from architecture to troubleshooting. Back each answer with a project example.',
    ],
    sections: [
      {
        title: 'Architecture',
        qa: [
          ['Describe the One Identity Manager architecture.', 'A central SQL Server database holds the data model, configuration and business logic. Job servers run the One Identity Manager Service, which executes process steps such as provisioning and synchronization. The Application Server and API Server give clients and the Web Portal access to the database. Administrators work with Launchpad, Manager, Designer and the Synchronization Editor.'],
          ['What is the difference between the DBQueue and the Job queue?', 'The DBQueue holds calculation tasks that the database itself processes, such as inheritance, dynamic role membership and rights calculation. The Job queue holds process steps generated by events, which Job servers pick up and execute, for example creating an account in Active Directory.'],
          ['What do you use Designer for, and what do you use Manager for?', 'Designer is for customisation and system configuration: schema extensions, templates, scripts, processes and configuration parameters. Manager is for day-to-day administration of identities, accounts, roles, IT Shop and attestation.'],
        ],
      },
      {
        title: 'Identities, accounts and roles',
        qa: [
          ['What is the difference between an identity and a user account?', 'An identity (Person) represents the real person. User accounts live in target systems, such as Active Directory or SAP, and are linked to the identity that owns them.'],
          ['What are account definitions and manage levels?', 'An account definition controls whether and how an identity automatically gets an account in a target system. Its manage levels decide how strongly the account follows the identity, for example only linked (unmanaged) or with attributes fully inherited from the identity.'],
          ['How does inheritance work through business roles, departments and cost centres?', 'Entitlements such as groups are assigned to a role or organisation, and members inherit them. The database records how each assignment came about (direct, inherited or requested), so removing the source removes inherited access automatically.'],
          ['What is a dynamic role?', 'A rule, written as a condition on identity data, that calculates the members of a role or organisation automatically. The DBQueue recalculates membership when data changes.'],
        ],
      },
      {
        title: 'Synchronization and provisioning',
        qa: [
          ['How do you build a synchronization project?', 'In the Synchronization Editor: create the connection to the target system, select the schema classes, define property mappings and object matching rules, configure synchronization workflows and the start-up configuration (schedule), and set up revision filtering where the connector supports it.'],
          ['How does a change in One Identity Manager reach the target system?', 'A database change fires an event, the event generates a process, and the process steps land in the Job queue. A Job server executes them through the target system connector and reports the result back.'],
          ['What is the difference between synchronization and provisioning?', 'Synchronization reads data from the target system into One Identity Manager, typically on a schedule. Provisioning writes single changes from One Identity Manager to the target system as they happen, through processes.'],
        ],
      },
      {
        title: 'IT Shop, attestation and compliance',
        qa: [
          ['Explain the IT Shop structure.', 'Shops contain shelves; shelves contain requestable products (service items) linked to roles, groups or other resources. Customer nodes define who may request. Approval policies with approval workflows decide who approves each request.'],
          ['How does attestation work?', 'An attestation policy defines which objects are reviewed, by whom (through an approval workflow) and on what schedule. Attestors approve or deny; denied assignments can be removed automatically.'],
          ['What are compliance rules?', 'Rules that describe forbidden combinations or states, for example toxic entitlement combinations (SoD). One Identity Manager finds violations, assigns risk and lets you approve exceptions or remove the access.'],
        ],
      },
      {
        title: 'Customisation and operations',
        qa: [
          ['How do you customise without breaking upgrades?', 'Use the customer prefix (CCC) for custom columns, tables, scripts and processes, prefer templates and configuration over changing product objects, and keep every change in a transport package with change labels.'],
          ['Templates, formatting rules and scripts: what is the difference?', 'A template calculates a column value from other values, for example building a username. A formatting rule validates the value that is entered. Scripts (VB.NET in the script library) hold reusable logic called from templates, processes and events.'],
          ['How do you move changes between environments?', 'With the Database Transporter, using transport packages that collect changes by change label, and a documented order for importing them into test and production.'],
          ['Provisioning is slow. Where do you start?', 'Check the Job queue for frozen or failed jobs, the DBQueue backlog, Job server load and slot configuration, long-running process steps and target system response times, then review heavy custom scripts and SQL with the database administrator.'],
        ],
      },
    ],
  },
  {
    slug: 'sap-cloud-identity-services-interview-questions',
    title: 'SAP Cloud Identity Services Interview Questions and Answers',
    short: 'SAP Cloud Identity Services interview questions',
    description: '16 SAP Cloud Identity Services interview questions with clear answers: Identity Authentication, Identity Provisioning, BTP trust, corporate IdPs, risk-based authentication and troubleshooting.',
    date: '2026-11-01',
    course: 'sap-cloud-identity-services',
    tag: 'SAP',
    intro: [
      'SAP Cloud Identity Services sit at the centre of every SAP BTP and SAP cloud landscape, so interviews for SAP security and IAM roles increasingly cover them. Expect questions on how Identity Authentication and Identity Provisioning fit together, how trust with BTP works, and how you connect a corporate identity provider.',
      'These questions run from fundamentals to real troubleshooting scenarios. Answer with an example from a landscape you have configured.',
    ],
    sections: [
      {
        title: 'Fundamentals',
        qa: [
          ['What are SAP Cloud Identity Services?', 'A set of SAP BTP services for identity and access: Identity Authentication for sign-in and single sign-on, Identity Provisioning for moving users and groups between systems, the Identity Directory as the tenant\'s user store with a SCIM API, and Authorization Management for policy-based access. A customer usually has one productive and one test tenant.'],
          ['What is the difference between Identity Authentication and the SAP ID service?', 'The SAP ID service is SAP\'s own default identity provider for SAP users. Identity Authentication is your own tenant with your own users, branding, password and MFA policies, and is the recommended identity provider for your BTP subaccounts and SAP cloud applications.'],
          ['How do you connect a BTP subaccount to Identity Authentication?', 'In the subaccount\'s trust configuration, establish trust with the Identity Authentication tenant, preferably using OpenID Connect. Users then sign in through your tenant, and their groups can be mapped to BTP role collections.'],
        ],
      },
      {
        title: 'Authentication and single sign-on',
        qa: [
          ['What is proxy mode with a corporate identity provider?', 'Identity Authentication forwards sign-in to a corporate identity provider such as Microsoft Entra ID or Okta over SAML 2.0 or OpenID Connect, and passes the result on to the SAP application. Users keep one corporate login, while SAP applications only need to trust Identity Authentication.'],
          ['What is conditional authentication?', 'Rules that decide which identity provider authenticates a user, for example based on email domain, user type, group or IP range. It lets employees go to the corporate identity provider while partners sign in with Identity Authentication itself.'],
          ['How does risk-based authentication work?', 'Per application, you define rules on IP range, group, user type or authentication method, with an action such as allow, deny or require two-factor authentication. It is how you enforce MFA for administrators or for access from outside the company network.'],
          ['SAML 2.0 or OpenID Connect: which do you choose?', 'OpenID Connect is the default choice for BTP and newer applications because it is simpler and token-based. SAML 2.0 is still common for older SAP cloud applications and many corporate identity providers. Know how to read both a SAML assertion and an ID token when troubleshooting.'],
        ],
      },
      {
        title: 'Identity Provisioning',
        qa: [
          ['What are source, target and proxy systems?', 'A source system is where users are read from, such as SAP SuccessFactors or Microsoft Entra ID. A target system is where they are written to, such as the Identity Directory, SAP S/4HANA Cloud or BTP. A proxy system exposes an SAP system through a SCIM interface so that an external identity governance tool can read and write it through Identity Provisioning.'],
          ['What are transformations?', 'JSON mappings that define how attributes move from the source format to an intermediate format and from there to the target format. They are where you filter users, set default values, build usernames and map groups.'],
          ['How do provisioning jobs run?', 'Each source system has read jobs that run on a schedule or on demand and push changes to all connected targets. Delta read, where the source supports it, processes only changes since the last run, which keeps large landscapes fast.'],
          ['Describe a typical SuccessFactors-driven landscape.', 'SAP SuccessFactors is the source of employee data. Identity Provisioning creates users in the Identity Directory and in target systems such as SAP S/4HANA Cloud, while Identity Authentication, often proxying to Microsoft Entra ID, handles sign-in and single sign-on.'],
        ],
      },
      {
        title: 'Authorizations and architecture',
        qa: [
          ['How do users get authorizations in BTP?', 'Roles from applications are bundled into role collections. Role collections are assigned to users directly or, better, mapped to Identity Authentication groups through the trust configuration, so group membership drives access.'],
          ['What is the future of SAP Identity Management?', 'SAP has announced the end of maintenance for SAP Identity Management and recommends moving to SAP Cloud Identity Services combined with an identity governance solution, with Microsoft Entra ID Governance named as a preferred partner path. Be ready to discuss a migration plan.'],
          ['How do you connect an IGA platform to SAP cloud systems?', 'Either the IGA tool provisions directly into SAP Cloud Identity Services through the Identity Directory SCIM API, or it uses Identity Provisioning proxy systems to reach SAP targets. Either way, keep one clear owner for each user attribute.'],
        ],
      },
      {
        title: 'Troubleshooting scenarios',
        qa: [
          ['A user cannot sign in to a BTP application. How do you investigate?', 'Check that the user exists and is active in Identity Authentication, which identity provider conditional authentication sends them to, the trust configuration in the subaccount, the subject name identifier sent to the application, and whether their groups map to the right role collections. Identity Authentication troubleshooting logs and a SAML or OIDC trace usually show the gap.'],
          ['A provisioning job reports errors for some users. What do you check?', 'Open the job log in Identity Provisioning to find the failing entities and error messages, then check transformations for missing mandatory attributes, duplicate usernames or emails, and the target system\'s own logs or API limits.'],
        ],
      },
    ],
  },
  {
    slug: 'microsoft-entra-id-interview-questions',
    title: 'Microsoft Entra ID Interview Questions and Answers',
    short: 'Microsoft Entra ID interview questions',
    description: '20 Microsoft Entra ID interview questions with clear answers: hybrid identity, Conditional Access, PIM, Identity Protection, app registrations, managed identities and ID Governance.',
    date: '2026-11-01',
    course: 'microsoft-entra-id',
    tag: 'ACCESS',
    intro: [
      'Microsoft Entra ID is the identity platform behind Microsoft 365 and Azure, so almost every IAM interview touches it. Interviewers want to see that you can secure a tenant, connect it to Active Directory and applications, and govern privileged and guest access.',
      'These questions follow the usual order of an interview, from fundamentals to scenarios. Many overlap with the Microsoft SC-300 exam topics.',
    ],
    sections: [
      {
        title: 'Fundamentals and hybrid identity',
        qa: [
          ['How is Entra ID different from Active Directory Domain Services?', 'AD DS is an on-premises directory using Kerberos, NTLM, LDAP, OUs and Group Policy. Entra ID is a cloud identity service using modern protocols such as OAuth 2.0, OpenID Connect and SAML, with a flat structure and no Group Policy. Most organisations run both and synchronise them.'],
          ['Entra Connect Sync or Entra Cloud Sync?', 'Entra Connect Sync is the full synchronisation engine installed on a server, with rich customisation and support for more complex scenarios. Cloud Sync uses lightweight agents managed from the cloud, supports multiple disconnected forests and is simpler to run. Choose based on the features you need, such as device writeback or complex attribute flows.'],
          ['Password hash sync, pass-through authentication or federation?', 'Password hash sync stores a hash of the password hash in Entra ID and is the simplest and most resilient option. Pass-through authentication validates passwords against on-premises AD through agents. Federation hands authentication to an on-premises service such as AD FS. Microsoft recommends password hash sync, even if only as a backup.'],
          ['What are dynamic groups?', 'Groups whose membership is calculated from user or device attributes, for example department equals Finance. They automate access assignment but need clean source data.'],
        ],
      },
      {
        title: 'Conditional Access and authentication',
        qa: [
          ['How does Conditional Access work?', 'Policies combine assignments (users, applications, actions) and conditions (location, device platform, sign-in risk, client app) with grant controls such as requiring MFA, a compliant device or an authentication strength, and session controls such as sign-in frequency. Everything is evaluated after first-factor authentication.'],
          ['Security defaults or Conditional Access?', 'Security defaults are a free, fixed baseline that enforces MFA registration and blocks legacy authentication. Conditional Access, which requires Entra ID P1, gives fine-grained control. You turn security defaults off when you move to Conditional Access.'],
          ['How do you roll out Conditional Access safely?', 'Start policies in report-only mode, exclude emergency access accounts, use the What If tool and sign-in logs to check impact, then enable in stages, beginning with administrators.'],
          ['What are passwordless options in Entra ID?', 'FIDO2 security keys and passkeys, Windows Hello for Business, and the Microsoft Authenticator app. Authentication strengths let Conditional Access require phishing-resistant methods for sensitive applications or administrators.'],
          ['What are emergency access accounts?', 'Two or more cloud-only accounts with Global Administrator rights, excluded from Conditional Access policies that could lock everyone out, protected with strong credentials, and monitored with alerts on every sign-in.'],
        ],
      },
      {
        title: 'Privileged access and protection',
        qa: [
          ['What is Privileged Identity Management (PIM)?', 'PIM makes administrative roles eligible instead of permanently active. Users activate a role for a limited time, with MFA, a justification and optional approval, and every activation is audited. PIM for Groups extends this to group membership. It requires Entra ID P2 or ID Governance licensing.'],
          ['What does Identity Protection do?', 'It calculates user risk, such as leaked credentials, and sign-in risk, such as unfamiliar locations or anonymous IP addresses. Risk-based Conditional Access policies can then require MFA or a secure password change.'],
          ['How do you keep admin roles least-privilege?', 'Minimise Global Administrators, use specific built-in roles, scope roles with administrative units, make them eligible through PIM, and review assignments regularly with access reviews.'],
        ],
      },
      {
        title: 'Applications and workload identities',
        qa: [
          ['App registration vs enterprise application?', 'An app registration is the global definition of an application in its home tenant. The enterprise application is its service principal, the local instance in a tenant where users are assigned, single sign-on is configured and consent is granted.'],
          ['What are managed identities?', 'Identities that Azure manages for Azure resources, so code can call other services without storing secrets. System-assigned identities live and die with one resource; user-assigned identities are separate resources that several resources can share.'],
          ['What is workload identity federation?', 'A way for workloads outside Azure, such as GitHub Actions or Kubernetes, to exchange their own token for an Entra ID token, removing long-lived client secrets and certificates.'],
          ['How does user and admin consent work?', 'Applications request permissions. Users can consent to low-risk delegated permissions if the tenant allows it; admin consent is needed for higher-risk and application permissions. Restricting user consent and using an admin consent workflow is a common hardening step.'],
        ],
      },
      {
        title: 'Governance and scenarios',
        qa: [
          ['What is entitlement management?', 'Access packages bundle groups, applications and SharePoint sites with policies for who can request them, approval, expiry and access reviews. They are especially useful for onboarding external partners.'],
          ['What are lifecycle workflows?', 'Microsoft Entra ID Governance workflows that automate joiner, mover and leaver tasks, such as generating a Temporary Access Pass for new hires or removing access on the last day, triggered by attributes like employee hire and leave dates.'],
          ['A user says they are blocked when signing in. How do you investigate?', 'Open the sign-in logs for that attempt, check the error code and the Conditional Access tab to see which policy applied and why, use the What If tool to test changes, and confirm the user\'s authentication methods and risk state.'],
          ['B2B collaboration or External ID for customers?', 'B2B collaboration invites partner users as guests into your workforce tenant to work with your resources. Entra External ID for customers is a separate configuration for consumer-facing applications with self-service sign-up and branding.'],
        ],
      },
    ],
  },
  {
    slug: 'okta-interview-questions',
    title: 'Okta Interview Questions and Answers (Workforce Identity)',
    short: 'Okta interview questions',
    description: '16 Okta interview questions with clear answers: Universal Directory, SSO, Lifecycle Management, authentication policies, FastPass, Okta Workflows and troubleshooting.',
    date: '2026-11-01',
    course: 'okta',
    tag: 'ACCESS',
    intro: [
      'Okta interviews focus on how you run a workforce identity platform day to day: directories and profile mastering, single sign-on, provisioning and the policies that decide how people authenticate.',
      'Answer with a concrete example: an application you integrated, a policy you designed or an incident you fixed.',
    ],
    sections: [
      { title: 'Fundamentals', qa: [
        ['What is Universal Directory?', 'Okta\'s user store. It holds Okta user profiles and the profiles of connected applications and directories, with profile mappings that define how attributes flow between them.'],
        ['Okta Workforce Identity vs Customer Identity?', 'Workforce Identity secures employees, contractors and partners signing in to business applications. Customer Identity (built on Auth0) is for customer-facing applications, with self-service registration and developer-focused APIs.'],
        ['SAML or OpenID Connect for a new application?', 'Prefer OpenID Connect for modern web and mobile applications and APIs; it is token-based and simpler. Use SAML when the application only supports SAML, which is still common for enterprise SaaS.'],
        ['What is attribute mastering?', 'Deciding which source owns each user attribute, for example HR for job title and Active Directory for the username. Profile sources and mappings in Okta enforce it so values are not overwritten by the wrong system.'],
      ]},
      { title: 'Directories and lifecycle', qa: [
        ['How does Okta integrate with Active Directory?', 'Through lightweight AD agents installed on domain-joined servers. They import users and groups, can push changes back, and support delegated authentication so users sign in with their AD password.'],
        ['What does Lifecycle Management do?', 'It automates provisioning and deprovisioning to applications, usually over SCIM: creating accounts when users are assigned, updating attributes, and deactivating accounts when users are unassigned or leave.'],
        ['What are group rules?', 'Rules that add users to groups automatically based on profile attributes, such as department or location. Combined with group-based application assignment, they give people the right apps without manual work.'],
        ['How would you design HR-driven provisioning?', 'Make the HR system (for example Workday) the profile source, import new hires before their start date, use group rules for birthright access, push accounts to AD and SaaS apps, and deactivate on the termination date.'],
      ]},
      { title: 'Authentication and security', qa: [
        ['Global session policy vs authentication policies?', 'The global session policy controls how users establish an Okta session and which factors are needed for that. Authentication policies (app sign-in policies) set requirements per application, such as phishing-resistant authentication for admin consoles.'],
        ['What is Okta FastPass?', 'A passwordless, phishing-resistant authenticator built into Okta Verify. It uses device-bound keys and can check device posture before granting access.'],
        ['What is ThreatInsight?', 'An Okta feature that detects credential-based attacks, such as password spraying from suspicious IP addresses, and can log or block those requests before authentication.'],
      ]},
      { title: 'Automation and governance', qa: [
        ['What can you build with Okta Workflows?', 'No-code automations triggered by Okta events or schedules, such as a leaver workflow that suspends accounts, transfers files and notifies the manager, using connectors to other systems.'],
        ['Inline hooks vs event hooks?', 'Inline hooks call your service during an Okta process and can change the outcome, for example to add claims to a token. Event hooks notify your service after something happened, without changing the process.'],
        ['How do you manage Okta configuration as code?', 'With the Okta Terraform provider and the management APIs, using OAuth service applications with scoped permissions instead of long-lived API tokens.'],
      ]},
      { title: 'Troubleshooting scenarios', qa: [
        ['A user cannot sign in to a SAML application. What do you check?', 'Search the System Log for the user and application, check assignment and the sign-on policy result, then compare the SAML assertion (captured with a SAML tracer) with what the application expects: NameID format, audience, ACS URL and certificate.'],
        ['A leaver still has an active SaaS account. How do you investigate?', 'Confirm the user was deactivated in Okta, check that provisioning (deactivate users) is enabled for that application, look for failed provisioning tasks in the System Log, and verify the account was linked to the Okta user in the first place.'],
      ]},
    ],
  },
  {
    slug: 'cyberark-interview-questions',
    title: 'CyberArk Interview Questions and Answers (PAM)',
    short: 'CyberArk interview questions',
    description: '16 CyberArk interview questions with clear answers: Vault, PVWA, CPM, PSM, safes, platforms, reconciliation, Privilege Cloud, Secrets Manager and troubleshooting.',
    date: '2026-11-01',
    course: 'cyberark',
    tag: 'PAM',
    intro: [
      'CyberArk interviews check whether you understand the components, can design a safe model and can keep password rotation and session management running in production.',
      'Expect at least one troubleshooting question about a failed password change. Practise explaining the CPM workflow step by step.',
    ],
    sections: [
      { title: 'Architecture', qa: [
        ['Name the core CyberArk PAM components.', 'The Vault (secure storage), PVWA (web interface), CPM (Central Policy Manager, which verifies and changes passwords), PSM (Privileged Session Manager for isolated, recorded sessions) and PSM for SSH (PSMP) for Unix sessions.'],
        ['PAM Self-Hosted vs Privilege Cloud?', 'With PAM Self-Hosted you install and run the Vault and all components. With Privilege Cloud, CyberArk runs the Vault and core services as SaaS, while you run connector components (such as CPM and PSM) in your network to reach target systems.'],
        ['Why is the Vault so hardened?', 'It holds every privileged credential. It runs on a dedicated server with its own firewall, minimal services and no domain membership, and only CyberArk components and authorised users connect to it.'],
      ]},
      { title: 'Safes, platforms and policies', qa: [
        ['How do you design safes?', 'Group accounts by ownership and access needs, for example per team, platform and environment, so permissions can be granted per safe. Avoid one huge safe; keep naming consistent and document who owns each safe.'],
        ['What is a platform?', 'A template that defines how CyberArk manages a type of account: password policy, change and verify intervals, connection components and plug-ins. Accounts inherit settings from their platform.'],
        ['What is the Master Policy?', 'The global set of rules for privileged access, such as dual control, exclusive access, one-time passwords and session recording, with exceptions defined per platform.'],
        ['Explain dual control, exclusive access and one-time passwords.', 'Dual control requires approval before a password is used. Exclusive access lets only one user check out an account at a time. One-time passwords trigger a password change after each use, so a retrieved password never stays valid.'],
      ]},
      { title: 'Password management and sessions', qa: [
        ['Verify, change and reconcile: what is the difference?', 'Verify checks that the password stored in the Vault works on the target. Change sets a new password. Reconcile uses a separate reconcile account to reset the password when the stored one no longer works.'],
        ['How does PSM protect sessions?', 'Users connect through PSM without ever seeing the password. PSM injects the credential, isolates the target from the user\'s workstation, and records the session for audit and live monitoring.'],
        ['How do you onboard accounts at scale?', 'Use account discovery to find privileged accounts on servers and in directories, then onboarding rules that assign discovered accounts to the right safe and platform automatically.'],
      ]},
      { title: 'Secrets and endpoints', qa: [
        ['How do you remove hard-coded passwords from applications?', 'Use CyberArk Secrets Manager: Conjur for cloud-native and DevOps workloads, and Credential Providers for traditional applications, so applications fetch credentials at runtime instead of storing them in code or config files.'],
        ['What does Endpoint Privilege Manager do?', 'It removes local administrator rights from workstations and servers, elevates specific trusted applications when needed, and controls which applications can run.'],
        ['How do you protect against a Vault outage?', 'With a Disaster Recovery Vault that replicates from the primary, Vault high availability where required, regular backups, and tested failover procedures.'],
      ]},
      { title: 'Troubleshooting scenarios', qa: [
        ['A CPM password change keeps failing. How do you troubleshoot?', 'Read the error on the account in PVWA, then the CPM logs for that account. Check network access from the CPM to the target, the platform settings and password policy, whether the stored password is still valid, and whether a reconcile account is configured. Fix the cause before triggering a reconcile.'],
        ['Users cannot connect through PSM. What do you check?', 'Check the PSM server health and connection component used by the platform, the user\'s safe permissions, the target\'s reachability from the PSM server, and the session error details in PVWA and the PSM logs.'],
        ['How do you prepare for a CyberArk audit?', 'Show which accounts are onboarded and rotated, safe permissions and owners, session recordings for sensitive systems, and reports on accounts that failed verification or were used outside policy.'],
      ]},
    ],
  },
  {
    slug: 'saviynt-interview-questions',
    title: 'Saviynt Interview Questions and Answers (Enterprise Identity Cloud)',
    short: 'Saviynt interview questions',
    description: '14 Saviynt interview questions with clear answers: security systems, endpoints, connections, import jobs, rules, ARS, workflows, roles, campaigns, SoD and troubleshooting.',
    date: '2026-11-01',
    course: 'saviynt',
    tag: 'IGA',
    intro: [
      'Saviynt interviews test whether you can connect applications, automate the identity lifecycle with rules and run access governance in Saviynt Enterprise Identity Cloud (EIC).',
      'Use the product\'s own terms in your answers, such as security system, endpoint and connection, and support them with a project example.',
    ],
    sections: [
      { title: 'Fundamentals', qa: [
        ['What are a security system, an endpoint and a connection?', 'A security system represents an application in Saviynt. An endpoint is a specific instance or target within it where accounts and entitlements live. A connection holds the technical details the connector uses to reach the system, such as URLs, credentials and JSON configuration.'],
        ['How do users get into Saviynt?', 'Through user import jobs from an authoritative source such as an HR system or a file, which create and update users. Account and entitlement imports then bring in access from connected applications.'],
        ['What does an account import correlate?', 'It links imported accounts to existing users through a correlation configuration, typically on employee ID or username. Uncorrelated accounts are orphans that need review.'],
      ]},
      { title: 'Lifecycle and rules', qa: [
        ['What are user update rules and technical rules?', 'User update rules react to changes in user data, for example a department change, and can trigger actions. Technical rules assign birthright access such as accounts and entitlements based on user attributes.'],
        ['How do you implement joiner, mover and leaver?', 'Joiners get birthright access through technical rules after the HR import. Movers trigger user update rules that add new access and remove access no longer needed. Leavers are disabled or deprovisioned based on the HR termination status and date.'],
        ['What are pending tasks?', 'Provisioning tasks Saviynt has created but not yet completed, for example account creation waiting for a provisioning job or manual fulfilment. Monitoring them is part of daily operations.'],
      ]},
      { title: 'Requests, roles and reviews', qa: [
        ['What is ARS?', 'The Access Request System, where users request access, approvals run through configured workflows, and approved requests turn into provisioning tasks.'],
        ['Which workflow types have you built?', 'Serial, parallel and conditional approval workflows, for example manager approval followed by application owner approval, with escalations when approvers do not respond.'],
        ['Enterprise roles vs application roles?', 'Application roles bundle entitlements within one application. Enterprise roles span several applications and represent a job function. Both can be requested, assigned by rules and certified.'],
        ['Which campaigns have you run?', 'User manager campaigns, entitlement owner campaigns and role campaigns, with reminders, escalations and automatic revocation of rejected access.'],
      ]},
      { title: 'Compliance and troubleshooting', qa: [
        ['How does SoD work in Saviynt?', 'Rulesets define conflicting functions and the entitlements behind them. Saviynt detects violations in existing access and in requests, and violations can be remediated or accepted with mitigating controls. This is especially strong for SAP and ERP applications.'],
        ['Provisioning to an application fails. What do you check?', 'Test the connection, read the job and task logs for the failing tasks, check the connection JSON and the target API response, and confirm the account and attribute mappings. Then reprocess the pending tasks.'],
        ['How do you move configuration between environments?', 'With Saviynt\'s transport feature, which exports configuration objects such as connections, rules and workflows from one environment and imports them into the next, ideally with a documented change log.'],
        ['How do you report on access in Saviynt?', 'With analytics queries and reports, for example orphan accounts, users with SoD violations or access granted outside requests, scheduled and sent to owners.'],
      ]},
    ],
  },
  {
    slug: 'active-directory-interview-questions',
    title: 'Active Directory Interview Questions and Answers',
    short: 'Active Directory interview questions',
    description: '16 Active Directory interview questions with clear answers: forests, FSMO roles, replication, Kerberos, group scopes, GPO, delegation, gMSA, LAPS, tiering and recovery.',
    date: '2026-11-01',
    course: 'active-directory',
    tag: 'DIRECTORY',
    intro: [
      'Almost every IAM role touches Active Directory, so interviewers expect you to know its structure, how authentication works and how to keep it secure.',
      'Expect security questions too: tiering, privileged groups and common attack paths are now part of most AD interviews.',
    ],
    sections: [
      { title: 'Structure and replication', qa: [
        ['Forest, domain, tree and OU: what is the difference?', 'A forest is the security boundary and top-level container. Domains inside it are administrative and replication units; domains sharing a namespace form a tree. Organisational units organise objects within a domain for delegation and Group Policy.'],
        ['What are the FSMO roles?', 'Five single-master roles: Schema Master and Domain Naming Master (one per forest), and RID Master, PDC Emulator and Infrastructure Master (one per domain). The PDC Emulator also acts as the time source and handles urgent password changes.'],
        ['How does AD replication work?', 'Domain controllers replicate changes multi-master. Within a site, replication is fast and frequent; between sites it follows site links and schedules. Tools such as repadmin and dcdiag show replication health.'],
      ]},
      { title: 'Authentication and groups', qa: [
        ['Kerberos vs NTLM?', 'Kerberos uses tickets issued by the domain controller and supports mutual authentication and delegation. NTLM is an older challenge-response protocol used as a fallback. Reducing NTLM usage is a common hardening goal.'],
        ['Explain group scopes.', 'Global groups contain users from their own domain, domain local groups grant permissions to resources in their domain, and universal groups can contain members from any domain in the forest. The classic pattern is AGDLP: accounts into global groups, global groups into domain local groups, and permissions on domain local groups.'],
        ['What is a gMSA?', 'A group Managed Service Account: a service account whose complex password is generated and rotated automatically by AD and can be used by several servers, removing manually managed service account passwords.'],
      ]},
      { title: 'Group Policy and delegation', qa: [
        ['In what order is Group Policy applied?', 'Local, site, domain, then OU (LSDOU), with child OUs applied last. Enforced links, block inheritance, security filtering and WMI filters change the result.'],
        ['How do you delegate helpdesk password resets?', 'Use Delegation of Control on the OUs that hold user accounts to grant a helpdesk group only the reset password and unlock rights, instead of adding them to privileged groups.'],
        ['What is AdminSDHolder?', 'A container whose permissions are applied regularly to members of protected privileged groups by the SDProp process. It prevents permission changes on those accounts, which is why delegated rights do not apply to them.'],
      ]},
      { title: 'Security', qa: [
        ['What is the AD tiering model?', 'A separation of administration into tiers: Tier 0 for identity infrastructure such as domain controllers, Tier 1 for servers and Tier 2 for workstations. Admins use separate accounts per tier and never log on to a lower tier with higher-tier credentials.'],
        ['What does LAPS do?', 'Windows LAPS gives every computer a unique, regularly rotated local administrator password stored in AD or Entra ID, which stops attackers reusing one local password across machines.'],
        ['What is Kerberoasting and how do you reduce the risk?', 'Attackers request service tickets for accounts with SPNs and try to crack them offline. Reduce the risk with gMSAs, long random passwords for service accounts, AES encryption and monitoring for unusual ticket requests.'],
        ['What is the Protected Users group?', 'A group that applies stronger protections to its members, such as no NTLM, no credential caching and no weak Kerberos encryption, for privileged accounts that can work with those limits.'],
      ]},
      { title: 'Operations and recovery', qa: [
        ['How do you recover a deleted object?', 'With the AD Recycle Bin, if enabled, you restore the object with its attributes and group memberships. Without it, you use an authoritative restore from a system state backup.'],
        ['How do you clean up stale accounts safely?', 'Find users and computers inactive for a defined period using lastLogonTimestamp, disable and move them to a quarantine OU first, notify owners, and delete only after a grace period.'],
        ['Replication is failing between two sites. Where do you start?', 'Run repadmin /replsummary and dcdiag, check DNS resolution and network ports between the domain controllers, site link configuration and time synchronisation, then read the Directory Service event logs.'],
      ]},
    ],
  },
  {
    slug: 'ping-identity-interview-questions',
    title: 'Ping Identity Interview Questions and Answers (PingFederate, PingOne)',
    short: 'Ping Identity interview questions',
    description: '15 Ping Identity interview questions with clear answers: PingFederate connections, adapters, OAuth and OIDC, PingAccess, PingDirectory, PingOne, DaVinci and troubleshooting.',
    date: '2026-11-01',
    course: 'ping-identity',
    tag: 'ACCESS',
    intro: [
      'Ping Identity interviews go deep on federation. You will be asked how PingFederate connections, adapters and policies fit together, and how OAuth and OpenID Connect work in practice.',
      'Have a federation project ready to explain end to end, including how you debugged it.',
    ],
    sections: [
      { title: 'Federation with PingFederate', qa: [
        ['What is the difference between an SP connection and an IdP connection?', 'An SP connection is configured when PingFederate acts as the identity provider for an application (service provider). An IdP connection is configured when PingFederate trusts an external identity provider and acts as the service provider side.'],
        ['What are adapters?', 'Plug-ins that connect PingFederate to the outside world. IdP adapters authenticate users (for example the HTML Form adapter with a password credential validator); SP adapters hand the session to the application.'],
        ['What is an attribute contract?', 'The list of attributes a connection or adapter sends. Attribute fulfilment maps each one to a source, such as the adapter, a data store like LDAP, or an expression.'],
        ['What are authentication policies?', 'Rule trees that decide which authentication sources and steps a user goes through, for example password first, then MFA only for external networks, before a connection completes.'],
      ]},
      { title: 'OAuth and OpenID Connect', qa: [
        ['Which OAuth grant types do you use for which clients?', 'Authorization code with PKCE for web, mobile and single-page applications, client credentials for service-to-service calls, and the device authorization grant for devices without a browser. Avoid the implicit and password grants.'],
        ['JWT vs reference access tokens?', 'JWT tokens are self-contained and validated locally by the resource server. Reference tokens are opaque and must be introspected at the authorization server, which makes immediate revocation easier.'],
        ['What is an access token manager?', 'The PingFederate component that defines how access tokens are issued: format, lifetime, signing and which attributes they carry. Clients are linked to an access token manager.'],
      ]},
      { title: 'PingAccess, PingDirectory and PingOne', qa: [
        ['Gateway vs agent deployment in PingAccess?', 'In gateway mode, PingAccess sits in front of the application as a reverse proxy. In agent mode, an agent on the web server asks PingAccess for policy decisions. Gateway mode needs no change on the web server; agent mode avoids routing all traffic through a proxy.'],
        ['What is PingDirectory used for?', 'A high-performance LDAP directory for large user stores, often for customer identity, with replication and data synchronisation to other sources.'],
        ['What is PingOne DaVinci?', 'A no-code orchestration service in PingOne for building registration, login and verification journeys from connectors, including third-party services, without changing the application.'],
        ['What does PingOne Protect add?', 'Risk signals such as bot detection, anomalous behaviour and IP reputation, used in authentication flows to require MFA or block high-risk attempts.'],
      ]},
      { title: 'Operations and troubleshooting', qa: [
        ['How is PingFederate clustered?', 'An administrative console node holds the configuration and replicates it to engine nodes, which handle runtime traffic behind a load balancer. Configuration changes are made on the console node and replicated to the cluster.'],
        ['SAML SSO fails after a certificate renewal. What do you check?', 'Check that the partner has the new signing certificate or metadata, that the connection uses the right certificate, and that both sides\' clocks are in sync. The PingFederate server log and a SAML trace show the exact error.'],
        ['Where do you look first when a federation flow fails?', 'The PingFederate server log and audit log for the transaction, the browser trace (SAML tracer or developer tools), and the partner\'s logs for the error they returned.'],
        ['What happened between Ping Identity and ForgeRock?', 'They merged under Ping Identity. ForgeRock\'s cloud platform continues as PingOne Advanced Identity Cloud, so interviewers may ask about both product lines.'],
      ]},
    ],
  },
  {
    slug: 'how-to-start-a-career-in-iam',
    kind: 'guide',
    title: 'How to Start a Career in Identity & Access Management (IAM)',
    short: 'How to start a career in IAM',
    description: 'A practical roadmap into Identity & Access Management: the roles, the skills to learn first, a 6-month learning plan and how to land your first IAM job.',
    date: '2026-11-01',
    course: 'iam-fundamentals',
    tag: 'CAREER',
    intro: [
      'Identity & Access Management decides who can access what, and every organisation needs it. Demand for people who can run IAM platforms keeps growing, and the field rewards practical skills more than any single degree.',
      'This guide shows the main IAM roles, what to learn first and a realistic six-month plan to get job-ready.',
    ],
    sections: [
      { title: 'What IAM people actually do', paras: [
        'IAM teams make sure the right people and systems get the right access at the right time, and lose it when they no longer need it. Day to day, that means onboarding applications, automating joiners, movers and leavers, running access reviews, securing privileged accounts and fixing sign-in problems.',
      ]},
      { title: 'The main IAM roles', bullets: [
        'IAM analyst or operations engineer: handles access requests, user lifecycle issues, access reviews and first-line troubleshooting. A common entry point.',
        'IGA engineer: configures identity governance platforms such as One Identity Manager, SailPoint, Omada or Saviynt; connects HR and target systems; builds roles and certifications.',
        'Access management engineer: runs single sign-on, MFA and federation with Microsoft Entra ID, Okta or Ping Identity.',
        'PAM engineer: secures privileged accounts with CyberArk or BeyondTrust: vaulting, password rotation and session recording.',
        'IAM architect: designs the overall identity landscape, chooses platforms and leads programmes. Usually reached after several years in one of the roles above.',
      ]},
      { title: 'Skills to learn first', bullets: [
        'Core concepts: authentication vs authorisation, least privilege, RBAC, segregation of duties, the identity lifecycle.',
        'Active Directory and Microsoft Entra ID: almost every IAM job touches them.',
        'Protocols: SAML 2.0, OAuth 2.0 and OpenID Connect, at least well enough to read a token or assertion.',
        'Basic scripting and data skills: PowerShell and SQL help in every IAM role.',
        'One platform in depth: pick the IGA, access management or PAM platform most used in the jobs you want.',
      ]},
      { title: 'A 6-month learning plan', bullets: [
        'Month 1: IAM fundamentals and Active Directory basics. Build a small lab domain.',
        'Month 2: Microsoft Entra ID: users, groups, Conditional Access, app SSO in a free developer tenant.',
        'Month 3: protocols: set up SAML and OIDC sign-in for a test application and read the tokens.',
        'Months 4–5: one main platform in depth, for example One Identity Manager, SailPoint, Okta or CyberArk, with hands-on labs and a capstone project.',
        'Month 6: interview preparation, a portfolio write-up of your lab projects, and applications.',
      ]},
      { title: 'Certifications worth considering', paras: [
        'Certifications help you get past CV filters, especially for your first role. Common choices include Microsoft SC-300 (Identity and Access Administrator) for Entra ID, and the vendor certifications from Okta, CyberArk and SailPoint once you know those platforms. Hands-on skill still matters more in interviews than the certificate itself.',
      ]},
      { title: 'How to land your first IAM job', bullets: [
        'Move sideways if you are already in IT: helpdesk, system administration and SAP basis roles all lead naturally into IAM.',
        'Show your lab work: a short write-up of a joiner-mover-leaver flow you built speaks louder than a list of tools.',
        'Prepare with real interview questions for your platform and practise explaining one project end to end.',
        'Use LinkedIn: follow IAM practitioners, share what you learn, and connect with recruiters who hire for IAM.',
      ]},
    ],
  },
  {
    slug: 'iga-vs-pam-vs-access-management',
    kind: 'guide',
    title: 'IGA vs PAM vs Access Management: Which Should You Learn First?',
    short: 'IGA vs PAM vs Access Management',
    description: 'What identity governance (IGA), privileged access management (PAM) and access management do, the platforms behind each, and how to choose the right one for your IAM career.',
    date: '2026-11-01',
    course: 'iam-fundamentals',
    tag: 'CAREER',
    intro: [
      'Identity & Access Management has three big areas: identity governance and administration (IGA), access management (AM) and privileged access management (PAM). They overlap, but the daily work and the platforms are different.',
      'Here is what each one does and how to decide where to start.',
    ],
    sections: [
      { title: 'Identity governance and administration (IGA)', paras: [
        'IGA manages the identity lifecycle and who has which access: joiner, mover and leaver automation, role models, access requests, access reviews and segregation of duties. It is closely tied to HR data and compliance.',
      ], bullets: [
        'Platforms: One Identity Manager, SailPoint, Omada, Saviynt.',
        'Good fit if you like data, processes and business rules, and do not mind some scripting.',
      ]},
      { title: 'Access management (AM)', paras: [
        'Access management controls how people sign in: single sign-on, multi-factor authentication, federation and Conditional Access. It is the most visible part of IAM, because every user meets it every day.',
      ], bullets: [
        'Platforms: Microsoft Entra ID, Okta, Ping Identity, OneLogin, SAP Cloud Identity Services.',
        'Good fit if you enjoy protocols (SAML, OAuth, OpenID Connect), troubleshooting and working with many applications.',
      ]},
      { title: 'Privileged access management (PAM)', paras: [
        'PAM protects the accounts that can do the most damage: administrators, service accounts and secrets. It covers vaulting, password rotation, session recording and removing standing admin rights.',
      ], bullets: [
        'Platforms: CyberArk, BeyondTrust.',
        'Good fit if you have a system administration or security background and like infrastructure work.',
      ]},
      { title: 'Which should you learn first?', paras: [
        'Start with the foundation all three share: IAM concepts, Active Directory and Microsoft Entra ID. Then choose by background: system administrators often move fastest into PAM, people with application or SAP experience into IGA, and those who enjoy cloud and protocols into access management.',
        'Whichever you pick, learn one platform deeply with hands-on labs. Employers hire for platform experience, and moving between areas later is much easier once you know one well.',
      ]},
    ],
  },
  {
    slug: 'sailpoint-vs-saviynt-vs-one-identity-manager',
    kind: 'guide',
    title: 'SailPoint vs Saviynt vs One Identity Manager: Which IGA Platform Should You Learn?',
    short: 'SailPoint vs Saviynt vs One Identity Manager',
    description: 'A practical comparison of SailPoint, Saviynt and One Identity Manager for IAM professionals: deployment models, how they are customised, typical projects and how to choose which to learn.',
    date: '2026-11-01',
    course: 'one-identity-manager',
    tag: 'CAREER',
    intro: [
      'SailPoint, Saviynt and One Identity Manager are three of the identity governance platforms you will see most in job postings. All three automate the identity lifecycle, access requests and reviews, but they are built and customised in different ways.',
      'This comparison focuses on what matters for your skills and career, not on which product is "best".',
    ],
    sections: [
      { title: 'SailPoint', paras: [
        'SailPoint offers IdentityIQ, installed and run by the customer, and Identity Security Cloud, a SaaS platform. IdentityIQ is customised with Java-based BeanShell rules and workflows; Identity Security Cloud with transforms, workflows and APIs.',
      ], bullets: [
        'Skills you build: identity data modelling, connectors, rules or transforms, certifications.',
        'Learning tip: understand both products, since many organisations are moving from IdentityIQ to Identity Security Cloud.',
      ]},
      { title: 'Saviynt', paras: [
        'Saviynt Enterprise Identity Cloud is a cloud-native platform combining identity governance with application access governance, including fine-grained SoD for ERP systems such as SAP.',
      ], bullets: [
        'Skills you build: connections and JSON-based connector configuration, rules, workflows, SoD rulesets, analytics.',
        'Learning tip: get comfortable with REST APIs and JSON; much of the configuration uses them.',
      ]},
      { title: 'One Identity Manager', paras: [
        'One Identity Manager is a highly configurable platform built around a central SQL Server database, with a strong data model, process orchestration and deep connectors for Active Directory, Entra ID and SAP. It is particularly common in larger enterprises in Europe.',
      ], bullets: [
        'Skills you build: data model and schema extensions, synchronization projects, processes, VB.NET scripting, performance tuning.',
        'Learning tip: SQL skills pay off quickly, because so much of the product lives in the database.',
      ]},
      { title: 'How to choose', bullets: [
        'Look at job postings in the city or region where you want to work, and count which platform appears most.',
        'Match your background: Java helps with IdentityIQ, REST and JSON with Saviynt and Identity Security Cloud, SQL and .NET with One Identity Manager.',
        'Consider your target employers: large enterprises with complex on-premises landscapes often run IdentityIQ or One Identity Manager; cloud-first organisations lean towards SaaS platforms.',
        'Do not worry about choosing wrong: the concepts transfer, and many IGA consultants know two or more of these platforms.',
      ]},
    ],
  },
];

export const articleBySlug = (slug) => ARTICLES.find((a) => a.slug === slug);

export const isGuide = (a) => a.kind === 'guide';
export const questionCount = (a) => a.sections.reduce((n, s) => n + (s.qa ? s.qa.length : 0), 0);
export function readMinutes(a) {
  const text = [...a.intro, ...a.sections.flatMap((s) => [...(s.paras || []), ...(s.bullets || []), ...(s.qa || []).flat()])].join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

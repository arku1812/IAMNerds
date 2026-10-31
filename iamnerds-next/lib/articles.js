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
];

export const articleBySlug = (slug) => ARTICLES.find((a) => a.slug === slug);

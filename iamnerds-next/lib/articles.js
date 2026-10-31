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
];

export const articleBySlug = (slug) => ARTICLES.find((a) => a.slug === slug);

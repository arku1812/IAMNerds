// Blog articles: IAM use cases and career guides.
// Interview-question articles were moved to backup/interview-questions.html in the repo (1 Nov 2026).

export const ARTICLES = [
  {
    slug: 'automating-joiner-mover-leaver',
    kind: 'usecase',
    category: 'IGA',
    title: 'Use Case: Automating Joiner, Mover and Leaver with HR-Driven Provisioning',
    short: 'Automating joiner, mover and leaver',
    description: 'How identity governance turns HR events into automatic account creation, access changes and same-day deprovisioning across Active Directory, Entra ID, SAP and SaaS apps.',
    date: '2026-11-01',
    course: 'one-identity-manager',
    intro: [
      'New hires waiting a week for access, movers keeping old permissions for years, and leavers whose accounts stay active after their last day: these are the most common identity problems in any organisation, and the first thing an IGA programme fixes.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'Access is requested by email or tickets and set up by hand in each system. Nobody updates it when people change roles, and IT often learns about leavers too late. Auditors then find orphaned accounts and excessive access.',
      ]},
      { title: 'The solution', paras: [
        'Make the HR system the single source of truth for identities. An identity governance platform reads HR data, creates the identity, and provisions birthright access automatically based on attributes such as department, location and job code.',
      ]},
      { title: 'How it works', bullets: [
        'Joiner: the HR record creates an identity before the start date; accounts in Active Directory, Entra ID, email and core apps are created with the right groups.',
        'Mover: a change of department or role triggers new birthright access and removes access tied to the old role, with approval for anything sensitive.',
        'Leaver: on the termination date, accounts are disabled everywhere at once, access is removed and the manager is notified; accounts are deleted after a retention period.',
        'Every step is logged, so you can show auditors who got which access and why.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'IGA: One Identity Manager, SailPoint, Omada, Saviynt.',
        'Cloud-first: Microsoft Entra ID lifecycle workflows and Okta Lifecycle Management with HR sources such as Workday or SuccessFactors.',
      ]},
      { title: 'Results to expect', bullets: [
        'New joiners productive on day one.',
        'Leavers disabled within minutes of the HR change instead of days.',
        'Far fewer orphaned accounts and audit findings.',
      ]},
    ],
  },
  {
    slug: 'access-reviews-for-audits',
    kind: 'usecase',
    category: 'IGA',
    title: 'Use Case: Access Reviews That Satisfy Auditors (SOX, ISO 27001, NIS2)',
    short: 'Access reviews for audits',
    description: 'How to replace spreadsheet-based access recertification with automated review campaigns that managers can actually complete and auditors trust.',
    date: '2026-11-01',
    course: 'sailpoint-identityiq',
    intro: [
      'Most regulations and standards, including SOX, ISO 27001 and NIS2, expect organisations to review regularly who has access to what. Done by spreadsheet, these reviews are slow, error-prone and easy to rubber-stamp.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'IT exports access lists from each system into Excel and emails them to managers. Reviewers approve everything to get it over with, revocations are done by hand weeks later, and the evidence is scattered across mailboxes.',
      ]},
      { title: 'The solution', paras: [
        'Run access certification campaigns from an identity governance platform. Reviewers see access in business-friendly terms, decide in one place, and revoked access is removed automatically.',
      ]},
      { title: 'How it works', bullets: [
        'Define campaigns: manager reviews of their team, application owner reviews of critical systems, and reviews of privileged roles.',
        'Give reviewers context, such as when access was last used and whether it is unusual for the peer group, so decisions are informed.',
        'Send reminders and escalate overdue reviews.',
        'Revoke rejected access automatically through connectors, or create tickets for disconnected systems.',
        'Keep a complete, timestamped record of every decision as audit evidence.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'SailPoint, Saviynt, Omada and One Identity Manager attestation.',
        'Microsoft Entra ID Governance access reviews for groups, apps and access packages.',
      ]},
      { title: 'Results to expect', bullets: [
        'Review cycles that finish in weeks, not months.',
        'Rejected access actually removed.',
        'Audit evidence available on demand.',
      ]},
    ],
  },
  {
    slug: 'segregation-of-duties-sap',
    kind: 'usecase',
    category: 'SAP',
    title: 'Use Case: Preventing Segregation of Duties Conflicts in SAP and Finance Systems',
    short: 'Segregation of duties in SAP',
    description: 'How SoD rules stop toxic access combinations, such as creating and paying the same vendor, before they are granted in SAP and other finance applications.',
    date: '2026-11-01',
    course: 'saviynt',
    intro: [
      'Segregation of duties (SoD) means no single person can complete a risky business process end to end, for example creating a vendor and also approving payments to it. It is a core control for finance audits.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'SAP roles accumulate over years. Users collect authorisations through role changes and emergency fixes, and conflicts are only discovered during the annual audit, when they are expensive to clean up.',
      ]},
      { title: 'The solution', paras: [
        'Define SoD rules once, check them continuously against existing access, and check every new request before it is approved.',
      ]},
      { title: 'How it works', bullets: [
        'Build a ruleset of conflicting business functions and map each function to the technical authorisations behind it.',
        'Run detective analysis to find existing violations and plan remediation.',
        'Use preventive checks in access requests so conflicts are flagged before approval.',
        'Accept unavoidable conflicts only with a documented mitigating control and an expiry date.',
        'Control emergency (firefighter) access with time limits and logged sessions.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'Saviynt application access governance and SAP GRC Access Control.',
        'IGA platforms such as SailPoint, Omada and One Identity Manager with SoD and compliance rules.',
      ]},
      { title: 'Results to expect', bullets: [
        'Fewer SoD findings in financial audits.',
        'Conflicts stopped at request time instead of found a year later.',
        'Clear documentation of every accepted risk.',
      ]},
    ],
  },
  {
    slug: 'sso-and-mfa-for-saas',
    kind: 'usecase',
    category: 'ACCESS',
    title: 'Use Case: Single Sign-On and MFA for Every SaaS Application',
    short: 'SSO and MFA for SaaS',
    description: 'How a central identity provider gives employees one secure login to all business applications, with MFA and automatic provisioning.',
    date: '2026-11-01',
    course: 'okta',
    intro: [
      'The average company uses dozens of SaaS applications. Separate passwords for each one lead to reuse, phishing and helpdesk tickets, and make it hard to remove access when someone leaves.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'Users manage many passwords, some apps lack MFA, and IT has no single place to see or revoke access. Password resets are among the most common helpdesk requests.',
      ]},
      { title: 'The solution', paras: [
        'Connect every application to a central identity provider using SAML or OpenID Connect, enforce MFA there, and provision accounts with SCIM.',
      ]},
      { title: 'How it works', bullets: [
        'Integrate applications from the identity provider\'s catalogue or as custom SAML or OIDC apps.',
        'Assign apps to groups, so access follows group membership.',
        'Enforce MFA, preferably phishing-resistant methods, in sign-on policies.',
        'Use SCIM provisioning to create and deactivate app accounts automatically.',
        'Offer self-service password reset to cut helpdesk tickets.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'Okta, Microsoft Entra ID, Ping Identity, OneLogin.',
        'SAP Cloud Identity Services for SAP cloud applications, often proxying to one of the above.',
      ]},
      { title: 'Results to expect', bullets: [
        'One login for users and far fewer password resets.',
        'MFA on every application.',
        'App access removed automatically when people leave.',
      ]},
    ],
  },
  {
    slug: 'zero-trust-conditional-access',
    kind: 'usecase',
    category: 'ACCESS',
    title: 'Use Case: Zero Trust Access with Conditional Access Policies',
    short: 'Zero Trust with Conditional Access',
    description: 'How Conditional Access evaluates user, device, location and risk at every sign-in to apply Zero Trust in practice.',
    date: '2026-11-01',
    course: 'microsoft-entra-id',
    intro: [
      'Zero Trust means never trusting a sign-in just because it comes from the corporate network. Every access request is checked against who the user is, the device, the location and the risk.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'Remote work and cloud apps removed the network perimeter. Stolen passwords and token theft let attackers sign in from anywhere, while blanket MFA prompts annoy users without adding much protection.',
      ]},
      { title: 'The solution', paras: [
        'Use risk-aware access policies that require stronger checks only when the situation calls for it, and block access from unmanaged or risky contexts.',
      ]},
      { title: 'How it works', bullets: [
        'Require MFA for all users, and phishing-resistant authentication for administrators.',
        'Require compliant or managed devices for sensitive applications.',
        'Block legacy authentication protocols that cannot do MFA.',
        'Respond to sign-in and user risk with step-up authentication or a password reset.',
        'Roll out every policy in report-only mode first, and keep emergency access accounts excluded.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'Microsoft Entra Conditional Access with Identity Protection.',
        'Okta authentication policies with device assurance, and PingOne with PingOne Protect.',
      ]},
      { title: 'Results to expect', bullets: [
        'Stolen passwords alone no longer enough to get in.',
        'Fewer unnecessary MFA prompts for low-risk sign-ins.',
        'A clear, testable access policy instead of network-based trust.',
      ]},
    ],
  },
  {
    slug: 'vaulting-privileged-accounts',
    kind: 'usecase',
    category: 'PAM',
    title: 'Use Case: Vaulting, Rotating and Recording Privileged Accounts',
    short: 'Vaulting privileged accounts',
    description: 'How privileged access management secures admin, root and service account passwords with a vault, automatic rotation and recorded sessions.',
    date: '2026-11-01',
    course: 'cyberark',
    intro: [
      'Domain admins, root accounts and database administrators can do the most damage. In many breaches, attackers move from one compromised machine to full control by finding a privileged password that never changes.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'Admin passwords are shared in spreadsheets, rarely changed and known by former staff and vendors. Nobody can say who used a privileged account, when, or what they did.',
      ]},
      { title: 'The solution', paras: [
        'Store every privileged credential in a vault, rotate it automatically, and let admins connect through a session proxy that never reveals the password and records the session.',
      ]},
      { title: 'How it works', bullets: [
        'Discover privileged accounts on servers, databases and network devices, and onboard them into the vault.',
        'Rotate passwords on a schedule and after each use for the most sensitive accounts.',
        'Require approval and a ticket number for critical systems.',
        'Route sessions through the PAM proxy, which injects credentials and records activity.',
        'Give vendors time-limited remote access instead of VPN accounts.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'CyberArk (Vault, CPM, PSM) and BeyondTrust (Password Safe, Privileged Remote Access).',
      ]},
      { title: 'Results to expect', bullets: [
        'No standing shared admin passwords.',
        'Every privileged session attributable and reviewable.',
        'Strong evidence for auditors and cyber insurers.',
      ]},
    ],
  },
  {
    slug: 'removing-local-admin-rights',
    kind: 'usecase',
    category: 'PAM',
    title: 'Use Case: Removing Local Admin Rights Without Slowing Users Down',
    short: 'Removing local admin rights',
    description: 'How endpoint privilege management removes local administrator rights from laptops and servers while still letting users run the applications they need.',
    date: '2026-11-01',
    course: 'beyondtrust',
    intro: [
      'Local administrator rights let users install software, and let malware do the same. Removing them is one of the most effective security controls, but it often fails because users cannot work without them.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'Many users are local admins for convenience. Taking rights away creates a flood of helpdesk tickets for software installs, driver updates and business tools that need elevation.',
      ]},
      { title: 'The solution', paras: [
        'Remove admin rights from everyone, then elevate only specific trusted applications and tasks, automatically or on request.',
      ]},
      { title: 'How it works', bullets: [
        'Start in audit mode to learn which applications actually need elevation.',
        'Create rules that elevate approved applications silently, for example by publisher or file hash.',
        'Offer on-demand elevation with a justification for edge cases, and approval for sensitive ones.',
        'Block or sandbox unknown applications.',
        'Use Windows LAPS for unique, rotating local admin passwords on every machine.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'BeyondTrust Endpoint Privilege Management and CyberArk Endpoint Privilege Manager.',
      ]},
      { title: 'Results to expect', bullets: [
        'Local admin rights removed from almost all users.',
        'Malware unable to install with user privileges.',
        'Few extra helpdesk tickets once rules are tuned.',
      ]},
    ],
  },
  {
    slug: 'governing-service-accounts-and-ai-agents',
    kind: 'usecase',
    category: 'NHI',
    title: 'Use Case: Governing Service Accounts, API Keys and AI Agents',
    short: 'Governing non-human identities',
    description: 'How to bring service accounts, secrets, workload identities and AI agents under the same ownership, least privilege and lifecycle as human users.',
    date: '2026-11-01',
    course: 'microsoft-entra-id',
    intro: [
      'Machine identities now outnumber people in most environments, and AI agents are joining them. They log in, call APIs and touch production data, often with powerful, long-lived credentials nobody owns.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'Service accounts are created for projects and forgotten. API keys sit in code repositories. Nobody knows which ones are still needed, so nobody dares to remove them.',
      ]},
      { title: 'The solution', paras: [
        'Apply four rules to every non-human identity: a named owner, a documented purpose, least-privilege scope and an expiry.',
      ]},
      { title: 'How it works', bullets: [
        'Inventory service accounts, app registrations, API keys and agents across directories, cloud platforms and vaults.',
        'Assign an accountable human owner to each one, and certify them in regular access reviews.',
        'Replace secrets with managed identities or workload identity federation where possible; vault and rotate the rest.',
        'Give AI agents their own identities with narrowly scoped permissions, time-limited access and full logging.',
        'Disable identities whose owner left or whose purpose ended.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'Microsoft Entra workload identities and managed identities; IGA platforms for ownership and reviews.',
        'CyberArk and BeyondTrust for vaulting and secrets management.',
      ]},
      { title: 'Results to expect', bullets: [
        'Every machine identity has an owner.',
        'Fewer long-lived secrets in code.',
        'AI agents with clear, auditable boundaries.',
      ]},
    ],
  },
  {
    slug: 'secure-partner-and-contractor-access',
    kind: 'usecase',
    category: 'ACCESS',
    title: 'Use Case: Secure Access for Partners, Contractors and Vendors',
    short: 'Partner and contractor access',
    description: 'How guest access, access packages and expiry dates give external users exactly the access they need, only for as long as they need it.',
    date: '2026-11-01',
    course: 'microsoft-entra-id',
    intro: [
      'Contractors, consultants and partners need access to internal systems, but they are rarely in the HR system. Their accounts are often created by hand and outlive the contract by years.',
    ],
    sections: [
      { title: 'The challenge', paras: [
        'External accounts lack a sponsor and an end date. Shared vendor logins hide who did what, and IT has no reliable list of external users.',
      ]},
      { title: 'The solution', paras: [
        'Give every external user a sponsor inside the company, bundle their access into packages with approval and an expiry, and review it regularly.',
      ]},
      { title: 'How it works', bullets: [
        'Invite partners as guests with their own organisation\'s login (B2B collaboration) instead of creating internal accounts.',
        'Publish access packages for each project, with approval by the sponsor and a fixed end date.',
        'Run quarterly reviews where sponsors confirm or remove external access.',
        'Use privileged remote access for vendors who support your systems.',
        'Remove guests automatically when access expires.',
      ]},
      { title: 'Platforms that do this', bullets: [
        'Microsoft Entra B2B and entitlement management; Okta and IGA platforms for external identity lifecycles.',
        'BeyondTrust Privileged Remote Access or CyberArk for vendor support access.',
      ]},
      { title: 'Results to expect', bullets: [
        'A complete list of external users and their sponsors.',
        'No access outliving the contract.',
        'Individual accountability instead of shared vendor accounts.',
      ]},
    ],
  },
  {
    "slug": "how-to-start-a-career-in-iam",
    "kind": "guide",
    "title": "How to Start a Career in Identity & Access Management (IAM)",
    "short": "How to start a career in IAM",
    "description": "A practical roadmap into Identity & Access Management: the roles, the skills to learn first, a 6-month learning plan and how to land your first IAM job.",
    "date": "2026-11-01",
    "course": "iam-fundamentals",
    "tag": "CAREER",
    "intro": [
      "Identity & Access Management decides who can access what, and every organisation needs it. Demand for people who can run IAM platforms keeps growing, and the field rewards practical skills more than any single degree.",
      "This guide shows the main IAM roles, what to learn first and a realistic six-month plan to get job-ready."
    ],
    "sections": [
      {
        "title": "What IAM people actually do",
        "paras": [
          "IAM teams make sure the right people and systems get the right access at the right time, and lose it when they no longer need it. Day to day, that means onboarding applications, automating joiners, movers and leavers, running access reviews, securing privileged accounts and fixing sign-in problems."
        ]
      },
      {
        "title": "The main IAM roles",
        "bullets": [
          "IAM analyst or operations engineer: handles access requests, user lifecycle issues, access reviews and first-line troubleshooting. A common entry point.",
          "IGA engineer: configures identity governance platforms such as One Identity Manager, SailPoint, Omada or Saviynt; connects HR and target systems; builds roles and certifications.",
          "Access management engineer: runs single sign-on, MFA and federation with Microsoft Entra ID, Okta or Ping Identity.",
          "PAM engineer: secures privileged accounts with CyberArk or BeyondTrust: vaulting, password rotation and session recording.",
          "IAM architect: designs the overall identity landscape, chooses platforms and leads programmes. Usually reached after several years in one of the roles above."
        ]
      },
      {
        "title": "Skills to learn first",
        "bullets": [
          "Core concepts: authentication vs authorisation, least privilege, RBAC, segregation of duties, the identity lifecycle.",
          "Active Directory and Microsoft Entra ID: almost every IAM job touches them.",
          "Protocols: SAML 2.0, OAuth 2.0 and OpenID Connect, at least well enough to read a token or assertion.",
          "Basic scripting and data skills: PowerShell and SQL help in every IAM role.",
          "One platform in depth: pick the IGA, access management or PAM platform most used in the jobs you want."
        ]
      },
      {
        "title": "A 6-month learning plan",
        "bullets": [
          "Month 1: IAM fundamentals and Active Directory basics. Build a small lab domain.",
          "Month 2: Microsoft Entra ID: users, groups, Conditional Access, app SSO in a free developer tenant.",
          "Month 3: protocols: set up SAML and OIDC sign-in for a test application and read the tokens.",
          "Months 4–5: one main platform in depth, for example One Identity Manager, SailPoint, Okta or CyberArk, with hands-on labs and a capstone project.",
          "Month 6: interview preparation, a portfolio write-up of your lab projects, and applications."
        ]
      },
      {
        "title": "Certifications worth considering",
        "paras": [
          "Certifications help you get past CV filters, especially for your first role. Common choices include Microsoft SC-300 (Identity and Access Administrator) for Entra ID, and the vendor certifications from Okta, CyberArk and SailPoint once you know those platforms. Hands-on skill still matters more in interviews than the certificate itself."
        ]
      },
      {
        "title": "How to land your first IAM job",
        "bullets": [
          "Move sideways if you are already in IT: helpdesk, system administration and SAP basis roles all lead naturally into IAM.",
          "Show your lab work: a short write-up of a joiner-mover-leaver flow you built speaks louder than a list of tools.",
          "Prepare with real interview questions for your platform and practise explaining one project end to end.",
          "Use LinkedIn: follow IAM practitioners, share what you learn, and connect with recruiters who hire for IAM."
        ]
      }
    ],
    "category": "CAREER"
  },
  {
    "slug": "iga-vs-pam-vs-access-management",
    "kind": "guide",
    "title": "IGA vs PAM vs Access Management: Which Should You Learn First?",
    "short": "IGA vs PAM vs Access Management",
    "description": "What identity governance (IGA), privileged access management (PAM) and access management do, the platforms behind each, and how to choose the right one for your IAM career.",
    "date": "2026-11-01",
    "course": "iam-fundamentals",
    "tag": "CAREER",
    "intro": [
      "Identity & Access Management has three big areas: identity governance and administration (IGA), access management (AM) and privileged access management (PAM). They overlap, but the daily work and the platforms are different.",
      "Here is what each one does and how to decide where to start."
    ],
    "sections": [
      {
        "title": "Identity governance and administration (IGA)",
        "paras": [
          "IGA manages the identity lifecycle and who has which access: joiner, mover and leaver automation, role models, access requests, access reviews and segregation of duties. It is closely tied to HR data and compliance."
        ],
        "bullets": [
          "Platforms: One Identity Manager, SailPoint, Omada, Saviynt.",
          "Good fit if you like data, processes and business rules, and do not mind some scripting."
        ]
      },
      {
        "title": "Access management (AM)",
        "paras": [
          "Access management controls how people sign in: single sign-on, multi-factor authentication, federation and Conditional Access. It is the most visible part of IAM, because every user meets it every day."
        ],
        "bullets": [
          "Platforms: Microsoft Entra ID, Okta, Ping Identity, OneLogin, SAP Cloud Identity Services.",
          "Good fit if you enjoy protocols (SAML, OAuth, OpenID Connect), troubleshooting and working with many applications."
        ]
      },
      {
        "title": "Privileged access management (PAM)",
        "paras": [
          "PAM protects the accounts that can do the most damage: administrators, service accounts and secrets. It covers vaulting, password rotation, session recording and removing standing admin rights."
        ],
        "bullets": [
          "Platforms: CyberArk, BeyondTrust.",
          "Good fit if you have a system administration or security background and like infrastructure work."
        ]
      },
      {
        "title": "Which should you learn first?",
        "paras": [
          "Start with the foundation all three share: IAM concepts, Active Directory and Microsoft Entra ID. Then choose by background: system administrators often move fastest into PAM, people with application or SAP experience into IGA, and those who enjoy cloud and protocols into access management.",
          "Whichever you pick, learn one platform deeply with hands-on labs. Employers hire for platform experience, and moving between areas later is much easier once you know one well."
        ]
      }
    ],
    "category": "CAREER"
  },
  {
    "slug": "sailpoint-vs-saviynt-vs-one-identity-manager",
    "kind": "guide",
    "title": "SailPoint vs Saviynt vs One Identity Manager: Which IGA Platform Should You Learn?",
    "short": "SailPoint vs Saviynt vs One Identity Manager",
    "description": "A practical comparison of SailPoint, Saviynt and One Identity Manager for IAM professionals: deployment models, how they are customised, typical projects and how to choose which to learn.",
    "date": "2026-11-01",
    "course": "one-identity-manager",
    "tag": "CAREER",
    "intro": [
      "SailPoint, Saviynt and One Identity Manager are three of the identity governance platforms you will see most in job postings. All three automate the identity lifecycle, access requests and reviews, but they are built and customised in different ways.",
      "This comparison focuses on what matters for your skills and career, not on which product is \"best\"."
    ],
    "sections": [
      {
        "title": "SailPoint",
        "paras": [
          "SailPoint offers IdentityIQ, installed and run by the customer, and Identity Security Cloud, a SaaS platform. IdentityIQ is customised with Java-based BeanShell rules and workflows; Identity Security Cloud with transforms, workflows and APIs."
        ],
        "bullets": [
          "Skills you build: identity data modelling, connectors, rules or transforms, certifications.",
          "Learning tip: understand both products, since many organisations are moving from IdentityIQ to Identity Security Cloud."
        ]
      },
      {
        "title": "Saviynt",
        "paras": [
          "Saviynt Enterprise Identity Cloud is a cloud-native platform combining identity governance with application access governance, including fine-grained SoD for ERP systems such as SAP."
        ],
        "bullets": [
          "Skills you build: connections and JSON-based connector configuration, rules, workflows, SoD rulesets, analytics.",
          "Learning tip: get comfortable with REST APIs and JSON; much of the configuration uses them."
        ]
      },
      {
        "title": "One Identity Manager",
        "paras": [
          "One Identity Manager is a highly configurable platform built around a central SQL Server database, with a strong data model, process orchestration and deep connectors for Active Directory, Entra ID and SAP. It is particularly common in larger enterprises in Europe."
        ],
        "bullets": [
          "Skills you build: data model and schema extensions, synchronization projects, processes, VB.NET scripting, performance tuning.",
          "Learning tip: SQL skills pay off quickly, because so much of the product lives in the database."
        ]
      },
      {
        "title": "How to choose",
        "bullets": [
          "Look at job postings in the city or region where you want to work, and count which platform appears most.",
          "Match your background: Java helps with IdentityIQ, REST and JSON with Saviynt and Identity Security Cloud, SQL and .NET with One Identity Manager.",
          "Consider your target employers: large enterprises with complex on-premises landscapes often run IdentityIQ or One Identity Manager; cloud-first organisations lean towards SaaS platforms.",
          "Do not worry about choosing wrong: the concepts transfer, and many IGA consultants know two or more of these platforms."
        ]
      }
    ],
    "category": "CAREER"
  },
];

export const articleBySlug = (slug) => ARTICLES.find((a) => a.slug === slug);

export const isGuide = (a) => a.kind === 'guide';
export const kindLabel = (a) => (a.kind === 'guide' ? 'Career guide' : 'Use case');
export const CATEGORY_LABELS = { IGA: 'Identity governance', ACCESS: 'Access management', PAM: 'Privileged access', SAP: 'SAP security', NHI: 'Non-human identity', CAREER: 'Career' };
export const questionCount = (a) => a.sections.reduce((n, s) => n + (s.qa ? s.qa.length : 0), 0);
export function readMinutes(a) {
  const text = [...a.intro, ...a.sections.flatMap((s) => [...(s.paras || []), ...(s.bullets || []), ...(s.qa || []).flat()])].join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

export const siteConfig = {
  name: "Vinay Kumar",
  title: "Software Engineer focused on Distributed Systems, Backend Engineering, Open Source, and AI Infrastructure.",
  description:
    "Portfolio of Vinay Kumar, a software engineer building distributed systems, backend platforms, open source fixes, and AI infrastructure.",
  location: "Hyderabad, India",
  email: "vickiease@gmail.com",
  secondaryEmail: "vkslog69@gmail.com",
  phone: "+91-83099-76969",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  resumePath: "/resume/Vinay_Kumar_Resume.pdf",
  links: {
    github: "https://github.com/Vcode2407",
    linkedin: "https://www.linkedin.com/in/themanvk",
    topmate: "https://topmate.io/vinayme/"
  }
};

export const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "Open Source", href: "/open-source" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" }
];

export const metrics = [
  { value: "100K+", label: "Jobs/day Processed", detail: "Distributed scheduler load validation" },
  { value: "1200+", label: "Requests/min", detail: "AKS + Kafka multi-agent routing" },
  { value: "95%+", label: "Task Accuracy", detail: "10,000+ citizen-service queries" },
  { value: "40%", label: "Latency Reduction", detail: "p99 API path decoupling" },
  { value: "2", label: "Merged Open Source Contributions", detail: "OpenTelemetry Java and fmt" },
  { value: "AIR 7", label: "National Rank", detail: "Top 0.01% in SRMJEEM 2026" }
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  challenges: string[];
  architecture: string[];
  impact: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    company: "micro1",
    role: "Software Engineer, Part-time Remote",
    period: "May 2026 - Present",
    location: "Remote, concurrent with M.Tech",
    summary:
      "Owns features end-to-end across a Java/Spring Boot, React, and PostgreSQL microservices platform within an 8-person engineering team.",
    challenges: [
      "Feature work required sharper system design alignment before implementation.",
      "Synchronous notification delivery sat on the critical request path and inflated p99 latency.",
      "Deployment and observability workflows needed tighter feedback loops for remote execution."
    ],
    architecture: [
      "Introduced API contract mocking and implementation planning before sprint build-out.",
      "Moved notification delivery to an event-driven asynchronous architecture.",
      "Improved CI/CD reliability and operational visibility across releases."
    ],
    impact: [
      "Reduced average feature delivery time by roughly 30%, from 10 days to 7 days.",
      "Reduced p99 API latency by roughly 40% by decoupling notifications.",
      "Strengthened release confidence through CI/CD, observability, and deployment process improvements."
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "CI/CD", "Observability"]
  },
  {
    company: "Mercor",
    role: "Software Engineer",
    period: "May 2025 - Apr 2026",
    location: "Remote",
    summary:
      "Handled backend debugging, production support tickets, log analysis, and stakeholder communication for customer-reported issues.",
    challenges: [
      "Production issues required fast triage across logs, user reports, and reproducible failure cases.",
      "Customer-facing tickets needed clear status communication while engineering investigation continued.",
      "Reliability improvements had to be grounded in repeatable root cause analysis."
    ],
    architecture: [
      "Built a triage rhythm around logs, reproduction steps, root cause notes, and fix validation.",
      "Collaborated with stakeholders to communicate issue scope, status, and resolution paths.",
      "Contributed debugging insights back into reliability improvements for backend services."
    ],
    impact: [
      "Improved speed and clarity of issue resolution by isolating reproducible bugs from support tickets.",
      "Strengthened production reliability through recurring failure analysis and debugging.",
      "Built application-support experience that complements backend systems engineering."
    ],
    technologies: ["Backend Debugging", "Application Support", "Log Analysis", "Root Cause Analysis", "APIs"]
  },
  {
    company: "Alethe Labs",
    role: "Software Engineer Intern",
    period: "Jun 2025 - Aug 2025",
    location: "Remote",
    summary:
      "Built backend and frontend workflows for configuration management and reduced operational support load.",
    challenges: [
      "Eight scattered config endpoints made admin workflows brittle and support-heavy.",
      "A stale data-fetching layer caused repeated frontend bug reproduction cycles.",
      "Support teams lacked a single operational surface for common configuration tasks."
    ],
    architecture: [
      "Consolidated fragmented endpoints into a unified admin platform.",
      "Redesigned cache invalidation behavior around the data-fetching layer.",
      "Aligned API responses and frontend state management around predictable update paths."
    ],
    impact: [
      "Eliminated roughly 35% of inbound support tickets caused by misconfiguration.",
      "Reduced bug reproductions by about 80%, from 5 to 1 per sprint.",
      "Created a cleaner operational path for support and engineering teams."
    ],
    technologies: ["Python", "FastAPI", "React", "Caching", "Admin Systems"]
  },
  {
    company: "Outlier",
    role: "Freelance Software Developer, Backend & Automation",
    period: "May 2025 - Feb 2026",
    location: "Remote",
    summary:
      "Delivered backend and automation work in a freelance setting, with emphasis on debugging, repeatability, and implementation quality.",
    challenges: [
      "Freelance tasks required quickly understanding varied backend and automation requirements.",
      "Automation work needed predictable behavior across changing inputs and edge cases.",
      "Quality expectations required clear assumptions and reliable validation."
    ],
    architecture: [
      "Structured work around small backend utilities, automation workflows, and reproducible checks.",
      "Validated outputs against task constraints before delivery.",
      "Kept implementation notes explicit so follow-up debugging was easier."
    ],
    impact: [
      "Built practical automation and backend debugging experience across varied task contexts.",
      "Improved repeatability of manual workflows through targeted automation.",
      "Strengthened ability to move from ambiguous requirements to working software."
    ],
    technologies: ["Python", "Automation", "Backend Development", "Debugging"]
  },
  {
    company: "TMEIC India",
    role: "Intern",
    period: "Mar 2024 - Sep 2024",
    location: "Tumkur, Karnataka, India",
    summary:
      "Developed internal business applications and API integrations to support digitization initiatives and process automation.",
    challenges: [
      "Internal workflows needed digitized applications that non-engineering stakeholders could operate.",
      "API integration work had to connect low-code business applications with backend services.",
      "Manual email workflows created avoidable coordination overhead."
    ],
    architecture: [
      "Built internal applications on a low-code platform for business process digitization.",
      "Integrated FastAPI services into internal workflows.",
      "Used Microsoft Power Automate to automate email communication flows."
    ],
    impact: [
      "Streamlined internal business processes through digitized application workflows.",
      "Improved communication efficiency by automating repeated email flows.",
      "Built early experience connecting APIs, automation, and stakeholder-facing tools."
    ],
    technologies: ["FastAPI", "Low-Code Platforms", "Power Automate", "Internal Tools"]
  },
  {
    company: "Google for Developers",
    role: "Android Developer Virtual Intern",
    period: "Jan 2024 - Mar 2024",
    location: "Remote",
    summary:
      "Completed a 10-week Android Developer Virtual Internship through the India Edu Program supported by Google for Developers.",
    challenges: [
      "Built Android fundamentals through a structured internship program.",
      "Applied mobile development concepts across practical exercises.",
      "Balanced coursework with independent technical upskilling."
    ],
    architecture: [
      "Worked through Android development fundamentals and implementation patterns.",
      "Practiced Kotlin-based application development concepts.",
      "Completed program milestones across the 10-week curriculum."
    ],
    impact: [
      "Added mobile development context to a backend-heavy engineering foundation.",
      "Strengthened Kotlin and Android fundamentals.",
      "Completed a recognized Google for Developers supported internship program."
    ],
    technologies: ["Android", "Kotlin", "Mobile Development"]
  },
  {
    company: "DevTown",
    role: "Business Development Manager",
    period: "Aug 2023 - Jan 2024",
    location: "Bengaluru, Karnataka, India",
    summary:
      "Built customer-facing communication and stakeholder coordination experience before moving deeper into software engineering roles.",
    challenges: [
      "Role required clear communication across business, learner, and operations contexts.",
      "Stakeholder expectations needed consistent follow-up and status clarity.",
      "Customer-facing work demanded structured problem framing."
    ],
    architecture: [
      "Developed communication habits around context gathering, follow-up, and expectation setting.",
      "Worked in a customer-facing environment that later informed support-oriented engineering work.",
      "Built early operating discipline around ownership and accountability."
    ],
    impact: [
      "Strengthened cross-functional communication for later engineering and application-support roles.",
      "Built comfort translating ambiguous user needs into actionable next steps.",
      "Added customer empathy to a systems and backend engineering profile."
    ],
    technologies: ["Stakeholder Communication", "Customer Support", "Operations"]
  }
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  repo: string;
  featuredMetric: string;
  tags: string[];
  category: "Distributed Systems" | "AI Infrastructure" | "Developer Tools";
  overview: string;
  problem: string;
  architecture: string[];
  decisions: string[];
  scaling: string[];
  reliability: string[];
  lessons: string[];
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "distributed-job-scheduler",
    title: "Distributed Job Scheduling Platform",
    subtitle: "A fault-tolerant scheduler for immediate, delayed, and cron-based execution.",
    repo: "https://github.com/Vcode2407/distributed-job-scheduler",
    featuredMetric: "100,000+ jobs/day",
    tags: [
      "Java 21",
      "Spring Boot 3",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Prometheus",
      "OpenTelemetry"
    ],
    category: "Distributed Systems",
    overview:
      "Designed a distributed scheduler with at-least-once delivery guarantees across isolated queues, multi-node leasing, and observable worker execution.",
    problem:
      "A scheduler that works on one process fails when jobs, retries, delayed execution, and crash recovery need to survive multiple workers and deployment units.",
    architecture: [
      "Client submits immediate, delayed, or cron jobs through a Spring Boot API layer.",
      "PostgreSQL stores source-of-truth job state and supports indexed due-job scans.",
      "Kafka fans out leased work to isolated queues for worker consumption.",
      "Workers coordinate leases with PostgreSQL SKIP LOCKED and Redis locking.",
      "Prometheus and OpenTelemetry expose scheduling, retry, and lease metrics."
    ],
    decisions: [
      "Used PostgreSQL FOR UPDATE SKIP LOCKED to avoid duplicate leasing under concurrent workers.",
      "Added Redis distributed locks for cross-node coordination during critical scheduling paths.",
      "Used Kafka as an outbox-backed event stream rather than pushing all work through request/response APIs.",
      "Kept job state in PostgreSQL so recovery paths can rebuild execution state deterministically."
    ],
    scaling: [
      "Batch leasing reduces round trips for due-job scans.",
      "Kafka fan-out lets worker pools scale independently from API traffic.",
      "Indexed scheduled-time scans keep delayed jobs efficient as the queue grows.",
      "Validated more than 100,000 jobs/day under load."
    ],
    reliability: [
      "At-least-once delivery with idempotency-aware worker execution.",
      "Lease expiry recovery and lease reclamation after crashes.",
      "Exponential backoff retries and dead-letter queues for exhausted jobs.",
      "Testcontainers coverage for Kafka, PostgreSQL, and Redis integration behavior."
    ],
    lessons: [
      "A scheduler is primarily a consistency problem, not only a timer problem.",
      "Operational visibility has to be designed into queues, leases, and retry loops from the beginning.",
      "At-least-once semantics are practical when duplicate prevention and recovery paths are explicit."
    ],
    metrics: [
      { label: "Jobs/day", value: "100,000+" },
      { label: "Delivery", value: "At-least-once" },
      { label: "Execution modes", value: "Immediate, delayed, cron" }
    ]
  },
  {
    slug: "multi-agent-routing",
    title: "Multi-Agent Routing Platform",
    subtitle: "High-throughput multi-agent AI orchestration system with independent scaling and failure isolation.",
    repo: "https://github.com/Vcode2407/multi-agent-citizen-routing-platform",
    featuredMetric: "1200 req/min",
    tags: ["Azure", "Semantic Kernel", "AKS", "Kafka", "MongoDB", "App Insights"],
    category: "AI Infrastructure",
    overview:
      "Orchestrated five LLM agents on AKS and Kafka for citizen-service routing with independent scaling, failure isolation, and targeted recovery.",
    problem:
      "Single-agent routing degraded under mixed query types because reasoning, retrieval, validation, and escalation concerns competed inside one execution path.",
    architecture: [
      "API gateway accepts citizen-service queries and emits routing work.",
      "Kafka separates classification, retrieval, validation, and escalation stages.",
      "Semantic Kernel coordinates specialized agents deployed on AKS.",
      "MongoDB stores routing context, outcomes, and evaluation traces.",
      "Azure App Insights identifies recurring reasoning-chain failures."
    ],
    decisions: [
      "Chose multi-agent decomposition to scale specialized reasoning paths independently.",
      "Chose Kafka to buffer spikes and isolate agent failures from the API layer.",
      "Chose AKS to independently deploy, autoscale, and recover agent workloads.",
      "Rejected a single-agent architecture because failures were harder to localize and throughput scaled as one monolith."
    ],
    scaling: [
      "Sustained 1,200+ requests/min under load.",
      "Kept p95 latency under 300ms for routing decisions.",
      "Scaled agents by query type rather than scaling the full system uniformly."
    ],
    reliability: [
      "99.2% uptime across the measured run.",
      "Targeted recovery paths for individual agent failures.",
      "Evaluation traces captured recurring reasoning-chain failures for iterative fixes."
    ],
    lessons: [
      "Multi-agent systems need infrastructure boundaries as much as prompt boundaries.",
      "Kafka is valuable when reasoning stages need backpressure and replay, not just throughput.",
      "Accuracy work improves faster when telemetry captures failure categories, not only final outputs."
    ],
    metrics: [
      { label: "Requests/min", value: "1,200+" },
      { label: "Accuracy", value: "95%+" },
      { label: "Uptime", value: "99.2%" },
      { label: "p95 latency", value: "Sub-300ms" }
    ]
  },
  {
    slug: "repository-intelligence-platform",
    title: "Repository Intelligence Platform",
    subtitle: "A semantic codebase explorer built for natural-language repository queries.",
    repo: "https://github.com/Vcode2407",
    featuredMetric: "50,000+ files indexed",
    tags: ["Java", "Spring Boot", "Neo4j", "PostgreSQL", "LLMs", "Vector Search"],
    category: "Developer Tools",
    overview:
      "HackAura 2nd-place project that indexed code repositories with semantic search, RAG, and knowledge graph traversal.",
    problem:
      "Large repositories are hard to understand from keyword search alone when architectural relationships span files and services.",
    architecture: [
      "Repository ingestion parses files and extracts code structure.",
      "Embeddings support semantic retrieval over code chunks.",
      "Neo4j captures relationships between files, symbols, and modules.",
      "RAG answers natural-language questions with grounded repository context."
    ],
    decisions: [
      "Combined graph traversal with vector retrieval instead of relying on one retrieval strategy.",
      "Stored metadata in PostgreSQL while using Neo4j for structural relationships.",
      "Used Java/Spring Boot for predictable backend APIs under hackathon time pressure."
    ],
    scaling: [
      "Indexed 50,000+ code files.",
      "Split ingestion and query concerns so indexing did not block interactive use."
    ],
    reliability: [
      "Grounded answers in retrieved code context.",
      "Kept graph relationships available for explainable traversal paths."
    ],
    lessons: [
      "Developer tools become more useful when semantic search and structural context work together.",
      "Graph-backed explanations make codebase answers easier to trust."
    ],
    metrics: [
      { label: "Indexed files", value: "50,000+" },
      { label: "Result", value: "2nd place" }
    ]
  }
];

export const openSource = [
  {
    slug: "opentelemetry",
    project: "OpenTelemetry Java",
    repo: "Apache OpenTelemetry",
    href: "https://github.com/open-telemetry/opentelemetry-java/pull/8480",
    problem:
      "Baggage header parsing could discard valid members after encountering invalid percent-encoded entries.",
    rootCause:
      "Parser recovery did not preserve valid members cleanly when one entry failed percent-decoding.",
    fix:
      "Adjusted recovery behavior so valid baggage members remain available while invalid entries are rejected.",
    testing:
      "Added regression tests and validated behavior across Linux, macOS, and Windows CI.",
    timeline: "Parser investigation -> recovery patch -> regression coverage -> merged PR"
  },
  {
    slug: "fmt",
    project: "fmt",
    repo: "C++ Formatting Library",
    href: "https://github.com/fmtlib/fmt/pull/4813/commits",
    problem:
      "A 32-bit i686 fallback uint128 bug corrupted high-word behavior in hexadecimal floating formatting.",
    rootCause:
      "format_hexfloat masked rounded bits with bitwise NOT, while fallback operator~ truncated to 32 bits.",
    fix:
      "Corrected fallback uint128 handling so high-word state survives the bitwise operation.",
    testing:
      "Validated across 32-bit and 64-bit architectures to prove the fix was not architecture-specific.",
    timeline: "32-bit reproduction -> high-word diagnosis -> fallback fix -> cross-architecture validation"
  }
];

export const achievements = [
  "AIR 7 nationally among 50,000+ candidates in SRMJEEM 2026.",
  "President of Edutech Club at VIT-AP University, delivering a 12-session systems design, AI, and placement curriculum to 500+ members.",
  "S Grade in Data Structures and Algorithms; solved 300+ LeetCode problems with 1850+ rating.",
  "AWS Certified Developer - Associate and Databricks Certified Data Engineer."
];

export const certifications = [
  "AWS Certified Developer - Associate",
  "Databricks Certified Data Engineer Professional",
  "Power Query Mastery",
  "Android app using Kotlin",
  "ShaliniVirtuals"
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "C++", "Go", "Kotlin", "TypeScript", "SQL", "Bash"]
  },
  {
    label: "Backend & Distributed",
    items: [
      "Distributed Systems",
      "Concurrency",
      "Spring Boot",
      "Kafka",
      "Microservices",
      "REST APIs",
      "FastAPI",
      "High Availability"
    ]
  },
  {
    label: "Data & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Azure AKS", "Kubernetes", "Docker", "Cloud Computing"]
  },
  {
    label: "Reliability & Support",
    items: [
      "OpenTelemetry",
      "Prometheus",
      "Testcontainers",
      "Log Analysis",
      "Issue Triage",
      "Root Cause Analysis",
      "Application Support"
    ]
  },
  {
    label: "AI / ML",
    items: ["Artificial Intelligence", "RAG", "LLM Evaluation", "Semantic Kernel", "Transformers"]
  }
];

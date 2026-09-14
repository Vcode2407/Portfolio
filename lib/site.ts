export const siteConfig = {
  name: "Vinay Kumar",
  title: "Software Engineer focused on backend systems, AI benchmarks, deterministic testing, and open source.",
  description:
    "Portfolio of Vinay Kumar, an M.Tech Computer Science student building Java and Python backend systems and deterministic Go and Rust AI coding benchmarks.",
  location: "Hyderabad, India",
  email: "vkslog69@gmail.com",
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
  { value: "10,000", label: "Jobs Load-tested", detail: "Distributed scheduler benchmark" },
  { value: "100", label: "Simulated Workers", detail: "Concurrent scheduler load test" },
  { value: "73.32s", label: "Ranking Runtime", detail: "100,000-profile CPU-only pipeline" },
  { value: "318", label: "LeetCode Problems", detail: "Algorithms and data structures" },
  { value: "2", label: "Merged Open Source Contributions", detail: "OpenTelemetry Java and fmt" },
  { value: "1622", label: "Codeforces Rating", detail: "Expert rating" }
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
    company: "Crossing Hurdles",
    role: "AI Coding Annotator (AI Benchmark Engineering)",
    period: "Sep 2026 - Present",
    location: "Remote, project-based freelance",
    summary:
      "Designs and validates deterministic coding benchmarks in Go and Rust for databases, distributed systems, crash recovery, and software-supply-chain security.",
    challenges: [
      "Real-world coding tasks must expose implementation and reasoning failures while remaining objectively verifiable.",
      "Crash recovery, protocol invariants, and supply-chain security require adversarial cases beyond happy-path tests.",
      "Every benchmark package must remain reproducible inside an isolated environment."
    ],
    architecture: [
      "Builds complete Terminal-Bench tasks with specifications, Dockerized environments, and reference solutions.",
      "Implements isolated verifiers and deterministic suites for failure, security, and restart-consistency cases.",
      "Runs static checks, rubric reviews, and Oracle/NOP evaluations before submission."
    ],
    impact: [
      "Packages reproducible benchmark submissions for upload to Deccan AI.",
      "Covers adversarial failures, protocol invariants, security checks, and restart consistency.",
      "Connects benchmark specifications, reference implementations, and verification evidence in one reviewable deliverable."
    ],
    technologies: ["Go", "Rust", "Docker", "Distributed Systems", "Databases", "Security Testing"]
  },
  {
    company: "micro1",
    role: "Software Engineer, Contract",
    period: "May 2026 - Present",
    location: "Remote from India, concurrent with M.Tech",
    summary:
      "Builds and maintains backend product features across a Java/Spring Boot, React, and PostgreSQL platform.",
    challenges: [
      "Product requirements need to be translated into clear API behavior and data-model changes.",
      "Backend issues require evidence from logs, database state, and reproducible test cases.",
      "Remote delivery depends on concise implementation notes and reliable release checks."
    ],
    architecture: [
      "Implements REST APIs and service logic with Java and Spring Boot.",
      "Works across React client flows and PostgreSQL-backed data models.",
      "Participates in design reviews, CI/CD workflows, debugging, and release validation."
    ],
    impact: [
      "Delivers backend features from clarified requirements through implementation and verification.",
      "Diagnoses defects using logs, database inspection, and regression checks.",
      "Documents API behavior and implementation decisions for review and follow-up work."
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
      "Built and tested Python/FastAPI endpoints and supporting React workflows for configuration management.",
    challenges: [
      "Configuration workflows required consistent input validation and error handling.",
      "Frontend and backend behavior needed to remain aligned as endpoints evolved.",
      "Defects had to be reproduced and isolated before changes could be verified."
    ],
    architecture: [
      "Implemented FastAPI endpoints with explicit validation and error responses.",
      "Connected API responses to React administration workflows.",
      "Added tests and debugging notes around affected request paths."
    ],
    impact: [
      "Improved the consistency of configuration workflows through clearer validation.",
      "Supported regression testing and root-cause analysis for backend and UI defects.",
      "Created a more maintainable operational path for support and engineering teams."
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
  category: "Distributed Systems" | "Backend Systems" | "AI Infrastructure" | "Developer Tools" | "Applied Algorithms";
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
    featuredMetric: "10,000-job load test",
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
      "Verified 10,000 jobs across 100 simulated workers with zero failures in the recorded load test."
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
      { label: "Jobs tested", value: "10,000" },
      { label: "Workers", value: "100" },
      { label: "Failures", value: "0" },
      { label: "Delivery", value: "At-least-once" },
      { label: "Execution", value: "Immediate, delayed, cron" }
    ]
  },
  {
    slug: "candidate-ranking",
    title: "Intelligent Candidate Ranking",
    subtitle: "A deterministic Python ranking pipeline designed for a 100,000-profile challenge dataset.",
    repo: "https://github.com/Vcode2407/redrob-intelligent-candidate-ranking",
    featuredMetric: "73.32-second full run",
    tags: ["Python", "Algorithms", "Streaming JSONL", "Top-K Ranking", "Unit Testing", "Data Validation"],
    category: "Applied Algorithms",
    overview:
      "Built a CPU-only pipeline that extracts evidence, scores candidate fit, maintains a bounded top-K, and produces a validated 100-row submission.",
    problem:
      "The ranking task required distinguishing production evidence from keyword-heavy profiles while processing 100,000 records within strict runtime and memory limits.",
    architecture: [
      "Streams JSONL records instead of loading the full dataset into memory.",
      "Extracts technical, experience, career, behavior, and risk signals from each profile.",
      "Maintains a bounded top-100 ranking and generates candidate-specific reasons.",
      "Validates unique IDs, complete ranks, score ordering, and output structure before delivery."
    ],
    decisions: [
      "Weighted career-history evidence more heavily than free-text skill lists.",
      "Used a deterministic scoring formula so every result can be reproduced and audited.",
      "Kept the runtime CPU-only with no external API dependency during ranking."
    ],
    scaling: [
      "Processed the 100,000-profile challenge pool in 73.32 seconds in the recorded full run.",
      "Used streaming input and bounded top-K storage to control memory growth."
    ],
    reliability: [
      "Unit tests cover ranking behavior and submission requirements.",
      "The final submission passed the challenge validator with 100 unique, ordered candidates.",
      "Candidate-specific explanations are grounded in extracted profile evidence."
    ],
    lessons: [
      "A useful ranking system must make both positive signals and penalties explainable.",
      "Determinism makes debugging and reviewer trust easier than opaque score generation.",
      "Streaming and bounded data structures often matter more than model complexity at this scale."
    ],
    metrics: [
      { label: "Profiles", value: "100,000" },
      { label: "Runtime", value: "73.32s" },
      { label: "Final ranks", value: "100" },
      { label: "External APIs", value: "0" }
    ]
  },
  {
    slug: "cloud-drive",
    title: "CloudDrive",
    subtitle: "A tested Spring Boot backend for authenticated cloud file storage and sharing.",
    repo: "https://github.com/Vcode2407/Cloud-Drive",
    featuredMetric: "Testcontainers integration coverage",
    tags: ["Java", "Spring Boot", "PostgreSQL", "AWS S3", "Redis", "Elasticsearch", "Docker"],
    category: "Backend Systems",
    overview:
      "Built a Google Drive-style backend with authenticated REST APIs, relational metadata, object storage, caching, search, migrations, and automated tests.",
    problem:
      "A file platform must keep identity, metadata, object bytes, versions, shares, and cache state consistent while preserving secure access and recoverable deletes.",
    architecture: [
      "Spring Boot controllers expose authentication, file, folder, version, sharing, and search APIs.",
      "PostgreSQL stores users, metadata, versions, shares, refresh tokens, and resumable-upload sessions.",
      "AWS S3 stores file bytes while Redis caches hot metadata and Elasticsearch indexes searchable fields.",
      "Flyway migrations and Docker Compose make the data services reproducible."
    ],
    decisions: [
      "Separated object bytes from relational metadata and stored SHA-256 hashes alongside object keys.",
      "Used rotating persisted refresh tokens while keeping access tokens stateless.",
      "Made deletes soft by default and guarded permanent object deletion against remaining metadata references."
    ],
    scaling: [
      "Keeps large file bytes in S3 instead of the application database.",
      "Uses Redis for frequently accessed metadata and Elasticsearch for low-latency discovery."
    ],
    reliability: [
      "Mockito unit tests cover service behavior and error paths.",
      "Testcontainers integration tests exercise PostgreSQL-backed workflows.",
      "Flyway migrations version the source-of-truth schema."
    ],
    lessons: [
      "Object storage and metadata databases need explicit consistency boundaries.",
      "Secure file sharing depends on authorization checks at every metadata and download path.",
      "Integration tests catch persistence and migration failures that isolated unit tests cannot."
    ],
    metrics: [
      { label: "Backend", value: "Spring Boot 3" },
      { label: "Metadata", value: "PostgreSQL" },
      { label: "Objects", value: "AWS S3" },
      { label: "Cache", value: "Redis" },
      { label: "Testing", value: "Testcontainers" }
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
  "President of Edutech Club at VIT-AP University, delivering a 12-session systems design, AI, and placement curriculum to 500+ members.",
  "S Grade in Data Structures and Algorithms; solved 318 LeetCode problems.",
  "Codeforces Expert with a 1622 rating.",
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

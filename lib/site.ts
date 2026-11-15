export const siteConfig = {
  name: "Vinay Kumar",
  title: "Software engineer focused on backend systems, reproducible tests, and open source.",
  description:
    "Portfolio of Vinay Kumar, a software engineer and M.Tech Computer Science student building Java, Python, and JavaScript applications, reliable backend systems, and reproducible tests.",
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
    company: "Mercor",
    role: "Software Engineer",
    period: "26 Oct 2026 - Present",
    location: "",
    summary:
      "Contribute to a software engineering project while pursuing an M.Tech in Computer Science and Engineering.",
    challenges: [],
    architecture: [],
    impact: [],
    technologies: []
  },
  {
    company: "Crossing Hurdles",
    role: "AI Coding Annotator (Freelance)",
    period: "Sep 2026 - Present",
    location: "Remote, project-based freelance",
    summary:
      "Authors and validates coding tasks for AI evaluation, with reproducible environments and tests for distributed systems, crash recovery, and security.",
    challenges: [
      "All eight remote evaluation runs stopped during verifier startup, before behavioral tests could run.",
      "Zero rewards initially resembled incorrect solutions; detailed logs instead identified a filesystem-boundary error.",
      "Local Docker checks passed, so the remote mounted-folder behavior needed a separate reproduction."
    ],
    architecture: [
      "Reproduced the startup error with a nested mounted folder and traced it to a same-filesystem-device assumption.",
      "Removed that assumption while retaining permission, link, and file-identity safeguards.",
      "Added mounted-folder regression cases and compared reference and untouched-starter behavior."
    ],
    impact: [
      "Verified 19/19 reference checks and 0/19 passes for the untouched starter.",
      "The corrected submission passed all seven Stage 1 gates.",
      "Kept infrastructure startup failures distinct from genuine model-solution failures."
    ],
    technologies: ["Docker", "Linux", "Regression Testing", "Distributed Systems", "AI Code Evaluation"]
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
    role: "AI Coding Evaluator (Freelance)",
    period: "May 2025 - Feb 2026",
    location: "Remote",
    summary:
      "Evaluated AI-generated code against task guidelines, checking correctness, edge cases, and the quality of explanations.",
    challenges: [
      "Each task required understanding its instructions before judging a proposed solution.",
      "Plausible code could still miss edge cases or fail to meet the requested behavior.",
      "Useful feedback needed specific evidence rather than unsupported impressions."
    ],
    architecture: [
      "Reviewed code and reasoning against the supplied evaluation criteria.",
      "Used reproducible examples and tests to examine correctness and failure cases.",
      "Documented defects and clear reasons for evaluation decisions."
    ],
    impact: [
      "Provided guideline-based feedback on code correctness and explanation quality.",
      "Separated working implementations from answers that only appeared convincing.",
      "Built a careful, evidence-based approach to reviewing AI outputs."
    ],
    technologies: ["Code Review", "Testing", "Debugging", "AI Output Evaluation"]
  },
  {
    company: "TMEIC India",
    role: "Software Engineering Intern",
    period: "Mar 2024 - Sep 2024",
    location: "",
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
  }
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  repo: string;
  featured?: true;
  featuredMetric: string;
  benchmark?: { href: string; methodology: string };
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
    slug: "release-flags",
    title: "Release Flags",
    subtitle: "A Java feature flag service with gradual rollouts, audited rollback, and local evaluation.",
    repo: "https://github.com/Vcode2407/release-flags",
    featured: true,
    featuredMetric: "0 B body on unchanged polls",
    benchmark: {
      href: "https://github.com/Vcode2407/release-flags/blob/main/docs/benchmark.md",
      methodology:
        "A local Docker Compose run polled the same 21-flag snapshot over one persistent HTTP connection. Each path used 5 warm-ups and 40 timed requests. Latency includes authentication and database access. Body counts exclude HTTP headers."
    },
    tags: ["Java 21", "Spring Boot", "PostgreSQL", "HTTP ETags", "Flyway", "Docker"],
    category: "Backend Systems",
    overview:
      "Built a feature flag service that coordinates versioned writes in PostgreSQL and provides a Java client for evaluating cached rules.",
    problem:
      "If a publisher loses the HTTP response after a rollout or rollback commits, the client needs to recover the write result without creating another revision.",
    architecture: [
      "The Spring Boot API accepts version-checked publishes and rollbacks. PostgreSQL stores the audit history and the current revision for each flag.",
      "The Java client polls environment snapshots with an ETag and evaluates deterministic rollout rules in memory."
    ],
    decisions: [
      "Persisted each retry key on the audit revision in the same transaction as the flag update.",
      "Checked for a saved result before checking the current flag revision so the retry still works after a newer write.",
      "Serialized writes within an environment and used repeatable-read snapshots to keep the rules and their ETag consistent."
    ],
    scaling: [
      "An unchanged poll returned HTTP 304 with a 0-byte response body. A full HTTP 200 snapshot returned 2,402 bytes.",
      "Median end-to-end latency was 67.48 ms for conditional polls and 69.50 ms for full reads in the local run."
    ],
    reliability: [
      "After a rollback committed, killed and restarted the Docker API, then retried with the original key. The API returned the same response, and audit history and the snapshot revision confirmed a single write.",
      "Passed 18 automated tests, including concurrent retries, conflicting key reuse, and replay after a newer revision."
    ],
    lessons: [
      "A lost HTTP response can leave a committed operation behind. Storing the retry key alongside the result lets the API recover it after process loss.",
      "Conditional polling saves response bytes while both paths still pay for authentication and a database revision check."
    ],
    metrics: [
      { label: "Full snapshot body", value: "2,402 B" },
      { label: "Unchanged poll body", value: "0 B" },
      { label: "Full snapshot p95", value: "73.83 ms" },
      { label: "Unchanged poll p95", value: "72.38 ms" }
    ]
  },
  {
    slug: "distributed-job-scheduler",
    title: "Distributed Job Scheduler",
    subtitle: "A fault-tolerant scheduler for immediate, delayed, and cron-based execution.",
    repo: "https://github.com/Vcode2407/distributed-job-scheduler",
    featured: true,
    featuredMetric: "10,000 jobs · 0 failures",
    benchmark: {
      href: "https://github.com/Vcode2407/distributed-job-scheduler/blob/main/docs/benchmark-report.md",
      methodology:
        "The recorded Docker Compose load test used 100 simulated workers, 100 concurrent submitters, and lease batches of 25."
    },
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
      { label: "Jobs completed", value: "10,000" },
      { label: "Simulated workers", value: "100" },
      { label: "Failures", value: "0" },
      { label: "Throughput", value: "58.47 jobs/s" },
      { label: "p95 latency", value: "3,010 ms" }
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
    featured: true,
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
  },
  {
    slug: "scoutsearch",
    title: "ScoutSearch",
    subtitle: "A local documentation search engine with explainable BM25 ranking and atomic index updates.",
    repo: "https://github.com/Vcode2407/ScoutSearch",
    featured: true,
    featuredMetric: "13.91 → 2.42 ms broad-query p50",
    benchmark: {
      href: "https://github.com/Vcode2407/ScoutSearch/blob/main/docs/real-corpus.md",
      methodology:
        "The local benchmark used 1,654 passages from 382 CPython documentation files, with three timed repetitions after warming each path. It measured the search engine in-process."
    },
    tags: ["Python", "SQLite", "BM25", "React", "TypeScript", "Benchmarking"],
    category: "Applied Algorithms",
    overview:
      "Built a document search engine with a positional inverted index, exact-phrase matching, and explanations showing how each term contributes to a result's score.",
    problem:
      "Engineering documentation needs searchable terms and exact phrases, with ranking that can be inspected and verified while documents are edited or imported.",
    architecture: [
      "The Python indexer normalizes input and stores documents, corpus statistics, and positional postings in SQLite.",
      "The search engine uses covering indexes and SQL arithmetic for BM25 scoring. Phrase queries verify term positions before ranking.",
      "The React interface renders results and explains per-term score contributions."
    ],
    decisions: [
      "Used SQL aggregation for broad term queries and retained positional verification for exact phrases.",
      "Used transactions for index updates and consistent snapshots for search reads."
    ],
    scaling: [
      "Broad-query median latency fell from 13.91 ms to 2.42 ms on the pinned local corpus.",
      "The same benchmark records selective, phrase, and collection-filter workloads so their tradeoffs remain visible."
    ],
    reliability: [
      "All 27 query configurations matched the independent full-scan reference on match counts, top-10 rankings, and scores.",
      "The corpus manifest and evaluation script document how to reproduce the benchmark."
    ],
    lessons: [
      "Benchmark each query shape against a correctness reference before optimizing.",
      "Keep ranking statistics and document postings on the same read snapshot during concurrent updates."
    ],
    metrics: [
      { label: "Documentation passages", value: "1,654" },
      { label: "Broad-query p50 before", value: "13.91 ms" },
      { label: "Broad-query p50 after", value: "2.42 ms" },
      { label: "Query configurations matching reference", value: "27/27" }
    ]
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export const openSource = [
  {
    slug: "kiota-java",
    project: "Microsoft Kiota Java",
    repo: "microsoft/kiota-java",
    prNumber: 2246,
    href: "https://github.com/microsoft/kiota-java/pull/2246",
    problem:
      "Deserializing a Microsoft Graph enum set threw an exception when every value was unknown to the SDK.",
    rootCause:
      "The JSON parser filtered unknown values out and passed the resulting empty list to EnumSet.copyOf, which cannot infer an enum type from an empty list.",
    fix:
      "Returned null for unknown-only sets to preserve the parser's empty-input behavior. Mixed sets still retain all recognized values.",
    testing:
      "Added regression tests for unknown-only and mixed sets. The JSON module passed 40 tests, Spotless, and SpotBugs.",
    timeline: "Merged November 11, 2026"
  },
  {
    slug: "opentelemetry",
    project: "OpenTelemetry Java",
    repo: "open-telemetry/opentelemetry-java",
    prNumber: 8480,
    href: "https://github.com/open-telemetry/opentelemetry-java/pull/8480",
    problem:
      "Baggage header parsing could discard valid members after encountering invalid percent-encoded entries.",
    rootCause:
      "An IllegalArgumentException from percent-decoding a malformed member aborted parsing of the remaining header.",
    fix:
      "Skipped the malformed member and continued parsing the remaining entries in the header.",
    testing:
      "Added regression tests and validated behavior across Linux, macOS, and Windows CI.",
    timeline: "Merged June 25, 2026"
  },
  {
    slug: "fmt",
    project: "fmt",
    repo: "fmtlib/fmt",
    prNumber: 4813,
    href: "https://github.com/fmtlib/fmt/pull/4813",
    problem:
      "Hexadecimal floating-point formatting failed to compile on 32-bit i686 builds using fmt's fallback unsigned 128-bit type.",
    rootCause:
      "format_hexfloat uses bitwise NOT to mask rounded bits, and the fallback uint128 type lacked unary operator~.",
    fix:
      "Implemented bitwise NOT for both halves of the fallback uint128 type.",
    testing:
      "Added fallback uint128 regression coverage and verified x86-64 and i686 builds.",
    timeline: "Merged June 18, 2026"
  }
];

export const metrics = [
  { value: "10,000", label: "Scheduler jobs completed", detail: "Local load test across 100 simulated workers" },
  { value: "0", label: "Scheduler job failures", detail: "Recorded 10,000-job run" },
  { value: "2.42 ms", label: "ScoutSearch broad-query p50", detail: "Down from 13.91 ms on the pinned corpus" },
  { value: "27/27", label: "ScoutSearch reference matches", detail: "Match counts, top-10 rankings, and scores" },
  { value: "1,654", label: "Documentation passages", detail: "ScoutSearch benchmark corpus" },
  { value: String(openSource.length), label: "Featured merged PRs", detail: "Kiota Java, OpenTelemetry Java, and fmt" }
];

export const achievements = [
  "Placement lead for the current M.Tech cohort at SRM University-AP.",
  "Former club president at VIT-AP University, with volunteering and student coordination experience.",
  "Hackathon participation and continued data structures and algorithms practice on LeetCode and Codeforces."
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Bash"]
  },
  {
    label: "Systems & Design",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Design",
      "Linux / Unix",
      "Concurrency",
      "Distributed Systems"
    ]
  },
  {
    label: "Backend & Web",
    items: [
      "Spring Boot",
      "Kafka",
      "REST APIs",
      "FastAPI",
      "React"
    ]
  },
  {
    label: "Data & Cloud",
    items: ["PostgreSQL", "Redis", "AWS S3 (CloudDrive project)", "Docker"]
  },
  {
    label: "Testing & Developer Tools",
    items: [
      "OpenTelemetry",
      "Testcontainers",
      "Git",
      "Unit & Integration Tests",
      "Regression Testing",
      "Log Analysis",
      "Root Cause Analysis",
      "AI Output Evaluation"
    ]
  },
  {
    label: "Working Knowledge",
    items: ["C++", "Go", "Rust"]
  }
];

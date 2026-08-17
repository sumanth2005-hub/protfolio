export const profile = {
  name: "Sumanth M B",
  handle: "sumanth",
  role: "Backend Engineer",
  location: "Bengaluru, India",
  email: "sumanthgowdas638@gmail.com",
  phone: "+91 9611458355",
  github: "https://github.com/sumanth2005-hub",
  linkedin: "https://www.linkedin.com/in/sumanth-m-b-3a221a2a3/",
  summary:
    "Backend-focused CS student building production-grade real-time systems with Java 17, Spring Boot, and REST APIs. Shipped two end-to-end backend projects — a live network packet inspector and an AI-assisted civic platform — owning everything from system design to deployment. Targeting backend engineering internships and jobs, 2026–27.",
};

export const education = {
  school: "Presidency University, Bengaluru",
  degree: "B.Tech — Computer Science & Engineering (Data Science)",
  years: "2023 – 2027",
  cgpa: "7.06",
  extra: ["Class XII: 93%", "Class X: 84%"],
};

export const skills = {
  languages: ["Java 17 & 21", "Python 3", "HTML", "CSS", "JavaScript"],
  backend: ["Spring Boot 3", "Spring Data JPA", "REST API Design", "Django", "Flask"],
  databases: ["MySQL", "MongoDB", "SQLite", "PostgreSQL"],
  tools: ["Git & GitHub", "Maven", "Postman", "Linux CLI"],
  libraries: ["pcap4j", "SSE", "Gemini API", "Fast2SMS API"],
  core: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"],
};

export const projects = [
  {
    id: "dpi-analyzer",
    name: "DPI Analyzer",
    tagline: "Real-Time Deep Packet Inspection System",
    status: "completed",
    stack: ["Java 17", "Spring Boot 3.3", "pcap4j", "MySQL", "Spring Data JPA", "SSE", "HTML/CSS/JS"],
    github: "https://github.com/sumanth2005-hub",
    points: [
      "Engineered a real-time packet capture engine using pcap4j inspecting live traffic across 9+ protocols (HTTP, HTTPS, DNS, SSH, MySQL) — capturing IP, port, and transport-layer metadata per packet.",
      "Designed an SSE-based streaming pipeline pushing live traffic events to a browser dashboard with sub-second latency, eliminating client polling.",
      "Built a bounded in-memory ring buffer with a Linked Blocking Deque to handle high-throughput packet streams without memory overflow under sustained load.",
      "Integrated Spring Data JPA with MySQL for persistent traffic logging and historical packet query support across sessions.",
      "Developed a responsive, dark-themed monitoring dashboard with real-time chart updates and protocol-level traffic breakdown.",
    ],
  },
  {
    id: "jan-suvidha",
    name: "Jan-Suvidha Portal",
    tagline: "AI-Assisted Government Scheme Recommendation Platform",
    status: "completed",
    stack: ["Python", "Django", "Flask", "MongoDB", "SQLite", "Gemini API", "Fast2SMS API", "HTML/CSS/JS"],
    github: "https://github.com/sumanth2005-hub",
    points: [
      "Built a citizen welfare platform with a rule-based eligibility engine using 9+ condition validators to match users to relevant government schemes by demographics and income.",
      "Integrated Gemini API for intelligent contextual scheme recommendations and natural-language explanation generation for non-technical users.",
      "Implemented OTP-based citizen authentication via Fast2SMS API with secure session handling and multi-step registration workflow.",
      "Designed an admin analytics dashboard for scheme usage tracking, citizen registration stats, and voice-assisted accessibility features.",
      "Architected a dual-database layer (MongoDB for documents, SQLite for relational data) with clean service separation across backend modules.",
    ],
  },
  {
    id: "log-analytics",
    name: "Distributed Log Analytics System",
    tagline: "Real-Time Root Cause Analysis for Microservices Monitoring",
    status: "building",
    stack: ["Java 17", "Spring Boot 3", "Kafka", "Neo4j", "Redis", "Elasticsearch", "MySQL", "Python", "LangChain", "React", "Docker"],
    github: "https://github.com/sumanth2005-hub",
    points: [
      "Ingests logs from 6 mock microservices in real-time via Kafka instead of batch processing, avoiding blocking calls and enabling stream replay.",
      "Detects service failures and degradation using error-rate thresholds, with a Resilience4j circuit breaker triggering fast-fail behavior instead of hanging requests.",
      "Traces failure propagation across dependent services using BFS/DFS graph traversal on a Neo4j-modeled service dependency graph — distinguishing true root cause from downstream or unrelated failures.",
      "Uses polyglot persistence (Elasticsearch for log search, Redis for live error counters, MySQL for permanent records, Neo4j for the dependency graph) so each store handles only what it's best at.",
      "Generates plain-English root-cause explanations via a Python + LangChain AI layer that reads the graph output.",
      "Streams live system health to a React dashboard over WebSocket, updating in real time without a page refresh.",
    ],
  },
];

export const achievements = [
  "Top 3 finish at TechBiz College Hackathon — built and demoed a functional prototype under a 24-hour time constraint.",
  "Earned HackerRank certifications in Java and Python; completed multiple badge tracks in Problem Solving and SQL.",
  "Coursera 'Python for Everybody' Certification — foundational data programming and API integration.",
];

export const currentlyBuilding =
  "Leading backend development on a Distributed Log Analytics System for microservices monitoring (Java, Spring Boot, Kafka, Neo4j, Redis, Elasticsearch) with graph-based root cause analysis. Actively grinding DSA (arrays, trees, graphs, DP) and strengthening LLD fundamentals for backend engineering interviews.";
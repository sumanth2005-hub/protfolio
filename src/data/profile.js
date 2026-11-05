export const profile = {
  name: "Sumanth M B",
  handle: "sumanth",
  role: "Software Engineer · Backend Development",
  location: "Bengaluru, India",
  email: "sumanthgowdas637@gmail.com",
  phone: "+91 9611458355",
  github: "https://github.com/sumanth2005-hub",
  linkedin: "https://www.linkedin.com/in/sumanth-m-b-3a221a2a3/",
  summary: "Computer Science Engineering student focused on Java backend development, distributed systems, REST APIs, and event-driven architecture.",
};

export const education = {
  school: "Presidency University, Bengaluru",
  degree: "B.Tech — Computer Science & Engineering (Data Science)",
  years: "2023 – 2027",
  cgpa: "7.06",
  extra: ["Class XII: 93%", "Class X: 84%"],
};

export const projects = [
  {
    id: "distributed-log-analytics",
    category: "DISTRIBUTED SYSTEMS",
    name: "Distributed Log Analytics & Microservices Monitoring Platform",
    tagline: "Real-time observability and service dependency analysis",
    description: "A distributed observability platform built around independent Spring Boot services, Kafka event streaming, Redis counters, and Neo4j service-dependency analysis.",
    status: "completed",
    stack: ["Java 17", "Spring Boot", "Apache Kafka", "Redis", "Neo4j", "Docker Compose", "REST"],
    github: "https://github.com/sumanth2005-hub",
    points: [
      "Built 6 independent Spring Boot microservices: 5 domain services and a dashboard service.",
      "Published structured log events to Kafka and consumed them in real time.",
      "Implemented Redis live counters using an atomic Lua script with Kafka partition-offset de-duplication.",
      "Modeled the service call graph in Neo4j and implemented weighted PageRank (damping 0.85, 50 iterations).",
      "Containerized the stack as a 10-container Docker Compose deployment and added traffic-generation and chaos scripts.",
    ],
  },
  {
    id: "dpi-analyzer",
    category: "NETWORK ENGINEERING",
    name: "DPI Analyzer — Real-Time Deep Packet Inspection System",
    tagline: "Live packet capture, inspection, and streaming dashboard",
    description: "A real-time packet inspection system that captures network traffic, streams events to a browser dashboard, and stores historical traffic records.",
    status: "completed",
    stack: ["Java 17", "Spring Boot 3.3", "pcap4j", "MySQL", "Spring Data JPA", "SSE"],
    github: "https://github.com/sumanth2005-hub",
    points: [
      "Engineered packet capture across 9+ protocols, including HTTP, HTTPS, DNS, SSH, and MySQL.",
      "Designed an SSE pipeline for sub-second browser updates without client polling.",
      "Built a bounded in-memory ring buffer using LinkedBlockingDeque.",
      "Integrated MySQL persistence and historical packet queries.",
      "Developed a responsive monitoring dashboard with real-time chart updates and protocol breakdowns.",
    ],
  },
];

export const achievements = [
  "Top 3 finish at TechBiz College Hackathon — built and demoed a functional prototype under a 24-hour time constraint.",
  "HackerRank certifications in Java and Python; badge tracks in Problem Solving and SQL.",
  "Coursera Python for Everybody certification — foundational data programming and API integration.",
];

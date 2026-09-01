/**
 * Single source of truth for every word on the site.
 * Edit here — the components render whatever this file says.
 */

export const profile = {
  name: "Akif Aziz",
  role: "AI Engineer",
  roleAlt: "Software Engineer",
  tagline:
    "I build multi-agent systems, RAG pipelines, and the full-stack products they live in.",
  location: "Lahore, Pakistan",
  email: "makifaziz06@gmail.com",
  phone: "+92 335 5623796",
  resume: "/Akif_Aziz_Resume.pdf",
  socials: {
    github: "https://github.com/akif-aziz06",
    linkedin: "https://linkedin.com/in/akif-aziz-211972281",
    website: "https://akifaziz.me",
  },
  summary: [
    "AI Engineer and Computer Science undergraduate with hands-on experience designing enterprise-grade multi-agent systems, Retrieval-Augmented Generation (RAG) pipelines, and full-stack AI applications.",
    "Proficient in Python, FastAPI, LangChain, LangGraph, and modern LLM frameworks (OpenAI GPT-4o, Anthropic Claude, Mistral, Ollama, vLLM). Skilled in vector databases, knowledge graphs, and containerized deployment with Docker.",
    "Proven track record of translating business requirements into scalable AI solutions that cut manual processing time by 60%+, backed by a strong foundation in machine learning, NLP, and prompt engineering.",
  ],
} as const;

/**
 * Hero stats describe the person, not any one project.
 * Project-specific numbers belong to the project — see `projects[].metrics`.
 */
export const stats = [
  { value: "2+ yrs", label: "Professional experience" },
  { value: "60%+", label: "Manual processing time cut" },
  { value: "5", label: "LLM runtimes integrated" },
  { value: "BSCS '26", label: "Bahria University Lahore" },
] as const;

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Engineer",
    company: "Rizviz International Impex",
    location: "Lahore, Pakistan",
    period: "July 2025 — Present",
    current: true,
    bullets: [
      "Engineered enterprise-level multi-agent systems with LangChain and LangGraph, streamlining business operations and cutting manual processing time by 60%+.",
      "Implemented AI solutions on OpenAI GPT-4o, Anthropic Claude, and Mistral through API integrations plus local Ollama and vLLM deployments for optimized inference.",
      "Developed advanced RAG architectures over vector databases (Pinecone, ChromaDB) and knowledge graphs (Neo4j, Memgraph) for contextual search and complex query resolution.",
      "Created scalable web automation with Selenium, Playwright, and Scrapy — intelligent parsing strategies, proxy management, and high-volume extraction workflows.",
      "Facilitated requirement gathering with business teams, translating functional needs into technical specifications and actionable development plans.",
      "Applied PyTorch, TensorFlow, and scikit-learn to NLP pipelines, predictive models, and computer vision applications.",
      "Deployed containerized applications with Docker for consistent, reproducible environments across development and production.",
      "Orchestrated REST/GraphQL integrations with enterprise SaaS platforms, creating cohesive AI automation across cross-platform data workflows.",
    ],
    stack: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "Pinecone",
      "Memgraph",
      "PyTorch",
      "Docker",
    ],
  },
  {
    role: "Frontend Web Developer",
    company: "BWS",
    location: "Remote",
    period: "May 2024 — June 2025",
    bullets: [
      "Developed responsive frontend websites in HTML5, CSS3, and JavaScript, wired to backend databases through phpMyAdmin and XAMPP environments.",
      "Designed user interfaces and prepared course material — presentations and documentation — supporting client training and onboarding.",
      "Managed data and reporting across MS Excel, Word, PowerPoint, and Google Workspace to streamline team workflows.",
      "Collaborated with remote teams to deliver web solutions on schedule, using Git and GitHub for source-control management.",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "PHP", "MySQL", "Git"],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  period: string;
  context: string;
  summary: string;
  /** Headline numbers for this project, shown on its card. */
  metrics?: { value: string; label: string }[];
  highlights: string[];
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "TradeMate",
    subtitle: "A Unified Global Trade Solution",
    period: "Sep 2025 — May 2026",
    context: "Final Year Project · Bahria University Lahore Campus",
    summary:
      "Co-developed an AI-powered trade intelligence platform for the Pakistan–US corridor that automates HS code classification, duty exemption analysis, and total landed (DDP) cost calculation for SMEs.",
    metrics: [
      { value: "96%", label: "Agent routing accuracy" },
      { value: "5,000+", label: "HS codes in knowledge graph" },
      { value: "<100ms", label: "Cypher graph traversal" },
      { value: "5", label: "Specialized agent tools" },
    ],
    highlights: [
      "Built a LangGraph ReAct agent whose Router Node selects from five specialized tools — Pakistan PCT Search, US HTS Search, Document Search, Route Evaluation, and Web Search — reaching 96% routing accuracy on a 100-query benchmark.",
      "Engineered a Memgraph knowledge graph of 5,000+ HS codes with hierarchical Chapter → SubChapter → Heading → HSCode relationships, enabling sub-100ms Cypher traversal.",
      "Implemented a Pinecone vector database with semantic chunking over 1536-dimensional embeddings of trade policy documents, FTAs, and SROs for document-level search.",
      "Designed a bidirectional Route Engine aggregating live Freightos spot quotes, origin/destination handling, customs brokerage, and HMF/MPF fees behind a 4-second timeout with cached fallback.",
      "Shipped the full stack: Next.js 16 + React 19 + Tailwind frontend, FastAPI (Python 3.12) backend, background ingestion via Celery, Redis, and Celery Beat workers.",
      "Integrated the OpenAI Realtime API for 60-second voice conversations, with Argon2 + JWT authentication across microservices.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "GPT-4o",
      "Claude",
      "Memgraph",
      "Pinecone",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Next.js",
      "React",
      "Tailwind",
      "Docker",
    ],
    featured: true,
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI / Agents",
    items: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "AutoGen",
      "CrewAI",
      "OpenAI API",
      "Anthropic API",
      "Hugging Face",
      "Ollama",
      "vLLM",
      "Prompt Engineering",
      "Generative AI",
    ],
  },
  {
    category: "Machine Learning / Deep Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Transformers",
      "PEFT / LoRA Fine-Tuning",
      "Computer Vision",
      "NLP",
    ],
  },
  {
    category: "RAG & Knowledge Graphs",
    items: [
      "RAG Pipelines",
      "Pinecone",
      "ChromaDB",
      "Weaviate",
      "Neo4j",
      "Memgraph",
      "SPARQL",
      "Graph Traversal",
    ],
  },
  {
    category: "Languages",
    items: [
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "C++",
      "SQL",
      "Bash / Shell",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Figma",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Celery",
    ],
  },
  {
    category: "DevOps / Cloud",
    items: ["Docker", "Linux", "Git & GitHub"],
  },
  {
    category: "Data / Web Scraping",
    items: [
      "Selenium",
      "Playwright",
      "Scrapy",
      "BeautifulSoup",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
];

export const education = [
  {
    degree: "BS in Computer Science",
    school: "Bahria University Lahore Campus",
    location: "Lahore, Pakistan",
    period: "Sep 2022 — Jun 2026",
  },
  {
    degree: "FSc Pre-Engineering",
    school: "Fazaia Intermediate College",
    location: "Lahore, Pakistan",
    period: "Aug 2020 — Jul 2022",
  },
  {
    degree: "Matriculation in Science (Biology)",
    school: "Cadet College Okara",
    location: "Okara, Pakistan",
    period: "Apr 2017 — Apr 2020",
  },
] as const;

export const softSkills = [
  "Leadership",
  "Communication",
  "Problem-Solving",
  "Critical Thinking",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Attention to Detail",
  "Analytical Thinking",
  "Continuous Learning",
  "Cross-Functional Collaboration",
  "Requirement Gathering",
] as const;

export const languages = [
  { name: "English", level: "Expert" },
  { name: "Urdu", level: "Native" },
  { name: "Punjabi", level: "Native" },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

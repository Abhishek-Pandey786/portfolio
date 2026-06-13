export const siteConfig = {
  name: "Abhishek Pandey",
  siteUrl: "https://example.com",
  location: "India / Remote",
  tagline:
    "Backend-oriented software engineer building scalable APIs, intelligent workflows, and operational automation systems.",
  heroTitles: [
    "Backend Engineer",
    "Full Stack Developer",
    "AI Workflow Systems",
    "API & Automation Engineer",
  ],
  heroStatline: "Robust APIs · Structured Backends · AI-Assisted Workflows",
  navigation: [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  social: {
    github: "https://github.com/Abhishek-Pandey786",
    linkedin: "https://www.linkedin.com/in/abhishek-pandey-a4534a23b",
    leetcode: "https://leetcode.com/u/Abhishek8122",
    email: "mailto:abhipa233@gmail.com",
    emailLabel: "abhipa233@gmail.com",
  },
  stats: [
    { label: "Major Projects", value: "6+" },
    { label: "Languages & Tools", value: "20+" },
    { label: "Workflow Systems", value: "3+" },
    { label: "AI Evaluations", value: "Daily" },
  ],
  about: {
    eyebrow: "About me",
    title: "Backend-oriented builder with AI workflow exposure",
    terminalLine:
      "$ init portfolio --mode=backend-engineer --focus=ai-workflows",
    description:
      "I blend systems-oriented engineering with AI evaluation workflows to build reliable APIs, full-stack applications, and operational automation systems.",
    highlights: [
      {
        title: "Backend & API Engineering",
        description:
          "Designing scalable workflows and modular backends using Python, Node.js, FastAPI, and Flask.",
        icon: "server",
      },
      {
        title: "AI Workflow Evaluation",
        description:
          "Assessing LLM responses, optimizing prompts, and analyzing AI quality in operational pipelines.",
        icon: "brain",
      },
      {
        title: "Structured Implementation",
        description:
          "Focusing on repository-oriented development, MVC architectures, and clean database integrations.",
        icon: "code",
      },
    ],
  },
  journey: {
    title: "From fundamentals to production workflows",
    description:
      "Each chapter highlights momentum: learning core OOPs, building full-stack apps, and evaluating AI models.",
    timeline: [
      {
        year: "2022–24",
        title: "Core Engineering Concepts",
        description:
          "Mastered OOPs, MVC architecture, SQL, and repository-oriented development.",
        tag: "Fundamentals",
      },
      {
        year: "2024–25",
        title: "Full Stack & Backend Projects",
        description:
          "Developed CampusSync, CUMA, and microservices platforms with robust APIs.",
        tag: "Engineering",
      },
      {
        year: "2026",
        title: "AI Workflow Integration",
        description:
          "Joined Ethara AI to evaluate LLM responses and optimize analytical workflows.",
        tag: "Operations",
      },
    ],
  },
  skills: {
    title: "A systems-focused engineering stack",
    description:
      "Focused on building maintainable backends, automated workflows, and operational dashboards.",
    groups: [
      {
        title: "Languages",
        icon: "code",
        items: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C++"],
      },
      {
        title: "Backend",
        icon: "server",
        items: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"],
      },
      {
        title: "Frontend",
        icon: "layout",
        items: [
          "React.js",
          "Next.js",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Material UI",
        ],
      },
      {
        title: "Databases",
        icon: "database",
        items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
      },
      {
        title: "Developer Tools",
        icon: "wrench",
        items: [
          "Git",
          "GitHub",
          "Docker",
          "Postman",
          "Maven",
          "VS Code",
          "Jupyter",
        ],
      },
      {
        title: "Core Concepts",
        icon: "book",
        items: [
          "OOPs",
          "MVC Architecture",
          "Modular Architecture",
          "Repository-Oriented Dev",
          "Role-Based Systems",
          "API Engineering",
          "Workflow Automation",
        ],
      },
      {
        title: "AI & Analytical",
        icon: "brain",
        items: [
          "LLM Evaluation",
          "Prompt Engineering",
          "Quality Analysis",
          "Structured Reasoning",
          "Operational Intelligence",
        ],
      },
    ],
  },
  experience: {
    title: "Experience rooted in operations and evaluation",
    description:
      "Supporting AI pipelines and ensuring workflow consistency through analytical assessment.",
    roles: [
      {
        title: "LLM Post-Training Intern",
        org: "Ethara AI",
        duration: "Jan 2026 – May 2026 · Remote",
        description:
          "Evaluating AI-generated responses and optimizing structured analytical workflows in production evaluation pipelines.",
        highlights: [
          "Evaluated 800+ LLM responses across complex reasoning, instruction-following, and coding benchmarks, driving a ~15% improvement in post-training model alignment.",
          "Identified and cataloged 100+ prompt-response anomalies and logic hallucinations, providing critical failure-mode analysis that reduced pipeline evaluation error rates by ~20%.",
          "Collaborated in benchmarking structured response evaluation workflows, streamlining feedback cycles by ~25% for internal AI evaluation pipelines.",
          "Designed structured test cases and reasoning prompts, expanding evaluation benchmark coverage by ~30% for domain-specific LLM workflows.",
        ],
        stack: [
          "Prompt Analysis",
          "Quality Assessment",
          "Workflow Evaluation",
          "Structured Reasoning",
        ],
      },
    ],
  },
  projects: {
    title: "Structured backend and full-stack projects",
    description:
      "Each build showcases systems thinking, modular architecture, and API-driven design.",
    featured: {
      title: "CampusSync",
      category: "Intelligent Workflow Automation",
      description:
        "Flagship backend system featuring role-based workflows, ML-based delay prediction, operational dashboards, alert systems, and scalable authentication.",
      highlights: [
        "Built a full-stack workflow automation platform (React, FastAPI, PostgreSQL) handling 25+ APIs, improving request processing efficiency by ~35% and reducing manual intervention.",
        "Developed and deployed ML delay prediction models (LR, RF, GB, SVM, MLP) achieving 98.6% accuracy, enabling proactive alerts that reduced delayed requests by ~30%.",
        "Designed real-time analytics dashboards and alerting system, cutting issue detection time by ~40% and improving admin response time through automated email escalation.",
      ],
      stack: ["Python", "FastAPI", "PostgreSQL", "React.js", "Docker"],
      repo: "https://github.com/Abhishek-Pandey786/campus-sync-wokflow-automation",
    },
    items: [
      {
        title: "Education Platform",
        category: "Microservices Architecture",
        description:
          "Service-oriented backend with student, course, and enrollment CRUD APIs and inter-service communication.",
        stack: ["Python", "Flask", "MongoDB", "REST APIs"],
        repo: "https://github.com/Abhishek-Pandey786/education-platform",
      },
      {
        title: "TheraScape",
        category: "AI Wellness Platform",
        description:
          "API-driven architecture integrating AI-assisted conversational workflows with JWT authentication.",
        stack: ["Spring Boot", "Flask", "MongoDB", "JWT"],
        repo: "https://github.com/Abhishek-Pandey786/therascape-ai-therapy-assistant",
      },
      {
        title: "CUMA",
        category: "Multilingual AI Assistant",
        description:
          "Conversational assistant with speech-to-text, translation, and role-based user management via Gemini API.",
        stack: ["React.js", "Node.js", "MySQL", "Gemini API"],
        repo: "https://github.com/Abhishek-Pandey786/CUMA",
      },
      {
        title: "Analytics Dashboard",
        category: "Operational Intelligence",
        description:
          "Insight-oriented visualization tool for monitoring operational metrics and reporting workflows.",
        stack: ["Python", "SQL", "React.js", "PostgreSQL"],
        repo: "https://github.com/Abhishek-Pandey786/operational-analytics",
      },
      {
        title: "Punch It",
        category: "Desktop Application",
        description:
          "Layered MVC desktop app for attendance management with prediction logic and CSV export.",
        stack: ["Java", "JavaFX", "SQLite", "Maven"],
        repo: "https://github.com/Abhishek-Pandey786/punch-it",
      },
    ],
  },
  achievements: {
    title: "Achievements & AI exposure",
    description:
      "Education, analytical focus areas, and operational intelligence exposure.",
    items: [
      {
        title: "MCA Candidate",
        type: "Education",
        description:
          "Pursuing Master of Computer Applications with a focus on software engineering.",
      },
      {
        title: "LLM Response Evaluation",
        type: "AI Operations",
        description:
          "Analyzing comparative reasoning and output consistency in AI models at Ethara AI.",
      },
      {
        title: "Prompt Engineering Analysis",
        type: "Evaluation",
        description:
          "Optimizing structured analytical tasks and AI generation consistency.",
      },
      {
        title: "AI Workflow Operations",
        type: "Systems",
        description:
          "Assessing quality and reliability in AI-assisted operational pipelines.",
      },
    ],
  },
  resume: {
    title: "Resume built for ATS and engineering teams",
    description:
      "Download the latest PDF for my full workflow experience, technical stack, and implementation details.",
    url: "/resume.pdf",
    highlights: [
      "Backend API Engineering",
      "Workflow Automation",
      "AI Evaluation Experience",
      "Full Stack Development",
    ],
  },
  contact: {
    title: "Let's build something together",
    description:
      "Open to backend engineering, AI workflow roles, full-time positions, internships, and collaborations.",
    availability:
      "Currently open to full-time roles, internships, and engineering collaborations.",
    note: "Response time: usually within 24 hours.",
  },
  footerTagline:
    "Engineered with structured logic, modern tools, and an implementation-first mindset.",
  copyright: "2026 Abhishek Pandey. All rights reserved.",
};

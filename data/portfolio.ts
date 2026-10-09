export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  status: "Live" | "In Development" | "Prototype" | "Milestone Reached";
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  marketplaceUrl?: string;
  highlights: string[];
  islandTheme: {
    accentColor: string;
    icon: string;
    environmentType: "medical-citadel" | "telemetry-crate" | "network-hub" | "dark-chamber" | "vision-lab" | "sync-tunnel";
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  badge: string;
  skills: {
    name: string;
    level?: string;
    tag: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  period: string;
  title: string;
  subtitle: string;
  institution: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface InterestDomain {
  id: string;
  title: string;
  category: string;
  description: string;
  hardwareOrTools: string[];
  quote: string;
  icon: string;
  color: string;
}

export interface PortfolioData {
  profile: {
    fullName: string;
    monogram: string;
    headline: string;
    tagline: string;
    supportingCopy: string;
    aboutHeadline: string;
    aboutBio: string;
    education: {
      degree: string;
      specialization: string;
      university: string;
      school: string;
      gradYear?: string;
    };
    location: string;
    statusBadge: string;
    contactEmail: string;
    githubUrl: string;
    linkedinUrl: string;
  };
  socials: {
    name: string;
    url: string;
    handle: string;
    icon: string;
  }[];
  projects: Project[];
  skillCategories: SkillCategory[];
  journey: JourneyMilestone[];
  interests: InterestDomain[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    fullName: "Ritesh Kumar Verma",
    monogram: "RV",
    headline: "Computer Science Student | Full-Stack Developer | AI/ML Enthusiast",
    tagline: "I BUILD WORLDS THROUGH CODE.",
    supportingCopy:
      "From intelligent applications to immersive interfaces and connected hardware, I turn ambitious ideas into things you can explore, use, and experience.",
    aboutHeadline: "CURIOUS BY NATURE. BUILDER BY INSTINCT.",
    aboutBio:
      "I am a Computer Science student at VIT Bhopal University exploring the convergence of software engineering, artificial intelligence, electronics, and creative design. I believe the most inspiring engineering lives where software meets physical reality and delightful human-centric interfaces.",
    education: {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Artificial Intelligence and Machine Learning",
      university: "VIT Bhopal University",
      school: "School of Computing Science Engineering and Artificial Intelligence",
    },
    location: "Bhopal, India",
    statusBadge: "COMPUTER SCIENCE · AI/ML · FULL-STACK DEVELOPMENT",
    contactEmail: "stacksolveofficial@gmail.com",
    githubUrl: "https://github.com/codeliferitesh",
    linkedinUrl: "https://linkedin.com/in/riteshvermadev/",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/codeliferitesh",
      handle: "@codeliferitesh",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/riteshvermadev/",
      handle: "riteshvermadev",
      icon: "Linkedin",
    },
    {
      name: "Email",
      url: "mailto:stacksolveofficial@gmail.com",
      handle: "stacksolveofficial@gmail.com",
      icon: "Mail",
    },
  ],

  projects: [
    {
      id: "mediai",
      title: "MediAI",
      category: "AI Healthcare & Clinical Workflow",
      tagline: "Intelligent Hospital & Clinical Decision-Support Platform",
      description:
        "An intelligent hospital management and clinical decision-support platform designed to bring patient management, appointments, medical report analysis, and emergency prioritization into a unified digital experience.",
      longDescription:
        "MediAI connects clinical queues, triage prioritization algorithms, and automated clinical summaries in a cohesive medical dashboard. Note: Designed strictly as a workflow optimization prototype and clinical decision-support assistant, not as an autonomous diagnostic device.",
      technologies: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Tailwind CSS", "PostgreSQL"],
      status: "In Development",
      featured: true,
      githubUrl: "https://github.com/codeliferitesh",
      highlights: [
        "Emergency triage prioritization algorithm based on vital indicators",
        "Unified digital patient management & automated appointment scheduling",
        "Clinical report summarization engine streamlining doctor shift handoffs",
        "Strict boundary delineation between decision support and clinical diagnoses",
      ],
      islandTheme: {
        accentColor: "#54E5FF",
        icon: "Activity",
        environmentType: "medical-citadel",
      },
    },
    {
      id: "shipment-tracking",
      title: "Shipment Health Tracking System",
      category: "IoT & Embedded Telemetry",
      tagline: "ESP32-Powered Real-Time Environmental Sensor Sentinel",
      description:
        "An ESP32-based shipment monitoring project combining environmental sensors with cloud-connected monitoring to observe temperature, humidity, light, and gas-related readings.",
      longDescription:
        "Built to safeguard perishable and sensitive transit items, this system pairs an ESP32 microcontroller with multi-sensor arrays. Telemetry streams via MQTT/HTTP to cloud dashboards with configurable out-of-bounds warning thresholds.",
      technologies: ["ESP32", "C++ / Arduino IDE", "Sensors (DHT22, MQ2, LDR)", "MQTT", "Node.js", "IoT Cloud"],
      status: "Prototype",
      featured: true,
      githubUrl: "https://github.com/codeliferitesh",
      highlights: [
        "Real-time telemetry for multi-modal sensor inputs (temperature, humidity, light, gases)",
        "Configurable threshold alert triggers when cargo parameters deviate",
        "Low-power deep sleep cycles for prolonged battery preservation during transit",
        "Distinguishes research prototype telemetry from industrial laboratory calibration",
      ],
      islandTheme: {
        accentColor: "#FFB15E",
        icon: "Radio",
        environmentType: "telemetry-crate",
      },
    },
    {
      id: "stacksolve",
      title: "StackSolve",
      category: "Developer Community & Web App",
      tagline: "Modern Technical Discussion & Collaboration Platform",
      description:
        "A developer-focused community platform designed to help people share ideas, participate in technical discussions, and interact through a modern web experience.",
      longDescription:
        "StackSolve provides developers with rich markdown code snippet rendering, categorized technical debates, upvoting mechanisms, and responsive discussion channels for fast peer-to-peer debugging.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"],
      status: "Live",
      featured: true,
      liveUrl: "https://stacksolve.vercel.app",
      githubUrl: "https://github.com/codeliferitesh",
      highlights: [
        "Instant code snippet previewing with syntax highlighting across 20+ languages",
        "Real-time reactive threads and community interaction",
        "Clean, responsive glassmorphic UI built for night-time developer workflows",
        "Deployed live on Vercel with continuous integration",
      ],
      islandTheme: {
        accentColor: "#54E5FF",
        icon: "Share2",
        environmentType: "network-hub",
      },
    },
    {
      id: "aether-night",
      title: "Aether Night — Pro Dark Theme Pack",
      category: "Developer Tools & UI/UX",
      tagline: "Aesthetic Dark Theme Collection for VS Code (1,000+ Downloads)",
      description:
        "A VS Code theme collection exploring polished dark interfaces, multiple visual variants, and developer-focused aesthetics.",
      longDescription:
        "Crafted with meticulous attention to syntax contrast, token harmony, and eye fatigue reduction. Surpassed the verified milestone of 1,000+ community downloads on the Visual Studio Marketplace.",
      technologies: ["VS Code Extension API", "JSON Theme Tokenizer", "Figma", "Color Theory", "Semantic Tokening"],
      status: "Milestone Reached",
      featured: true,
      marketplaceUrl: "https://marketplace.visualstudio.com/",
      githubUrl: "https://github.com/codeliferitesh",
      highlights: [
        "Over 1,000+ verified developer downloads milestone reached",
        "Optimized contrast ratios complying with WCAG readability guidelines",
        "Multiple dark variants: Midnight Blue, Deep Obsidian, and Cyberpunk Twilight",
        "Harmonious syntax color palette for TypeScript, Python, C++, and Rust",
      ],
      islandTheme: {
        accentColor: "#9BA9BA",
        icon: "Code2",
        environmentType: "dark-chamber",
      },
    },
    {
      id: "airboard",
      title: "AirBoard",
      category: "Computer Vision & Interactive Interfaces",
      tagline: "Touch-Free Gesture Canvas with MediaPipe Hand Tracking",
      description:
        "An experimental interface concept using MediaPipe hand tracking to explore touch-free interactions and gesture-driven controls.",
      longDescription:
        "AirBoard tracks optical hand landmarks in real-time through standard webcams, translating finger pinches, palms, and gestures into digital drawing, shape manipulation, and spatial interface control without physical peripherals.",
      technologies: ["Python", "OpenCV", "MediaPipe", "JavaScript", "HTML5 Canvas"],
      status: "Prototype",
      featured: true,
      githubUrl: "https://github.com/codeliferitesh",
      highlights: [
        "Multi-landmark palm and fingertip spatial tracking at 60fps",
        "Dynamic pinch detection for drawing, erasing, and canvas navigation",
        "Zero-latency webcam feed processing without requiring specialized VR hardware",
        "Explores the future of spatial computing and touchless interfaces",
      ],
      islandTheme: {
        accentColor: "#54E5FF",
        icon: "Eye",
        environmentType: "vision-lab",
      },
    },
    {
      id: "drovio",
      title: "Drovio",
      category: "Product Concept & P2P Sharing",
      tagline: "Direct Device-to-Device Rapid File Transfer Concept",
      description:
        "A file-transfer application concept focused on making direct device-to-device sharing feel simple and accessible.",
      longDescription:
        "Drovio explores seamless local network discovery, drag-and-drop file bundling, and intuitive peer-to-peer data pipes without cloud intermediary bottlenecks.",
      technologies: ["Electron / WebRTC Concept", "Node.js", "React", "TypeScript", "Tailwind CSS"],
      status: "Prototype",
      featured: true,
      githubUrl: "https://github.com/codeliferitesh",
      highlights: [
        "Intuitive drag-and-drop staging area with file size pre-computation",
        "Local peer discovery concept eliminating cumbersome pairing codes",
        "Modern desktop UI with animated transfer state indicators",
        "Transparent protocol design emphasizing local-first efficiency",
      ],
      islandTheme: {
        accentColor: "#FF7043",
        icon: "Cpu",
        environmentType: "sync-tunnel",
      },
    },
    {
      id: "resume-ai",
      title: "ResumeAI",
      category: "AI & Productivity",
      tagline: "Generative AI Resume Tailoring & ATS Keyword Optimizer",
      description:
        "A smart software tool that parses job descriptions, evaluates candidate resumes, and suggests semantic improvements to align with specific role requirements.",
      technologies: ["React", "Python", "FastAPI", "OpenAI / Claude API", "Tailwind CSS"],
      status: "In Development",
      featured: false,
      githubUrl: "https://github.com/codeliferitesh",
      highlights: [
        "Semantic matching of resume accomplishments against job postings",
        "ATS readability analysis and format validation",
        "Action-verb rephrasing and impact quantification suggestions",
      ],
      islandTheme: {
        accentColor: "#FFB15E",
        icon: "FileText",
        environmentType: "medical-citadel",
      },
    },
    {
      id: "flowdesk",
      title: "FlowDesk",
      category: "Productivity & Developer Tools",
      tagline: "Minimalist Developer Scratchpad & Pomodoro Environment",
      description:
        "A focused workspace tool uniting markdown notes, ambient soundscapes, and task sprints for deep-work programming sessions.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Local Storage API"],
      status: "In Development",
      featured: false,
      githubUrl: "https://github.com/codeliferitesh",
      highlights: [
        "Instant scratchpad with live markdown preview",
        "Integrated customizable focus timer with sound notifications",
        "Offline-first architecture with zero external account requirements",
      ],
      islandTheme: {
        accentColor: "#54E5FF",
        icon: "Layout",
        environmentType: "network-hub",
      },
    },
  ],

  skillCategories: [
    {
      title: "Full-Stack Development",
      iconName: "Globe",
      badge: "Core Engineering",
      skills: [
        { name: "React & Next.js", tag: "App Router / SSR" },
        { name: "TypeScript & JavaScript", tag: "ESNext / Strong Typing" },
        { name: "Node.js & Express", tag: "REST & Microservices" },
        { name: "HTML5 & Modern CSS", tag: "Semantic & Responsive" },
        { name: "Tailwind CSS", tag: "Design Systems" },
      ],
    },
    {
      title: "Programming Languages",
      iconName: "Terminal",
      badge: "Foundations",
      skills: [
        { name: "Python", tag: "AI/ML & Automation" },
        { name: "Java", tag: "OOP & Algorithms" },
        { name: "TypeScript", tag: "Type Systems" },
        { name: "JavaScript", tag: "Async & Web APIs" },
        { name: "C / C++ (Embedded)", tag: "Microcontrollers" },
      ],
    },
    {
      title: "Databases & Backend",
      iconName: "Database",
      badge: "Data & Storage",
      skills: [
        { name: "Firebase & Firestore", tag: "Real-time & Auth" },
        { name: "PostgreSQL & MySQL", tag: "Relational Schemas" },
        { name: "REST APIs", tag: "Architecture & Design" },
        { name: "Cloud Integration", tag: "Vercel & Cloudflare" },
      ],
    },
    {
      title: "AI & Machine Learning",
      iconName: "Sparkles",
      badge: "Specialization",
      skills: [
        { name: "Generative AI", tag: "LLMs & Prompt Pipelines" },
        { name: "Model Integration", tag: "APIs & Embeddings" },
        { name: "Computer Vision", tag: "MediaPipe & OpenCV" },
        { name: "Intelligent Workflows", tag: "Decision Support" },
      ],
    },
    {
      title: "Hardware & IoT",
      iconName: "Cpu",
      badge: "Physical Computing",
      skills: [
        { name: "ESP32 & ESP8266", tag: "WiFi/BLE Telemetry" },
        { name: "Sensor Integration", tag: "DHT, MQ, LDR, Ultrasonic" },
        { name: "Arduino IDE & C++", tag: "Firmware Development" },
        { name: "IoT Protocols", tag: "MQTT & WebSockets" },
      ],
    },
    {
      title: "Making & Engineering",
      iconName: "Wrench",
      badge: "Prototyping",
      skills: [
        { name: "PCB Design", tag: "Schematics & Routing" },
        { name: "Electronics Prototyping", tag: "Breadboards & Soldering" },
        { name: "3D Modeling", tag: "CAD & Parametric Design" },
        { name: "3D Printing", tag: "Rapid Prototyping" },
      ],
    },
    {
      title: "Design & Creative Tools",
      iconName: "Palette",
      badge: "Visual Excellence",
      skills: [
        { name: "Figma & UI/UX", tag: "Design Systems & Wireframes" },
        { name: "Visual Identity", tag: "Typography & Color Theory" },
        { name: "Graphic Design", tag: "Vector & Brand Assets" },
        { name: "Creative Coding", tag: "Interactive Canvases" },
      ],
    },
  ],

  journey: [
    {
      year: "2025 – Present",
      period: "Current Endeavor",
      title: "B.Tech in Computer Science & Engineering (AI & ML)",
      subtitle: "Academic Core & Deep Exploration",
      institution: "VIT Bhopal University — School of Computing Science & Artificial Intelligence",
      description:
        "Building a rigorous foundational base in algorithms, operating systems, data structures, and mathematics, while specializing in artificial intelligence and machine learning architectures.",
      tags: ["VIT Bhopal", "AI/ML Specialization", "Computer Science", "Algorithms"],
      icon: "GraduationCap",
    },
    {
      year: "2024 – Present",
      period: "Ecosystem Growth",
      title: "Full-Stack & Cloud Application Architecting",
      subtitle: "Production Web Platforms",
      institution: "Independent Development & Collaborative Builds",
      description:
        "Engineered scalable full-stack applications with Next.js, TypeScript, and modern databases. Launched community platform StackSolve and clinical workflow platform MediAI.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "PostgreSQL"],
      icon: "Code",
    },
    {
      year: "2024",
      period: "Milestone",
      title: "Aether Night Theme Collection — 1,000+ Downloads",
      subtitle: "Developer Tooling & Visual Design",
      institution: "Visual Studio Code Marketplace",
      description:
        "Designed and published an acclaimed dark theme pack crafted for high code legibility and low visual fatigue, achieving a milestone of 1,000+ developer installations.",
      tags: ["VS Code", "UI/UX", "Developer Ergonomics", "1,000+ Installs"],
      icon: "Award",
    },
    {
      year: "2023 – Present",
      period: "Hardware & IoT",
      title: "Physical Computing & Embedded Sensor Systems",
      subtitle: "From Silicon to Cloud",
      institution: "Personal Electronics Lab",
      description:
        "Bridged physical sensors and web clouds using ESP32, environmental sensors, and custom circuit design for telemetry tracking, automation, and physical interaction.",
      tags: ["ESP32", "IoT", "PCB Prototyping", "Sensor Telemetry"],
      icon: "Cpu",
    },
    {
      year: "Continuous",
      period: "Philosophy",
      title: "Creative Experimentation & Hackathons",
      subtitle: "Curiosity Driven Building",
      institution: "Open Source & Student Tech Communities",
      description:
        "Consistently exploring emerging tools, generative AI models, gesture vision pipelines (AirBoard), and participating in coding challenges and collaborative hackathons.",
      tags: ["Hackathons", "Generative AI", "Computer Vision", "Continuous Learning"],
      icon: "Flame",
    },
  ],

  interests: [
    {
      id: "ai-systems",
      title: "Artificial Intelligence & LLMs",
      category: "Cognition & Intelligence",
      description:
        "Exploring how modern language models, neural embeddings, and intelligent agents can solve real-world productivity challenges without losing human nuance.",
      hardwareOrTools: ["Python", "FastAPI", "OpenAI APIs", "LangChain", "Vector Embeddings"],
      quote: "Software that understands context rather than just syntax.",
      icon: "Brain",
      color: "#54E5FF",
    },
    {
      id: "embedded-iot",
      title: "Embedded Systems & ESP32",
      category: "Physical Computing",
      description:
        "Writing firmware, connecting sensor networks, and designing real-time telemetry systems where code directly controls physical signals and circuits.",
      hardwareOrTools: ["ESP32", "ESP8266", "I2C/SPI Sensors", "MQTT", "Arduino IDE"],
      quote: "Giving physical objects eyes, ears, and internet connectivity.",
      icon: "Cpu",
      color: "#FFB15E",
    },
    {
      id: "pcb-hardware",
      title: "PCB Design & Electronics",
      category: "Hardware Engineering",
      description:
        "Designing custom circuit schematics, tracing PCB tracks, soldering microcontrollers, and creating bespoke hardware enclosures.",
      hardwareOrTools: ["EasyEDA / KiCad", "Soldering Station", "Multimeter", "Passive Components"],
      quote: "Turning breadboard spaghetti into permanent printed copper boards.",
      icon: "Layers",
      color: "#FF7043",
    },
    {
      id: "3d-printing",
      title: "3D Modeling & Rapid Prototyping",
      category: "Physical Fabrication",
      description:
        "Modeling custom enclosures, mechanical joints, and aesthetic artifacts in 3D CAD and fabricating them through FDM 3D printing.",
      hardwareOrTools: ["Fusion 360 / Blender", "FDM 3D Printing", "PLA/PETG Filaments", "Slicers"],
      quote: "Translating digital geometry into tangible objects within hours.",
      icon: "Box",
      color: "#54E5FF",
    },
    {
      id: "ui-ux",
      title: "UI/UX & Product Ergonomics",
      category: "Interface Design",
      description:
        "Designing coherent design systems, typographic hierarchies, and micro-interactions in Figma that feel intuitive and pleasurable to use.",
      hardwareOrTools: ["Figma", "Design Systems", "Prototyping", "Color Theory", "Micro-animations"],
      quote: "An interface should feel like an extension of your thoughts.",
      icon: "Palette",
      color: "#FFB15E",
    },
    {
      id: "creative-code",
      title: "Creative Coding & Visual Computing",
      category: "Digital Art & Interfaces",
      description:
        "Building interactive 3D spaces, procedural particle landscapes, and gesture-driven experiences using Three.js and computer vision.",
      hardwareOrTools: ["Three.js", "WebGL", "MediaPipe", "GLSL Shaders", "Canvas API"],
      quote: "Code as a medium for spatial imagination and interactive art.",
      icon: "Compass",
      color: "#FF7043",
    },
  ],
};

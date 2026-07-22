export const siteConfig = {
  name: "Romeo B. David Jr.",
  /** Full formal name for copyright / footer line only */
  copyrightName: "Romeo B. David Jr., PECE, ASEAN Eng., P. Eng. (SCE)",
  title: "Senior Telecommunications Engineer | Data & Automation Team Lead",
  tagline:
    "19+ years of experience in telecom operations, multi-vendor networks, and custom automation development",
  email: "romeo_davidjr@yahoo.com",
  linkedin: "https://linkedin.com/in/romeodavidjr",
  linkedinDisplay: "linkedin.com/in/romeodavidjr",
  location: "Riyadh, Kingdom of Saudi Arabia",
  phone: "", // Optional — add if desired
  cvPath: "/cv/Romeo_David_Jr_CV.pdf",
  /** Place file in /public — use lowercase extension (profile.jpg) for Linux/Vercel */
  profilePhoto: "/profile.jpg",
  copyrightYear: 2026,
};

export const about = {
  paragraphs: [
    "Results-driven Senior Telecommunications Engineer with 19+ years of experience in telecom project management, multi-vendor network operations, and custom automation development. Currently serving as Data & Automation Team Lead at ASTEK Saudi Arabia Limited, leading Operations & Maintenance for IDEMIA MestaFusion Automatic Traffic Monitoring Systems (ATMS) across 100+ sites in the KSA Central Region.",
    "Achieved 96.9% YTD SLA compliance with an average MTTR of 23 hours. Independently developed custom automation tools (Python and PowerShell) and Power BI dashboards that reduced daily data-processing time by 65–80%. Skilled in Generative AI and Agentic AI-assisted development, cross-functional leadership, and delivering clear technical insights to stakeholders.",
  ],
  highlights: [
    { label: "Years Experience", value: "19+" },
    { label: "SLA Compliance", value: "96.9%" },
    { label: "Avg. MTTR", value: "23h" },
    { label: "Sites Overseen", value: "100+" },
  ],
};

export type Achievement = {
  value: string;
  label: string;
  description: string;
  emphasis?: "metric" | "highlight";
};

export const achievements: Achievement[] = [
  {
    value: "96.9%",
    label: "YTD SLA Compliance",
    description: "Across 256 O&M tickets with zero overdue tickets and full restoration rate.",
    emphasis: "metric",
  },
  {
    value: "23h",
    label: "Average MTTR",
    description: "Mean time to restore maintained across live ATMS operations.",
    emphasis: "metric",
  },
  {
    value: "100+",
    label: "ATMS Sites Managed",
    description: "Live traffic monitoring sites under O&M in the KSA Central Region.",
    emphasis: "metric",
  },
  {
    value: "65–80%",
    label: "Faster Data Processing",
    description: "Reduction in daily data-processing time through custom Python tools.",
    emphasis: "metric",
  },
  {
    value: "ATMS",
    label: "Regional O&M Leadership",
    description:
      "Led O&M and automation for IDEMIA MestaFusion ATMS in the KSA Central Region.",
    emphasis: "highlight",
  },
  {
    value: "4",
    label: "Production Tools Delivered",
    description:
      "Independently developed 4 custom automation tools (3 Python GUI tools + SMART Drive Health Monitor) plus Power BI dashboards.",
    emphasis: "highlight",
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  companyNote?: string;
  bullets: string[];
  nestedTools?: { name: string; description: string }[];
};

export const experience: ExperienceItem[] = [
  {
    company: "ASTEK Saudi Arabia Limited",
    role: "Senior Telecom Engineer – Data & Automation Team Lead",
    period: "April 2021 – Present",
    location: "Riyadh, KSA",
    bullets: [
      "Lead O&M for IDEMIA MestaFusion ATMS across the KSA Central Region, overseeing technical support and cross-regional collaboration for 100+ live traffic monitoring sites.",
      "Achieved 96.9% YTD SLA compliance across 256 O&M tickets with zero overdue tickets and 100% restoration rate; maintained an average MTTR of 23 hours.",
      "Independently developed and deployed four custom automation tools that transformed daily ATMS operations.",
      "Built interactive Power BI dashboards visualizing traffic data, hourly trends, and site performance, enabling 65–80% faster reporting and decision-making.",
      "Led site surveys, audits, new site installations, and pre-rollout firmware/patch testing (providing feedback to IDEMIA France).",
    ],
    nestedTools: [
      {
        name: "Traffic Data Analysis Tool",
        description:
          "Processes traffic event XML files into daily/master CSV reports (vehicle counts, speeds, offenses) with geospatial analysis.",
      },
      {
        name: "Traffic Violation Manager (TVM)",
        description:
          "Segregates violation XMLs and media by site, type, and lane; includes EXIF extraction, video playback, and Excel/PowerPoint exports.",
      },
      {
        name: "Hardware Serial Manager (HSM)",
        description:
          "Parses hardware configurations into searchable CSV inventory with duplicate detection.",
      },
      {
        name: "SMART Drive Health Monitor",
        description:
          "PowerShell-based field tool for remote SMART health monitoring of HDDs and SSDs on ATMS devices via SSH. Collects drive health data, detects issues, provides replacement recommendations, and generates XML reports.",
      },
    ],
  },
  {
    company: "Houssam Contracting Company (HCC)",
    role: "Telecom Engineer / Transmission Specialist / Sector Lead",
    period: "April 2015 – April 2021",
    location: "Riyadh, KSA",
    companyNote:
      "Joint Venture of AIRBUS Defence and Space and Saudi Technical Trading Cont. Co.",
    bullets: [
      "Led the Riyadh Sector for O&M of the TETRA-based Public Safety Radio Network (PSRN); managed team activities and delivered consolidated reports to NMC and Regional Manager.",
      "Supervised network upgrades, site relocations, and new TETRA site deployments from planning through installation, integration, and testing.",
      "Coordinated team resources to restore equipment within SLA and conducted site surveys and audits to maintain network integrity.",
    ],
  },
  {
    company: "SMART Communications, Inc.",
    role: "Senior Engineer",
    period: "July 2009 – February 2015",
    location: "Philippines",
    bullets: [
      "Executed end-to-end installation, commissioning, integration, and acceptance testing of multi-vendor transmission and cellular equipment (Nokia, Siemens, Ericsson, Aviat/Harris, Alcatel-Lucent, Huawei, Fujitsu, and others).",
      "Diagnosed and restored microwave and base station alarms across Nokia and Ericsson platforms (2G/3G/FD-LTE), ensuring high network availability.",
      "Performed predictive/preventive maintenance, site surveys, BTS parameter audits, and drive tests to optimize network performance.",
    ],
  },
  {
    company: "Philippine EDS Techno-service Inc. (Yazaki Affiliate)",
    role: "Junior Design Engineer / Team Lead",
    period: "June 2006 – February 2008",
    location: "Philippines",
    bullets: [
      "Designed wiring harness and system layouts for new automotive platforms (Japan & Europe markets) using HCAD, MS Visio, CATIA, and circuit simulation tools.",
      "Validated wire/fuse compatibility, performed circuit simulations, and coordinated design changes with international engineering teams.",
      "Served as Team Lead and quality checker for 2D/3D design outputs.",
    ],
  },
];

export type Project = {
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  features?: string[];
  technologies?: string[];
  items?: { name: string; description?: string }[];
};

export const projects: Project[] = [
  {
    title: "TicketFlow",
    subtitle: "Field Engineer Ticket & Restoration Management System",
    period: "2026",
    description:
      "Full-stack web application to automate O&M ticket management for field engineers. I defined the requirements, features, and workflow, and used Generative AI and Agentic AI assistance to accelerate development of the full-stack application.",
    features: [
      "Requirements, features, and workflow defined and directed by me; Generative AI used to accelerate full-stack development",
      "OCR-based ticket creation from photos",
      "SLA tracking (24h / 48h / 72h) with color-coded status",
      "Automated Restoration Reports with evidence photos, tables, and digital signatures",
      "Real-time dashboard with metrics, charts, filtering, and bulk photo upload",
      "Mobile access support",
    ],
    technologies: [
      "Python (Flask)",
      "HTML/CSS/JavaScript",
      "OCR",
      "SQLite",
      "PDF generation",
    ],
  },
  {
    title: "Custom Python Automation Tools",
    subtitle: "Developed for ATMS operations",
    description:
      "Suite of production Python GUI tools that streamlined daily traffic monitoring operations, violation handling, and inventory workflows.",
    items: [
      {
        name: "Traffic Data Analysis Tool",
        description:
          "Processes traffic event XML files into daily/master CSV reports (vehicle counts, speeds, offenses) with geospatial analysis.",
      },
      {
        name: "Traffic Violation Manager (TVM)",
        description:
          "Segregates violation XMLs and media by site, type, and lane. Includes EXIF extraction, video playback, and Excel/PowerPoint exports.",
      },
      {
        name: "Hardware Serial Manager (HSM)",
        description:
          "Parses hardware configurations into searchable CSV inventory with duplicate detection.",
      },
      {
        name: "SMART Drive Health Monitor",
        description:
          "PowerShell-based field tool for remote SMART health monitoring of HDDs and SSDs on ATMS devices via SSH. Collects drive health data, detects issues, provides replacement recommendations, and generates XML reports.",
      },
    ],
    technologies: ["Python", "GUI", "CSV/Excel", "Geospatial Analysis", "PowerPoint Export"],
  },
];

export type Technology = {
  name: string;
  icon: string;
};

/** Icon keys map to Lucide icons in the Technologies component */
export const technologies: Technology[] = [
  { name: "Python", icon: "Code2" },
  { name: "Power BI", icon: "BarChart3" },
  { name: "Generative AI", icon: "Sparkles" },
  { name: "Flask", icon: "Server" },
  { name: "HTML/CSS/JavaScript", icon: "FileCode2" },
  { name: "SQLite", icon: "Database" },
  { name: "TETRA", icon: "Radio" },
  { name: "GSM/UMTS/LTE", icon: "Signal" },
  { name: "Microwave Transmission", icon: "Antenna" },
  { name: "Git", icon: "GitBranch" },
];

export const skillGroups = [
  {
    title: "Telecom Networks",
    skills: [
      "TETRA",
      "GSM / UMTS / LTE",
      "Microwave Transmission (Multi-vendor)",
    ],
  },
  {
    title: "Automation & Analytics",
    skills: [
      "Python",
      "Power BI Dashboards",
      "Generative AI & Agentic AI-assisted Development",
    ],
  },
  {
    title: "Operations Excellence",
    skills: [
      "Site Surveys & Audits",
      "Firmware Testing",
      "SLA Management",
      "Cross-regional Coordination",
    ],
  },
  {
    title: "Leadership",
    skills: [
      "Team & Sector Lead",
      "Project Supervision",
      "Stakeholder Communication",
    ],
  },
];

export type EducationItem = {
  title: string;
  institution: string;
  details?: string;
  type: "degree";
};

export const education: EducationItem[] = [
  {
    title:
      "Master of Science in Electronics & Communications Engineering (Major in Control Systems)",
    institution: "Mapúa Institute of Technology, Philippines",
    details:
      "Completed 31 graduate units · Emerson Process Management (EPM) Company Scholar",
    type: "degree",
  },
  {
    title: "Bachelor of Science in Electronics & Communications Engineering",
    institution: "Southern Luzon State University, Philippines",
    details: "DOST-SEI Scholar",
    type: "degree",
  },
];

export const certifications = [
  {
    title: "Registered Engineer (E)",
    institution: "Saudi Council of Engineers",
  },
  {
    title: "Conferred ASEAN Engineer (AE)",
    institution: "ASEAN Federation of Engineering Organisations",
  },
  {
    title:
      "Licensed Professional Electronics Engineer (PECE) and Electronics Engineer (ECE)",
    institution: "Philippines",
  },
  {
    title: "Certified General Security Professional (CGSP)",
    institution: "CCTV | Hikvision",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#technologies", label: "Tech" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

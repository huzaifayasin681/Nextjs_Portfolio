// Central content for the portfolio. Edit this file to update the site.

export const profile = {
  name: "Huzaifa Hassan",
  shortName: "Huzaifa",
  role: "NOC Engineer · Security & Full Stack",
  headline: "I keep networks healthy and build the software that makes it easier.",
  summary:
    "NOC Engineer at Trovicor and Computer Science graduate. I work where network operations, cybersecurity and software engineering meet: monitoring and incident response by day, and building forensic tools, production web platforms and AI assisted automation around it.",
  location: "Pakistan",
  email: "huzaifayasin681@gmail.com",
  available: "Open to network, security and engineering roles",
  links: {
    github: "https://github.com/huzaifayasin681",
    linkedin: "https://www.linkedin.com/in/huzaifa-hassan-4bb437222/",
    burujan: "https://theburujan.tech",
  },
};

export const stats = [
  { value: "1+", label: "Year in network operations" },
  { value: "15+", label: "Projects shipped" },
  { value: "3", label: "Focus areas: NOC, security, full stack" },
];

export const experience = [
  {
    role: "NOC Engineer",
    org: "Trovicor",
    period: "2025 to Present",
    points: [
      "Monitor network and service health, triage alarms and drive incidents to resolution.",
      "Handle operational requests such as IP whitelisting, URL and application blocking.",
      "Build internal tooling to automate request extraction, reporting and root cause analysis.",
    ],
  },
  {
    role: "Founder & Full Stack Engineer",
    org: "The Burujan",
    period: "Ongoing",
    points: [
      "Run a digital agency and privacy first tools platform at theburujan.tech.",
      "Own architecture, DevOps and deployment for client platforms and a client portal SaaS.",
    ],
  },
  {
    role: "B.Sc. Computer Science",
    org: "PMAS Arid Agriculture University",
    period: "Education",
    points: [
      "Coursework and projects across networking, security, software engineering and data.",
    ],
  },
];

export const featuredProjects = [
  {
    title: "Forensic & Threat Hunting Tool",
    category: "Security",
    description:
      "Extracts and analyzes indicators from PST, OST, MSG, EML, Excel and CSV sources. IOC extraction, email deduplication, contextual IP classification, attachment analysis, dashboards and CSV reporting.",
    tags: ["Python", "Streamlit", "Forensics"],
    repo: "https://github.com/huzaifayasin681/forensic_tool",
  },
  {
    title: "AI Incident Intelligence Engine",
    category: "Security · AI",
    description:
      "Turns raw security signals into prioritized, actionable intelligence and recommended response decisions.",
    tags: ["Python", "LLMs", "Incident Response"],
    repo: "https://github.com/huzaifayasin681/ai-incident-intelligence-decision-engine",
  },
  {
    title: "City Courier Platform",
    category: "Full Stack",
    description:
      "Multi client courier system connecting Shopify stores to one shipment workflow: OAuth and webhook order intake, automatic booking and tracking, and two way fulfillment status sync.",
    tags: ["Node.js", "Prisma", "MySQL", "Shopify API"],
  },
  {
    title: "The Burujan",
    category: "Full Stack · DevOps",
    description:
      "Corporate technology platform with an interactive project estimator, portfolio, client portal and immersive 3D interfaces. I own infrastructure, deployment and reliability.",
    tags: ["Next.js", "Three.js", "Prisma", "Cloudinary"],
    repo: "https://github.com/huzaifayasin681/The-Burujan",
    live: "https://theburujan.tech",
  },
  {
    title: "Sawt-ul-Quran Learning Academy",
    category: "Full Stack",
    description:
      "Learning platform with an admin CRUD portal, course and quiz management, Markdown preview, MySQL connection pooling, SMTP notifications and SEO.",
    tags: ["Next.js", "MySQL", "SMTP"],
    repo: "https://github.com/huzaifayasin681/Sawt-ul-Quran-Learning-Academy",
  },
  {
    title: "Web Vulnerability Scanner",
    category: "Security",
    description:
      "Scanner focused on detecting SQL injection and cross site scripting, reporting clear and actionable findings.",
    tags: ["Python", "AppSec"],
    repo: "https://github.com/huzaifayasin681/WebVulnScanner",
  },
];

export const skillGroups = [
  {
    title: "Network & Security",
    items: ["NOC Operations", "Incident Response", "Threat Hunting", "IOC Analysis", "Wireshark", "Nmap", "Burp Suite", "Kali Linux", "File Integrity Monitoring"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "C++", "SQL"],
  },
  {
    title: "Frameworks & Data",
    items: ["Next.js", "React", "React Native", "Node.js", "NestJS", "Express", "Prisma", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Cloud, DevOps & AI",
    items: ["Docker", "Jenkins", "AWS", "Vercel", "OpenStack", "PM2", "Linux Administration", "OpenAI / Gemini APIs", "TensorFlow", "n8n"],
  },
];

export const certifications = [
  {
    title: "Google IT Support",
    issuer: "Google · Coursera",
    link: "https://coursera.org/share/ade4898b4e23c566edb6119f6ff95ea2",
  },
  {
    title: "Meta Front End Developer",
    issuer: "Meta · Coursera",
    link: "https://coursera.org/share/212ad706fc459faf4ee5f59e9ba69d5a",
  },
];

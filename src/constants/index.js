const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Recent Builds",
    link: "#recent-work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Backend Engineer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Version Control",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Engineer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const whatISolve = [
  {
    problem: "A website needs a new capability without a full rebuild.",
    solution:
      "Plugin-and-play features: modular components/services designed to integrate into an existing site or product.",
  },
  {
    problem: "Teams need automation beyond simple forms and dashboards.",
    solution:
      "Agents and workflow automation that connect APIs, tools and actions into practical workflows.",
  },
  {
    problem: "Users need to interact with products through familiar channels.",
    solution:
      "Conversational and messaging experiences, including WhatsApp-agent workflows.",
  },
  {
    problem: "Creative teams need motion without rebuilding everything manually.",
    solution:
      "Web-based motion design tooling and programmatic video/motion workflows using Remotion.",
  },
  {
    problem: "Products need intelligent assistance.",
    solution:
      "Agent-based application experiences such as Samix Agent, with modular tools and extensible capabilities.",
  },
];

const recentWork = [
  {
    title: "Samix Agent",
    category: "AI Agent / Application Architecture",
    description:
      "An agent-focused system built around extensibility rather than a single fixed capability — a modular tool/plugin architecture so capabilities can be added without rewriting the core.",
    tags: ["Agent Architecture", "Tools/Plugins", "Automation", "Extensibility"],
  },
  {
    title: "WhatsApp Agent",
    category: "Conversational Automation",
    description:
      "A practical agent experience focused on bringing automation into a channel people already use. Built with Tauri Dev and Rust as part of exploring more capable, system-level application development.",
    tags: ["Tauri Dev", "Rust", "Agents", "Messaging", "Automation"],
  },
  {
    title: "Web Motion Design App",
    category: "Creative Engineering / Web App",
    description:
      "A motion design application that runs on the web, combining application engineering with a background in motion design — turning a creative workflow into a usable software product.",
    tags: ["Web Application", "Motion Design", "Creative Tooling"],
  },
  {
    title: "Remotion Design",
    category: "Programmatic Motion / Video",
    description:
      "Exploring Remotion as an engineering tool for creating dynamic motion and video experiences programmatically — connecting design, code and automation.",
    tags: ["Remotion", "React", "Programmatic Video"],
  },
  {
    title: "SkoolConnectNG",
    category: "Social Education Platform",
    description:
      "A real-world student networking platform connecting Nigerian students, aspirants and alumni — spanning authentication, profiles, communities, resources, messaging, notifications and realtime experiences.",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Realtime", "Vercel"],
  },
];

const engineeringToolbox = [
  {
    category: "Application",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "PWA / Cross-platform"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "REST APIs", "Supabase", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Realtime",
    skills: ["Realtime Messaging", "Notifications", "Event-driven Flows"],
  },
  {
    category: "AI / Agents",
    skills: ["Agent Systems", "Tool/Plugin Architecture", "Automation", "LLM App Exploration"],
  },
  {
    category: "Systems",
    skills: ["Rust", "Tauri", "API Integration", "Modular Services"],
  },
  {
    category: "Creative Tech",
    skills: ["Remotion", "GSAP", "Framer Motion", "SVG", "Web-based Motion Tooling"],
  },
  {
    category: "Cloud / Delivery",
    skills: ["Vercel", "AWS", "Git", "Deployment Workflows"],
  },
];

const expCards = [
  {
    review: "Samson .O. brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features using the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Tech Samix contributions to NigerChat web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of NigerChat applications, focusing on connecting with students.",
      "Worked as the backend engineers and also integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Tech Samix work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
];

const projects = [
  {
    title: "Thrive Africa School",
    description: "An educational platform dedicated to equipping young Africans with relevant tech skills. Offers courses in UI/UX, coding, and digital marketing with expert mentorship. Built to foster a thriving ecosystem of tech talent across the continent.",
    images: ["/images/projects/thrive1.JPG", "/images/projects/thrive2.JPG", "/images/projects/thrive3.JPG"],
    url: "https://thriveafricaschool.com",
    bgColor: "#FFEFDB",
  },
  {
    title: "CatfishXpress",
    description: "A premium quick-service restaurant offering authentic Nigerian catfish cuisine. Features fresh, smoked catfish prepared with traditional methods and premium quality ingredients for a delicious dining experience.",
    images: ["/images/projects/xfish1.PNG", "/images/projects/xfish2.PNG"],
    url: "https://catfishxpress.com",
    bgColor: "#FFE7EB",
  },
  {
    title: "SmartaCore",
    description: "Intelligent home automation solutions for smart living. Control appliances, security, and lighting from anywhere. Features IoT-powered energy management and remote access control for modern spaces.",
    images: ["/images/projects/smart1.JPG", "/images/projects/smart2.JPG"],
    url: "https://smartacore.com",
    bgColor: "#FFEFDB",
  },
  {
    title: "Truconn (R3C0N-M3)",
    description: "A robust Authentication API featuring secure access with JWT tokens, OTP email verification, and Google authentication. Provides developer-friendly endpoints for scalable and secure web applications.",
    images: ["/images/projects/truceon1.JPG", "/images/projects/truceon2.JPG"],
    url: "https://truconn.vercel.app",
    bgColor: "#FFE7EB",
  },
  {
    title: "World Thunder Ministry",
    description: "Dedicated to Christian education and spiritual training. Features the Theological College (OTC) for certificate and diploma courses in Bible doctrine and practical ministry to equip individuals for service.",
    images: ["/images/projects/world-thunder-splash.png"],
    url: "https://worldthunderministry.com",
    bgColor: "#FFEFDB",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  projects,
  navLinks,
  whatISolve,
  recentWork,
  engineeringToolbox,
};

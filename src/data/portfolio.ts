// ============================================================================
//  EDIT ME — all real professional content lives in this one file.
//  Text in [square brackets] is an editable placeholder waiting for a real
//  value. Never replace a placeholder with an invented fact.
// ============================================================================

export const profile = {
  name: "Ravat Prince",
  role: "Game Developer & Frontend Developer",
  tagline: "Building practical projects across frontend and game development.",
  email: "ravatprince58@gmail.com",
  location: "Surat, Gujarat, India",
  education: "BCA — 3rd year",
};

/** Null until a real email address replaces the placeholder in `profile`. */
export const contactEmail: string | null = profile.email.includes("@") ? profile.email : null;

export type Project = {
  slug: string;
  title: string;
  status?: string;
  blurb: string;
  tags?: string[];
  image?: string;
  images?: string[];
  videoUrl?: string;
  doodle?: "quill";
  note?: string;
  githubUrl?: string;
  liveUrl?: string;
};

/** Frontend development projects. */
export const frontendProjects: Project[] = [
  {
    slug: "personal-portfolio",
    title: "Personal Portfolio",
    blurb:
      "A personal portfolio presenting my frontend and game development work, built with a hand-drawn notebook aesthetic.",
    tags: ["HTML5", "JavaScript", "Tailwind CSS"],
    image: "/image/frontend/portfolio.png",
    githubUrl: "https://github.com/ravatprince58-lang/Personal_demo_Portfolio",
    liveUrl: "https://personal-portfolio-demo-8be70f.netlify.app/",
  },
  {
    slug: "soulcare",
    title: "SoulCare",
    blurb: "A modern mental healthcare platform focused on awareness, resources, and an intuitive user experience using React and Tailwind CSS..",
    image: "/image/frontend/soulcare.png",
    images: [
      "/image/frontend/soulcare.png",
      // Add more screenshots when available
    ],
    tags: ["React.js", "JavaScript", "Tailwind CSS",],
    githubUrl: "https://github.com/ravatprince58-lang/Mental-HealthApp",
    liveUrl: "https://mental-health-app-ten-psi.vercel.app/",
  },
  {
    slug: "paste-app",
    title: "Paste App",
    blurb: "A frontend development project designed to make creating, storing, and managing text content simple and convenient. The application provides an organized interface for working with text snippets and accessing saved content. ",
    image: "/image/frontend/paste.jpg",
    tags: ["React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/ravatprince58-lang/PasteApp",
    liveUrl: "https://paste-app-eight-gamma.vercel.app/",
  },
  {
    slug: "razorpay-clone",
    title: "Razorpay Clone",
    blurb: "A frontend clone of a popular website created to practice UI design, layout structure, and responsiveness.",
    image: "/image/frontend/razorpay.png",
    tags: ["HTML5", "Tailwind CSS"],
    githubUrl: "https://github.com/ravatprince58-lang/Rezorpay_Clone_App",
    liveUrl: "https://rezorpay-clone-app.vercel.app/",
  },
  {
    slug: "leet-metric",
    title: "Leet-Metric",
    blurb: "Built LeetMetric to display solved Easy, Medium, and Hard coding problems and track user progress.",
    image: "/image/frontend/leet-metric.jpg",
    tags: ["HTML5", "JavaScript", "CSS"],
    githubUrl: "https://github.com/ravatprince58-lang/LeetMetric-JS-_Project",
    liveUrl: "https://leet-metric-js-project.vercel.app/",
  },
  {
    slug: "nestora",
    title: "NESTORA",
    blurb: "NESTORA is a modern, responsive real estate web application developed using React.js, TypeScript, Tailwind CSS, Supabase, and PostgreSQL. It allows users to explore, buy, rent, and list properties with search filters, property details, favourites, and owner inquiries. The platform also includes dedicated dashboards for property owners and administrators to manage listings, users, inquiries, and other activities.",
    image: "/image/frontend/nestora.png",
    tags: ["React.js", "TypeScript", "Supabase", "PostgreSQL",],
    githubUrl: "https://github.com/ravatprince58-lang/NEstora_WebApp",
    liveUrl: "https://nestora-802a1d.netlify.app/",
  },
];

/** Game development projects. */
export const gameProjects: Project[] = [
  {
    slug: "dungeon-decent",
    title: "Dungeon-Decent",
    status: "in development",
    blurb:
      "A 2D top-down survival game developed using Unity and C#. Explore a dangerous environment, fight enemies, collect loot, manage inventory and ammunition, complete quests, and defeat a powerful boss. Features include player movement, shooting and reloading mechanics, enemy AI, health and healing systems, inventory management, quest progression, and reward systems.",
    tags: ["Unity", "C#", "2D Game Development", "Gameplay Scripting"],
    image: "/image/game/dungeon_descent.png",
    note: "Gameplay screenshots and videos: [add when available]",
    githubUrl: "https://github.com/ravatprince58-lang/Dungeon-Decent-Game",
    liveUrl: "https://ravat-prince.itch.io/dungeons-decent",
  },
];

/** Everything, in display order. */
export const projects: Project[] = [...frontendProjects, ...gameProjects];

export function findProject(slug: string): { project: Project; category: string } | null {
  const frontend = frontendProjects.find((p) => p.slug === slug);
  if (frontend) return { project: frontend, category: "Frontend development" };
  const game = gameProjects.find((p) => p.slug === slug);
  if (game) return { project: game, category: "Game development" };
  return null;
}

/** The about-page journey — real stages, no invented dates. */

export const journey = [
  {
    label: "The Beginning",
    title: "BCA — 1st Year",
    text: "Started my BCA journey at Vidhyadeep Institute, learning computer applications, programming fundamentals and exploring the world of technology.",
  },
  {
    label: "Frontend Development",
    title: "Discovering Web Development",
    text: "Started learning HTML, CSS and JavaScript, then explored React.js and Tailwind CSS. Began building interactive websites and turning design ideas into real projects.",
  },
  {
    label: "Game Development",
    title: "Exploring Game Development",
    text: "Developed an interest in game development and started learning Unity and C#. Explored game logic, gameplay mechanics and 2D game creation.",
  },
  {
    label: "Leadership & Achievements",
    title: "Hackathons and Teamwork",
    text: "Participated in Hackathon 2025 and 2026, contributed as an IO Lead Team member, and secured 3rd rank in both hackathons.",
  },
  {
    label: "Professional Experience",
    title: "Frontend Development Internship — 3Skills",
    text: "Completed a 2-month remote internship from September 5 to November 5, 2026. Worked with React.js, JavaScript, HTML, CSS, Tailwind CSS and explored backend and database concepts. Completed four projects: Personal Portfolio, Nike Landing Page Clone, Travel Booking Web App and Real Estate Web App. Presented my work to my mentor and fellow interns and received an internship completion certificate.",
  },
  {
    label: "Today — Still Growing",
    title: "Building My Future",
    text: "Currently pursuing my BCA 3rd year and continuing to improve my frontend and game development skills through practical projects, experimentation and continuous learning.",
  },
];


export type Skill = {
  name: string;
  highlight?: boolean;
};

export type SkillCategory = {
  id: "frontend" | "languages" | "gamedev" | "tools";
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building interfaces that run in the browser.",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    description: "The languages I write day to day.",
    skills: [
      { name: "HTML5", highlight: true },
      { name: "CSS3", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "C#", highlight: true },
    ],
  },
  {
    id: "gamedev",
    title: "Game Development",
    description: "Making playable worlds and the systems behind them.",
    skills: [
      { name: "Unity", highlight: true },
      { name: "Gameplay scripting" },
      { name: "Game mechanics" },
      { name: "Inventory systems" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Tools I use to develop and manage projects.",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
      { name: "Unity Editor", highlight: true },
      { name: "Vercel" },
      { name: "Netlify" },

    ],
  },
];

/** Education — the only experience shown; no invented employers or dates. */
export const education = [
  {
    course: "BCA — Bachelor of Computer Applications",
    stage: "3rd Year — Present",
    place: "Vidhyadeep Institute of Computer and Information Technology",
    result: "Currently Pursuing",
    points: [
      "Currently pursuing a Bachelor of Computer Applications.",
      "Building projects in frontend and game development.",
      "Developing skills in React.js, Unity and C#.",
    ],
  },
  {
    course: "BCA — Bachelor of Computer Applications",
    stage: "2nd Year — Completed",
    place: "Vidhyadeep Institute of Computer and Information Technology",
    result: "Sem 3: 7.00 CGPA | Sem 4: 7.07 CGPA",
    points: [
      "Improved frontend development and programming skills.",
      "Explored game development and built practical projects.",
      "Participated in hackathons.",
    ],
  },
  {
    course: "BCA — Bachelor of Computer Applications",
    stage: "1st Year — Completed",
    place: "Vidhyadeep Institute of Computer and Information Technology",
    result: "Sem 1: 6.18 | Sem 2: 6.82 CGPA",
    points: [
      "Learned computer applications and programming fundamentals.",
      "Started exploring web development.",
    ],
  },
  {
    course: "HSC — 12th Standard",
    stage: "Completed",
    place: "Matrix Global School - 70%",
    points: [
      "Completed higher secondary education.",
    ],
  },
  {
    course: "SSC — 10th Standard",
    stage: "Completed",
    place: "Matrix Global School - 55%",
    points: [
      "Completed secondary school education.",
    ],
  },
];

export const achievements: {
  year?: string;
  title: string;
  text: string;
}[] = [
    {
      year: "2026",
      title: "Frontend Development Internship — 3Skills",
      text: "Successfully completed a 2-month remote internship from September 5 to November 5. Completed four frontend projects, presented them to my mentor and fellow interns, and received an internship completion certificate.",
    },
    {
      year: "2026",
      title: "3rd Rank — Hackathon 2026",
      text: "Secured 3rd rank through teamwork, problem-solving and project development.",
    },
    {
      year: "2025",
      title: "3rd Rank — Hackathon 2025",
      text: "Secured 3rd rank while collaborating with a team to develop a project.",
    },
    {
      year: "2025",
      title: "SoulCare — Project Recognition",
      text: "Received recognition, a trophy and certificates for the SoulCare project and its presentation.",
    },
    {
      title: "MetriCheck — Project Recognition",
      text: "Received recognition and certificates for the MetriCheck project.",
    },
    {
      title: "Spoken English Course",
      text: "Successfully completed a Spoken English course.",
    },
  ];


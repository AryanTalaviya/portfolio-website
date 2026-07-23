// ============================================================
//  🔥 YOUR PORTFOLIO CONFIG — EDIT EVERYTHING HERE
//  Update your name, bio, social links, projects, skills, CV
// ============================================================

// --- PROFILE ---
export const profile = {
  name: "Aryan Talaviya",
  displayName: "ARYAN TALAVIYA.",
  title: "Information Technology Student | Aspiring IT Intern",
  subtitle: "6th Semester IT Student @ SAL College",
  tagline: "Visual Alchemist.", // Keeping the creative brand
  bio: [
    "I am a passionate and dedicated Information Technology student currently in my 6th semester at SAL College of Engineering (GTU).",
    "I am seeking an internship opportunity where I can apply my academic knowledge, gain practical experience, and grow in a real-world IT environment. My background blends technical IoT development with a strong eye for visual communication.",
  ],
  location: "Ahmedabad, Gujarat, India",
  phone: "+91 99796 39432",
  email: "talaviya246@gmail.com",
  availability: "Seeking IT Internship",
};

// --- SOCIAL LINKS ---
export const socials = {
  instagram: "https://www.instagram.com/aryan_.1511",
  linkedin: "https://www.linkedin.com/in/aryan-talaviya-a0a46a271",
};

// --- STATS (Under Profile) ---
export const stats = [
  { number: "6th", label: "Semester" },
  { number: "3+", label: "Internships" },
  { number: "5", label: "Projects" },
];

// --- SKILLS (Scrolling Marquee) ---
export const skills = [
  "Arduino", "ESP32", "IoT Development", "Sensor Integration", "HTML", "Photoshop", "Illustrator", "Figma",
];

// --- PORTFOLIO PROJECTS ---
export const projects = [
  {
    id: "six7",
    title: "Six7 Studio — Social Campaign",
    category: "Brand Identity & Social Media",
    description: "Designed a comprehensive social media campaign for Six7 Studio, a premium menswear brand. Features bold typography and dark cinematic aesthetics.",
    imageKey: "six7Cover",
    span: "col-span-2",
    tags: ["Fashion", "Branding", "Social Media"],
    year: "2025",
    gallery: [
      "six7Cover",
      "six7Post01",
      "six7Post02",
      "six7Post03",
      "six7Post04",
    ],
  },
  {
    id: "postrd",
    title: "POSTRD — Poster Collection",
    category: "Visual Identity & Artwork",
    description: "Designed a collection of bold, vibrant promotional artwork and posters for POSTRD.",
    imageKey: "postrdCover",
    span: "col-span-2",
    wrapperStyle: { aspectRatio: '4/3' },
    imageStyle: { objectPosition: 'top' },
    tags: ["Illustration", "Artwork", "Posters"],
    year: "2026",
    gallery: [
      "postrdCover",
      "postrd01",
      "postrd02",
      "postrd03"
    ],
  },
];

// --- CV PAGE — RESUME INFO ---
export const cvData = {
  headline: "Aspiring IT professional with hands-on experience in IoT development and creative design, looking to bridge the gap between hardware and user experience.",

  experience: [
    {
      title: "IoT Developer Intern",
      company: "DProfiz Private Limited",
      period: "Jan 2025 - Apr 2025",
      description: [
        "Assisted in development of IoT-based systems and solutions",
        "Worked on sensor integration and microcontroller programming (Arduino, ESP32)",
        "Tested, troubleshot, and deployed embedded IoT prototypes",
        "Collaborated with team to convert ideas into functional hardware"
      ],
    },
    {
      title: "Graphic Designer",
      company: "Postrd",
      period: "2025 - Present",
      description: [
        "Designed social media posters and marketing creatives",
        "Created typography posters and product mockups",
        "Delivered high-engagement, trend-based design content"
      ],
    },
    {
      title: "Graphic Design Lead – GDSC",
      company: "SAL College of Engineering",
      period: "2023 - 2024",
      description: [
        "Led design team for campus tech events",
        "Created posters, social media creatives, and presentations",
        "Ensured branding consistency across events",
        "Improved engagement through visual communication"
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering in Information Technology",
      school: "SAL College of Engineering (GTU)",
      period: "2023 - Present",
      status: "Currently in 6th Semester",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      school: "Dipak School, Gujarat Board",
      period: "2021 - 2023",
    },
  ],

  technicalSkills: [
    "HTML (Basic)",
    "Arduino",
    "ESP32",
    "Sensor Integration",
    "IoT Development"
  ],

  softSkills: [
    "Teamwork",
    "Communication",
    "Problem Solving",
    "Fast Learner",
    "Adaptability"
  ],

  languages: [
    "Gujarati", "Hindi", "English"
  ],

  activities: [
    {
      role: "Volunteer – World Robot Olympiad (WRO)",
      date: "Oct 6-7, 2024",
      location: "Science City, Ahmedabad",
    },
    {
      role: "Startup Representative – Trasee",
      date: "Oct 21-22, 2024",
      location: "Startup Fest 2.0 Gujarat",
    },
    {
      role: "Event Management Lead",
      organization: "SAL College of Engineering",
      duration: "2023 - 2024",
    },
  ],

  references: [
    {
      name: "Het Patel",
      position: "CEO",
      company: "DProfiz Private Limited",
      phone: "+91 90162 35324",
      email: "info.dprofiz@gmail.com",
    },
  ],
};

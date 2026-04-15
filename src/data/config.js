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
  { number: "10+", label: "Projects" },
];

// --- SKILLS (Scrolling Marquee) ---
export const skills = [
  "Arduino", "ESP32", "IoT Development", "Sensor Integration", "HTML", "Photoshop", "Illustrator", "Figma",
];

// --- PORTFOLIO PROJECTS — PRIORITIZING YOUR REAL GRAPHIC DESIGN WORK ---
export const projects = [
  {
    id: 101, // New ID for real work
    title: "Eco-Friendly Branding",
    category: "Graphic Design",
    description: "Full visual identity and campaign for sustainable packaging solutions. Developed during my professional design tenure.",
    imageKey: "ecoCover",
    span: "col-span-2",
    tags: ["Branding", "Sustainability", "Packaging"],
    year: "2024",
  },
  {
    id: 102,
    title: "Sustainability Strategy",
    category: "Infographic Design",
    description: "A series of educational graphics designed to guide businesses through eco-conscious transformation and energy efficiency.",
    imageKey: "ecoStep4",
    span: "col-span-1",
    tags: ["Strategy", "Illustration", "UX"],
    year: "2024",
  },
  {
    id: 1,
    title: "Smart Industrial Gateway",
    category: "IoT Development",
    description: "Developed a robust industrial gateway using ESP32 for real-time sensor monitoring and cloud integration during DProfiz internship.",
    imageKey: "iotGateway",
    span: "col-span-1",
    tags: ["Arduino", "ESP32", "Sensors"],
    year: "2025",
  },
  {
    id: 2,
    title: "Marketing Social Campaign",
    category: "Brand Identity",
    description: "Designed a series of high-engagement social media creatives and posters for Postrd, focusing on modern typography and trend-based visuals.",
    imageKey: "marketingCampaign",
    span: "col-span-2",
    tags: ["Design", "Typography", "Branding"],
    year: "2025",
  },
  {
    id: 103,
    title: "Eco-Compliance Concept",
    category: "Visual Design",
    description: "Visualizing environmental regulations and customer demand through high-impact, minimalist graphic storytelling.",
    imageKey: "ecoStep3",
    span: "col-span-1",
    tags: ["Concept", "Regulations", "UI"],
    year: "2024",
  },
  {
    id: 3,
    title: "Tech Summit Branding",
    category: "Event Identity",
    description: "Led the visual direction for the SAL GDSC Tech Summit, creating consistent branding across print and digital platforms.",
    imageKey: "gdscBranding",
    span: "col-span-2",
    tags: ["GDSC", "Identity", "Leadership"],
    year: "2024",
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

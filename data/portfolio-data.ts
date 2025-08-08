import type {
  PersonalInfo,
  AboutData,
  SkillCategory,
  Education,
  Certification,
  Experience,
  Award,
  SocialLink
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Annapurna Patil",
  title: "Front-End Developer",
  email: "annapurnapatil23@gmail.com",
  location: "Berlin, Germany",
  tagline: "Building amazing web experiences with modern technologies",
  bio: "Passionate aspiring Front-End Developer with strong foundational skills in HTML, CSS, JavaScript, React, and Angular. Eager to apply learned knowledge and grow within a dynamic team, contributing to user-friendly web experiences."
};

export const aboutData: AboutData = {
  introduction: "I'm a passionate Front-End developer with a strong foundation in modern web technologies. My journey in software development has been driven by curiosity and a desire to create meaningful digital experiences that solve real-world problems. When I'm not coding, I'm raising a tiny human and managing family life — a role that's sharpened my skills in leadership, multitasking, and patience.",
  highlights: [
    "4+ years of web development experience",
    "2+ years of UI/UX design Experience",
    "Expertise in React, Next.js, and TypeScript",
    "Passionate about clean code and user experience"
  ],
  currentFocus: "Currently focusing on modern web technologies and UI/UX design to create seamless user experiences.",
  interests: ["Web Development", "UI/UX Design", "React"]
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: "Code",
    skills: [
      { name: "JavaScript", level: "Intermediate", years: 3 },
      { name: "TypeScript", level: "Intermediate", years: 2 },
      { name: "React", level: "Intermediate", years: 3 },
      { name: "Next.js", level: "Beginner", years: 2 },
      { name: "Angular", level: "Intermediate", years: 2 },
      { name: "HTML/CSS", level: "Intermediate", years: 4 }
    ]
  },
  {
    category: "Development Technologies",
    icon: "Server",
    skills: [
      { name: "Scrum", level: "Intermediate", years: 2 },
      { name: "Kanban", level: "Intermediate", years: 2 },
    ]
  },
  {
    category: "AI Tools",
    icon: "Monitor",
    skills: [
      { name: "AmazonQ", level: "Beginner", years: 1 },
      { name: "Cursor", level: "Beginner", years: 1 },
      { name: "Claude", level: "Beginner", years: 1 },
    ]
  },
  {
    category: "Version Control",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Intermediate", years: 3 },
      { name: "Bitbucket", level: "Intermediate", years: 3 },
    ]
  },
  {
    category: "Styling and UI/UX Design",
    icon: "design",
    skills: [
      { name: "Tailwind CSS", level: "Intermediate", years: 2 },
      { name: "Figma", level: "Beginner", years: 2 },
      { name: "Framer", level: "Beginner", years: 1 },
      { name: "Adobe Creative Suite", level: "Beginner", years: 2 }
    ]
  }
];

export const educationData: Education[] = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Siddaganga Institute of Technology",
    location: "Tumkuru, India",
    period: { start: "2015", end: "2017" },
    grade: "8.65 CGPA",
    achievements: [
      "Internship at SOCIÉTÉ GÉNÉRALE, Bangalore",
      "published paper in college journal",
      "Organised College tech fest"
    ],
  },
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLE Society GH BCA college",
    location: "Haveri, India",
    period: { start: "2012", end: "2015" },
    grade: "9.20 CGPA",
    achievements: [
      "Awarded as a best student of the year 2015",
      "Participated in inter-college coding competitions",
      "Organised college cultural events"
    ],
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert1",
    title: "Meta Frontend Developer Certificate",
    issuer: "Meta",
    platform: "Coursera",
    date: "2025",
    credentialId: "META-FRONTEND-2025",
    description: "Comprehensive program covering React, JavaScript, HTML/CSS, and modern frontend development practices",
    skills: ["React", "JavaScript", "HTML/CSS", "Git", "Figma", "UI/UX Design"],
    verificationUrl: "#",
    status: "Completed"
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp1",
    title: "Front-End Developer",
    company: "Freelancer",
    location: "Remote",
    period: { start: "Dec 2024", end: "Present" },
    type: "Full-time",
    description: "Designed and built web applications using React and NextJS to support social causes, improve accessibility, and meet stakeholder needs.",
    achievements: [
      "Design concept development and implementation for the main product application.",
      "Designed and currently engineering a website via React, for an NGO that enables women below the poverty line to sell their handmade handlooms. Collaborated with stakeholders to build the website from scratch. This effort will enable women empowerment and also increase market reach",
      "Developed an online platform via NextJS that enabled seamless casting of electoral votes via mobile devices. This increased the voter turnout by 1% and also improved the accessibility of the votes cast.",
      "Learning and Stakeholder Management: Demonstrated continuous learning by leveraging frameworks like React and NextJS to build impactful web platforms from the ground up. Collaborated with diverse stakeholders to translate varied requirements into cohesive user experiences.",
    ],
    technologies: ["React", "TypeScript", "HTML", "CSS", "Git", "Figma", "Next.js"]
  },
  {
    id: "exp2",
    title: "Front-End Developer",
    company: "Idealo Internet GmbH",
    location: "Berlin, Germany",
    period: { start: "Dec 2020", end: "Nov 2022" },
    type: "Full-time",
    description: "Improved user experience and platform stability for hotel.idealo.de by building responsive UIs, fixing critical bugs, and writing high-quality, well-tested code.",
    achievements: [
      "Enhanced user engagement on hotel.idealo.de by developing and maintaining its seamless UI across devices.",
      "Improved platform stability and user experience by resolving critical bugs and conducting usability testing, resulting in a 15% decrease in user-reported issues.",
      "Authored well-tested, documented Typescript, HTML, and CSS, ensuring high code quality and collaboration.",
      "Optimized user experience for performance and responsiveness across devices and browsers."
    ],
    technologies: ["Angular", "React", "TypeScript", "HTML", "CSS", "Git", "Figma", "Kanban", "Scrum"]
  },
  {
    id: "exp3",
    title: "Full Stack Developer",
    company: "SOCIÉTÉ GÉNÉRALE",
    location: "Bengaluru, India",
    period: { start: "Sept 2017", end: "Jan 2020" },
    type: "Full-Time",
    description: "Built responsive web applications and contributed to product development",
    achievements: [
      "Led end-to-end frontend development, deployment, and support for key banking platforms including Insta-KYC, UBO, and Embark, meeting critical business requirements.",
      "Built a chatbot UI for account opening, reducing user completion time by 40% through streamlined flows and responsive design.",
      "Built APIs for Abbyy OCR, enabling efficient text and XML extraction from PDFs and images"
    ],
    technologies: ["Angular", "Typescript", "HTML", "Css", "C#", "Java"]
  }
];

export const awardsData: Award[] = [
  {
    id: "award1",
    title: "Best Final Year Project",
    issuer: "KLE Society GH BCA College",
    date: "May 2015",
    category: "Academic",
    description: "Awarded for innovative web application development project"
  },
  {
    id: "award3",
    title: "Dean's List",
    issuer: "Siddaganga Institute Of Technology",
    date: "2015-2016",
    category: "Academic",
    description: "Consistent academic excellence throughout the year"
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/AnnapurnaPatil",
    username: "AnnapurnaPatil",
    icon: "Github",
    color: "#333"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/annapurna-patil-34b988128/",
    username: "Annapurna Patil",
    icon: "Linkedin",
    color: "#0077b5"
  }
];

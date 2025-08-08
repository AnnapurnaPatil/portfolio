export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  tagline: string;
  bio: string;
}

export interface AboutData {
  introduction: string;
  highlights: string[];
  currentFocus: string;
  interests: string[];
}

export type SkillLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

export interface Skill {
  name: string;
  level: SkillLevel;
  years: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface TimePeriod {
  start: string;
  end: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: TimePeriod;
  grade: string;
  achievements: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  date: string;
  credentialId: string;
  description: string;
  skills: string[];
  verificationUrl: string;
  status: 'Completed' | 'In Progress';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: TimePeriod;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
  color: string;
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  jobTitle: string;
  email: string;
  address: {
    "@type": string;
    addressLocality: string;
  };
  url: string;
  sameAs: string[];
  knowsAbout: string[];
  alumniOf: Array<{
    "@type": string;
    name: string;
    address: string;
  }>;
  worksFor: Array<{
    "@type": string;
    name: string;
    address: string;
  }>;
  hasCredential: Array<{
    "@type": string;
    name: string;
    credentialCategory: string;
    recognizedBy: {
      "@type": string;
      name: string;
    };
    dateCreated: string;
  }>;
  award: string[];
  description: string;
}

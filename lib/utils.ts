import React from 'react';
import { 
  Code, 
  Monitor, 
  Server, 
  Wrench, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail 
} from "lucide-react";
import type { SkillLevel, StructuredData } from '../types/portfolio';
import { SKILL_LEVEL_COLORS, SITE_URL } from './constants';
import { 
  personalInfo, 
  skillsData, 
  educationData, 
  experienceData, 
  certificationsData, 
  awardsData, 
  socialLinks 
} from '../data/portfolio-data';

// Icon mapping
const iconMap = {
  Code,
  Monitor,
  Server,
  Wrench,
  Github,
  Linkedin,
  Twitter,
  Mail,
  design: Monitor // Using Monitor as design icon fallback
} as const;

export function getIcon(
  iconName: string, 
  className: string = "w-5 h-5", 
  color?: string
): React.ReactElement {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Code;
  const iconStyle = color ? { color } : {};
  
  return React.createElement(IconComponent, {
    className,
    style: iconStyle
  });
}

export function getSkillLevelColor(level: SkillLevel): string {
  return SKILL_LEVEL_COLORS[level] || 'text-gray-400';
}

export function generateStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "email": personalInfo.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personalInfo.location
    },
    "url": SITE_URL,
    "sameAs": socialLinks.map(link => link.url),
    "knowsAbout": skillsData.flatMap(category => category.skills.map(skill => skill.name)),
    "alumniOf": educationData.map(edu => ({
      "@type": "EducationalOrganization",
      "name": edu.institution,
      "address": edu.location
    })),
    "worksFor": experienceData.map(exp => ({
      "@type": "Organization",
      "name": exp.company,
      "address": exp.location
    })),
    "hasCredential": certificationsData.map(cert => ({
      "@type": "EducationalOccupationalCredential",
      "name": cert.title,
      "credentialCategory": "certificate",
      "recognizedBy": {
        "@type": "Organization",
        "name": cert.issuer
      },
      "dateCreated": cert.date
    })),
    "award": awardsData.map(award => award.title),
    "description": personalInfo.bio
  };
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

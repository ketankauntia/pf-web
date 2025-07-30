// Personal Information Types
export interface PersonalInfo {
  name: string;
  tagline: string;
  description: string;
}

export interface ContactInfo {
  email: string;
}

export interface ResumeInfo {
  url: string;
}

export interface PersonalData {
  intro: PersonalInfo;
  contact: ContactInfo;
  resume: ResumeInfo;
}

// Experience Types
export interface Experience {
  orgLink: string;
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  mode: string;
  orgImage: string;
  stack: string[];
  description: string[];
}

// Projects Types
export interface Project {
  id: number;
  title: string;
  description: string[];
  stack: string[];
  githubLink: string;
  previewLink: string;
  image?: string; // Optional image path for project preview
}

// Education Types
export interface Education {
  degree: string;
  institution: string;
  description: string;
}

// Social Links Types
export interface Social {
  name: string;
  url: string;
}

// Coding Profiles Types
export interface CodingProfile {
  url: string;
}

export interface CodingProfiles {
  codingninjas: CodingProfile;
  leetcode: CodingProfile;
  geeksforgeeks: CodingProfile;
  github: CodingProfile;
}

// Footer Types
export interface FooterData {
  copyright: string;
}

// Complete Portfolio Data Type
export interface PortfolioData {
  personal: PersonalData;
  experience: Experience[];
  projects: Project[];
  skills: string[];
  education: Education[];
  socials: Social[];
  codingProfiles: CodingProfiles;
  footer: FooterData;
} 
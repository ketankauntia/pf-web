import personalData from '@/data/personal.json';
import experienceData from '@/data/experience.json';
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import educationData from '@/data/education.json';
import allSocialsData from '@/data/socials.json';

// Data loading functions
export const getPersonalData = () => personalData;
export const getExperienceData = () => experienceData;
export const getProjectsData = () => projectsData;
export const getSkillsData = () => skillsData;
export const getEducationData = () => educationData;
export const getSocialsData = () => allSocialsData.socials;
export const getCodingProfilesData = () => allSocialsData.codingProfiles;

// Convenience function to get all data at once (for future..)
export const getAllData = () => ({
  personal: getPersonalData(),
  experience: getExperienceData(),
  projects: getProjectsData(),
  skills: getSkillsData(),
  education: getEducationData(),
  socials: getSocialsData(),
  codingProfiles: getCodingProfilesData(),
}); 
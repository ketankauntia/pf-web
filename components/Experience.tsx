import { getExperienceData } from '@/lib/data';
import { Experience } from '@/types/portfolio';
import ExperienceItem from './ExperienceItem';

export default function ExperienceSection() {
  const experiences: Experience[] = getExperienceData();
  
  // Sort experiences by date (latest first)
  const sortedExperiences = experiences.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <section className="experience-section">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="experience-list">
        {sortedExperiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
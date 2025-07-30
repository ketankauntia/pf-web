import { Experience } from '@/types/portfolio';
import Image from 'next/image';
import { SkillItemSingle } from './SkillItem';

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="experience-item flex gap-4 mb-8 p-4">
      {/* left container -> org image */}
      <div className="experience-item-left-img flex-shrink-0">
        <div className="w-16 h-16 flex items-center justify-center  rounded-lg overflow-hidden">
          <Image 
            src={`/org-images/${experience.orgImage}`} 
            alt={experience.company} 
            width={48} 
            height={48}
            className="object-contain w-12 h-12"
          />
        </div>
      </div>
      {/* right container -> text */}
      <div className="experience-item-right-info flex-1">
        <h3 className="text-xl font-semibold">{experience.title}</h3>
        <p className="text-gray-600 font-medium mb-1">{experience.company}</p>
        <div className="experience-item-date-mode flex items-center text-sm text-gray-500 italic mb-2">
          <p className="mr-2">{experience.startDate} - {experience.endDate}</p> 
          <span className="mx-2">•</span> 
          <p className="ml-2">{experience.mode}</p>
        </div>
        <div className="experience-item-right-info-description text-sm mb-4">
          {experience.description.map((desc, index) => (
            <p className="mb-1" key={index}> - {desc}</p>
          ))}
        </div>
        <div className="experience-item-right-info-stack flex flex-wrap gap-2 mb-4">
          {experience.stack.map((stack, index) => (
            <SkillItemSingle key={index} skill={stack} />
          ))}
        </div>
      </div>
    </div>
  );
}
import experienceData from '@/data/experience.json';
import Button from '@/lib/Button';

export default function Experience() {
    return (
        <div className="experience-section mt-12 md:mt-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8">Experiences:</h2>
            
            <div className="space-y-8 md:space-y-12">
                {experienceData.map((exp) => (
                    <div key={exp.id} className="experience-item">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-1 md:gap-0">
                            <div className="flex items-center gap-3">
                                <h3 className="text-lg md:text-xl font-medium">{exp.company}</h3>
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            </div>
                            <p className="text-gray-400 text-sm md:text-base">
                                {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} – {exp.endDate === 'present' ? 'present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </p>
                        </div>
                        
                        <p className="text-gray-400 italic mb-3 md:mb-4 text-sm md:text-base">{exp.title}</p>
                        
                        <div className="space-y-2 mb-4 text-sm md:text-base">
                            {exp.description.map((desc, idx) => (
                                <p key={idx} className="text-gray-300">- {desc}</p>
                            ))}
                        </div>
                        
                        <div className="flex gap-2 flex-wrap">
                            {exp.stack.map((tech, idx) => (
                                <Button key={idx} text={tech} icon={`${tech.toLowerCase().replace('.', '').replace(' ', '')}.svg`} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


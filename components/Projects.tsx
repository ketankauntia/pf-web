import projectsData from '@/data/projects.json';
import Button from '@/lib/Button';
import Link from 'next/link';

export default function Projects() {
    return (
        <div className="projects-section mt-16">
            <h2 className="text-2xl font-semibold mb-8">Projects:</h2>
            
            <div className="space-y-12">
                {projectsData.map((project) => (
                    <div key={project.id} className="project-item">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-medium">{project.title}</h3>
                            <Link href={project.githubLink} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                                View GitHub
                            </Link>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                            {project.description.map((desc, idx) => (
                                <p key={idx} className="text-gray-300">- {desc}</p>
                            ))}
                        </div>
                        
                        <div className="flex gap-2 flex-wrap mb-4">
                            {project.stack.map((tech, idx) => (
                                <Button key={idx} text={tech} icon={`${tech.toLowerCase().replace('.', '').replace(' ', '')}.svg`} />
                            ))}
                        </div>
                        
                        <div className="flex gap-4 text-sm">
                            {project.previewLink !== 'NA' && (
                                <Link href={project.previewLink} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                                    Preview
                                </Link>
                            )}
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


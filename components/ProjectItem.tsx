import { Project } from "@/types/portfolio";
import Image from "next/image";
import { SkillItemArr } from "./SkillItem";
import { Button, SocialButton } from "@/lib/Button";

interface ProjectItemProps {
    project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
    return (
        <div className="project-item p-2 mb-3 rounded-lg ">
            <div className="flex flex-col md:flex-row gap-6">
                
                {/* info left */}
                <div className="project-item-left-info flex-1">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <div className="project-item-left-info-description mb-4">
                        {project.description.map((desc, index) => (
                            <p key={index} className="text-gray-400 mb-1 text-sm italic"> - {desc}</p>
                        ))}
                    </div>
                    <div className="project-item-right-info-stack mb-4">
                        <SkillItemArr skills={project.stack} />
                    </div>
                    
                </div>
                {/* image right */}
                <div className="project-item-right-img flex-shrink-0 flex flex-col mt-6 items-center">
                    {project.image ? (
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            width={200} 
                            height={150} 
                            className="rounded-lg object-cover"
                        />
                    ) : (
                        <div className="w-[200px] h-[120px] bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500">No Image</span>
                        </div>
                    )}
                    <div className="project-links mt-3 flex justify-center items-center gap-2">
                        <Button type="secondary" href={project.previewLink}>Preview</Button>
                        <Button type="primary" href={project.githubLink}>GitHub</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
import ProjectItem from "./ProjectItem";
import { getProjectsData } from "@/lib/data";
import Header from "@/lib/Header";

export default function Projects() {
    const projects = getProjectsData();

    return (
        <section className="projects-section py-12">
            <Header title="Projects" />    
            <div className="projects-list max-w-6xl mx-auto px-4 mt-6">
                {projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>
            <div className="text-center text-sm text-gray-500">
                <p><span className="font-semibold">More projects coming soon...</span> </p>
            </div>
        </section>
    );
}
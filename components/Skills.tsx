import Header from "@/lib/Header";
import { SkillItemArr } from "./SkillItem";
import { getSkillsData } from "@/lib/data";

export default function Skills() {
    const skillsData = getSkillsData();

    return (
        <div className="skills-section mb-12">
            <Header title="Skills" />
            <div className="skills-list">
                <SkillItemArr skills={skillsData} />
            </div>
        </div>
    );
}


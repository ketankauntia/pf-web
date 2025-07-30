function SkillItemArr({ skills }: { skills: string[] }) {
    return (
        <div className="skills-container flex flex-wrap">
            {skills.map((skill) => (
                <SkillItemSingle key={skill} skill={skill} />
            ))}
        </div>
    )
}

function SkillItemSingle({ skill }: { skill: string }) {
    return (
        <div className="skill-item">
            <h1 className="text-xs font-semibold text-black bg-white rounded-md px-2 py-1 mr-1 mb-1">{skill}</h1>
        </div>
    )
}

export { SkillItemArr, SkillItemSingle };
import Image from 'next/image';

// Mapping of skill names to their corresponding icon filenames
const skillIconMap: { [key: string]: string } = {
    // Programming Languages
    'Java': 'java.svg',
    'C++': 'cpp.svg',
    'Python': 'python.svg',
    'JavaScript': 'javascript.svg',
    'TypeScript': 'typescript.svg',
    'typescript': 'typescript.svg', // lowercase variant
    
    // Frontend Frameworks (handle both variants)
    'NextJS': 'nextjs.svg',
    'Next.js': 'nextjs.svg',
    'NextAuth': 'nextauth.svg',
    'ReactJS': 'react.svg',
    'React.js': 'react.svg',
    'Recoil': 'recoil.svg',
    'HTML': 'html5.svg',
    'CSS': 'css3.svg',
    'Tailwind': 'tailwindcss.svg',
    
    // Backend/Node (handle both variants)
    'NodeJS': 'nodejs.svg',
    'Node.js': 'nodejs.svg',
    'ExpressJS': 'express.svg',
    'Express.js': 'express.svg',
    'WebRTC': 'webrtc.svg',
    'webrtc': 'webrtc.svg', // lowercase variant
    'Mongoose': 'mongoose.svg',
    
    // Real-time Communication
    'Socket.io': 'socketio.svg',
    
    // Testing/Automation
    'Selenium': 'selenium.svg',
    
    // Architecture
    'Monorepo': 'monorepo.svg',
    'Turborepo': 'turborepo.svg',
    
    // Databases
    'MongoDB': 'mongodb.svg',
    'PostgreSQL': 'postgresql.svg',
    'MySQL': 'mysql.svg',
    'MongoDB Atlas': 'mongodb.svg', // Use same as MongoDB
    'MYSQL Workbench': 'mysql.svg', // Use same as MySQL
    
    // Version Control & Tools
    'Git': 'git.svg',
    'GitHub': 'github.svg',
    'Postman': 'postman.svg',
    
    // Cloud Services
    'AWS S3': 'aws.svg'
};

function SkillItemArr({ skills }: { skills: string[] }) {
    return (
        <div className="skills-container flex flex-wrap gap-2">
            {skills.map((skill) => (
                <SkillItemSingle key={skill} skill={skill} />
            ))}
        </div>
    )
}

function SkillItemSingle({ skill }: { skill: string }) {
    const iconFilename = skillIconMap[skill];
    
    return (
        <div className="skill-item">
            <div className="flex items-center gap-1 text-xs font-semibold text-black bg-white rounded-md px-2 py-1 mr-1 mb-1">
                {iconFilename && (
                    <Image 
                        src={`/icons/${iconFilename}`}
                        alt={`${skill} icon`}
                        width={12}
                        height={12}
                        className="w-3 h-3"
                    />
                )}
                <span>{skill}</span>
            </div>
        </div>
    )
}

export { SkillItemArr, SkillItemSingle };
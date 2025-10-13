import Button from '@/lib/Button';

const techCategories = {
    "Languages": [
        { name: "JavaScript", icon: "javascript.svg" },
        { name: "TypeScript", icon: "typescript.svg" },
        { name: "Python", icon: "python.svg" },
        { name: "Java", icon: "java.svg" },
        { name: "C++", icon: "cpp.svg" }
    ],
    "Web": [
        { name: "Next.js", icon: "nextjs.svg" },
        { name: "React", icon: "react.svg" },
        { name: "Node.js", icon: "nodejs.svg" },
        { name: "Express", icon: "express.svg" },
        { name: "HTML", icon: "html5.svg" },
        { name: "CSS", icon: "css3.svg" },
        { name: "Tailwind", icon: "tailwindcss.svg" }
    ],
    "Databases": [
        { name: "MongoDB", icon: "mongodb.svg" },
        { name: "PostgreSQL", icon: "postgresql.svg" },
        { name: "MySQL", icon: "mysql.svg" },
        { name: "Mongoose", icon: "mongoose.svg" }
    ],
    "Tools & Others": [
        { name: "Git", icon: "git.svg" },
        { name: "GitHub", icon: "github.svg" },
        { name: "AWS S3", icon: "aws.svg" },
        { name: "Postman", icon: "postman.svg" },
        { name: "NextAuth", icon: "nextauth.svg" },
        { name: "WebRTC", icon: "webrtc.svg" },
        { name: "Socket.io", icon: "socketio.svg" },
        { name: "Selenium", icon: "selenium.svg" },
        { name: "Recoil", icon: "recoil.svg" },
        { name: "Turborepo", icon: "turborepo.svg" },
        { name: "Monorepo", icon: "monorepo.svg" }
    ]
};

export default function Technologies() {
    return (
        <div className="technologies-section mt-20">
            <h2 className="text-2xl font-semibold mb-8">technologies i&apos;ve worked with:</h2>
            
            <div className="space-y-8">
                {Object.entries(techCategories).map(([category, techs]) => (
                    <div key={category}>
                        <h3 className="text-lg text-gray-400 mb-4">{category}</h3>
                        <div className="flex gap-3 flex-wrap">
                            {techs.map((tech, idx) => (
                                <Button key={idx} text={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


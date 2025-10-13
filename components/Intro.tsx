import personalData from '@/data/personal.json';

export default function Intro() {
    return (
        <div className="intro-section mt-20">
            
            <div className="space-y-4 text-md text-gray-400">
                {personalData.intro.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
        </div>
    );
}
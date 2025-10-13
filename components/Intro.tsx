import personalData from '@/data/personal.json';

export default function Intro() {
    return (
        <div className="intro-section mt-12 md:mt-20">
            
            <div className="space-y-3 md:space-y-4 text-sm md:text-md text-gray-400">
                {personalData.intro.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>
        </div>
    );
}
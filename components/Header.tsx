export default function Header(){
    return <div className="header flex flex-row justify-between items-center mt-12 md:mt-20">
        <div className="l-nav-name text-lg md:text-2xl font-semibold">
            ketan.kauntia
        </div>
        <div className="r-nav-options flex flex-row gap-4 md:gap-6 items-center text-sm md:text-base">
            <button className="hover:opacity-70 transition-opacity">blog</button>
            <button className="hover:opacity-70 transition-opacity">proof-of-work</button>
            <button className="hover:opacity-70 transition-opacity" title="Theme toggle (coming soon)">◐</button>
        </div>
    </div>
}
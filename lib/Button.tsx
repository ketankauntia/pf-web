interface ButtonProps {
    type: "primary" | "secondary";  // secondary will be frost grade type
    children: React.ReactNode;
    href: string;
}

function Button({ type, children, href }: ButtonProps) {    
    let buttonClass = type === "primary" ? "bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors" : "bg-white text-gray-800 rounded-md hover:bg-gray-200 transition-colors";
    buttonClass += " px-5 py-2 text-sm";

    return (    
        <div className="skill-item">
            <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
                {children}
            </a>
        </div>
    )
}

function SocialButton({ icon, link }: { icon: React.ReactNode, link: string }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="social-link">
            {icon}
        </a>
    )
}

export { Button, SocialButton };
import Image from 'next/image';

export default function Button({ text, icon }: { text: string; icon?: string }) {
    return (
        <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors flex items-center gap-2 text-sm md:text-base">
            {icon && (
                <Image 
                    src={`/icons/${icon}`} 
                    alt={text} 
                    width={16} 
                    height={16}
                    className="md:w-5 md:h-5"
                />
            )}
            <span>{text}</span>
        </button>
    );
}
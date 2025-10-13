import Image from 'next/image';

export default function Button({ text, icon }: { text: string; icon?: string }) {
    return (
        <button className="px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors flex items-center gap-2">
            {icon && (
                <Image 
                    src={`/icons/${icon}`} 
                    alt={text} 
                    width={20} 
                    height={20}
                />
            )}
            <span>{text}</span>
        </button>
    );
}
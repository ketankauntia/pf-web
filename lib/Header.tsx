export default function Header({ title }: { title: string }) {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
        </div>
    );
}
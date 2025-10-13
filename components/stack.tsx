import Button from "@/lib/Button";

export default function Stack() {
  return (
    <div className="stack-section mt-16">
      <h2 className="text-xl font-medium mb-4">Currently working with:</h2>
      <div className="flex gap-4 flex-wrap">
        <Button text="Next.js" icon="nextjs.svg" />
        <Button text="TypeScript" icon="typescript.svg" />
        <Button text="PostgreSQL" icon="postgresql.svg" />
        <Button text="Python" icon="python.svg" />
      </div>
    </div>
  );
}

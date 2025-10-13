import Button from "@/lib/Button";

export default function Stack() {
  return (
    <div className="stack-section mt-12 md:mt-16">
      <h2 className="text-lg md:text-xl font-medium mb-3 md:mb-4">Currently working with:</h2>
      <div className="flex gap-3 md:gap-4 flex-wrap">
        <Button text="Next.js" icon="nextjs.svg" />
        <Button text="TypeScript" icon="typescript.svg" />
        <Button text="PostgreSQL" icon="postgresql.svg" />
        <Button text="Python" icon="python.svg" />
      </div>
    </div>
  );
}

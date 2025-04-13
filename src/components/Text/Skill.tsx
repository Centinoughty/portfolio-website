export default function Skill({ skill }: { skill: string }) {
  return (
    <>
      <span className="text-[var(--secondary-color)] px-2 py-1 rounded-full bg-[var(--primary-color)]/10 text-sm">
        {skill}
      </span>
    </>
  );
}

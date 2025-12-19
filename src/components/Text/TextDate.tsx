interface TextDateProps {
  date: Date;
}

export default function TextDate({ date }: TextDateProps) {
  if (!date) return null;

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (isNaN(parsedDate.getTime())) return null;

  const month = parsedDate.toLocaleString("en-US", {
    month: "short",
  });

  const year = parsedDate.getFullYear();

  return (
    <>
      <span className="md:text-[1.8vw] lg:text-[1.5vw] xl:text-[0.95vw]">
        {month}{" "}
      </span>
      <span className="md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.2vw] font-semibold">
        {year}
      </span>
    </>
  );
}

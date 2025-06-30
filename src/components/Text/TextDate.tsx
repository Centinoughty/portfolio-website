export default function TextDate({ date }: { date: string }) {
  const dateArr = date.split(" ");
  if (date === "") return <></>;

  const month = dateArr[0];
  const year = dateArr[1];

  return (
    <>
      <span className="text-[] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[0.95vw]">
        {month}{" "}
      </span>
      <span className="text-[] md:text-[2.2vw] lg:text-[1.8vw] xl:text-[1.2vw]">
        {year}
      </span>
    </>
  );
}

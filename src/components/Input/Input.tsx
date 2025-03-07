import { bric } from "@/styles/fonts";

interface Input {
  type: string;
  title: string;
  textarea?: boolean;
}

export default function Input({ textarea = false, ...props }: Input) {
  const className = `outline-none border-2 border-[var(--primary-color)]/20 focus:border-[var(--primary-color)]/80 rounded-md px-2 py-1 font-mont tracking-wide`;

  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <span
          className={`${bric.className} font-semibold text-[var(--primary-color)]`}
        >
          {props.title}
        </span>
        {textarea ? (
          <textarea className={`${className} h-[100px] resize-none`}></textarea>
        ) : (
          <input type={props.type} className={`${className}`} />
        )}
      </div>
    </>
  );
}

import { bric } from "@/styles/fonts";
import React, { forwardRef } from "react";

interface Input {
  type: string;
  title: string;
  textarea?: boolean;
}

export default forwardRef(function Input(
  { textarea = false, ...props }: Input,
  ref
) {
  const id = `input-${props.title.toLowerCase().replace(/\s+/g, "-")}`;
  const className = `outline-none border-2 border-[var(--primary-color)]/20 focus:border-[var(--primary-color)]/80 rounded-md px-2 py-1 font-mont tracking-wide`;

  return (
    <>
      <div className="w-full flex flex-col gap-1">
        <label
          htmlFor={id}
          className={`${bric.className} font-semibold text-[var(--primary-color)]`}
        >
          {props.title}
        </label>
        {textarea ? (
          <textarea
            id={id}
            name={props.title}
            ref={ref as React.RefObject<HTMLTextAreaElement>}
            required
            className={`${className} h-[100px] resize-none`}
          ></textarea>
        ) : (
          <input
            id={id}
            name={props.title}
            ref={ref as React.RefObject<HTMLInputElement>}
            type={props.type}
            required
            className={`${className}`}
          />
        )}
      </div>
    </>
  );
});

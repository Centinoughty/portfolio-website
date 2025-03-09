"use client";

import { FormEvent, useRef } from "react";
import Input from "../Input/Input";
import { fira } from "@/styles/fonts";

export default function ContactCard() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full md:max-w-md lg:max-w-lg p-4 shadow-md rounded-md flex flex-col items-center gap-4"
      >
        <Input title="Name" type="text" ref={nameRef} />
        <Input title="Email" type="email" ref={emailRef} />
        <Input title="Message" type="text" textarea ref={messageRef} />
        <button
          type="submit"
          className={`cursor-pointer w-fit px-4 py-2 rounded-md ${fira.className} text-[var(--accent)] font-medium bg-[var(--primary-color)]/80 hover:bg-[var(--primary-color)] duration-300`}
        >
          Send
        </button>
      </form>
    </>
  );
}

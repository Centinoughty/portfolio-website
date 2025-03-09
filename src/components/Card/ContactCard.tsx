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
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-screen md:max-w-md lg:max-w-lg p-4 shadow-md rounded-md flex flex-col items-center gap-4"
      >
        <Input title="Name" type="text" />
        <Input title="Email" type="email" />
        <Input title="Message" type="text" textarea />
        <button
          type="submit"
          className={`w-fit px-4 py-2 rounded-md ${fira.className} text-[var(--accent)] font-medium bg-[var(--primary-color)]/80 hover:bg-[var(--primary-color)] duration-300`}
        >
          Send
        </button>
      </form>
    </>
  );
}

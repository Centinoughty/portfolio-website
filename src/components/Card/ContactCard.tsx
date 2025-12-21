"use client";

import { FormEvent, useRef, useState } from "react";
import Input from "../Input/Input";
import { bric, fira } from "@/styles/fonts";
import axios from "axios";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

export default function ContactCard() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(true);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sending) return;

    setSending(true);

    try {
      await axios.post("https://admin.nadeemsiyam.com/api/message", {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      });

      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";

      setToast("Message sent successfully!");
      setSuccess(true);
      setTimeout(() => setToast(null), 3000);
    } catch (error) {
      setToast("Failed to send message. Try again.");
      setSuccess(false);
      setTimeout(() => setToast(null), 3000);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {toast && (
        <div className="z-50 fixed top-6 right-6 bg-[#E6F2EE] text-(--primary-color) px-4 py-2 rounded-md shadow-2xl animate-fade-in">
          <p
            className={`${bric.className} font-semibold text-lg flex justify-center items-center gap-2`}
          >
            {success ? (
              <FiCheckCircle size={20} className="text-green-700 text-xl" />
            ) : (
              <FiXCircle size={20} className="text-red-700 text-xl" />
            )}
            {toast}
          </p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full md:max-w-md lg:max-w-lg p-4 shadow-md rounded-md flex flex-col items-center gap-4"
      >
        <Input title="Name" type="text" ref={nameRef} />
        <Input title="Email" type="email" ref={emailRef} />
        <Input title="Message" type="text" textarea ref={messageRef} />
        <button
          type="submit"
          disabled={sending}
          className={`cursor-pointer w-fit px-4 py-2 rounded-md ${fira.className} disabled:bg-gray-500 text-[var(--accent)] font-medium bg-[var(--primary-color)] hover:shadow-md disabled:shadow-none hover:-translate-y-0.5 disabled:translate-y-0 duration-300`}
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
}

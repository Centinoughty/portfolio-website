import { mont } from "@/styles/fonts";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="px-4 py-6 border-t border-[var(--primary-color)] flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p
            className={`text-[var(--secondary-color)] ${mont.className} text-[4vw] md:text-[2.2vw] lg:text-[1.6vw] xl:text-[1vw]`}
          >
            Copyright 2025 All Right Reserved
          </p>
          <div className="flex gap-4 text-[3.5vh] text-[var(--primary-color)]">
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </footer>
    </>
  );
}

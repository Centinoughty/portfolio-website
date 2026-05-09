import Link from "next/link";
import { EMAIL } from "../../../util/constant";
import { bric } from "@/styles/fonts";

export default function ConnectCard() {
  return (
    <>
      <div>
        <div
          className={`mt-4 md:mt-0 ${bric.className} text-[5vw] md:text-[2vw] xl:text-[1.2vw]`}
        >
          <p>Send me an email at</p>
          <Link
            href={`mailto:${EMAIL}`}
            aria-label="Nadeem's email"
            className="font-semibold tracking-wide"
          >
            {EMAIL}
          </Link>
        </div>
      </div>
    </>
  );
}

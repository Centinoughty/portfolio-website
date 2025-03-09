import Link from "next/link";
import { EMAIl } from "../../../util/constant";
import { bric } from "@/styles/fonts";

export default function ConnectCard() {
  return (
    <>
      <div>
        <div className={`${bric.className} text-[1.2vw]`}>
          <p>Send me a mail at</p>
          <Link
            href={`mailto:${EMAIl}`}
            className="underline font-semibold tracking-wide"
          >
            {EMAIl}
          </Link>
        </div>
      </div>
    </>
  );
}

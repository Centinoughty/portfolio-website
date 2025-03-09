import Link from "next/link";
import { EMAIl } from "../../../util/constant";
import { bric } from "@/styles/fonts";

export default function ConnectCard() {
  return (
    <>
      <div>
        <div className={`mt-4 md:mt-0 ${bric.className} text-[5vw] md:text-[2vw] xl:text-[1.2vw]`}>
          <p>Send me an email at</p>
          <Link
            href={`mailto:${EMAIl}`}
            className="font-semibold tracking-wide"
          >
            {EMAIl}
          </Link>
        </div>
      </div>
    </>
  );
}

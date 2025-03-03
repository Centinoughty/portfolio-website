import { Bricolage_Grotesque, Fira_Mono, Montserrat } from "next/font/google";

export const bric = Bricolage_Grotesque({ subsets: ["latin"] });

export const fira = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const mont = Montserrat({ subsets: ["latin"] });

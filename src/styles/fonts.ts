import {
  Bricolage_Grotesque,
  Fira_Mono,
  Homemade_Apple,
} from "next/font/google";

export const bric = Bricolage_Grotesque({ subsets: ["latin"] });

export const fira = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const home = Homemade_Apple({ weight: ["400"], subsets: ["latin"] });

import { Poppins, Open_Sans as OpenSans } from "next/font/google";

export const fontSans = OpenSans({
  subsets: ["latin"],
  variable: "--font-app-sans",
});

export const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-app-heading",
});

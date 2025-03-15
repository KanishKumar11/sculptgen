import localFont from "next/font/local";

export const VVDS = localFont({
  src: [
    {
      path: "./VVDS-Med.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./VVDS-SBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-vvds",
});

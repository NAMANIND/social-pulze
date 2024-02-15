import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Cousine, Ubuntu } from "@next/font/google";
import { Gtag } from "@/components/gtag";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const cousine = Ubuntu({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cousine",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gtag />
      <div
        className={`bg-background ${inter.variable} ${cousine.variable} font-body text-text`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

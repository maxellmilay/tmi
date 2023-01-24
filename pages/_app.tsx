import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond, Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const garamond = Cormorant_Garamond({
  subsets: ["latin-ext"],
  style: "normal",
  variable: "--font-garamond",
  weight: "500",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} ${garamond.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

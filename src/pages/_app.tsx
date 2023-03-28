import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import NextLink from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          :root {
            --inter-font: ${inter.style.fontFamily};
          }
        `}
      </style>
      <header className="bg-white shadow">
        <div className="container px-6 xl:px-14 mx-auto flex h-16 items-center ">
          <NextLink className="block" href="/">
            <Image src="/logo.svg" alt="Minea" width="100" height="60" />
          </NextLink>
        </div>
      </header>

      <main className="mb-10">
        <Component {...pageProps} />
      </main>
    </>
  );
}

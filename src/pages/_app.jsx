import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <div>Home </div>
      <div>
        {" "}
        <Link href="/about">About</Link>{" "}
      </div>
      <Component {...pageProps} />
    </div>
  );
}

import "@/styles/globals.css";
import Link from "next/link";

export default function App({Component, pageProps}) {
    return (
        <div >
         <div className="absolute bottom-0  w-full bg-green-500">

             <div className={`flex justify-center py-8`}>

                 <div>
                     {" "}
                     <Link href="/">Home</Link>{" "}
                     <Link href="/about">About</Link>{" "}
                     <Link href="/contact">Contact</Link>{" "}
                 </div>

             </div>
         </div>
            <Component {...pageProps} />

        </div>
    );
}

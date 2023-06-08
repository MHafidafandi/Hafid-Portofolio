import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/Cabin-Regular.ttf",
  display: "swap",
});
export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${myFont.className} w-full min-h-screen`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

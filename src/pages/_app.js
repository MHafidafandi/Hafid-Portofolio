import { NavbarProvider } from "@/Context/NavbarContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import { useRouter } from "next/router";

const myFont = localFont({
  src: "../../public/Cabin-Regular.ttf",
  display: "swap",
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <main
        className={`${myFont.className} w-full min-h-screen bg-white dark:bg-black`}
      >
        <NavbarProvider>
          <Navbar />
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
          <Footer />
        </NavbarProvider>
      </main>
    </>
  );
}

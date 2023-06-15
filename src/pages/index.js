import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Avatar from "../../public/Avatar.jpg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import HireMe from "@/components/HireMe";
import codelogo from "../../public/codelogo.png";

export default function home() {
  return (
    <>
      <Head>
        <title>Portofolio</title>
      </Head>
      <main className="flex items-center min-h-screen w-full dark:text-white">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex justify-between items-center w-full lg:flex-col">
            <div className="w-1/2 flex justify-center md:w-full">
              <Image
                src={Avatar}
                alt=""
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,50vw"
                className="w-96 h-auto overflow-hidden rounded-2xl shadow-xl border-8 border-stone-200 grayscale hover:grayscale-0 transition ease-in-out duration-300 lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center md:mt-5 lg:w-full lg:text-center">
              <AnimatedText
                text={
                  "Muhammad Hafid Afandi, Student And Backend Web Developer."
                }
                className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-2xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Saya adalah seorang mahasiswa dan Backend Web Developer. Saya
                bertanggung jawab mengembangkan dan menjaga bagian belakang
                sebuah website. Saya menggunakan bahasa pemrograman seperti
                JavaScript, PHP, atau Python, dan bekerja dengan teknologi
                seperti Node.js, Django, atau Laravel
              </p>
              <div className="flex items-center self-start gap-5 lg:self-center">
                <Link
                  href={"/dummy.pdf"}
                  target={"_blank"}
                  className="flex items-center gap-2 bg-black text-white p-2.5 px-6 text-lg rounded-lg font-semibold border-2 border-solid border-transparent hover:text-black hover:bg-white hover:border-black dark:bg-white dark:text-black hover:dark:border-white hover:dark:bg-black hover:dark:text-white md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <AiOutlineLink />
                </Link>
                <Link
                  href="mailto:afandimboizz@gmail.com"
                  target={"_blank"}
                  className="text-lg font-medium underline capitalize md:text-base "
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-6 inline-block w-60 grayscale overflow-hidden hover:grayscale-0 transtion-[width] ease duration-300 md:hidden">
          <Image src={codelogo} alt="" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}

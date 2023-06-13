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
        <Layout className="pt-0">
          <div className="flex justify-between items-center w-full">
            <div className="w-1/2 flex justify-center">
              <Image
                src={Avatar}
                alt=""
                className="w-96 h-auto overflow-hidden rounded-2xl shadow-xl border-8 border-stone-200 grayscale hover:grayscale-0 transition ease-in-out duration-300"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text={
                  "Muhammad Hafid Afandi, Student And Backend Web Developer."
                }
                className="!text-5xl"
              />
              <p className="my-4 text-base font-medium">
                Saya adalah seorang mahasiswa dan Backend Web Developer. Saya
                bertanggung jawab mengembangkan dan menjaga bagian belakang
                sebuah website. Saya menggunakan bahasa pemrograman seperti
                JavaScript, PHP, atau Python, dan bekerja dengan teknologi
                seperti Node.js, Django, atau Laravel
              </p>
              <div className="flex items-center self-start gap-5">
                <Link
                  href={"/dummy.pdf"}
                  target={"_blank"}
                  className="flex items-center gap-2 bg-black text-white p-2.5 px-6 text-lg rounded-lg font-semibold border-2 border-solid border-transparent hover:text-black hover:bg-white hover:border-black dark:bg-white dark:text-black hover:dark:border-white hover:dark:bg-black hover:dark:text-white"
                  download={true}
                >
                  Resume <AiOutlineLink />
                </Link>
                <Link
                  href="mailto:afandimboizz@gmail.com"
                  target={"_blank"}
                  className="text-lg font-medium underline capitalize "
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-60 grayscale overflow-hidden hover:grayscale-0 transtion-[width] ease duration-300">
          <Image src={codelogo} alt="" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}

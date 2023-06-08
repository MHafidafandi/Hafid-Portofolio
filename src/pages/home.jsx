import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import design from "../../public/design.png";
import avatar from "../../public/dev-ed-wave.png";

import localFont from "next/font/local";
import Link from "next/link";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "../../public/PermanentMarker-Regular.ttf",
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hafid Portofolio</title>
      </Head>
      <main className={`px-10 ${myFont.className}`}>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-PermanentMarker">Hafid Dev</h1>
            <ul className="flex items-center justify-between gap-4">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li className="text-xl text-black rounded hover:text-white hover:bg-orange-600 p-1 cursor-pointer bg-orange-500">
                Resume
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl text-orange-600 py-2">
              Muhammad Hafid Afandi
            </h2>
            <h3 className="text-2xl py-5">Backend Web Developer</h3>
            <p className="text-md py-5 text-gray-600 font-medium leading-7">
              Saya adalah seorang Backend Web Developer. Saya bertanggung jawab
              mengembangkan dan menjaga bagian belakang sebuah website. Saya
              menggunakan bahasa pemrograman seperti JavaScript, PHP, atau
              Python, dan bekerja dengan teknologi seperti Node.js, Django, atau
              Laravel
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 text-gray-400 ">
            <Link
              href={"https://www.linkedin.com/in/m-hafid-afandi-23b725245/"}
            >
              <AiFillLinkedin className="hover:text-blue-500 cursor-pointer" />
            </Link>
            <Link href={"https://github.com/MHafidafandi"}>
              <AiFillGithub className="hover:text-black cursor-pointer" />
            </Link>
            <Link href={"https://www.instagram.com/mhafid_a/"}>
              <AiFillInstagram className="hover:text-red-600 cursor-pointer" />
            </Link>
          </div>
          <div className="w-80 h-80 bg-orange-500 rounded-full mx-auto pt-5 my-10">
            <Image src={avatar} alt="" className="" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 text-gray-700 leading-7">
              Saya melayani kebutuhan sebagai{" "}
              <span className="font-bold">Backend Developer</span>. Dalam peran
              ini, saya dapat membantu Anda dengan pengembangan backend aplikasi
              web menggunakan bahasa pemrograman seperti{" "}
              <span className="text-yellow-400 font-bold">JavaScript</span>,
              {"  "}
              <span className="text-blue-900 font-bold"> Python</span>, atau{" "}
              <span className="text-violet-800 font-bold">PHP</span>. Saya juga
              dapat membantu dalam integrasi dengan layanan pihak ketiga melalui
              <span className="text-red-800 font-bold"> API</span>, menjaga
              keamanan aplikasi, dan mengoptimalkan kinerja. Dengan pengalaman
              dan pengetahuan saya, saya siap membantu Anda mengembangkan
              aplikasi web yang andal, aman, dan berkinerja tinggi.
            </p>
            <p className="text-md py-2 text-gray-700 leading-7">
              saya juga akan fokus pada pengoptimalan kinerja aplikasi,
              memastikan bahwa aplikasi web berjalan dengan cepat dan responsif.
              Selain itu, saya juga menyediakan layanan pemeliharaan dan
              pemantauan rutin setelah peluncuran, sehingga aplikasi web Anda
              tetap berjalan dengan lancar dan bebas dari bug. Dengan berbagai
              layanan ini, saya siap membantu Anda dalam mengembangkan aplikasi
              web yang handal, aman, dan efisien.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="bg-gradient-to-br from-orange-300 to-yellow-100 text-center shadow-lg p-10 rounded-2xl my-10">
              <Image src={consulting} alt="" className="m-auto" />
              <h3 className="text-lg font-medium">Coding Languages</h3>
              <p className="py-2 leading-7">
                Dalam pengembangan aplikasi saya menggunakan bahasa pemrograman
                yang saya pahami
              </p>
              <h4 className="py-4 text-orange-500 font-medium">
                The tools I use
              </h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Inshot</p>
            </div>
            <div className="bg-gradient-to-br from-orange-300 to-yellow-100 text-center shadow-lg p-10 rounded-2xl my-10">
              <Image src={code} alt="" className="m-auto" />
              <h3 className="text-lg font-medium">Coding Languages</h3>
              <p className="py-2 leading-7">
                Dalam pengembangan aplikasi saya menggunakan bahasa pemrograman
                yang saya pahami
              </p>
              <h4 className="py-4 text-orange-500 font-medium">
                The tools I use
              </h4>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">ReactJs/NextJs</p>
            </div>
            <div className="bg-gradient-to-br from-orange-300 to-yellow-100 text-center shadow-lg p-10 rounded-2xl my-10">
              <Image src={design} alt="" className="m-auto" />
              <h3 className="text-lg font-medium">Beautiful Designs</h3>
              <p className="py-2 leading-7">
                Dalam pengembangan aplikasi saya menggunakan bahasa pemrograman
                yang saya pahami
              </p>
              <h4 className="py-4 text-orange-500 font-medium">
                The tools I use
              </h4>
              <p className="text-gray-800 py-1">PhotoShop</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Inshot</p>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam
            aut <span className="text-orange-500">pariatur</span> quibusdam?
            Minus dolore est laboriosam illo, error, dolorum, quibusdam
            exercitationem cupiditate neque porro itaque{" "}
            <span className="text-orange-500">pariatur</span> odio sunt ducimus!
          </p>
          <div className="flex flex-col gap-10 lg:flex-wrap lg:flex-row">
            <div className="basis-1/3 flex-1">
              <Image src={""} alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={""} alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={""} alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={""} alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={""} alt="" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={""} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

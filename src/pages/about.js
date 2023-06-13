import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import aboutAvatar from "../../public/about-avatar.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skils from "@/components/Skils";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <main className="w-full flex flex-col items-center justify-center dark:text-white">
        <Layout className="pt-16">
          <AnimatedText text="passion fuels purpose!" className="text-center" />
          <div className="grid grid-cols-8 gap-16 mt-16 ">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase">My Jobs</h2>
              <p className="font-medium mb-4">
                Saya melayani kebutuhan sebagai{" "}
                <span className="font-bold">Backend Developer</span>. Dalam
                peran ini, saya dapat membantu Anda dengan pengembangan backend
                aplikasi web menggunakan bahasa pemrograman seperti{" "}
                <span className="text-yellow-400 font-bold">JavaScript</span>,
                {"  "}
                <span className="text-blue-900 font-bold"> Python</span>, atau{" "}
                <span className="text-violet-800 font-bold">PHP</span>. Saya
                juga dapat membantu dalam integrasi dengan layanan pihak ketiga
                melalui
                <span className="text-red-800 font-bold"> API</span>, menjaga
                keamanan aplikasi, dan mengoptimalkan kinerja. Dengan pengalaman
                dan pengetahuan saya, saya siap membantu Anda mengembangkan
                aplikasi web yang andal, aman, dan berkinerja tinggi.
              </p>
              <p className="font-medium">
                saya juga akan fokus pada pengoptimalan kinerja aplikasi,
                memastikan bahwa aplikasi web berjalan dengan cepat dan
                responsif. Selain itu, saya juga menyediakan layanan
                pemeliharaan dan pemantauan rutin setelah peluncuran, sehingga
                aplikasi web Anda tetap berjalan dengan lancar dan bebas dari
                bug. Dengan berbagai layanan ini, saya siap membantu Anda dalam
                mengembangkan aplikasi web yang handal, aman, dan efisien.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl bg-white p-8 border border-solid border-black dark:bg-black dark:border-white">
              <div className="absolute -z-50 top-0 -right-3 w-[102%] h-[103%] rounded-[2rem] bg-black dark:bg-white" />
              <Image
                src={aboutAvatar}
                alt="about-avatar"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75">
                  satisfied client
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75">
                  Project Complete
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-black/75 dark:text-white/75">
                  Years experience
                </h2>
              </div>
            </div>
          </div>
          <Skils />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

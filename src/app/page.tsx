import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <link href="./dist/output.css" rel="stylesheet"></link>
      </Head>

      <Header />
      {/* Main Container */}
      <section id="#mainContainer" className="snap-center">
        <MainContainer />
      </section>
      <section id="#about" className="snap-center">
        <About />
      </section>
      {/* Projects */}
      {/* Contact me */}
    </div>
  );
}

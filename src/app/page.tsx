"use client";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import MainContainer from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <link href="./dist/output.css" rel="stylesheet"></link>
      </Head>

      <Header />

      <section id="main" className="snap-center">
        <MainContainer />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* <section id="experience" className="snap-center">
        <WorkExperience />
      </section> */}

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
}

"use client";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import fotoPerfil from "../assets/fotoPerfil.jpg";
import Link from "next/link";
type Props = {};

function MainContainer({}: Props) {
  const [text, count] = useTypewriter({
    words: ["<Olá! Meu nome é Saul!/>", "Bem vindo ao meu portfolio!"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={fotoPerfil}
        alt="foto de perfil"
      />
      <div className="z-20">
        <h2 className="text-sm font-bold uppercase text-gray-500 pb-2 tracking-[7px]">
          Desenvolvedor Full Stack
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#about">
            <button className="heroButton">Contact me</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

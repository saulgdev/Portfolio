"use client";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 2.0,
      }}
      className="flex flex-col relative text-center md:text-left md:flex-col h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolut top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Um pouco sobre mim</h4>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 2.0,
          }}
          className="text-base"
        >
          Depois de anos trabalhando como Designer e freelancer na área de
          comunicação visual, decidi começar a estudar e entender como funciona
          o mercado de desenvolvimento web. Observando as tecnologias mais
          requisitadas, escolhi estudar Java Script e me especializar como um
          profissional no desenvolvimento full stack. Hoje tenho bastante
          experiência com lógica de programação, ferramentas de versionamento de
          código como GIT e experiência com diversas bibliotecas e Frameworks
          para o JavaScript. Essa lógica de programação agora faz parte do meu
          dia a dia. A forma como eu via e como agora vejo um problema mudou
          drasticamente. Ser um programador te muda de dentro pra fora e espero
          que todos possam ter essa experiência. Você deixa de enxergar o
          problema por completo e passa a enxergar pequenas soluções em meio a
          um grande problema e no fim, você consegue resolver. E o sentimento de
          problema solucionado é sempre maravilhoso.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default About;

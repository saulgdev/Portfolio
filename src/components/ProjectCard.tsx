import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ProjectCard({}: Props) {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[370px] snap-center bg-[#292929] p-10 md:w-[600px] xl:w-[720px] hover:opacity-100 md:opacity-40 h-[540px] md:h-[600px]">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-24 h-24 rounded-full object-cover object-center"
        src="https://cdn.worldvectorlogo.com/logos/react-1.svg"
        alt="Projeto Frilla"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-center">Projeto Frilla</h4>
        <h5 className="font-semibold text-1xl mt-4">
          Tecnologias ultilizadas:
        </h5>
        <ul className="list-disc space-y-1 ml-5 text-lg mt-1">
          <li>TypeScript</li>
          <li>Styled-Components</li>
          <li>Redux</li>
          <li>React-Hooks</li>
        </ul>
        <p className="text-1xl font-semibold mt-2">
          Descrição: A aplicação vai facilitar a busca do cliente que procura
          mão de obra e oferecer oportunidade para quem presta serviço encontrar
          novos clientes.
        </p>
        <p className="text-1xl font-semibold ">
          Deploy:{" "}
          <a
            target="_blank"
            className="font-bold"
            href="https://projeto-frilla.vercel.app"
          >
            Projeto Frilla - Vercel
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;

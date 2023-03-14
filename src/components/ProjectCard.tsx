import React, { ReactNode } from "react";
import { motion } from "framer-motion";
type Props = {
  element: ElementProps;
};

interface ElementProps {
  name: string;
  image: string;
  techs: object[];
  description: string;
  deploy: string;
}

function ProjectCard({ element }: Props) {
  return (
    <div
      key={element.name}
      className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 w-[370px] snap-center bg-[#292929] p-10 md:w-[600px] xl:w-[720px] hover:opacity-100 md:opacity-40 h-[540px] md:h-[600px]"
    >
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-24 h-24 rounded-full object-cover object-center"
        src={element.image}
        alt={element.name}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light text-center">{element.name}</h4>
        <h5 className="font-semibold text-1xl mt-4">
          Tecnologias ultilizadas:
        </h5>
        <ul className="list-disc space-y-1 ml-5 text-lg mt-1">
          {element.techs.map((el: any) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <p className="text-1xl font-semibold mt-2">{element.description}</p>
        <p className="text-1xl font-semibold ">
          Deploy:{" "}
          <a target="_blank" className="font-bold" href={element.deploy}>
            {element.name}
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;

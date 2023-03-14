import React from "react";
import { motion } from "framer-motion";
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandReactNative,
} from "react-icons/tb";
import { FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa";
import {
  SiPostgresql,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.7 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-col max-w-full justify-center px-10 gap-10 mx-auto items-center"
    >
      <h3 className="absolut top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-7">
        <div className="flex flex-col justify-between items-center">
          <TbBrandNextjs strokeWidth={0.8} size={100} />
          <p className="text-gray-500 text-center">NextJs</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <TbBrandReactNative strokeWidth={0.8} size={100} />
          <p className="text-gray-500 text-center">ReactJs</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <TbBrandTypescript strokeWidth={0.8} size={100} />
          <p className="text-gray-500 text-center">TypeScript</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <FaNodeJs strokeWidth={0.1} size={90} />
          <p className="text-gray-500 text-center">NodeJs</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <SiPostgresql strokeWidth={0.1} size={90} />
          <p className="text-gray-500 text-center">PostgreeSQL</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <FaPython strokeWidth={0.1} size={90} />
          <p className="text-gray-500 text-center">Python</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <AiFillHtml5 strokeWidth={0.1} size={110} />
          <p className="text-gray-500 text-center">HTML</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <SiCss3 strokeWidth={0.1} size={90} />
          <p className="text-gray-500 text-center">CSS</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <SiJavascript strokeWidth={0.1} size={90} />
          <p className="text-gray-500 text-center">JavaScript</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <SiTailwindcss strokeWidth={0.1} size={90} />
          <p className="text-gray-500 text-center">TailwindCSS</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <FaDocker strokeWidth={0.1} size={90} />
          <p className="text-gray-500 text-center">Docker</p>
        </div>
        <div className="flex flex-col justify-between items-center">
          <FaAws strokeWidth={0.1} size={90} />
          <p className="text-gray-500 text-center">AWS Services</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

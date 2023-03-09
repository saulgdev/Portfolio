import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.7 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-col max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolut top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-3 gap-7">
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">NextJs</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://ionicframework.com/docs/icons/logo-react-icon.png"
            alt="ReactJs"
          />
          <p className="text-gray-500 text-center">ReactJs</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
            alt="TypeScript"
          />
          <p className="text-gray-500 text-center">TypeScript</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://blog.rocketseat.com.br/content/images/2018/12/nodejs-vale-a-pena-vantagens.jpg"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">NodeJs</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">PostgreeSQL</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://www.pngfind.com/pngs/m/62-626208_python-logo-png-transparent-background-python-logo-png.png"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">Python</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://rafadev.com.br/wp-content/uploads/2020/11/html5-logo-1.png"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">HTML</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://armyyazilim.com/wp-content/uploads/2019/10/css.png"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">CSS</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">JavaScript</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">TailwindCSS</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">Docker</p>
        </div>
        <div>
          <img
            className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCaJLGMIQX328F3E3nAvgmtVsXGfJSdqJxAX46a7X7jLDAL17EPxcCvUK4_EFk0RwX34&usqp=CAU"
            alt="NextJs"
          />
          <p className="text-gray-500 text-center">AWS Services</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

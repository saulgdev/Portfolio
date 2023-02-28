import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div>
      <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-col max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className="absolut top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact me
        </h3>

        <div></div>
      </div>
    </div>
  );
};

export default ContactMe;

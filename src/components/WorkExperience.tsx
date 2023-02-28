import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-col max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolut top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div>
        <ExperienceCard />
      </div>
    </div>
  );
};

export default WorkExperience;

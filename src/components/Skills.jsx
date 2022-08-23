import React from "react";
import "./css/skills.css";
import "./css/fonts.css";
import "./css/classes.css";
import frontEndIcon from "./assets/skills/front-end.png";
import backEndIcon from "./assets/skills/back-end.png";
import designerIcon from "./assets/skills/designer.png";

const Skills = () => {
  return (
    <div className="skills-root w-full py-20 dark:bg-slate-900">
      <div className="text-slate-900 skill-wrapper w-11/12 md:h-[300px] mx-auto md:w-11/12 2xl:w-3/5 flex flex-col md:flex-row transition-all duration-300 local-primary-font">
        <div className="skills-header md:w-4/12 w-full transition-all duration-300 md:h-full flex items-start flex-col justify-center p-3 gap-4 py-6">
          <h1 className="skills-desc-head text-2xl font-bold text-violet-500">
            What can i do?
          </h1>
          <p className="text-semibold text-slate-900 dark:text-slate-50">
            Skill sets include both hard skills and soft skills. Hard skills are
            teachable abilities or skills that can be quantified.
          </p>
        </div>
        <div className="skills-desc transition-all duration-300 w-full md:w-8/12 md:h-full flex flex-col md:flex-row 2xl:justify-center md:justify-between gap-3 items-center">
          <div className="p-5 skill-card front-end-skill flex flex-col justify-center items-center hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="skill-image w-full h-2/6 flex justify-center items-center">
              <img src={frontEndIcon} alt="" className="h-full" />
            </div>
            <div className="skill-desc w-full h-4/6 flex justtify-start items-center flex-col overflow-y-auto">
              <h3 className="text-xl font-bold pt-3 ">Front-end</h3>
              <p className="text-center px-6">
                html, css, javascript, tailwind, bootstrap, sass, and also
                little bit front end framework like React
              </p>
            </div>
          </div>
          <div className="p-5 skill-card back-end-skill flex flex-col justify-center items-center hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="skill-image w-full h-2/6 flex justify-center items-center">
              <img src={backEndIcon} alt="" className="h-full" />
            </div>
            <div className="skill-desc w-full h-4/6 flex justtify-start items-center flex-col overflow-y-auto">
              <h3 className="text-xl font-bold pt-3 ">Back-end</h3>
              <p className="text-center px-6">
                c, c++, nodejs, and also query language, mySQL
              </p>
            </div>
          </div>
          <div className="p-5 skill-card designer flex flex-col justify-center items-center hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="skill-image w-full h-2/6 flex justify-center items-center">
              <img src={designerIcon} alt="" className="h-full" />
            </div>
            <div className="skill-desc w-full h-4/6 flex justtify-start items-center flex-col overflow-y-auto">
              <h3 className="text-xl font-bold pt-3 ">Designer</h3>
              <p className="text-center px-6">
                Figma, Adobe Illustrator, Photoshop, Premiere, and also After
                Effect
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

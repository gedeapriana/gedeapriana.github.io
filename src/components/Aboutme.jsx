import React from "react";
import "./css/about-me.css";
import "./css/fonts.css";
import "./css/classes.css";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import personalImage from "./assets/about/personal-img.png";

const Aboutme = () => {
  const aboutMeHeader = "Hii there";
  const fullName = "I Komang Gede Apriana";
  const aboutMeDesc1 = `I am ${fullName}, a web developer based in Indonesia. Bali with 2 years experience. I specialize in interface design for mobile and web based apps with a focus on simplicity & usability. I am passionate about design and technology and how the two can meet to create a good experience.
Currently studying for a bachelor's degree in computer science, Udayana University`;

  return (
    <div className="aboutme-root w-full dark:bg-slate-900 py-40">
      <div className="aboutme-wrapper w-11/12 md:w-[750px] mx-auto h-[600px] md:h-[550px] relative">
        <div className="about-image absolute w-[300px] h-[350px] md:w-[350px] md:h-[400px] left-0 top-0 rounded-3xl overflow-hidden shadow-lg">
          <img src={personalImage} alt="gede apriana" className="h-full " />
        </div>
        <div className="about-desc dark:text-slate-100 absolute dark:bg-slate-800 w-[300px] h-[350px] md:w-[450px] md:h-[400px] bg-white right-0 bottom-0 rounded-3xl shadow-lg local-primary-font p-8 flex flex-col justify-between items-start">
          <div className="aboutme-header text-2xl font-bold dark:text-slate-50 text-slate-900 inline-block">
            {aboutMeHeader}
          </div>
          <div className="aboutme-desc h-2/3 text-ellipsis overflow-y-auto md:text-justify pr-3">
            {aboutMeDesc1}
          </div>
          <a
            href={"#Link"}
            className="local-primary-font rounded-md bg-violet-500 hover:bg-blue-300 py-2 px-4 text-white transition-all font-bold flex justify-center items-center gap-2"
          >
            See more about me <BoxArrowUpRight className="inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;

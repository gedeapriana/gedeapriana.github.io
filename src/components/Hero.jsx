import React from "react";
import "./css/hero.css";
import "./css/fonts.css";
import "./css/classes.css";
import avatar from "./assets/hero/avatar.png";
import { EnvelopeHeart } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";

const hero = () => {
  return (
    <div className="local-hero h-screen w-full local-primary-font flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="hero-left text-slate-100 font-sans w-full md:w-[500px] md:h-80 h-3/5 p-10 flex flex-col justify-center items-start">
        <div className="header-text text-4xl font-bold my-4 local-primary-font">
          Gede Apriana
        </div>
        <div className="hero-desc local-primary-font">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          repellat sunt nemo dignissimos minima voluptate, doloremque a
          voluptatem aliquam enim?
        </div>

        <div className="hero-bottom mt-10 flex justify-center items-center gap-5">
          <a
            href={"#link"}
            className="local-primary-font rounded-md bg-blue-400 hover:bg-blue-300 py-2 px-4"
          >
            Email Me <EnvelopeHeart className="inline" />
          </a>

          <a
            href={"#link"}
            className="github-hero border p-2 rounded-xl hover:animate-pulse hover:bg-blue-400 transition duration-300"
          >
            <Github className="text-2xl" />
          </a>

          <a
            href={"#link"}
            className="linkedin-hero border p-2 rounded-xl hover:animate-pulse hover:bg-blue-400 transition duration-300"
          >
            <Linkedin className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="hero-right w-full md:w-[500px] md:h-80 h-2/5 flex justify-center items-end md:items-center">
        <div className="hero-img w-28 h-28 md:w-48 md:h-48 rounded-full flex justify-center items-center">
          <img className="object-cover" src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default hero;

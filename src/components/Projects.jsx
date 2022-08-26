import React from "react";
import "./css/navbar.css";
import "./css/fonts.css";
import "./css/classes.css";
import { Github } from "react-bootstrap-icons";
import atmIcon from "./assets/project/atm.png";
import tamagotchiIcon from "./assets/project/tamagotchi.png";
import movieIcon from "./assets/project/movies.png";

const Projects = () => {
  const projectHeader = [
    "My Latest Featured Projects",
    "Who are in extremely love with eco friendly system",
  ];

  const githubLink = {
    miniAtm: "https://github.com",
    tamagotchi: "https://github.com",
    movies: "https://github.com",
  };

  const miniAtm = {
    title: "Mini ATM",
    madeWith: "C, Data Structure",
    githubLink: githubLink.miniAtm,
    icon: atmIcon,
    desc: "A simple ATM project that uses the c language, which includes data structures such as arrays, ADT, stacks, queues, and a few simple algorithms such as searching, and sorting.",
    descDetail:
      "A simple ATM project that uses the c language, which includes data structures such as arrays, ADT, stacks, queues, and a few simple algorithms such as searching, and sorting.",
  };

  const tamagotchi = {
    title: "Tamagotchi",
    madeWith: "C, Basic of C",
    githubLink: githubLink.tamagotchi,
    icon: tamagotchiIcon,
    desc: "Tamagotchi is one of the cool toys that many 90s kids loved. Not only children, even adults also join this virtual pet fever.",
    descDetail:
      "How to play Tamagotchi is like taking care of pets in general. Tamagotchis must be cared for, by being fed, cleaned of dirt, and invited to play. In my project, this tamagotchi game is implemented in C",
  };

  const movies = {
    title: "Movies Search",
    madeWith: "Javascript(ES6), Bootstrap 5",
    githubLink: githubLink.movies,
    icon: movieIcon,
    desc: "A simple project to train advanced javascript, which i call 'moviesway', which uses bootstrap in its interface, and javascript of course",
    descDetail:
      "In this project, I deepen my knowledge on javascript, especially es6, namely callbacks, async awaits, and many more...",
  };

  return (
    <div className="projects-root w-full local-primary-font dark:bg-slate-900" id={"project-root"}>
      <div className="projects-wrapper md:w-11/12 2xl:w-3/5 w-11/12 mx-auto py-40">
        <div className="projects-header w-full">
          <h1 className="block text-center text-2xl font-bold text-violet-400 p-3">
            {projectHeader[0]}
          </h1>
          <p className="block text-center text-slate-900 dark:text-slate-50">
            {projectHeader[1]}
          </p>
        </div>

        <div className="projects-content w-full h-[500px] md:h-[400px] my-5 flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="project-section-1 md:w-1/2 w-full h-full">
            <div className="mini-atm card w-full h-full rounded-2xl bg-slate-50 dark:bg-slate-800 p-5 shadow-lg flex">
              <div className="card-img w-1/3 h-full flex justify-center items-center">
                <img
                  src={atmIcon}
                  alt="atm"
                  className="w-10 h-10 md:w-20 md:h-20"
                />
              </div>
              <div className="card-desc w-2/3 h-full">
                <div className="card-desc-header w-full h-3/4 flex flex-col justify-center items-start">
                  <div className="text-slate-700 dark:text-slate-50 font-bold text-md md:text-xl pb-2">
                    {miniAtm.title}
                  </div>
                  <div className="card-desc-desc overflow-auto text-sm dark:text-slate-50 text-slate-800 text-start">
                    {miniAtm.desc}
                  </div>
                </div>
                <div className="github-button w-full h-1/4 flex justify-end items-end">
                  <a
                    href={miniAtm.githubLink}
                    className="font-bold bg-violet-400 py-2 px-3 rounded-md text-slate-50 hover:bg-blue-200 transition-all"
                  >
                    Look out
                    <Github className="inline ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-section-2 md:w-1/2 w-full h-full flex md:flex-col gap-3">
            <div className="project-section-2-sec1 md:w-full md:h-1/2 w-1/2 h-full">
              <div className="tamagotchi card w-full h-full rounded-2xl bg-slate-50 dark:bg-slate-800 p-5 shadow-lg flex flex-col md:flex-row items-center justify-between">
                <div className="card-img w-full md:w-1/3 h-1/3 md:h-full flex justify-center items-center">
                  <img
                    src={tamagotchiIcon}
                    alt="tamagotchi"
                    className="w-10 h-10 md:w-20 md:h-20"
                  />
                </div>
                <div className="card-desc w-full md:w-2/3 h-2/3 md:h-full">
                  <div className="card-desc-header w-full h-2/3 flex flex-col justify-start items-center md:items-start">
                    <div className="text-slate-700 dark:text-slate-50 font-bold text-md md:text-xl pb-2">
                      {tamagotchi.title}
                    </div>
                    <div className="card-desc-desc overflow-auto text-sm dark:text-slate-50 text-slate-800 text-center md:text-start">
                      {tamagotchi.desc}
                    </div>
                  </div>
                  <div className="github-button w-full h-1/3 flex justify-center items-center md:items-end md:justify-end">
                    <a
                      href={tamagotchi.githubLink}
                      className="font-bold bg-violet-400 py-2 px-3 rounded-md text-slate-50 hover:bg-blue-200 transition-all"
                    >
                      Look out
                      <Github className="inline ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-section-2-sec2 md:w-full md:h-1/2 w-1/2 h-full">
              <div className="movie card w-full h-full rounded-2xl bg-slate-50 dark:bg-slate-800 p-5 shadow-lg flex flex-col md:flex-row items-center justify-between">
                <div className="card-img flex justify-center items-center w-full md:w-1/3 h-1/3 md:h-full">
                  <img
                    src={movieIcon}
                    alt="movie"
                    className="w-10 h-10 md:w-20 md:h-20"
                  />
                </div>
                <div className="card-desc w-full md:w-2/3 h-2/3 md:h-full">
                  <div className="card-desc-header w-full h-2/3 flex flex-col justify-start items-center md:items-start">
                    <div className="text-slate-700 dark:text-slate-50 font-bold text-md md:text-xl">
                      {movies.title}
                    </div>
                    <div className="card-desc-desc overflow-auto text-sm dark:text-slate-50 text-slate-800 text-center md:text-start">
                      {movies.desc}
                    </div>
                  </div>
                  <div className="github-button w-full h-1/3 flex justify-center items-center md:items-end md:justify-end">
                    <a
                      href={movies.githubLink}
                      className="font-bold bg-violet-400 py-2 px-3 rounded-md text-slate-50 hover:bg-blue-200 transition-all"
                    >
                      Look out
                      <Github className="inline ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

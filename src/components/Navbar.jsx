import React from "react";
import "./css/navbar.css";
import "./css/fonts.css";
import "./css/classes.css";
import "./css/dark-toggle.css";
import {List, PersonLinesFill} from "react-bootstrap-icons";
import Darktoggle from "./Darktoggle";
import navbarBrand from "./assets/navbar/brand.png";

const Navbar = () => {

  window.addEventListener('scroll', function () {
    let scrollY = this.scrollY;
    if(scrollY > 0) {
      document.querySelector('.navbar-root').classList.add("bg-slate-900");
      document.querySelector('.navbar-root').classList.add("border-b");
      document.querySelector('.navbar-root').classList.add("border-slate-400");
      document.querySelector('.navbar-root').classList.add("dark:border-slate-700");
      document.querySelector('.navbar-root').classList.add("bg-opacity-25");
      document.querySelector('.navbar-root').classList.add("backdrop-blur-lg");
    } else {
      document.querySelector('.navbar-root').classList.remove("bg-slate-900");
      document.querySelector('.navbar-root').classList.remove("border-b");
      document.querySelector('.navbar-root').classList.remove("border-slate-400");
      document.querySelector('.navbar-root').classList.remove("dark:border-slate-700");
      document.querySelector('.navbar-root').classList.remove("bg-opacity-25");
      document.querySelector('.navbar-root').classList.remove("backdrop-blur-lg");
    }
  })

  const showHamburgerMenu = () => {
    document.querySelector('.hamburger-list').classList.toggle('scale-100');
    document.querySelector('.hamburger-list').classList.toggle('scale-0');
    //
    // console.log('Ok')
  }
  // document.querySelector(".hamburger-menu").addEventListener('click', function () {
  //   document.querySelector(".hamburger-list").classList.toggle('scale-100');
  //   document.querySelector(".hamburger-list").classList.toggle('scale-0');
  // })

  return (
    <div className="navbar-root transition duration-200 ease-in-out fixed z-10 w-full h-20 local-primary-font">
      <div className="navbar-wrapper h-full w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-brand">
          <a
            href={"#home-root"}
            className="text-white nav-brand text-2xl local-primary-font font-bold"
          >
            <img src={navbarBrand} className={"md:w-48 w-40"} alt="gedeapriana"/>
          </a>
        </div>
        <div className="navbar-list w-[380px] hidden md:inline-block ml-auto">
          <ul className="w-full flex justify-between items-center">
            <li>
              <a
                className="local-primary-font text-slate-200 font-semibold active:text-slate-50"
                href={"#home-root"}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="local-primary-font text-slate-200 font-semibold hover:text-slate-50 active:text-slate-50"
                href={"#aboutme-root"}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="local-primary-font text-slate-300 font-semibold hover:text-slate-50 active:text-slate-50"
                href={"#skills-root"}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="local-primary-font text-slate-300 font-semibold hover:text-slate-50 active:text-slate-50"
                href={"#project-root"}
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="text-slate-50 local-primary-font active:text-slate-50 inline-block bg-violet-500 hover:bg-blue-300 transition-all py-2 px-4 rounded-md mx-1 font-semibold"
                href={"#footer-root"}
              >
                Contact <PersonLinesFill className={"inline"} />
              </a>
            </li>
          </ul>
        </div>

        <Darktoggle />

        <div onClick={showHamburgerMenu} className="hamburger-menu md:hidden border border-slate-700 rounded-lg p-1 cursor-pointer" id={"hamburger-menu"}>
          <List className="text-white text-4xl" />
        </div>

        <div className="transition duration-300 hamburger-list origin-top-right scale-0 fixed w-[250px] top-24 rounded-2xl overflow-hidden right-7 bg-slate-50 dark:bg-slate-800 shadow-2xl md:hidden p-4">
          <ul className={"w-full h-full flex flex-col justify-center items-center"}>
            <li className={"w-full rounded-md overflow-hidden"}><a className={"w-full block py-2 text-center hover:bg-slate-200 transition-all text-slate-700 hover:font-bold dark:text-slate-50 dark:hover:bg-slate-700"} href={"#home-root"}>Home</a></li>
            <li className={"w-full rounded-md overflow-hidden"}><a className={"w-full block py-2 text-center hover:bg-slate-200 transition-all text-slate-700 hover:font-bold dark:text-slate-50 dark:hover:bg-slate-700"} href={"#aboutme-root"}>About</a></li>
            <li className={"w-full rounded-md overflow-hidden"}><a className={"w-full block py-2 text-center hover:bg-slate-200 transition-all text-slate-700 hover:font-bold dark:text-slate-50 dark:hover:bg-slate-700"} href={"#skills-root"}>Skills</a></li>
            <li className={"w-full rounded-md overflow-hidden"}><a className={"w-full block py-2 text-center hover:bg-slate-200 transition-all text-slate-700 hover:font-bold dark:text-slate-50 dark:hover:bg-slate-700"} href={"#project-root"}>Project</a></li>
            <li className={"w-full rounded-md overflow-hidden"}><a className={"w-full block py-2 text-center hover:bg-slate-200 transition-all font-bold dark:text-slate-50 bg-violet-400 text-slate-50 dark:hover:bg-slate-700"} href={"#footer-root"}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

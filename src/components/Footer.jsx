import React from "react";
import "./css/hero.css";
import "./css/fonts.css";
import "./css/classes.css";
import "./css/footer.css"
import reactIcon from "./assets/footer/react.png"
import sassIcon from "./assets/footer/sass.png"
import tailwindIcon from "./assets/footer/tailwind.png"
import {Send} from "react-bootstrap-icons";



const Footer = () => {
  return (
    <div className="footer-root w-full dark:bg-slate-800 local-primary-font bg-slate-50">
      <div className="footer-wrapper mx-auto md:w-11/12 2xl:w-3/5 w-11/12 py-16">
          <div className="footer-header w-full">
              <h1 className={"block text-center text-2xl font-bold text-violet-400"}>Featured By</h1>
              <div className="footer-icon flex justify-center items-center gap-7 p-5">
                  <div className="react-icon">
                      <img src={reactIcon} alt="react"/>
                  </div>
                  <div className="react-icon">
                      <img src={sassIcon} alt="sass"/>
                  </div>
                  <div className="react-icon">
                      <img src={tailwindIcon} alt="tailwind"/>
                  </div>
              </div>
          </div>

          <div className="footer-contact w-full flex flex-col md:flex-row my-5">

              <div className="drop-line w-full md:w-7/12 p-8">
                  <h1 className={"text-xl text-violet-400 font-bold py-3"}>Let's Talk</h1>
                  <p className={"text-slate-900 dark:text-slate-50"}>To request a quote or want to meet up for coffee, contact me directly or fill out the form and i will get back to you soon</p>
                  <form action="" className={"w-full py-5 flex flex-col items-start justify-center"}>
                    <div className="full-name w-full my-1">
                      <label htmlFor={"full-name"} className={"font-semibold text-violet-400"}>Full Name</label>
                      <input id={"full-name"} type="text" placeholder={"ex: Apriana"} className={"w-full bg-violet-100 p-2 rounded-md my-2"} required/>
                    </div>
                    <div className="email w-full my-1">
                      <label htmlFor={"email"} className={"font-semibold text-violet-400"}>Email</label>
                      <input id={"email"} type="email" placeholder={"Your email here..."} className={"w-full bg-violet-100 p-2 rounded-md my-2"} required/>
                    </div>
                    <div className="email w-full my-1">
                      <label htmlFor={"message"} className={"font-semibold text-violet-400"}>Message</label>
                      <textarea name="message" id="message" className={"block w-full bg-violet-100 p-2 rounded-md my-2 h-40"} placeholder={"Your message here..."}></textarea>
                    </div>

                    <button type={"submit"} className={"bg-violet-400 px-4 py-2 text-slate-50 my-5 md:text-lg text-md ml-auto rounded-md font-semibold"}>Send Message<Send className={"inline-block ml-2"} /></button>
                  </form>
              </div>
              <div className="contact-me bg-blue-400 w-full md:w-5/12 p-8">ini contact </div>

          </div>
      </div>
    </div>
  );
};

export default Footer;

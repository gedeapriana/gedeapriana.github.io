import React from "react";
import "./css/hero.css";
import "./css/fonts.css";
import "./css/classes.css";
import "./css/footer.css"
import reactIcon from "./assets/footer/react.png"
import sassIcon from "./assets/footer/sass.png"
import tailwindIcon from "./assets/footer/tailwind.png"
import {
  CloudDownload,
  EnvelopeHeart,
  Facebook,
  GeoAlt, HeartFill,
  Instagram,
  Send,
  TelephonePlus,
  Whatsapp
} from "react-bootstrap-icons";



const Footer = () => {
  return (
    <div className="footer-root w-full dark:bg-slate-800 local-primary-font bg-slate-50">
      <div className="footer-wrapper mx-auto md:w-11/12 2xl:w-3/5 w-11/12 py-16">
          <div className="footer-header w-full">
              <h1 className={"block text-center text-2xl font-bold text-violet-400"}>Featured By</h1>
              <div className="footer-icon flex justify-center items-center gap-7 p-5">
                  <div className="react-icon dark:hover:bg-slate-900 hover:bg-violet-400 rounded-full p-3 transition animate-pulse ease-in-out duration-300">
                      <img src={reactIcon} alt="react"/>
                  </div>
                  <div className="react-icon dark:hover:bg-slate-900 hover:bg-violet-400 rounded-full p-3 transition animate-pulse ease-in-out duration-300">
                      <img src={sassIcon} alt="sass"/>
                  </div>
                  <div className="react-icon dark:hover:bg-slate-900 hover:bg-violet-400 rounded-full p-3 transition animate-pulse ease-in-out duration-300">
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
                      <input id={"full-name"} type="text" placeholder={"ex: Apriana"} className={"w-full bg-violet-100 dark:bg-slate-900 p-2 rounded-md my-2 dark:text-slate-50"} required/>
                    </div>
                    <div className="email w-full my-1">
                      <label htmlFor={"email"} className={"font-semibold text-violet-400"}>Email</label>
                      <input id={"email"} type="email" placeholder={"Your email here..."} className={"w-full bg-violet-100 dark:bg-slate-900 p-2 rounded-md my-2 dark:text-slate-50"} required/>
                    </div>
                    <div className="email w-full my-1">
                      <label htmlFor={"message"} className={"font-semibold text-violet-400"}>Message</label>
                      <textarea name="message" id="message" className={"block w-full bg-violet-100 p-2 rounded-md my-2 dark:bg-slate-900 h-40 dark:text-slate-50"} placeholder={"Your message here..."}></textarea>
                    </div>

                    <button type={"submit"} className={"bg-violet-400 px-4 py-2 text-slate-50 my-5 md:text-lg text-md ml-auto rounded-md font-semibold hover:bg-blue-300 transition-all"}>Send Message<Send className={"inline-block ml-2"} /></button>
                  </form>
              </div>
              <div className="contact-me w-full md:w-5/12 p-8">
                <h1 className={"text-xl text-violet-400 font-bold py-3"}>Contact me</h1>
                <a href={"#link"} className={"font-semibold py-2 text-slate-900 dark:text-slate-50 text-lg hover:font-bold transition-all block"}>< GeoAlt className={"inline-block mr-2"}/>Pantai Lebih st., <span>Gianyar, Bali, Indonesia</span></a>
                <a href={"#link"} className={"text-slate-900 dark:text-slate-50 py-1 hover:font-bold transition-all block"}> <TelephonePlus className={"inline-block mr-1"}/> +62 813 3948 6902</a>
                <a href={"#link"} className={"text-slate-900 dark:text-slate-50 py-1 hover:font-bold transition-all block"}> <EnvelopeHeart className={"inline-block mr-1"}/> gedeapriana36@gmail.com</a>
                <a href={"#link"} className={"text-slate-50 font-bold text-xl bg-violet-400 py-2 px-4 inline-block my-5 rounded-lg hover:bg-blue-300 transition-all"}> <CloudDownload className={"inline mr-2"} />Download Resume</a>
                <div className="social-icons flex gap-3 my-10">
                  <a href={"#link"} className="whatsapp text-violet-400 hover:text-slate-50 social-icon text-2xl dark:text-slate-50 hover:scale-[1.03] transition-all hover:bg-violet-400 p-1 rounded-lg dark:hover:text-slate-800"><Whatsapp /></a>
                  <a href={"#link"} className="instagram text-violet-400 hover:text-slate-50 social-icon text-2xl dark:text-slate-50 hover:scale-[1.03] transition-all hover:bg-violet-400 p-1 rounded-lg dark:hover:text-slate-800"><Instagram /></a>
                  <a href={"#link"} className="facebook text-violet-400 hover:text-slate-50 social-icon text-2xl dark:text-slate-50 hover:scale-[1.03] transition-all hover:bg-violet-400 p-1 rounded-lg dark:hover:text-slate-800"> <Facebook /> </a>
                </div>
              </div>

          </div>

          <div className="footer-footer w-full">
            <p className={"text-center dark:text-slate-50 text-slate-900"}>Copyright ©2022 All rights reserved | made with < HeartFill className={"inline"} /> by <a href={"https://www.instagram.com/gdaprianaa"} className={"font-bold"} rel={"noreferrer"} target={"_blank"}>gedeapriana</a></p>
          </div>
      </div>
    </div>
  );
};

export default Footer;

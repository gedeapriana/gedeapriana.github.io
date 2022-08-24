import { Projector } from "react-bootstrap-icons";
import Aboutme from "./components/Aboutme";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

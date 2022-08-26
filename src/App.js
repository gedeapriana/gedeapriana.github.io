import Aboutme from "./components/Aboutme";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './components/css/fonts.css'
import Totop from "./components/Totop";
import Pageload from "./components/Pageload";

function App() {
  return (
    <div>
      <Pageload />
      <Totop />
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

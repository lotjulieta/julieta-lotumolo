import "./App.css";
import Header from "./components/shared/Header";
import Portada from "./components/shared/Portada";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";

function App() {
  return (
  <div>
    <div><Header /></div>
    <div id="home"><Portada /></div>
    <div id="about"><Aboutme /></div>
    <div id="skills"><Skills /></div>
    <div id="experience"><Experience/></div>
    <div id="contact"><Contact/></div>
    <div><Footer/></div>
    </div>
  );
}

export default App;

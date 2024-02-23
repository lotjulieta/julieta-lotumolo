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
      <Header />
      <Portada />
      <Aboutme />
      <Skills />
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

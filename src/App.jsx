import "./App.css";
import Header from "./components/shared/Header";
import Portada from "./components/shared/Portada";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
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
    </div>
  );
}

export default App;

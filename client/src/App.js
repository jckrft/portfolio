import "./App.css";
import {Route, Routes} from 'react-router-dom'
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes> */}
      <Landing />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

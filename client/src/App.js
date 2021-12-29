import "./App.css";
import {Route, Routes} from 'react-router-dom'
import Landing from "./screens/Landing";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

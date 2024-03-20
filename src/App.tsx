import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HomeTwo, About, Projects, Contact, Info } from "./pages";
import Navbar from "./components/Navbar";
import "./index.css";
import "../public/locales/config";

function App() {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeTwo />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

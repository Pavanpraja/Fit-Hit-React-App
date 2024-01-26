import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Perform from "./components/Perform/perform";
import Contact from "./components/Contact/contact";
import TOC from "./components/TOC/TOC";

function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perform" element={<Perform />} />
          <Route path="/TOC" element={<TOC />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;

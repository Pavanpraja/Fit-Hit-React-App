import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/about/about";
import Explore from "./components/about/explore";
import Lists from "./components/about/lists";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/" Component={Home}></Route>
      </Routes>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Lists />
        <Explore />
        <Footer />
      </div>
    </>
  );
}

export default App;

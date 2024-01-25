import "./App.css";
import Home from "./components/Home";
import Perform from "./components/Perform/perform";
import About from "./components/about/about";
import Explore from "./components/about/explore";
import Lists from "./components/about/lists";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Lists />
        <Explore />
        <Footer />
        <Perform />
      </div>
    </>
  );
}

export default App;

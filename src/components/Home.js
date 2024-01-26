import React from "react";
import "../App.css";
import Navbar from "./navbar";
import About from "./about/about";
import Explore from "./about/explore";
import Lists from "./about/lists";
import Footer from "./footer";
function Home() {
  return (
    <>
    <Navbar />
      <div>
        <section id="h-bac">
          <div className="img-con">
            <img src="h-bac.png" alt="..." />
          </div>
        </section>
        <div className="h-texts">
          <div className="all-texts">
            <p className="a-p">FIT-HIT MEDIA</p>
            <h1>
              <span className="auto-type1">
                Let's try to improve our health
              </span>
            </h1>
          </div>
          <div className="h-img">
            <img src="jumping-jack.gif" alt="..." />
          </div>
        </div>
      </div>
      <Lists />
      <About />
      <Explore />
      <Footer />
    </>
  );
}

export default Home;

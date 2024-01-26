import React from "react";
import "../App.css";
import "react-dom";
function Navbar() {
  function handleClick(){
    let a = document.querySelector(".hamburger");
    let b = document.querySelector(".all-lists");
    a.classList.toggle("active");
    b.classList.toggle("active");
  }
  return (
    <>
      <div>
        <nav>
          <div className="h-p">
            <div className="hamburger" onClick={handleClick}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <h1 className="logo">FIT-HIT</h1>
            <ul className="all-lists">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/perform">Perform</a>
              </li>
              <li>
                <a href="/TOC">Privacy policy</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="nav-d">
              <input type="text" placeholder="search for health" />
              <button>Search</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

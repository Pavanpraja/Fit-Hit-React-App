import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <>
    <div>
    <nav>
        <div className="h-p">
            <div className="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <h1 className="logo">FIT-HIT</h1>
            <ul className="all-lists">
                <li><a href="/index.html">Home</a></li>
                <li><a href="#about-con">About</a></li>
                <li><a href="/Perform.html">Perform</a></li>
                <li><a href="/TOC.html">Privacy policy</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div className="nav-d">
                <input type="text" placeholder="search for health"/>
                <button>Search</button>
            </div>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar

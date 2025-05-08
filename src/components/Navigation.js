import React from "react";
import "../components/Navigation.css";

export default function Navigation() {
    return (
        <div className="Navigation">
            <nav className="Navigation-bar">
              <p className="logo">
                <a href="/index.html" title="Homepage - Tracy Njoroge">Tracy.</a>
              </p>

              <input type="checkbox" id="check"/>
              <label for="check" className="icons">
                <i className='bx bx-menu-alt-right' id="menu-icon"></i>
                <i className='bx bx-x' id="close-icon"></i>
              </label>
              <div className="Navigation-bar-links">
                 <a href="#home" style={{"--i": "0"}} className="nav-link" title="Homepage - Tracy Njoroge">Home</a>
                 <a href="#about" style={{"--i": "1"}} className="nav-link" title="About Tracy Njoroge">About</a>
                 <a href="#skills" style={{"--i": "1"}} className="nav-link" title="Tracy Njoroge's Skills">Skills</a>
                 <a href="#projects" style={{"--i": "2"}} className="nav-link" title="Tracy Njoroge's Projects">Projects</a>
                 <a href="#contact" style={{"--i": "3"}} className="nav-link" title="Contact Tracy Njoroge">Contact</a>
              </div>
            </nav>
        </div>
    )
}
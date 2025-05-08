import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import "../components/Main.css";

export default function Main() {
    return (
        <div className="Main">
            <Hero />
            <About />
            <Skills/>
            <Projects />
            <Contact />
        </div>
    )
}
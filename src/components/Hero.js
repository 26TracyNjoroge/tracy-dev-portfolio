import React from "react";
import "../components/Hero.css";

export default function Hero() {
    return (
        <div className="Hero" id="home">
            <div className="Hero-child">
                <p className="Hero-heading">Hey there, I'm</p>
                <h2>Tracy Njoroge,<br/>
                A Front-end Developer.</h2>
                <p>I create accessible, intuitive experiences that respond beautifully across all devices. My approach combines technical expertise with design sensibility to craft digital products that perform seamlessly for every user. Transform your ideas into exceptional digital experiences.</p>
                <button className="Hero-resume">
                    <a href="https://drive.google.com/file/d/1OTqReRXoqQIWRe7MK_WHOsfxNhBX1r_8/view?usp=sharing" target="_blank" rel="noreferrer" title="Tracy Njoroge Resume" >Resume</a>
                </button>
            </div>
            
        </div>
    )
}
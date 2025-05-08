import React from "react";
import "../components/About.css";
import tracy from "../images/tracy.JPG";
 
export default function About() {
    return (
        <div className="About" id="about">
            <div className="About-bio">
                <h3>About me</h3>
                <p>Hi, I'm Tracy Njoroge, a front-end developer based in Nairobi, Kenya who enjoys bringing ideas to life on the web. My tech journey began during a digital marketing course where, while exploring beyond the website builders we were taught, I discovered coding and was instantly captivated. I was instantly hooked as it aligned perfectly with my analytical mindset and creative curiosity.
                </p>
                <p>
                With a background in Agriculture, I bring a unique perspective to problem-solving, blending creativity with structured thinking. I’ve been focused on mastering the fundamentals of web development, building intuitive, accessible, and user-centred applications. I’m passionate about thoughtful design, clean code, and constantly learning new frameworks, tools and languages to improve my craft. 
                </p>
                <p>
                Beyond the screen, I find inspiration through adventure, documentaries, and personal growth. 

                I aim to contribute to impactful projects and make a difference through technology. Let’s connect and build something great!
                </p>  
            </div>
            <div>
                <img src={tracy} alt="Tracy's Headshot" className="About-image"/>
            </div>
        </div>
    )
}
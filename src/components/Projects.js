import React from "react";
import soon from "../images/soon.jpg";
import "../components/Projects.css";

export default function Projects() {
    return (
        <div className="Projects" id="projects">
            <h3>Some Things I've Built</h3>
            <div className="Projects-sect">
                <img src={soon} alt="Weather App" className="Projects-image"/>
                <div className="Project-description Project-description-right">
                    {/* <h4>Weather App</h4>
                    <p>This project in the SheCodes Workshop tested my skills React, APIs, and AJAX. It also involved hosting the project and using Git and GitHub for version control, showcasing my ability to build dynamic web applications.</p>
                    <ul className="Project-skills-right">
                        <li>AJAX</li>
                        <li>Boostrap</li>
                        <li>GitHub</li>
                        <li>React</li>
                    </ul>
                    <div className="Links">
                        <div className="Project-link-right">
                            GitHub Repo
                        </div>
                        <div className="Project-link-right">
                            View Project
                        </div>
                    </div> */}
                    <p>Weekly Rhythm</p>
                   <h2>Coming Soon</h2>
                </div>
            </div>

            <div className="Projects-sect">
                <div className="Project-description">
                    {/* <h4>Weather App</h4>
                    <p>This project in the SheCodes Workshop tested my skills React, APIs, and AJAX. It also involved hosting the project and using Git and GitHub for version control, showcasing my ability to build dynamic web applications.</p>
                    <ul>
                        <li>AJAX</li>
                        <li>Boostrap</li>
                        <li>GitHub</li>
                        <li>React</li>
                    </ul>
                    <div className="Links">
                        <div className="Project-link">
                            GitHub Repo
                        </div>
                        <div className="Project-link">
                            View Project
                        </div>
                    </div> */}
                   <p>Sonnie Nails & Makeup Artistry</p>
                   <h2>Coming Soon</h2>

                </div>
                <img src={soon} alt="Weather App" className="Projects-image"/>
            </div>

            <div className="Projects-sect">
                <img src={soon} alt="Weather App" className="Projects-image"/>
                <div className="Project-description Project-description-right">
                    {/* <h4>Weather App</h4>
                    <p>This project in the SheCodes Workshop tested my skills React, APIs, and AJAX. It also involved hosting the project and using Git and GitHub for version control, showcasing my ability to build dynamic web applications.</p>
                    <ul className="Project-skills-right">
                        <li>AJAX</li>
                        <li>Boostrap</li>
                        <li>GitHub</li>
                        <li>React</li>
                    </ul>
                    <div className="Links">
                        <div className="Project-link-right">
                            GitHub Repo
                        </div>
                        <div className="Project-link-right">
                            View Project
                        </div>
                    </div> */}
                   <p>PoultryPal</p>
                   <h2>Coming Soon</h2>

                </div>
            </div>
            
        </div>
    );
}


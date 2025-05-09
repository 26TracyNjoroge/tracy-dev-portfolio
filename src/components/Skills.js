import React from "react";
import "../components/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";

export default function Skills() {
    return (
        <div className="Skills" id="skills">
            <div className="Skills-heading">
                <h3>Skills & Tools</h3>
                <p>The skills, tools and technologies I use to bring your products to life:</p>
            </div>
            <div className="Skills-sect">
                <div className="fa-icon">
                    <FaHtml5 className="skill-icon"/>
                    <p>HTML</p>
                </div>
                <div className="fa-icon">
                    <FaCss3Alt className="skill-icon"/>
                    <p>CSS</p>
                </div>
                <div className="fa-icon">
                    <FaJs className="skill-icon"/>
                    <p>JavaScript</p>
                </div>
                <div className="fa-icon">
                    <FaBootstrap className="skill-icon"/>
                    <p>Bootstrap</p>
                </div>
                <div className="fa-icon">
                    <FaReact className="skill-icon"/>
                    <p>React</p>
                </div>
                <div className="fa-icon">
                    <FaGitAlt className="skill-icon"/>
                    <p>Git</p>
                </div>
                <div className="fa-icon">
                    <FaGithub className="skill-icon"/>
                    <p>Github</p>
                </div>
                {/* <div className="fa-icon">
                    <FaLinux className="skill-icon"/>
                    <p>Linux</p>
                </div> */}
                <div className="fa-icon">
                    <FaFigma className="skill-icon"/>
                    <p>Figma</p>
                </div>
                <div className="fa-icon">
                    <VscVscode className="skill-icon"/>
                    <p>VS Code</p>
                </div>
                <div className="fa-icon">
                    <IoLogoVercel className="skill-icon"/>
                    <p>Vercel</p>
                </div>
                
            </div>
           
        </div>
    )
}
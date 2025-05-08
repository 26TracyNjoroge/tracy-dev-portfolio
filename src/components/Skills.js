import React from "react";
import "../components/Skills.css";

export default function Skills() {
    return (
        <div className="Skills" id="skills">
            <div className="Skills-heading">
                <h3>Skills & Tools</h3>
                <p>The skills, tools and technologies I use to bring your products to life:</p>
            </div>
            <div className="Skills-sect">
                <div className="box-icon">
                    <i className='bx bxl-html5 '></i>
                    <p>HTML</p>
                </div>
                <div className="box-icon">
                    <i className='bx bxl-css3' ></i>
                    <p>CSS</p>
                </div>
                <div className="box-icon">
                    <i className='bx bxl-javascript' ></i>
                    <p>JavaScript</p>
                </div>
                <div className="box-icon">
                <i className='bx bxl-bootstrap'></i>
                    <p>Bootstrap</p>
                </div>
                <div className="box-icon">
                    <i className='bx bxl-react'></i>
                    <p>React</p>
                </div>
                <div className="box-icon">
                    <i className='bx bxl-git'></i>
                    <p>Git</p>
                </div>
                <div className="box-icon">
                    <i className='bx bxl-github'></i>
                    <p>Github</p>
                </div>
                <div className="box-icon">
                    <i className='bx bx-terminal'></i>
                    <p>Command line</p>
                </div>
            </div>
           
        </div>
    )
}
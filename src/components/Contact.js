import React from "react";
import "../components/Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope  } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="Contact" id="contact">
            <h2>Get In Touch</h2>
            <p>Thanks for stopping by! Whether you're interested in collaborating, have an exciting opportunity, or just want to say hello, I'd love to hear from you. Let’s connect and turn great ideas into reality together!</p>
            <div>
                <a href="mailto:tracywangari997@gmail.com" target="_blank" rel="noreferrer"  className="Contact-email-link" title="Email Tracy" >Let's talk here</a>
            </div>

            <h3>Connect with me</h3>
            <div className="Contact-links">
                    <div className="icon-wrapper">
                        <a
                            href="https://www.linkedin.com/in/tracynjoroge/"
                            target="_blank"
                            rel="noreferrer" 
                            title="Tracy's LinkedIn Profile"
                            className="social-icons"
                            ><FaLinkedin /></a>
                    </div>

                    <div className="icon-wrapper">
                    <a
                        href="https://github.com/26TracyNjoroge"
                        target="_blank"
                        rel="noreferrer" 
                        title="Tracy's GitHub Profile"
                        className="social-icons"
                    >
                        <FaGithub /> 
                    </a>
                    </div>

                    <div className="icon-wrapper">
                    <a
                        href="mailto:tracywangari997@gmail.com"
                        target="_blank"
                        rel="noreferrer" 
                        title="Tracy's Email"
                        className="social-icons"
                    >
                         <FaEnvelope />
                    </a>
                    </div>
            </div>

        </div> 
    )
}
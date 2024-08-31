import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>123 Sesame st.</p>
                            <p>Canada</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 1-123-456-7890</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> rawnaq.kabairzad@gmail.com</h4>
                    </div>
                </div>

                <div className="right">
                    <h4>This is My Wonderful Portfolio!</h4>
                    <p>I enjoy creating new projects and designing challenges.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <a href="https://github.com/rawnaqk" rel="GitHub"><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                        <a href="https://www.linkedin.com/in/rawnaq-k" rel="Linkedin"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
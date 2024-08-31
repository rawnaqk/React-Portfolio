import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import Avatar from "../assets/AvatarPic.jpg";
import Ravens from "../assets/Baltimore-Ravens-Wallpaper-NFL-2024.jpg";

import React from 'react';

const AboutContent = () => {
    return <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>My name is Rawnaq Kabairzad. I'm a new coder with a passion for learning the fundamentals of programming. Currently, I'm enrolled in a coding bootcamp. I have learned about HTML, CSS, JavaScript, Bootstrap, APIs, JQuery, JSON, Node, OOP, Express, SQL, MVC, Sequelize, PWA, and React. I am actively engaging in tutorials, reading literature about coding, and watching online lectures to build a stronger foundation. My goal is to deepen my understanding and develop my skills further so I can confidently tackle more complex projects in the future.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Avatar}
                        className="img" alt="Avatar" />
                </div>
                <div className="img-stack bottom">
                    <img src={Ravens}
                        className="img" alt="Baltimore Ravens" />
                </div>
            </div>
        </div>
    </div>
};

export default AboutContent;
import "./ProjectCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="project1" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">Display</NavLink>
                    <NavLink to={props.source} className="btn">GitHub Repository</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
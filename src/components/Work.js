import "./ProjectCardStyles.css";
import ProjectCard from "./ProjectCard";
import WorkCardData from "./WorkCardData";

import React from "react";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Have A Look Around</h1>
            <div className="project-container">
                {WorkCardData.map((val, ind) => {
                    return (
                        <ProjectCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}
                            source={val.source}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default Work;
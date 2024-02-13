import React from "react";
import "./skills.css";
import hcon from "../assets/logohtml.png";
import ccon from "../assets/logocss.png";
import jcon from "../assets/logojava.png";
import pcon from "../assets/logopython.png";
import rcon from "../assets/logoreact.png";



const Skill = () => {
    return (
        <div className="skills">
            <h2 className="head-line">
                    My Skills
            </h2>
            <div className="skill-set">
                <p className="desc">Frontend & Backend Developer proficient in JavaScript,
                    HTML, CSS, React, Node.js, TypeScript, Python, Flask, and SQL Alchemy. 
                    Proficient in database management with MySQL and skilled in utilizing tools 
                    such as VS Code, Unix, Git, Docker, and more to develop and deploy robust web applications.
                </p>
                <div className="lang-icon">
                    <div className="lang-1">
                        <img src={rcon} alt="html-logo"/>
                    </div>
                    <div className="lang-1">
                        <img src={hcon} alt="html-logo"/>
                    </div>
                    <div className="lang-1">
                        <img src={ccon} alt="html-logo"/>
                    </div>
                    <div className="vert-lang">
                        <div className="lang-2">
                            <img src={jcon} alt="html-logo"/>
                        </div>
                        <div className="lang-2">
                            <img src={pcon} alt="html-logo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skill
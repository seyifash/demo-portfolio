import "./project.css";
import React from "react";
import 'boxicons/css/boxicons.min.css'; 
import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-contain">
            <h2>Recent Projects</h2>
            <div className="projects-descrip">
                <h4>Shoppers</h4>
                <p>An e-commerce platform, seamlessly integrates JavaScript, HTML, and CSS for the frontend, offering a user-friendly experience for both merchants and buyers. 
                    Powered by Python, Flask, and SQLAlchemy, it empowers merchants to 
                    effortlessly upload their goods while providing buyers with a centralized hub to explore and purchase products. This platform fosters a dynamic online marketplace,
                    enhancing accessibility and convenience for all users
                </p>
                <div class="code">
                    <Link to="">View Project</Link>
                    <Link to="https://github.com/seyifash/Shoppers">Source Code</Link>
                </div>
            </div>
            <div className="projects-descrip">
                <h4>Airbnb Clone</h4>
                <p>A project mirrors the design and basic functionality of the original Airbnb website,
                     offering users a simplified version of the platform.
                     The Airbnb Clone project provides a concise imitation of the Airbnb platform, 
                     focusing on core features while offering a glimpse into the overall user experience.
                </p>
                <div class="code">
                    <Link to="#">View Project</Link>
                    <Link to="https://github.com/seyifash/AirBnB_clone_v3.git">Source Code</Link>
                </div>
            </div>
            <div className="projects-descrip">
                <h4>Shoppers</h4>
                <p>An E-commerce website design that provides an interactive interface creating a seamless user
                    experience using only HTML Javascript and CSS.
                </p>
                <div class="code">
                    <Link to="https://seyifash.github.io/demo_shoppers/">View Project</Link>
                    <Link to="https://github.com/seyifash/demo_shoppers">Source Code</Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Projects
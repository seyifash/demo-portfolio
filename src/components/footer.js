import React from "react";
import "./footer.css";
import 'boxicons/css/boxicons.min.css'; 
import  { FaMailBulk }  from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-sec">
                <div className="left">
                    <div className="location">
                        <i class='bx bxs-home' style={{color: "#FFF", 
                        marginRight: "2rem", fontSize: "20px" }}></i>
                        <div>
                            <p>21 Udeh street.</p>
                            <p>Fagba, Lagos</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <h4><i class='bx bxs-phone bx-flip-horizontal' style={{color: "#FFF", 
                        marginRight: "2rem", fontSize: "20px" }}></i>
                        07043604599
                        </h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk style={{color: "#FFF", 
                        marginRight: "2rem", fontSize: "20px" }} />
                        fasugbeoluwaseyi@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>Enthusiastic front-end developer proficient in HTML, CSS, JavaScript,
                        and React framework, with a passion for creating engaging user
                        interfaces and seamless user experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
import "./heroImg.css";
import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css'; 


const HeroImg = () => {
    return <div className="hero">
        <div className="profile">
        </div>
        <div className="content">
            <p>Hi, my name is </p>
            <h1>Oluwaseyi Fasugbe</h1>
            <h2>the_web_builder</h2>
            <h4>I build things for the web</h4>
            <div className="socials">
                <div className="linked">
                    <Link to="http://linkedin.com/in/oluwaseyi-fasugbe-61a0a4271" ><i class='bx bxl-linkedin'></i></Link>
                </div>
                <div className="insta">
                    <Link to="https://www.instagram.com/oluwatobi.fash?igsh=MXFqbGdiZnNmYnBhcg%3D%3D&utm_source=qr"><i class='bx bxl-instagram'></i></Link>
                </div>
                <div className="git">
                    <Link to="https://github.com/seyifash">
                        <i class='bx bxl-github'></i>
                    </Link>
                </div>
            </div>
            <div className="btn-contain btn-2">
                <Link to="/About" className="btn">Hire Me</Link>
            </div>
        </div>
    </div>
}
export default HeroImg;
import "./Aboutme.css";
import cvPdf from "./Fasugbeoluwaseyi.pdf";


const Aboutme = () => {
    return <div className="hero1">
    <div className="profile-Img">
    </div>
    <div className="content1">
        <span className="bit-more">
            A bit more about me
        </span>
        <span className="more">Enthusiastic front-end developer proficient in HTML, CSS, JavaScript, and React framework, 
            with a passion for creating engaging user interfaces and seamless user experiences. 
            Skilled in translating design mockups into interactive web applications using React components, 
            with a keen eye for detail and a commitment to clean, efficient code.
        </span>
        <div className="btn-contain">
            <a href={cvPdf} download className="btn">Download cv</a> 
        </div>
    </div>
    </div>
}
export default Aboutme;
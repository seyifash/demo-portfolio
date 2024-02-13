import "./contactus.css";
import React from "react";
import 'boxicons/css/boxicons.min.css';
import { useState } from 'react';
import axios from 'axios'; 

const Contactus = () => {

    const [formData, setFormData] = useState({ 
        firstName: '', 
        lastName: '',
        email: '', 
        message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/contactme', formData);
            console.log('sent successfully:', response.data);
            alert('Your message has been sent successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting your message. Please try again later.');
        }
    };

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <div className="contain-contact">
            <div className="contact-address">
                <div className="Ema-git">
                    <div className="ema-git-div">
                    <i class='bx bx-envelope'></i>
                    </div>
                    <span e-sp>fasugbeoluwaseyi@gmail.com</span>
                </div>
                <div className="Ema-git">
                    <div className="ema-git-div">
                    <i class='bx bxl-github'></i> 
                    </div>
                    <span g-sp>https://github.com/seyifash"</span>
                </div>
            </div>
            <div className="form-sect">
                <form onSubmit={handleSubmit} className="form">
                    <div className="name">
                        <input type="text" name="firstName" id="firstName"  value={formData.firstName} onChange={handleChange} placeholder="First Name"/>
                        <input type="text" name="lastName" id="lastName"   value={formData.lastName} onChange={handleChange}placeholder="Last Name"/>
                    </div>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email"/>
                    <textarea rows="6" name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Type your message here"/>
                    <button type="submit" className="btn-2">Send</button>
                </form>
            </div>
        </div>
        </div>
    )
}
export default Contactus;
import React, { useEffect } from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
    useEffect(() => {
        // Ensure the footer logo stays the same for both light and dark modes
        document.querySelector(".tomatologofooter").style.filter = "none";
    }, []);

    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img
                        className="tomatologofooter"
                        src={assets.logo}
                        alt=""
                    />
                    <p>
                        This website is just for my portfolio, it's not a real
                        website.
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <a
                            href="https://www.linkedin.com/in/your-linkedin-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@hangry.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 © Hangry.com - All rights reserved.
            </p>
        </div>
    );
};

export default Footer;

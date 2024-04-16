import { Link } from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";
import styles from './Header.module.css';
import profile from "../images/logo.png";
import { useEffect, useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { FaSuitcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            console.log(`Scrolled: ${isScrolled}`); // This will log true or false based on your scroll position
            setScrolled(isScrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(
        <center>
        <nav className={`navbar navbar-expand-lg ${styles.setPadding} ${scrolled ? styles.scrolled : ''}`}>
                <a href="/" className={`navbar-brand mx-3 ${styles.profilePicture}`}>
                    <img src={profile} alt="Profile" className="img-fluid rounded-circle d-md-block" style={{borderRadius:"50%", height:"38px", width:"40px"}} />
                </a>
                <button className={`navbar-toggler ${styles.navbarToggler} mx-2`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav nav-pills justify-content-center w-100 ${styles.headerBackground} ${styles.new_ul}`}>
                        <a href="#aboutme" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><TiUser /> About</li></a>
                        <a href="#skills" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaCode /> Skills</li></a>
                        <a href="#projects" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaCodeBranch /> Projects</li></a>
                        <a href="#experience" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaSuitcase /> Experience</li></a>
                        <a href="#education" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaGraduationCap /> Education</li></a>
                        <a href="#contact" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><IoMdContact /> Contact Me</li></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/khtrivedi/" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaLinkedin /> LinkedIn</li></a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/khtrivedi84" className={`nav-link ${styles.customNavLink}`} ><li className="nav-item"><FaGithub /> GitHub</li></a>
                        <li className="nav-item"><Link to="" className={`nav-link ${styles.resumeBtn}`}>Resume <IoCloudDownloadOutline /></Link></li>
                    </ul>
                </div>
        </nav>
        </center>
    )
}

export default Header;

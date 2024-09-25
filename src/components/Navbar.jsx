import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = active ? 'hidden' : 'auto';
        // Cleanup the overflow style when the component is unmounted or state changes
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [active]);

    const mobileMenu = () => {
        setActive(!active);
    };

    const closeMenu = () => {
        setActive(false);
    }
    
    return(
        <header>
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to="/"><div className="logo">Drii Francisco</div></Link>
                </div>
                <ul className={`nav-menu ${active ? 'active' : ''}`}>
                        <li className="nav-item" onClick={closeMenu}>Shoots</li>
                        <hr></hr>
                        <li className="nav-item" onClick={closeMenu}>Videos</li>
                        <hr></hr>
                        <li className="nav-item" onClick={closeMenu}>Aboutme</li>
                        <button type="button" className="button mobile">connect</button>
                </ul>
                <div className="nav-social">
                    <a href="https://www.instagram.com/driifrancisco/">
                        <FontAwesomeIcon icon={faInstagram} className="social-button"/>
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faEnvelope} className="social-button"/>
                    </a>
                </div>
                <div className={`hamburger ${active ? 'active' : ''}`} onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
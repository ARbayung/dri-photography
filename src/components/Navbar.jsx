import React, {useState, useEffect} from "react";
import {Outlet, Link} from "react-router-dom";

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
                    <Link to="/"><div className="logo">Dri</div></Link>
                    <ul className={`nav-menu ${active ? 'active' : ''}`}>
                        <li className="nav-item" onClick={closeMenu}>Shoots</li>
                        <hr></hr>
                        <li className="nav-item" onClick={closeMenu}>Videos</li>
                        <hr></hr>
                        <li className="nav-item" onClick={closeMenu}>Aboutme</li>
                        <button type="button" className="button mobile">connect</button>
                    </ul>
                </div>
                <div className="button desk">contact me</div>
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
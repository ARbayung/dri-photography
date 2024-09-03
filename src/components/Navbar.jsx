import React, {useState, useEffect} from "react";

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
                    <a href="#" className="logo">DRI</a>
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
            <div class={`hamburger ${active ? 'active' : ''}`} onClick={mobileMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        </header>
    )
}

export default Navbar;
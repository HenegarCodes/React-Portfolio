import React, { useState } from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBriefcase, faUser, faAddressCard, faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log("Toggle Menu clicked");
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="Navbar">
            <div className={`hamburger ${isMenuOpen ? "menu-open" : ""}`} onClick={toggleMenu}>
                ☰
            </div>
            {isMenuOpen && (
                <div className="menu-overlay">
                    <ul className="menu menu-open">
                        <li><a href="#"><FontAwesomeIcon icon={faHouse} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faBriefcase} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAddressCard} /></a></li>
                    </ul>
                    <div className="close-button" onClick={closeMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

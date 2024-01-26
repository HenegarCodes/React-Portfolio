import React, { useState } from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBriefcase, faUser, faAddressCard, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


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
                    <li><a href="#Home" onClick={closeMenu}><FontAwesomeIcon icon={faHouse} /></a></li>
                    <li><a href="#Projects" onClick={closeMenu}><FontAwesomeIcon icon={faBriefcase} /></a></li>
                        <li><a href="#About" onClick={closeMenu}><FontAwesomeIcon icon={faUser} /></a></li>
                        <li><a href="#Contact" onClick={closeMenu}><FontAwesomeIcon icon={faAddressCard} /></a></li>
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

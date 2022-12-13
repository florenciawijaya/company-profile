import React, { useState } from "react";

import companyLogo from "../../assets/company_navbar.png";
import "./styles.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return(
        <div className="navbar">
            <div className="navbar__inner">
                <a href="/">
                    <img src={companyLogo} alt="Company" />
                </a>

                <ul className={isOpen ? `navbar__menu--active` : `navbar__menu`}>
                    <li className="navbar__item">
                        <a href="#who-we-are" className="navbar__link">Who We Are</a>
                    </li>

                    <li className="navbar__item">
                        <a href="#our-values" className="navbar__link">Our Values</a>
                    </li>

                    <li className="navbar__item">
                        <a href="#the-perks" className="navbar__link">The Perks</a>
                    </li>
                </ul>

                <div className="navbar__hamburger" onClick={handleHamburgerClick}>
                    <span className="navbar__hamburgerMenu"></span>
                    <span className="navbar__hamburgerMenu"></span>
                    <span className="navbar__hamburgerMenu"></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
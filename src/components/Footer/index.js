import React, { useState } from "react";

import companyFooter from "../../assets/company_footer.png";
import { FOOTER_SELECT, SELECT_VALUES } from "../../constants";
import "./styles.css";

const Footer = () => {
    const [selected, setSelected] = useState("technology");

    const onSelectChange = (e) => {
        e.preventDefault();
        setSelected(e.target.value);
    }

    return(
        <div className="footer">
            <img src={companyFooter} alt="Company" />

            <section className="footer__selectContainer">
                <select value={selected} onChange={onSelectChange} className="footer__select">
                    {FOOTER_SELECT.map((opt, idx) => (
                        <option value={opt.value} key={idx}>{opt.label}</option>
                    ))}
                </select>

                <p className="footer__address">{SELECT_VALUES[selected]}</p>
            </section>
            
            <section>
                <a href="#who-we-are" className="footer__link">Who We Are</a>
                <a href="#our-values" className="footer__link">Our Values</a>
                <a href="#the-perks" className="footer__link">The Perks</a>
            </section>
        </div>
    )
}

export default Footer;
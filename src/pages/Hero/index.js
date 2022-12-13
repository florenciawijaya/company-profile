import React from "react";

import heroImage from "../../assets/hero_image.png";
import "./styles.css";

const Hero = () => {
    return(
        <div className="hero">
            <img src={heroImage} alt="Hero" className="hero__image" />

            <section className="hero__textSection">
                <div className="hero__trapezoid">
                    <h1 className="hero__text hero__text--heading">Discover Your Wonder</h1>
                    <p className="hero__text hero__text--paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Hero;
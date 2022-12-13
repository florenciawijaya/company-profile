import React from "react";

import scroll from "../../assets/scroll.png";

import CoreValues from "../CoreValues";
import Footer from "../../components/Footer";
import Hero from "../Hero";
import Navbar from "../../components/Navbar";
import Profile from "../Profile";
import Speciality from "../Speciality";

import "./styles.css";

const Main = () => {
    return(
        <>
            <Navbar />
            <div className="main__scrollContainer">
                <Hero />
                <a href="#who-we-are" className="main__scroll">
                    <img src={scroll} alt="Scroll" />
                </a>
                <Profile />
            </div>
            <CoreValues />
            <Speciality />
            <Footer />
        </>
    )
}

export default Main;
import React, { useState } from "react";

import prevArrow from "../../assets/prev.png";
import nextArrow from "../../assets/next.png";
import ProfileCard from "../../components/ProfileCard";
import { PROFILE_ARRAY } from "../../constants";
import "./styles.css";

const Profile = () => {
    const [current, setCurrent] = useState(0);

    const handlePrevClick = (e) => {
        e.preventDefault();

        if(current > 0) {
            setCurrent(current-1);
        }
    }

    const handleNextClick = (e) => {
        e.preventDefault();

        if(current < 2) {
            setCurrent(current+1);
        }
    }

    return(
        <div className="profile" id="who-we-are">
            <ProfileCard profile={PROFILE_ARRAY[current]} />

            <section className="profile__pageNumber">
                <div>
                    <span className="profile__number profile__number--current">0{current+1}</span>
                    <span className="profile__number profile__number--all"> / 03</span>
                </div>

                <div>
                    <span onClick={handlePrevClick}>
                        <img src={prevArrow} alt="Prev" />
                    </span>

                    <span onClick={handleNextClick}>
                        <img src={nextArrow} alt="Next" />
                    </span>
                </div>
            </section>
        </div>
    )
}

export default Profile;
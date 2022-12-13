import React, { useState } from "react";

import leftArrow from "../../assets/left_arrow.png";
import rightArrow from "../../assets/right_arrow.png";
import SpecialityCarousel from "../../components/SpecialityCarousel";
import "./styles.css";

const Speciality = () => {
    const [current, setCurrent] = useState(1);

    const handlePrevClick = (e) => {
        e.preventDefault();
        if(current > 0) {
            setCurrent(current-1);
        } else {
            setCurrent(2);
        }
    }

    const handleNextClick = (e) => {
        e.preventDefault();
        if(current < 2) {
            setCurrent(current+1);
        } else {
            setCurrent(0);
        }
    }

    return(
        <div className="speciality" id="the-perks">
            <div className="speciality__inner">
                <section>
                    <h1 className="speciality__heading">OUR SPECIALITY</h1>
                    <p className="speciality__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                    </p>
                </section>

                <section>
                    <SpecialityCarousel current={current} />
                </section>

                <section>
                    <p className="speciality__desc speciality__desc--grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                    </p>
                </section>

                <section className="speciality__pagination">
                    <div onClick={handlePrevClick}>
                        <img src={leftArrow} alt="Previous" />
                    </div>

                    <div>
                        <span className={current === 1 ? `speciality__page--active` : `speciality__page`}></span>
                        <span className={current === 2 ? `speciality__page--active` : `speciality__page`}></span>
                        <span className={current === 0 ? `speciality__page--active` : `speciality__page`}></span>
                    </div>

                    <div onClick={handleNextClick}>
                        <img src={rightArrow} alt="Next" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Speciality;
import React from "react";
import { SPECIALITY_ARRAY } from "../../constants";

import "./styles.css";

const SpecialityCarousel = (props) => {
    const { current } = props;
    const icons = SPECIALITY_ARRAY;

    return(
        <div className="specialityCarousel__flex">
            <div className="specialityCarousel__item specialityCarousel__item--left">
                <img src={require(`../../assets/${icons[current !== 0 ? current-1 : 2].icon}`)} alt={`${icons[0].text}`} className="specialityCarousel__image specialityCarousel__image--notCurrent" />
            </div>

            <div className="specialityCarousel__item">
                <img src={require(`../../assets/${icons[current].icon}`)} alt={`${icons[1].text}`} className="specialityCarousel__image" />
                <p className="specialityCarousel__text">{icons[current].text}</p>
            </div>

            <div className="specialityCarousel__item specialityCarousel__item--right">
                <img src={require(`../../assets/${icons[current !== 2 ? current+1 : 0].icon}`)} alt={`${icons[2].text}`} className="specialityCarousel__image specialityCarousel__image--notCurrent" />
            </div>
        </div>
    )
}

export default SpecialityCarousel;
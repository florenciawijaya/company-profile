import React from "react";

import coreValuesIllus from "../../assets/core_values.png";
import CoreValuesCard from "../../components/CoreValuesCard";
import { VALUES_ARRAY } from "../../constants";
import "./styles.css";

const CoreValues = () => {
    return(
        <div className="coreValues" id="our-values">
            <section>
                <h1 className="coreValues__heading">Our Core Values</h1>
                <p className="coreValues__text">
                    Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
                </p>
                <p className="coreValues__text">
                    In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
                </p>
            </section>

            <section className="coreValues__items">
                {VALUES_ARRAY.map((value, idx) => (
                    <div className="coreValues__item" key={idx}>
                        <hr className="coreValues__line"/>
                        <CoreValuesCard value={value} />
                    </div>
                ))}
            </section>

            <section className="coreValues__image">
                <img src={coreValuesIllus} alt="Core Values" />
            </section>
        </div>
    )
}

export default CoreValues;
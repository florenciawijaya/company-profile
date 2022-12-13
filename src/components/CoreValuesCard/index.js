import React from "react";

import "./styles.css";

const CoreValuesCard = (props) => {
    const { value } = props;
    const { title, desc } = value;

    return(
        <div>
            <h3 className="coreValuesCard__title">{title}</h3>
            <p className="coreValuesCard__desc">{desc}</p>
        </div>
    )
}

export default CoreValuesCard;
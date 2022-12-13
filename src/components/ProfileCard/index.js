import React from "react";

import "./styles.css";

const ProfileCard = (props) => {
    const { profile } = props;
    const { title, subtitle, text } = profile;

    return(
        <div>
            <section className="profileCard__description">
                <h1 className="profileCard__text profileCard__text--title">{title}</h1>
                <h4 className="profileCard__text profileCard__text--subtitle">{subtitle}</h4>
                <p className="profileCard__text">{text}</p>
            </section>
        </div>
    )
}

export default ProfileCard;
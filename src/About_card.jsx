import React from "react";

function About_card(props) {
    return (
        <>
            <div className="about-card">
                <h3 className="head">{props.head}</h3>
                <p class="para">{props.para}
                </p>
                </div>
        </> 
    );
}
export default About_card;
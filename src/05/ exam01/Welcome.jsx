import React from "react";

function Welcome(props) {
    return (
        <h1 className="welcome-item">
            안녕하세요~ <span className="highlight">{props.name}</span>
        </h1>
    );
}

export default Welcome;
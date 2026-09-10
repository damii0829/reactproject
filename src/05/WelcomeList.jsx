import React from "react";
import Welcome from "./Welcome";
import "./Welcome.css";

function WelcomeList() {
    return (
        <div className="container">
            <div className="welcome-card">
                <Welcome name="김인공" />
                <Welcome name="박폴리" />
                <Welcome name="이정수" />
            </div>
        </div>
    );
}

export default WelcomeList;
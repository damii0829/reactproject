import React, { useState } from "react";
import Toolbar from "./Toolbar";
import image from "./images.jpg";
import "./LandingPage.css";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    };

    const logoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="landing-page">
            <Toolbar
                isLoggedIn={isLoggedIn}
                loginClick={loginClick}
                logoutClick={logoutClick}
            />

            <div className="landing-content">
                <p>9장 조건부 렌더링 실습 화면입니다.</p>
                <img
                    className="landing-image"
                    src={image}
                    alt="실습 이미지"
                />
            </div>
        </div>
    );
}

export default LandingPage;
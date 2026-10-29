import React, { useState } from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const btnListener = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    };

    return (
        <div className="main-page">
            <div className="main-page-card">
                <WarningBanner warning={showWarning} />

                <button
                    className="main-page-button"
                    onClick={btnListener}
                >
                    {showWarning ? "감추기" : "보이기"}
                </button>
            </div>
        </div>
    );
}

export default MainPage;
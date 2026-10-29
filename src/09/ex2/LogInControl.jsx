import React, { useState } from "react";
import LogOutButton from "./LogOutButton";
import LogInButton from "./LogInButton";
import Greeting from "../ex1/Greeting";
import "./LogInControl.css";

function LogInControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    let button;

    if (isLoggedIn) {
        button = <LogOutButton onClick={logOutClickListener} />;
    } else {
        button = <LogInButton onClick={logInClickListener} />;
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        </div>
    );
}

export default LogInControl;
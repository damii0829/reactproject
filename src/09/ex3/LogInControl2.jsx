import React, { useState } from "react";
import LogOutButton from "../ex2/LogOutButton";
import LogInButton from "../ex2/LogInButton";
import Greeting from "../ex1/Greeting";

function LogInControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    };

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <Greeting isLoggedIn={isLoggedIn} />
                {isLoggedIn
                    ? <LogOutButton onClick={logOutClickListener} />
                    : <LogInButton onClick={logInClickListener} />
                }
            </div>
        </div>
    );
}

export default LogInControl;
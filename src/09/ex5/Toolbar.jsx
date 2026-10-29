import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    const { isLoggedIn, loginClick, logoutClick } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && (
                <span style={styles.greeting}>환영합니다!</span>
            )}

            {isLoggedIn ? (
                <button onClick={logoutClick}>로그아웃</button>
            ) : (
                <button onClick={loginClick}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;
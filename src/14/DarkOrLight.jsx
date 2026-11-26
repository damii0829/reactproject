import React, { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;
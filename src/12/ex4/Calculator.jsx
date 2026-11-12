import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import "./Calculator.css";
import TemperatureInput from "../ex4/TemperatureInput";

function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (value) => {
        setTemperature(value);
        setScale("c");
    };

    const handleFahrenheitChange = (value) => {
        setTemperature(value);
        setScale("f");
    };

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div className="temperature-calculator">
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />

            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />

            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

export default Calculator;
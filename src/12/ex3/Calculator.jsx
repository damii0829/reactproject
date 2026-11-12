import React from "react";
import TemperatureInput from "./Temperatureinput";
import "./Calculator.css";

function Calculator() {
    return (
        <div className="temperature-calculator">
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>
    );
}

export default Calculator;
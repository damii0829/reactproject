import React, { useState } from "react";
import DistanceInput from "./DistanceInput";
import "./DistanceConverter.css";

const KM_PER_MILE = 1.609344;

function DistanceConverter() {
    const [distance, setDistance] = useState("");
    const [unit, setUnit] = useState("km");

    const handleKilometerChange = (value) => {
        setDistance(value);
        setUnit("km");
    };

    const handleMileChange = (value) => {
        setDistance(value);
        setUnit("mile");
    };

    const kilometers = unit === "mile"
        ? tryConvert(distance, toKilometers)
        : distance;

    const miles = unit === "km"
        ? tryConvert(distance, toMiles)
        : distance;

    return (
        <main className="distance-page">
            <section className="distance-card" aria-labelledby="distance-title">
                <header className="distance-header">
                    <h1 id="distance-title">거리 단위 변환기</h1>
                    <p>한쪽에 거리를 입력하면 다른 단위로 바로 변환돼요.</p>
                </header>

                <div className="distance-fields">
                    <DistanceInput
                        unit="km"
                        distance={kilometers}
                        onDistanceChange={handleKilometerChange}
                    />

                    <span className="distance-swap" aria-hidden="true">
                        ⇄
                    </span>

                    <DistanceInput
                        unit="mile"
                        distance={miles}
                        onDistanceChange={handleMileChange}
                    />
                </div>

                <footer className="distance-footer">
                    변환 기준 <strong>1 mile = 1.609344 km</strong>
                </footer>
            </section>
        </main>
    );
} // DistanceConverter 함수 닫기

function toKilometers(miles) {
    return miles * KM_PER_MILE;
}

function toMiles(kilometers) {
    return kilometers / KM_PER_MILE;
}

function tryConvert(distance, convert) {
    const input = Number(distance);

    if (distance.trim() === "" || !Number.isFinite(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

export default DistanceConverter;
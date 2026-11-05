import React, { useState } from "react";
import "./FruitSelect.css";

function FruitSelect() {
    const [value, setValue] = useState("사과");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("선택한 과일: " + value);
    };

    return (
        <form className="fruit-form" onSubmit={handleSubmit}>
            <div className="fruit-decoration" aria-hidden="true">
                🍎 🍌 🍇 🍈
            </div>

            <h2>오늘의 과일은? 🌈</h2>
            <p>마음에 드는 과일을 골라보세요 💕</p>

            <label htmlFor="fruit">나의 과일 바구니 🧺</label>

            <select id="fruit" value={value} onChange={handleChange}>
                <option value="사과">🍎 아삭아삭 사과</option>
                <option value="바나나">🍌 달콤달콤 바나나</option>
                <option value="포도">🍇 탱글탱글 포도</option>
                <option value="참외">🍈 시원달콤 참외</option>
            </select>

            <button type="submit">바구니에 담기 🧺✨</button>

            <span className="fruit-footer">작은 과일로 채우는 달콤한 하루 🌷</span>
        </form>
    );
}

export default FruitSelect;
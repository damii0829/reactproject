import React from "react";

function BoilingVerdict({ celsius }) {
    if (!Number.isFinite(celsius)) {
        return (
            <p className="is-empty" role="status">
                온도를 입력하면 끓는지 알려 드려요.
            </p>
        );
    }

    const isBoiling = celsius >= 100;

    return (
        <p className={isBoiling ? "is-hot" : "is-cool"} role="status">
            {isBoiling ? "🔥 물이 끓습니다." : "💧 물이 끓지 않습니다."}
        </p>
    );
}

export default BoilingVerdict;
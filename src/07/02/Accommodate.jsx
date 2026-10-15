import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";
import "./Accommodate.css";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull] = useState(false);

    useEffect(() => {
        console.log("====== useEffect 확인용 ======");
        console.log("useEffect 실행됨: 컴포넌트가 마운트될 때, 업데이트될 때");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div className="accommodate-container">
            <div className="system-header">
                <span>■ FACILITY CONTROL SYSTEM</span>
                <span className="system-status">● ONLINE</span>
            </div>

            <h1>수용시설 출입 관리</h1>
            <p className="subtitle">
                SECURITY ACCESS MONITORING
            </p>

            <div className="count-box">
                <p className="count-label">CURRENT OCCUPANCY</p>

                <div className="count-number">
                    {count} <span>/ {MAX_CAPACITY} 명</span>
                </div>

                <div className="capacity-bar">
                    <div
                        className={`capacity-fill ${isFull ? "full" : ""}`}
                        style={{
                            width: `${Math.min(100, Math.max(0, count / MAX_CAPACITY * 100))}%`
                        }}
                    ></div>
                </div>

                <div className="capacity-info">
                    <span>현재 수용률</span>
                    <span>{count / MAX_CAPACITY * 100}%</span>
                </div>
            </div>

            <div className="button-group">
                <button
                    className="enter-btn"
                    onClick={increaseCount}
                    disabled={count >= MAX_CAPACITY}
                >
                    입장 승인
                </button>

                <button
                    className="exit-btn"
                    onClick={decreaseCount}
                    disabled={count <= 0}
                >
                    퇴장 처리
                </button>
            </div>

            {isFull && (
                <p className="full-message">
                    ⚠ 경고: 수용시설에 정원이 가득 찼습니다.
                </p>
            )}

            <div className="system-footer">
                <span>SECURITY LEVEL 02</span>
                <span>ACCESS CONTROL ACTIVE</span>
            </div>
        </div>
    );
}

export default Accommodate;

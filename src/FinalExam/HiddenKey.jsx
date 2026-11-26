import React, { useState, useEffect } from "react";
import Theme from "./Theme";
import Reservation from "./Reservation";
import "./HiddenKey.css";

function HiddenKey() {
    const [theme, setTheme] = useState("사라진 연구원");
    const [title, setTitle] = useState("");

    const handleThemeChange = (value) => {
        setTheme(value);
    };

    const handleReservation = (value) => {
        setTheme(value);
    };

    // 메인 화면 타이핑 효과
    useEffect(() => {
        const text = "당신은 이 방에서\n탈출할 수 있을까?";
        let index = 0;
        let result = "";
        const timer = setInterval(() => {
            result = result + text[index];
            setTitle(result);
            index++;
            if (index >= text.length) {
                clearInterval(timer);
            }
        }, 80);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hidden-key">
            <header>
                <nav className="nav">
                    <a href="#home" className="logo">Hidden Key</a>
                    <div className="menu">
                        <a href="#home">홈</a>
                        <a href="#about">소개</a>
                        <a href="#theme">테마</a>
                        <a href="#stats">탈출 성공률</a>
                        <a href="#reservation">예약하기</a>
                        <a href="#guide">이용 안내</a>
                        <a href="#location">오시는 길</a>
                    </div>
                </nav>
            </header>
            <main>
                <section id="home" className="hero">
                    <div className="hero-content">
                        <small>HIDDEN KEY</small>
                        <h1 style={{ whiteSpace: "pre-line" }}>
                            {title}<span className="typing-cursor">|</span>
                        </h1>
                        <p>
                            Hidden Key는 몰입형 스토리와 다양한 난이도의
                            테마가 함께하는 방탈출 카페입니다.
                            <br />
                            테마별 탈출<span className="highlight"> 성공률</span>을
                            확인하고 자신에게 맞는 테마를 선택하세요.
                        </p>
                        <div className="hero-buttons">
                            <a href="#theme" className="btn btn-primary">테마 보기</a>
                            <a href="#reservation" className="btn btn-outline">예약하기</a>
                        </div>
                    </div>
                </section>
                <section id="about">
                    <div className="section-title">
                        <span>ABOUT</span>
                        <h2>Hidden Key 소개</h2>
                    </div>
                    <div className="about-box">
                        <div className="info-card">
                            <h3>몰입형 스토리</h3>
                            <p>각 테마마다 독립적인 세계관과 사건 흐름을 구성하여 실제 이야기 속에 들어온 듯한 경험을 제공합니다.</p>
                        </div>
                        <div className="info-card">
                            <h3>다양한 난이도</h3>
                            <p>방세포부터 고인물까지 즐길 수 있도록 다양한 난이도의 테마를 제공합니다.</p>
                        </div>
                        <div className="info-card">
                            <h3>탈출 가능성 정보</h3>
                            <p>테마별 성공률과 난이도를 확인하고 자신에게 맞는 테마를 선택할 수 있습니다.</p>
                        </div>
                    </div>
                </section>
                <Theme onReservation={handleReservation} />
                <Reservation theme={theme} onThemeChange={handleThemeChange} />
                <section id="guide">
                    <div className="section-title">
                        <span>GUIDE</span>
                        <h2>이용 안내</h2>
                    </div>
                    <div className="guide-grid">
                        <table>
                            <thead><tr><th>인원</th><th>1인 가격</th></tr></thead>
                            <tbody>
                            <tr><td>2인</td><td>25,000원</td></tr>
                            <tr><td>3인</td><td>24,000원</td></tr>
                            <tr><td>4인 이상</td><td>23,000원</td></tr>
                            </tbody>
                        </table>
                        <ul className="notice-list">
                            <li>예약 시간 15분 전까지 도착해 주세요.</li>
                            <li>예약 시 입력한 정보를 확인해 주세요.</li>
                            <li>테마 입장 후에는 환불이 불가합니다.</li>
                            <li>테마 내부 소품 파손 시 별도 비용이 발생할 수 있습니다.</li>
                            <li>공포 테마는 심약자 또는 임산부에게 권장하지 않습니다.</li>
                        </ul>
                    </div>
                </section>
                <section id="location">
                    <div className="section-title">
                        <span>LOCATION</span>
                        <h2>오시는 길</h2>
                    </div>
                    <div className="location-box">
                        <div>
                            <h3>Hidden Key 강남점</h3>
                            <p style={{ marginTop: "16px" }}>서울특별시 강남구 미스터리로 404, 지하 1층</p>
                            <p style={{ marginTop: "8px" }}>영업시간: 매일 11:00 - 23:00</p>
                            <p style={{ marginTop: "8px" }}>문의: 02-2007-0829</p>s
                            <p style={{ marginTop: "20px" }}>폴리역에서 도보 5분 거리에 위치해 있습니다.</p>
                        </div>
                        <div className="map-dummy"></div>
                    </div>
                </section>
            </main>
            <footer>
                <p>© 2026 Hidden Key Escape Room Cafe.</p>
                <p>React Web Programming Project.</p>
            </footer>
        </div>
    );
}

export default HiddenKey;

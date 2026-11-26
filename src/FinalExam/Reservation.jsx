import React, { useState, useEffect } from "react";

// 테마별 예약 시간
const timeTable = {
    "사라진 연구원": ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
    "새벽의 병원": ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
    "마법사의 서재": ["12:00", "14:00", "16:00", "18:00", "20:00"],
    "🅿 블랙아웃": ["12:30", "15:00", "17:30", "20:00"]
};

// 테마별 예약 마감 시간 확인
function isSoldOut(theme, time) {
    if (theme === "사라진 연구원") {
        return time === "19:00";
    } else if (theme === "새벽의 병원") {
        return time === "17:30" || time === "21:30";
    } else if (theme === "마법사의 서재" || theme === "🅿 블랙아웃") {
        return time === "20:00";
    }
    return false;
}

// 현재 가격 정책에 따른 금액 표시
function formatPrice(price) {
    if (price === 50000) return "50,000";
    else if (price === 72000) return "72,000";
    else if (price === 92000) return "92,000";
    else if (price === 115000) return "115,000";
    return price;
}

// 테마별 입장권 정보
const ticketInfo = {
    "사라진 연구원": {
        title: "기밀 구역 출입증",
        code: "CASE 01",
        duration: 70,
        warning: "허가받지 않은 구역에 접근하지 마시오.",
        color: "#365b59"
    },
    "새벽의 병원": {
        title: "심야 병동 출입증",
        code: "WARD 02",
        duration: 75,
        warning: "병동 내부에서 혼자 남지 마시오.",
        color: "#782e2e"
    },
    "마법사의 서재": {
        title: "봉인된 서고 출입증",
        code: "ARCHIVE 03",
        duration: 85,
        warning: "허가 없이 봉인된 문서를 열지 마시오.",
        color: "#796039"
    },
    "🅿 블랙아웃": {
        title: "비상 구역 통행증",
        code: "BLACKOUT 04",
        duration: 100,
        warning: "모든 조명이 꺼져도 침착함을 유지하시오.",
        color: "#4d405b"
    }
};

// 예약 날짜 예시
const dates = [
    { id: 1, date: "12/1", day: "화" },
    { id: 2, date: "12/2", day: "수" },
    { id: 3, date: "12/3", day: "목" },
    { id: 4, date: "12/4", day: "금" },
    { id: 5, date: "12/5", day: "토" },
    { id: 6, date: "12/6", day: "일" },
    { id: 7, date: "12/7", day: "월" }
];

// 공통 입장권 구조
function Ticket(props) {
    return (
        <div className="ticket-paper">
            {props.children}
        </div>
    );
}

// 예약 완료 전용 입장권

function ReservationTicket(props) {
    const info = ticketInfo[props.theme];

    return (
        <div className="ticket-area">

            <div className="section-title">
                <span>RESERVATION</span>
                <h2>예약이 완료되었습니다.</h2>
                <p>입장권을 확인해 주세요.</p>
            </div>

            <Ticket>

                <div className="ticket-layout">

                    {/* 입장권 왼쪽 */}
                    <div className="ticket-main">

                        <div className="ticket-brand">
                            HIDDEN KEY
                        </div>

                        <p className="ticket-subtitle">
                            관계자 외 출입 금지
                        </p>

                        <div className="ticket-title">
                            <h2 style={{ color: info.color }}>
                                {info.title}
                            </h2>

                            <p>{props.theme}</p>
                        </div>

                        <div className="ticket-line"></div>

                        <div className="ticket-details">
                            <p>
                                <span>예약자</span>
                                {props.name} 외 {props.people - 1}명
                            </p>

                            <p>
                                <span>입장일</span>
                                2026/{props.date}
                            </p>
                        </div>

                        <div className="ticket-stamp">
                            출입 허가
                        </div>

                        <div className="ticket-warning">
                            {info.warning}
                        </div>

                    </div>

                    {/* 입장권 오른쪽 */}
                    <div className="ticket-stub">

                        <div className="ticket-code">
                            {info.code}
                        </div>

                        <p className="ticket-time-label">
                            입장 시간
                        </p>

                        <div className="ticket-time">
                            {props.time}
                        </div>

                        <p className="ticket-duration">
                            {info.duration}분 / {props.people}인
                        </p>

                        <div className="ticket-price">
                            {formatPrice(props.price)}원
                        </div>

                        <div className="ticket-entry-notice">
                            입장 15분 전 도착
                        </div>

                    </div>

                </div>

            </Ticket>

            <p className="ticket-caption">
                Hidden Key 강남점 · 예약 확인용
            </p>

            <button
                type="button"
                className="btn btn-outline ticket-close"
                onClick={props.onClose}
            >
                확인
            </button>

        </div>
    );
}


// 예약 페이지
function Reservation(props) {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [people, setPeople] = useState(2);
    const [memo, setMemo] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const [reservation, setReservation] = useState(null);

    const theme = props.theme;
    const times = timeTable[theme];

    let minPeople = 2;
    let maxPeople = 4;
    if (theme === "새벽의 병원") {
        minPeople = 3;
    } else if (theme === "🅿 블랙아웃") {
        minPeople = 3;
        maxPeople = 5;
    }
    useEffect(() => {
        setSelectedTime("");
        setReservation(null);
        setError("");
        if (theme === "새벽의 병원" || theme === "🅿 블랙아웃") {
            setPeople(3);
        } else {
            setPeople(2);
        }
    }, [theme]);

    // 인원별 이용 금액
    let price;

    if (people === 2) {
        price = people * 25000;
    } else if (people === 3) {
        price = people * 24000;
    } else {
        price = people * 23000;
    }

    // 테마 변경
    const handleThemeChange = (event) => {
        props.onThemeChange(event.target.value);
        setSelectedTime("");
        setError("");
    };

    // 예약자 이름
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    // 연락처
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    // 인원 수
    const handlePeopleChange = (event) => {
        setPeople(Number(event.target.value));
    };

    // 요청사항
    const handleMemoChange = (event) => {
        setMemo(event.target.value);
    };

    // 예약하기
    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedDate === "" || selectedTime === "") {
            setError("예약 날짜와 시간을 선택해 주세요.");
            return;
        }

        if (name === "" || phone === "") {
            setError("예약자 이름과 연락처를 입력해 주세요.");
            return;
        }

        if (isSoldOut(theme, selectedTime)) {
            setError("예약 가능한 시간을 선택해 주세요.");
            return;
        }

        // 하이픈 없이 010으로 시작하는 숫자 11자리 확인
        if (phone.length !== 11 || phone[0] !== "0" ||
            phone[1] !== "1" || phone[2] !== "0") {
            setError("연락처를 올바르게 입력해 주세요.");
            return;
        }
        for (let i = 0; i < phone.length; i++) {
            if (phone[i] < "0" || phone[i] > "9") {
                setError("연락처는 숫자만 입력해 주세요.");
                return;
            }
        }

        if (people < minPeople || people > maxPeople) {
            setError("테마별 예약 가능 인원을 확인해 주세요.");
            return;
        }

        if (!agree) {
            setError("예약 주의사항을 확인해 주세요.");
            return;
        }

        setError("");

        setReservation({
            theme: theme,
            date: selectedDate,
            time: selectedTime,
            name: name,
            phone: phone,
            memo: memo,
            people: people,
            price: price
        });
    };

    // 초기화
    const handleReset = () => {
        props.onThemeChange("사라진 연구원");
        setSelectedDate("");
        setSelectedTime("");
        setName("");
        setPhone("");
        setPeople(2);
        setMemo("");
        setAgree(false);
        setError("");
        setReservation(null);
    };

    // 예약 완료 시 입장권 출력
    if (reservation !== null) {
        return (
            <section id="reservation" className="reservation-page">
                <ReservationTicket
                    theme={reservation.theme}
                    date={reservation.date}
                    time={reservation.time}
                    name={reservation.name}
                    people={reservation.people}
                    price={reservation.price}
                    onClose={handleReset}
                />
            </section>
        );
    }

    return (
        <section id="reservation" className="reservation-page">
            <div className="section-title">
                <span>RESERVATION</span>
                <h2>예약하기</h2>
                <p>테마와 날짜, 시간을 선택해 주세요.</p>
            </div>

            <form
                className="reservation"
                onSubmit={handleSubmit}
            >
                <div className="reservation-layout">
                    <div className="left-area">
                        <h3>날짜 선택</h3>

                        <div className="date-grid">
                            {dates.map((item) => (
                                <button
                                    type="button"
                                    key={item.id}
                                    className={
                                        selectedDate === item.date
                                            ? "date-box selected"
                                            : "date-box"
                                    }
                                    onClick={() => {
                                        setSelectedDate(item.date);
                                        setError("");
                                    }}
                                >
                                    {item.date}
                                    <br />
                                    {item.day}
                                </button>
                            ))}
                        </div>

                        <h3 style={{ marginTop: "30px" }}>
                            시간 선택
                        </h3>

                        <div className="time-buttons">
                            {times.map((time) => (
                                <button
                                    type="button"
                                    key={time}
                                    disabled={isSoldOut(theme, time)}
                                    className={
                                        selectedTime === time
                                            ? "selected"
                                            : ""
                                    }
                                    onClick={() => {
                                        setSelectedTime(time);
                                        setError("");
                                    }}
                                >
                                    {time}
                                    {isSoldOut(theme, time)
                                        ? " 마감"
                                        : ""}
                                </button>
                            ))}
                        </div>

                        <div className="theme-detail-box">
                            <strong>{theme}</strong>

                            <p>
                                이용 시간:
                                {ticketInfo[theme].duration}분
                            </p>
                            <p>예약 가능 인원: {minPeople}~{maxPeople}명</p>
                        </div>

                        <div className="price-box">
                            <p>예상 이용 금액</p>
                            <strong>
                                {formatPrice(price)}원
                            </strong>
                        </div>
                    </div>

                    <div className="right-area">
                        <div className="form-box">
                            <label htmlFor="themeSelect">
                                테마 선택
                            </label>

                            <select
                                id="themeSelect"
                                value={theme}
                                onChange={handleThemeChange}
                            >
                                <option>사라진 연구원</option>
                                <option>새벽의 병원</option>
                                <option>마법사의 서재</option>
                                <option>🅿 블랙아웃</option>
                            </select>

                            <label htmlFor="name">
                                예약자 이름
                            </label>

                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="이름을 입력하세요"
                            />

                            <label htmlFor="phone">
                                연락처
                            </label>

                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={handlePhoneChange}
                                placeholder="01012345678"
                            />

                            <label htmlFor="people">
                                인원 수
                            </label>

                            <select
                                id="people"
                                value={people}
                                onChange={handlePeopleChange}
                            >
                                {minPeople === 2 && <option value="2">2명</option>}
                                <option value="3">3명</option>
                                <option value="4">4명</option>
                                {maxPeople === 5 && <option value="5">5명</option>}
                            </select>

                            <label htmlFor="memo">
                                요청사항
                            </label>

                            <textarea
                                id="memo"
                                value={memo}
                                maxLength={100}
                                onChange={handleMemoChange}
                                placeholder="요청사항을 입력하세요"
                            />

                            <div className="char-count">
                                {memo.length} / 100
                            </div>

                            <div className="agreement">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={agree}
                                        onChange={(event) => {
                                            setAgree(event.target.checked);
                                        }}
                                    />
                                    예약 주의사항을 확인했습니다.
                                </label>
                            </div>

                            {error !== "" && (
                                <div className="reservation-error">
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary reserve-btn"
                            >
                                예약하기
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline reset-btn"
                                onClick={handleReset}
                            >
                                초기화
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Reservation;

import React from "react";

const themes = [
    {
        id: 1,
        name: "사라진 연구원",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=900&q=80",
        status: "방린이 도전",
        statusColor: "normal",
        description: "폐쇄된 연구소. 흔적도 없이 사라진 연구원. 남겨진 실험 기록 속에서 진실을 추적한다.",
        genre: "추리",
        difficulty: "★★★",
        duration: 70,
        rate: 68,
        people: "2~4명"
    },
    {
        id: 2,
        name: "새벽의 병원",
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
        status: "공포 주의",
        statusColor: "hard",
        description: "새벽 3시, 불 꺼진 병동. 끊임없이 울리는 호출벨과 정체불명의 발자국 소리.",
        genre: "공포",
        difficulty: "★★★★",
        duration: 75,
        rate: 44,
        people: "3~4명"
    },
    {
        id: 3,
        name: "마법사의 서재",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
        status: "방세포 추천",
        statusColor: "easy",
        description: "봉인된 서재와 금지된 주문서. 숨겨진 장치를 해독하며 마법사의 비밀에 접근한다.",
        genre: "판타지",
        difficulty: "★★",
        duration: 85,
        rate: 73,
        people: "2~4명"
    },
    {
        id: 4,
        name: "🅿 블랙아웃",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",
        status: "프리미엄",
        statusColor: "premium",
        description: "도시 전체가 정전된 밤. 제한된 시야 속에서 탈출 루트를 찾아야 한다.",
        genre: "?",
        difficulty: "★★★★★",
        duration: 100,
        rate: 29,
        people: "3~5명"
    }
];

// 공통 카드 컴포넌트
function Card(props) {
    return (
        <article className={props.className}>
            {props.children}
        </article>
    );
}

function ThemeCard(props) {
    return (
        <Card className="theme-card">
            <div className="theme-img" style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className="theme-content">
                <span className={"status " + props.statusColor}>{props.status}</span>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className="tag-wrap">
                    <span className="tag">{props.genre}</span>
                    <span className="tag">난이도 {props.difficulty}</span>
                    <span className="tag">{props.duration}분</span>
                    <span className="tag">{props.people}</span>
                </div>
                <a href="#reservation" className="btn btn-primary theme-reserve-btn"
                   onClick={() => props.onReservation(props.name)}>예약하기</a>
            </div>
        </Card>
    );
}

function Theme(props) {
    return (
        <div className="theme-page">
            <section id="theme">
                <div className="section-title">
                    <span>THEMES</span>
                    <h2>당신의 이야기를 선택하세요.</h2>
                    <p>서로 다른 네 가지 공간, 그 안에 숨겨진 비밀을 찾아보세요.</p>
                </div>
                <div className="theme-grid">
                    {themes.map((theme) => (
                        <ThemeCard key={theme.id} name={theme.name} image={theme.image}
                                   status={theme.status} statusColor={theme.statusColor}
                                   description={theme.description} genre={theme.genre}
                                   difficulty={theme.difficulty} duration={theme.duration}
                                   people={theme.people} onReservation={props.onReservation} />
                    ))}
                </div>
            </section>
            <section id="stats">
                <div className="section-title">
                    <span>STATS</span>
                    <h2>테마별 탈출 성공률</h2>
                    <p>당신은 과연 탈출에 성공할 수 있을까요?</p>
                </div>
                <div className="stats-box">
                    <Card className="stats-card">
                        <h3>오늘 예약 팀</h3><strong>18팀</strong><p>예약 현황 예시</p>
                    </Card>
                    <Card className="stats-card">
                        <h3>오늘 탈출 성공</h3><strong>7팀</strong><p>진행 완료 팀 기준 예시</p>
                    </Card>
                    <Card className="stats-card">
                        <h3>평균 성공률</h3><strong>54%</strong><p>전체 테마 평균</p>
                    </Card>
                </div>
                <div className="theme-stats show">
                    {themes.map((theme) => (
                        <div className="stat-item" key={theme.id}>
                            <span>{theme.name}</span>
                            <div className="bar"><div className="fill" style={{ width: theme.rate + "%" }}></div></div>
                            <b>{theme.rate}%</b>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Theme;

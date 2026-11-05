import React from "react";
import "./AttendanceCardBook.css";

const students = [
    {
        id: 1,
        name: "오시온",
        grade: 4,
        major: "인공지능소프트웨어",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85NtHOcfZMBUnELGWuAzO1XrByU7jti6poYRP2aVSzGFIOOc2-p6LBr33&s=10"
    },
    {
        id: 2,
        name: "마에다 리쿠",
        grade: 4,
        major: "컴퓨터공학",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvwAp0XQkK4TVb_WUXM9SbQGQFepGw5kpNxmvnEA5Ttg&s=10"
    },
    {
        id: 3,
        name: "토쿠노 유우시",
        grade: 3,
        major: "정보보안",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMWi1xM0N3lFP0NttxWJnS320dYLRjIwBpEmEj49Krw&s=10"
    },
    {
        id: 4,
        name: "김대영",
        grade: 2,
        major: "전자공학",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx1Waht81fWAZfff4DT0dlg9IaK_982X-_-FOO-G6AeQ&s=10"
    },
    {
        id: 5,
        name: "히로세 료",
        grade: 1,
        major: "시각디자인",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7z3nGrLE8-m-BcXU-Z4AKm9j1EbWLDngxd-U7P6WKQ&s=10"
    },
    {
        id: 6,
        name: "후지나가 사쿠야",
        grade: 1,
        major: "게임개발",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Ok2lBACUztS-kKmC9yLgLSzQ8oC_kNdBfkg63BcUKA&s=10"
    }
];

function AttendanceCardBook() {
    return (
        <div className="attendance-book">
            <div className="attendance-header">
                <div>
                    <span className="attendance-label">
                        STUDENT LIST
                    </span>

                    <h2>학생 출석부</h2>
                </div>

                <div className="student-count">
                    <span>전체 학생</span>
                    <strong>
                        {students.length}
                        <small>명</small>
                    </strong>
                </div>
            </div>

            <div className="student-grid">
                {students.map((student) => (
                    <div className="student-card" key={student.id}>
                        <img
                            className="student-avatar"
                            src={student.avatar}
                            alt={student.name}
                        />

                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>
                                {student.grade}학년 | {student.major}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AttendanceCardBook;
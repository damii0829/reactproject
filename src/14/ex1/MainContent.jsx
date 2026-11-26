import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import "./MainContent.css";

const initialTasks = [
    { id: 1, title: "React Context 예제 복습", done: true },
    { id: 2, title: "데이터베이스 SQL 문제 풀기", done: false },
    { id: 3, title: "Python 과제 정리하기", done: false },
];

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [tasks, setTasks] = useState(initialTasks);
    const [taskName, setTaskName] = useState("");

    const isDark = theme === "dark";
    const completedCount = tasks.filter((task) => task.done).length;
    const progress = Math.round((completedCount / tasks.length) * 100);

    function handleAddTask(event) {
        event.preventDefault();

        const title = taskName.trim();

        if (!title) {
            return;
        }

        setTasks((currentTasks) => [
            ...currentTasks,
            { id: currentTasks.length + 1, title, done: false },
        ]);
        setTaskName("");
    }

    function handleToggleTask(id) {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.id === id ? { ...task, done: !task.done } : task
            )
        );
    }

    return (
        <div className={isDark ? "study-page study-page--dark" : "study-page"}>
            <header className="study-header">
                <div className="study-container study-header-inner">
                    <div className="study-brand">
                        <span className="study-brand-icon" aria-hidden="true">🌱</span>
                        <span>나의 공부 노트</span>
                    </div>

                    <button
                        type="button"
                        className="study-theme-button"
                        onClick={toggleTheme}
                    >
                        <span aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
                        {isDark ? "밝은 모드" : "어두운 모드"}
                    </button>
                </div>
            </header>

            <main className="study-container study-main">
                <section className="study-hero" aria-labelledby="study-title">
                    <div>
                        <h1 id="study-title">오늘의 공부 계획</h1>
                        <p>공부할 내용을 적고, 끝낸 항목에 체크해 보세요.</p>
                    </div>

                    <div className="study-illustration" aria-hidden="true">
                        <span className="study-sparkle">✨</span>
                        <span className="study-books">📚</span>
                        <span className="study-pencil">✏️</span>
                    </div>
                </section>

                <div className="study-grid">
                    <section className="study-card" aria-labelledby="study-task-title">
                        <h2 id="study-task-title">
                            <span aria-hidden="true">📝</span> 할 일
                        </h2>

                        <ul className="study-list">
                            {tasks.map((task) => (
                                <li key={task.id}>
                                    <label className="study-task">
                                        <input
                                            type="checkbox"
                                            checked={task.done}
                                            onChange={() => handleToggleTask(task.id)}
                                        />
                                        <span>{task.title}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>

                        <form onSubmit={handleAddTask}>
                            <label className="study-form-label" htmlFor="new-task">
                                새 할 일
                            </label>

                            <div className="study-form-row">
                                <input
                                    id="new-task"
                                    type="text"
                                    placeholder="예: Java 실습 복습"
                                    value={taskName}
                                    onChange={(event) => setTaskName(event.target.value)}
                                    maxLength={80}
                                    required
                                />
                                <button type="submit" disabled={!taskName.trim()}>
                                    + 추가
                                </button>
                            </div>
                        </form>
                    </section>

                    <section className="study-card study-progress">
                        <h2>
                            <label htmlFor="study-progress-bar">
                                <span aria-hidden="true">🎯</span> 학습 진행률
                            </label>
                        </h2>

                        <div className="study-percentage" aria-hidden="true">
                            {progress}<span>%</span>
                        </div>

                        <progress
                            id="study-progress-bar"
                            value={progress}
                            max={100}
                        />

                        <p aria-live="polite">
                            {tasks.length}개 중 {completedCount}개 완료
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default MainContent;
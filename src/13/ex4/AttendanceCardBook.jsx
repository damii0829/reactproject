import React from "react";

function AttendanceCardBook(props) {
    return (
        <article className="stay-card">
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p className="stay-dates">{props.dates}</p>
            <p className="stay-price">
                총액 ₩{props.price} · ★ {props.rating}
            </p>
        </article>
    );
}

export default AttendanceCardBook;
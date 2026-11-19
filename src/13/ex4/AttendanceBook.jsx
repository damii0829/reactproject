import React from "react";
import AttendanceCardBook from "./AttendanceCardBook";
import "./AttendanceBook.css";

function AttendanceBook(props) {
    return (
        <section className="stay-list">
            <h2>추천 숙소</h2>

            <div className="stay-grid">
                {props.stays.map((stay) => (
                    <AttendanceCardBook
                        key={stay.id}
                        image={stay.image}
                        title={stay.title}
                        dates={stay.dates}
                        price={stay.price}
                        rating={stay.rating}
                    />
                ))}
            </div>
        </section>
    );
}

export default AttendanceBook;
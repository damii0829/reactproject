import React from "react";
import Card from "./Card";
import "./Card.css";

function ProfileCard() {
    return (
        <Card title="inje Lee" backgroundColor="#f5efff">
            <p>안녕하세요. 김담희입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;
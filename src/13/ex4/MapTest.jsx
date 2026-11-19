import React from "react";
import AttendanceBook from "./AttendanceBook";

const stays = [
    {
        id: 1,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1777294881429878560/original/cd982e3f-5c26-4a79-9765-38051697eb3b.jpeg?im_w=960",
        title: "제주의 저택",
        dates: "1월 15일~17일",
        price: "588,000",
        rating: "5.0",
    },
    {
        id: 2,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1722932678730213470/original/80bc36e9-3bba-45b5-ad95-9e3246384ef5.jpeg?im_w=960",
        title: "제주의 펜션",
        dates: "2월 26일~28일",
        price: "320,000",
        rating: "4.9",
    },
    {
        id: 3,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1481780448913990546/original/543ca5a3-449e-4971-91a0-84da4a3d2b2a.jpeg?im_w=960",
        title: "서귀포시의 펜션",
        dates: "2월 19일~21일",
        price: "404,000",
        rating: "4.8",
    },
    {
        id: 4,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1596448665472023365/original/2486001b-cd5f-428d-abbb-8153572225c8.jpeg?im_w=480",
        title: "수영구의 집",
        dates: "12월 11일~13일",
        price: "1,110,000",
        rating: "5.0",
    },
    {
        id: 5,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1025988629532043101/original/76a6e4fc-5883-4243-8c41-4698135c9ea3.jpeg?im_w=480",
        title: "강릉시의 집",
        dates: "1월 19일~21일",
        price: "511,200",
        rating: "4.8",
    },
    {
        id: 6,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1751159334509755154/original/4c4a5102-897e-4ee0-a017-d3908be77182.jpeg?im_w=960",
        title: "황남동의 집",
        dates: "2월 5일~7일",
        price: "468,000",
        rating: "5.0",
    },
    {
        id: 7,
        image: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTM3Mzg1ODM5ODY0MzczNzExMg==/original/5d8cb059-cd21-4ca7-9900-4b1ad73a00a1.jpeg?im_w=960",
        title: "추오구의 집",
        dates: "1월 8일~10일",
        price: "1,362,778",
        rating: "4.81",
    },
];

function MapTest() {
    return <AttendanceBook stays={stays} />;
}

export default MapTest;
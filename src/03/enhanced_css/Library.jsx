import React from "react";
import Book from "./Book";
import "./Book.css";

function Library() {
    return(
        <div className="shop-page">

            <header className="header">
                <div className="menu">☰</div>

                <div className="logo">
                    BOOK
                </div>

                <div className="header-menu">
                    CART&nbsp;&nbsp;&nbsp; LOGIN
                </div>
            </header>


            <section className="hero">
                <div className="hero-text">
                    BOOK<br/>
                    STORE
                </div>

                <div className="hero-books">
                    <img
                        src="https://image.yes24.com/goods/119758924/XL"
                        alt="파이썬"
                    />

                    <img
                        src="https://image.yes24.com/goods/172506733/XL"
                        alt="리액트"
                    />
                </div>
            </section>


            <section className="main-product">
                <h1>PROGRAMMING BOOK</h1>

                <h2>DEVELOPER COLLECTION</h2>

                <p className="price">
                    20,000 WON
                </p>

                <p className="description">
                    A COLORFUL COLLECTION OF BOOKS<br/>
                    FOR BEGINNER DEVELOPERS
                </p>

                <button>BUY NOW</button>
            </section>


            <section className="intro">
                <p>
                    BOOK STORE IS AN ONLINE STORE FOR<br/>
                    DEVELOPERS AND STUDENTS.
                </p>
            </section>


            <div className="Library-container">

                <Book
                    name="처음 만난 파이썬"
                    numOfPage={300}
                    imgUrl="https://image.yes24.com/goods/119758924/XL"
                />

                <Book
                    name="난생 처음 AWS"
                    numOfPage={200}
                    imgUrl="https://image.yes24.com/goods/136882448/XL"
                />

                <Book
                    name="처음 보는 리액트"
                    numOfPage={500}
                    imgUrl="https://image.yes24.com/goods/172506733/XL"
                />

                <Book
                    name="처음 만난 자바스크립트"
                    numOfPage={500}
                    imgUrl="https://image.yes24.com/momo/TopCate1076/MidCate010/107597186.jpg"
                />

                <Book
                    name="처음 만난 HTML/CSS"
                    numOfPage={500}
                    imgUrl="https://image.yes24.com/goods/105982127/XL"
                />

            </div>

        </div>
    );
}

export default Library;
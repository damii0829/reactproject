import React, { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";
import "./MainContent.css";

const event = [
    {
        id: "padding",
        brand: "디미트리블랙",
        name: "모두의 Comfortemp 미드웨이트 패딩",
        price: 69900,
        image: "https://image.msscdn.net/thumbnails/images/goods_img/20260819/7108774/7108774_17950559711884_big.jpg?w=1200",
        colors: ["그레이", "블랙", "카키"],
    },
    {
        id: "ugg-women-cocoa",
        brand: "어그",
        name: "[WOMEN] 타즈먼 II - 더스티드 코코아",
        price: 198000,
        image: "https://image.msscdn.net/thumbnails/images/goods_img/20260902/7231284/7231284_17894534970810_big.jpg?w=1200",
        colors: ["더스티드 코코아"],
    },
    {
        id: "ugg-classic-mini",
        brand: "어그",
        name: "[WOMEN] 클래식 미니 II - 체스넛",
        price: 278000,
        image: "https://image.msscdn.net/thumbnails/images/goods_img/20250910/5437430/5437430_17604241088698_big.jpg?w=1200",
        colors: ["체스넛"],
    },
    {
        id: "ugg-men-cocoa",
        brand: "어그",
        name: "[MEN] 타즈먼 II - 더스티드 코코아",
        price: 95000,
        image: "https://image.msscdn.net/thumbnails/images/goods_img/20250818/5331557/5331557_17574083006233_big.jpg?w=1200",
        colors: ["더스티드 코코아"],
    },
    {
        id: "adidas-tokyo",
        brand: "아디다스",
        name: "도쿄",
        price: 68110,
        image: "https://image.msscdn.net/thumbnails/images/goods_img/20240905/4409450/4409450_17700190316137_big.jpg?w=1200",
        colors: ["블랙"],
    },
    {
        id: "ugg-men-chestnut",
        brand: "프리즘웍스",
        name: "사파리/헌팅 재킷",
        price: 135000,
        image: "https://image.msscdn.net/thumbnails/images/goods_img/20220823/2737014/2737014_1_big.jpg?w=1200",
        colors: ["올리브", "버건디", "블랙"],
    },
];

function ProductCard(props) {
    const product = props.product;
    const [imageError, setImageError] = useState(false);

    return (
        <article className="product-card">
            <div className="product-photo">
                {imageError ? (
                    <span>사진을 불러올 수 없어요.</span>
                ) : (
                    <img
                        src={product.image}
                        alt={product.name}
                        onError={() => setImageError(true)}
                    />
                )}
            </div>

            <div className="product-info">
                <p className="product-brand">{product.brand}</p>
                <h2>{product.name}</h2>
                <p className="product-price">
                    {product.price.toLocaleString("ko-KR")}원
                </p>

                <select
                    className="product-color"
                    aria-label={`${product.name} 색상`}
                    defaultValue=""
                >
                    <option value="">색상 선택</option>
                    {product.colors.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
            </div>
        </article>
    );
}

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <div className={isDark ? "product-page product-dark" : "product-page"}>
            <header className="product-header">
                <div className="product-container product-header-inner">
                    <h1 className="product-logo">MOA</h1>

                    <button
                        type="button"
                        className="product-theme-button"
                        onClick={toggleTheme}
                    >
                        {isDark ? "☀️ 라이트 모드" : "🌙 다크 모드"}
                    </button>
                </div>
            </header>

            <main className="product-container product-grid">
                {event.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </main>
        </div>
    );
}

export default MainContent;
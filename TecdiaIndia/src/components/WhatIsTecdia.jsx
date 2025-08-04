import React from "react";
import Stack from "./Stack";
import TypingEffect from "./TypingEffect";
import { useNavigate } from "react-router-dom";

const images = [
  { id: 1, img: "./wit6.png" },
  { id: 2, img: "./wit2.png" },
  { id: 3, img: "./wit3.jpg" },
  { id: 4, img: "./wit4.png" },
  { id: 5, img: "./wit5.jpg" },
  { id: 6, img: "./wit1.png" },
];

export default function WhatIsTecdia({ language, cardSize, t }) {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate("/form");
  };

  const handleProductClick = () => {
    navigate("/product");
  };

  return (
    <section
      className={`tecdia-section transition-colors duration-500 ${
        language === "jp"
          ? "bg-[#FFCB61]"
          : language === "cn"
          ? "bg-[#c591ff]"
          : "bg-[#239BA7]"
      }`}
    >
      <div className="whatpic-container">
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={true}
          cardDimensions={{ width: cardSize, height: cardSize }}
          cardsData={images}
        />
      </div>
      <div className="tecdia-container">
        <h1 className="tecdia-title">
          {t.wht}
          <span className="tecdia-brand">{t.logoText}</span>
          {t.wht1}?
        </h1>

        <p className="tecdia-description" style={{padding: '10px'}}>
          <TypingEffect language={language} />
        </p>

        <div className="tecdia-buttons">
          <button className="btn cursor-pointer hover:scale-115" onClick={handleProductClick}>
            {t.profile}
          </button>
          <button className="btn cursor-pointer hover:scale-115" onClick={handleApplyClick}>
            {t.apply}
          </button>
        </div>
      </div>
    </section>
  );
}

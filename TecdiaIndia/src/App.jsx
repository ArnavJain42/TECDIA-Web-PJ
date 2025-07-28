
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import LanguageToggle from "./components/LanguageToggle";
import Crystal3D from "./components/Crystal3D";
import Ballpit from "./backgrounds/Ballpit.jsx";
import { Laptop, Calendar, Clock, Umbrella } from "lucide-react";
import LoaderKatakana from "./components/LoaderKatakana";
import PresidentVision from "./components/PresidentVision";
import Squares from "./backgrounds/Squares.jsx";
import MarqueeComponent from "./components/MarqueeComponent.jsx";
import Stack from "./components/Stack.jsx";
import TypingEffect from "./components/TypingEffect.jsx";
import TecdiaNumber from "./components/TecdiaNumber.jsx";
import Footer from "./components/Footer.jsx";
import OrganizationCulture from "./components/OrganizationCulture.jsx";

const images = [
  { id: 1, img: "./画像 (1).png" },
  { id: 2, img: "./画像 (3).png" },
  { id: 3, img: "./画像 (4).png" },
  { id: 4, img: "./画像 (5).png" },
  { id: 5, img: "./画像.jpeg" },
];

const translations = {
  en: {
    logoText: "TECDIA",
    menuButton: "MENU",
    close: "CLOSE",
    menuLeft: ["NEWS", "STAFF & CAST", "MOVIE", "MUSIC"],
    menuRight: ["INTRODUCTION", "CHARACTER"],
    heroTitle: "TO BE HERO X",
    apply: "Apply Now",
    landingpara: "Your Let's do this will change the world. Surprise the world with unconventional ideas and team power.",
    join: "Come Join Us",
    wht: "WHAT IS ",
    wht1: "",
    profile: "Company Profile",
  },
  jp: {
    logoText: "テクディア",
    menuButton: "メニュー",
    close: "閉じる",
    menuLeft: ["ニュース", "スタッフ＆キャスト", "映画", "音楽"],
    menuRight: ["イントロダクション", "キャラクター"],
    heroTitle: "トゥー・ビー・ヒーローX",
    apply: "申し込む",
    landingpara: "あなたの「やってみよう」が世界を変える。型破りなアイデアとチームパワーで世界を驚かせよう。",
    join: "参加しよう",
    wht: "",
    wht1:"とは何ですか" , 
    profile: "会社概要",
  },
  cn: {
    logoText: "特克迪亚",
    menuButton: "菜单",
    close: "关闭",
    menuLeft: ["新闻", "工作人员和演员", "电影", "音乐"],
    menuRight: ["介绍", "角色"],
    heroTitle: "成为英雄X",
    apply: "立即申请",
    landingpara: "你的“让我们来做”将改变世界。用非常规的想法和团队力量来惊艳世界。",
    join: "来加入我们",
    wht: "",
    profile: "公司简介",
    wht1: "是什麼",
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef(null);
  // const [progress, setProgress] = useState(0);
  // const [fontSize, setFontSize] = useState("9rem");
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  const initializeGridText = () => {
      const element = document.getElementById('gridText');
      if (!element) return;

      const text = element.textContent;
      const fragment = document.createDocumentFragment();
      
      [...text].forEach((char, index) => {
          const span = document.createElement('span');
          span.className = 'char';
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.setProperty('--index', index);
          fragment.appendChild(span);
      });

      
      element.innerHTML = '';
      element.appendChild(fragment);
  };
  if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  initializeGridText();
                  observer.disconnect();
              }
          });
      });
      
      observer.observe(document.body);
  } else {
      // Fallback for older browsers
      document.addEventListener('DOMContentLoaded', initializeGridText);
  }

  const handleApplyClick = () => {
    navigate('/form');
  };
  
  const handleProductClick = () => {
    navigate('/product');
  };

  const t = translations[language];

  

  // Auto-detect browser language on first load
  useEffect(() => {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith("ja")) {
      setLanguage("jp");
    } else if (browserLang.startsWith("zh")) {
      setLanguage("cn");
    } else {
      setLanguage("en");
    }
  }, []);
  const [loaderPhase, setLoaderPhase] = useState(1);
  
  useEffect(() => {
    let timer;
    if (loaderPhase === 1) {
      timer = setTimeout(() => setLoaderPhase(2), 800); // Japanese: faster
    } else if (loaderPhase === 2) {
      timer = setTimeout(() => setLoaderPhase(3), 1500); // English: slower
    }
    return () => clearTimeout(timer);
  }, [loaderPhase]);

  

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const section = sectionRef.current;
  //     if (!section) return;

  //     const rect = section.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;

  //     if (rect.top < windowHeight && rect.bottom > 0) {
  //       const totalHeight = windowHeight + rect.height;
  //       const visibleTop = Math.min(Math.max(0, windowHeight - rect.top), totalHeight);
  //       const scrollProgress = visibleTop / totalHeight;
  //       setProgress(scrollProgress);
  //     } else if (rect.bottom <= 0) {
  //       setProgress(1);
  //     } else if (rect.top >= windowHeight) {
  //       setProgress(0);
  //     }
  //   };

  //   const updateFontSize = () => {
  //     const screenWidth = window.innerWidth;
  //     const maxSize = screenWidth < 480 ? 4 : screenWidth < 850 ? 9 : 15;
  //     const minSize = screenWidth < 480 ? 1.2 : screenWidth < 850 ? 1.3 : 1.5;
  //     const size = maxSize - (maxSize - minSize) * progress;
  //     setFontSize(`${size}rem`);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("resize", updateFontSize);

  //   const update = () => {
  //     handleScroll();
  //     updateFontSize();
  //   };

  //   update();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("resize", updateFontSize);
  //   };
  // }, [progress]);

if (loaderPhase === 1) {
    return <LoaderKatakana text="テクディア" speed={45} characterSet="katakana" subtitle="Tecdia - Recruiting in India" style={{position: "fixed"}}/>;
  }

  if (loaderPhase === 2) {
    return <LoaderKatakana text="Tecdia" speed={110} characterSet="latin" subtitle="Tecdia - Recruiting in India" style={{position: "fixed"}}/>;
  }
  return (
    <div className="page">
      {/* Menu Button */}
      {/* <div className="ballpit-container">
        <Ballpit />
      </div> */}
      
    
      {!menuOpen && (
        <div className="menu-btn" onClick={() => setMenuOpen(true)}>
          <div className="menu-lines" />
          <div className="menu-lines" />
          <div className="menu-label" style={{color:"white"}}>{t.menuButton}</div>
        </div>
      )}

      {/* Fullscreen Menu Overlay */}
      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>
        {menuOpen && (
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <div className="close-icon">✕</div>
            <div className="close-text">{t.close}</div>
          </div>
        )}
        <div className="menu-content">
          <div className="menu-left">
            <ul>
              {t.menuLeft.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="menu-right">
            <ul>
              {t.menuRight.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="logo">
              <span className="logo-text">{t.heroTitle}</span>
            </div>
          </div>
        </div>
      </div>
      <img src="./logo-tecdia.png" alt="Logo" className="logo" />
       <img src="./cherry.png" alt="Right Side" className="side-image" />
      {/* Language Toggle */}
      <div className="language-toggle-container">
        <LanguageToggle onLanguageChange={setLanguage} />
      </div>
      <button className="apply-btn"><a
        href="#apply"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.apply} <span className="arrow">↗</span>
      </a></button>

      {/* Scroll Text */}
      {/* <div
        className={`scroll-text ${progress === 1 ? "navbar-style" : ""}`}
        style={{
          top: `${53 - progress * 50}%`,
          transform: `translateY(-${50 - progress * 50}%)`,
          fontSize: fontSize, 
        }}
      >
        <span>{t.logoText} </span>
        
      </div> */}
      



      <section ref={sectionRef} className="landing-section" >
        
        <div style={{display:'flex', flexDirection: 'column' , gap: '20px'}}>
          <span className="TecName" id="gridText">{t.logoText}</span>
          <p className="landing-para">{t.landingpara} </p>
        <button className="join-us">{t.join}</button></div>
      <div>
      <img
          src="/ChatGPT_Image_Jul_23__2025__01_35_23_PM-removebg-preview.png"
          alt="Lady Greeting"
          className="greeting-image"
        />
      </div>
      </section>
      <section className="landing-foot">
        <MarqueeComponent language={language}></MarqueeComponent>
      </section>
      <section class="tecdia-section">
        <div className="whatpic-container">


  
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={true}
          cardDimensions={{ width: 370, height: 370 }}
          cardsData={images}
        />
        </div>
        <div class="tecdia-container">
            
            <h1 class="tecdia-title">
                {t.wht}<span class="tecdia-brand">{t.logoText}</span>{t.wht1}?
            </h1>

           
            <p class="tecdia-description">
                <TypingEffect language={language} />
            </p>

            
            <div class="tecdia-buttons">
                <button class="btn" onclick={handleProductClick}>{t.profile}</button>
                <button class="btn" onclick={handleApplyClick}>{t.apply} ↗</button>
            </div>
        </div>
    </section>

      

      <section className="tec-section">
      {/* Squares background */}
      <div className="tec-squares-bg">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
        >
          
        </Squares>
      </div>

      {/* Foreground content */}
      <TecdiaNumber language={language} />
    </section>
      <OrganizationCulture />
      <div>
        <PresidentVision />
      </div>
      <Footer />
      {/* Background Animation */}
      
    </div>
  );
}

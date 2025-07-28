import React from "react";

export default function MarqueeComponent({ language }) {
  const translations = {
    en: {
      w: "WORK HARD",
      p: "PLAY HARD", 
      l: "LET'S DO THIS!",
    },
    jp: {
      w: "働きます",
      p: "遊びます",    
      l: "やりましょう！",
    },
    cn: {
      w: "努力工作",
      p: "尽情玩乐",
      l: "让我们开始吧！",
    },
  };

   const t = translations[language];
  
    
  
    // Auto-detect browser language on first load
  

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
    }
    
    .marquee-container-wrapper {
      position: absolute;
      width: 100%;
      z-index: 10;
      overflow-x: clip;
    }
    
    .marquee-section {
      font-family: monospace;
      width: 101%;
      transform: translateX(-0.25rem) rotate(2deg);
      overflow-x: clip;
      font-size: 1.875rem;
    }
    
    .marquee-row {
      display: flex;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
    }
    
    .marquee-container {
      display: flex;
      animation: scroll 60s linear infinite;
    }
    
    .marquee-container.reverse {
      animation: scroll-reverse 60s linear infinite;
    }
    
    .marquee-content {
      display: flex;
    }
    
    .marquee-text {
      padding: 0 1rem;
    }
    
    .collaborate-row {
      background-color: rgb(255, 196, 62);
      border-top: 2px solid black;
    }
    
    .code-row {
      background-color: rgb(251, 98, 76);
      border: 2px solid black;
    }
    
    .conquer-row {
      background-color: rgb(255, 136, 190);
      border-bottom: 2px solid black;
    }
    
    @keyframes scroll {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    @keyframes scroll-reverse {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      
      <div className="marquee-container-wrapper">
        <div className="marquee-section">
          {/* COLLABORATE Row */}
          <div className="marquee-row collaborate-row">
            <div className="marquee-container">
              <div className="marquee-content">
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                
              </div>
              <div aria-hidden="true" className="marquee-content">
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
                <span className="marquee-text">{t.w}</span>
              </div>
            </div>
          </div>
          
          {/* CODE Row */}
          <div className="marquee-row code-row">
            <div className="marquee-container reverse">
              <div className="marquee-content">
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span> 
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
              </div>
              <div aria-hidden="true" className="marquee-content">
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span> 
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
                <span className="marquee-text">{t.p}</span>
              </div>
            </div>
          </div>
          
          {/* CONQUER Row */}
          <div className="marquee-row conquer-row">
            <div className="marquee-container">
              <div className="marquee-content">
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
              </div>
              <div aria-hidden="true" className="marquee-content">
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
                <span className="marquee-text">{t.l}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
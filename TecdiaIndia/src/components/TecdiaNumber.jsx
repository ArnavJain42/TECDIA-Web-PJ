import React, { useState, useEffect, useRef } from "react";
import { Users, Globe, UserCheck, Clock, ScrollText, Building } from "lucide-react";
import Squares from "../backgrounds/Squares";

const TecdiaNumber = ({ language }) => {
  const mainTitleSizes = {
    en: "xl:text-9xl lg:text-8xl md:text-[80px] sm:text-7xl text-[65px]",
    jp: "xl:text-8xl lg:text-7xl md:text-[54px] sm:text-[47px] text-[46px]", // Slightly smaller for wider Japanese characters
    cn: "xl:text-9xl lg:text-8xl md:text-[80px] sm:text-7xl text-[65px]", // Same for Chinese
  };

  const subTitleSizes = {
    en: "xl:text-4xl lg:text-3xl md:text-3xl sm:text-3xl text-xl",
    jp: "xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl", // Slightly larger for shorter Japanese text
    cn: "xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-3xl", // Same for Chinese
  };

  // Select the appropriate class string based on the current language, with English as a fallback
  const mainTitleClassName = mainTitleSizes[language] || mainTitleSizes.en;
  const subTitleClassName = subTitleSizes[language] || subTitleSizes.en;

  let borderColor;
  if (language === "jp") {
    borderColor = "#FFCB61"; // A red color to match the theme
  } else if (language === "cn") {
    borderColor = "#B12C00"; // An orange color to match the theme
  } else {
    borderColor = "#239BA7"; // The original blue for English
  }

  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    countries: 0,
    products: 0,
    experience: 0,
    satisfaction: 0,
    satisfaction2: 0,
  });

  const translations = {
    en: {
      titleMain: "TECDIA",
      numbers: "in NUMBERS",
      labelClients: "Global Clients",
      labelCountries: "Countries",
      labelProducts: "Employees",
      labelExperience: "Years Experience",
      labelsatisfaction: "Average length of employment",
      labelPatent: "Patent Holdings",
    },
    jp: {
      titleMain: "テクダイヤ",
      numbers: "の数字",
      labelClients: "グローバルクライアント",
      labelCountries: "国",
      labelProducts: '従業員',
      labelExperience: "経験年数",
      labelsatisfaction: '平均雇用期間',
      labelPatent: "以上の特許保有",
    },
    cn: {
      titleMain: "特克迪亚",
      numbers: "数字",
      labelClients: "全球客户",
      labelCountries: "国家",
      labelProducts: "员工",
      labelExperience: "经验年限",
      labelsatisfaction: "平均雇佣时间",
      labelPatent: "多项专利持有",
    },
  };
  const t = translations[language];
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  const animateCounter = (key, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * (end - start) + start);

      setCounters((prev) => ({
        ...prev,
        [key]: current,
      }));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  const triggerAnimations = () => {
    if (animationsTriggered) return;

    setAnimationsTriggered(true);

    setTimeout(() => animateCounter("clients", 0, 150, 2000), 800);
    setTimeout(() => animateCounter("countries", 0, 22, 1800), 1000);
    setTimeout(() => animateCounter("products", 0, 700, 2200), 1200);
    setTimeout(() => animateCounter("experience", 0, 49, 1500), 1400);
    setTimeout(() => animateCounter("satisfaction", 0, 12, 2000), 1600);
    setTimeout(() => animateCounter("satisfaction2", 0, 20, 2000), 1800);
  };

  const checkInitialVisibility = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
      triggerAnimations();
    }
  };

  useEffect(() => {
    setTimeout(checkInitialVisibility, 100);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -10px 0px",
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationsTriggered) {
          triggerAnimations();
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationsTriggered]);

  // eslint-disable-next-line no-unused-vars
  const handleCardClick = (e) => {
    const card = e.currentTarget;
    card.style.transform = "scale(0.95)";
    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  };

  return (
    <>
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.4}
          squareSize={100}
          direction="diagonal"
          borderColor={borderColor}
          language={language}
        />
      </div>

      <div
        className="tec-section flex items-center justify-center"
        ref={sectionRef}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 max-w-5xl mx-auto">
          <div className="flex justify-center items-center xl:col-span-2 lg:col-span-2">
            <h2
              className={`tec-title  ${
                animationsTriggered ? "animate" : ""
              }`}
            >
              {/* The dynamic class names are now used here */}
              <span className={`tec-title-main ${mainTitleClassName}`}>
                {t.titleMain}
              </span>
              <br />
              <br />
              <span className={`tec-title-sub ${subTitleClassName}`}>
                {t.numbers}
              </span>
            </h2>
          </div>

          {/* --- MODIFIED CARD CLASSES BELOW --- */}

          <div
            className={`tec-card bg-blue-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer xl:row-span-2 lg:row-span-2 shadow-lg shadow-yellow-900 rounded-4xl ${
              animationsTriggered ? "animate" : ""
            }`}
          >
            <Users className="w-12 h-12 mb-3 text-white" />
            <h3 className="text-4xl font-bold mb-2">{counters.clients}+</h3>
            <p className="text-base">{t.labelClients}</p>
          </div>

          <div
            className={`tec-card bg-yellow-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer xl:row-span-2 lg:row-span-2 shadow-lg shadow-yellow-900 rounded-4xl ${
              animationsTriggered ? "animate" : ""
            }`}
          >
            <Globe className="w-12 h-12 mb-3 text-white" />
            <h3 className="text-4xl font-bold mb-2">{counters.countries}+</h3>
            <p className="text-base">{t.labelCountries}</p>
          </div>

          <div
            className={`tec-card bg-orange-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer xl:row-span-2 lg:row-span-2 shadow-lg shadow-yellow-900 rounded-4xl ${
              animationsTriggered ? "animate" : ""
            }`}
          >
            <Building className="w-12 h-12 mb-3 text-white" />
            <h3 className="text-4xl font-bold mb-2">{counters.products}+</h3>
            <p className="text-base">{t.labelProducts}</p>
          </div>

          <div
            className={`tec-card bg-green-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer shadow-lg shadow-yellow-900 rounded-4xl ${
              animationsTriggered ? "animate" : ""
            }`}
          >
            <Clock className="w-12 h-12 mb-3 text-white" />
            <h3 className="text-4xl font-bold mb-2">{counters.experience}</h3>
            <p className="text-base">{t.labelExperience}</p>
          </div>

          <div
            className={`tec-card bg-rose-800 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer shadow-lg shadow-yellow-900 rounded-4xl ${
              animationsTriggered ? "animate" : ""
            }`}
          >
            <ScrollText className="w-12 h-12 mb-3 text-white" />
            <h3 className="text-4xl font-bold mb-2">
              {counters.satisfaction2}+
            </h3>
            <p className="text-base">{t.labelPatent}</p>
          </div>

          <div
            className={`tec-card bg-purple-500 py-12 px-8 flex flex-col items-center justify-center min-h-[150px] transition-transform hover:-translate-y-1 cursor-pointer xl:col-span-2 lg:col-span-2 sm:col-span-2 shadow-lg shadow-yellow-900 rounded-4xl ${
              animationsTriggered ? "animate" : ""
            }`}
          >
            <UserCheck className="w-12 h-12 mb-3 text-white" />
            <h3 className="text-4xl font-bold mb-2">
              {counters.satisfaction} years
            </h3>
            <p className="text-base">{t.labelsatisfaction}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TecdiaNumber;






// import React, { useState, useEffect, useRef } from 'react';

// const TecdiaNumber = ({language}) => {
//   const [animationsTriggered, setAnimationsTriggered] = useState(false);
//   const [counters, setCounters] = useState({
//     clients: 0,
//     countries: 0,
//     products: 0,
//     experience: 0,
//     satisfaction1: 0,
//     satisfaction2: 0
//   });

//   const translations = {
//     en: {
//       titleMain: 'TECDIA',
//       numbers: 'in NUMBERS',
//       labelClients: 'Global Clients',
//       labelCountries: 'Countries',
//       labelProducts: 'Employees',  
//       labelExperience: 'Years Experience',
//       labelSatisfaction1: 'Client Satisfaction',
//       labelemployees: 'Average length of employment',

//     },
//     jp: {
//       titleMain: 'テクディア',
//       numbers: 'の数字',
//       labelClients: 'グローバルクライアント',
//       labelCountries: '国', 
//       labelProducts: '製品',
//       labelExperience: '経験年数',
//       labelSatisfaction1: '顧客満足度',
//       labelemployees: '平均雇用期間',
//     },
//     cn: { 
//       titleMain: '特迪亚',
//       numbers: '数字',
//       labelClients: '全球客户',
//       labelCountries: '国家',
//       labelProducts: '产品',
//       labelExperience: '经验年限',
//       labelSatisfaction1: '客户满意度',
//       labelemployees: '平均雇佣时间',
//     }
//   }
//   const t = translations[language];
//   const sectionRef = useRef(null);
//   const observerRef = useRef(null);

//   const animateCounter = (key, start, end, duration) => {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//       const current = Math.floor(easeOutQuart * (end - start) + start);
      
//       setCounters(prev => ({
//         ...prev,
//         [key]: current
//       }));
      
//       if (progress < 1) {
//         requestAnimationFrame(step);
//       }
//     };
//     requestAnimationFrame(step);
//   };

//   const triggerAnimations = () => {
//     if (animationsTriggered) return;
    
//     setAnimationsTriggered(true);
    
//     setTimeout(() => animateCounter('clients', 0, 150, 2000), 800);
//     setTimeout(() => animateCounter('countries', 0, 9, 1800), 1000);
//     setTimeout(() => animateCounter('products', 0, 700, 2200), 1200);
//     setTimeout(() => animateCounter('experience', 0, 49, 1500), 1400);
//     setTimeout(() => animateCounter('satisfaction1', 0, 99, 2000), 1600);
//     setTimeout(() => animateCounter('satisfaction2', 0, 12, 2000), 1800);
//   };

//   const checkInitialVisibility = () => {
//     if (!sectionRef.current) return;
    
//     const rect = sectionRef.current.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
    
//     if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
//       triggerAnimations();
//     }
//   };

//   useEffect(() => {
//     setTimeout(checkInitialVisibility, 100);

//     const observerOptions = {
//       threshold: 0.1,
//       rootMargin: '0px 0px -10px 0px'
//     };

//     observerRef.current = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting && !animationsTriggered) {
//           triggerAnimations();
//         }
//       });
//     }, observerOptions);

//     if (sectionRef.current) {
//       observerRef.current.observe(sectionRef.current);
//     }

//     return () => {
//       if (observerRef.current) {
//         observerRef.current.disconnect();
//       }
//     };
//   }, [animationsTriggered]);

//   const handleCardClick = (e) => {
//     const card = e.currentTarget;
//     card.style.transform = 'scale(0.95)';
//     setTimeout(() => {
//       card.style.transform = '';
//     }, 150);
//   };

//   const cardData = [
//     {
//       id: 'clients',
//       icon: 'fas fa-users',
//       value: counters.clients,
//       suffix: '+',
//       label: t.labelClients,
//       color: 'bgBlue',
//       gridRow: 'span 2'
//     },
//     {
//       id: 'countries',
//       icon: 'fas fa-globe-americas',
//       value: counters.countries,
//       suffix: '+',
//       label: t.labelCountries,
//       color: 'bgYellow',
//       gridRow: 'span 2'
//     },
//     {
//       id: 'products',
//       icon: 'fas fa-box',
//       value: counters.products,
//       suffix: '+',
//       label: t.labelProducts,
//       color: 'bgOrange',
//       gridRow: 'span 2'
//     },
//     {
//       id: 'experience',
//       icon: 'fas fa-calendar-alt',
//       value: counters.experience,
//       suffix: '',
//       label: t.labelExperience,
//       color: 'bgGreen',
//       gridRow: 'span 1'
//     },
//     {
//       id: 'satisfaction1',
//       icon: 'fas fa-heart',
//       value: counters.satisfaction1,
//       suffix: '%',
//       label: t.labelSatisfaction1,
//       color: 'bgRose',
//       gridRow: 'span 1'
//     },
//     {
//       id: 'satisfaction2',
//       icon: 'fas fa-star',
//       value: counters.satisfaction2,
//       suffix: ' years',
//       label: t.labelemployees,
//       color: 'bgPurple',
//       gridRow: 'span 1',
//       doubleSpan: true
//     }
//   ];

//   return (
//     <>
//       <link 
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
//         rel="stylesheet" 
//       />
//       <div className="tec-section" ref={sectionRef}>
//         <div className="tec-float-bg"></div>
//         <div className="tec-float-bg"></div>
//         <div className="tec-float-bg"></div>
        
//         <div className="tec-squares-bg"></div>
        
//         <div className="tec-content">
//           <div className="tec-grid">
//             <h2 className={`tec-title ${animationsTriggered ? 'animate' : ''}`}>
//               <span className="tec-title-main">{t.titleMain}</span><br />
//               <span className="tec-title-sub">{t.numbers}</span>
//             </h2>

//             {cardData.map((card) => (
//               <div
//                 key={card.id}
//                 className={`tec-card ${card.color} ${card.doubleSpan ? 'span-double' : ''} ${animationsTriggered ? 'animate' : ''}`}
//                 onClick={handleCardClick}
//                 style={{ gridRow: card.gridRow }}
//               >
//                 <div className={`tec-card-icon ${animationsTriggered ? 'animate' : ''}`}>
//                   <i className={card.icon}></i>
//                 </div>
//                 <h3>{card.value}{card.suffix}</h3>
//                 <p>{card.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TecdiaNumber;

import React, { useState, useEffect, useRef } from 'react';

const TecdiaNumber = ({language}) => {
  const [animationsTriggered, setAnimationsTriggered] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    countries: 0,
    products: 0,
    experience: 0,
    satisfaction1: 0,
    satisfaction2: 0
  });

  const translations = {
    en: {
      titleMain: 'TECDIA',
      numbers: 'in NUMBERS',
      labelClients: 'Global Clients',
      labelCountries: 'Countries',
      labelProducts: 'Products',  
      labelExperience: 'Years Experience',
      labelSatisfaction1: 'Client Satisfaction',

    },
    jp: {
      titleMain: 'テクディア',
      numbers: 'の数字',
      labelClients: 'グローバルクライアント',
      labelCountries: '国', 
      labelProducts: '製品',
      labelExperience: '経験年数',
      labelSatisfaction1: '顧客満足度',
    },
    cn: { 
      titleMain: '特迪亚',
      numbers: '数字',
      labelClients: '全球客户',
      labelCountries: '国家',
      labelProducts: '产品',
      labelExperience: '经验年限',
      labelSatisfaction1: '客户满意度',
    }
  }
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
      
      setCounters(prev => ({
        ...prev,
        [key]: current
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
    
    setTimeout(() => animateCounter('clients', 0, 150, 2000), 800);
    setTimeout(() => animateCounter('countries', 0, 25, 1800), 1000);
    setTimeout(() => animateCounter('products', 0, 500, 2200), 1200);
    setTimeout(() => animateCounter('experience', 0, 15, 1500), 1400);
    setTimeout(() => animateCounter('satisfaction1', 0, 99, 2000), 1600);
    setTimeout(() => animateCounter('satisfaction2', 0, 99, 2000), 1800);
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
      rootMargin: '0px 0px -10px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
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
  }, [animationsTriggered]);

  const handleCardClick = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.style.transform = '';
    }, 150);
  };

  const cardData = [
    {
      id: 'clients',
      icon: 'fas fa-users',
      value: counters.clients,
      suffix: '+',
      label: t.labelClients,
      color: 'bgBlue',
      gridRow: 'span 2'
    },
    {
      id: 'countries',
      icon: 'fas fa-globe-americas',
      value: counters.countries,
      suffix: '+',
      label: t.labelCountries,
      color: 'bgYellow',
      gridRow: 'span 2'
    },
    {
      id: 'products',
      icon: 'fas fa-box',
      value: counters.products,
      suffix: '+',
      label: t.labelProducts,
      color: 'bgOrange',
      gridRow: 'span 2'
    },
    {
      id: 'experience',
      icon: 'fas fa-calendar-alt',
      value: counters.experience,
      suffix: '',
      label: t.labelExperience,
      color: 'bgGreen',
      gridRow: 'span 1'
    },
    {
      id: 'satisfaction1',
      icon: 'fas fa-heart',
      value: counters.satisfaction1,
      suffix: '%',
      label: t.labelSatisfaction1,
      color: 'bgRose',
      gridRow: 'span 1'
    },
    {
      id: 'satisfaction2',
      icon: 'fas fa-star',
      value: counters.satisfaction2,
      suffix: '%',
      label: t.labelSatisfaction1,
      color: 'bgPurple',
      gridRow: 'span 1',
      doubleSpan: true
    }
  ];

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        rel="stylesheet" 
      />
      <div className="tec-section" ref={sectionRef}>
        <div className="tec-float-bg"></div>
        <div className="tec-float-bg"></div>
        <div className="tec-float-bg"></div>
        
        <div className="tec-squares-bg"></div>
        
        <div className="tec-content">
          <div className="tec-grid">
            <h2 className={`tec-title ${animationsTriggered ? 'animate' : ''}`}>
              <span className="tec-title-main">{t.titleMain}</span><br />
              <span className="tec-title-sub">{t.numbers}</span>
            </h2>

            {cardData.map((card) => (
              <div
                key={card.id}
                className={`tec-card ${card.color} ${card.doubleSpan ? 'span-double' : ''} ${animationsTriggered ? 'animate' : ''}`}
                onClick={handleCardClick}
                style={{ gridRow: card.gridRow }}
              >
                <div className={`tec-card-icon ${animationsTriggered ? 'animate' : ''}`}>
                  <i className={card.icon}></i>
                </div>
                <h3>{card.value}{card.suffix}</h3>
                <p>{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TecdiaNumber;

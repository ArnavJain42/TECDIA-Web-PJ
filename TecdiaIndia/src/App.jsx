
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
import CherryBlossomTree from "./components/cherryBlossomTree.jsx";
import { Search, User, Mail, Phone, MapPin, FileText, MessageCircle, Loader2, X } from 'lucide-react';

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

const ApplicationStatusModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    PIN: ''
  });
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.PIN) {
      setError('Please fill in both email and PIN fields.');
      return;
    }

    setLoading(true);
    setError('');
    setApplicationData(null);

    try {
      const response = await fetch('http://localhost:5000/api/applications/check-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setApplicationData(data);
    } catch (err) {
      setError('Failed to fetch application status. Please check your credentials and try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ email: '', PIN: '' });
    setApplicationData(null);
    setError('');
    setLoading(false);
    onClose();
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'rejected':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'pending':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
      ></div>
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">
                Check Application Status
              </h2>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-4">
            {!applicationData ? (
              // Form Section
              <div>
                <p className="text-gray-600 mb-6">
                  Enter your email and PIN to check your application status
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="PIN" className="block text-sm font-medium text-gray-700 mb-1">
                      PIN
                    </label>
                    <input
                      type="text"
                      id="PIN"
                      name="PIN"
                      value={formData.PIN}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your PIN"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                      {error}
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                        Checking Status...
                      </>
                    ) : (
                      <>
                        <Search className="-ml-1 mr-2 h-4 w-4" />
                        Check Status
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              // Application Details Section
              <div>
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      {applicationData.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(applicationData.status)}`}>
                      {applicationData.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800">{applicationData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">{applicationData.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Position</p>
                      <p className="text-gray-800">{applicationData.position}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Resume</p>
                      <a 
                        href={applicationData.resumeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        View Resume
                      </a>
                    </div>
                  </div>

                  {applicationData.additionalQuery && (
                    <div className="flex items-start">
                      <MessageCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">Additional Query</p>
                        <p className="text-gray-800">{applicationData.additionalQuery}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between">
                  <button
                    onClick={() => setApplicationData(null)}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Check Another Application
                  </button>
                  <button
                    onClick={handleClose}
                    className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef(null);
  // const [progress, setProgress] = useState(0);
  // const [fontSize, setFontSize] = useState("9rem");
  const [language, setLanguage] = useState("en");
  const [cardSize, setCardSize] = useState(450);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  useEffect(() => {
  const handleResize = () => {
    setCardSize(window.innerWidth < 600 ? 350 : 450);
  };

  // Set initial size
  handleResize();

  // Add event listener
  window.addEventListener('resize', handleResize);

  // Cleanup
  return () => window.removeEventListener('resize', handleResize);
}, []);

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
              <button 
              onClick={() => setIsModalOpen(true)}
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50"
            >
              Check Application Status
            </button>
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
        href="form"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.apply} <span className="arrow">↗</span>
      </a></button>
<ApplicationStatusModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} style={{zindex: 2000}}
      />
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
        <button className="join-us" onClick={handleApplyClick}>{t.join}</button></div>
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
        {/* <CherryBlossomTree /> */}
        <div className="whatpic-container">

        
  
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={true}
          cardDimensions={{ width: cardSize, height: cardSize }}
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
                <button class="btn" onClick={handleProductClick}>{t.profile}</button>
                <a><button class="btn" onClick={handleApplyClick}>{t.apply} ↗</button></a>
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

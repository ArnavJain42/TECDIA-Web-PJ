import React from "react";
import LanguageToggle from "./LanguageToggle";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  t,
  // eslint-disable-next-line no-unused-vars
  language,
  setLanguage,
  menuOpen,
  setMenuOpen,
  isModalOpen,
  setIsModalOpen,
  // eslint-disable-next-line no-unused-vars
  ApplicationStatusModal,
  isScrolled,
}) {
  const navigate = useNavigate();
//   const handleHomeClick = () => {
//     navigate("/");
//   };
  const handleProductClick = () => {
    navigate("/product");
  };
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleApplyClick = () => {
    navigate("/form");
  };
  // Get the color class for the current language, or use the default
  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full h-[53px] fixed top-0 left-0 z-400 flex px-6 py-3 transition-colors duration-300 ${
          isScrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        {/* Left: Menu button + Logo */}
        <div className="w-full flex justify-end">
          {/* Menu Button */}
          <div>
            {!menuOpen && (
              <div className="menu-btn" onClick={() => setMenuOpen(true)}>
                <div className="menu-lines" />
                <div className="menu-lines" />
                <div className="menu-lines" />
              </div>
            )}
            <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>
              {menuOpen && (
                <div className="close-btn" onClick={() => setMenuOpen(false)}>
                  <div className="close-icon">✕</div>
                  <div className="close-text">{t.close}</div>
                </div>
              )}
              <div className="menu" style={{color: 'white'}}>
                <div className="menu-sections">
                <a href="#about"><button className="menubtn hover:scale-110" onClick={() => setMenuOpen(false)}>{t.navsection1}</button></a>
                <a href="#TecNum"><button className="menubtn hover:scale-110" onClick={() => setMenuOpen(false)}>{t.navsection2}</button></a>
                <a href="#Culture"><button className="menubtn hover:scale-110" onClick={() => setMenuOpen(false)}>{t.navsection3}</button></a>
                <a href="#vision"><button className="menubtn hover:scale-110" onClick={() => setMenuOpen(false)}>{t.navsection4}</button></a>
                </div>
                <div className="menu-page">
                <button onClick={() => handleProductClick()} className="menubtn hover:scale-110">{t.navpage1}</button>
                <button onClick={() => handleContactClick()} className="menubtn hover:scale-110">{t.navpage2}</button>
                <button onClick={() => setIsModalOpen(true) & setMenuOpen(false)} className="menubtn hover:scale-110">{t.navpage3}</button>
                </div>
              </div>
            </div>
            <img src="./logo-tecdia.png" alt="Logo" className="logo" />
          </div>

          

          <div className="flex flex-row" style={{padding: '0px 10px'}}>
             <div className="flex items-center">
            
            <button className="apply-btn cursor-pointer hover:scale-115" style={{marginRight: '10px'}} onClick={handleApplyClick}>
                {t.apply} <span className="arrow">↗</span>
            </button>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <LanguageToggle onLanguageChange={setLanguage} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Apply Now + Language */}
      </div>

      {/* Modal */}
      <ApplicationStatusModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

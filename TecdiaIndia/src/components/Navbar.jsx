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
                <a href="#about"><button className="menubtn hover:scale-110" onClick={() => setMenuOpen(false)}>What is Tecdia?</button></a>
                <a href="#TecNum"><button className="menubtn hover:scale-110" onClick={() => setMenuOpen(false)}>Tecdia in Numbers</button></a>
                <a href="#Culture"><button className="menubtn hover:scale-110" onClick={() => setMenuOpen(false)}>Tecdia's Culture</button></a>
                <a href="#vision"><button className="menubtn hover:scale-110" onClick={() => setMenuOpen(false)}>President Vision</button></a>
                </div>
                <div className="menu-page">
                <button onClick={() => handleProductClick()} className="menubtn hover:scale-110">Products</button>
                <button onClick={() => handleContactClick()} className="menubtn hover:scale-110">Contact</button>
                <button onClick={() => setIsModalOpen(true) & setMenuOpen(false)} className="menubtn hover:scale-110">Check Application Status</button>
                </div>
              </div>
            </div>
            <img src="./logo-tecdia.png" alt="Logo" className="logo" />
          </div>

          

          <div className="flex flex-row" style={{padding: '0px 10px'}}>
             <div className="flex items-center">
            <a
                href="form"
                rel="noopener noreferrer"
            >
            <button className="apply-btn" style={{marginRight: '10px'}}>
                {t.apply} <span className="arrow">↗</span>
            </button></a>
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

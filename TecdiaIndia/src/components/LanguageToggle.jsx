import { useEffect } from "react";
import { useLanguage } from '../contexts/LanguageContext.jsx';

const languages = [
  { code: "en", label: "EN", theme: "theme-en", font: "font-en", googleCode: "en" },
  { code: "jp", label: "JP", theme: "theme-jp", font: "font-jp", googleCode: "ja" },
  { code: "cn", label: "中", theme: "theme-cn", font: "font-cn", googleCode: "zh-CN" },
];

export default function LanguageToggle({ onLanguageChange }) {
  // Use global language context instead of local state
  const { language: selectedLang, setLanguage: setSelectedLang } = useLanguage();

  // Update theme, font, and Google Translate dropdown when selectedLang changes
  useEffect(() => {
    const { theme, font, googleCode } = languages.find((l) => l.code === selectedLang);

    // Update theme and font for your app
    document.body.dataset.theme = theme;
    document.body.dataset.font = font;

    // Sync with Google Translate widget
    const select = document.querySelector("select.goog-te-combo");
    if (select) {
      select.value = googleCode;
      select.dispatchEvent(new Event("change"));
    }

    // Notify parent component if onLanguageChange prop is provided (for backward compatibility)
    if (onLanguageChange) onLanguageChange(selectedLang);
  }, [selectedLang, onLanguageChange]);

  // Watch Google Translate dropdown changes and update global state accordingly
  useEffect(() => {
    const updateLangFromGoogle = () => {
      const select = document.querySelector("select.goog-te-combo");
      if (select) {
        const selected = select.value;
        const lang = languages.find((l) => l.googleCode === selected);
        if (lang && lang.code !== selectedLang) {
          setSelectedLang(lang.code);
        }
      }
    };

    const observer = new MutationObserver(updateLangFromGoogle);
    const interval = setInterval(() => {
      const select = document.querySelector("select.goog-te-combo");
      if (select) {
        observer.observe(select, { attributes: true, childList: true, subtree: true });
        clearInterval(interval); // only observe once it's available
      }
    }, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [selectedLang, setSelectedLang]);

  return (
    <div className="language-toggle">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`language-button ${selectedLang === lang.code ? "active" : ""}`}
          onClick={() => setSelectedLang(lang.code)} 
          style={{color:"black"}}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
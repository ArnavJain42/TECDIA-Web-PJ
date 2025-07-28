import React, { useEffect, useRef, useState } from "react";

const TypingEffect = ({ language }) => {
  const paragraphRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const translations = {
    en: `We are a manufacturer that supplies products necessary for the future, from 5G, data centers, and space development to smartphones and 3D printing. With the motto "Work Hard Play Hard!" we are a company that pursues fulfillment not only at work but also in private life.`,
    jp: `5G、データセンター、宇宙開発からスマートフォン、3Dプリンティングに必要な製品を供給するメーカーです。「Work Hard Play Hard!」をモットーに、仕事だけでなくプライベートでも充実感を追求する会社です。`,
    cn: `我们是一家制造商, 提供从5G、数据中心、太空开发到智能手机和3D打印所需的产品。我们以“努力工作, 尽情玩乐！”为座右铭，是一家不仅在工作中追求成就感, 而且在私人生活中也追求充实感的公司。`
  };

  const fullText = translations[language] || translations.en;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    const currentRef = paragraphRef.current;

    if (currentRef) {
      observer.observe(currentRef);

      // Trigger immediately if already in view
      if (currentRef.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
      }
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    setDisplayedText("");
    setIsVisible(false);
    const timeout = setTimeout(() => {
      if (paragraphRef.current?.getBoundingClientRect().top < window.innerHeight) {
        setIsVisible(true);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [language]);

  useEffect(() => {
    if (!isVisible || displayedText.length === fullText.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => fullText.slice(0, prev.length + 1));
    }, 15); // ⚡ Double speed (15ms)

    return () => clearTimeout(timeout);
  }, [isVisible, displayedText, fullText]);

  return (
    <p className="tecdia-description" ref={paragraphRef}>
      {displayedText.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

export default TypingEffect;

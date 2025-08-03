import React, { useEffect, useRef, useState } from "react";

const TypingEffect = ({ language }) => {
  const paragraphRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const translations = {
    en: `Tecdia is at the forefront of innovation, powering critical industries like 5G, data centers, space exploration, smartphones, and 3D printing. Our cutting-edge technologies drive the future, offering you the chance to work on projects that truly transform the world. Join us to be part of a company where your efforts make a global impact every day.

At Tecdia, our motto “Work Hard, Play Hard!” reflects our vibrant culture that values both professional excellence and personal fulfillment. We provide a dynamic environment with opportunities for growth, collaboration, and work-life balance, ensuring you thrive on and off the job. If you want a career that challenges you and supports your well-being, Tecdia is the place to be.`,
    jp: `テクダイヤは、5G、データセンター、宇宙開発、スマートフォン、3Dプリンティングといった重要産業を支える最先端のイノベーション企業です。私たちの技術は未来を切り開き、世界を変えるプロジェクトに携わるチャンスをあなたに提供します。日々、グローバルな影響力を持つ仕事に参加しませんか。

テクダイヤのモットー「Work Hard, Play Hard!」は、仕事の成果と個人の充実を大切にする活気ある企業文化を表しています。成長、協力、ワークライフバランスの機会に恵まれた環境で、仕事も私生活も充実できる場所です。挑戦しながらも自分を大切にできるキャリアを望むなら、テクダイヤが最適な選択です。`,
    cn: `Tecdia 处于创新前沿，致力于支持5G、数据中心、太空探索、智能手机和3D打印等关键行业。我们的尖端技术引领未来，赋予您参与真正改变世界项目的机会。加入我们，成为每日创造全球影响力的一部分。

Tecdia 的座右铭“Work Hard, Play Hard!”体现了我们兼顾专业卓越与个人幸福的活力文化。我们提供充满活力的工作环境，有成长、协作和工作生活平衡的机会，确保您在工作与生活中都能茁壮成长。如果您希望拥有一个既具挑战性又支持身心健康的职业，Tecdia 将是您的理想选择。`,
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
      if (
        paragraphRef.current?.getBoundingClientRect().top < window.innerHeight
      ) {
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

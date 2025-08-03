"use client";

import { useState, useEffect } from "react";
import ProductSlide from "./ProductSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

const translations = {
  en: { 
    title1 : "SEMICONDUCTOR MANUFACTURING TECHNOLOGY",
    description1 : "We manufacture semiconductor parts, which are essential for communication technology, on the island of Cebu in the Philippines. The Philippines is known as one of the world's top overseas manufacturing destinations, and we take advantage of the local advantages of the Philippines, such as manual dexterity and communication in English, to manufacture our products.",
    title2 : "CERAMIC APPLICATION TECHNOLOGY",
    description2 : "Tecdia's main products are electronic components using ceramics. Applications include 5G communications, satellites, global data centers, and other semiconductor communications markets. We have the number one share in the global niche market.",
    title3 : "PRECISION MACHINING TECHNOLOGY",  
    description3 : "Machining is the process of forming metals and other materials into various shapes using specialized machines. This technology is used to create precise products with micron-level precision, and is used in smartphones, LCD tablets, 3D printing, and more.",
    title4 : "DIAMOND APPLICATION TECHNOLOGY",
    description4 : "Techdia, which started out as a diamond wholesaler, has established diamond processing technology and is now one of the world's leading companies in the manufacture and sale of diamond tools. We provide products to a variety of industries, including LED and Blu-Ray.",
  },
  jp: {
    title1: "半導体製造技術",
    description1: "フィリピンのセブ島で、通信技術に欠かせない半導体部品を製造しています。フィリピンは世界有数の海外製造拠点として知られ、現地の手先の器用さや英語でのコミュニケーション能力を活かして製品を製造しています。",
    title2: "セラミック応用技術",
    description2: "Tecdiaの主力製品はセラミックを使用した電子部品です。5G通信、衛星、グローバルデータセンターなど、半導体通信市場に対応し、グローバルニッチ市場でNo.1のシェアを誇ります。",
    title3: "精密加工技術",
    description3: "精密加工は、金属やその他の材料を専門の機械を使用して様々な形状に形成するプロセスです。この技術は、マイクロンレベルの精度で製品を作成するために使用され、スマートフォンやLCDタブレット、3Dプリントなどに利用されています。",
    title4: "ダイヤモンド応用技術",
    description4: "ダイヤモンド卸売業から始まったTecdiaは、ダイヤモンド加工技術を確立し、現在ではダイヤモンド工具の製造・販売において世界的なリーダーとなっています。LEDやBlu-Rayなど、多様な産業に製品を提供しています。",
  },
  cn: {
    title1: "半导体制造技术",
    description1: "我们在菲律宾的宿务岛制造通信技术所需的半导体零件。菲律宾被誉为世界顶级海外制造目的地之一，我们利用当地的手工灵巧和英语沟通能力来制造产品。",
    title2: "陶瓷应用技术",
    description2: "Tecdia的主要产品是使用陶瓷的电子元件。应用包括5G通信、卫星、全球数据中心等半导体通信市场。我们在全球细分市场中占据第一份额。",
    title3: "精密加工技术",
    description3: "精密加工是使用专用机器将金属和其他材料形成各种形状的过程。这项技术用于创建微米级精度的产品，广泛应用于智能手机、LCD平板电脑、3D打印等领域。",
    title4: "钻石应用技术",
    description4: "Tecdia起初是一家钻石批发商，现已建立了钻石加工技术，成为全球领先的钻石工具制造和销售公司之一。我们为LED和蓝光等多个行业提供产品。",
  }
};

const ProductSlider = ({language}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const t = translations[language];
  const products = [
    {
      id: 1,
      title: t.title1,
      description:
        t.description1,
      image: "./Prod0.png",
      youtubeUrl: "https://www.youtube.com/watch?v=eQ9wa38Tvrs",
      color: "blue",
    },
    {
      id: 2,
      title: t.title2,
      description:
        t.description2,
      image: "./Prod1.png",
      youtubeUrl: "https://www.youtube.com/watch?v=6TN9dL0hX7U",
      color: "orange",
    },
    {
      id: 3,
      title: t.title3,
      description:
        t.description3,
      image: "./Prod2.png",
      youtubeUrl: "https://www.youtube.com/watch?v=gi8wZbMWaGU",
      color: "green",
    },
    {
      id: 4,
      title: t.title4,
      description:
        t.description4,
      image: "./Prod3.png",
      youtubeUrl: "https://www.youtube.com/watch?v=Er0zCqYm-is",
      color: "purple",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleTransitionEnd = () => setIsTransitioning(false);
    const slider = document.querySelector(".slides-container");
    slider?.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      slider?.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div
          className="slides-container"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isTransitioning
              ? "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              : "none",
          }}
        >
          {products.map((product) => (
            <ProductSlide key={product.id} product={product} language={language}/>
          ))}
        </div>

        <button
          className="nav-button nav-button-left"
          onClick={prevSlide}
          aria-label="Previous slide"
          disabled={isTransitioning}
        >
          <ChevronLeft size={32} />
        </button>

        <button
          className="nav-button nav-button-right"
          onClick={nextSlide}
          aria-label="Next slide"
          disabled={isTransitioning}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="slide-indicators">
        {products.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;

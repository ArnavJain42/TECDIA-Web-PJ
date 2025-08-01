"use client";

import { useState, useEffect } from "react";
import ProductSlide from "./ProductSlide";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const products = [
    {
      id: 1,
      title: "SEMICONDUCTOR MANUFACTURING TECHNOLOGY",
      description:
        "We manufacture semiconductor parts, which are essential for communication technology, on the island of Cebu in the Philippines. The Philippines is known as one of the world's top overseas manufacturing destinations, and we take advantage of the local advantages of the Philippines, such as manual dexterity and communication in English, to manufacture our products.",
      image: "./Prod0.png",
      youtubeUrl: "https://www.youtube.com/watch?v=eQ9wa38Tvrs",
      color: "blue",
    },
    {
      id: 2,
      title: "CERAMIC APPLICATION TECHNOLOGY",
      description:
        "Tecdia's main products are electronic components using ceramics. Applications include 5G communications, satellites, global data centers, and other semiconductor communications markets. We have the number one share in the global niche market.",
      image: "./Prod1.png",
      youtubeUrl: "https://www.youtube.com/watch?v=6TN9dL0hX7U",
      color: "orange",
    },
    {
      id: 3,
      title: "PRECISION MACHINING TECHNOLOGY",
      description:
        "Machining is the process of forming metals and other materials into various shapes using specialized machines. This technology is used to create precise products with micron-level precision, and is used in smartphones, LCD tablets, 3D printing, and more.",
      image: "./Prod2.png",
      youtubeUrl: "https://www.youtube.com/watch?v=gi8wZbMWaGU",
      color: "green",
    },
    {
      id: 4,
      title: "DIAMOND APPLICATION TECHNOLOGY",
      description:
        "Techdia, which started out as a diamond wholesaler, has established diamond processing technology and is now one of the world's leading companies in the manufacture and sale of diamond tools. We provide products to a variety of industries, including LED and Blu-Ray.",
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
            <ProductSlide key={product.id} product={product} />
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

import React, { useEffect, useState } from 'react';

export default function ApplyButton() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSmall(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="form"
      className={`apply-btn ${isSmall ? 'small' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Apply Now <span className="arrow">↗</span>
    </a>
  );
}

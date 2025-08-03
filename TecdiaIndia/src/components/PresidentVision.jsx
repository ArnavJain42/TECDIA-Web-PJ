import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

const PresidentVision = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="president-section">
      {/* Background Effects */}
      <div className="background-effects">
        <div className="pulse pulse-1"></div>
        <div className="pulse pulse-2"></div>
        <div className="pulse pulse-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="content-container">
        <div className="header">
          <h1 className="main-title">President's Vision</h1>
          <div className="title-underline"></div>
        </div>

        <div className="vision-grid">
          {/* Left Side: Profile */}
          <div className="profile-card-wrapper">
            <ProfileCard
              name="President Name"
              title="President of Tecdia Inc."
              handle="president"
              status="Leading Tecdia"
              contactText="Contact Office"
              avatarUrl="/path/to/president-avatar.jpg"
              showUserInfo={true}
              enableTilt={true}
              behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(15,100%,60%,var(--card-opacity)) 4%,hsla(30,80%,50%,calc(var(--card-opacity)*0.75)) 10%,hsla(45,60%,40%,calc(var(--card-opacity)*0.5)) 50%,hsla(55,40%,30%,0) 100%)"
              innerGradient="linear-gradient(145deg,#ffb347 0%,#ff6b6b 100%)"
              onContactClick={() => console.log('Contact President Office clicked')}
            />
          </div>

          {/* Right Side: Vision Content */}
          <div className={`vision-content ${isVisible ? 'visible' : ''}`}>
            <div className="vision-statement-card">
              <h2 className="section-title">Presidential Vision Statement</h2>
              <p className="vision-text primary">
                My vision as President is to lead our organization into a new era of transformational excellence. We will establish ourselves as pioneers in our field, driving meaningful change that creates lasting value for all stakeholders.
              </p>
              <p className="vision-text secondary">
                Through strategic leadership, innovative thinking, and unwavering commitment to our values, we will build an organization that not only achieves remarkable success but also makes a positive impact on the world around us.
              </p>
            </div>

            <div className="quote-card">
              <blockquote className="quote-text">
                "True leadership is about creating a vision so compelling that others are inspired to join you in making it reality. Together, we will achieve what seemed impossible."
              </blockquote>
              <cite className="quote-attribution">
                - Presidential Leadership Philosophy
              </cite>
            </div>
          </div>
        </div>

        {/* Vision Pillars */}
        <div className={`pillars-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="pillars-title">Presidential Vision Pillars</h2>
          <div className="pillars-grid">
            {[
              {
                title: "Transformational Leadership",
                description: "Leading organizational transformation through visionary thinking and strategic decision-making that drives sustainable growth.",
                color: "blue-cyan"
              },
              {
                title: "Innovation Excellence",
                description: "Fostering a culture of continuous innovation where breakthrough ideas flourish and cutting-edge solutions emerge.",
                color: "purple-pink"
              },
              {
                title: "Stakeholder Empowerment",
                description: "Creating an environment where every stakeholder is empowered to contribute their best and achieve collective success.",
                color: "green-teal"
              }
            ].map((pillar, index) => (
              <div key={index} className="pillar-card">
                <h4 className={`pillar-title ${pillar.color}`}>
                  {pillar.title}
                </h4>
                <p className="pillar-description">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className="mission-statement">
            <h3 className="mission-title">Presidential Mission Statement</h3>
            <p className="mission-text">
              As President, my vision is to guide our organization toward unprecedented heights of achievement while maintaining our core values of integrity, innovation, and excellence. Together, we will create a legacy of positive impact that extends far beyond our immediate goals.
            </p>
            <div className="values-tags">
              {["Visionary Leadership", "Strategic Excellence", "Sustainable Growth", "Collective Success"].map((value, index) => (
                <span key={index} className="value-tag">
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Focus Areas */}
          <div className="focus-areas-grid">
            {[
              {
                title: "Strategic Vision Implementation",
                description: "Developing and executing comprehensive strategies that position our organization as an industry leader while ensuring sustainable long-term growth and market relevance.",
                color: "blue-indigo"
              },
              {
                title: "Organizational Excellence",
                description: "Building a world-class organization that attracts top talent, fosters innovation, and delivers exceptional value to all stakeholders through operational excellence.",
                color: "purple-pink"
              },
              {
                title: "Future-Ready Leadership",
                description: "Preparing our organization for tomorrow's challenges by developing adaptive leadership capabilities and embracing emerging technologies and methodologies.",
                color: "green-emerald"
              },
              {
                title: "Impact & Legacy",
                description: "Creating meaningful impact that extends beyond business metrics, focusing on positive contributions to society and building a lasting legacy of excellence.",
                color: "orange-red"
              }
            ].map((focus, index) => (
              <div key={index} className="focus-card">
                <h4 className={`focus-title ${focus.color}`}>
                  {focus.title}
                </h4>
                <p className="focus-description">
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Glow Effect */}
      <div className="footer-glow"></div>
    </div>
  );
};

export default PresidentVision;
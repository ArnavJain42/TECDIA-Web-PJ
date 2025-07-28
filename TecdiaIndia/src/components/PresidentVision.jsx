import React from 'react';
import ProfileCard from './ProfileCard';

const PresidentVision = () => {
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
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="content-container">
        <div className="header">
          <h1 className="main-title">President's Vision</h1>
          <div className="title-underline"></div>
        </div>

        <div className="vision-grid">
          <div className="left-side">
            <div className="profile-card-wrapper">
              <ProfileCard
                name="President Name"
                title="President of the Republic"
                handle="president"
                status="Leading the Nation"
                contactText="Contact Office"
                avatarUrl="/path/to/president-avatar.jpg"
                showUserInfo={true}
                enableTilt={true}
                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(15,100%,60%,var(--card-opacity)) 4%,hsla(30,80%,50%,calc(var(--card-opacity)*0.75)) 10%,hsla(45,60%,40%,calc(var(--card-opacity)*0.5)) 50%,hsla(55,40%,30%,0) 100%)"
                innerGradient="linear-gradient(145deg,#ffb347 0%,#ff6b6b 100%)"
                onContactClick={() => console.log('Contact President Office clicked')}
              />
            </div>
          </div>

          <div className="right-side">
            <div className="vision-box">
              <h2 className="vision-title">Our Vision for Tomorrow</h2>
              <p className="vision-text">
                Leading our nation towards a brighter future through innovation, unity, and unwavering commitment to progress. Together, we build tomorrow.
              </p>
              <p className="vision-subtext">
                Every citizen deserves opportunities to thrive, and every dream deserves the chance to become reality. We stand united in our mission to create lasting change.
              </p>
            </div>

            <div className="quote-box">
              <blockquote>
                "The future belongs to those who believe in the beauty of their dreams and work tirelessly to make them reality."
              </blockquote>
              <cite>- Presidential Quote</cite>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Glow */}
      <div className="footer-glow"></div>
    </div>
  );
};

export default PresidentVision;

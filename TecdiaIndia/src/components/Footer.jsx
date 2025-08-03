const translations = {
  en: {
    logoText: "TECDIA",
    text: "Changing the world with unconventional ideas and team power.",
    follow: "Follow Us",
    linkedin: "LinkedIn",
    X: "X",
    facebook: "Facebook",
    insta: "Instagram",
    reserved : "2025 TECDIA. All rights reserved.",
    policy: "Privacy Policy",
    term: "Terms of Service",
    career: "Careers"
  },
  jp: {
    logoText: "テクダイヤ",
    text: "型破りなアイデアとチームの力で世界を変える。",
    follow: "フォローする",
    linkedin: "LinkedIn",
    X: "X",
    facebook: "Facebook",
    insta: "Instagram",
    reserved: "2025 テクダイヤ. 全著作権所有。",
    policy: "プライバシーポリシー",
    term: "利用規約",
    career: "採用情報"

  },
  cn: {
    logoText: "特克迪亚",
    text: "以非凡创意与团队力量改变世界。",
    follow: "关注我们",
    linkedin: "LinkedIn",
    X: "X",
    facebook: "Facebook",
    insta: "Instagram",
    reserved: "2025 特克迪亚。版权所有。",
    policy: "隐私政策",
    term: "服务条款",
    career: "加入我们"

  }
}

export default function Footer({language}) {

  const t = translations[language]

  return (
    <>
      <footer className="footer">
        {/* Animated background elements */}
        <div className="bg-elements">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
        
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column brand-column">
              <div className="brand-wrapper">
                <h3 className="footer-brand">
                  <span className="brand-text">{t.logoText}</span>
                  <div className="brand-underline"></div>
                </h3>
                <div className="brand-glow"></div>
              </div>
              <p className="footer-text tagline">
                {t.text}
              </p>
              <div className="tech-pattern">
                <div className="pattern-line"></div>
                <div className="pattern-dot"></div>
                <div className="pattern-line"></div>
              </div>
            </div>

            

            <div className="footer-column social-column">
              <h4 className="footer-heading-orange">
                <span className="heading-icon">🚀</span>
                {t.follow}
              </h4>
              <div className="footer-socials">
                {[
                  { name: t.linkedin, icon: "💼", color: "#0077b5" },
                  { name: t.X, icon: "🐦", color: "#1da1f2" },
                  { name: t.facebook, icon: "📘", color: "#1877f2" },
                  { name: t.insta, icon: "📸", color: "#e4405f" }
                ].map((social) => (
                  <a key={social.name} href="#" className="social-link" data-platform={social.name.toLowerCase()}>
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                    <div className="social-hover-bg" style={{"--hover-color": social.color}}></div>
                  </a>
                ))}
              </div>
              
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {t.reserved}</p>
              <div className="footer-links">
                <a href="#" className="footer-link">{t.policy}</a>
                <span className="separator">•</span>
                <a href="#" className="footer-link">{t.term}</a>
                <span className="separator">•</span>
                <a href="#" className="footer-link">{t.career}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          position: relative;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          color: white;
          padding: 80px 20px 0;
          overflow: hidden;
        }

        .bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
        }

        .orb-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 150px;
          height: 150px;
          top: 60%;
          right: 10%;
        }

        .orb-3 {
          width: 100px;
          height: 100px;
          top: 30%;
          right: 30%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.1); }
        }

        .footer-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          z-index: 2;
        }

        .footer-grid {
          display: flex;
          justify-content: space-evenly;
          align-items:start;
          gap: 60px;
          margin-bottom: 60px;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.2fr 1fr 1fr;
            gap: 80px;
          }
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .brand-column {
          position: relative;
        }

        .brand-wrapper {
          position: relative;
          display: inline-block;
        }

        .footer-brand {
          position: relative;
          font-size: 42px;
          font-weight: 900;
          color: #3b82f6;
          letter-spacing: 3px;
          font-family: 'Orbitron', sans-serif;
          margin: 0;
        }

        .brand-text {
          position: relative;
          z-index: 2;
        }

        .brand-underline {
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 4px;
          border-radius: 2px;
        }

        @keyframes brandUnderline {
          0%, 100% { width: 0; }
          50% { width: 100%; }
        }

        .brand-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent);
          animation: glow 4s ease-in-out infinite;
          border-radius: 20px;
        }

        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }

        .tagline {
          font-size: 18px;
          color: #cbd5e1;
          line-height: 1.7;
          font-style: italic;
        }

        .tech-pattern {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
        }

        .pattern-line {
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          flex: 1;
        }

        .pattern-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .footer-heading-green, .footer-heading-orange {
          font-size: 24px;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .footer-heading-green {
          color: #22c55e;
        }

        .footer-heading-orange {
          color: #f97316;
        }

        .heading-icon {
          font-size: 28px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateX(8px);
        }

        .contact-icon {
          font-size: 20px;
          margin-top: 2px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-label {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .contact-link {
          color: #22c55e;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .contact-link:hover {
          color: #16a34a;
          text-decoration: underline;
        }

        .contact-value {
          color: #e2e8f0;
          font-weight: 500;
        }

        .footer-socials {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .social-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: #d1d5db;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .social-hover-bg {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: var(--hover-color);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .social-link:hover .social-hover-bg {
          left: 0;
          opacity: 0.1;
        }

        .social-link:hover {
          border-color: var(--hover-color);
          color: white;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        .social-icon {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .social-link:hover .social-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .social-name {
          position: relative;
          z-index: 2;
        }

        .newsletter-signup {
          margin-top: 24px;
          padding: 24px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .newsletter-title {
          color: #f97316;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .newsletter-form {
          display: flex;
          gap: 8px;
        }

        .newsletter-input {
          flex: 1;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }

        .newsletter-input::placeholder {
          color: #94a3b8;
        }

        .newsletter-input:focus {
          border-color: #3b82f6;
          background: rgba(255, 255, 255, 0.15);
        }

        .newsletter-btn {
          padding: 12px 20px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          background: linear-gradient(135deg, #2563eb, #1e40af);
          transform: translateY(-2px);
        }

        .footer-bottom {
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 40px 0 20px;
          margin-top: 40px;
        }

        .footer-bottom-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }

        @media (min-width: 768px) {
          .footer-bottom-content {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #3b82f6;
        }

        .separator {
          color: #374151;
        }

        .footer-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .footer-wave svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 60px;
        }

        .footer-wave svg path {
          fill: #0f172a;
        }

        @media (max-width: 767px) {
          .footer {
            padding: 60px 20px 0;
          }
          
          .footer-brand {
            font-size: 32px;
          }
          
          .footer-socials {
            grid-template-columns: 1fr;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-brand">TECDIA</h3>
              <p className="footer-text">
                Changing the world with unconventional ideas and team power.
              </p>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading-green">Contact</h4>
              <p className="footer-text">
                📧 Email: careers@tecdia.com<br />
                📞 Phone: +91 XXXXX XXXXX<br />
                📍 Address: Mumbai, India
              </p>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading-orange">Follow Us</h4>
              <div className="footer-socials">
                {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((social) => (
                  <a key={social} href="#" className="social-link">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 TECDIA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style>{`
        .footer {
          background: linear-gradient(to bottom right, #111827, #0f172a);
          color: white;
          padding: 64px 20px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .footer-brand {
          font-size: 32px;
          font-weight: 900;
          color: #3b82f6;
          letter-spacing: 2px;
          font-family: 'Orbitron', sans-serif;
        }

        .footer-heading-green {
          font-size: 20px;
          font-weight: bold;
          color: #22c55e;
        }

        .footer-heading-orange {
          font-size: 20px;
          font-weight: bold;
          color: #f97316;
        }

        .footer-text {
          color: #d1d5db;
          line-height: 1.6;
        }

        .footer-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .social-link {
          padding: 10px 20px;
          border: 2px solid #374151;
          border-radius: 9999px;
          color: #d1d5db;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }

        .social-link:hover {
          border-color: #3b82f6;
          background-color: #3b82f6;
          color: white;
          transform: translateY(-4px);
        }

        .footer-bottom {
          border-top: 1px solid #1f2937;
          padding-top: 32px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}

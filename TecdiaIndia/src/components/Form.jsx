import { useState, useEffect, useRef } from "react";

function Header() {
  return (
    <header
      style={{
        background:
          "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
        padding: "1rem 0",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: "0 4px 30px rgba(37, 99, 235, 0.4)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.3em",
              background: "linear-gradient(45deg, #ffffff, #e0e7ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
            }}
          >
            TECDIA
          </div>
          <div
            style={{
              fontSize: "1rem",
              color: "#fbbf24",
              fontFamily: "Noto Sans JP, sans-serif",
              fontWeight: 500,
            }}
          >
            テクディア
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero Section with Japanese aesthetics
function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        marginTop: "90px",
      }}
    >
      {/* Subtle background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: "float 20s ease-in-out infinite",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.3rem",
                color: "#fbbf24",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 500,
                marginBottom: "1rem",
                letterSpacing: "0.1em",
              }}
            >
              Your "Let's do this" will change the world
            </div>

            <h1
              style={{
                fontSize: "5rem",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
                marginBottom: "2rem",
                fontFamily: "Orbitron, monospace",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
                letterSpacing: "0.05em",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(45deg, #ffffff, #fbbf24, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                APPLICATION FORM
              </div>
            </h1>

            <p
              style={{
                fontSize: "1.4rem",
                color: "#fbbf24",
                lineHeight: 1.7,
                maxWidth: "700px",
                margin: "0 auto 3rem",
                fontStyle: "italic",
                display: "block",
                marginTop: "1rem",
              }}
            >
              Join our journey to surprise the world with unconventional ideas
              and team power.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          background: "white",
          clipPath: "polygon(0 50%, 100% 80%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>
    </section>
  );
}

// Recruitment Process Section

function RecruitmentProcess() {
  const cardsRef = useRef([]);

  const steps = [
    {
      number: 1,
      title: "Entry/Application",
      description: "Submit your application through our online form",
      color: "#2563eb",
    },
    {
      number: 2,
      title: "Company Information Session",
      description:
        "Online or in-person session with company introduction, president talk, and Q&A",
      color: "#16a34a",
    },
    {
      number: 3,
      title: "Document Screening",
      description: "Send resume or OPEN ES via email or LINE",
      color: "#ea580c",
    },
    {
      number: 4,
      title: "Web Test",
      description: "Online assessment of your skills and knowledge",
      color: "#7c3aed",
    },
    {
      number: 5,
      title: "First Interview",
      description:
        "One-on-one with HR team member (online available for distant candidates)",
      color: "#2563eb",
    },
    {
      number: 6,
      title: "Final Interview",
      description: "Personal interview with president (office visit required)",
      color: "#dc2626",
    },
    {
      number: 7,
      title: "Job Offer",
      description: "Welcome to the TECDIA family!",
      color: "#facc15",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        background: "#1e40af",
        minHeight: "100vh",
        padding: "6rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Light dot grid background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: "float 20s ease-in-out infinite",
        }}
      />

      <div
        style={{
          background: "#ffffff",
          borderRadius: "1rem",
          padding: "2rem",
          maxWidth: "1000px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            background: "#ea580c",
            padding: "1.5rem",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            margin: "-2rem -2rem 2rem -2rem",
            color: "white",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: "Orbitron, sans-serif",
            letterSpacing: "1px",
          }}
        >
          Recruitment Process
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {steps.map((step, idx) => (
            <div
              key={step.number}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="step-card"
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
                padding: "1.5rem",
                borderRadius: "1rem",
                backgroundColor: "#f9fafb",
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                opacity: 0,
                transform: "translateY(30px) scale(0.98)",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: step.color,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  flexShrink: 0,
                }}
              >
                {step.number}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: step.color,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#374151",
                    lineHeight: 1.6,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }

        .step-card {
          will-change: transform;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .step-card:hover {
          transform: perspective(600px) rotateX(3deg) rotateY(3deg) scale(1.03);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          z-index: 1;
          background-color: #ffffff;
        }

        .step-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: rotate(25deg);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step-card:hover::before {
          opacity: 1;
          animation: shimmerMove 1.5s linear infinite;
        }

        @keyframes shimmerMove {
          0% { transform: translateX(-100%) rotate(25deg); }
          100% { transform: translateX(100%) rotate(25deg); }
        }
      `}</style>
    </section>
  );
}

// Available Positions Section
function AvailablePositions() {
  const positions = [
    {
      title: "Technical Position",
      icon: "🔧",
      color: "#3b82f6",
      bg: "#eff6ff",
      items: [
        "Research & Development (R&D)",
        "Manufacturing/Quality Control",
        "Quality Assurance",
        "IT Development",
      ],
    },
    {
      title: "Sales Position",
      icon: "📈",
      color: "#22c55e",
      bg: "#ecfdf5",
      items: ["Domestic Sales", "International Sales", "Global Sales"],
    },
    {
      title: "Administrative Position",
      icon: "📋",
      color: "#f97316",
      bg: "#fff7ed",
      items: [
        "Trade Operations / Import & Export",
        "Production Management",
        "General Affairs / Administration",
      ],
    },
  ];

  return (
    <section
      style={{
        background: "#ffff7ed",
        padding: "6rem 2rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "1rem",
          padding: "3rem",
          maxWidth: "1200px",
          width: "100%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#16a34a",
            color: "white",
            padding: "1.5rem",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: "Orbitron, sans-serif",
            margin: "-3rem -3rem 3rem -3rem",
            letterSpacing: "1px",
          }}
        >
          Available Positions
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {positions.map((pos, index) => (
            <div
              key={index}
              style={{
                backgroundColor: pos.bg,
                borderRadius: "1rem",
                padding: "2rem",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{pos.icon}</span>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: pos.color,
                    fontFamily: "Orbitron, sans-serif",
                  }}
                >
                  {pos.title}
                </h3>
              </div>

              <ul
                style={{
                  paddingLeft: "1.5rem",
                  lineHeight: "1.8",
                  color: "#374151",
                }}
              >
                {pos.items.map((item, idx) => (
                  <li key={idx} style={{ listStyle: "disc" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Application Form Section

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#f59e0b';
  
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: bgColor,
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        maxWidth: '400px',
        animation: 'slideIn 0.3s ease-out'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>{message}</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
            cursor: 'pointer',
            marginLeft: '1rem'
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};

// Country codes data with phone validation patterns
const countryCodes = [
  { code: '+1', country: 'US/CA', flag: '🇺🇸', pattern: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/, length: 10 },
  { code: '+91', country: 'IN', flag: '🇮🇳', pattern: /^[6-9]\d{9}$/, length: 10 },
  { code: '+44', country: 'UK', flag: '🇬🇧', pattern: /^[1-9]\d{8,9}$/, length: [9, 10] },
  { code: '+33', country: 'FR', flag: '🇫🇷', pattern: /^[1-9]\d{8}$/, length: 9 },
  { code: '+49', country: 'DE', flag: '🇩🇪', pattern: /^[1-9]\d{10,11}$/, length: [11, 12] },
  { code: '+81', country: 'JP', flag: '🇯🇵', pattern: /^[7-9]\d{9}$/, length: 10 },
  { code: '+86', country: 'CN', flag: '🇨🇳', pattern: /^1[3-9]\d{9}$/, length: 11 },
  { code: '+61', country: 'AU', flag: '🇦🇺', pattern: /^[2-5]\d{8}$/, length: 9 },
  { code: '+7', country: 'RU', flag: '🇷🇺', pattern: /^9\d{9}$/, length: 10 },
  { code: '+55', country: 'BR', flag: '🇧🇷', pattern: /^[1-9]\d{10}$/, length: 11 }
];

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    position: "",
    resumeLink: "",
    additionalQuery: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [emailValidating, setEmailValidating] = useState(false);
  const [phoneValidating, setPhoneValidating] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkEmailExists = async (email) => {
    if (!validateEmail(email)) return false;
    
    try {
      // Check if email has valid MX record (simplified check)
      const domain = email.split('@')[1];
      const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com', 'icloud.com'];
      
      // For demo purposes, we'll check against common domains
      // In production, you might want to use a proper email validation service
      if (!commonDomains.includes(domain.toLowerCase())) {
        // For non-common domains, we'll accept them but could add more validation
        return true;
      }
      
      return true;
    } catch (error) {
      return false;
    }
  };

  const validatePhone = (phone, countryCode) => {
    const selectedCountry = countryCodes.find(c => c.code === countryCode);
    if (!selectedCountry) return false;
    
    const cleanPhone = phone.replace(/\s+/g, '');
    
    // Check length first
    if (Array.isArray(selectedCountry.length)) {
      if (!selectedCountry.length.includes(cleanPhone.length)) return false;
    } else {
      if (cleanPhone.length !== selectedCountry.length) return false;
    }
    
    // Check pattern
    return selectedCountry.pattern.test(cleanPhone);
  };

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = async () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    } else {
      setEmailValidating(true);
      const emailExists = await checkEmailExists(formData.email);
      setEmailValidating(false);
      
      if (!emailExists) {
        newErrors.email = "Please enter a valid email address with a recognized domain";
      }
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone, formData.countryCode)) {
      const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);
      const expectedLength = Array.isArray(selectedCountry?.length) 
        ? selectedCountry.length.join(' or ') 
        : selectedCountry?.length;
      newErrors.phone = `Please enter a valid ${selectedCountry?.country} phone number (${expectedLength} digits)`;
    }

    // Position validation
    if (!formData.position) {
      newErrors.position = "Please select a position";
    }

    // Resume link validation
    if (!formData.resumeLink.trim()) {
      newErrors.resumeLink = "Resume link is required";
    } else if (!validateUrl(formData.resumeLink)) {
      newErrors.resumeLink = "Please enter a valid URL";
    }

    // Terms validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isValid = await validateForm();
    if (!isValid) {
      showToast("Please fix the errors in the form", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data according to API schema
      const apiData = {
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        position: formData.position,
        resumeLink: formData.resumeLink,
        additionalQuery: formData.additionalQuery || ""
      };

      const response = await fetch('http://localhost:5000/api/applications/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apiData)
      });

      const result = await response.json();

      if (!response.ok) {
        // Display the actual error message from the API
        const errorMessage = result.message || result.error || `Server error: ${response.status}`;
        showToast(errorMessage, "error");
        return;
      }

      showToast("Application submitted successfully! 🎉", "success");
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        position: "",
        resumeLink: "",
        additionalQuery: "",
        agreeTerms: false,
      });
      
    } catch (error) {
      console.error('Error submitting application:', error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        showToast("Network error: Unable to connect to server", "error");
      } else {
        showToast("An unexpected error occurred", "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (hasError) => ({
    padding: "1.2rem",
    border: `2px solid ${hasError ? '#ef4444' : '#e5e7eb'}`,
    borderRadius: "12px",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s ease"
  });

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
    color: "#1f2937",
    display: "block",
    fontSize: "1.05rem",
  };

  const errorStyle = {
    color: "#ef4444",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
    display: "block"
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      <section
        style={{
          padding: "6rem 0",
          background: "#FF8C00",
          minHeight: "100vh"
        }}
      >
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          <div
            style={{
              color: "white",
              padding: "1.5rem",
              textAlign: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "Orbitron, sans-serif",
              margin: "-3rem -3rem 3rem -3rem",
              letterSpacing: "1px",
            }}
          >
            Apply Now
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "3rem",
              boxShadow: "0 15px 50px rgba(0, 0, 0, 0.1)",
              border: "2px solid #facc15",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle(errors.name)}
                  placeholder="Enter your full name"
                />
                {errors.name && <span style={errorStyle}>{errors.name}</span>}
              </div>

              <div>
                <label style={labelStyle}>Email *</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={inputStyle(errors.email)}
                    placeholder="your.email@example.com"
                  />
                  {emailValidating && (
                    <div style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#f59e0b'
                    }}>
                      ⏳
                    </div>
                  )}
                </div>
                {errors.email && <span style={errorStyle}>{errors.email}</span>}
              </div>

              <div>
                <label style={labelStyle}>Phone Number *</label>
                <div style={{ display: "flex", gap: "0.5rem", position: 'relative' }}>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    style={{
                      ...inputStyle(false),
                      width: "140px",
                      flexShrink: 0
                    }}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={inputStyle(errors.phone)}
                    placeholder={
                      formData.countryCode === '+91' ? '9876543210' :
                      formData.countryCode === '+1' ? '2345678901' :
                      formData.countryCode === '+44' ? '7700900123' :
                      '1234567890'
                    }
                  />
                  {phoneValidating && (
                    <div style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#f59e0b'
                    }}>
                      ⏳
                    </div>
                  )}
                </div>
                {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>
                  {(() => {
                    const country = countryCodes.find(c => c.code === formData.countryCode);
                    const length = Array.isArray(country?.length) ? country.length.join(' or ') : country?.length;
                    return `Enter ${length} digits for ${country?.country}`;
                  })()}
                </div>
              </div>

              <div>
                <label style={labelStyle}>Position Applying For *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  style={inputStyle(errors.position)}
                >
                  <option value="">Select a position</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="DevOps Engineer">DevOps Engineer</option>
                </select>
                {errors.position && <span style={errorStyle}>{errors.position}</span>}
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label style={labelStyle}>Resume Link *</label>
              <div
                style={{
                  border: `2px solid ${errors.resumeLink ? '#ef4444' : '#f59e0b'}`,
                  borderRadius: "15px",
                  padding: "1.5rem",
                  background: "#fff7ed",
                  position: "relative"
                }}
              >
                <input
                  type="url"
                  name="resumeLink"
                  placeholder="https://drive.google.com/file/d/... or https://example.com/resume.pdf"
                  value={formData.resumeLink}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "1rem",
                    background: "#ffffff",
                    outline: "none",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                  }}
                />
                <div style={{ 
                  fontSize: "0.9rem", 
                  color: "#6b7280", 
                  marginTop: "0.5rem",
                  textAlign: "center" 
                }}>
                  Paste your resume link (Google Drive, Dropbox, or direct PDF link)
                </div>
              </div>
              {errors.resumeLink && <span style={errorStyle}>{errors.resumeLink}</span>}
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label style={labelStyle}>Additional Query</label>
              <textarea
                name="additionalQuery"
                value={formData.additionalQuery}
                onChange={handleInputChange}
                placeholder="Any questions or additional information you'd like to share..."
                style={{ ...inputStyle(false), minHeight: "120px", resize: "vertical" }}
              />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label
                style={{ 
                  display: "flex", 
                  gap: "1rem", 
                  alignItems: "flex-start",
                  cursor: "pointer"
                }}
              >
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  style={{ 
                    width: "20px", 
                    height: "20px",
                    marginTop: "2px"
                  }}
                />
                <span style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                  I agree to the Terms and Conditions and Privacy Policy *
                </span>
              </label>
              {errors.agreeTerms && <span style={errorStyle}>{errors.agreeTerms}</span>}
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? "#9ca3af" 
                    : "linear-gradient(to right, #f59e0b, #f97316)",
                  color: "white",
                  border: "none",
                  padding: "1rem 3rem",
                  borderRadius: "40px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                {isSubmitting ? "⏳ Submitting..." : "🚀 Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </section>

      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}

// Scrolling Banner with Japanese phrases
function ScrollingBanner() {
  const bannerText = ["WORK HARD", "PLAY HARD", "LET'S DO THIS!"];

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, #2563eb, #16a34a, #ea580c, #2563eb, #16a34a, #ea580c)",
        padding: "2rem 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
        `}
      </style>
      <div style={{ display: "flex", animation: "scroll 40s linear infinite" }}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              alignItems: "center",
            }}
          >
            {bannerText.map((text, index) => (
              <span
                key={index}
                style={{
                  color: "white",
                  fontWeight: 900,
                  fontSize: "2rem",
                  margin: "0 4rem",
                  textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  fontFamily: text.match(
                    /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/
                  )
                    ? "Noto Sans JP, sans-serif"
                    : "Orbitron, monospace",
                  letterSpacing: "0.1em",
                  overflow: "hidden",
                }}
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// Footer with Japanese elements
function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
        color: "white",
        padding: "4rem 0 2rem",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <h3
              style={{
                fontSize: "3rem",
                fontWeight: 900,
                color: "#2563eb",
                letterSpacing: "0.2em",
                fontFamily: "Orbitron, monospace",
                textShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
              }}
            >
              TECDIA
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 1.8,
                fontSize: "1.1rem",
              }}
            >
              Changing the world with unconventional ideas and team power.
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <h4
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#16a34a",
                marginBottom: "1rem",
                fontFamily: "Zen Kaku Gothic New, sans-serif",
              }}
            >
              Contact
            </h4>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: 2,
                fontSize: "1.1rem",
              }}
            >
              📧 Email: careers@tecdia.com
              <br />
              📞 Phone: +91 XXXXX XXXXX
              <br />
              📍 Address: Mumbai, India
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <h4
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#ea580c",
                marginBottom: "1rem",
                fontFamily: "Zen Kaku Gothic New, sans-serif",
              }}
            >
              Follow Us
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      textDecoration: "none",
                      padding: "1rem 1.5rem",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderRadius: "30px",
                      display: "inline-block",
                      transition: "all 0.3s ease",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "#2563eb";
                      e.target.style.background = "#2563eb";
                      e.target.style.color = "white";
                      e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                      e.target.style.background = "transparent";
                      e.target.style.color = "rgba(255, 255, 255, 0.8)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    {social}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "2px solid rgba(255, 255, 255, 0.2)",
            paddingTop: "2rem",
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "1rem",
          }}
        >
          <p>&copy; 2024 TECDIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function Form() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          fontFamily: "Orbitron, monospace",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "2rem" }}>⚡</div>
        <div>Loading TECDIA...</div>
        <div
          style={{
            fontFamily: "Noto Sans JP, sans-serif",
            fontSize: "1.5rem",
            color: "#fbbf24",
            marginTop: "1rem",
          }}
        >
          読み込み中...
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh" , overflow: "hidden" }}>
      <Header />
      <Hero />
      <RecruitmentProcess />
      <AvailablePositions />
      <ApplicationForm />
      <ScrollingBanner/>
      <Footer />
    </div>
  );
}

export default Form;












// import React, { useState } from 'react';
// import { User, Cpu, BarChart3, CheckCircle } from 'lucide-react';

// export default function Form() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     position: '',
//     experience: '',
//     coverLetter: '',
//     resume: null,
//     agreeToTerms: false
//   });

//   const [currentStep, setCurrentStep] = useState(1);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredStep, setHoveredStep] = useState(null);
//   const [isButtonHovered, setIsButtonHovered] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       resume: e.target.files[0]
//     }));
//   };

//   const handleSubmit = () => {
//     if (!formData.agreeToTerms) {
//       alert('Please agree to the terms & conditions and privacy policies');
//       return;
//     }
//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.position) {
//       alert('Please fill in all required fields');
//       return;
//     }
//     console.log('Form submitted:', formData);
//     alert('Application submitted successfully!');
//   };

//   const positions = [
//     {
//       title: 'Technical Position',
//       icon: <Cpu className="w-8 h-8 text-orange-500" />,
//       roles: ['Research & Development (R&D)', 'Manufacturing/Quality Control', 'Quality Assurance', 'IT Development']
//     },
//     {
//       title: 'Sales Position', 
//       icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
//       roles: ['Domestic Sales', 'International Sales', 'Global Sales']
//     },
//     {
//       title: 'Administrative Position',
//       icon: <User className="w-8 h-8 text-orange-500" />,
//       roles: ['Trade Operations / Import & Export', 'Production Management', 'General Affairs / Administration']
//     }
//   ];

//   const recruitmentSteps = [
//     { step: 1, title: 'Apply/Application', description: 'Submit your application through our online form or email' },
//     { step: 2, title: 'Company Information Session', description: 'Learn more about our company culture and values' },
//     { step: 3, title: 'Document Screening', description: 'Initial review of your qualifications and documents' },
//     { step: 4, title: 'Web Test', description: 'Complete our online assessment test' },
//     { step: 5, title: 'First Interview', description: 'Submit your application through our online form or email' },
//     { step: 6, title: 'Final Interview', description: 'Submit your application through our online form or email' },
//     { step: 7, title: 'Job Offer', description: 'Submit your application through our online form or email' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-600 to-gray-900 text-white font-sans">
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-16 text-5xl font-bold leading-tight">
//           <h1>
//             <span className="text-orange-500">AVAILABLE</span>
//             <br />
//             <span className="text-white">POSITIONS</span>
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {positions.map((position, index) => (
//             <div 
//               key={index} 
//               className={`bg-white rounded-2xl p-8 text-gray-700 shadow-xl transition-all duration-300 cursor-pointer 
//                 ${hoveredCard === index ? 'transform -translate-y-2 shadow-orange-500/20' : ''}`}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-6">{position.icon}</div>
//                 <h3 className="text-2xl font-bold mb-6">
//                   <span className="text-orange-500">{position.title.split(' ')[0]} </span>
//                   <span className="text-gray-700">{position.title.split(' ')[1]}</span>
//                 </h3>
//                 <ul className="list-none p-0 m-0">
//                   {position.roles.map((role, roleIndex) => (
//                     <li key={roleIndex} className="flex items-center text-sm mb-3 last:mb-0">
//                       <div className="w-2 h-2 bg-gray-700 rounded-full mr-3"></div>
//                       {role}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mb-20">
//           <div className="text-center mb-16 text-5xl font-bold leading-tight">
//             <h2>
//               <span className="text-orange-500">RECRUITMENT</span>
//               <br />
//               <span className="text-white">PROCESS</span>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//             {recruitmentSteps.map((step, index) => (
//               <div 
//                 key={index} 
//                 className={`flex items-start gap-6 cursor-pointer transition-all duration-300 rounded-lg p-4 
//                   ${hoveredStep === index ? 'bg-white/5' : ''}`}
//                 onClick={() => setCurrentStep(step.step)}
//                 onMouseEnter={() => setHoveredStep(index)}
//                 onMouseLeave={() => setHoveredStep(null)}
//               >
//                 <div className="flex-shrink-0 flex flex-col items-center">
//                   <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-300 
//                     ${step.step <= currentStep ? 'bg-orange-500' : 'bg-gray-600'}`}>
//                     {step.step <= currentStep ? (
//                       <CheckCircle className="w-6 h-6" />
//                     ) : (
//                       step.step
//                     )}
//                   </div>
//                   {index < recruitmentSteps.length - 1 && (
//                     <div className={`w-0.5 h-16 ml-6 mt-2 transition-all duration-300 
//                       ${step.step < currentStep ? 'bg-orange-500' : 'bg-gray-600'}`}></div>
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <div className="text-sm text-orange-500 font-semibold mb-1">STEP {step.step.toString().padStart(2, '0')}</div>
//                   <h3 className={`text-xl font-bold mb-2 transition-all duration-300 
//                     ${step.step <= currentStep ? 'text-white' : 'text-gray-400'}`}>{step.title}</h3>
//                   <p className={`text-sm transition-all duration-300 
//                     ${step.step <= currentStep ? 'text-gray-300' : 'text-gray-500'}`}>{step.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-5xl font-bold leading-tight">
//               <span className="text-orange-500">APPLICATION</span>
//               <br />
//               <span className="text-white">FORM</span>
//             </h2>
//             <p className="text-xl text-gray-300 mb-4 mt-4">Take the first step towards joining our team</p>
//             <p className="text-lg text-gray-400">Fill out the form below to apply</p>
//           </div>

//           <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-2xl border border-white/20">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//               <div>
//                 <label htmlFor="firstName" className="block text-white font-semibold mb-3">First Name</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="lastName" className="block text-white font-semibold mb-3">Last Name</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//               <div>
//                 <label htmlFor="email" className="block text-white font-semibold mb-3">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block text-white font-semibold mb-3">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//               <div>
//                 <label htmlFor="position" className="block text-white font-semibold mb-3">Position Applied For</label>
//                 <select
//                   id="position"
//                   name="position"
//                   value={formData.position}
//                   onChange={handleInputChange}
//                   className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
//                 >
//                   <option value="">Select Position</option>
//                   <option value="technical">Technical Position</option>
//                   <option value="sales">Sales Position</option>
//                   <option value="administrative">Administrative Position</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="experience" className="block text-white font-semibold mb-3">Years of Experience</label>
//                 <input
//                   type="number"
//                   id="experience"
//                   name="experience"
//                   value={formData.experience}
//                   onChange={handleInputChange}
//                   className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 focus:ring-2 focus:ring-orange-400"
//                   min="0"
//                 />
//               </div>
//             </div>

//             <div className="mb-8">
//               <label htmlFor="coverLetter" className="block text-white font-semibold mb-3">Cover Letter</label>
//               <textarea
//                 id="coverLetter"
//                 name="coverLetter"
//                 value={formData.coverLetter}
//                 onChange={handleInputChange}
//                 rows={6}
//                 className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 resize-none font-sans focus:ring-2 focus:ring-orange-400"
//                 placeholder="Tell us about yourself and why you're interested in this position..."
//               ></textarea>
//             </div>

//             <div className="mb-8">
//               <label htmlFor="resume" className="block text-white font-semibold mb-3">Resume/CV</label>
//               <input
//                 type="file"
//                 id="resume"
//                 name="resume"
//                 onChange={handleFileChange}
//                 accept=".pdf,.doc,.docx"
//                 className="w-full p-3.5 rounded-lg bg-white border-2 border-orange-500 text-gray-700 text-base outline-none transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200 cursor-pointer focus:ring-2 focus:ring-orange-400"
//               />
//             </div>

//             <div className="mb-8">
//               <label htmlFor="agreeToTerms" className="flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   id="agreeToTerms"
//                   name="agreeToTerms"
//                   checked={formData.agreeToTerms}
//                   onChange={handleInputChange}
//                   className="w-5 h-5 accent-orange-500 mr-3"
//                 />
//                 <span className="text-white">
//                   I agree to the <span className="text-orange-500 underline">terms & conditions</span> & <span className="text-orange-500 underline">privacy policies</span>
//                 </span>
//               </label>
//             </div>

//             <div className="text-center">
//               <button
//                 onClick={handleSubmit}
//                 className={`bg-orange-500 text-white font-bold py-4 px-12 rounded-lg text-lg border-none cursor-pointer transition-all duration-300 shadow-lg 
//                   ${isButtonHovered ? 'bg-orange-600 transform scale-105 shadow-orange-500/30' : ''}`}
//                 onMouseEnter={() => setIsButtonHovered(true)}
//                 onMouseLeave={() => setIsButtonHovered(false)}
//               >
//                 SUBMIT →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
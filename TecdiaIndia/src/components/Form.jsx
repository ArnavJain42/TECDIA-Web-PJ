/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import LanguageToggle from "./LanguageToggle";
import Footer from "./Footer";
import { useLanguage } from '../contexts/LanguageContext.jsx';

const translations = {
  en: {
    apply: "Back to home",
    logoText: "TECDIA",
    herotext1: "Your 'Let's do this' will change the world",
    herotext2: "APPLICATION FORM",
    herotext3: "Join our journey to surprise the world with unconventional ideas and team power.",
    recruithead: "Recruitment Process",
    retitle1: "Entry/Application",
    retitle2: "Company Information Session",
    retitle3: "Document Screening",
    retitle4: "Web Test",
    retitle5: "First Interview",
    retitle6: "Final Interview",
    retitle7: "Job Offer",
    retext1: "Submit your application through our online form",
    retext2: "Online or in-person session with company introduction, president talk, and Q&A",
    retext3: "Send resume or OPEN ES via email or LINE",
    retext4: "Online assessment of your skills and knowledge",
    retext5: "One-on-one with HR team member (online available for distant candidates)",
    retext6: "Personal interview with president (office visit required)",
    retext7: "Welcome to the TECDIA family!",

    availtitle1: "Technical Position",
    availtitle2: "Sales Position",
    availtitle3: "Administrative Position",
    availitems1:[
        "Research & Development (R&D)",
        "Manufacturing/Quality Control",
        "Quality Assurance",
        "IT Development",
      ],
    availitems2: ["Domestic Sales", "International Sales", "Global Sales"],
    availitems3: [
        "Trade Operations / Import & Export",
        "Production Management",
        "General Affairs / Administration",
      ],

    availhead: "Available Positions",
    errmess1: "Full name is required",
    errmess2: "Name must be at least 2 characters long",
    errmess3: "Email is required",
    errmess4: "Please enter a valid email address",
    errmess5: "Please enter a valid email address with a recognized domain",
    errmess6: "Phone number is required",
    errmess7: "Please enter a valid ${selectedCountry?.country} phone number (${expectedLength} digits)",
    errmess8: "Please select a position",
    errmess9: "Resume link is required",
    errmess10: "Please enter a valid URL",
    errmess11: "You must agree to the terms and conditions",
    toasterr1: "Please fix the errors in the form",
    toasterr2: "Application submitted successfully! 🎉",
    toasterr3: "Network error: Unable to connect to server",
    toasterr4: "An unexpected error occurred",
    applyhead: "Apply Now",
    applyname: "Full Name *",
    applyemail: "Email Address *",
    applyphone: "Phone Number *",
    applyposition: "Position Applying For *",
    applyresume: "Resume Link *",
    applyterms: "I agree to the terms and conditions *",
    applyquery: "Additional Query",
    applysubmit: "🚀 Submit Application",
    applysubmitting: "⏳ Submitting..." ,
    w: "WORK HARD",
    p: "PLAY HARD", 
    l: "LET'S DO THIS!",
    nameplace: "Enter your full name",
    emailplace: "your.email@example.com",
    phoneplace: "Enter ${length} digits for ${country?.country}",
    positionplace: "Select a position",
    pos1: "Frontend Developer",
    pos2: "Backend Developer",
    pos3: "Full Stack Developer",
    pos4: "UI/UX Developer",
    pos5: "Product Manager",
    po6: "Devops Engineer",
    linkplace: "Paste your resume link (Google Drive, Dropbox, or direct PDF link)",
    queryplace: "Any questions or additional information you'd like to share...",

  },
  jp: {
    apply: "ホームに戻る",
    logoText: "テクダイヤ",
    herotext1: "あなたの「やろう」は世界を変える",
    herotext2: "アプリケーションフォーム",
    herotext3: "常識を覆すアイデアとチームの力で世界を驚かせる旅に参加しよう。",
    recruithead: "採用プロセス",
    retitle1: "エントリー/応募",
    retitle2: "会社説明会",
    retitle3: "書類選考",
    retitle4: "Webテスト",
    retitle5: "一次面接",
    retitle6: "最終面接",
    retitle7: "内定",
    retext1: "オンラインフォームから応募を提出してください",
    retext2: "会社紹介、社長の話、Q&Aを含むオンラインまたは対面のセッション",
    retext3: "メールまたはLINEで履歴書またはOPEN ESを送信",
    retext4: "あなたのスキルと知識を評価するオンラインアセスメント",
    retext5: "HRチームメンバーとの1対1の面接（遠方の候補者にはオンライン対応）",
    retext6: "社長との個別面接（オフィス訪問が必要）",
    retext7: "TECDIAファミリーへようこそ！",
    availtitle1: "技術職",
    availtitle2: "営業職",
    availtitle3: "管理職",
    availitems1: [
      "研究開発 (R&D)",
      "製造/品質管理",
      "品質保証",
      "IT開発",
    ],
    availitems2: ["国内営業", "国際営業", "グローバル営業"],
    availitems3: [
      "貿易業務 / 輸出入",
      "生産管理",
      "総務 / 管理",
    ],
    availhead: "募集職種",
    errmess1: "フルネームは必須です",
    errmess2: "名前は2文字以上でなければなりません",
    errmess3: "メールアドレスは必須です",
    errmess4: "有効なメールアドレスを入力してください",
    errmess5: "認識されたドメインの有効なメールアドレスを入力してください",
    errmess6: "電話番号は必須です",
    errmess7: "有効な${selectedCountry?.country}の電話番号を入力してください（${expectedLength}桁）",
    errmess8: "ポジションを選択してください",
    errmess9: "履歴書のリンクは必須です",
    errmess10: "有効なURLを入力してください",
    errmess11: "利用規約に同意する必要があります",
    toasterr1: "フォームのエラーを修正してください",
    toasterr2: "応募が正常に送信されました！ 🎉",
    toasterr3: "ネットワークエラー：サーバーに接続できません",
    toasterr4: "予期しないエラーが発生しました",
    applyhead: "今すぐ応募",
    applyname: "フルネーム *",
    applyemail: "メールアドレス *",
    applyphone: "電話番号 *",
    applyposition: "応募職種 *",
    applyresume: "履歴書のリンク *",
    applyterms: "利用規約に同意します *",
    applyquery: "追加の問い合わせ",
    applysubmit: "🚀 応募を送信" ,
    applysubmitting: "⏳ 送信中...",
    w: "働きます",
      p: "遊びます",    
      l: "やりましょう！",
    nameplace: "氏名を入力してください",
    emailplace: "your.email@example.com",
    phoneplace: "${country?.country}の電話番号を${length}桁で入力してください",
    positionplace: "希望する職種を選択してください",
    pos1: "フロントエンド開発者",
    pos2: "バックエンド開発者",
    pos3: "フルスタック開発者",
    pos4: "UI/UX開発者",
    pos5: "プロダクトマネージャー",
    po6: "DevOpsエンジニア",
    linkplace: "履歴書のリンクを貼り付けてください（Google Drive、Dropbox、またはPDFの直接リンク）",
    queryplace: "ご質問や追加情報があればご記入ください..."




    
  },
  cn: {
    apply: "返回首页",
    logoText: "技术迪亚",
    herotext1: "你的让我们来做吧将改变世界",
    herotext2: "申请表",
    herotext3: "加入我们，用非常规的想法和团队的力量来惊艳世界。",
    recruithead: "招聘流程",
    retitle1: "申请/报名",
    retitle2: "公司介绍会",
    retitle3: "文件筛选",
    retitle4: "网络测试",
    retitle5: "第一次面试",
    retitle6: "最终面试",
    retitle7: "工作邀请",
    retext1: "通过我们的在线表格提交申请",
    retext2: "在线或面对面的会议，介绍公司、总裁演讲和问答",
    retext3: "通过电子邮件或LINE发送简历或OPEN ES",
    retext4: "在线评估您的技能和知识",
    retext5: "与人力资源团队成员的一对一面试（远程候选人可在线进行）",
    retext6: "与总裁的个人面试（需要访问办公室）",
    retext7: "欢迎加入TECDIA大家庭！",
    availtitle1: "技术职位",
    availtitle2: "销售职位",
    availtitle3: "行政职位",
    availitems1: [
      "研究与开发 (R&D)",
      "制造/质量控制",
      "质量保证",
      "IT开发",
    ],
    availitems2: ["国内销售", "国际销售", "全球销售"],
    availitems3: [
      "贸易操作 / 进出口",
      "生产管理",
      "总务 / 行政",
    ],
    availhead: "可用职位",
    errmess1: "全名是必需的",
    errmess2: "姓名必须至少2个字符",
    errmess3: "电子邮件是必需的",
    errmess4: "请输入有效的电子邮件地址",
    errmess5: "请输入具有认可域名的有效电子邮件地址",
    errmess6: "电话号码是必需的",
    errmess7: "请输入有效的${selectedCountry?.country}电话号码（${expectedLength}位）",
    errmess8: "请选择一个职位",
    errmess9: "简历链接是必需的",
    errmess10: "请输入有效的URL",
    errmess11: "您必须同意条款和条件",
    toasterr1: "请修正表单中的错误",
    toasterr2: "申请已成功提交！ 🎉",
    toasterr3: "网络错误：无法连接到服务器",
    toasterr4: "发生了意外错误",
    applyhead: "立即申请",
    applyname: "全名 *",
    applyemail: "电子邮件地址 *",
    applyphone: "电话号码 *",
    applyposition: "申请职位 *",
    applyresume: "简历链接 *",
    applyterms: "我同意条款和条件 *",
    applyquery: "附加查询",
    applysubmit: "🚀 提交申请",
    applysubmitting: "⏳ 提交中...",
    w: "努力工作",
      p: "尽情玩乐",
      l: "让我们开始吧！",
    nameplace: "请输入您的全名",
    emailplace: "your.email@example.com",
    phoneplace: "请输入${country?.country}的${length}位电话号码",
    positionplace: "请选择一个职位",
    pos1: "前端开发工程师",
    pos2: "后端开发工程师",
    pos3: "全栈开发工程师",
    pos4: "UI/UX 开发工程师",
    pos5: "产品经理",
    po6: "DevOps 工程师",
    linkplace: "粘贴您的简历链接（Google Drive、Dropbox 或直接的 PDF 链接）",
    queryplace: "如有任何问题或其他想分享的信息，请填写..."

  },
};


// Hero Section with Japanese aesthetics
function Hero({language}) {

  const t = translations[language] || translations.en;

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
        padding: "0 1rem",
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
          padding: "2rem 1rem",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "clamp(1rem, 3vw, 1.3rem)",
                color: "#ffffff",
                fontFamily: "Noto Sans JP, sans-serif",
                fontWeight: 500,
                marginBottom: "1rem",
                letterSpacing: "0.1em",
              }}
            >
              {t.herotext1}
            </div>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
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
                    "linear-gradient(45deg, #ffffff, #ffffff, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer 3s ease-in-out infinite",
                }}
              >
                {t.herotext2}
              </div>
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 3vw, 1.4rem)",
                color: "#ffffff",
                lineHeight: 1.7,
                maxWidth: "700px",
                margin: "0 auto 3rem",
                fontStyle: "italic",
                display: "block",
                marginTop: "1rem",
                padding: "0 1rem",
              }}
            >
              {t.herotext3}
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
function RecruitmentProcess({language}) {
  const cardsRef = useRef([]);

  const t = translations[language] || translations.en;

  const steps = [
    {
      number: 1,
      title: t.retitle1,
      description: t.retext1,
      color: "#2563eb",
    },
    {
      number: 2,
      title: t.retitle2,
      description:
        t.retext2,
      color: "#16a34a",
    },
    {
      number: 3,
      title: t.retitle3,
      description: t.retext3,
      color: "#ea580c",
    },
    {
      number: 4,
      title: t.retitle4,
      description: t.retext4,
      color: "#7c3aed",
    },
    {
      number: 5,
      title: t.retitle5,
      description:
        t.retext5,
      color: "#2563eb",
    },
    {
      number: 6,
      title: t.retitle6,
      description: t.retext6,
      color: "#dc2626",
    },
    {
      number: 7,
      title: t.retitle7,
      description: t.retext7,
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
        padding: "3rem 1rem",
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
          padding: "1.5rem",
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
            padding: "1rem",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            margin: "-1.5rem -1.5rem 1.5rem -1.5rem",
            color: "white",
            textAlign: "center",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: "bold",
            fontFamily: "Orbitron, sans-serif",
            letterSpacing: "1px",
          }}
        >
          {t.recruithead}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
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
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                    fontWeight: 700,
                    color: step.color,
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
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

        @media (hover: hover) {
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
function AvailablePositions({language}) {

  const t = translations[language] || translations.en;

  const positions = [
    {
      title: t.availtitle1,
      icon: "🔧",
      color: "#3b82f6",
      bg: "#eff6ff",
      items: t.availitems1,
    },
    {
      title: t.availtitle2,
      icon: "📈",
      color: "#22c55e",
      bg: "#ecfdf5",
      items: t.availitems2,
    },
    {
      title: t.availtitle3,
      icon: "📋",
      color: "#f97316",
      bg: "#fff7ed",
      items: t.availitems3,
    },
  ];

  return (
    <section
      style={{
        background: "#f9fafb",
        padding: "3rem 1rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "1rem",
          padding: "2rem 1.5rem",
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
            padding: "1rem",
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            textAlign: "center",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: "bold",
            fontFamily: "Orbitron, sans-serif",
            margin: "-2rem -1.5rem 2rem -1.5rem",
            letterSpacing: "1px",
          }}
        >
          {t.availhead}
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
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
                if (window.innerWidth > 768) {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.1)";
                }
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
                  flexWrap: "wrap",
                }}
              >
                <span style={{ fontSize: "2rem" }}>{pos.icon}</span>
                <h3
                  style={{
                    fontSize: "clamp(1.2rem, 3vw, 1.3rem)",
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
                  <li 
                    key={idx} 
                    style={{ 
                      listStyle: "disc",
                      fontSize: "clamp(0.9rem, 2vw, 1rem)",
                      marginBottom: "0.5rem"
                    }}
                  >
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
const Toast = ({ message, type, onClose, language }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#f59e0b';

  // const result = translate(message, { to: language });


  
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        left: '20px',
        background: bgColor,
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
        maxWidth: '400px',
        marginLeft: 'auto',
        animation: 'slideIn 0.3s ease-out',
        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
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
          ×
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

function ApplicationForm({language}) {
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
  // eslint-disable-next-line no-unused-vars
  const [phoneValidating, setPhoneValidating] = useState(false);
  const t = translations[language] || translations.en;
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
      newErrors.name = t.errmess1;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t.errmess2;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = t.errmess3;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.errmess4;
    } else {
      setEmailValidating(true);
      const emailExists = await checkEmailExists(formData.email);
      setEmailValidating(false);
      
      if (!emailExists) {
        newErrors.email = t.errmess5;
      }
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone =  t.errmess6;
    } else if (!validatePhone(formData.phone, formData.countryCode)) {
      const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);
      const expectedLength = Array.isArray(selectedCountry?.length) 
        ? selectedCountry.length.join(' or ') 
        : selectedCountry?.length;
      newErrors.phone = t.errmess7.replace('${selectedCountry?.country}', selectedCountry?.country).replace('${expectedLength}', expectedLength);
    }

    // Position validation
    if (!formData.position) {
      newErrors.position = t.errmess8;
    }

    // Resume link validation
    if (!formData.resumeLink.trim()) {
      newErrors.resumeLink =  t.errmess9;
    } else if (!validateUrl(formData.resumeLink)) {
      newErrors.resumeLink = t.errmess10;
    }

    // Terms validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = t.errmess11;
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
      showToast(t.toasterr1, "error");
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

      const response = await fetch('https://tecdia-ind-backend.onrender.com/api/applications/apply', {
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

      showToast(t.toasterr2, "success");
      
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
        showToast(t.toasterr3, "error");
      } else {
        showToast(t.toasterr4, "error");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (hasError) => ({
    padding: "1rem",
    border: `2px solid ${hasError ? '#ef4444' : '#e5e7eb'}`,
    borderRadius: "12px",
    fontSize: "clamp(0.9rem, 2vw, 1rem)",
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
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
  };

  const errorStyle = {
    color: "#ef4444",
    fontSize: "clamp(0.8rem, 1.8vw, 0.875rem)",
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
          language={language}
        />
      )}
      
      <section
        style={{
          padding: "3rem 1rem",
          background: "#FF8C00",
          minHeight: "100vh"
        }}
      >
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            style={{
              color: "white",
              padding: "1rem",
              textAlign: "center",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              fontWeight: "bold",
              fontFamily: "Orbitron, sans-serif",
              margin: "0 0 2rem 0",
              letterSpacing: "1px",
            }}
          >
           {t.applyhead}
          </div>

          <form
            onSubmit={handleSubmit}
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "clamp(1.5rem, 4vw, 3rem)",
              boxShadow: "0 15px 50px rgba(0, 0, 0, 0.1)",
              border: "2px solid #facc15",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <label style={labelStyle}>{t.applyname}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle(errors.name)}
                  placeholder={t.nameplace}
                />
                {errors.name && <span style={errorStyle}>{errors.name}</span>}
              </div>

              <div>
                <label style={labelStyle}>{t.applyemail}</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={inputStyle(errors.email)}
                    placeholder={t.emailplace}
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
                <label style={labelStyle}>{t.applyphone}</label>
                <div style={{ display: "flex", gap: "0.5rem", position: 'relative', flexWrap: "wrap" }}>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    style={{
                      ...inputStyle(false),
                      width: "100%",
                      minWidth: "120px",
                      maxWidth: "140px",
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
                    style={{
                      ...inputStyle(errors.phone),
                      flex: 1,
                      minWidth: "150px"
                    }}
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
                <div style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.8rem)', color: '#6b7280', marginTop: '0.25rem' }}>
                  {(() => {
                    const country = countryCodes.find(c => c.code === formData.countryCode);
                    const length = Array.isArray(country?.length) ? country.length.join(' or ') : country?.length;
                    return t.phoneplace.replace('${length',`${length}`).replace("${country?.country}", `${country?.country}`) ;
                  })()}
                </div>
              </div>

              <div>
                <label style={labelStyle}>{t.applyposition}</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  style={inputStyle(errors.position)}
                >
                  <option value="">{t.positionplace}</option>
                  <option value="Frontend Developer">{t.pos1}</option>
                  <option value="Backend Developer">{t.pos2}</option>
                  <option value="Full Stack Developer">{t.pos3}</option>
                  <option value="UI/UX Designer">{t.pos4}</option>
                  <option value="Product Manager">{t.pos5}</option>
                  <option value="DevOps Engineer">{t.pos6}</option>
                </select>
                {errors.position && <span style={errorStyle}>{errors.position}</span>}
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label style={labelStyle}>{t.applyresume}</label>
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
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    background: "#ffffff",
                    outline: "none",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    boxSizing: "border-box"
                  }}
                />
                <div style={{ 
                  fontSize: "clamp(0.8rem, 2vw, 0.9rem)", 
                  color: "#6b7280", 
                  marginTop: "0.5rem",
                  textAlign: "center" 
                }}>
                  {t.linkplace}
                </div>
              </div>
              {errors.resumeLink && <span style={errorStyle}>{errors.resumeLink}</span>}
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label style={labelStyle}>{t.applyquery}</label>
              <textarea
                name="additionalQuery"
                value={formData.additionalQuery}
                onChange={handleInputChange}
                placeholder={t.queryplace}
                style={{ 
                  ...inputStyle(false), 
                  minHeight: "120px", 
                  resize: "vertical",
                  fontFamily: "inherit"
                }}
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
                    marginTop: "2px",
                    flexShrink: 0
                  }}
                />
                <span style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)", lineHeight: "1.5" }}>
                  {t.applyterms}
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
                  padding: "1rem 2rem",
                  borderRadius: "40px",
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  fontWeight: "bold",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.7 : 1,
                  width: "100%",
                  maxWidth: "300px"
                }}
              >
                {isSubmitting ? t.applysubmitting : t.applysubmit}
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

          @media (max-width: 768px) {
            input, select, textarea {
              font-size: 16px !important; /* Prevents zoom on iOS */
            }
          }
        `}
      </style>
    </>
  );
}

// Scrolling Banner with Japanese phrases
function ScrollingBanner({language}) {
  const bannerText = [translations[language].w, translations[language].p, translations[language].l];

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
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  margin: "0 clamp(2rem, 6vw, 4rem)",
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



// Main App Component  
function Form() {
  // Use global language context instead of local state
  const { language } = useLanguage();
  const t = translations[language]

  return (
    
    <div style={{ minHeight: "100vh", overflow: "hidden" }}>
      <img src="./logo-tecdia.png" alt="Logo" className="logo" style={{left: '5px'}}/>
        <a
        href="/"
        rel="noopener noreferrer"
      ><button className="apply-btn" style={{position: 'fixed', top: '20px', right: '10px'}}>
        {t.apply} 
      </button></a>
      <div className="language-toggle-container">
        <LanguageToggle />
      </div>
      <Hero language={language}/>
      <RecruitmentProcess language={language} />
      <AvailablePositions language={language} />
      <ApplicationForm language={language} />
      <ScrollingBanner language={language}/>
      <Footer language={language}/>
    </div>
  );
}

export default Form;
import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

const translations = {
  en: {
    head: "President's Vision",
    title: "Presidential Vision Statement",
    content1: "My vision as President is to lead our organization into a new era of transformational excellence. We will establish ourselves as pioneers in our field, driving meaningful change that creates lasting value for all stakeholders.",
    content2: "Through strategic leadership, innovative thinking, and unwavering commitment to our values, we will build an organization that not only achieves remarkable success but also makes a positive impact on the world around us.",
    quote: '"True leadership is about creating a vision so compelling that others are inspired to join you in making it reality. Together, we will achieve what seemed impossible."',
    writer: "- Presidential Leadership Philosophy",
    pillarhead: "Presidential Vision Pillars",
    pillartitle1: "Transformational Leadership",
    pillarcontent1: "Leading organizational transformation through visionary thinking and strategic decision-making that drives sustainable growth.",
    pillartitle2: "Innovation Excellence",
    pillarcontent2: "Fostering a culture of continuous innovation where breakthrough ideas flourish and cutting-edge solutions emerge.",
    pillartitle3: "Stakeholder Empowerment",
    pillarcontent3: "Creating an environment where every stakeholder is empowered to contribute their best and achieve collective success.",
    statementhead: "Presidential Mission Statement",
    statementcontent: "As President, my vision is to guide our organization toward unprecedented heights of achievement while maintaining our core values of integrity, innovation, and excellence. Together, we will create a legacy of positive impact that extends far beyond our immediate goals.",
    statementtitle1:"Strategic Vision Implementation" ,
    statementtitle2:"Organizational Excellence" ,
    statementtitle3: "Future-Ready Leadership",
    statementtitle4: "Impact & Legacy",
    statementcontent1: "Developing and executing comprehensive strategies that position our organization as an industry leader while ensuring sustainable long-term growth and market relevance.",
    statementcontent2: "Building a world-class organization that attracts top talent, fosters innovation, and delivers exceptional value to all stakeholders through operational excellence.", 
    statementcontent3: "Preparing our organization for tomorrow's challenges by developing adaptive leadership capabilities and embracing emerging technologies and methodologies.",
    statementcontent4: "Creating meaningful impact that extends beyond business metrics, focusing on positive contributions to society and building a lasting legacy of excellence.",
    map: ["Visionary Leadership", "Strategic Excellence", "Sustainable Growth", "Collective Success"],

  },
  jp:{
    head: "大統領のビジョン",
    title: "大統領のビジョン声明",
    content1: "私の大統領としてのビジョンは、当組織を変革的卓越性の新時代へと導くことです。私たちは分野における先駆者としての地位を確立し、すべてのステークホルダーに持続的な価値をもたらす意義ある変化を推進します。",
    content2: "戦略的リーダーシップ、革新的思考、そして私たちの価値観への揺るぎないコミットメントを通じて、並外れた成功を収めるだけでなく、社会に良い影響を与える組織を築いていきます。",
    quote: "「真のリーダーシップとは、人々が共に実現したくなるほど魅力的なビジョンを創造することです。共に、不可能と思えたことを成し遂げましょう。」",
    writer: "- 大統領のリーダーシップ哲学",
    pillarhead: "大統領のビジョンの柱",
    pillartitle1: "変革型リーダーシップ",
    pillarcontent1: "持続可能な成長を促すビジョナリーな思考と戦略的意思決定によって組織の変革を導く。",
    pillartitle2: "イノベーションの卓越性",
    pillarcontent2: "画期的なアイデアが育ち、最先端のソリューションが生まれる継続的なイノベーション文化を育む。",
    pillartitle3: "ステークホルダーのエンパワーメント",
    pillarcontent3: "すべてのステークホルダーが最善を尽くし、共に成功できる環境を創出する。",
    statementhead: "大統領のミッションステートメント",
    statementcontent: "大統領として、私は誠実さ、革新性、卓越性という中核的価値観を保ちながら、前例のない達成の高みへと当組織を導くことを目指します。共に、目先の目標を超えた前向きな影響の遺産を築きましょう。",
    statementtitle1: "戦略的ビジョンの実行",
    statementtitle2: "組織の卓越性",
    statementtitle3: "未来志向のリーダーシップ",
    statementtitle4: "インパクトとレガシー",
    statementcontent1: "持続可能な長期成長と市場での関連性を確保しながら、業界のリーダーとしての地位を確立する包括的な戦略を策定・実行する。",
    statementcontent2: "優秀な人材を引き寄せ、イノベーションを促進し、卓越した運営を通じてすべてのステークホルダーに優れた価値を提供する世界クラスの組織を構築する。",
    statementcontent3: "適応力あるリーダーシップを育成し、新興技術や方法論を取り入れることで、明日の課題に対応できる組織を準備する。",
    statementcontent4: "ビジネス指標を超えた意義あるインパクトを創出し、社会への前向きな貢献に焦点を当て、卓越性の永続的な遺産を築く。",
    map: ["ビジョナリーリーダーシップ", "戦略的卓越性", "持続可能な成長", "集団的成功"]


  },
  cn:{
    head: "总统愿景",
    title: "总统愿景声明",
    content1: "作为总统，我的愿景是引领我们的组织迈入一个变革性卓越的新纪元。我们将确立行业先驱地位，推动具有深远影响的变革，为所有利益相关者创造持久价值。",
    content2: "通过战略领导、创新思维，以及对核心价值观的坚定承诺，我们将建设一个不仅取得卓越成功、而且对周围世界产生积极影响的组织。",
    quote: "“真正的领导力，是创造一个如此有吸引力的愿景，以至于他人愿意与你共同努力，将它变为现实。我们将一起实现曾被认为不可能的目标。”",
    writer: "- 总统领导哲学",
    pillarhead: "总统愿景支柱",
    pillartitle1: "变革型领导力",
    pillarcontent1: "通过远见卓识和战略决策，引领组织变革，推动可持续增长。",
    pillartitle2: "创新卓越",
    pillarcontent2: "营造持续创新的文化，让突破性思维蓬勃发展，催生尖端解决方案。",
    pillartitle3: "利益相关者赋能",
    pillarcontent3: "打造一个让每位利益相关者都能发挥所长、实现共同成功的环境。",
    statementhead: "总统使命声明",
    statementcontent: "作为总统，我的愿景是在坚守诚信、创新和卓越核心价值观的基础上，引领组织达到前所未有的成就高峰。我们将共同创造超越短期目标、具有长远影响的卓越传承。",
    statementtitle1: "战略愿景实施",
    statementtitle2: "组织卓越",
    statementtitle3: "面向未来的领导力",
    statementtitle4: "影响力与传承",
    statementcontent1: "制定并执行全面战略，使我们的组织在行业中处于领先地位，同时确保长期可持续增长与市场相关性。",
    statementcontent2: "打造一个世界级组织，吸引顶尖人才，促进创新，并通过卓越运营为所有利益相关者提供卓越价值。",
    statementcontent3: "通过培养适应性强的领导能力，拥抱新兴技术和方法，为未来挑战做好准备。",
    statementcontent4: "创造超越商业指标的深远影响，关注对社会的积极贡献，并建立持久卓越的传承。",
    map: ["远见卓识的领导力", "战略卓越", "可持续增长", "共同成功"]


  },
}

const PresidentVision = ({language}) => {
  const t = translations[language]
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
          <h1 className="main-title">{t.head}</h1>
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
              language={language}
            />
          </div>

          {/* Right Side: Vision Content */}
          <div className={`vision-content ${isVisible ? 'visible' : ''}`}>
            <div className="vision-statement-card">
              <h2 className="section-title">{t.title}</h2>
              <p className="vision-text primary">
                {t.content1}
              </p>
              <p className="vision-text secondary">
                {t.content2}
              </p>
            </div>

            <div className="quote-card">
              <blockquote className="quote-text">
                {t.quote}
              </blockquote>
              <cite className="quote-attribution">
                {t.writer}
              </cite>
            </div>
          </div>
        </div>

        {/* Vision Pillars */}
        <div className={`pillars-section ${isVisible ? 'visible' : ''}`}>
          <h2 className="pillars-title">{t.pillarhead}</h2>
          <div className="pillars-grid">
            {[
              {
                title: t.pillartitle1,
                description: t.pillarcontent1,
                color: "blue-cyan"
              },
              {
                title: t.pillartitle2,
                description: t.pillarcontent2,
                color: "purple-pink"
              },
              {
                title: t.pillartitle3,
                description: t.pillarcontent3,
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
            <h3 className="mission-title">{t.statementhead}</h3>
            <p className="mission-text">
              {t.statementcontent}
            </p>
            <div className="values-tags">
              {t.map.map((value, index) => (
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
                title: t.statementtitle1,
                description: t.statementcontent1,
                color: "blue-indigo"
              },
              {
                title: t.statementtitle2,
                description: t.statementcontent2,
                color: "purple-pink"
              },
              {
                title: t.statementtitle3,
                description: t.statementcontent3,
                color: "green-emerald"
              },
              {
                title: t.statementtitle4,
                description: t.statementcontent4,
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
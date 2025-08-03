import ProductSlider from "./ProductSlider";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from '../contexts/LanguageContext.jsx';
import Footer from "./Footer.jsx";

const translations = {
    en : {
        apply: "Back to home",
        prodhead: "Our Products",
        prodtext1: "Tecdia: Pioneering Semiconductor and Precision Engineering Solutions",
        prodtext2: "Tecdia is a globally recognized leader in advanced semiconductor manufacturing and precision-engineered components, with over 45 years of innovation in ceramic-based technologies. Headquartered in Tokyo, Japan, the company has expanded its footprint across the U.S., Europe, the Philippines, and now India, serving industries like 5G telecommunications, aerospace, biomedical devices, and consumer electronics.",
        prodstandout: "Why Tecdia Stands Out?",
        prodtitle1: "Global R&D Strength:",
        prodtext1_1: "Facilities in Japan (Tokyo/Kyoto) and the U.S. (Silicon Valley) drive cutting-edge innovations.",
        prodtitle2: "Quality Certifications:",  
        prodtext2_1: "ISO 9001, ISO 13485 (medical devices), and ISO 14001 compliance ensure world-class standards.",
        prodtitle3: "Customer-Centric Approach:",   
        prodtext3_1: "Collaborative Kaizen culture and custom solutions (e.g., aspect-ratio-tailored capacitors) address niche demands.",
        prodtitle4: "Innovation:",
        prodtext4_1: "Holds the largest global market share for SLCs and pioneers miniaturized solutions.",
        prodtitle5: "Vertical Integration: ",
        prodtext5_1: "In-house dielectric production (Japan) and mass manufacturing (Philippines) ensure quality and cost control.",
        prodcta: "Join us to shape the future of high-frequency electronics and smart manufacturing!",
    },
    jp : {
        apply: "ホームに戻る",
        prodhead: "私たちの製品",
        prodtext1: "テクダイヤ：半導体と精密エンジニアリングソリューションの先駆者",
        prodtext2: "テクダイヤは、セラミックベースの技術において45年以上の革新を誇る、先進的な半導体製造と精密エンジニアリングコンポーネントのグローバルリーダーです。日本の東京に本社を置き、米国、ヨーロッパ、フィリピン、そしてインドに拠点を拡大し、5G通信、航空宇宙、医療機器、消費者エレクトロニクスなどの産業にサービスを提供しています。",
        prodstandout: "テクダイヤが際立つ理由",
        prodtitle1: "グローバルR&Dの強み：",
        prodtext1_1: "日本（東京/京都）と米国（シリコンバレー）の施設が最先端の革新を推進します。",
        prodtitle2: "品質認証：",
        prodtext2_1: "ISO 9001、ISO 13485（医療機器）、およびISO 14001の認証により、世界クラスの基準を確保しています。",
        prodtitle3: "顧客中心のアプローチ：",
        prodtext3_1: "協力的なカイゼン文化とカスタムソリューション（例：アスペクト比に応じたコンデンサ）がニッチな要求に対応します。",
        prodtitle4: "革新：",
        prodtext4_1: "SLCの世界最大の市場シェアを保持し、ミニチュア化ソリューションを先駆けています。",
        prodtitle5: "垂直統合：",
        prodtext5_1: "日本での自社誘電体生産とフィリピンでの大量生産により、品質とコスト管理を確保しています。",
        prodcta: "高周波エレクトロニクスとスマート製造の未来を共に形作りましょう！",
    },
    cn : {
        apply: "返回首页",
        prodhead: "我们的产品",
        prodtext1: "特克迪亚：半导体和精密工程解决方案的先驱",
        prodtext2: "特克迪亚是先进半导体制造和精密工程组件的全球领导者，拥有超过45年的陶瓷基础技术创新。公司总部位于日本东京，在美国、欧洲、菲律宾和印度设有分支机构，服务于5G通信、航空航天、生物医学设备和消费电子等行业。",
        prodstandout: "特克迪亚的独特之处",
        prodtitle1: "全球研发实力：",
        prodtext1_1: "日本（东京/京都）和美国（硅谷）的设施推动尖端创新。",
        prodtitle2: "质量认证：",
        prodtext2_1: "ISO 9001、ISO 13485（医疗设备）和ISO 14001认证确保世界级标准。",
        prodtitle3: "以客户为中心的方式：",
        prodtext3_1: "协作的Kaizen文化和定制解决方案（例如，按长宽比定制的电容器）满足细分市场需求。",
        prodtitle4: "创新：",
        prodtext4_1: "拥有SLC最大的全球市场份额，并率先推出微型化解决方案。",
        prodtitle5: "垂直整合：",
        prodtext5_1: "在日本进行自有介电材料生产，在菲律宾进行大规模制造，确保质量和成本控制。",
        prodcta: "加入我们，共同塑造高频电子和智能制造的未来！",
    }
}

const Product = () => {
    // Use global language context instead of local state
    // eslint-disable-next-line no-unused-vars
    const { language, setLanguage } = useLanguage();
    
    const t = translations[language]

  return (
    <div className="App-body">
        <img src="./logo-tecdia.png" alt="Logo" className="logo" style={{left: '5px'}}/>
        <a
        href="/"
        rel="noopener noreferrer"
        style={{cursor: 'pointer'}}
      ><button className="apply-btn" style={{position: 'fixed', top: '20px', right: '10px'}}>
       <span className="arrow">↖</span> {t.apply} 
      </button></a>
        <div className="language-toggle-container">
            <LanguageToggle />
        </div>
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>{t.prodhead}</h1>
          {/* <p>Discover our cutting-edge solutions across multiple industries</p> */}
          <div class="content">
            <p style={{textAlign: 'center'}}>{t.prodtext1}</p><br />
            <p class="intro-text">
              {t.prodtext2}
            </p>

            <h2 class="section-title">{t.prodstandout}</h2>
            
            <ul class="features-list">
                <li>
                    <div class="feature-content">
                        <div class="feature-title">{t.prodtitle1}</div>
                        <div class="feature-description">{t.prodtext1_1}</div>
                    </div>
                </li>
                <li>
                    <div class="feature-content">
                        <div class="feature-title">{t.prodtitle2}</div>
                        <div class="feature-description">{t.prodtext2_1}</div>
                    </div>
                </li>
                <li>
                    <div class="feature-content">
                        <div class="feature-title">{t.prodtitle3}</div>
                        <div class="feature-description">{t.prodtext3_1}</div>
                    </div>
                </li>
                <li>
                    <div class="feature-content">
                        <div class="feature-title">{t.prodtitle4}</div>
                        <div class="feature-description">{t.prodtext4_1}</div>
                    </div>
                </li>
                <li>
                    <div class="feature-content">
                        <div class="feature-title">{t.prodtitle5}</div>
                        <div class="feature-description">{t.prodtext5_1}</div>
                    </div>
                </li>
            </ul>

            <div class="cta">
                <h4>{t.prodcta}</h4>
            </div>
        </div>
        </header>
        <ProductSlider language={language}/>
      </div>
      
    </div>
    <Footer language={language}/>
    </div>
  );
}

export default Product;
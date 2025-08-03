import CircularGallery from "./CircularGallery";
import { Laptop, Umbrella, Calendar, Clock } from "lucide-react";


const translations = {
  en:{
    orghead: "TECDIA'S",
    orghead2: "ORGANIZATION CULTURE",
    workhead: "Work-life balance",
    worktext: "At TECDIA, we believe life is about more than work it’s about balancing your career with what truly matters. Whether it’s family time, hobbies, or personal downtime, we support it all. With flexible systems and a culture that values your well-being, we give you the freedom to thrive both inside and outside the office. Because a fulfilling life creates a successful career, and at TECDIA, we support the whole you.",
    cardtitle1: "Reclaim Your Evenings",
    cardtitle2:"126 Days Off Annually",
    cardtitle3: "Actually Use Your Vacation",
    cardtitle4: "Own Your Schedule",
    carddetail1: "Enjoy a healthy work-life balance. We keep monthly overtime to a record low of just 4.8 hours.",
    carddetail2:"Relax and recharge with over a third of the year off, including all weekends and public holidays.",
    carddetail3: "We don't just offer paid leave; we encourage it. Our 79.2% usage rate shows we want you to take that trip.",
    carddetail4:"Life isn't always 9-to-5. Our flextime system lets you adjust your work hours to fit your personal rhythm.",
    cert: "Certified as",
    certtitle: "Minato Ward Work-Life Balance Promotion Company",
    certcontent: "As a company that balances work and child-rearing and creates a comfortable working environment for everyone, Tecdia has been certified as a",
    certcontent2: '"Minato Ward Work-Life Balance Promotion Company"',
    certcontent3: "three times in a row from 2017 to 2021 and 2024. We will continue to work toward becoming a better company."
    

  },
  jp: {
    orghead: "テクダイの",
    orghead2: "組織文化",
    workhead: "ワークライフバランス",
    worktext: "テクダイでは、人生は仕事だけではなく、本当に大切なものとのバランスを取ることが重要だと考えています。家族との時間、趣味、個人のリラックスタイムなど、すべてを大切にしています。柔軟な制度と社員の健康を重視する企業文化のもと、オフィスの内外で充実した毎日を送れるようサポートしています。充実した人生が成功するキャリアを育みます。テクダイは、あなた全体をサポートします。",
    cardtitle1: "平日の夜は自分のものに",
    cardtitle2: "年間126日の休日",
    cardtitle3: "有休をしっかり活用",
    cardtitle4: "スケジュールは自分次第",
    carddetail1: "健全なワークライフバランスを実現。月間残業時間は平均4.8時間と、非常に低水準です。",
    carddetail2: "週末や祝日を含め、年間の3分の1以上がお休み。しっかり休んでリフレッシュできます。",
    carddetail3: "有給休暇は「あるだけ」ではなく、「使ってほしい」と考えています。有休取得率79.2％がその証拠です。",
    carddetail4: "人生はいつも9時から5時ではありません。フレックスタイム制で、自分のリズムに合わせた働き方が可能です。",
    cert: "認定実績",
    certtitle: "港区ワーク・ライフ・バランス推進企業",
    certcontent: "テクダイは、仕事と子育ての両立を支援し、誰もが働きやすい職場づくりを進める企業として、",
    certcontent2: "「港区ワーク・ライフ・バランス推進企業」",
    certcontent3: "に2017年から2021年および2024年まで、3期連続で認定されています。今後もより良い企業を目指して取り組んでまいります。"

  },
  cn : {
    orghead: "特克迪亚的",
    orghead2: "组织文化",
    workhead: "工作与生活的平衡",
    worktext: "在特克迪亚，我们相信生活不仅仅是工作，更是将职业与真正重要的事物保持平衡。无论是家庭时间、兴趣爱好还是个人休息，我们都全力支持。凭借灵活的制度和重视员工福祉的企业文化，我们让你在办公室内外都能自由发挥、茁壮成长。因为充实的人生才能成就成功的职业，在TECDIA，我们支持完整的你。",
    cardtitle1: "找回属于你的夜晚",
    cardtitle2: "每年126天假期",
    cardtitle3: "休假真的会用上",
    cardtitle4: "掌控你的时间表",
    carddetail1: "享受健康的工作与生活平衡。我们将月加班时间控制在平均仅4.8小时的超低水平。",
    carddetail2: "每年超过三分之一的时间都在休息，包括所有周末和法定节假日，让你彻底放松、恢复活力。",
    carddetail3: "我们不只是提供带薪休假，更鼓励你使用它。79.2%的休假使用率说明我们真心希望你去旅行、去放松。",
    carddetail4: "生活并不总是朝九晚五。我们的弹性工作制让你可以根据自己的节奏安排工作时间。",
    cert: "荣誉认证",
    certtitle: "港区工作与生活平衡促进企业",
    certcontent: "作为一家支持工作与育儿平衡，并致力于营造舒适工作环境的公司，TECDIA被认证为",
    certcontent2: "“港区工作与生活平衡促进企业”",
    certcontent3: "，并在2017年到2021年及2024年连续三次获得该认证。我们将持续努力，成为更加优秀的企业。"

  }
}; 

export default function OrganizationCulture({language}) {

  const t = translations[language]

  return (
    // Add responsive padding to the main section
    <section className="organization-section px-4 sm:px-6 lg:px-8">
      <div className="organization-wrapper max-w-7xl mx-auto">
        <div className="organization-header text-center">
          {/* Titles now use responsive text sizes from Tailwind */}
          <h1 className="organization-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            {t.orghead}
          </h1>
          <h2 className="organization-subtitle text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
            {t.orghead2}
          </h2>

          {/* Responsive container for the gallery, height adjusts with screen size */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] my-8">
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </div>

        {/* Work-Life Balance Section */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 mt-12">
          <div className="text-center mb-6 md:mb-8organization-heading-box">
            {/* Responsive heading for the section */}
            <h2 className="organization-heading text-3xl sm:text-4xl md:text-5xl">
              {t.workhead}
            </h2>
          </div>
          <br />
          <div className="flex flex-col xl:flex-row bg-pink-200 rounded-xl md:rounded-2xl items-stretch w-full max-w-7xl shadow-lg overflow-hidden">
            {/* Text Section */}
            <div className="w-full xl:w-1/2 p-4 sm:p-6 md:p-8 flex items-center">
              <p className="organization-paragraph text-sm sm:text-[2rem] md:text-lg leading-relaxed" style={{padding: '10px 20px'}}>
                {t.worktext}
              </p>
            </div>

            {/* Cards Section */}
            <div className="w-full xl:w-1/2 bg-pink-800 xl:rounded-r-xl md:xl:rounded-r-2xl rounded-b-xl md:rounded-b-2xl xl:rounded-b-none p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-6 h-auto xl:h-[600px] xl:content-center" style={{padding: "10px 20px"}}>
                <Card
                  title={t.cardtitle1title1}
                  content={t.carddetail1}
                  Icon={Laptop}
                  color="blue"
                />
                <Card
                  title={t.cardtitle1title2}
                  content={t.carddetail2}
                  Icon={Umbrella}
                  color="green"
                />
                <Card
                  title={t.cardtitle1title3}
                  content={t.carddetail3}
                  Icon={Calendar}
                  color="pink"
                />
                <Card
                  title={t.cardtitle1title4}
                  content={t.carddetail4}
                  Icon={Clock}
                  color="purple"
                />
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center">
          <div className="organization-heading">{t.cert}</div>
          {/* Certification */}
          <div className="flex flex-col items-center justify-center bg-[#fff4d7] w-[1400px] rounded-3xl">
            <div className="organization-certification-title ">
              <span>{t.certtitle}</span>
            </div>

            <div className="organization-certification-box w-full mt-6">
              {/* Layout switches from vertical to horizontal */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="organization-certification-logo border-solid border-4 flex-shrink-0">
                  {/* Responsive image size */}
                  <img
                    src="./minato.png"
                    alt="Minato"
                    className="w-[150px] md:w-[200px]"
                  />
                </div>
                <div className="organization-certification-text">
                  {/* Responsive font size and text alignment */}
                  <p className="text-base md:text-lg text-center md:text-left">
                    {t.certcontent}{" "}
                    <span className="highlighted-text">
                      {t.certcontent2}
                    </span>{" "}
                    {t.certcontent3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Card component remains the same, its container is now responsive.
// eslint-disable-next-line no-unused-vars
function Card({ title, content, Icon, color }) {
  return (
    <div className={`organization-card ${color}`}>
      <h3>{title}</h3>
      <p>{content}</p>
      <Icon className="organization-icon" strokeWidth={1.5} />
    </div>
  );
}
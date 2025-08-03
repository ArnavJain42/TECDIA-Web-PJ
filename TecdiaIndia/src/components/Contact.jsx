import React from 'react';
import { MapPin, Phone, Printer, Mail, Globe, Building, Award } from 'lucide-react';
import Footer from './Footer';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const translations = {
  en: {
    apply: "Back to home",
    contacthead: "Global Contact Information",
    contacttext: "Connect with TECDIA worldwide. Our global presence ensures we're always close to our customers, providing exceptional service and support across continents.",
  },
  jp: {
    apply: "ホームに戻る",
    contacthead: "グローバルコンタクト情報",
    contacttext: "テクダイヤと世界中でつながりましょう。私たちのグローバルな存在は、常にお客様の近くにいることを保証し、大陸を越えて卓越したサービスとサポートを提供します。",

  },
  cn: {
    apply: "返回首页",
    contacthead: "全球联系信息",
    contacttext: "与特克迪亚在全球范围内联系。我们的全球存在确保我们始终靠近客户，跨越大陆提供卓越的服务和支持。",
  },
};

const Contact = () => {
  // Use global language context instead of local state
  // eslint-disable-next-line no-unused-vars
  const { language, setLanguage } = useLanguage();
  
  const t = translations[language]
  
  const locations = [
    {
      id: 'japan',
      region: 'Japan',
      type: 'Headquarters',
      company: 'TECDIA Co., Ltd.',
      address: '〒108-0023 17F, SHIBAURA SQUARE BUILDING, 4-9-25 Shibaura, Minato-ku, Tokyo, 108-0023, Japan',
      tel: '‪+81-3-5765-5400‬',
      fax: '‪+81-3-5765-5404‬',
      email: 'sales@tecdia.co.jp',
      url: 'https://www.tecdia.com',
      bgColor: 'from-blue-600 to-blue-800',
      isHeadquarters: true
    },
    {
      id: 'philippines',
      region: 'Philippines',
      type: 'Manufacturing Site',
      company: 'TECDIA CEBU, INC.',
      address: 'Cor.3rd.St., 3rd Ave., MEPZA, Lapu-Lapu City, 6015 Cebu, Philippines',
      tel: '63-32-340-6024',
      fax: '‪+63-32-340-2467‬',
      url: 'https://tecdia.ph/',
      certifications: ['ISO9001', 'ISO14001', 'ISO13485'],
      bgColor: 'from-green-600 to-green-800'
    },
    {
      id: 'usa-main',
      region: 'United States',
      type: 'Sales Office',
      company: 'TECDIA INC.',
      address: '490 Jarvis Drive, Suite 12B-1, Morgan Hill, CA, 95037, U.S.A.',
      tel: '‪+1-408-748-0100‬',
      fax: '‪+1-408-748-0111‬',
      email: 'sales@tecdia.com',
      url: 'https://us.tecdia.com/contact/',
      bgColor: 'from-red-600 to-red-800'
    },
    {
      id: 'usa-rep',
      region: 'United States',
      type: 'Sales Representative',
      company: 'Sertech Inc.',
      address: '1380 Welsh Road Montgomeryville, PA 18936',
      regions: 'Regions: New Jersey, New York and Pennsylvania',
      tel: '‪+1-215-628-8085‬',
      fax: '+1-215-628-02425',
      mobile: '‪+1-267-614-6815‬',
      email: 'jpatterson@sertech.info',
      url: 'https://www.sertech.info',
      bgColor: 'from-purple-600 to-purple-800'
    },
    {
      id: 'europe',
      region: 'Europe',
      type: 'Sales Office',
      company: 'TECDIA INC. EUROPE BRANCH',
      address: 'Dalton House, 60 Windsor Avenue, London SW19 2RR, UK',
      tel: '‪+44-0-7739-913-581‬',
      email: 'sales@tecdia.com',
      url: 'https://us.tecdia.com/contact/',
      bgColor: 'from-indigo-600 to-indigo-800'
    },
    {
      id: 'taiwan',
      region: 'Taiwan',
      type: 'Sales Office',
      company: 'TECDIA TAIWAN Co., Ltd.',
      companyLocal: '捷科泰亞股份有限公司',
      address: '19F., No. 65, Sec. 2, Dunhua S. Rd., Da\'an Dist., Taipei City 106, Taiwan (R.O.C.)',
      tel: '‪+886-2-2955-5135‬',
      fax: '‪+886-2-2955-5136‬',
      email: 'sales_tw@tecdia.com',
      url: 'https://www.tecdia.com/tw/support/',
      bgColor: 'from-cyan-600 to-cyan-800'
    },
    {
      id: 'china-shanghai',
      region: 'China',
      type: 'Sales Office - Shanghai',
      company: 'TECDIA Co., Ltd. SHANGHAI',
      companyLocal: '科钻(上海)贸易有限公司',
      address: 'MET PLAZA RM. B805, No. 268 Tongxie Road, Changning District, Shanghai 200335, P. R. C. China',
      addressLocal: '上海市长宁区通协路268号尚品都汇B805室 邮编：200335',
      tel: '‪+86-21-6237-2208‬',
      fax: '‪+86-21-6237-2209‬',
      email: 'sales_ch@tecdia.com',
      url: 'https://www.tecdia.com.cn/contact-info/',
      bgColor: 'from-orange-600 to-orange-800'
    },
    {
      id: 'china-shenzhen',
      region: 'China',
      type: 'Sales Office - Shenzhen',
      company: 'TECDIA CO., LTD. SHANGHAI (SHENZHEN OFFICE)',
      companyLocal: '科钻(上海)贸易有限公司 深圳办事处',
      address: 'Xinggang Tongchuanghui Room 508, Yuheng Building 3 No. 6099 Fuhai Road, Baoan District, Shenzhen 518103',
      addressLocal: '深圳市宝安区宝安大道6099号星港同创汇3栋玉衡座508室',
      tel: '‪+86-755-8177-3669‬',
      email: 'sales_ch@tecdia.com',
      url: 'https://www.tecdia.cn/contact-info/',
      bgColor: 'from-yellow-600 to-yellow-800'
    },
    {
      id: 'china-chengdu',
      region: 'China',
      type: 'Sales Office - Chengdu',
      company: 'TECDIA CO., LTD. SHANGHAI (CHENGDU OFFICE)',
      companyLocal: '科钻(上海)贸易有限公司 成都办事处',
      address: 'FR-88-FR-91, Floor 9, Building 17, Yintai City, No. 1999, Yizhou Avenue, High tech Zone, Chengdu',
      addressLocal: '成都市高新区益州大道1999号成都银泰城17号楼9层FR-88-FR-91',
      email: 'sales_ch@tecdia.com',
      url: 'https://www.tecdia.cn/contact-info/',
      bgColor: 'from-pink-600 to-pink-800'
    },
    {
      id: 'israel',
      region: 'Israel',
      type: 'Sales Representative',
      company: 'Impact Electronics Ltd.',
      address: 'P.O Box: 436, Raanana 43104, Israel',
      tel: '+972-9-7446610',
      fax: '+972-9-7446620',
      email: 'impact@impactel.co.il',
      url: 'http://www.impactel.co.il/about_us.asp',
      bgColor: 'from-teal-600 to-teal-800'
    }
  ];

const ContactCard = ({ location }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className={`bg-gradient-to-r ${location.bgColor} p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{location.region}</h3>
          <p className="text-sm opacity-90">{location.type}</p>
          {location.isHeadquarters && (
            <div className="inline-flex items-center mt-2 px-2 py-1 bg-blur bg-opacity-20 rounded-full">
              <Building className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium ">Headquarters</span>
            </div>
          )}
        </div>
        {/* Map Pin with Google Maps link */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${location.company}, ${location.address}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          title="View on Google Maps"
        >
          <MapPin
            className="w-8 h-8 opacity-80 hover:text-white hover:scale-110 transition-transform cursor-pointer"
          />
        </a>

      </div>
    </div>
    
    <div className="p-6 space-y-4">
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">{location.company}</h4>
        {location.companyLocal && (
          <p className="text-gray-600 text-sm mb-2">{location.companyLocal}</p>
        )}
      </div>

      {location.regions && (
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-blue-800 text-sm font-medium">{location.regions}</p>
        </div>
      )}

      <div className="space-y-3">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-gray-700 text-sm leading-relaxed">{location.address}</p>
            {location.addressLocal && (
              <p className="text-gray-600 text-sm mt-1">{location.addressLocal}</p>
            )}
          </div>
        </div>

        {location.tel && (
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <a href={`tel:${location.tel}`} className="text-blue-600 hover:text-blue-800 text-sm">
              {location.tel}
            </a>
          </div>
        )}

        {location.fax && (
          <div className="flex items-center space-x-3">
            <Printer className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <div>
              <span className="text-xs text-gray-500 block">FAX</span>
              <span className="text-gray-700 text-sm">{location.fax}</span>
            </div>
          </div>
        )}

        {location.mobile && (
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
            <div>
              <span className="text-xs text-gray-500 block">Mobile</span>
              <a href={`tel:${location.mobile}`} className="text-green-600 hover:text-green-800 text-sm">
                {location.mobile}
              </a>
            </div>
          </div>
        )}

        {location.email && (
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <a href={`mailto:${location.email}`} className="text-blue-600 hover:text-blue-800 text-sm break-all">
              {location.email}
            </a>
          </div>
        )}

        {location.url && (
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <a 
              href={location.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm break-all"
            >
              {location.url}
            </a>
          </div>
        )}

        {location.certifications && (
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-medium text-sm">Certifications</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {location.certifications.map((cert, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

  const ComingSoonCard = () => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">India</h3>
            <p className="text-sm opacity-90">Future Location</p>
          </div>
          <Building className="w-8 h-8 opacity-80" />
        </div>
      </div>
      
      <div className="p-8 text-center">
        <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
          <Building className="w-10 h-10 text-gray-500" />
        </div>
        <h4 className="text-2xl font-bold text-gray-800 mb-2">Coming Soon In India</h4>
        <p className="text-gray-600">We're expanding our global presence. Stay tuned for updates on our Indian operations.</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
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
      {/* Header */}
      <div className="contact-head text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contacthead}</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {t.contacttext}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <ContactCard key={location.id} location={location} />
          ))}
          <ComingSoonCard />
        </div>
      </div>

      {/* Footer Note */}
      <Footer language={language}/>
    </div>
  );
};

export default Contact;




// import React, { useState } from 'react';
// import { X } from 'lucide-react';

// const Contact = () => {
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   const locations = [
//     {
//       id: 'japan',
//       name: 'Japan Headquarters',
//       company: 'TECDIA Co., Ltd.',
//       position: { x: 85, y: 35 },
//       details: {
//         address: '〒108-0023 17F, SHIBAURA SQUARE BUILDING, 4-9-25 Shibaura, Minato-ku, Tokyo, 108-0023, Japan',
//         tel: '‪+81-3-5765-5400‬',
//         fax: '‪+81-3-5765-5404‬',
//         email: 'sales@tecdia.co.jp',
//         url: 'https://www.tecdia.com'
//       }
//     },
//     {
//       id: 'philippines',
//       name: 'Philippines Manufacturing Site',
//       company: 'TECDIA CEBU, INC.',
//       position: { x: 75, y: 55 },
//       details: {
//         address: 'Cor.3rd.St., 3rd Ave., MEPZA, Lapu-Lapu City, 6015 Cebu, Philippines',
//         tel: '63-32-340-6024',
//         fax: '‪+63-32-340-2467‬',
//         url: 'https://tecdia.ph/',
//         certification: 'ISO9001, ISO14001, ISO13485 Certified'
//       }
//     },
//     {
//       id: 'usa-main',
//       name: 'U.S.A Sales Office',
//       company: 'TECDIA INC.',
//       position: { x: 15, y: 35 },
//       details: {
//         address: '490 Jarvis Drive, Suite 12B-1, Morgan Hill, CA, 95037, U.S.A.',
//         tel: '‪+1-408-748-0100‬',
//         fax: '‪+1-408-748-0111‬',
//         email: 'sales@tecdia.com',
//         url: 'https://us.tecdia.com/contact/'
//       }
//     },
//     {
//       id: 'usa-rep',
//       name: 'Sales Representative',
//       company: 'Sertech Inc.',
//       position: { x: 22, y: 32 },
//       details: {
//         regions: 'New Jersey and New York and Pennsylvania',
//         address: '1380 Welsh Road Montgomeryville, PA 18936',
//         tel: '‪+1-215-628-8085‬',
//         fax: '+1-215-628-02425',
//         mobile: '‪+1-267-614-6815‬',
//         email: 'jpatterson@sertech.info',
//         url: 'https://www.sertech.info'
//       }
//     },
//     {
//       id: 'uk',
//       name: 'Europe Sales Office',
//       company: 'TECDIA INC. EUROPE BRANCH',
//       position: { x: 45, y: 28 },
//       details: {
//         address: 'Dalton House, 60 Windsor Avenue, London SW19 2RR, UK',
//         tel: '‪+44-0-7739-913-581‬',
//         email: 'sales@tecdia.com',
//         url: 'https://us.tecdia.com/contact/'
//       }
//     },
//     {
//       id: 'taiwan',
//       name: 'Taiwan Sales Office',
//       company: 'TECDIA TAIWAN Co., Ltd. / 捷科泰亞股份有限公司',
//       position: { x: 78, y: 42 },
//       details: {
//         address: '19F., No. 65, Sec. 2, Dunhua S. Rd., Da\'an Dist., Taipei City 106, Taiwan (R.O.C.)',
//         tel: '‪+886-2-2955-5135‬',
//         fax: '‪+886-2-2955-5136‬',
//         email: 'sales_tw@tecdia.com',
//         url: 'https://www.tecdia.com/tw/support/'
//       }
//     },
//     {
//       id: 'china-shanghai',
//       name: 'China Sales Office (Shanghai)',
//       company: 'TECDIA Co., Ltd. SHANGHAI / 科钻(上海)贸易有限公司',
//       position: { x: 72, y: 38 },
//       details: {
//         address: 'MET PLAZA RM. B805, No. 268 Tongxie Road, Changning District, Shanghai 200335, P. R. C. China',
//         addressChinese: '上海市长宁区通协路268号尚品都汇B805室 邮编：200335',
//         tel: '‪+86-21-6237-2208‬',
//         fax: '‪+86-21-6237-2209‬',
//         email: 'sales_ch@tecdia.com',
//         url: 'https://www.tecdia.com.cn/contact-info/'
//       }
//     },
//     {
//       id: 'china-shenzhen',
//       name: 'China Sales Office (Shenzhen)',
//       company: 'TECDIA CO., LTD. SHANGHAI (SHENZHEN OFFICE) / 科钻(上海)贸易有限公司 深圳办事处',
//       position: { x: 74, y: 42 },
//       details: {
//         address: 'Xinggang Tongchuanghui Room 508, Yuheng Building 3 No. 6099 Fuhai Road, Baoan District, Shenzhen 518103',
//         addressChinese: '深圳市宝安区宝安大道6099号星港同创汇3栋玉衡座508室',
//         tel: '‪+86-755-8177-3669‬',
//         email: 'sales_ch@tecdia.com',
//         url: 'https://www.tecdia.cn/contact-info/'
//       }
//     },
//     {
//       id: 'china-chengdu',
//       name: 'China Sales Office (Chengdu)',
//       company: 'TECDIA CO., LTD. SHANGHAI (CHENGDU OFFICE) / 科钻(上海)贸易有限公司 成都办事处',
//       position: { x: 69, y: 40 },
//       details: {
//         address: 'FR-88-FR-91, Floor 9, Building 17, Yintai City, No. 1999, Yizhou Avenue, High tech Zone, Chengdu',
//         addressChinese: '成都市高新区益州大道1999号成都银泰城17号楼9层FR-88-FR-91',
//         email: 'sales_ch@tecdia.com',
//         url: 'https://www.tecdia.cn/contact-info/'
//       }
//     },
//     {
//       id: 'israel',
//       name: 'Israel Sales Representative',
//       company: 'Impact Electronics Ltd.',
//       position: { x: 52, y: 45 },
//       details: {
//         address: 'P.O Box: 436, Raanana 43104, Israel',
//         tel: '+972-9-7446610',
//         fax: '+972-9-7446620',
//         email: 'impact@impactel.co.il',
//         url: 'http://www.impactel.co.il/about_us.asp'
//       }
//     },
//     {
//       id: 'india',
//       name: 'India',
//       company: 'Coming Soon In India',
//       position: { x: 62, y: 48 },
//       details: {
//         message: 'Coming Soon In India'
//       }
//     }
//   ];

//   const handleLocationClick = (location) => {
//     setSelectedLocation(location);
//   };

//   const closeModal = () => {
//     setSelectedLocation(null);
//   };

//   return (
//     <div className="relative w-full h-screen bg-gray-100 overflow-hidden">
//       {/* Header */}
//       <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
//         <h1 className="text-4xl font-bold text-gray-800 mb-2">Global Network</h1>
//         <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
//       </div>

//       {/* World Map Container */}
//       <div className="absolute inset-0 flex items-center justify-center">
//         <div className="relative w-full max-w-6xl h-full max-h-[600px] mx-auto">
//           {/* World Map Background */}
//           <div 
//             className="w-full h-full bg-cover bg-center bg-no-repeat relative"
//             style={{
//               /* Replace this URL with your uploaded world map image URL */
//               backgroundImage: 'url("./360_F_107733254_1mKC2z4XDOwrDqnADf8QZ4lMJKvUGJQ7.jpg")',
//               backgroundColor: '#f8f9fa'
//             }}
//           >
           
//             {/* Location Markers */}
//             {locations.map((location) => (
//               <button
//                 key={location.id}
//                 className="absolute w-4 h-4 bg-teal-700 border-2 border-white rounded-full shadow-lg hover:bg-teal-800 hover:scale-125 transition-all duration-200 cursor-pointer z-20"
//                 style={{
//                   left: `${location.position.x}%`,
//                   top: `${location.position.y}%`,
//                   transform: 'translate(-50%, -50%)'
//                 }}
//                 onClick={() => handleLocationClick(location)}
//               />
//             ))}

//             {/* Connection Lines */}
//             <svg className="absolute inset-0 w-full h-full pointer-events-none z-10"> 
//   {locations.slice(0, -2).map((location, index) => (
//     <line
//       key={`line-${index}`}
//       x1={`${locations[0].position.x}%`}
//       y1={`${locations[0].position.y}%`}
//       x2={`${location.position.x}%`}
//       y2={`${location.position.y}%`}
//       stroke="#2d5a5f"
//       strokeWidth="1"
//       opacity="0.6"
//     />
//   ))}
// </svg>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedLocation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
//             <div className="flex justify-between items-center p-6 border-b border-gray-200">
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">{selectedLocation.name}</h2>
//                 <p className="text-lg text-teal-700 mt-1">{selectedLocation.company}</p>
//               </div>
//               <button
//                 onClick={closeModal}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="w-6 h-6 text-gray-600" />
//               </button>
//             </div>
            
//             <div className="p-6">
//               {selectedLocation.id === 'india' ? (
//                 <div className="text-center py-8">
//                   <h3 className="text-3xl font-bold text-teal-700">Coming Soon In India</h3>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {selectedLocation.details.address && (
//                     <div>
//                       <h4 className="font-semibold text-gray-700 mb-1">Address:</h4>
//                       <p className="text-gray-600">{selectedLocation.details.address}</p>
//                       {selectedLocation.details.addressChinese && (
//                         <p className="text-gray-600 mt-1">{selectedLocation.details.addressChinese}</p>
//                       )}
//                     </div>
//                   )}
                  
//                   {selectedLocation.details.regions && (
//                     <div>
//                       <h4 className="font-semibold text-gray-700 mb-1">Regions:</h4>
//                       <p className="text-gray-600">{selectedLocation.details.regions}</p>
//                     </div>
//                   )}
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {selectedLocation.details.tel && (
//                       <div>
//                         <h4 className="font-semibold text-gray-700 mb-1">TEL:</h4>
//                         <p className="text-gray-600">{selectedLocation.details.tel}</p>
//                       </div>
//                     )}
                    
//                     {selectedLocation.details.fax && (
//                       <div>
//                         <h4 className="font-semibold text-gray-700 mb-1">FAX:</h4>
//                         <p className="text-gray-600">{selectedLocation.details.fax}</p>
//                       </div>
//                     )}
                    
//                     {selectedLocation.details.mobile && (
//                       <div>
//                         <h4 className="font-semibold text-gray-700 mb-1">Mobile:</h4>
//                         <p className="text-gray-600">{selectedLocation.details.mobile}</p>
//                       </div>
//                     )}
//                   </div>
                  
//                   {selectedLocation.details.email && (
//                     <div>
//   <h4 className="font-semibold text-gray-700 mb-1">E-MAIL:</h4>
//   <a 
//     href={`mailto:${selectedLocation.details.email}`}
//     className="text-teal-600 hover:text-teal-800 transition-colors"
//   >
//     {selectedLocation.details.email}
//   </a>
// </div>
//                   )}
                  
//                   {selectedLocation.details.url && (
//                     <div>
//                       <h4 className="font-semibold text-gray-700 mb-1">URL:</h4>
//                       <a 
//                         href={selectedLocation.details.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-teal-600 hover:text-teal-800 transition-colors break-all"
//                       >
//                         {selectedLocation.details.url}
//                       </a>
//                     </div>
//                   )}
                  
//                   {selectedLocation.details.certification && (
//                     <div className="bg-green-50 p-3 rounded-lg">
//                       <h4 className="font-semibold text-green-800 mb-1">Certification:</h4>
//                       <p className="text-green-700">{selectedLocation.details.certification}</p>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;






// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitError('');
    
//     // Simulate form submission
//     setTimeout(() => {
//       if (formData.email.includes('@')) {
//         setSubmitSuccess(true);
//         setFormData({
//           name: '',
//           email: '',
//           subject: '',
//           message: ''
//         });
//       } else {
//         setSubmitError('Please enter a valid email address');
//       }
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   // Note: The 'styles' object will be completely removed after conversion.
//   // For demonstration, some complex styles might require extending Tailwind's config (tailwind.config.js).

//   const handleNavClick = (path) => {
//     window.location.href = path;
//   };

//   const handleApplyClick = () => {
//     window.location.href = '/form';
//   };

//   return (
//     <div className="font-sans bg-black text-white min-h-screen p-0 m-0 overflow-hidden">
//       {/* Header */}
//       <header className="flex justify-between items-center px-10 py-5 border-b border-[#333] md:px-5 md:py-4">
//         <div className="flex items-center gap-2">
//           <div className="text-lg font-bold tracking-widest">TECINDIA</div>
//           <div className="w-5 h-4 bg-[#ff9900] border border-gray-300"></div>
//         </div>
        
//         <nav className="hidden md:flex gap-8 items-center">
//           <a 
//             className="text-white text-base cursor-pointer hover:text-[#ff9900] transition-colors duration-300"
//             onClick={() => handleNavClick('/')}
//           >
//             Home
//           </a>
//           <a 
//             className="text-white text-base cursor-pointer hover:text-[#ff9900] transition-colors duration-300"
//             onClick={() => handleNavClick('/product')}
//           >
//             Product
//           </a>
//           <a 
//             className="text-white text-base cursor-pointer hover:text-[#ff9900] transition-colors duration-300"
//             onClick={() => handleNavClick('/track')}
//           >
//             Track Application
//           </a>
//           <a 
//             className="text-[#ff9900] text-base font-bold cursor-pointer"
//             onClick={() => handleNavClick('/contact')}
//           >
//             Contact
//           </a>
//         </nav>
        
//         <div className="flex items-center gap-5">
//           <button 
//             className="bg-[#ff5722] text-white px-6 py-3 rounded-md text-base font-bold cursor-pointer flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
//             onClick={handleApplyClick}
//           >
//             Apply Now ↗
//           </button>
          
//           <div className="flex flex-col gap-1 cursor-pointer md:hidden"> {/* Hidden on medium and larger screens */}
//             <div className="w-6 h-[3px] bg-white rounded-sm"></div>
//             <div className="w-6 h-[3px] bg-white rounded-sm"></div>
//             <div className="w-6 h-[3px] bg-white rounded-sm"></div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="px-10 py-16 max-w-[1200px] mx-auto md:px-5 md:py-10">
//         <h1 className="text-5xl font-bold mb-10 text-left md:text-3xl">
//           CONTACT <span className="text-[#ff9900]">TECDIA</span>
//         </h1>
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 md:gap-5">
//           {/* Contact Information */}
//           <div className="bg-white rounded-2xl p-10 text-black md:p-5">
//             <h2 className="text-3xl font-bold mb-8 text-[#ff5722] md:text-2xl">Get in Touch</h2>
            
//             <div className="flex items-start gap-4 mb-6">
//               <div className="text-[#ff9900] text-2xl mt-1">📍</div>
//               <div className="flex-1">
//                 <div className="text-base text-gray-600 mb-1">Headquarters</div>
//                 <div className="text-lg font-bold">
//                   123 Tech Park, Silicon Valley<br />
//                   San Francisco, CA 94107<br />
//                   United States
//                 </div>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-4 mb-6">
//               <div className="text-[#ff9900] text-2xl mt-1">✉️</div>
//               <div className="flex-1">
//                 <div className="text-base text-gray-600 mb-1">Email</div>
//                 <div className="text-lg font-bold">info@tecdia.com</div>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-4 mb-6">
//               <div className="text-[#ff9900] text-2xl mt-1">📞</div>
//               <div className="flex-1">
//                 <div className="text-base text-gray-600 mb-1">Phone</div>
//                 <div className="text-lg font-bold">+1 (555) 123-4567</div>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-4 mb-6">
//               <div className="text-[#ff9900] text-2xl mt-1">🕒</div>
//               <div className="flex-1">
//                 <div className="text-base text-gray-600 mb-1">Business Hours</div>
//                 <div className="text-lg font-bold">
//                   Monday - Friday: 9:00 AM - 6:00 PM<br />
//                   Saturday - Sunday: Closed
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl p-10 text-black md:p-5">
//             <h2 className="text-3xl font-bold mb-8 text-[#ff5722] md:text-2xl">Send Us a Message</h2>
            
//             <form onSubmit={handleSubmit}>
//               <div className="mb-6">
//                 <label className="block text-base mb-2 font-bold text-gray-800" htmlFor="name">
//                   Your Name
//                 </label>
//                 <input
//                   className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none"
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label className="block text-base mb-2 font-bold text-gray-800" htmlFor="email">
//                   Email Address
//                 </label>
//                 <input
//                   className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none"
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label className="block text-base mb-2 font-bold text-gray-800" htmlFor="subject">
//                   Subject
//                 </label>
//                 <input
//                   className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none"
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label className="block text-base mb-2 font-bold text-gray-800" htmlFor="message">
//                   Message
//                 </label>
//                 <textarea
//                   className="w-full p-4 text-base border-2 border-gray-300 rounded-lg transition-all duration-300 focus:border-[#ff9900] focus:outline-none min-h-[150px] resize-y"
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <button 
//                 className="bg-[#ff5722] text-white px-8 py-4 rounded-lg text-base font-bold cursor-pointer transition-all duration-300 inline-flex items-center gap-2 hover:bg-[#e64a19] disabled:opacity-50 disabled:cursor-not-allowed"
//                 type="submit"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <div className="animate-spin border-4 border-white border-t-[#ff5722] rounded-full w-5 h-5"></div>
//                     Sending...
//                   </>
//                 ) : 'Send Message'}
//               </button>
              
//               {submitSuccess && (
//                 <div className="text-green-600 mt-5 font-bold">
//                   Your message has been sent successfully!
//                 </div>
//               )}
              
//               {submitError && (
//                 <div className="text-[#ff5722] mt-5 font-bold">{submitError}</div>
//               )}
//             </form>
//           </div>
//         </div>
        
//         {/* Map */}
//         <div className="h-[400px] bg-white rounded-2xl overflow-hidden relative">
//           <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
//             [Interactive Map Would Appear Here]
//           </div>
//         </div>
        
//         {/* Global Offices */}
//         <h2 className="text-4xl font-bold mt-16 mb-8 md:text-3xl">
//           OUR <span className="text-[#ff9900]">GLOBAL OFFICES</span>
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
//           <div className="bg-white rounded-2xl p-8 text-black">
//             <h3 className="text-2xl font-bold mb-5 text-[#ff5722]">Tokyo, Japan</h3>
//             <p className="text-base leading-relaxed">
//               <strong className="font-bold">Address:</strong><br />
//               TECDIA Japan, 5-6-7 Shibuya<br />
//               Shibuya-ku, Tokyo 150-0002
//             </p>
//             <p className="text-base leading-relaxed mt-3">
//               <strong className="font-bold">Phone:</strong> +81 3-1234-5678
//             </p>
//           </div>
          
//           <div className="bg-white rounded-2xl p-8 text-black">
//             <h3 className="text-2xl font-bold mb-5 text-[#ff5722]">Berlin, Germany</h3>
//             <p className="text-base leading-relaxed">
//               <strong className="font-bold">Address:</strong><br />
//               TECDIA Europe, Friedrichstraße 100<br />
//               10117 Berlin, Germany
//             </p>
//             <p className="text-base leading-relaxed mt-3">
//               <strong className="font-bold">Phone:</strong> +49 30 1234567
//             </p>
//           </div>
          
//           <div className="bg-white rounded-2xl p-8 text-black">
//             <h3 className="text-2xl font-bold mb-5 text-[#ff5722]">Bangalore, India</h3>
//             <p className="text-base leading-relaxed">
//               <strong className="font-bold">Address:</strong><br />
//               TECDIA India, 123 Tech Park<br />
//               Whitefield, Bangalore 560066
//             </p>
//             <p className="text-base leading-relaxed mt-3">
//               <strong className="font-bold">Phone:</strong> +91 80 1234 5678
//             </p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Contact;
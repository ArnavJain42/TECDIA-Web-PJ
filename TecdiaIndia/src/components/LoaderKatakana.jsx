import React from "react";
import DecryptedText from "./DecryptedText";

const LoaderKatakana = ({
  text = "テクディア",
  speed = 100,
  characterSet = "katakana",
  subtitle = "Fusion of India & Japan"
}) => {
  return (
    <div className="fixed inset-0 h-screen w-screen flex flex-col items-center justify-center bg-black z-[9999] overflow-hidden">
      {/* Animated gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Center glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-blue-400/5 to-oranged-600/0 opacity-30"></div>
      </div>

      {/* Main content with hover effects */}
      <div className="group relative cursor-default transform transition-all duration-500">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-orange-600/30 rounded-full blur-lg opacity-0 "></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-600/20 rounded-full blur opacity-30 "></div>

        <div className="relative bg-black/40 rounded-0xl p-4 border border-white/10 ">
          <div className="absolute inset-0  rounded-0xl"></div>

          <div className="relative z-10 text-center w-[320px] h-[150px]">
            <DecryptedText 
              text={text} 
              speed={speed} 
              characterSet={characterSet}
            >
              {(decrypted) => (
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-orange-500 bg-clip-text text-transparent tracking-wider group-hover:drop-shadow-lg transition-all duration-300">
                  {decrypted}
                </h1>
              )}
            </DecryptedText>
            
            <p className="mt-6 text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
              {subtitle}
            </p>
            
            {/* Animated loading bar */}
            <div className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-yellow-400/30 via-orange-500/50 to-yellow-400/30 rounded-full overflow-hidden">
              <div className="h-full w-full origin-left animate-[loading_2s_ease-in-out_infinite] bg-gradient-to-r from-yellow-400 to-orange-500"></div>
            </div>
          </div>

          {/* Animated dots */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-ping transition-opacity duration-300"></div>
          <div className="absolute top-8 right-8 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-pulse transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderKatakana;
import React from "react";

// Import images (these should be in your assets/images/ folder)
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";

const Score: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-6 max-w-2xl mx-auto">
      {/* Header with logos */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-20">
        <img
          src={kibiaiLogo}
          alt="KiBi-AI Logo"
          className="h-32 object-contain"
        />
        <img
          src={titleImage}
          alt="Prompt-O-Saurus"
          className="h-32 object-contain"
        />
      </div>

      {/* Welcome message */}
      <div className="w-full text-center mb-8">
        <h1 className="text-2xl font-bold text-[#5e17eb] mb-2">
          Hello, Basudev
        </h1>
        <p className="text-lg text-gray-600">PROMPT-SAURUS</p>
      </div>

      {/* Score section */}
      <div className="w-full bg-gray-100 rounded-lg p-8 mb-6 flex flex-col items-center justify-center min-h-[300px]">
        <h2 className="text-xl font-bold text-[#5e17eb] mb-6">TOTAL POINTS</h2>

        {/* Points display */}
        <div className="text-6xl font-bold text-[#5e17eb] mb-8">3 0</div>

        {/* Rank display */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-2">YOUR RANK:</p>
          <p className="text-3xl font-bold text-[#5e17eb]">21</p>
        </div>
      </div>

      {/* Try again button */}
      <button className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 w-full max-w-xs">
        TRY AGAIN
      </button>
    </div>
  );
};

export default Score;

import React from "react";

// Import images (these should be in your assets/images/ folder)
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";

const Instructions: React.FC = () => {
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

      {/* Instructions content */}
      <div className="w-full bg-gray-100 rounded-lg p-8 mb-8 flex flex-col items-center justify-center min-h-[400px] lg:min-h-[500px]">
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold text-[#5e17eb] mb-8">
            Instructions
          </h1>

          <div className="space-y-4 text-left max-w-md mx-auto">
            <div className="flex items-start gap-3">
              <span className="bg-[#5e17eb] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                1
              </span>
              <p className="text-gray-700">Pick a challenge level.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-[#5e17eb] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                2
              </span>
              <p className="text-gray-700">Preview the sample report.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-[#5e17eb] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                3
              </span>
              <p className="text-gray-700">Write and submit your prompt.</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-[#5e17eb] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                4
              </span>
              <p className="text-gray-700">
                See your prompt results as report preview
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-[#5e17eb] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                5
              </span>
              <p className="text-gray-700">
                Get your AI-based score based on similarity.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="bg-[#5e17eb] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">
                6
              </span>
              <p className="text-gray-700">
                Keep going to climb the leaderboard!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue button */}
      <button className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105">
        <span className="text-lg">CONTINUE</span>
      </button>
    </div>
  );
};

export default Instructions;

import React from "react";

// Import images (these should be in your assets/images/ folder)
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";

const GenerateReport: React.FC = () => {
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

      {/* Sample Preview section */}
      <div className="w-full bg-gray-100 rounded-lg p-8 mb-6 flex flex-col items-center justify-center min-h-[300px]">
        <h2 className="text-xl font-bold text-[#5e17eb] mb-4">
          Sample Preview
        </h2>
        <div className="w-full max-w-md">
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#5e17eb]"
            placeholder="Type your prompt here"
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="w-full flex flex-col gap-4 mb-8">
        <button className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 w-full">
          SUBMIT
        </button>

        <div className="flex gap-4 w-full">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 flex-1">
            TABLES
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-200 flex-1">
            RELATIONSHIP
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;

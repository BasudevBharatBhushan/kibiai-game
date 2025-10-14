import React from "react";

// Import images (these should be in your assets/images/ folder)
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";
import skeletonImage from "../assets/images/skeleton.png";

const Preview: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-6 max-w-2xl mx-auto ">
      {/* Header with logos */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-20">
        <img
          src={kibiaiLogo}
          alt="KiBi-AI Logo"
          className=" h-32 object-contain"
        />
        <img
          src={titleImage}
          alt="Prompt-O-Saurus"
          className=" h-32 object-contain"
        />
      </div>

      {/* Main content area with skeleton */}
      <div className="w-full bg-gray-100 rounded-lg p-8 mb-8 flex items-center justify-center min-h-[400px] lg:min-h-[800px]">
        {/* <DynamicReport /> */}
      </div>

      {/* Preview text */}
      <p className="text-[#7456e1] text-center text-lg font-bold font-display mb-6 px-4">
        Preview of the report you need to write the prompt for
      </p>

      {/* Ready to Prompt button */}
      <button className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-3 shadow-lg transition-all duration-200 transform hover:scale-105">
        <img src={skeletonImage} className=" h-8 " alt="" />
        <span className="text-lg">READY TO PROMPT</span>
      </button>
    </div>
  );
};

export default Preview;

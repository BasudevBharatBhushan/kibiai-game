import React from "react";
import { useNavigate } from "react-router-dom";
// import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";
import skeletonImage from "../assets/images/skeleton.png";
import kibizsystems from "../assets/images/kibizsystems.png";

import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";

const Level: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen min-h-screen bg-white flex justify-center items-center overflow-hidden">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center w-full h-full px-6 py-12 lg:py-16 xl:py-2 max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <img
            src={kibizsystems}
            alt="KiBiz Systems"
            className="h-16 lg:h-20 object-contain"
          />
          <img
            src={titleImage}
            alt="Prompt-O-Saurus"
            className="h-24 lg:h-32 object-contain"
          />
        </div>

        {/* Level Selection Section */}
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <p className="text-[#5e17eb] text-xl lg:text-2xl font-bold mb-4">
            Choose a level to continue
          </p>

          <div className="grid grid-cols-2 gap-8 lg:gap-12 w-full max-w-md">
            {[
              { src: one, label: "EASY" },
              { src: two, label: "MEDIUM" },
              { src: three, label: "HARD" },
              { src: four, label: "EXPERT" },
            ].map((level, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                <div className="bg-gray-100 rounded-2xl shadow-md p-2">
                  <img
                    src={level.src}
                    alt={level.label}
                    className="w-full h-auto rounded-xl object-contain"
                  />
                </div>
                <p className="text-gray-800 text-sm lg:text-lg font-semibold mt-2">
                  {level.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-10">
          <button
            className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3 px-8 py-3 text-lg"
            onClick={() => navigate("/user-form")}
          >
            <img src={skeletonImage} alt="" className="h-6 lg:h-7" />
            <span>CONTINUE</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Level;

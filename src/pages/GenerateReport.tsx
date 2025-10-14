import React from "react";
import { useNavigate } from "react-router-dom";
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";
import skeletonImage from "../assets/images/skeleton.png";
import kibizsystems from "../assets/images/kibizsystems.png";

const GenerateReport: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center overflow-x-hidden overflow-y-auto">
      <div className="flex flex-col justify-between items-center w-full h-full px-6 py-12 lg:py-14 max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
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

        {/* Body Section */}
        <div className="flex flex-col items-center justify-center flex-1 w-full mt-2 mb-6">
          {/* Greeting */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#5e17eb] mb-2">
              Hello, Basudev
            </h1>
            <p className="text-lg text-gray-600 font-medium">PROMPT-SAURUS</p>
          </div>

          {/* Sample Preview Button */}
          <div className="w-full flex justify-center mb-6">
            <button className="border-2 border-[#5e17eb] text-[#5e17eb] font-semibold px-8 py-2 rounded-full transition-all duration-200 hover:bg-[#5e17eb] hover:text-white">
              Sample Preview
            </button>
          </div>

          {/* Prompt Input */}
          <div className="w-full mb-8">
            <textarea
              className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#5e17eb] text-gray-800 text-base"
              placeholder="Type your prompt here"
            />
          </div>

          {/* Submit Button */}
          <div className="w-full flex justify-center mb-8">
            <button
              className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3 px-8 py-3 text-lg"
              onClick={() => navigate("/score")}
            >
              <img src={skeletonImage} alt="" className="h-6 lg:h-7" />
              <span>SUBMIT</span>
            </button>
          </div>

          {/* Tables and Relationship Sections */}
          <div className="w-full flex flex-col lg:flex-row justify-between gap-6 bg-gray-100 rounded-2xl p-6 shadow-md">
            <div className="flex-1">
              <h3 className="text-[#5e17eb] font-bold text-lg mb-4 text-center lg:text-left">
                TABLES
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="border-2 border-[#5e17eb] rounded-md h-8"
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-[#5e17eb] font-bold text-lg mb-4 text-center lg:text-left">
                RELATIONSHIP
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="border-2 border-[#5e17eb] rounded-md h-8"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-2 mt-4 mb-2">
          <p className="text-[#7456e1] text-sm lg:text-base font-semibold">
            POWERED BY
          </p>
          <img
            src={kibiaiLogo}
            alt="KiBi-AI"
            className="h-16 lg:h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;

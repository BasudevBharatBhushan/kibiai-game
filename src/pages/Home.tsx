import React from "react";

// Import images (these should be in your assets/images/ folder)
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";
import skeletonImage from "../assets/images/skeleton.png";
import kibizsystems from "../assets/images/kibizsystems.png";

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex flx-col justify-center">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center mx-auto px-6 py-[12rem] xl:py-12 h-full w-full">
        {/* Top Section - KiBiz Systems + PRESENTS */}
        <div className="row-start-1 flex flex-col items-center gap-2">
          <img
            className="h-16 lg:h-24"
            src={kibizsystems}
            alt="KiBiz Systems"
          />
          <p className="text-sm lg:text-lg mt-10 text-purple-600 font-medium">
            PRESENTS
          </p>
        </div>

        {/* Middle Section - Title + Tagline + Button */}
        <div className="row-start-2 self-center flex flex-col items-center gap-6">
          <img
            src={titleImage}
            alt="Prompt-O-Saurus"
            className=" h-36 lg:h-48 w-auto object-contain"
          />
          <p className="text-secondary text-center text-xl  lg:text-3xl font-bold font-display">
            Prompt now to join the leaderboard!
          </p>
          <button className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-3 shadow-lg transition-all duration-200 transform hover:scale-105">
            <img src={skeletonImage} className="h-8" alt="" />
            <span className="text-xl font-normal">START NOW</span>
          </button>
        </div>

        {/* Bottom Section - POWERED BY + KiBi-AI Logo */}
        <div className="row-start-3 flex flex-col items-center gap-3">
          <p className="text-purple-600 text-sm lg:text-lg font-medium mt-3 lg:mt-0">
            POWERED BY
          </p>
          <img
            className="h-32 lg:h-48 mt-3 lg:mt-0"
            src={kibiaiLogo}
            alt="KiBi-AI"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

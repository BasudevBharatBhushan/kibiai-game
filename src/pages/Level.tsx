import React from "react";
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";
// import skeletonImage from "../assets/images/skeleton.png";
import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";

const Level: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start p-6 max-w-2xl mx-auto">
      {/* Header with logos */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center mb-8">
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
      <p className="text-[#7456e1] text-center text-2xl font-bold font-display mb-6 px-4">
        Choose a level to continue
      </p>
      <div className="grid grid-cols-2 gap-12 m-8">
        <div className="flex flex-col justify-center items-center">
          <img
            src={one}
            alt="Level 1"
            className="w-full h-auto rounded-lg bg-gray-100"
          />
          <p className=" text-sm lg:text-lg text-secondary">EASY</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={two}
            alt="Level 2"
            className="w-full h-auto rounded-lg bg-gray-100"
          />
          <p className="text-sm lg:text-lg text-secondary">MEDIUM</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={three}
            alt="Level 3"
            className="w-full h-auto rounded-lg bg-gray-100"
          />
          <p className="text-sm lg:text-lg text-secondary">HARD</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={four}
            alt="Level 4"
            className="w-full h-auto rounded-lg bg-gray-100"
          />
          <p className="text-sm lg:text-lg text-secondary">EXPERT</p>
        </div>
      </div>
    </div>
  );
};

export default Level;

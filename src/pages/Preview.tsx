import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images
// import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";
import skeletonImage from "../assets/images/skeleton.png";
import kibizsystems from "../assets/images/kibizsystems.png";
import DynamicReport from "../components/sections/DynamicReport";

// Custom hook for responsive scaling (unchanged)
const useResponsiveScale = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const contentWidth = contentRef.current.scrollWidth;

        const availableWidth = containerWidth - 100;
        if (contentWidth > availableWidth) {
          const newScale = availableWidth / contentWidth;
          setScale(Math.min(newScale, 1));
        } else {
          setScale(1);
        }
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return { containerRef, contentRef, scale };
};

const Preview: React.FC = () => {
  const { containerRef, contentRef, scale } = useResponsiveScale();
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center overflow-x-hidden overflow-y-auto">
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

        {/* Report Preview Section */}
        <div
          ref={containerRef}
          className="bg-gray-100 rounded-2xl shadow-md p-6 lg:p-8 w-full flex justify-center items-start overflow-hidden relative"
          style={{
            height: "60vh", // keeps it balanced on mobile + iPad screens
          }}
        >
          <div
            ref={contentRef}
            className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              transition: "transform 0.3s ease",
            }}
          >
            <DynamicReport />
          </div>
        </div>

        {/* Caption */}
        <p className="text-[#5e17eb] text-center text-base lg:text-xl font-bold mt-6 mb-4 px-4 leading-snug">
          Preview of the report you need to write the prompt for
        </p>

        {/* Ready to Prompt Button */}
        <div className="mb-4">
          <button
            className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3 px-8 py-3 text-lg"
            onClick={() => navigate("/generate-report")}
          >
            <img src={skeletonImage} alt="" className="h-6 lg:h-7" />
            <span>READY TO PROMPT</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;

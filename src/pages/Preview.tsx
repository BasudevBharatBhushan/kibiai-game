import { useEffect, useRef, useState } from "react";

// Import images (these should be in your assets/images/ folder)
import kibiaiLogo from "../assets/images/kibiai.png";
import titleImage from "../assets/images/title.png";
import skeletonImage from "../assets/images/skeleton.png";
import DynamicReport from "../components/sections/DynamicReport";

// Custom hook for responsive scaling
const useResponsiveScale = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      console.log("Updating scale...");
      console.log({ containerRef, contentRef });
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const contentWidth = contentRef.current.scrollWidth;

        // Add some padding (20px on each side)
        const availableWidth = containerWidth - 100;

        console.log({ containerWidth, contentWidth, availableWidth });

        if (contentWidth > availableWidth) {
          const newScale = availableWidth / contentWidth;
          setScale(Math.min(newScale, 1)); // Don't scale up, only down
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

// Updated Preview component
const Preview: React.FC = () => {
  const { containerRef, contentRef, scale } = useResponsiveScale();

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

      {/* Main content area with responsive scaling */}
      <div
        ref={containerRef}
        className="w-full bg-gray-100 rounded-lg p-8 mb-8 flex items-center justify-center min-h-[400px] lg:min-h-[800px] overflow-hidden"
      >
        <div
          ref={contentRef}
          className="w-full h-full"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "top center",
            transition: "transform 0.3s ease",
          }}
        >
          <DynamicReport />
        </div>
      </div>

      {/* Preview text */}
      <p className="text-[#7456e1] text-center text-lg font-bold font-display mb-6 px-4">
        Preview of the report you need to write the prompt for
      </p>

      {/* Ready to Prompt button */}
      <button className="bg-[#5e17eb] hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-3 shadow-lg transition-all duration-200 transform hover:scale-105">
        <img src={skeletonImage} className="h-8" alt="" />
        <span className="text-lg">READY TO PROMPT</span>
      </button>
    </div>
  );
};

export default Preview;

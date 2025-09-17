import { Heading } from "@/types";
import React from "react";
import ReactMarkdown from "react-markdown";

const SectionHeading: React.FC<{
  heading: Heading;
  alignCenter?: boolean;
  invert?: boolean;
}> = ({ heading, alignCenter = false, invert = false }) => {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`relative flex flex-col ${
          alignCenter ? "items-center" : ""
        }`}
      >
        {/* Background Title */}
        <h4
          className={`relative font-bold uppercase bg-gradient-to-b from-[#FFC300] ${
            invert ? "to-black" : "to-white"
          } bg-clip-text text-transparent select-none leading-none
          text-[14vw] md:text-[8vw] lg:text-[8vw]`}
        >
          {heading?.title}
        </h4>

        {/* Foreground Subtitle */}
        <h2
          className={` absolute bottom-0 text-center font-medium leading-tight
          text-[6vw] md:text-[4vw] lg:text-[3vw] 
          ${invert ? "text-white" : "text-black"}`}
        >
          {heading?.subtitle}
        </h2>
      </div>

      {/* Description */}
      {heading?.description && (
        <div
          className={`flex flex-col gap-2 relative ${
            alignCenter ? "text-center" : ""
          } ${invert ? "text-white" : "text-textcolor"}`}
        >
          <ReactMarkdown>{heading?.description}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;

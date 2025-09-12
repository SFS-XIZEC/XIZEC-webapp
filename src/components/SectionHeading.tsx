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
        className={`relative flex flex-col  ${alignCenter && "items-center"}`}
      >
        <h4
          className={`relative whitespace-nowrap text-[76px] lg:text-[110px] font-bold uppercase bg-gradient-to-b from-[#FFC300] ${
            invert ? "to-black" : "to-[#FFFFFF]"
          } bg-clip-text text-transparent select-none`}
        >
          {heading?.title}
        </h4>

        <h2
          className={`absolute text-center text-[37px] lg:text-[56px] font-[500] bottom-1 ${
            invert ? "text-white" : "text-black"
          }`}
        >
          {heading?.subtitle}
        </h2>
      </div>
      {heading?.description && (
        <div
          className={`flex flex-col gap-2 relative ${
            alignCenter && "text-center"
          } ${invert ? "text-white" : "text-textcolor"}`}
          // dangerouslySetInnerHTML={{ __html: heading?.description }}
        >
          <ReactMarkdown>{heading?.description}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;

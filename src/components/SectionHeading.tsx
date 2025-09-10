import React from "react";
interface headingProp {
  subtitle: string;
  title: string;
  description?: string;
}

const SectionHeading: React.FC<{
  heading: headingProp;
  alignCenter?: boolean;
  invert?: boolean;
}> = ({ heading, alignCenter = false, invert = false }) => {
  return (
    <div
      className={`relative mb-10 w-full flex flex-col ${
        alignCenter && "items-center"
      }`}
    >
      <h4
        className={`absolute text-[110px] leading-[120%] font-bold uppercase bg-gradient-to-b from-[#FFC300] ${
          invert ? "to-black" : "to-[#FFFFFF]"
        } bg-clip-text text-transparent select-none`}
      >
        {heading?.subtitle}
      </h4>

      <h2
        className={`relative text-[56px] font-[500] top-[55px] leading-[120%] ${
          invert ? "text-white" : "text-black"
        }`}
      >
        {heading?.title}
      </h2>

      {heading?.description && (
        <div
          className={`relative ${alignCenter && "text-center"} top-[55px] ${
            invert ? "text-white" : "text-black"
          }`}
          dangerouslySetInnerHTML={{ __html: heading?.description }}
        />
      )}
    </div>
  );
};

export default SectionHeading;

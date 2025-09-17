import { StarIcon } from "@/common/icons";
import React from "react";
import { HeroSection } from "@/types";

export type HeadingProp = {
  headingData?: HeroSection | null;
  titleWhite?: boolean;
  alingCenter?: boolean;
  type?: string;
};

const Heading: React.FC<HeadingProp> = ({ headingData, alingCenter }) => {
  return (
    <div
      className={`w-[90%] lg:w-[63%] flex flex-col justify-center  text-white gap-[36px] ${
        alingCenter ? "items-center" : "items-start"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-1">
          <StarIcon />

          <div className="text-primary text-center font-semibold text-[18px]">
            {headingData?.title}
          </div>

          <div>
            <StarIcon />
          </div>
        </div>

        <h1
          className={`font-bold md:text-[60px] text-[25px] leading-8 md:leading-[120%] ${
            alingCenter ? "text-center" : ""
          } text-white`}
        >
          {headingData?.subtitle}
        </h1>
        {headingData?.description && (
          <h1
            className={`leading-[150%] text-[14px] ${
              alingCenter ? "text-center" : "text-justify"
            }  `}
          >
            {headingData?.description}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Heading;

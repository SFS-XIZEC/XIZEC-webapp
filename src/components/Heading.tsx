import { StarIcon } from "@/common/icons";
import React from "react";
import CommonButton from "./CommonButton";

export type HeadingProp = {
  headingData?: HeadingTypes;
  titleWhite?: boolean;
  alingCenter?: boolean;
  type?: string;
};

export type HeadingTypes = {
  id?: number;
  documentId?: string;
  head?: string;
  title?: string;
  type?: string;
  text?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  alingCenter?: boolean;
  text2?: string;
  text3?: string;
};
const Heading: React.FC<HeadingProp> = ({
  headingData,
  titleWhite,
  alingCenter,
}) => {
  return (
    <div
      className={`w-[63%] flex flex-col justify-center  text-white gap-[36px] mt-[120px] ${headingData?.alingCenter || alingCenter ? "items-center" : "items-start"
        }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-1">
          <StarIcon />

          <div className="text-primary text-center font-semibold text-[18px]">
            {headingData?.head}
          </div>

          <div>
            <StarIcon />
          </div>
        </div>

        <h1
          className={`font-bold md:text-[60px] text-[20px] leading-6 md:leading-[120%] ${headingData?.alingCenter || alingCenter ? "text-center" : ""
            } text-white`}
        >
          {headingData?.title}
        </h1>
        {headingData?.text && (
          <h1
            className={`leading-[150%] text-[14px] ${headingData?.alingCenter || alingCenter
              ? "text-center"
              : "text-justify"
              }  `}
          >
            {headingData?.text}
          </h1>
        )}
      </div>

      <CommonButton text={"Get Started"} />
    </div>
  );
};

export default Heading;
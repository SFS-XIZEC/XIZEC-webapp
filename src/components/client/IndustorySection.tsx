import React, { ReactNode } from "react";
import SectionHeading from "../SectionHeading";
import { IndustoryComponentBlock } from "@/types";
import MaskedIcon from "../MaskedIcon";

const IndustorySection: React.FC<{ IndustryData: IndustoryComponentBlock }> = ({
  IndustryData,
}) => {
  return (
    <div className="bg-white flex flex-col gap-16 px-6 md:px-12 lg:px-20 mt-[80px]">
      <SectionHeading heading={IndustryData?.heading} alignCenter />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {IndustryData?.cards?.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center lg:items-start gap-3 hover:text-[#9B51E0] justify-center p-3 lg:px-[40px] lg:py-[20px] rounded-[20px] border-[2px] border-[#EAEAEA] hover:border-[#9B51E0] cursor-pointer"
          >
            <MaskedIcon
              src={item?.image?.url}
              size={28}
              color={item?.color || "bg-black"}
              groupHoverColor="group-hover:!bg-[#9B51E0]"
              hoverColor="hover:!bg-[#9B51E0]"
            />
            <h1 className="whitespace-nowrap">{item?.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustorySection;

import React from "react";
import SectionHeading from "../SectionHeading";
import { LeaderCardBlock } from "@/types";
import { StrapiImage } from "../StrapiImage";

const LeaderSection: React.FC<{ LeaderData: LeaderCardBlock }> = ({
  LeaderData,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[98px] px-6 md:px-12 lg:px-20 mt-[80px]">
      <div className="flex flex-col gap-8 items-start ">
        <SectionHeading heading={LeaderData?.heading} />
      </div>
      <StrapiImage
        src={LeaderData?.image.url}
        alt={LeaderData?.image?.name}
        width={570}
        height={650}
        className="w-full lg:w-[570px]"
      />
    </div>
  );
};

export default LeaderSection;

import Image from "next/image";
import React from "react";
import SectionHeading from "../SectionHeading";
// Define types for the nested properties
type LeaderImage = {
  url: string;
  alternativeText: string;
  name: string;
};

type LeaderHeading = {
  subtitle: string;
  title: string;
  description: string;
};

export type LeaderData = {
  leaderImg: LeaderImage;
  heading: LeaderHeading;
  description: string; // HTML content in string form
};
const LeaderSection: React.FC<{ data: LeaderData }> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-[98px] px-6 md:px-12 lg:px-20 mt-[80px]">
      <div className="flex flex-col gap-8 items-start ">
        {/* <SectionHeading heading={data?.heading} /> */}

        <div
          className="text-textcolor leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
        <span>{data?.heading?.title}</span>
      </div>
      <Image
        src={data?.leaderImg.url}
        alt={data?.leaderImg.name}
        width={570}
        height={650}
        className=""
      />
    </div>
  );
};

export default LeaderSection;

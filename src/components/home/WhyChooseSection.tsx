import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import { Card, WhyChooseComponent } from "@/types";
import { StrapiImage } from "../StrapiImage";

const WhyChooseSection: React.FC<{ WhyChooseData: WhyChooseComponent }> = ({
  WhyChooseData,
}) => {
  return (
    <div className="flex flex-col gap-16 px-6 md:px-12 lg:px-20">
      <SectionHeading alignCenter heading={WhyChooseData?.heading} />

      <div className="grid lg:grid-cols-3 gap-6">
        {WhyChooseData?.cards?.map((item, index) => (
          <WhyChooseCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;

export const WhyChooseCard: React.FC<{ data: Card }> = ({ data }) => {
  return (
    <div className="p-10 flex flex-col items-start gap-[10px] rounded-3xl border border-[#6B6B6B]">
      <StrapiImage
        src={data?.image.url}
        alt={data?.image.name}
        width={48}
        height={48}
      />

      <p className="text-[24px] font-semibold leading-[120%]">{data?.title}</p>
      <p className="text-textcolor">{data?.description}</p>
    </div>
  );
};

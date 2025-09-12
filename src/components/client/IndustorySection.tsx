import React, { ReactNode } from "react";
import SectionHeading from "../SectionHeading";

export interface IndustoryProp {
  heading: {
    subtitle: string;
    title: string;
  };
  cardsData: {
    icon: ReactNode;
    iconCol: string;
    title: string;
  }[];

}

const IndustorySection: React.FC<{ data: IndustoryProp }> = ({ data }) => {
  return (
    <div className="bg-white flex flex-col gap-16 px-6 md:px-12 lg:px-20 mt-[80px]">
      <div className="lg:w-[70%] mx-auto flex text-center">
        <SectionHeading heading={data?.heading} alignCenter />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {data?.cardsData?.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center lg:items-start gap-3 hover:text-[#9B51E0] justify-center p-3 lg:px-[40px] lg:py-[20px] rounded-[20px] border-[2px] border-[#EAEAEA] hover:border-[#9B51E0] cursor-pointer"
          >
            <div className={`${item?.iconCol} group-hover:text-[#9B51E0]`}>{item?.icon}</div>
            <h1 className="whitespace-nowrap">{item?.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustorySection;

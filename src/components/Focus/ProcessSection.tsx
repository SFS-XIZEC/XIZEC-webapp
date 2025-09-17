import React from "react";
import SectionHeading from "../SectionHeading";
import { Carousel } from "antd";
import { OurStepsBlock } from "@/types";

const ProcessSection: React.FC<{ StepData: OurStepsBlock }> = ({
  StepData,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,
    rtl: false,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    // afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1230,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div className="bg-white flex flex-col gap-16 px-6 md:px-12 lg:px-20">
      <SectionHeading heading={StepData?.heading} alignCenter />

      <Carousel prefixCls="custom-dots" {...settings}>
        {StepData?.cards.map((step, index) => (
          <div key={index} className="flex">
            <div className="flex items-center">
              <div className="p-8 rounded-[24px] border-[1px] border-[#6B6B6B] min-h-[340px] flex flex-col  gap-8">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-[42px] font-semibold">
                  {index + 1}
                </div>

                <div className="flex flex-col gap-3 items-start">
                  <h1 className="font-[500] text-2xl ">{step.title}</h1>
                  <p className="text-textcolor">{step.description}</p>
                </div>
              </div>
              <div className="w-[86px] h-1 border-b border-dashed border-primary"></div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProcessSection;

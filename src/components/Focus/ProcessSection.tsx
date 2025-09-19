import React from "react";
import SectionHeading from "../SectionHeading";
import { OurStepsBlock } from "@/types";

const ProcessSection: React.FC<{ StepData: OurStepsBlock }> = ({
  StepData,
}) => {
  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   slidesToShow: 3,
  //   centerMode: true,
  //   rtl: false,
  //   autoplay: true,
  //   draggable: true,
  //   autoplaySpeed: 3000,
  //   swipeToSlide: true,
  //   // afterChange: (current: number) => setCurrentSlide(current),
  //   responsive: [
  //     {
  //       breakpoint: 1230,
  //       settings: {
  //         slidesToShow: 2,
  //         centerPadding: "20px",
  //       },
  //     },
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "0px",
  //       },
  //     },
  //   ],
  // };
  return (
    <div className="bg-white flex flex-col gap-6 lg:gap-16 md:px-12 lg:px-20">
      <SectionHeading heading={StepData?.heading} alignCenter />

      {/* <Carousel prefixCls="custom-dots" {...settings}> */}
      <div className="flex flex-wrap justify-center max-md:gap-4">
        {StepData?.cards.map((step, index) => (
          <div key={index} className="flex items-center justify-center">
            {/* Card */}
            <div className="w-[90%] sm:w-[300px] md:w-[320px] lg:w-[340px] h-[340px] p-8 rounded-[24px] border border-[#6B6B6B] flex flex-col gap-8">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-[42px] font-semibold">
                {index + 1}
              </div>

              <div className="flex flex-col gap-3 items-start">
                <h1 className="font-[500] text-2xl">{step.title}</h1>
                <p className="text-textcolor">{step.description}</p>
              </div>
            </div>

            {/* Dashed line between cards */}
            {index < StepData?.cards?.length - 1 && (
              <div className="hidden md:block w-[86px] h-1 border-b-4 border-dashed border-primary"></div>
            )}
          </div>
        ))}
      </div>

      {/* </Carousel> */}
    </div>
  );
};

export default ProcessSection;

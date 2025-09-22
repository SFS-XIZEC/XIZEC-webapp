import React from "react";
import SectionHeading from "../SectionHeading";
import { OurStepsBlock } from "@/types";
import { Carousel } from "antd";

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
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div className="bg-white flex flex-col gap-6 lg:gap-16 md:px-12 lg:px-20">
      <SectionHeading heading={StepData?.heading} alignCenter />

      <div className="hidden lg:flex  justify-center max-md:gap-4">
        {StepData?.cards.map((step, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="w-[90%] sm:w-[300px] md:w-[320px] lg:w-[300px] h-[340px] md:p-4 xl:p-8 rounded-[24px] border border-[#6B6B6B] flex flex-col gap-8">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-[42px] font-semibold">
                {index + 1}
              </div>

              <div className="flex flex-col gap-3 items-start">
                <h1 className="font-[500] text-2xl">{step.title}</h1>
                <p className="text-textcolor">{step.description}</p>
              </div>
            </div>

            {index < StepData?.cards?.length - 1 && (
              <div className="hidden md:block w-[20px] md:w-[40px] xl:w-[86px] h-1 border-b-4 border-dashed border-primary"></div>
            )}
          </div>
        ))}
      </div>

      <Carousel
        prefixCls="custom-dots"
        {...settings}
        className="mb-[60px] lg:!hidden"
      >
        {StepData?.cards.map((step, index) => (
          <div key={index} className="flex items-center justify-center px-4">
            <div className="w-full lg:w-[300px] h-[340px] p-2 md:p-4 lg:p-8 rounded-[24px] border border-[#6B6B6B] flex flex-col gap-8">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-[42px] font-semibold">
                {index + 1}
              </div>

              <div className="flex flex-col gap-3 items-start">
                <h1 className="font-[500] text-2xl">{step.title}</h1>
                <p className="text-textcolor">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProcessSection;

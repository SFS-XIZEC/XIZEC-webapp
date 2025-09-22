import React from "react";
import SectionHeading from "../SectionHeading";
import { Carousel } from "antd";
import { TeamComponentBlock } from "@/types";
import { StrapiImage } from "../StrapiImage";

const OurTeam: React.FC<{ TeamData: TeamComponentBlock; margin?: string }> = ({
  TeamData,
  margin,
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
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div
      className={`bg-white flex flex-col gap-6 sm:gap-10 md:gap-16 px-6 md:px-12 lg:px-20 ${margin}`}
    >
      <SectionHeading heading={TeamData?.heading} alignCenter />

      <div className="hidden xl:grid lg:grid-cols-4 gap-6">
        {TeamData?.ProfileCard?.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <StrapiImage
              src={item.image.url}
              alt={item.image.name}
              width={300}
              height={400}
              className="w-full h-[400px] object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl m-5 rounded-[18px] border-[1px] border-white/20 bg-black/30 px-4 py-1">
              <h1 className="text-white text-[16px] font-bold">{item?.name}</h1>
              <p className="text-white text-[14px]">{item?.designation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="xl:hidden w-full">
        <Carousel prefixCls="custom-dots" {...settings}>
          {TeamData?.ProfileCard?.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl px-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <StrapiImage
                src={item.image.url}
                alt={item.image.name}
                width={300}
                height={400}
                className="w-full h-[400px] object-cover rounded-2xl"
              />

              <div className="font-sans absolute bottom-0 left-0 right-0 backdrop-blur-xl m-5 rounded-[18px] border-[1px] border-white/20 bg-black/30 px-4 py-1">
                <h1 className="text-white text-[16px] font-bold">
                  {item?.name}
                </h1>
                <p className="text-white text-[14px]">{item?.designation}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default OurTeam;

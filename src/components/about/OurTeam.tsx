import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import { Carousel } from "antd";

interface OurteamProp {
  heading: {
    subtitle: string;
    title: string;
    description: string;
  };
  team: {
    image: {
      url: string;
      alternativeText: string;
      name: string;
    };
    name: string;
    designation: string;
  }[];
}

const OurTeam: React.FC<{ data: OurteamProp }> = ({ data }) => {
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
      {/* <SectionHeading heading={data?.heading} alignCenter /> */}

      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {data?.team.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={item.image.url}
              alt={item.image.alternativeText}
              width={300}
              height={400}
              className="w-full h-[400px] object-cover"
              unoptimized
            />

            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl m-5 rounded-[18px] border-[1px] border-white/20 bg-black/30 px-4 py-1">
              <h1 className="text-white text-[16px] font-bold">{item?.name}</h1>
              <p className="text-white text-[14px]">{item?.designation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden w-full">
        <Carousel prefixCls="custom-dots" {...settings}>
          {data?.team.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={item.image.url}
                alt={item.image.alternativeText}
                width={300}
                height={400}
                className="w-full h-[400px] object-cover"
                unoptimized
              />

              <div className="absolute bottom-0 left-0 right-0 backdrop-blur-xl m-5 rounded-[18px] border-[1px] border-white/20 bg-black/30 px-4 py-1">
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

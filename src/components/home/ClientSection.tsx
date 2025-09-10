import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

interface ClientProp {
  url: string;
  name: string;
  alternativeText: string;
}

const ClientSection: React.FC<{ data: ClientProp[]; isCarousel?: boolean }> = ({
  data,
  isCarousel = false,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    pauseOnHover: false,
    rtl: false,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 800,
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
  return isCarousel ? (
    <Carousel prefixCls="custom-dots" {...settings} className="!mt-[80px]">
      {data?.map((image, index) => (
        <div
          key={index}
          className="flex justify-center px-[40px] py-[20px] rounded-[20px] border-[2px] border-[#EAEAEA]"
        >
          <Image
            src={image?.url}
            alt={image?.name}
            width={200}
            height={80}
            className="!w-[200px] !h-[80px]"
          />
        </div>
      ))}
    </Carousel>
  ) : (
    <div className="grid grid-cols-4 gap-8">
      {data?.map((image, index) => (
        <div
          key={index}
          className="flex justify-center px-[40px] py-[20px] rounded-[20px] border-[2px] border-[#EAEAEA]"
        >
          <Image
            src={image?.url}
            alt={image?.name}
            width={200}
            height={80}
            className="!w-[200px] !h-[80px]"
          />
        </div>
      ))}
    </div>
  );
};

export default ClientSection;

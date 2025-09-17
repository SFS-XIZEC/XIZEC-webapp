import React from "react";
import SectionHeading from "../SectionHeading";
import { Carousel } from "antd";
import Image from "next/image";

export interface CollaboratorHeading {
  title: string;
  subtitle: string;
}

export interface CollaboratorClient {
  url: string;
  alternativeText: string;
  name: string;
}

export interface CollaboratorData {
  heading: CollaboratorHeading;
  client: CollaboratorClient[];
}

const ContactCollaborator: React.FC<{ data: CollaboratorData }> = ({
  data,
}) => {
  const settings1 = {
    dots: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    rtl: false,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 1000,
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
  const settings2 = {
    dots: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    rtl: true,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 1000,
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
      <div className="lg:w-[70%] mx-auto flex text-center">
        {/* <SectionHeading heading={data?.heading} alignCenter /> */}
      </div>
      <div className="flex flex-col gap-8">
        <Carousel prefixCls="custom-dots" {...settings1}>
          {data?.client.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div
                key={index}
                className="mr-8 flex justify-center px-[40px] py-[20px] rounded-[20px] border-[1px] border-[#EAEAEA]"
              >
                <Image
                  src={item?.url}
                  alt={item?.name}
                  width={200}
                  height={80}
                  className="!w-[200px] !h-[80px]"
                />
              </div>
            </div>
          ))}
        </Carousel>

        <Carousel prefixCls="custom-dots" {...settings2}>
          {data?.client.map((image, index) => (
            <div key={index} className="flex justify-center ">
              <div
                key={index}
                className="mr-8 flex justify-center px-[40px] py-[20px] rounded-[20px] border-[2px] border-[#EAEAEA]"
              >
                <Image
                  src={image?.url}
                  alt={image?.name}
                  width={200}
                  height={80}
                  className="!w-[200px] !h-[80px]"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ContactCollaborator;

"use client";
import { NoProfilePic } from "@/common/icons";
import { Carousel, Rate } from "antd";
import Image from "next/image";
import React, { useRef, useState } from "react";
import FormComponent from "../FormComponent";
import { CarouselRef } from "antd/es/carousel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface ReviewProp {
  id: number;
  rating: number;
  text: string;
  name: string;
  title: string;
  avatar?: string;
}

interface contactProp {
  title: string;
  description: string;
  reviews: ReviewProp[];
}

const ContactMain: React.FC<{ data: contactProp }> = ({ data }) => {
  const carouselRef = useRef<CarouselRef | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log(currentSlide);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    rtl: false,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    draggable: true,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    afterChange: (current: number) => setCurrentSlide(current),
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
    <div className="flex flex-col lg:flex-row gap-6 w-full px-6 md:px-12 lg:px-20">
      <div className="lg:w-[70%] p-4 lg:p-8 rounded-3xl bg-[#F4F2EA] shadow-md">
        <p className="text-[32px] lg:text-[56px] font-[500] mb-3 leading-[120%]">
          {data?.title}
        </p>
        <p className="text-black mb-6">{data?.description}</p>

        <div className="relative w-full bg-white p-6 rounded-[15px] custom-dots">
          <button
            className="hidden lg:flex cursor-pointer absolute top-1/2 left-2 w-8 h-8 items-center justify-center text-white bg-black rounded-full"
            onClick={() => carouselRef.current?.prev()}
          >
            <LeftOutlined />
          </button>
          <button
            className="cursor-pointer absolute right-2 top-1/2 w-8 h-8 hidden lg:flex items-center justify-center text-white bg-black rounded-full"
            onClick={() => carouselRef.current?.next()}
          >
            <RightOutlined />
          </button>
          <Carousel ref={carouselRef} {...settings} className="lg:!px-10">
            {data?.reviews.map((testimonial, index: number) => (
              <div key={index} className="flex justify-center">
                <div className="bg-[#F4F2EA] mr-2 lg:mr-5 p-2 lg:p-5 rounded-[15px] flex flex-col justify-between gap-4 min-h-[420px] max-w-[350px] shadow">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2">
                      <Rate defaultValue={testimonial.rating} disabled />
                      <span className="font-bold text-lg">
                        {testimonial.rating}
                      </span>
                    </div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <div className="rounded-full overflow-hidden">
                      {testimonial?.avatar ? (
                        <Image
                          src={testimonial.avatar}
                          width={48}
                          height={48}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      ) : (
                        <NoProfilePic />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-[#6B6B6B]">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="lg:w-[30%] p-8 rounded-3xl shadow-[0px_4px_26.8px_0px_#0000001A]">
        <FormComponent textColor="text-black" isContact />
      </div>
    </div>
  );
};

export default ContactMain;

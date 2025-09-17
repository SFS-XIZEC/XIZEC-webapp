import React from "react";
import SectionHeading from "../SectionHeading";
import { Carousel, Rate } from "antd";
import Image from "next/image";
import { NoProfilePic } from "@/common/icons";
import { Testimonial, TestimonialBlock } from "@/types";
import ReactMarkdown from "react-markdown";
import { StrapiImage } from "../StrapiImage";

const TestimonialSection: React.FC<{
  TestimonialData: TestimonialBlock;
  Testimonial: Testimonial[];
}> = ({ TestimonialData, Testimonial }) => {
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
    <div className="flex flex-col gap-[60px] ">
      <div className="lg:w-[70%] mx-auto">
        <SectionHeading alignCenter heading={TestimonialData?.heading} />
      </div>

      <div className="w-full">
        <Carousel prefixCls="custom-dots" {...settings}>
          {Testimonial?.map((testimonial, index) => (
            <div key={index} className="flex justify-center ">
              <div className="bg-[#F4F2EA] mx-2 p-4 rounded-[15px] flex flex-col justify-between gap-3 min-h-[420px] min-w-[250px]">
                <div className="flex flex-col items-start gap-3">
                  <div className="text-center flex gap-2">
                    <Rate defaultValue={testimonial.rating} disabled />{" "}
                    <span className="font-bold">{testimonial.rating} </span>
                  </div>
                  <div className="text-gray-700 flex flex-col gap-2">
                    <ReactMarkdown>{testimonial.description}</ReactMarkdown>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="rounded-full overflow-hidden">
                    {testimonial?.profile?.image ? (
                      <StrapiImage
                        src={testimonial?.profile?.image?.url}
                        width={48}
                        height={48}
                        alt={testimonial.profile?.image?.name}
                      />
                    ) : (
                      <NoProfilePic />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">
                      {testimonial?.profile?.name}
                    </h3>
                    <p className="text-[#6B6B6B]">
                      {testimonial?.profile?.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;

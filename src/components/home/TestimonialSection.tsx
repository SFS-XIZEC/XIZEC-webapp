import React from "react";
import SectionHeading from "../SectionHeading";
import { Carousel, Rate } from "antd";
import Image from "next/image";
import { NoProfilePic } from "@/common/icons";

interface ReviewProp {
  id: number;
  rating: number;
  text: string;
  name: string;
  title: string;
  avatar?: string;
}

interface TestimonialProp {
  heading: {
    title: string;
    subtitle: string;
    description: string;
  };
  reviews: ReviewProp[];
}

const TestimonialSection: React.FC<{ data: TestimonialProp }> = ({ data }) => {
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
      <div className="w-[70%] mx-auto">
        <SectionHeading alignCenter heading={data?.heading} />
      </div>

      <div className="w-full">
        <Carousel prefixCls="custom-dots" {...settings}>
          {data?.reviews.map((testimonial, index) => (
            <div key={index} className="flex justify-center ">
              <div className="bg-[#F4F2EA] mr-10 p-4 rounded-[15px] flex flex-col justify-between gap-3 min-h-[420px] min-w-[250px]">
                <div className="flex flex-col items-start gap-3">
                  <div className="text-center flex gap-2"><Rate defaultValue={testimonial.rating} disabled />  <span className="font-bold">{testimonial.rating} </span></div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="rounded-full overflow-hidden">
                    {testimonial?.avatar ? (
                      <Image
                        src={testimonial?.avatar}
                        width={48}
                        height={48}
                        alt={testimonial.name}
                      />
                    ) : (
                      <NoProfilePic />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#6B6B6B]">{testimonial.title}</p>
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

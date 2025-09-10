"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import CommonButton from "../CommonButton";

export interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ServiceSectionType {
  heading: {
    title: string;
    subtitle: string;
    description: string;
  };
  services: ServiceCard[];
  image: {
    name: string;
    alternativeText: string;
    url: string;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

const ServiceSection: React.FC<{
  data: ServiceSectionType;
  bgWhite?: boolean;
}> = ({ data, bgWhite = false }) => {
  const cardRef = useRef<HTMLImageElement>(null);
  const [isMount, setIsMount] = useState(false);
  const [cardWidth, setcardWidth] = useState(0);

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (cardRef.current && isMount) {
      setcardWidth(cardRef.current.offsetWidth);
    }
  }, [isMount]);
  return (
    <section
      className={`relative ${
        bgWhite ? "bg-white text-black" : "bg-black text-white pt-20 pb-[180px]"
      } px-6 md:px-12 lg:px-20 flex flex-col gap-[50px]`}
    >
      <div className="w-[70%] mx-auto">
        <SectionHeading invert={!bgWhite} alignCenter heading={data.heading} />
      </div>

      <div ref={cardRef} className="grid grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-">
          {data.services.map((service, index) => (
            <div
              key={index}
              className={`group flex gap-[10px] items-start  p-6 ${
                index < data.services.length - 1 && "border-b-[1px]"
              } border-[#6B6B6B] hover:rounded-lg transition-all duration-300 ${
                bgWhite ? "text-black" : "text-white"
              } hover:bg-yellow-400 hover:text-black cursor-pointer`}
            >
              {/* Icon */}
              <div className=" w-12 h-12 text-black bg-primary group-hover:bg-black group-hover:text-primary rounded-md flex items-center justify-center">
                {service?.icon}
              </div>

              <div className="flex items-start flex-col gap-3">
                <h4 className="text-lg font-bold">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden">
          <Image
            src={data.image.url}
            alt={data.image.alternativeText}
            width={500}
            height={800}
          />
        </div>
      </div>
      {!bgWhite && (
        <div
          style={{ width: cardWidth }}
          className="absolute -bottom-[100px] bg-yellow-400 text-black rounded-[24px] p-8 flex flex-col gap-6 items-center shadow-xl"
        >
          <div className="flex flex-col text-center">
            <h3 className="text-[56px] font-bold">{data.cta.title}</h3>
            <p className="text-[20px]">{data.cta.subtitle}</p>
          </div>
          <CommonButton
            text={"GET IN TOUCH"}
            className="!border-[2px] !rounded-[10px] "
          />
        </div>
      )}
    </section>
  );
};

export default ServiceSection;

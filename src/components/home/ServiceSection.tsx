"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import HireCard from "../HireCard";
import { ServicesComponent } from "@/types";
import MaskedIcon from "../MaskedIcon";
import { StrapiImage } from "../StrapiImage";

const ServiceSection: React.FC<{
  ServiceData: ServicesComponent;
  bgWhite?: boolean;
}> = ({ ServiceData, bgWhite = false }) => {
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
      <div className="lg:w-[70%] mx-auto">
        <SectionHeading
          invert={!bgWhite}
          alignCenter
          heading={ServiceData?.heading}
        />
      </div>

      <div ref={cardRef} className="grid lg:grid-cols-2 lg:items-center gap-12">
        <div className="flex flex-col">
          {ServiceData?.cards.map((service, index) => (
            <div
              key={index}
              className={`group flex gap-[10px] items-start  p-6 ${
                index < ServiceData?.cards.length - 1 && "border-b-[1px]"
              } border-[#6B6B6B] hover:rounded-lg transition-all duration-300 ${
                bgWhite ? "text-black" : "text-white"
              } hover:bg-yellow-400 hover:text-black cursor-pointer`}
            >
              <div className="p-1 text-black bg-primary group-hover:bg-black group-hover:text-primary rounded-md flex items-center justify-center">
                <MaskedIcon
                  src={service?.image?.url}
                  color="bg-black"
                  groupHoverColor="group-hover:bg-primary"
                  hoverColor="hover:bg-primary"
                  size={24}
                />
              </div>

              <div className="flex items-start flex-col gap-3">
                <h4 className="text-lg font-bold">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg overflow-hidden ">
          <StrapiImage
            src={ServiceData?.image.url}
            alt={ServiceData?.image.name}
            width={500}
            height={800}
            className="!w-full"
          />
        </div>
      </div>
      {!bgWhite && (
        <HireCard
          className="absolute -bottom-[120px] lg:-bottom-[100px]"
          cardWidth={cardWidth}
          data={ServiceData?.HireCard}
        />
      )}
    </section>
  );
};

export default ServiceSection;

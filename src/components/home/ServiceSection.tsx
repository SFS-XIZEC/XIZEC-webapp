"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [cardWidth, setcardWidth] = useState(0);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setcardWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section
      className={`relative ${
        bgWhite ? "bg-white text-black" : "bg-black text-white pt-10 md:pt-20 pb-[180px]"
      } px-6 md:px-12 lg:px-20 flex flex-col gap-[30px] md:gap-[50px]`}
    >
      <SectionHeading
        invert={!bgWhite}
        alignCenter
        heading={ServiceData?.heading}
      />

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

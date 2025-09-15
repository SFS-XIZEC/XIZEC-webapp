"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import HireCard from "../HireCard";
import { BetterSectionBlock } from "@/types";
import { StrapiImage } from "../StrapiImage";

const MakeBetterSection: React.FC<{
  BetterData: BetterSectionBlock;
}> = ({ BetterData }) => {
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
      className={`relative bg-black text-white pt-20 pb-[180px]
      px-6 md:px-12 lg:px-20 flex flex-col gap-[50px]`}
    >
      <div ref={cardRef} className="grid lg:grid-cols-2 items-center gap-12">
        <div className="rounded-lg overflow-hidden">
          <StrapiImage
            src={BetterData.image.url}
            alt={BetterData.image.name}
            width={500}
            height={800}
          />
        </div>

        <div className="flex flex-col gap-10 ">
          <SectionHeading invert heading={BetterData?.heading} />
          <div className="flex flex-col gap-6">
            {BetterData?.cards.map((service, index) => (
              <div key={index} className={`flex gap-2 text-white w-full`}>
                <div className=" min-w-3 h-3 bg-primary rounded-full"></div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-lg font-bold leading-[70%]">
                    {service.title}
                  </h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <HireCard
        className="absolute -bottom-[100px]"
        cardWidth={cardWidth}
        data={BetterData?.HireCard}
      />
    </section>
  );
};

export default MakeBetterSection;

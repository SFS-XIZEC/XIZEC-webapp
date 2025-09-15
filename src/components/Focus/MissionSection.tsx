"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import HireCard from "../HireCard";
import { OurMissionBlock } from "@/types";
import { StrapiImage } from "../StrapiImage";

const MissionSection: React.FC<{ MissionData: OurMissionBlock }> = ({
  MissionData,
}) => {
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
    <section className="relative bg-black mt-[80px] mb-[100px] text-white pt-20 pb-[180px] px-6 md:px-12 lg:px-20 flex flex-col gap-[50px]">
      <div
        ref={cardRef}
        className="grid lg:grid-cols-2 items-center gap-12 h-full"
      >
        <div className="flex flex-col justify-between">
          <SectionHeading invert heading={MissionData?.heading} />
          <div className="rounded-lg overflow-hidden">
            <StrapiImage
              src={MissionData.image1.url}
              alt={MissionData.image1.name}
              width={500}
              height={560}
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <StrapiImage
            src={MissionData.image2.url}
            alt={MissionData.image2.name}
            width={500}
            height={800}
          />
        </div>
      </div>

      <HireCard
        className="absolute -bottom-[100px]"
        cardWidth={cardWidth}
        data={MissionData?.HireCard}
      />
    </section>
  );
};

export default MissionSection;

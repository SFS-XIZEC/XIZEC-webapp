"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import HireCard from "../HireCard";
import { OurMissionBlock } from "@/types";
import { StrapiImage } from "../StrapiImage";

const MissionSection: React.FC<{
  MissionData: OurMissionBlock;
  marginTop?: string;
}> = ({ MissionData, marginTop = "mt-[80px]" }) => {
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
      className={`relative bg-black/95 ${marginTop} mb-[100px] text-white pt-20 pb-[100px] sm:pb-[120px] lg:pb-[180px] px-6 md:px-12 lg:px-20 flex flex-col gap-[50px]`}
    >
      <div
        ref={cardRef}
        className="grid lg:grid-cols-2 items-center gap-12 h-full"
      >
        <div className="flex flex-col justify-between gap-3">
          <SectionHeading invert heading={MissionData?.heading} />
          <div className="rounded-lg overflow-hidden w-full">
            <StrapiImage
              src={MissionData.image1.url}
              alt={MissionData.image1.name}
              width={500}
              height={560}
              className="w-full lg:w-[500px]"
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <StrapiImage
            src={MissionData.image2.url}
            alt={MissionData.image2.name}
            width={500}
            height={800}
            className="w-full lg:w-[500px]"
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

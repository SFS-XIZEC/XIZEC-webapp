"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import HireCard from "../HireCard";
import { Timeline } from "antd";
import { HistorySectionBlock } from "@/types";

const HistorySection: React.FC<{ HistoryData: HistorySectionBlock }> = ({
  HistoryData,
}) => {
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
    <div
      className={`relative bg-black text-white pt-10 xl:pt-20 sm:pb-[120px] md:pb-[100px] xl:pb-[180px] px-6 xl:px-12 lg:px-20 flex flex-col items-center gap-[10px] sm:gap-[20px] xl:gap-[50px]`}
    >
      <SectionHeading invert alignCenter heading={HistoryData?.heading} />

      <div
        ref={cardRef}
        className="bg-black md:py-12 px-4 md:px-20 custom-timeline w-full"
      >
        <Timeline
          className="hidden md:block"
          mode="alternate"
          items={HistoryData?.cards?.map((item, index) => ({
            dot: <div className="w-8 h-8 bg-primary rounded-full"></div>,
            children: (
              <div className="relative bg-[#2D2D2D] p-4 rounded-[12px] text-start gap-2 font-sans">
                <div
                  className={`absolute top-5 transform -translate-y-1/2 w-0 h-0 
        border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent 
        ${
          (index + 1) % 2 === 0
            ? "right-[-8px] border-l-[8px] border-l-[#2D2D2D]"
            : "left-[-8px] rotate-180 border-l-[8px] border-l-[#2D2D2D]"
        }`}
                />

                <h3 className="text-white text-lg font-bold">{item.year}</h3>
                <div>
                  <h4 className="text-white text-md font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-xs xl:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ),
          }))}
        />

        <div className="md:hidden flex flex-col">
          {HistoryData?.cards?.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[343px] relative bg-[#2D2D2D] p-4 rounded-[12px] text-start gap-2">
                <h3 className="text-white text-lg font-bold">{item.year}</h3>
                <div>
                  <h4 className="text-white text-md font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
              {index < HistoryData?.cards?.length - 1 && (
                <div className="w-1 border-dashed h-20 border-l-2 border-[#6B6B6B]"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <HireCard
        className="absolute -bottom-[100px]"
        cardWidth={cardWidth}
        data={HistoryData?.HireCard}
      />
    </div>
  );
};

export default HistorySection;

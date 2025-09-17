"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "../SectionHeading";
import HireCard from "../HireCard";
import { Timeline } from "antd";
import { Heading } from "@/types";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type HistoryHeading = {
  subtitle: string;
  title: string;
  description: string;
};

export type HistoryCTA = {
  title: string;
  subtitle: string;
};

export type HistoryData = {
  heading: Heading;
  timelineData: TimelineItem[];
  cta: HistoryCTA;
};

const HistorySection: React.FC<{ data: HistoryData }> = ({ data }) => {
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
    <div
      className={`relative bg-black text-white pt-20 pb-[180px] px-6 md:px-12 lg:px-20 flex flex-col gap-[50px]`}
    >
      <div className="lg:w-[70%] mx-auto">
        <SectionHeading invert alignCenter heading={data.heading} />
      </div>

      <div
        ref={cardRef}
        className="bg-black py-12 px-4 md:px-20 custom-timeline"
      >
        <Timeline
          className="hidden lg:block"
          mode="alternate"
          items={data?.timelineData.map((item, index) => ({
            dot: <div className="w-8 h-8 bg-primary rounded-full"></div>,
            children: (
              <div className="relative bg-[#2D2D2D] p-4 rounded-[12px] text-start gap-2">
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
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ),
          }))}
        />

        <div className="flex flex-col">
          {data?.timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative bg-[#2D2D2D] p-4 rounded-[12px] text-start gap-2">
                <h3 className="text-white text-lg font-bold">{item.year}</h3>
                <div>
                  <h4 className="text-white text-md font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
              {index < data?.timelineData?.length-1 && (
                <div className="w-1 border-dashed h-20 border-l-2 border-[#6B6B6B]"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <HireCard
        className="absolute -bottom-[100px]"
        cardWidth={cardWidth}
        data={data?.cta}
      /> */}
    </div>
  );
};

export default HistorySection;

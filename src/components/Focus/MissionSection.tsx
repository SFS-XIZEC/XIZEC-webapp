"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import CommonButton from "../CommonButton";
import HireCard from "../HireCard";

export interface MissionSectionType {
  heading: {
    title: string;
    subtitle: string;
    description: string;
  };
  image1: {
    name: string;
    alternativeText: string;
    url: string;
  };
  image2: {
    name: string;
    alternativeText: string;
    url: string;
  };
  cta: {
    title: string;
    subtitle: string;
  };
}

interface Props {
  data: MissionSectionType;
}

const MissionSection: React.FC<Props> = ({ data }) => {
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
          <SectionHeading invert heading={data.heading} />
          <div className="rounded-lg overflow-hidden">
            <Image
              src={data.image1.url}
              alt={data.image1.alternativeText}
              width={500}
              height={560}
            />
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Image
            src={data.image2.url}
            alt={data.image2.alternativeText}
            width={500}
            height={800}
          />
        </div>
      </div>

      <HireCard
        className="absolute -bottom-[100px]"
        cardWidth={cardWidth}
        data={data?.cta}
      />
    </section>
  );
};

export default MissionSection;

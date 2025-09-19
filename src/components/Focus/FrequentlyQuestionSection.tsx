"use client";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Faq, FaqBlock } from "@/types";
import { StrapiImage } from "../StrapiImage";

const FrequentlyQuestionSection: React.FC<{
  data: Faq[];
  FaqData: FaqBlock;
  margin?: string;
}> = ({ data, FaqData, margin = "mt-[50px]" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div
      className={`bg-white flex flex-col gap-8 sm:gap-10 md:gap-16 px-6 md:px-12 lg:px-20 ${margin}`}
    >
      <SectionHeading heading={FaqData?.heading} alignCenter />

      <div className="relative">
        <div className="hidden md:block absolute bottom-0 left-0">
          <StrapiImage
            src={FaqData?.image.url}
            alt={FaqData?.image.name}
            width={200}
            height={400}
          />
        </div>
        <div className="hidden md:block absolute top-0 right-0">
          <StrapiImage
            src={FaqData?.image.url}
            alt={FaqData?.image.name}
            width={200}
            height={400}
          />
        </div>
        <div className="lg:w-[80%] mx-auto flex flex-col gap-6 z-40">
          {data?.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4 cursor-pointer z-40 "
            >
              <div
                className="flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-gray-500 ">
                  {openIndex === index ? (
                    <MinusOutlined size={20} />
                  ) : (
                    <PlusOutlined size={20} />
                  )}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestionSection;

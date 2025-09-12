"use client";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import Image from "next/image";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  heading: {
    title: string;
    subtitle: string;
    description?: string;
  };
  faqs: FAQItem[];
  image:{
    url:string;
    alternativeText:string;
    name:string;
  }
}

const FrequentlyQuestionSection: React.FC<{ data: FAQSectionProps }> = ({
  data,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white mt-[50px] flex flex-col gap-16 px-6 md:px-12 lg:px-20">
      <SectionHeading heading={data?.heading} alignCenter />

      <div className="relative">
        <div className="lg:w-[80%] mx-auto flex flex-col gap-6 z-50">
        {data?.faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-gray-500 z-50">
                {openIndex === index ? (
                  <MinusOutlined size={20} />
                ) : (
                  <PlusOutlined size={20} />
                )}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
        </div>
        <div className="hidden lg:block absolute bottom-0 left-0">
          <Image
            src={data.image.url}
            alt={data.image.alternativeText}
            width={200}
            height={400}
          />
        </div>
        <div className="hidden lg:block absolute top-0 right-0">
          <Image
            src={data.image.url}
            alt={data.image.alternativeText}
            width={200}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestionSection;

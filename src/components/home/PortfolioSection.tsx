import React from "react";
import SectionHeading from "../SectionHeading";
import CommonButton from "../CommonButton";
import { PortfolioComponent } from "@/types";
import Link from "next/link";
import { StrapiImage } from "../StrapiImage";

const PortfolioSection: React.FC<{
  PortfolioData: PortfolioComponent;
  margin?: string;
}> = ({ PortfolioData, margin = "mt-[120px]" }) => {
  return (
    <div
      className={`${margin} px-6 md:px-12 lg:px-20 flex flex-col items-center gap-[50px]`}
    >
      <SectionHeading alignCenter heading={PortfolioData?.heading} />

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PortfolioData?.images.map((img, index) => (
            <div
              key={index}
              className={`relative w-full h-auto ${
                index % 5 === 0 ? "md:row-span-2" : ""
              }`}
            >
              <StrapiImage
                src={img.url}
                alt={img.name}
                width={600}
                height={400}
                className="h-full w-full object-cover rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {PortfolioData?.Button?.text &&
        (PortfolioData.Button.href ? (
          <Link
            href={PortfolioData.Button.href}
            target={PortfolioData.Button.isExternal ? "_blank" : "_self"}
          >
            <CommonButton
              text={PortfolioData.Button.text}
              className="!rounded-[10px] !bg-transparent !border-[2px]"
            />
          </Link>
        ) : (
          <CommonButton
            className="!rounded-[10px] !bg-transparent !border-[2px]"
            text={PortfolioData.Button.text}
          />
        ))}
    </div>
  );
};

export default PortfolioSection;

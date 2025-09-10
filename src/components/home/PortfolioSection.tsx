import React from "react";
import SectionHeading from "../SectionHeading";
import Image from "next/image";
import CommonButton from "../CommonButton";

interface ImageProp {
  name: string;
  alternativeText: string;
  url: string;
}

export interface PotfolieoProp {
  heading: {
    title: string;
    subtitle: string;
    description: string;
  };
  imagesCol1: ImageProp[];
  imagesCol2: ImageProp[];
}

const PortfolioSection: React.FC<{ data: PotfolieoProp; margin?: string }> = ({
  data,
  margin = "120px",
}) => {
  return (
    <div
      className={`mt-[${margin}] px-6 md:px-12 lg:px-20 flex flex-col items-center gap-[50px]`}
    >
      <SectionHeading alignCenter heading={data?.heading} />

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {data?.imagesCol1.map((img, index) => (
              <div key={index} className="relative w-full h-auto">
                <Image
                  src={img.url}
                  alt={img.name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {data?.imagesCol2.map((img, index) => (
              <div key={index} className="relative w-full h-auto">
                <Image
                  src={img.url}
                  alt={img.name}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <CommonButton
        text={"Load More"}
        className="!rounded-[10px] !bg-transparent !border-[2px]"
      />
    </div>
  );
};

export default PortfolioSection;

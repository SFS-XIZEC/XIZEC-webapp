import CommonButton from "../CommonButton";
import SectionHeading from "../SectionHeading";
import { AboutComponent } from "@/types";
import { StrapiImage } from "../StrapiImage";
import Link from "next/link";

const AboutSection: React.FC<{ AboutData: AboutComponent }> = ({
  AboutData,
}) => {
  return (
    <section
      id="about"
      className="bg-white flex flex-col lg:gap-16 px-6 md:px-12 lg:px-20"
    >
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <div className="flex gap-5 justify-center lg:justify-start">
          <StrapiImage
            src={AboutData?.image.url}
            alt={AboutData?.image.name}
            width={617}
            height={600}
            className=""
          />
        </div>

        <div className="flex flex-col gap-4 lg:gap-6 items-start justify-between">
          <SectionHeading heading={AboutData?.heading} />

          {/* <div
            className="text-textcolor leading-relaxed"
            dangerouslySetInnerHTML={{ __html: description }}
          /> */}

          {AboutData?.heading?.Button?.text &&
            (AboutData?.heading.Button.href ? (
              <Link
                href={AboutData?.heading.Button.href}
                target={
                  AboutData?.heading.Button.isExternal ? "_blank" : "_self"
                }
              >
                <CommonButton text={AboutData?.heading.Button.text} />
              </Link>
            ) : (
              <CommonButton text={AboutData?.heading.Button.text} />
            ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-[12px] xl:gap-0 xl:px-[8px]">
        {AboutData?.statistics.map((stat, index) => (
          <div key={index} className="">
            <div className="flex items-center justify-between h-40">
              <div className="flex flex-col items-center p-2 lg:px-10 lg:py-3">
                <div className="text-black text-[54px] md:text-[64px] font-semibold leading-12 md:leading-14">
                  {stat.value}+
                </div>
                <div className="text-[#5C5C5C] text-center text-[12px] sm:text-[14px] md:text-[18px]">
                  {stat.data}
                </div>
              </div>
              {index !== AboutData?.statistics?.length - 1 && (
                <div
                  className={`w-1 lg:h-[110px] ${
                    (index + 1) % 2 === 0 ? "h-0" : "h-[110px]"
                  } border-r-1 border-[#B9B9B9]`}
                ></div>
              )}
            </div>
            {index < 2 && (
              <div className="w-full border-b-1 border-[#B9B9B9] h-1 lg:hidden"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

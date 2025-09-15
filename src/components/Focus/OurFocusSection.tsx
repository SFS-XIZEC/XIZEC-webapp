import Image from "next/image";
import CommonButton from "../CommonButton";
import SectionHeading from "../SectionHeading";
import { OurVisionBlock } from "@/types";
import { StrapiImage } from "../StrapiImage";
import Link from "next/link";

interface OurFocusProps {
  VisionData: OurVisionBlock;
  rowReverse?: boolean;
}

const OurFocusSection: React.FC<OurFocusProps> = ({
  VisionData,
  rowReverse = false,
}) => {
  return (
    <div
      className={`mx-auto ${
        rowReverse && "lg:flex-row-reverse flex-col-reverse"
      } flex flex-col lg:flex-row gap-6 lg:gap-12 items-center bg-white px-6 md:px-12 lg:px-20`}
    >
      <div className="lg:w-[50%] flex gap-5 justify-center lg:justify-start">
        <StrapiImage
          src={VisionData?.image.url}
          alt={VisionData?.image.name}
          width={617}
          height={600}
          className=""
        />
      </div>

      <div className="lg:w-[50%] flex flex-col gap-6 items-start justify-between">
        <SectionHeading heading={VisionData?.heading} />

        {/* <div
          className="text-textcolor leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        /> */}

        {VisionData?.heading?.Button?.text &&
          (VisionData?.heading?.Button.href ? (
            <Link
              href={VisionData?.heading?.Button.href}
              target={
                VisionData?.heading?.Button.isExternal ? "_blank" : "_self"
              }
            >
              <CommonButton text={VisionData?.heading?.Button.text} />
            </Link>
          ) : (
            <CommonButton text={VisionData?.heading?.Button.text} />
          ))}
      </div>
    </div>
  );
};

export default OurFocusSection;

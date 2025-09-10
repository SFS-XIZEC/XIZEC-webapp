import Image from "next/image";
import CommonButton from "../CommonButton";
import SectionHeading from "../SectionHeading";

interface OurFocusProps {
  images: {
    url: string;
    alternativeText: string;
    name: string;
  };
  subtitle: string;
  title: string;
  description: string;
  link: {
    text: string;
    href: string;
    isExternal: boolean;
  };
  rowReverse?: boolean;
}

const OurFocusSection: React.FC<OurFocusProps> = ({
  images,
  subtitle,
  title,
  description,
  link,
  rowReverse = false,
}) => {
  return (
    <div
      className={`mx-auto ${
        rowReverse && "flex-row-reverse"
      } flex gap-12 items-center bg-white px-6 md:px-12 lg:px-20`}
    >
      <div className="w-[50%] flex gap-5 justify-center lg:justify-start">
        <Image
          src={images.url}
          alt={images.name}
          width={617}
          height={600}
          className=""
        />
      </div>

      <div className="w-[50%] flex flex-col gap-6 items-start justify-between">
        <SectionHeading heading={{ subtitle: subtitle, title: title }} />

        <div
          className="text-textcolor leading-relaxed"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <CommonButton text={link.text} />
      </div>
    </div>
  );
};

export default OurFocusSection;

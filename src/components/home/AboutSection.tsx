import Image from "next/image";
import Link from "next/link";
import CommonButton from "../CommonButton";
import SectionHeading from "../SectionHeading";

interface StatItem {
    value: string;
    title: string;
}

interface AboutProps {
    images: {
        url: string,
        alternativeText: string;
        name: string;
    };
    subtitle: string;
    title: string;
    description: string;
    link: {
        text: string,
        href: string,
        isExternal: boolean,
    }
    stats: StatItem[];
}

const AboutSection: React.FC<AboutProps> = ({
    images,
    subtitle,
    title,
    description,
    link,
    stats,
}) => {
    return (
        <section className="bg-white flex flex-col gap-16 px-6 md:px-12 lg:px-20">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="flex gap-5 justify-center lg:justify-start">
                    <Image
                        src={images.url}
                        alt={images.name}
                        width={617}
                        height={600}
                        className=""
                    />
                </div>

                <div className="flex flex-col gap-6 items-start justify-between">
                   <SectionHeading heading={{subtitle:subtitle,title:title}}/>

                    <div
                        className="text-textcolor leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />

                    <CommonButton text={link.text} />


                </div>
            </div>

            <div className="grid grid-cols-4 gap-[12px] xl:gap-0 xl:px-[8px]">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex items-center"
                    >
                        <div className="flex flex-col items-center px-10 py-3">
                            <div className="text-black text-[64px] font-semibold leading-[120%]">
                                {stat.value}
                            </div>
                            <div className="text-[#5C5C5C] mt-2 text-center text-[18px] leading-[120%]">
                                {stat.title}
                            </div>
                        </div>
                        {index !== stats?.length - 1 && <div className="w-1 h-[110px] border-r-1 border-[#B9B9B9]"></div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;

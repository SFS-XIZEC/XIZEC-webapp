import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ContactItem {
  text: string;
  icon: ReactNode;
  type: string;
}

interface SocialLink {
  href: string;
  icon: ReactNode;
  isExternal?: boolean;
}

interface MapSectionProp {
  title: string;
  subtitle: string;
  mapImg: {
    url: string;
    name: string;
    alternativeText: string;
  };
  cols3: ContactItem[];
  socialLinks: SocialLink[];
}

const MapContactSection: React.FC<{ data: MapSectionProp }> = ({ data }) => {
  return (
    <div className="lg:relative px-6 md:px-12 lg:px-20 ">
      {/* <Image
        src={data?.mapImg?.url}
        alt={data?.mapImg?.name}
        width={1200}
        height={600}
        className="w-full object-cover"
      /> */}

      <iframe
        className="w-full lg:h-screen rounded-xl lg:rounded-none"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6318085.061315742!2d-98.80713801343545!3d39.35618064186352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C%20USA!5e0!3m2!1sen!2sin!4v1757570952193!5m2!1sen!2sin"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
      <div className="mt-6 lg:mt-0 border-[1px] lg:border-none border-[#EAEAEA] flex flex-col justify-between lg:absolute lg:right-30 rounded-xl lg:rounded-t-[12px] lg:bottom-0 p-4 lg:p-8 bg-white lg:w-[400px] ">
        <div className="flex flex-col gap-4 items-start">
          <h1 className="font-semibold text-[32px] lg:text-[48px] leading-[120%]">
            {data?.title}
          </h1>
          <p className="text-[16px] leading-[150%]">{data?.subtitle}</p>
        </div>

        <div className="flex flex-col gap-3 items-start">
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-2xl font-semibold">Contact</h3>
            <ul className="space-y-3">
              {data?.cols3.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="bg-primary text-black w-[32px] h-[32px] rounded-[4px] flex items-center justify-center">
                    {item?.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            {data?.socialLinks.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                target={social.isExternal ? "_blank" : "_self"}
                rel={social.isExternal ? "noopener noreferrer" : ""}
                className="bg-black text-white hover:text-black rounded-full hover:bg-yellow-400 transition"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContactSection;

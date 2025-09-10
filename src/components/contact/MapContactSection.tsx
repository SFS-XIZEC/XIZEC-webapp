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
    <div className="relative px-6 md:px-12 lg:px-20">
      <Image
        src={data?.mapImg?.url}
        alt={data?.mapImg?.name}
        width={1200}
        height={600}
        className="w-full object-cover"
      />
      <div className="flex flex-col justify-between absolute right-30 rounded-t-[12px] bottom-0 p-8 bg-white w-[390px]">
        <div className="flex flex-col gap-4 items-start">
          <h1 className="font-semibold text-[48px] leading-[120%]">
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

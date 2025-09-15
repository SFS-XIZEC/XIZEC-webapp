import React from "react";
import Link from "next/link";
import { BannerItem } from "@/types";
import MaskedIcon from "../MaskedIcon";

const Banner: React.FC<{ banner: BannerItem[] }> = ({ banner }) => {
  return (
    <div className="bg-primary h-12 w-full p-3 lg:px-6 lg:py-3 flex justify-between items-center">
      {banner?.map((item) => {
        const { id, value, image, type } = item;

        let linkHref = "#";
        if (type === "email") linkHref = `mailto:${value}`;
        if (type === "phone") {
          const phoneNumber = value.replace(/\D/g, "");
          linkHref = `tel:${phoneNumber}`;
        }
        if (type === "location")
          linkHref = `https://www.google.com/maps/search/?api=1&query=${value}`;

        return (
          <Link
            href={linkHref}
            key={id}
            target={type === "location" ? "_blank" : undefined}
            className="flex gap-1 lg:gap-2 items-center  transition-colors"
          >
            {/* <StrapiImage
              src={image?.url}
              width={24}
              height={24}
              className="object-cover"
              alt={image?.alternativeText || "Hero Icon"}
            /> */}

            <MaskedIcon src={image?.url} size={24} />
            <p className="text-black text-[14px] sm:text-[16px]">{value}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Banner;

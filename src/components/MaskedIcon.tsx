import { getStrapiMedia } from "@/lib/utils";
import React from "react";

type IconProps = {
  src: string;
  size?: number;
  color?: string; // Tailwind base color
  hoverColor?: string; // Tailwind hover color
  groupHoverColor?:string;
};

const MaskedIcon: React.FC<IconProps> = ({
  src,
  size = 24,
  color = "bg-black",
  hoverColor = "hover:bg-black",
  groupHoverColor = "group-hover:bg-black"
}) => {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${size}x${size}`;

  const isHexOrCss = color?.startsWith("#") || color?.startsWith("rgb");
  return (
    <div
      className={`${!isHexOrCss ? color : ""}  ${hoverColor} ${groupHoverColor} transition-colors duration-300`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: isHexOrCss ? color : undefined,
        WebkitMask: `url(${
          imageUrl || imageFallback
        }) no-repeat center / contain`,
        mask: `url(${imageUrl || imageFallback}) no-repeat center / contain`,
      }}
    />
  );
};

export default MaskedIcon;

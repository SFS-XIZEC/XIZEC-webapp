import React from "react";
import CommonButton from "./CommonButton";
import { HireCardBlock, HireCardProp } from "@/types";
import Link from "next/link";

const HireCard: React.FC<{
  data: HireCardProp | HireCardBlock;
  cardWidth?: number;
  className?: string;
}> = ({ data, cardWidth, className }) => {
  // const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      style={{ width: cardWidth && cardWidth }}
      className={`bg-yellow-400 text-black rounded-[24px] p-4 lg:p-8 flex flex-col gap-6 items-center shadow-xl ${className}`}
    >
      {/* <GetInTouchModal open={open} onClose={() => setOpen(false)} /> */}
      <div className="flex flex-col text-center gap-[11px]">
        <h3 className="text-[32px] lg:text-[56px] font-bold leading-[120%]">
          {data.title}
        </h3>
        <p className="lg:text-[20px]">{data?.description}</p>
      </div>
      {data?.Button?.text &&
        (data.Button.href ? (
          <Link
            href={data.Button.href}
            target={data.Button.isExternal ? "_blank" : "_self"}
          >
            <CommonButton text={data.Button.text} className="!border" />
          </Link>
        ) : (
          <CommonButton text={data.Button.text} className="!border" />
        ))}
    </div>
  );
};

export default HireCard;

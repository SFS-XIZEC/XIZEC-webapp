import React from "react";
import CommonButton from "./CommonButton";

interface HireCardProp {
  title: string;
  subtitle: string;
}

const HireCard: React.FC<{ data: HireCardProp, cardWidth?:number,
    className?:string }> = ({ data,cardWidth,className }) => {
  return (
    <div
      style={{ width: cardWidth && cardWidth }}
      className={`bg-yellow-400 text-black rounded-[24px] p-8 flex flex-col gap-6 items-center shadow-xl ${className}`}
    >
      <div className="flex flex-col text-center">
        <h3 className="text-[56px] font-bold">{data.title}</h3>
        <p className="text-[20px]">{data.subtitle}</p>
      </div>
      <CommonButton
        text={"GET IN TOUCH"}
        className="!border-[2px] !rounded-[10px] "
      />
    </div>
  );
};

export default HireCard;

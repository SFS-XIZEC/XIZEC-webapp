"use client";
import Link from "next/link";
import React from "react";
import FormComponent from "../FormComponent";
import { usePathname } from "next/navigation";
import { Contact, FormSection, SocialLink } from "@/types";
import MaskedIcon from "../MaskedIcon";

interface FormSectionProp {
  ContactData: Contact[];
  SocialLinks: SocialLink[];
  FormSection: FormSection;
  isModal?: boolean;
}

const FormSecton: React.FC<FormSectionProp> = ({
  ContactData,
  SocialLinks,
  FormSection,
  isModal = false,
}) => {
  const pathname = usePathname();

  if (pathname === "/contact" && !isModal) return null;
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center font-sans scrollbar-hide"
      style={{
        backgroundImage: isModal ? "" : "url('/images/formbg.png')",
      }}
    >
      {!isModal && <div className="absolute inset-0 bg-black/80"></div>}

      <div
        className={`relative  ${
          isModal
            ? "text-black flex flex-col lg:flex-row"
            : "grid lg:grid-cols-2 gap-10 p-4 lg:py-[60px] lg:px-[80px] text-white"
        }`}
      >
        <div
          className={`flex flex-col gap-3 justify-between ${
            isModal && "lg:w-1/2 px-4 pt-4 lg:p-8 lg:bg-primary rounded-l-xl"
          }`}
        >
          <div className="flex flex-col gap-4 items-start">
            <h1
              className={`font-bold ${
                isModal
                  ? "text-[32px] lg:text-[48px]"
                  : "text-[32px] lg:text-[56px]"
              } leading-[120%]`}
            >
              {FormSection?.title}
            </h1>
            <p
              className={`${
                isModal ? "text-[12px]" : "text-[16px]"
              } leading-[150%]`}
            >
              {FormSection?.Description}
            </p>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <div className="flex flex-col gap-3">
              {isModal && (
                <h3
                  className={`${
                    isModal ? "text-black" : "text-white"
                  } text-2xl font-semibold hidden lg:block`}
                >
                  Contact
                </h3>
              )}
              <ul className={`${isModal && "hidden lg:block"} space-y-2`}>
                {ContactData?.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="bg-primary text-black w-[32px] h-[32px] rounded-[4px] flex items-center justify-center">
                      <MaskedIcon src={item?.image?.url ?? "#"} size={28} />
                    </span>
                    <span>{item?.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {isModal && (
              <div className="hidden lg:flex items-center gap-3">
                {SocialLinks?.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    target={"_blank"}
                    className="!bg-black group p-2 rounded-full transition"
                  >
                    <MaskedIcon
                      src={social?.icon?.url ?? "#"}
                      size={28}
                      color="bg-white"
                      hoverColor="hover:bg-white"
                      groupHoverColor="group-hover:bg-white"
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          className={`${
            isModal
              ? "lg:w-2/3 px-4 lg:p-8"
              : "bg-white/10 backdrop-blur-lg rounded-[20px] p-6 lg:p-10"
          }`}
        >
          <FormComponent isModal={isModal} />
        </div>
      </div>
    </div>
  );
};

export default FormSecton;

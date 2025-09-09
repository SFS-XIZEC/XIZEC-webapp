import Link from "next/link";
import React, { ReactNode } from "react";
import FormComponent from "../FormComponent";

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

interface FormSectionProp {
  title: string;
  subtitle: string;
  cols3: ContactItem[];
  socialLinks: SocialLink[];
}

const FormSecton: React.FC<{ data: FormSectionProp; isModal?: boolean }> = ({
  data,
  isModal = false,
}) => {
  return (
    <div
      className="relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/images/formbg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative text-white grid grid-cols-2 gap-10 py-[60px] px-[80px] ">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="font-bold text-[56px] leading-[120%]">
              {data?.title}
            </h1>
            <p className="text-[16px] leading-[150%]">{data?.subtitle}</p>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <div className="flex flex-col gap-3">
              {isModal && (
                <h3 className="text-white text-2xl font-semibold">Contact</h3>
              )}
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

            {isModal && (
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
            )}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-[20px] p-10">
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default FormSecton;

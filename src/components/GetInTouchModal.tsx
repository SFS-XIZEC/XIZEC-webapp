import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import FormSecton from "./global/FormSection";
import {
  FacebookIcon,
  InstagramIcon,
  LinkdinIcon,
  LocationIcon,
  MailBoxIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/common/icons";
import { Contact, FormSection, SocialLink } from "@/types";

interface ModalProp {
  ContactData: Contact[];
  SocialLinks: SocialLink[];
  FormSection: FormSection;
  open: boolean;
  onClose: () => void;
}
const formData = {
  title: "Let’s Build Your Next Big IT Success",
  subtitle:
    "At XIZEC, we turn ideas into impactful solutions with expert IT consulting, digital transformation, and future-ready strategies. Share your vision with us—we’ll make it happen.",
  cols3: [
    {
      text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      icon: <LocationIcon />,
      type: "location",
    },
    {
      text: "sara.cruz@example.com",
      icon: <MailBoxIcon />,
      type: "email",
    },
    {
      text: "(239) 555-0108",
      icon: <PhoneIcon />,
      type: "phone",
    },
  ],
  socialLinks: [
    { href: "https://facebook.com", icon: <FacebookIcon />, isExternal: true },
    {
      href: "https://instagram.com",
      icon: <InstagramIcon />,
      isExternal: true,
    },
    { href: "https://linkedin.com", icon: <LinkdinIcon />, isExternal: true },
    { href: "https://twitter.com", icon: <TwitterIcon />, isExternal: true },
  ],
};
const GetInTouchModal: React.FC<ModalProp> = ({
  open,
  onClose,
  ContactData,
  SocialLinks,
  FormSection,
}) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={false}
      closable={false}
      width={1000}
      className="!relative !top-5"
      prefixCls="custom-modal"
    >
      <button
        onClick={onClose}
        className="z-50 cursor-pointer absolute w-[27px] h-[27px] bg-black rounded-full text-white flex items-center justify-center -top-[10px] -right-[10px] text-sm"
      >
        <CloseOutlined className="text-white" />
      </button>

      <FormSecton
        ContactData={ContactData}
        FormSection={FormSection}
        SocialLinks={SocialLinks}
        isModal
      />
    </Modal>
  );
};

export default GetInTouchModal;

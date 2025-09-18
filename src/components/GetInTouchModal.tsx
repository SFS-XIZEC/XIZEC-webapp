import { CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";
import FormSecton from "./global/FormSection";
import { Contact, FormSection, SocialLink } from "@/types";

interface ModalProp {
  ContactData: Contact[];
  SocialLinks: SocialLink[];
  FormSection: FormSection;
  open: boolean;
  onClose: () => void;
}

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
        onClose={onClose}
      />
    </Modal>
  );
};

export default GetInTouchModal;

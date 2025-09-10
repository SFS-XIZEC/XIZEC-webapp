"use client";
import React, { useState } from "react";
import { Form, Input, message } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import CommonButton from "./CommonButton";
import parsePhoneNumberFromString from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";

interface FormProp {
  fullName: string;
  email: string;
  phone: string;
  projectDetails: string;
}

const FormComponent: React.FC<{ textColor?: string,isContact?:boolean }> = ({ textColor,isContact = false }) => {
  const [form] = Form.useForm();
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const onFinish = (values: FormProp) => {
    let phoneNo = "";
    let countryCode = "";

    const parsed = parsePhoneNumberFromString(String("+" + values.phone));
    if (!parsed || !parsed?.isValid()) {
      return;
    }
    countryCode = `+${parsed.countryCallingCode}`;
    phoneNo = parsed.nationalNumber;
    if (!captchaValue) {
      message.error("Please complete the reCAPTCHA before submitting!");
      return;
    }
    const data = { ...values, phoneNo, countryCode };

    console.log("Form Data:", data);
    message.success("Form submitted successfully!");
    form.resetFields();
    setCaptchaValue(null);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      requiredMark={false}
    >
      <div className={`grid ${isContact ? "grid-cols-1" :"grid-cols-2 gap-3"}`}>
        {/* Full Name */}
        <Form.Item
          name="fullName"
          label={
            <span className={`${textColor ? textColor : "text-white"}`}>
              Full Name
            </span>
          }
          rules={[
            { required: true, message: "Please enter your full name!" },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: "Name should contain only letters!",
            },
          ]}
        >
          <Input
            placeholder="Enter your full name"
            className={`!h-[56px] !py-[10px] px-[16px]  border !border-[#9A9A9A] !rounded-[12px] !shadow-none `}
          />
        </Form.Item>

        {/* Business Email */}
        <Form.Item
          name="email"
          label={
            <span className={`${textColor ? textColor : "text-white"}`}>
              Buisness Email
            </span>
          }
          rules={[
            { required: true, message: "Please enter your email!" },
            { type: "email", message: "Please enter a valid email address!" },
          ]}
        >
          <Input
            placeholder="Enter your business email"
            className={`!h-[56px] !py-[10px] px-[16px]  border !border-[#9A9A9A] !rounded-[12px] !shadow-none `}
          />
        </Form.Item>
      </div>

      {/* Phone Number */}
      <Form.Item
        name={"phone"}
        label={
          <span className={`${textColor ? textColor : "text-white"}`}>
            Mobile Number
          </span>
        }
      >
        <div>
          <PhoneInput
            country={"au"}
            onChange={(value) => form.setFieldsValue({ phone: value })}
            buttonClass="!border-[#9A9A9A]"
            inputStyle={{
              color: "black",
              width: "calc(100% - 60px)",
              height: "56px",
              borderRadius: "12px",
              border: "1px solid #9A9A9A",
              fontSize: "16px",
              marginLeft: "60px",
            }}
            inputClass="w-full"
            enableSearch={true}
            containerClass="w-full"
          />
        </div>
      </Form.Item>
      <Form.Item
        name="projectDetails"
        label={
          <span className={`${textColor ? textColor : "text-white"}`}>
            Project Details
          </span>
        }
        rules={[
          { required: true, message: "Please enter your project details!" },
          {
            min: 20,
            message: "Project details must be at least 20 characters long!",
          },
        ]}
      >
        <Input.TextArea
          className={` border !border-[#9A9A9A] !rounded-[12px] !shadow-none `}
          rows={6}
          placeholder="Describe your project in detail"
        />
      </Form.Item>

      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={(value) => setCaptchaValue(value)}
      />

      <Form.Item>
        <CommonButton text="Submit" className="w-full mt-3" />
      </Form.Item>
    </Form>
  );
};

export default FormComponent;

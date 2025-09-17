"use client";
import React, { useState, useTransition } from "react";
import { App, Form, Input } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import CommonButton from "./CommonButton";
import parsePhoneNumberFromString from "libphonenumber-js";
import PhoneInput from "react-phone-input-2";
import { submitForm } from "@/action/submitForm";

interface FormProp {
  fullName: string;
  email: string;
  phone: string;
  projectDetails: string;
}

const FormComponent: React.FC<{
  textColor?: string;
  isContact?: boolean;
  isModal?: boolean;
}> = ({ textColor, isContact = false, isModal = false }) => {
  const [form] = Form.useForm();
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const { message } = App.useApp();
  const [isPending, startTransition] = useTransition();

  const onFinish = (values: FormProp) => {
    // if (!captchaValue) {
    //   message.error("Please complete the reCAPTCHA before submitting!");
    //   return;
    // }

    // const parsed = parsePhoneNumberFromString("+" + values.phone)!;
    // const countryCode = `+${parsed.countryCallingCode}`;
    // const phoneNo = parsed.nationalNumber;

    const payload = {
      ...values,
      // recaptchaToken: captchaValue,
    };

    startTransition(async () => {
      try {
        await submitForm(payload);
        message.success("Form submitted successfully!");
        form.resetFields();
        setCaptchaValue(null);
      } catch (err) {
        console.error(err);
        message.error("Error submitting form. Please try again.");
      }
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      requiredMark={false}
    >
      <div
        className={`grid ${
          isContact ? "grid-cols-1" : "lg:grid-cols-2 lg:gap-3"
        }`}
      >
        {/* Full Name */}
        <Form.Item
          name="fullName"
          label={
            <span
              className={`${
                isModal ? "text-black" : textColor || "text-white"
              }`}
            >
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
            className={`!h-[54px] !py-[10px] px-[16px]  border !border-[#9A9A9A] !rounded-[12px] !shadow-none `}
          />
        </Form.Item>

        {/* Business Email */}
        <Form.Item
          name="email"
          label={
            <span
              className={`${
                isModal ? "text-black" : textColor || "text-white"
              }`}
            >
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
            className={`!h-[54px] !py-[10px] px-[16px]  border !border-[#9A9A9A] !rounded-[12px] !shadow-none `}
          />
        </Form.Item>
      </div>

      <Form.Item
        name={"phone"}
        label={
          <span
            className={`${isModal ? "text-black" : textColor || "text-white"}`}
          >
            Mobile Number
          </span>
        }
        rules={[
          { required: true, message: "Please enter your phone number!" },
          {
            validator: (_, value) => {
              if (!value) return Promise.resolve();

              try {
                const parsed = parsePhoneNumberFromString("+" + value);
                if (parsed && parsed.isValid()) {
                  return Promise.resolve();
                }
                return Promise.reject("Please enter a valid phone number!");
              } catch (err) {
                return Promise.reject("Invalid phone number format!");
              }
            },
          },
        ]}
      >
        <div>
          <PhoneInput
            country={"au"}
            onChange={(value) => form.setFieldsValue({ phone: value })}
            buttonClass="!border-[#9A9A9A]"
            inputStyle={{
              color: "black",
              width: "calc(100% - 60px)",
              height: "54px",
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
          <span
            className={`${isModal ? "text-black" : textColor || "text-white"}`}
          >
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
          rows={isModal ? 4 : 6}
          placeholder="Describe your project in detail"
        />
      </Form.Item>

      <ReCAPTCHA
        sitekey="YOUR_RECAPTCHA_SITE_KEY"
        onChange={(value) => setCaptchaValue(value)}
      />

      <Form.Item className="md:!mb-0">
        <CommonButton
          text="Submit"
          className={`w-full mt-6 ${isModal && "!bg-black !text-white"}`}
        />
      </Form.Item>
    </Form>
  );
};

export default FormComponent;

// app/actions/submitForm.ts
"use server";

import { postData } from "@/lib/api";
import { getStrapiURL } from "@/lib/utils";

export async function submitForm(data: {
  fullName: string;
  email: string;
  phone: string;
  projectDetails: string;
  // recaptchaToken: string;
}) {
  // // 1. Validate ReCAPTCHA on server
  // const verifyRes = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: new URLSearchParams({
  //     secret: process.env.RECAPTCHA_SECRET_KEY!, // only on server
  //     response: data.recaptchaToken,
  //   }),
  // }).then((res) => res.json());

  // if (!verifyRes.success) {
  //   throw new Error("Failed reCAPTCHA verification");
  // }
  const path = "/api/form-submissions";

  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);

  const res = await postData(url?.href, { data });

  return res;
}

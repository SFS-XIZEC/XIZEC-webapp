import FrequentlyQuestionSection from "@/components/Focus/FrequentlyQuestionSection";
import MissionSection from "@/components/Focus/MissionSection";
import OurFocusSection from "@/components/Focus/OurFocusSection";
import ProcessSection from "@/components/Focus/ProcessSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { getBlock, getStrapiURL } from "@/lib/utils";
import {
  FaqBlock,
  OurFocusData,
  OurMissionBlock,
  OurStepsBlock,
  OurVisionBlock,
  TestimonialBlock,
} from "@/types";
import React from "react";

async function loader() {
  const { fetchData } = await import("@/lib/api");

  const path = "/api/our-focus-page";

  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);

  const data = await fetchData(url.href);

  return data;
}

export default async function page() {
  const data = (await loader()) as OurFocusData;
  if (!data) return null;

  const VisionData = getBlock<OurVisionBlock>(
    data?.blocks,
    "our-focus.our-vision"
  );
  const StepData = getBlock<OurStepsBlock>(data?.blocks, "our-focus.our-steps");
  const MissionData = getBlock<OurMissionBlock>(
    data?.blocks,
    "our-focus.our-mission"
  );
  const TestimonialData = getBlock<TestimonialBlock>(
    data.blocks,
    "landing-page.testimonial"
  );
  const FaqData = getBlock<FaqBlock>(data.blocks, "our-focus.faq");
  const Testimonial = data?.testimonials;
  const faqs = data?.faqs;

  if (!VisionData) return null;
  if (!StepData) return null;
  if (!MissionData) return null;
  if (!TestimonialData) return null;
  if (!FaqData) return null;
  if (!Testimonial) return null;
  if (!faqs) return null;

  return (
    <div className="flex flex-col gap-[60px] py-[80px]">
      <OurFocusSection VisionData={VisionData} />
      <ProcessSection StepData={StepData} />
      <MissionSection MissionData={MissionData} />
      <TestimonialSection
        TestimonialData={TestimonialData}
        Testimonial={Testimonial}
      />
      <FrequentlyQuestionSection data={faqs} FaqData={FaqData} />
    </div>
  );
}

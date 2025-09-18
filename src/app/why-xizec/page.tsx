import IndustorySection from "@/components/client/IndustorySection";
import MakeBetterSection from "@/components/client/MakeBetterSection";
import FrequentlyQuestionSection from "@/components/Focus/FrequentlyQuestionSection";
import OurFocusSection from "@/components/Focus/OurFocusSection";
import ServiceSection from "@/components/home/ServiceSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import { getBlock, getStrapiURL } from "@/lib/utils";
import {
  BetterSectionBlock,
  FaqBlock,
  IndustoryComponentBlock,
  OurVisionBlock,
  ServicesComponent,
  WhyChooseComponent,
  WhyXizecData,
} from "@/types";
import React from "react";

async function loader() {
  const { fetchData } = await import("@/lib/api");

  const path = "/api/why-xizec";

  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);

  const data = await fetchData(url.href);

  return data;
}

export default async function WhyXizecPage() {
  const data = (await loader()) as WhyXizecData;
  if (!data) return null;

  const VisionData = getBlock<OurVisionBlock>(
    data?.blocks,
    "our-focus.our-vision"
  );
  const WhyChooseData = getBlock<WhyChooseComponent>(
    data.blocks,
    "landing-page.why-choose-component"
  );
  const ServiceData = getBlock<ServicesComponent>(
    data.blocks,
    "landing-page.services"
  );
  const BetterData = getBlock<BetterSectionBlock>(
    data.blocks,
    "why-xizec.better-section"
  );
  const IndustryData = getBlock<IndustoryComponentBlock>(
    data.blocks,
    "why-xizec.industory-component"
  );

  const FaqData = getBlock<FaqBlock>(data.blocks, "our-focus.faq");
  const faqs = data?.faqs;

  if (!VisionData) return null;
  if (!IndustryData) return null;
  if (!BetterData) return null;
  if (!WhyChooseData) return null;
  if (!ServiceData) return null;
  if (!FaqData) return null;
  if (!faqs) return null;

  return (
    <div className="flex flex-col gap-[60px] py-[80px]">
      <OurFocusSection VisionData={VisionData} rowReverse />
      <WhyChooseSection WhyChooseData={WhyChooseData} />
      <MakeBetterSection BetterData={BetterData} />
      <IndustorySection IndustryData={IndustryData} />
      <ServiceSection ServiceData={ServiceData} bgWhite />
      <FrequentlyQuestionSection data={faqs} FaqData={FaqData} />
    </div>
  );
}

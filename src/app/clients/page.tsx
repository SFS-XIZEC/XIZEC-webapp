import CollaboratorSection from "@/components/client/CollaboratorSection";
import HireCard from "@/components/HireCard";
import PortfolioSection from "@/components/home/PortfolioSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { getBlock, getStrapiURL } from "@/lib/utils";
import {
  ClientComponent,
  ClientsData,
  HireCardBlock,
  PortfolioComponent,
  TestimonialBlock,
} from "@/types";
import React from "react";

async function loader() {
  const { fetchData } = await import("@/lib/api");

  const path = "/api/client";

  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);

  const data = await fetchData(url.href);

  return data;
}
export default async function page() {
  const data = (await loader()) as ClientsData;
  if (!data) return null;

  const CollaboraterData = getBlock<ClientComponent>(
    data?.blocks,
    "landing-page.client-component"
  );
  const HireData = getBlock<HireCardBlock>(data?.blocks, "common.hire-card");

  const PortfolioData = getBlock<PortfolioComponent>(
    data.blocks,
    "landing-page.portfolio"
  );
  const TestimonialData = getBlock<TestimonialBlock>(
    data.blocks,
    "landing-page.testimonial"
  );
  const Testimonial = data?.testimonials;

  if (!PortfolioData) return null;
  if (!CollaboraterData) return null;
  if (!HireData) return null;
  if (!TestimonialData) return null;
  if (!Testimonial) return null;
  return (
    <div className="flex flex-col gap-[50px] md:gap-[60px] py-[60px] md:py-[80px] ">
      <CollaboratorSection CollaboraterData={CollaboraterData} />
      <HireCard className="w-[80%] mx-auto" data={HireData} />
      <PortfolioSection margin="mt-0" PortfolioData={PortfolioData} />
      <TestimonialSection
         margin="mb-10 md:mb-20"
        TestimonialData={TestimonialData}
        Testimonial={Testimonial}
      />
    </div>
  );
}

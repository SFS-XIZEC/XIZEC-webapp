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

  console.log(data);
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
    <div className="flex flex-col gap-[80px] pt-[80px] pb-[120px]">
      <CollaboratorSection CollaboraterData={CollaboraterData} />
      <HireCard className="w-[80%] mx-auto" data={HireData} />
      <PortfolioSection margin="mt-0" PortfolioData={PortfolioData} />
      <TestimonialSection
        TestimonialData={TestimonialData}
        Testimonial={Testimonial}
      />
    </div>
  );
}

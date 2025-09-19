import HistorySection from "@/components/about/HistorySection";
import LeaderSection from "@/components/about/LeaderSection";
import OurTeam from "@/components/about/OurTeam";
import AboutSection from "@/components/home/AboutSection";
import ClientSection from "@/components/home/ClientSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import { getBlock, getStrapiURL } from "@/lib/utils";
import {
  AboutComponent,
  AboutPageData,
  ClientComponent,
  HistorySectionBlock,
  LeaderCardBlock,
  TeamComponentBlock,
  TestimonialBlock,
} from "@/types";
import React from "react";

async function loader() {
  const { fetchData } = await import("@/lib/api");

  const path = "/api/about-page";

  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);

  const data = await fetchData(url.href);

  return data;
}

export default async function Page() {
  const data = (await loader()) as AboutPageData;
  if (!data) return null;

  const AboutData = getBlock<AboutComponent>(
    data.blocks,
    "landing-page.about-component"
  );

  const ClientsData = getBlock<ClientComponent>(
    data.blocks,
    "landing-page.client-component"
  );

  const HistoryData = getBlock<HistorySectionBlock>(
    data.blocks,
    "about-page.history-section"
  );

  const LeaderData = getBlock<LeaderCardBlock>(
    data.blocks,
    "about-page.leader-card"
  );
  const TeamData = getBlock<TeamComponentBlock>(
    data.blocks,
    "about-page.team-component"
  );

  const TestimonialData = getBlock<TestimonialBlock>(
    data.blocks,
    "landing-page.testimonial"
  );
  const Testimonial = data?.testimonials;

  if (!AboutData) return null;
  if (!ClientsData) return null;
  if (!LeaderData) return null;
  if (!TeamData) return null;
  if (!HistoryData) return null;
  if (!TestimonialData) return null;
  if (!Testimonial) return null;
  return (
    <div className="flex flex-col  gap-[50px] md:gap-[60px] py-[60px] md:py-[80px] ">
      <AboutSection AboutData={AboutData} />
      <HistorySection HistoryData={HistoryData} />
      <LeaderSection LeaderData={LeaderData} />
      <OurTeam TeamData={TeamData}  margin="mb-10"/>
      <TestimonialSection
        TestimonialData={TestimonialData}
        Testimonial={Testimonial}
      />
      <ClientSection ClientsData={ClientsData?.images} isCarousel />
    </div>
  );
}

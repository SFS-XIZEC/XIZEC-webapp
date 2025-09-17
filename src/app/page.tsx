import AboutSection from "@/components/home/AboutSection";
import ClientSection from "@/components/home/ClientSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ServiceSection from "@/components/home/ServiceSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import { getBlock, getStrapiURL } from "@/lib/utils";
import {
  AboutComponent,
  ClientComponent,
  LandingPageData,
  PortfolioComponent,
  ServicesComponent,
  TestimonialBlock,
  WhyChooseComponent,
} from "@/types";

async function loader() {
  const { fetchData } = await import("@/lib/api");

  const path = "/api/landing-page";

  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);

  const data = await fetchData(url.href);

  return data;
}

export default async function Home() {
  const data = (await loader()) as LandingPageData;
  if (!data) return null;

  const AboutData = getBlock<AboutComponent>(
    data.blocks,
    "landing-page.about-component"
  );
  const WhyChooseData = getBlock<WhyChooseComponent>(
    data.blocks,
    "landing-page.why-choose-component"
  );
  const ServiceData = getBlock<ServicesComponent>(
    data.blocks,
    "landing-page.services"
  );
  const PortfolioData = getBlock<PortfolioComponent>(
    data.blocks,
    "landing-page.portfolio"
  );
  const ClientsData = getBlock<ClientComponent>(
    data.blocks,
    "landing-page.client-component"
  );
  const TestimonialData = getBlock<TestimonialBlock>(
    data.blocks,
    "landing-page.testimonial"
  );
  const Testimonial = data?.testimonials;

  if (!AboutData) return null;
  if (!WhyChooseData) return null;
  if (!ServiceData) return null;
  if (!PortfolioData) return null;
  if (!ClientsData) return null;
  if (!TestimonialData) return null;
  if (!Testimonial) return null;
  return (
    <div className="flex flex-col gap-[60px] py-[80px] ">
      <AboutSection AboutData={AboutData} />
      <WhyChooseSection WhyChooseData={WhyChooseData} />
      <ServiceSection ServiceData={ServiceData} />
      <PortfolioSection PortfolioData={PortfolioData} />
      <TestimonialSection
        TestimonialData={TestimonialData}
        Testimonial={Testimonial}
      />
      <ClientSection ClientsData={ClientsData?.images} isCarousel />
    </div>
  );
}

import ContactCollaborator from "@/components/contact/ContactCollaborator";
import ContactMain from "@/components/contact/ContactMain";
import MapContactSection from "@/components/contact/MapContactSection";
import FrequentlyQuestionSection from "@/components/Focus/FrequentlyQuestionSection";
import { getBlock, getStrapiURL } from "@/lib/utils";
import {
  ClientComponent,
  ContactFormBlock,
  ContactPageData,
  FaqBlock,
  MapBlock,
} from "@/types";
import React from "react";

async function loader() {
  const { fetchData } = await import("@/lib/api");

  const path = "/api/contact-page";

  const baseUrl = getStrapiURL();

  const url = new URL(path, baseUrl);

  const data = await fetchData(url.href);

  return data;
}

export default async function Page() {
  const data = (await loader()) as ContactPageData;
  if (!data) return null;

  const FaqData = getBlock<FaqBlock>(data.blocks, "our-focus.faq");
  const MapData = getBlock<MapBlock>(data.blocks, "contact.map-component");
  const Testimonial = data?.testimonials;
  const faqs = data?.faqs;
  const socialLinks = data?.socialLinks;
  const contacts = data?.contacts;
  const CollaboraterData = getBlock<ClientComponent>(
    data?.blocks,
    "landing-page.client-component"
  );
  const ContactData = getBlock<ContactFormBlock>(
    data?.blocks,
    "contact.contact-form-component"
  );

  if (!FaqData) return null;
  if (!Testimonial) return null;
  if (!faqs) return null;
  if (!CollaboraterData) return null;
  if (!MapData) return null;
  if (!socialLinks) return null;
  if (!contacts) return null;
  if (!ContactData) return null;

  return (
    <div className="flex flex-col pt-[60px] md:pt-[80px] pb-[80px] md:pb-[120px] gap-[50px] md:gap-[60px]">
      <ContactMain ContactData={ContactData} Testimonial={Testimonial} />
      <MapContactSection
        contacts={contacts}
        socialLinks={socialLinks}
        MapData={MapData}
      />
      <ContactCollaborator CollaboraterData={CollaboraterData} />
      <FrequentlyQuestionSection data={faqs} FaqData={FaqData} margin="mt-0"/>
    </div>
  );
}

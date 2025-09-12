import React from "react";
import SectionHeading from "../SectionHeading";
import ClientSection from "../home/ClientSection";

export interface CollaboratorHeading {
  title: string;
  subtitle: string;
}

export interface CollaboratorClient {
  url: string;
  alternativeText: string;
  name: string;
}

export interface CollaboratorData {
  heading: CollaboratorHeading;
  client: CollaboratorClient[];
}
const CollaboratorSection: React.FC<{ data: CollaboratorData }> = ({
  data,
}) => {
  return (
    <div className="bg-white flex flex-col gap-16 px-6 md:px-12 lg:px-20">
      <div className="lg:w-[70%] mx-auto flex text-center">
        <SectionHeading heading={data?.heading} alignCenter />
      </div>
      <ClientSection data={data?.client} />
    </div>
  );
};

export default CollaboratorSection;

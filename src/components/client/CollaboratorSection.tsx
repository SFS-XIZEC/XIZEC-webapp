import React from "react";
import SectionHeading from "../SectionHeading";
import ClientSection from "../home/ClientSection";
import { ClientComponent } from "@/types";

const CollaboratorSection: React.FC<{ CollaboraterData: ClientComponent }> = ({
  CollaboraterData,
}) => {
  return (
    <div className="bg-white flex flex-col gap-16 px-6 md:px-12 lg:px-20">
      <SectionHeading heading={CollaboraterData?.heading} alignCenter />
      <ClientSection ClientsData={CollaboraterData?.images} />
    </div>
  );
};

export default CollaboratorSection;

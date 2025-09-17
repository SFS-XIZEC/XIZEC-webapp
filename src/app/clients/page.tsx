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

const collaboratorData = {
  heading: {
    title: "Collaborating with Leading Technology Innovators",
    subtitle: "Partnership",
  },
  client: [
    {
      url: "/images/client1.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client2.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client3.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client4.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client5.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client6.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client7.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client8.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client9.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client10.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client2.png",
      alternativeText: "image",
      name: "client image",
    },
    {
      url: "/images/client3.png",
      alternativeText: "image",
      name: "client image",
    },
  ],
};

const Hiredata = {
  title: "Hire us for your project",
  subtitle:
    "Transform Your Vision with Expert IT Consulting and Future-Ready Solutions",
};

const portfolioData = {
  heading: {
    title: "Our Portfolio",
    subtitle: "Works",
    description:
      "Showcasing XIZEC’s innovative IT projects that drive growth and digital success.",
  },
  imagesCol1: [
    {
      name: "Services Image",
      alternativeText: "Work Desk",
      url: "/images/Portfolieo1.png",
    },

    {
      name: "Services Image",
      alternativeText: "Work Desk",
      url: "/images/Portfolieo3.png",
    },
  ],
  imagesCol2: [
    {
      name: "Services Image",
      alternativeText: "Work Desk",
      url: "/images/Portfolieo2.png",
    },

    {
      name: "Services Image",
      alternativeText: "Work Desk",
      url: "/images/Portfolieo4.png",
    },
  ],
};

const TestimonialData = {
  heading: {
    title: "Trusted by Industry Pioneers",
    subtitle: "Testimonial",
    description:
      "Our clients’ success reflects our expertise, building lasting partnerships with industry leaders through exceptional results and reliability.",
  },
  reviews: [
    {
      id: 1,
      rating: 4.5,
      text: "In consequat mi proin bibendum lacus enim adipiscing. Orci feugiat id at volutpat faucibus purus etiam fermentum. Auctor etiam lorem tellus velit. Vulputate id blandit tempus est consectetur ut. Nam lacus odio massa. Vivamus pellentesque nisi at tellus dignissim, ac dictum lectus dapibus. Integer ultricies nisi eu ante facilisis, a pulvinar velit fermentum.",
      name: "Annette Black",
      title: "Startup Founder, C.E.O",
      avatar: "/images/avatar1.png",
    },
    {
      id: 2,
      rating: 4.5,
      text: "Erat euismod tempus placerat vestibulum. Risus neque mauris nunc nulla potenti sit quis. Arcu scelerisque eget elit integer aenean rhoncus. Integer nisi sit sed congue dignissim volutpat turpis. Nulla facilisi. Vivamus non arcu eget nisl imperdiet ultricies non sed dolor. Fusce non mauris justo. Sed vel erat nec nulla efficitur ultricies.",
      name: "Theresa Webb",
      title: "Startup Founder, C.E.O",
      // avatar: "/images/avatar2.png",
    },
    {
      id: 3,
      rating: 4.5,
      text: "Imperdiet odio tortor id aliquet sed et tortor. Sit erat augue blandit ipsum velit ultrices nisi. Pellentesque suspendisse lorem tortor enim nec quis eu iaculis nisi. A urna lectus mi ut in mi facilisis pellentesque justo. Malesuada risus vitae nulla consequat, sed porttitor enim ultricies. Integer fermentum diam at nunc aliquet, ac vestibulum sem dictum.",
      name: "Guy Hawkins",
      title: "Startup Founder, C.E.O",
      avatar: "/images/avatar3.png",
    },
    {
      id: 4,
      rating: 4.5,
      text: "Fusce imperdiet, est sed laoreet sagittis, turpis nunc congue diam, sit amet ullamcorper elit nisi in justo. Integer porttitor nulla nec ante volutpat, nec commodo nulla viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse potenti. Morbi mattis risus nec turpis tincidunt, vitae volutpat arcu sollicitudin.",
      name: "Jacob Jones",
      title: "Startup Founder, C.E.O",
      // avatar: "/images/avatar1.png",
    },
    {
      id: 5,
      rating: 4.5,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      name: "Jane Cooper",
      title: "Startup Founder, C.E.O",
      avatar: "/images/avatar2.png",
    },
    {
      id: 6,
      rating: 4.5,
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
      name: "Robert Fox",
      title: "Startup Founder, C.E.O",
      avatar: "/images/avatar3.png",
    },
    {
      id: 7,
      rating: 4.5,
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      name: "Marvin McKinney",
      title: "Startup Founder, C.E.O",
      avatar: "/images/avatar1.png",
    },
    {
      id: 8,
      rating: 4.5,
      text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Cameron Williamson",
      title: "Startup Founder, C.E.O",
      avatar: "/images/avatar2.png",
    },
    {
      id: 9,
      rating: 4.5,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Jenny Wilson",
      title: "Startup Founder, C.E.O",
      avatar: "/images/avatar3.png",
    },
    {
      id: 10,
      rating: 4.5,
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
      name: "Ronald Richards",
      title: "Startup Founder, C.E.O",
      avatar: "/images/avatar1.png",
    },
  ],
};

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

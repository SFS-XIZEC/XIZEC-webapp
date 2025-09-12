import { ServiceIcon1 } from "@/common/icons";
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

const aboutData = {
  images: {
    url: "/images/about.png",
    alternativeText: "image",
    name: "image",
  },
  subtitle: "ABOUT",
  title: "Know About XIZEC",
  description: `
    <p>Hac eu nisl interdum blandit. Duis nascetur vitae nullam sed adipiscing pellentesque aliquam integer. Consectetur nibh congue non vitae at dignissim. Non non vitae id ac mi auctor imperdiet molestie. Vitae semper nunc mi pretium sed pulvinar. Orci ac porttitor molestie nec iaculis hac fringilla lectus. Lectus odio luctus quis adipiscing diam urna at euismod. At mi molestie consequat ultrices eu lacus in ultrices. Condimentum in rhoncus nulla elementum egestas.</p><br/>

    <p>Cursus ac pretium cursus eget rutrum. Nisi a proin purus platea scelerisque imperdiet aliquet massa. Egestas tellus vel lacus vitae. Tincidunt orci quam fermentum mattis. Urna lectus sit venenatis bibendum vitae in vel in. Sagittis faucibus quam purus vel feugiat etiam interdum. Sed eget proin sed eu viverra. </p>
  `,
  link: {
    href: "",
    text: "Know More",
    isExternal: true,
  },
  stats: [
    { value: "500+", title: "Custom Solutions Delivered" },
    { value: "200+", title: "Technology Experts & Business Consultants" },
    { value: "10+", title: "Ready to deploy software" },
    { value: "15+", title: "Years of Software Development Expertise" },
  ],
};

const whychoose = {
  heading: {
    subtitle: "Why Choose",
    title: "What Make Us Different",
  },
  cardsData: [
    {
      image: {
        name: "Expert IT Consulting Icon",
        alternativeText: "Expert IT Consulting",
        url: "/images/card1.png",
      },
      title: "Expert IT Consulting",
      description:
        "Our experienced consultants craft technology strategies tailored to your business goals, ensuring maximum efficiency and growth.",
    },
    {
      image: {
        name: "Future Ready Solutions Icon",
        alternativeText: "Future-Ready Solutions",
        url: "/images/card2.png",
      },
      title: "Future-Ready Solutions",
      description:
        "We implement scalable, secure, and innovative IT solutions that keep you ahead in an ever-changing digital landscape.",
    },
    {
      image: {
        name: "Customer-Centric Approach Icon",
        alternativeText: "Customer-Centric Approach",
        url: "/images/card3.png",
      },
      title: "Customer-Centric Approach",
      description:
        "Your success is our priority—we deliver personalized support and solutions that truly fit your business.",
    },
    {
      image: {
        name: "Proven Industry Icon",
        alternativeText: "Proven Industry",
        url: "/images/card4.png",
      },
      title: "Proven Industry",
      description:
        "With years of cross-industry expertise, we understand your challenges and deliver solutions that work.",
    },
    {
      image: {
        name: "Cost Effective Solutions Icon",
        alternativeText: "Cost-Effective Solutions",
        url: "/images/card5.png",
      },
      title: "Cost-Effective Solutions",
      description:
        "We optimize your IT investments by providing high-value services at competitive costs.",
    },
    {
      image: {
        name: "Reliable Partnership Icon",
        alternativeText: "Reliable Partnership",
        url: "/images/card6.png",
      },
      title: "Reliable Partnership",
      description:
        "With XIZEC, you gain a trusted partner committed to delivering measurable results and long-term success.",
    },
  ],
};

const servicesData = {
  heading: {
    title: "What We Offer",
    subtitle: "services",
    description:
      "XIZEC delivers IT consulting, cloud solutions, digital transformation, managed support, and software development—helping businesses achieve growth, scalability, and innovation.",
  },
  services: [
    {
      icon: <ServiceIcon1 />,
      title: "IT Strategy & Consulting",
      description:
        "Tailored roadmaps that align technology with your business goals.",
    },
    {
      icon: <ServiceIcon1 />,
      title: "Cloud Solutions",
      description:
        "Secure, scalable, and cost-effective cloud adoption strategies.",
    },
    {
      icon: <ServiceIcon1 />,
      title: "Digital Transformation",
      description:
        "Modernize processes with automation, AI, and innovative digital ideas.",
    },
    {
      icon: <ServiceIcon1 />,
      title: "Cybersecurity Services",
      description:
        "End-to-end protection to safeguard your data, networks, and systems.",
    },
    {
      icon: <ServiceIcon1 />,
      title: "Managed IT Support",
      description:
        "24/7 monitoring and issue resolution to keep your business running.",
    },
    {
      icon: <ServiceIcon1 />,
      title: "Software Development",
      description: "Custom applications designed to meet your business needs.",
    },
  ],
  image: {
    name: "Services Image",
    alternativeText: "Work Desk",
    url: "/images/service.png",
  },
  cta: {
    title: "Hire us for your project",
    subtitle:
      "Transform your vision with expert IT consulting and future-ready solutions.",
    buttonText: "GET IN TOUCH",
    buttonLink: "/contact",
  },
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

const clientData = [
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
];

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
      <ClientSection ClientsData={ClientsData} isCarousel />
    </div>
  );
}

import {
  IndustryIcon1,
  IndustryIcon2,
  IndustryIcon3,
  IndustryIcon4,
  ServiceIcon1,
} from "@/common/icons";
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
  WhyXizecBlock,
  WhyXizecData,
} from "@/types";
import { title } from "process";
import React from "react";

const ourFocusData = {
  images: {
    url: "/images/whyChoose.png",
    alternativeText: "image",
    name: "image",
  },
  subtitle: "Why Us",
  title: "Why Choose Us",
  description: `
    <p>At XIZEC, we combine expertise, innovation, and a customer-first mindset to deliver IT solutions that truly make a difference. Our team understands the unique challenges businesses face and creates strategies that are not just effective but also scalable and future-ready. With a focus on quality and reliability, we help organizations embrace digital transformation with confidence.</p><br/>

    <p>What sets us apart is our commitment to long-term partnerships. We don’t just deliver projects—we build relationships based on trust, transparency, and measurable results. By choosing XIZEC, you gain a dedicated partner who works alongside you to unlock growth, strengthen security, and ensure your technology is always aligned with your business goals. </p>
  `,
  link: {
    href: "",
    text: "GET IN TOUCH",
    isExternal: true,
  },
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

const frequentlyData = [
  {
    question: "How do you handle project management and communication?",
    answer:
      "We use modern project management tools like Jira, Trello, and Slack to ensure smooth communication and collaboration. You'll get regular updates, milestones, and clear timelines.",
  },
  {
    question: "What mobile app development services do you offer?",
    answer:
      "We provide end-to-end mobile app development, including iOS, Android, and cross-platform solutions. From strategy and design to development and deployment, we cover the full app lifecycle.",
  },
  {
    question:
      "What is the average cost and timeline for developing a mobile app?",
    answer:
      "The cost and timeline depend on the complexity and features of your app. Typically, small apps take 4-8 weeks, while complex enterprise solutions can take 3-6 months.",
  },
  {
    question:
      "Can you integrate AI or other emerging technologies into my app?",
    answer:
      "Absolutely! We specialize in AI, machine learning, IoT, blockchain, and other cutting-edge technologies to make your app innovative and future-ready.",
  },
  {
    question: "Do you offer a free consultation or project estimate?",
    answer:
      "Yes, we provide a free initial consultation where we analyze your requirements and share a detailed project estimate with cost and timelines.",
  },
  {
    question:
      "What is the average cost and timeline for developing a mobile app?",
    answer:
      "The cost and timeline depend on the complexity and features of your app. Typically, small apps take 4-8 weeks, while complex enterprise solutions can take 3-6 months.",
  },
  {
    question:
      "Can you integrate AI or other emerging technologies into my app?",
    answer:
      "Absolutely! We specialize in AI, machine learning, IoT, blockchain, and other cutting-edge technologies to make your app innovative and future-ready.",
  },
  {
    question: "Do you offer a free consultation or project estimate?",
    answer:
      "Yes, we provide a free initial consultation where we analyze your requirements and share a detailed project estimate with cost and timelines.",
  },
];

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

const industoryData = {
  heading: {
    title: "Our Proven Sector Mastery",
    subtitle: "Industry",
  },
  cardsData: [
    {
      icon: <IndustryIcon1 />,
      iconCol: "text-[#00C49A]",
      title: "Healthcare",
    },
    {
      icon: <IndustryIcon2 />,
      iconCol: "text-[#007BFF]",
      title: "Insurance",
    },
    {
      icon: <IndustryIcon3 />,
      iconCol: "text-[#FF7E29]",
      title: "On-Demand App",
    },
    {
      icon: <IndustryIcon4 />,
      iconCol: "text-[#00B8D9]",
      title: "Logistics",
    },
    {
      icon: <IndustryIcon3 />,
      iconCol: "text-[#FF7E29]",
      title: "EdTech",
    },
    {
      icon: <IndustryIcon4 />,
      iconCol: "text-[#00B8D9]",
      title: "Fintech",
    },
    {
      icon: <IndustryIcon3 />,
      iconCol: "text-[#FF7E29]",
      title: "Manufacturing",
    },
    {
      icon: <IndustryIcon4 />,
      iconCol: "text-[#00B8D9]",
      title: "Real Estate",
    },
    {
      icon: <IndustryIcon1 />,
      iconCol: "text-[#00C49A]",
      title: "Entertainment",
    },
    {
      icon: <IndustryIcon2 />,
      iconCol: "text-[#007BFF]",
      title: "Agriculture",
    },
    {
      icon: <IndustryIcon1 />,
      iconCol: "text-[#00C49A]",
      title: "Telecom",
    },
    {
      icon: <IndustryIcon2 />,
      iconCol: "text-[#007BFF]",
      title: "Aviation",
    },
  ],
};

const makeBetterData = {
  heading: {
    title: "What Make Us Better",
    subtitle: "better",
    description:
      "In today’s dynamic digital world, businesses need adaptable, scalable solutions to meet evolving market demands.",
  },
  services: [
    {
      title: "Blockchain Innovation",
      description:
        "Deploy secure, decentralized solutions to enhance transparency and streamline business operations.",
    },
    {
      title: "AI-Driven Integration",
      description:
        "Leverage AI for actionable insights and seamless orchestration of critical business processes.",
    },
    {
      title: "Expertise Expertise",
      description:
        "Our industry-leading experts analyze, build, and deliver solutions while creating sustainable value.",
    },
    {
      title: "Custom Software Solutions",
      description:
        "Deliver customized software solutions crafted to boost diverse industry needs with cutting-edge platforms.",
    },
    {
      title: "Transparent Development Practices",
      description:
        "We ensure clear communication and transparency throughout the entire development lifecycle.",
    },
  ],
  image: {
    name: "makebetter Image",
    alternativeText: "Work Desk",
    url: "/images/makebetter.png",
  },
  cta: {
    title: "Hire us for your project",
    subtitle:
      "Transform your vision with expert IT consulting and future-ready solutions.",
    buttonText: "GET IN TOUCH",
    buttonLink: "/contact",
  },
};

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

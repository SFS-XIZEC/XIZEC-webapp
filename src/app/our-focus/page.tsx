import FrequentlyQuestionSection from "@/components/Focus/FrequentlyQuestionSection";
import MissionSection from "@/components/Focus/MissionSection";
import OurFocusSection from "@/components/Focus/OurFocusSection";
import ProcessSection from "@/components/Focus/ProcessSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import React from "react";

const ourFocusData = {
  images: {
    url: "/images/focusImg.png",
    alternativeText: "image",
    name: "image",
  },
  subtitle: "Vision",
  title: "Our Vision for Tomorrow",
  description: `
    <p>At XIZEC, our vision is to be a global leader in IT consulting, known for delivering innovative and reliable technology solutions that empower businesses to thrive in the digital era. We aim to set new benchmarks in excellence by combining strategic expertise with cutting-edge innovation.</p><br/>

    <p>We envision a future where every business, regardless of size, can leverage secure, scalable, and future-ready IT solutions. By driving growth and fostering digital transformation, we aspire to create long-term value for our clients, partners, and communities. </p>
  `,
  link: {
    href: "",
    text: "GET IN TOUCH",
    isExternal: true,
  },
};

const ourProcess = {
  heading: {
    subtitle: "Steps",
    title: "Our Process",
    description:
      "Showcasing XIZEC’s innovative IT projects that drive growth and digital success.",
  },
  steps: [
    {
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your business needs, challenges, and goals to design a tailored IT strategy.",
    },
    {
      title: "Strategy & Planning",
      description:
        "Our experts craft scalable, secure, and future-ready solutions that align with your objectives.",
    },
    {
      title: "Implementation & Support",
      description:
        "From deployment to ongoing support, we ensure seamless execution and continuous improvement for long-term success.",
    },
  ],
};

const missionData = {
  heading: {
    title: "What We Stand For",
    subtitle: "Mission",
    description:
      "<p>Our mission at XIZEC is to simplify technology for businesses by offering tailored IT strategies and solutions that align with their goals. We are committed to making technology an enabler of growth, not a challenge.</p> </br> <p>Through continuous innovation, reliable support, and customer-centric services, we strive to build strong partnerships with our clients. Our mission is to help organizations embrace transformation with confidence, ensuring sustainable success in an ever-changing digital landscape.</p>",
  },
  image1: {
    name: "Services Image",
    alternativeText: "Work Desk",
    url: "/images/mission1.png",
  },
  image2: {
    name: "Services Image",
    alternativeText: "Work Desk",
    url: "/images/mission2.png",
  },
  cta: {
    title: "Hire us for your project",
    subtitle:
      "Transform your vision with expert IT consulting and future-ready solutions.",
  },
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

const frequentlyData = {
  heading: {
    title: "Frequently Asked Questions",
    subtitle: "FAQ",
  },
  faqs: [
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
  ],
  image: {
    url: "/images/QuestionImg.png",
    alternativeText: "image",
    name: "name",
  },
};
const page = () => {
  return (
    <div className="flex flex-col gap-[60px] py-[80px]">
      <OurFocusSection {...ourFocusData} />
      <ProcessSection OurProcess={ourProcess} />
      <MissionSection data={missionData} />
      <TestimonialSection data={TestimonialData} />
      <FrequentlyQuestionSection data={frequentlyData} />
    </div>
  );
};

export default page;

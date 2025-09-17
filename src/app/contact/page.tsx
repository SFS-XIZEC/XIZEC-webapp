import {
  FacebookIcon,
  InstagramIcon,
  LinkdinIcon,
  LocationIcon,
  MailBoxIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/common/icons";
import ContactCollaborator from "@/components/contact/ContactCollaborator";
import ContactMain from "@/components/contact/ContactMain";
import MapContactSection from "@/components/contact/MapContactSection";
import FrequentlyQuestionSection from "@/components/Focus/FrequentlyQuestionSection";
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

const contactdata = {
  title: "Work with Trusted IT Experts Worldwide",
  description:
    "Partner with XIZEC for expert IT solutions that drive innovation, boost efficiency, and accelerate global business growth",
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

const mapsectiondata = {
  title: "Work Smarter with XIZEC Experts",
  subtitle: "Our IT consultants are here to guide you with smart, scalable, and future-ready solutions built for growth.",
  mapImg: {
    url: "/images/MapImage.png",
    alternativeText: "text",
    name: "image",
  },
  cols3: [
    {
      text: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      icon: <LocationIcon />,
      type: "location",
    },
    {
      text: "sara.cruz@example.com",
      icon: <MailBoxIcon />,
      type: "email",
    },
    {
      text: "(239) 555-0108",
      icon: <PhoneIcon />,
      type: "phone",
    },
  ],
  socialLinks: [
    { href: "https://facebook.com", icon: <FacebookIcon />, isExternal: true },
    {
      href: "https://instagram.com",
      icon: <InstagramIcon />,
      isExternal: true,
    },
    { href: "https://linkedin.com", icon: <LinkdinIcon />, isExternal: true },
    { href: "https://twitter.com", icon: <TwitterIcon />, isExternal: true },
  ],
};
const page = () => {
  return (
    <div className="flex flex-col gap-[80px] pt-[80px] pb-[120px]">
      {/* <ContactMain data={contactdata} />
      <MapContactSection data={mapsectiondata} />
      <ContactCollaborator data={collaboratorData} /> */}
      {/* <FrequentlyQuestionSection data={frequentlyData} /> */}
    </div>
  );
};

export default page;

import HistorySection from "@/components/about/HistorySection";
import LeaderSection from "@/components/about/LeaderSection";
import OurTeam from "@/components/about/OurTeam";
import AboutSection from "@/components/home/AboutSection";
import ClientSection from "@/components/home/ClientSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import React from "react";

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

const ourTeamData = {
  heading: {
    subtitle: "TEAM",
    title: "Our Core Strength",
    description:
      "Our diverse team of experts collaborates to turn bold ideas into impactful solutions.",
  },
  team: [
    {
      image: {
        url: "/images/team1.png",
        alternativeText:
          "Portrait photograph outdoors, person in a light blue shirt standing with greenery in the background",
        name: "Photo of Eleanor Pena",
      },
      name: "Eleanor Pena",
      designation: "Co-founder & CTO",
    },
    {
      image: {
        url: "/images/team2.png",
        alternativeText:
          "Portrait photograph indoors, person with long hair wearing a dark top",
        name: "Photo of Kristin Watson",
      },
      name: "Kristin Watson",
      designation: "Chief Financial Officer",
    },
    {
      image: {
        url: "/images/team3.png",
        alternativeText:
          "Portrait photograph at a lakeside, person in white and blue attire",
        name: "Photo of Darlene Robertson",
      },
      name: "Darlene Robertson",
      designation: "Head of Design",
    },
    {
      image: {
        url: "/images/team4.png",
        alternativeText:
          "Portrait photograph against a yellow background, person in a teal t-shirt",
        name: "Photo of Arlene McCoy",
      },
      name: "Arlene McCoy",
      designation: "Head of Projects",
    },
  ],
};

const leaderData = {
  leaderImg: {
    url: "/images/leader.png",
    alternativeText: "image",
    name: "image",
  },
  heading: {
    subtitle: "Leader",
    title: "Cody Fisher",
    description: "Founder & CEO",
  },
  description: `
    <p>Neque lectus nam enim sagittis dignissim facilisis ac egestas et. Neque commodo enim imperdiet facilisis est nunc congue. Morbi et sed et lacinia posuere risus lectus porttitor. Non nascetur aliquam congue leo cursus bibendum. Sed nulla vestibulum augue fames fringilla tincidunt diam. </p><br/>

    <p>Convallis nunc sed blandit feugiat. Faucibus pharetra purus libero ut volutpat nulla magnis. Quisque faucibus nulla adipiscing pretium eros.
Tristique lorem nisi tincidunt erat lorem massa. Mauris viverra est euismod purus maecenas dictumst viverra sit commodo. Pulvinar sed turpis amet nisi ac at neque elit quam. Varius nullam semper id non id.</p>
  `,
};

const historyData = {
  heading: {
    subtitle: "History",
    title: "Our Journey Through Time",
    description:
      "From humble beginnings to global recognition, here’s how we grew, adapted, and thrived.",
  },
  timelineData: [
    {
      year: "2004",
      title: "Start the Company",
      description:
        "XIZEC was founded with a vision to simplify technology for businesses and deliver innovative IT consulting solutions.",
    },
    {
      year: "2005 – 2008",
      title: "Challenging Years",
      description:
        "Like many businesses, we faced struggles—but our resilience and commitment to clients kept us moving forward.",
    },
    {
      year: "2008 – 2020",
      title: "Strong Comeback",
      description:
        "Through innovation and strategic partnerships, we bounced back stronger, scaling our solutions and reaching new markets.",
    },
    {
      year: "2020",
      title: "The World Stopped, We Didn’t",
      description:
        "When global disruptions shook industries, XIZEC continued to stand by its clients. By rapidly adapting to remote-first operations and offering reliable digital support, we proved our agility, resilience, and unwavering commitment.",
    },
    {
      year: "2021 – Present",
      title: "New Directions",
      description:
        "We redefined our strategies, adopted modern technologies, and introduced smarter IT solutions to help businesses transform digitally while staying competitive in a fast-changing environment.",
    },
  ],

  cta: {
    title: "Hire us for your project",
    subtitle:
      "Transform your vision with expert IT consulting and future-ready solutions.",
  },
};

const page = () => {
  return (
    <div className="flex flex-col gap-[60px] py-[80px] ">
      {/* <AboutSection {...aboutData} /> */}
      {/* <HistorySection data={historyData} /> */}
      {/* <LeaderSection data={leaderData} />
      <OurTeam data={ourTeamData} /> */}
      {/* <TestimonialSection data={TestimonialData} />
      <ClientSection data={clientData} isCarousel /> */}
    </div>
  );
};

export default page;

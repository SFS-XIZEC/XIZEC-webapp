// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import CommonButton from "../CommonButton";
import { DrawerIcon, MouseIcon } from "@/common/icons";
import Banner from "./Banner";
import Heading from "../Heading";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Focus", path: "/our-focus" },
  { name: "Clients", path: "/clients" },
  { name: "Why Xizec", path: "/why-xizec" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const banner = [
  {
    id: "1",
    href:"tel:2395550108",
    image: {
      id: 1,
      url: "/images/phonelogo.png",
      alternativeText: "logo",
      name: "logo"
    },
    value: "(239) 555-0108"
  },
  {
    id: "2",
    href:"mailto:sara.cruz@example.com",
    image: {
      id: 2,
      url: "/images/maillogo.png",
      alternativeText: "logo",
      name: "logo"
    },
    value: "sara.cruz@example.com"
  }
]

const headingData = {
  head: "Welcome To XIZEC",
  title:
    "Transforming Businesses With Smart IT Solutions",
  text: "At XIZEC, we empower companies with tailored technology strategies that drive growth, efficiency, and innovation. From IT consulting to digital transformation, our experts deliver solutions that solve today’s challenges and prepare you for tomorrow.",
};

export default function Header() {
  return (
    <div className="bg-cover bg-no-repeat min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "url('/images/homebg.png')",
      }}>
      <div className="flex flex-col gap-6 justify-between items-center">
        <Banner banner={banner} />
        <header className="flex justify-between items-center bg-transparent text-white w-[90%]">
          <button className="md:hidden">
            <DrawerIcon />
          </button>
          <Image
            src={"/images/mainlogo.png"}
            width={172}
            height={48}
            className={"object-cover"}
            alt={"Hero Image"}
          />

          {/* Navigation */}
          <nav className="gap-8 hidden md:flex">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="hover:text-yellow-500 hover:underline underline-offset-8 leading-[150%] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <CommonButton text={"Get Started"} />
        </header>
      </div>
      <div className='flex items-center justify-center'>
        <Heading headingData={headingData} alingCenter />
      </div>
      <div className='flex items-center justify-center mt-[120px] mb-10'>
        <MouseIcon />
      </div>
    </div>


  );
}

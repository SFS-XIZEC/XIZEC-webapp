"use client";
import Link from "next/link";
import CommonButton from "../CommonButton";
import { DrawerIcon, MouseIcon } from "@/common/icons";
import Banner from "./Banner";
import Heading from "../Heading";
import { usePathname } from "next/navigation";
import GetInTouchModal from "../GetInTouchModal";
import { useEffect, useState } from "react";
import MenuDrawer from "../MenuDrawer";
import { StrapiImage } from "../StrapiImage";
import { GlobalApi, HeroSection } from "@/types";
import { getStrapiURL } from "@/lib/utils";
import ScrollMouse from "../ScrollMouse";

export default function Header({ data }: { data: GlobalApi }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [heroContent, setHeroContent] = useState<HeroSection | null>(null);
  const [fade, setFade] = useState(1);

  const ContactData = data?.CommonData?.contacts;
  const SocialLinks = data?.CommonData?.socialLinks;
  const FormSection = data?.FormSection;
  const headerData = data?.Header;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeValue = Math.max(1 - scrollY / 400, 0);
      setFade(fadeValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔎 Select correct hero section by slug/path
  useEffect(() => {
    if (data?.CommonData?.HeroSection?.length) {
      const matched = data.CommonData.HeroSection.find(
        (item: HeroSection) => item.slug === pathname
      );
      setHeroContent(matched || null);
    }
  }, [pathname, data?.CommonData?.HeroSection]);

  // ✅ background image with safe fallback
  const backgroundImage = heroContent?.image?.url
    ? `url(${getStrapiURL()}${heroContent.image.url})`
    : "url('/images/homebg.png')";

  return (
    <div
      className="relative bg-center h-screen bg-no-repeat lg:bg-cover flex flex-col font-sans"
      style={{ backgroundImage, opacity: fade }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <MenuDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
        navLinks={headerData?.NavLink}
      />

      <GetInTouchModal
        open={open}
        onClose={() => setOpen(false)}
        ContactData={ContactData}
        FormSection={FormSection}
        SocialLinks={SocialLinks}
      />

      <div className="flex flex-col gap-6 justify-between items-center relative z-10">
        <Banner banner={data?.Banner} />
        <header className="flex justify-between w-full max-lg:px-2 items-center bg-transparent text-white lg:w-[90%]">
          <div className="flex gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden cursor-pointer"
            >
              <DrawerIcon />
            </button>
            <StrapiImage
              src={headerData?.MainLogo?.image?.url}
              width={172}
              height={48}
              className="object-cover"
              alt={headerData?.MainLogo?.image?.name}
            />
          </div>

          {/* Nav */}
          <nav className="gap-8 hidden lg:flex">
            {headerData?.NavLink?.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link?.isExternal ? "_blank" : "_self"}
                className={`hover:!text-primary hover:!underline underline-offset-8 leading-[150%] transition-colors duration-200 ${
                  pathname === link?.href ? "!text-primary" : "!text-white"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Header Button */}
          {headerData?.Button?.text &&
            (headerData.Button.href ? (
              <Link
                href={headerData.Button.href}
                target={headerData.Button.isExternal ? "_blank" : "_self"}
              >
                <CommonButton text={headerData.Button.text} />
              </Link>
            ) : (
              <CommonButton
                text={headerData.Button.text}
                onClick={() => setOpen(true)}
              />
            ))}
        </header>
      </div>
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full gap-10 lg:gap-5`}
      >
        {heroContent && <Heading headingData={heroContent} alingCenter />}

        {heroContent?.Button?.text &&
          (heroContent.Button.href ? (
            <Link
              href={heroContent.Button.href}
              target={heroContent.Button.isExternal ? "_blank" : "_self"}
            >
              <CommonButton text={heroContent.Button.text} />
            </Link>
          ) : (
            <CommonButton
              text={heroContent.Button.text}
              onClick={() => setOpen(true)}
            />
          ))}
      </div>
      {pathname === "/" && <ScrollMouse targetId="about" />}
    </div>
  );
}

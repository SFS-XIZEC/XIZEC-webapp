import { Contact, FooterProp, SocialLink } from "@/types";
import Link from "next/link";
import MaskedIcon from "../MaskedIcon";
import { StrapiImage } from "../StrapiImage";

interface FooterProps {
  ContactData: Contact[];
  FooterData: FooterProp;
  SocialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({
  ContactData,
  FooterData,
  SocialLinks,
}) => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-16 font-sans">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <Link href={FooterData?.MainLogo?.href ?? "#"}>
            <StrapiImage
              src={FooterData?.MainLogo?.image?.url}
              alt={FooterData?.MainLogo?.image?.name}
              width={250}
              height={85}
              className="mb-4"
            />
          </Link>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            {FooterData?.Column1?.title}
          </h3>
          <ul className="space-y-2">
            {FooterData?.Column1?.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className="!text-white hover:!text-primary transition"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links / Col 2 */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            {FooterData?.Column2?.title}
          </h3>
          <ul className="space-y-2">
            {FooterData?.Column2?.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className="!text-white hover:!text-primary transition"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Col 3 */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-3">
            {ContactData?.map((item) => {
              const { id, value, image, type } = item;

              let linkHref = "#";
              if (type === "email") linkHref = `mailto:${value}`;
              if (type === "phone") {
                const phoneNumber = value.replace(/\D/g, "");
                linkHref = `tel:${phoneNumber}`;
              }
              if (type === "location")
                linkHref = `https://www.google.com/maps/search/?api=1&query=${value}`;
              return (
                <Link
                  href={linkHref}
                  key={id}
                  target={type === "location" ? "_blank" : undefined}
                  className="flex gap-1 group lg:gap-2 items-center  transition-colors !text-white hover:!text-primary"
                >
                  <MaskedIcon
                    src={image?.url ?? "#"}
                    size={28}
                    color="bg-white"
                    hoverColor="hover:bg-primary"
                    groupHoverColor="group-hover:bg-primary"
                  />
                  <p className="text-[16px]">{value}</p>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">{FooterData?.Copyright}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {SocialLinks?.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target={"_blank"}
              className="bg-gray-800 group p-2 !text-white hover:!text-black rounded-full hover:!bg-yellow-400 transition"
            >
              <MaskedIcon
                src={social?.icon?.url ?? "#"}
                size={28}
                color="bg-white"
                groupHoverColor="group-hover:bg-black"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

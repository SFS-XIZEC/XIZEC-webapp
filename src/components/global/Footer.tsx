import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ImageData {
  url: string;
  alt: string;
  name: string;
}

interface LinkItem {
  href: string;
  text: string;
  isExternal?: boolean;
}

interface ColumnData {
  title: string;
  links: LinkItem[];
}

interface ContactItem {
  text: string;
  icon: ReactNode; 
  type: string;
}

interface SocialLink {
  href: string;
  icon: ReactNode;
  isExternal?: boolean;
}

interface FooterProps {
  logo: ImageData;
  col1: ColumnData;
  col2: ColumnData;
  col3: ContactItem[];
  socialLinks: SocialLink[];
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({
  logo,
  col1,
  col2,
  col3,
  socialLinks,
  copyrightText,
}) => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="flex flex-col items-start">
          <Image
            src={logo.url}
            alt={logo.alt}
            width={250}
            height={85}
            className="mb-4"
          />
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">{col1.title}</h3>
          <ul className="space-y-2">
            {col1.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className="hover:text-yellow-400 transition"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Links / Col 2 */}
        <div>
          <h3 className="text-white font-semibold mb-3">{col2.title}</h3>
          <ul className="space-y-2">
            {col2.links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className="hover:text-yellow-400 transition"
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
            {col3.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                {item.icon}
                {item.type === "email" ? (
                  <Link href={`mailto:${item.text}`} className="hover:text-yellow-400">
                    {item.text}
                  </Link>
                ) : item.type === "phone" ? (
                  <Link href={`tel:${item.text}`} className="hover:text-yellow-400">
                    {item.text}
                  </Link>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">{copyrightText}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              target={social.isExternal ? "_blank" : "_self"}
              rel={social.isExternal ? "noopener noreferrer" : ""}
              className="bg-gray-800 text-white hover:text-black rounded-full hover:bg-yellow-400 transition"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

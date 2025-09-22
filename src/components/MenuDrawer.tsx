import { Media, NavLink } from "@/types";
import { CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import { StrapiImage } from "./StrapiImage";

interface MenuDrawerProp {
  open: boolean;
  onClose: () => void;
  pathname: string;
  navLinks: NavLink[];
  DrawerMainLogo: Media;
}

const MenuDrawer: React.FC<MenuDrawerProp> = ({
  open,
  onClose,
  pathname,
  navLinks,
  DrawerMainLogo,
}) => {
  return (
    <Drawer
      placement="left"
      open={open}
      width={300}
      closeIcon={false}
      title={
        <div className="flex justify-between items-center">
          <Link href="/dashboard" className="flex-shrink-0" onClick={onClose}>
            <StrapiImage
              src={DrawerMainLogo?.url}
              width={172}
              height={48}
              className="object-cover w-[140px] h-full lg:w-[172px] lg:h-[48px]"
              alt={DrawerMainLogo?.name}
            />
          </Link>
          <div onClick={onClose} className="cursor-pointer">
            <CloseOutlined className="!text-red-500" />
          </div>
        </div>
      }
      className="!rounded-r-xl"
      onClose={onClose}
    >
      <div className="flex flex-col gap-2">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            onClick={onClose}
            href={link.href}
            className={`!h-[56px] rounded-[8px] p-4 !text-black  transition-colors duration-200 ${
              pathname === link?.href
                ? "!bg-primary !font-semibold hover:!text-black"
                : "hover:!text-primary"
            }`}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </Drawer>
  );
};

export default MenuDrawer;

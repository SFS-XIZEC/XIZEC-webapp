import { LoadingOutlined } from "@ant-design/icons";
import { ReactNode } from "react";

export interface CommonButtonProp {
  onClick?: () =>
    | void
    | Promise<void>
    | undefined
    | (() => void | undefined)
    | (() => Promise<void>)
    | ((values: unknown) => Promise<void>)
    | (() => { payload: boolean; type: "authmodal/setSignup" })
    | (() => { payload: boolean; type: "authmodal/setSignin" })
    | (() => {
        payload: string | undefined;
        type: "categories/setActiveCategory";
      });
  className?: string;
  text: string | ReactNode;
  icon?: ReactNode;
  bgColor?: string;
  type?: "submit" | "reset" | "button" | undefined;
  loading?: boolean;
  disable?: boolean;
}


const CommonButton: React.FC<CommonButtonProp> = ({
  onClick,
  className,
  text,
  icon,
  type = "submit",
  bgColor,
  loading,
  disable = false,
}) => {
  return (
    <button
      style={{ backgroundColor: bgColor ? bgColor : "var(--primary)" }}
      onClick={onClick}
      type={type}
      disabled={loading || disable}
      className={`${
        loading && "opacity-50"
      } rounded-full h-[48px] min-w-[171px] p-[10px] gap-[10px] transform transition-all duration-300 flex items-center justify-center text-black cursor-pointer ${className}`}
    >
      {loading && <LoadingOutlined spin />}
      {text !== "false" && (
        <span className="font-[500] whitespace-nowrap">{text}</span>
      )}
      {icon}
    </button>
  );
};

export default CommonButton;
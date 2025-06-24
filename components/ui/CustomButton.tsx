import Link from "next/link";
import React from "react";

type SharedProps = {
  btnText: string;
  icon?: React.ReactNode;
  styles?: string;
  iconPosition?: "left" | "right";
};

type ButtonSpecificProps = {
  as?: "button";
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  href?: never;
};

type LinkSpecificProps = {
  as: "link";
  href: string;
  isDisabled?: boolean;
  handleClick?: never;
  type?: never;
};

type CustomButtonProps = SharedProps &
  (ButtonSpecificProps | LinkSpecificProps);

const CustomButton = (props: CustomButtonProps) => {
  const { btnText, icon, iconPosition = "left", styles } = props;

  const renderIcon = () => {
    if (!icon) return null;

    return icon;
  };

  const content = (
    <>
      <span>{btnText}</span>
      {icon && <span>{renderIcon()}</span>}
    </>
  );

  const sharedClasses = `
    flex items-center justify-center gap-2 font-semibold
    py-3 px-6 rounded-sm text-[#5C1B23] bg-[#FFE3BB]
    transition-all duration-300 ease-in-out
    shadow-lg hover:shadow-xl hover:bg-[#5C1B23] hover:text-[#FFE3BB] 
    transform hover:scale-105 hover:cursor-pointer active:scale-100 
    ${
      props.isDisabled
        ? "opacity-50 pointer-events-none transform-none shadow-lg"
        : ""
    }
    ${iconPosition === "left" ? "flex-row-reverse" : "flex-row"}
    ${styles || ""}
  `;

  if (props.as === "link") {
    return (
      <Link href={props.href} className={sharedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      onClick={props.handleClick}
      disabled={props.isDisabled}
      className={sharedClasses}
    >
      {content}
    </button>
  );
};

export default CustomButton;

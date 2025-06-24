import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

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

/**
 * A custom button component that renders a button or a link element.
 *
 * This component is very versatile and can be used to render a button or a link.
 * It takes care of the styling and accessibility for you.
 *
 * The props you can pass to this component are:
 * - `btnText`: The text that is displayed on the button.
 * - `icon`: An optional icon that is displayed on the button.
 * - `iconPosition`: The position of the icon, either "left" or "right". Defaults to "left".
 * - `styles`: Additional CSS classes that are applied to the button.
 * - `as`: Either "button" or "link". Defaults to "button".
 * - `href`: The URL that the link points to. Only applicable if `as` is "link".
 * - `handleClick`: An optional function that is called when the button is clicked. Only applicable if `as` is "button".
 * - `type`: The type of the button. Only applicable if `as` is "button". Defaults to "button".
 * - `isDisabled`: If true, the button is disabled. Defaults to false.
 */
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

  const sharedClasses = twMerge(
    `flex items-center justify-center gap-2 font-semibold
     py-3 px-6 rounded-sm text-[#5C1B23] bg-[#FFE3BB]
     transition-all duration-300 ease-in-out
     shadow-lg hover:shadow-xl hover:bg-[#5C1B23] hover:text-[#FFE3BB] 
     transform hover:scale-105 hover:cursor-pointer active:scale-100`,

    props.isDisabled &&
      "opacity-50 pointer-events-none transform-none shadow-lg",
    iconPosition === "right" ? "flex-row-reverse" : "flex-row",

    styles
  );

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

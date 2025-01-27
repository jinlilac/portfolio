import React, { ComponentProps, ReactNode } from "react";

import cn from "@/libs/cn";

export type ButtonProps = ComponentProps<"button"> & { isActive?: boolean };
export type ButtonType = "Fill" | "Outline" | "Ghost";

type ButtonComponentProps = {
  [key in ButtonType]: (props: ButtonProps) => ReactNode;
};
const buttonType: { type: ButtonType; defaultClassName: string }[] = [
  {
    type: "Fill",
    defaultClassName:
      "group flex items-center bg-gray100 hover:bg-gray90 hover:shadow-gray100/25 active:bg-active-fill active:shadow-none text-white px-5 py-2.5 rounded-lg disabled:bg-gray70 disabled:text-gray50 disabled:cursor-not-allowed",
  },
  {
    type: "Outline",
    defaultClassName:
      "group flex bg-bg items-center border-gray100 border hover:bg-hover-outline hover:shadow-[0_4px_4px_0] hover:shadow-gray100/25 active:bg-active-outline active:shadow-none focus:outline-[3px] focus:outline focus:border-transparent focus:outline-gray100 focus:shadow-[0_4px_4px_0] focus:shadow-gray100/25",
  },
  {
    type: "Ghost",
    defaultClassName: "group items-center flex bg-transparent",
  },
];

const Button = {} as ButtonComponentProps;

buttonType.forEach(({ type, defaultClassName }) => {
  Button[type] = ({
    children,
    className,
    isActive = false,
    ...others
  }: ButtonProps) =>
    React.createElement(
      "button",
      {
        className: `${defaultClassName} ${cn(className, isActive && "border-transparent bg-brown4 outline outline-[3px] outline-point")}`,
        type: "button",
        ...others,
      },
      children
    );
});

export default Button;

import React, { ButtonHTMLAttributes } from "react";

import "./index.scss";

interface ButtonProps {
  colorScheme?: string;
  fontSize?: string;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { colorScheme, fontSize, text, disabled, isLoading, type } = props;

  let colorClassName = "button__container";

  if (colorScheme) colorClassName += " " + colorScheme;
  if (disabled) colorClassName += " disabled";
  if (isLoading) colorClassName += " loading";

  return (
    <button className={colorClassName} type={type} disabled={disabled}>
      {isLoading ? (
        <div className="button__container--loading-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;

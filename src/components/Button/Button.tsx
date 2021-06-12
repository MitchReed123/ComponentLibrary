import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type Varient = "Primary" | "Secondary";
type Size = "Large" | "Medium" | "Small";
type Rounded = "True" | "False";
type Disabled = "True" | "False";
type Border = "True" | "False";
type FontSize = "XXL" | "XL" | "L" | "M" | "S";

type Props = {
  varient: Varient;
  size: Size;
  rounded: Rounded;
  disabled: Disabled;
  border: Border;
  fontsize: FontSize;
};

const colors = {
  mainColor: "#8AFF8A",
  secondaryColor: "#f8f8ff",
  accentColorOne: "#FF9AFF",
  accentColorTwo: "#09e2e2",
  defaultColorTwo: "#068181",
};

const FontSizes = {
  xxl: "35px",
  xl: "27px",
  large: "20px",
  medium: "16px",
  small: "14px",
  default: "16px",
};

const DisableSetting = css`
  :disabled {
    pointer-events: none;
  }
`;

const Button: React.FC<Props> = ({
  varient,
  size,
  rounded,
  disabled,
  children,
  border,
  fontsize,
}) => {
  const Buttons = styled(Link)`
    white-space: nowrap;
    font-family: "Open Sans", sans-serif;
    text-decoration: none;
    outline: none;
    max-width: 250px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${varient === "Primary"
      ? `2px solid ${colors.mainColor}`
      : varient === "Secondary"
      ? `2px solid ${colors.secondaryColor}`
      : border === "False"
      ? "none"
      : `2px solid ${colors.mainColor}`};

    width: ${size === "Large"
      ? "200px"
      : size === "Medium"
      ? "175px"
      : size === "Small"
      ? "100px"
      : "150px"};
    padding: ${size === "Large"
      ? "10px 50px"
      : size === "Medium"
      ? "10px 45px"
      : size === "Small"
      ? "10px 30px"
      : "14px 24px"};
    color: ${varient === "Primary"
      ? `${colors.mainColor}`
      : varient === "Secondary"
      ? `${colors.secondaryColor}`
      : `${colors.mainColor}`};
    font-size: ${fontsize === "XXL"
      ? FontSizes.xxl
      : fontsize === "XL"
      ? FontSizes.xl
      : fontsize === "L"
      ? FontSizes.large
      : fontsize === "M"
      ? FontSizes.medium
      : fontsize === "S"
      ? FontSizes
      : FontSizes.default};
    border-radius: ${rounded === "True" ? "5px" : "none"};
    /* pointer-events: ${disabled === "True" ? "none" : "initial"};
    opacity: ${disabled === "True" ? "0.25" : "1"}; */
    ${disabled === "True" ? DisableSetting : ""}
  `;

  return (
    <div>
      <h1>button</h1>
    </div>
  );
};

Button.defaultProps = {
  disabled: "False",
};

export default Button;

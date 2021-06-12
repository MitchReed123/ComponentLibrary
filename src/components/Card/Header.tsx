import React, { useState, useEffect } from "react";
import styled from "styled-components";

type Size = "large" | "medium" | "small";

interface IProps {
  size?: Size;
}
const FontSizes = {
  xxl: "35px",
  xl: "27px",
  large: "20px",
  medium: "16px",
  small: "14px",
  default: "16px",
};

const colors = {
  mainColor: "#676767",
  secondaryColor: "#808080",
  accentColorOne: "#FFFFFF",
  accentColorTwo: "#F5F5F5",
  defaultColorTwo: "#B2BEB5",
};

type Props = {
  size: Size;
};
const Header: React.FC<Props> = ({ size, children }) => {
  const Header = styled.h1`
    margin: 0px;
    color: ${colors.secondaryColor};
    font-weight: 700;
    //font size prop
    font-size: ${size === "large"
      ? FontSizes.xxl
      : size === "medium"
      ? FontSizes.xl
      : size === "small"
      ? FontSizes.large
      : FontSizes.default};
  `;

  console.log(children);

  return <Header>{children}</Header>;
};

export default Header;

import React from "react";
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

type Props = {
  size: Size;
};
const Text: React.FC<Props> = ({ size, children }) => {
  const Text = styled.p`
    margin: 0px;
    color: #000;
    font-weight: 500;
    //font size prop
    font-size: ${size === "large"
      ? FontSizes.large
      : size === "medium"
      ? FontSizes.medium
      : size === "small"
      ? FontSizes.small
      : FontSizes.xl};
  `;
  return <Text>{children}</Text>;
};

export default Text;

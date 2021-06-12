import React, { useState, useEffect } from "react";
import styled from "styled-components";

type Props = {
  title: "";
};
const FontSizes = {
  xxl: "35px",
  xl: "27px",
  large: "20px",
  medium: "16px",
  small: "14px",
  default: "16px",
};
const SubHeader: React.FC<Props> = ({ title, children }) => {
  console.log(children);
  const SubHeader = styled.h3`
    margin: 10px 0px;
    color: #000;
    font-weight: 700;
    //font size prop
    font-size: ${FontSizes.large};
  `;
  return <SubHeader>{children}</SubHeader>;
};

export default SubHeader;

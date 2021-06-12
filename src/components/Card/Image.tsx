import React, { useState, useEffect } from "react";
import styled from "styled-components";
type Variant = "vertical" | "horizontal";
type Props = {
  variant?: Variant;
};

const Image: React.FC<Props> = ({ variant, children }) => {
  const ImageItem = styled.div`
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      filter: blur(0.5px);
      ${variant === "horizontal"
        ? "border-top-right-radius: 26px; border-bottom-right-radius: 26px;"
        : variant === "vertical"
        ? "border-top-left-radius: 26px; border-top-right-radius: 26px;"
        : "border-top-right-radius: 26px; border-bottom-right-radius: 26px;"}
      border-top-right-radius: 26px;
      border-bottom-right-radius: 26px;
    }
  `;

  return (
    <ImageItem>
      <img src="" alt="" />
    </ImageItem>
  );
};

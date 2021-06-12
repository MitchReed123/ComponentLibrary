import React from "react";
import styled from "styled-components";
import _propTypes from "prop-types";

//use for button later
// type Varient = "contained" | "outlined" | "text" | "testing";
// type Rounded = "rounded" | "normal";
type Variant = "vertical" | "horizontal";
type Size = "large" | "medium" | "small";
type CardType = "primary" | "secondary";
type Props = {
  variant?: Variant;
  img?: any;
  headerText?: string;
  subText?: string;
  info?: string;
  size?: Size;
  cardtype?: CardType;
};

const colors = {
  mainColor: "#676767",
  secondaryColor: "#808080",
  accentColorOne: "#FFFFFF",
  accentColorTwo: "#F5F5F5",
  defaultColorTwo: "#B2BEB5",
};

const FontSizes = {
  xxl: "35px",
  xl: "27px",
  large: "20px",
  medium: "16px",
  small: "14px",
  default: "16px",
  xs: "13px",
};

const Gradients = {
  primaryGradient: `linear-gradient(to left top,${colors.accentColorTwo},${colors.mainColor})`,
  secondaryGradient: `linear-gradient(to left top,${colors.accentColorTwo},${colors.secondaryColor})`,
  defaultGradient: `linear-gradient(to left top, ${colors.mainColor}, ${colors.defaultColorTwo})`,
};

const Container = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
`;

const PrimaryTheme = {
  color: `${colors.mainColor}`,
  borderRadius: "5px",
  padding: "14px 24px",
  fontSize: `${FontSizes.default}`,
};

const DetailsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
`;

export const Card: React.FC<Props> = ({
  img,
  headerText,
  subText,
  info,
  size,
  cardtype,
  variant,
  children,
}) => {
  const CardContainer = styled.div`
    width: ${variant === "horizontal"
      ? "550px"
      : variant === "vertical"
      ? "250px"
      : "550px"};
    height: ${variant === "horizontal"
      ? "250px"
      : variant === "vertical"
      ? "550px"
      : "250px"};
    display: flex;
    flex-direction: ${variant === "vertical" ? "column" : ""};
    border-radius: 26px;
    margin-top: 25px;
    position: relative;
    /* background: ${cardtype === "primary"
      ? Gradients.primaryGradient
      : cardtype === "secondary"
      ? Gradients.secondaryGradient
      : Gradients.defaultGradient}; */
    background: ${colors.accentColorOne};
    /* border: 1px solid ${colors.mainColor}; */
    @media screen and (max-width: 600px) {
      display: none;
    }
  `;

  const SideImageContainer = styled.div`
    max-width: ${variant === "horizontal"
      ? "55%"
      : variant === "vertical"
      ? "100%"
      : "55%"};
    display: flex;
    height: ${variant === "vertical" ? "40%" : "100%"};
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    clip-path: ${variant === "horizontal"
      ? "polygon(0 0, 100% 0, 100% 100%, 15% 100%)"
      : variant === "vertical"
      ? "polygon(0 0, 100% 0, 100% 92%, 0% 100%)"
      : "polygon(0 0, 100% 0, 100% 100%, 15% 100%)"};
    ${variant === "horizontal"
      ? "border-top-right-radius: 26px; border-bottom-right-radius: 26px;"
      : variant === "vertical"
      ? "border-top-left-radius: 26px; border-top-right-radius: 26px;"
      : "border-top-right-radius: 26px; border-bottom-right-radius: 26px;"}
  `;

  const Image = styled.div`
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
    <Container>
      {variant === "vertical" ? (
        <CardContainer>
          <SideImageContainer>
            <Image>
              <img src={img} />
            </Image>
          </SideImageContainer>
          <DetailsContainer>
            <InnerContainer>{children}</InnerContainer>
          </DetailsContainer>
        </CardContainer>
      ) : (
        <CardContainer>
          <DetailsContainer>
            <InnerContainer>{children}</InnerContainer>
          </DetailsContainer>
          <SideImageContainer>
            <Image>
              <img src={img} />
            </Image>
          </SideImageContainer>
        </CardContainer>
      )}
    </Container>
  );
};

export const Header: React.FC<Props> = ({ size, children }) => {
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

export const SubHeader: React.FC<Props> = ({ size, children }) => {
  console.log(children);
  const SubHeader = styled.h3`
    margin: 10px 0px;
    color: #000;
    font-weight: 700;
    //font size prop
    font-size: ${size === "large"
      ? FontSizes.large
      : size === "medium"
      ? FontSizes.medium
      : size === "small"
      ? FontSizes.small
      : FontSizes.default};
  `;
  return <SubHeader>{children}</SubHeader>;
};

export const Text: React.FC<Props> = ({ children }) => {
  const Text = styled.p`
    margin: 0px;
    color: #000;
    font-weight: 500;
    //font size prop
    font-size: ${FontSizes.small};
    /* overflow: hidden; */
  `;
  return <Text>{children}</Text>;
};

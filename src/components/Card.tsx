import React, { useState } from "react";
import styled from "styled-components";
import _propTypes from "prop-types";

//use for button later
// type Varient = "contained" | "outlined" | "text" | "testing";
// type Rounded = "rounded" | "normal";

type Size = "large" | "medium" | "small";
type CardType = "primary" | "secondary";
interface IProps {
  img?: any;
  headerText?: string;
  subText?: string;
  info?: string;
  size?: Size;
  cardtype?: CardType;
}

const colors = {
  mainColor: "#8AFF8A",
  secondaryColor: "#f8f8ff",
  accentColorOne: "#FF9AFF",
  accentColorTwo: "#09e2e2",
  defaultColorTwo: "#068181",
};

const FontSizes = {
  large: "20px",
  medium: "16px",
  small: "14px",
  default: "16px",
};

const Gradients = {
  primaryGradient: `linear-gradient(to left top,${colors.accentColorTwo},${colors.mainColor})`,
  secondaryGradient: `linear-gradient(to left top,${colors.accentColorTwo},${colors.secondaryColor})`,
  defaultGradient: `linear-gradient(to left top, ${colors.mainColor}, ${colors.defaultColorTwo})`,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const SideImageContainer = styled.div`
  max-width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;
    object-fit: cover;
    height: 100%;
    filter: blur(0.5px);
  }
`;

const Card = ({ img, headerText, subText, info, size, cardtype }: IProps) => {
  const Header = styled.h1`
    margin: 0px;
    color: #fff;
    font-weight: 700;
    //font size prop
    font-size: 35px;
  `;

  const SubHeader = styled.h3`
    margin: 10px 0px;
    color: #000;
    font-weight: 700;
    //font size prop
    font-size: 20px;
  `;

  // font-size: ${(props) =>
  //     props.large
  //       ? FontSizes.large
  //       : props.med
  //       ? FontSizes.medium
  //       : props.sm
  //       ? FontSizes.small
  //       : FontSizes.default};

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
      : FontSizes.default};
  `;
  const CardContainer = styled.div`
    width: 550px;
    height: 250px;
    display: flex;
    border-radius: 26px;
    margin-top: 25px;
    position: relative;
    background: ${cardtype === "primary"
      ? Gradients.primaryGradient
      : cardtype === "secondary"
      ? Gradients.secondaryGradient
      : Gradients.defaultGradient};
    //this was for when i had a vertical card example
    /* @media screen and (max-width: 600px) {
      display: none;
    } */
  `;

  return (
    <Container>
      {/* {testingthis} */}
      <CardContainer>
        <DetailsContainer>
          <InnerContainer>
            <Header>Mitchell Reed</Header>
            <SubHeader>Learning Assistant</SubHeader>
            <Text>Teaching programming languages to students</Text>
          </InnerContainer>
        </DetailsContainer>
        <SideImageContainer>
          <Image>
            <img src="https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzgyNTV8MXwxfGFsbHwxfHx8fHx8Mnx8MTYyMzMzNDA1NA&ixlib=rb-1.2.1&q=80&w=1080" />
          </Image>
        </SideImageContainer>
      </CardContainer>
    </Container>
  );
};

export default Card;

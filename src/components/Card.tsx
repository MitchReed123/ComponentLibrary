import React, { useState } from "react";
import styled from "styled-components";
import _propTypes from "prop-types";

type Varient = "contained" | "outlined" | "text" | "testing";
type Size = "large" | "medium" | "small";
// type Rounded = "rounded" | "normal";
type CardType = "primary" | "secondary";
interface IProps {
  varient?: Varient;
  img?: any;
  headerText?: string;
  subText?: string;
  info?: string;
  primary?: any;
  secondary?: any;
  size?: Size;
  //   rounded?: Rounded;
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

const Header = styled.h1`
  margin: 0px;
  color: #fff;
  font-weight: 700;
  //font size prop
  font-size: 38px;
`;

const SubHeader = styled.h3`
  margin: 10px 0px;
  color: #000;
  font-weight: 700;
  //font size prop
  font-size: 20px;
`;

const Text = styled.p`
  margin: 0px;
  color: #000;
  font-weight: 500;
  //font size prop
  font-size: 15px;
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
const CardContainer = styled.div`
  width: 550px;
  height: 250px;
  display: flex;
  border-radius: 26px;
  margin-top: 25px;
  position: relative;
  background: ${(props: IProps) =>
    props.cardtype === "primary"
      ? Gradients.primaryGradient
      : props.cardtype === "secondary"
      ? Gradients.secondaryGradient
      : Gradients.defaultGradient};
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Card = ({
  img,
  headerText,
  subText,
  info,
  varient,
  primary,
  secondary,
  size,
  //   rounded,
  cardtype,
}: IProps) => {
  console.log(varient);
  console.log(cardtype);
  console.log(size);
  //   console.log(rounded);

  const Header = styled.h1`
    margin: 0px;
    color: #fff;
    font-weight: 700;
    //font size prop
    font-size: 38px;
  `;

  const SubHeader = styled.h3`
    margin: 10px 0px;
    color: #000;
    font-weight: 700;
    //font size prop
    font-size: 20px;
  `;

  const Text = styled.p`
    margin: 0px;
    color: #000;
    font-weight: 500;
    //font size prop
    font-size: 15px;
  `;
  const CardContainer = styled.div`
    width: 550px;
    height: 250px;
    display: flex;
    border-radius: 26px;
    margin-top: 25px;
    position: relative;
    background: ${(props) =>
      cardtype === "primary"
        ? Gradients.primaryGradient
        : cardtype === "secondary"
        ? Gradients.secondaryGradient
        : Gradients.defaultGradient};
    @media screen and (max-width: 600px) {
      display: none;
    }
  `;

  return (
    <Container>
      {/* {testingthis} */}
      <CardContainer>
        <DetailsContainer>
          <InnerContainer>
            <Header>{headerText}</Header>
            <SubHeader>{subText}</SubHeader>
            <Text>{info}</Text>
          </InnerContainer>
        </DetailsContainer>
        <SideImageContainer>
          <Image>
            <img src={img} />
          </Image>
        </SideImageContainer>
      </CardContainer>
    </Container>
  );
};

export default Card;

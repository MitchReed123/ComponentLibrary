import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "../../components/Accordion/Accordion";
import { Card, Header, SubHeader, Text } from "../../components/Card/Card";
// import Header from "../../components/Card/Header";
// import SubHeader from "../../components/Card/SubHeader";
// import Text from "../../components/Card/Text";
import ImageOne from "../../images/Forests.jpg";

const Section = styled.section`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 2rem 2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  /* grid-template-rows: minmax(100px, auto); */
  grid-row-gap: 5rem;
  grid-column-gap: 2rem;
  justify-content: flex-end;
  /* align-items: center; */
`;

const ColumnLeft = styled.div`
  display: flex;
  /* justify-content: center; */
  grid-row-gap: 2rem;
  /* align-items: center; */
  flex-direction: column;
  /* border: 2px solid white; */
  /* padding-bottom: 2rem; */
`;

const ColumnRight = styled.div`
  display: flex;
  grid-row-gap: 2rem;

  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* border: 2px solid white; */
  justify-content: center;
  align-items: center;
  background: #72707050;

  /* padding-bottom: 1rem; */
  border-radius: 8px;

  /* :nth-child(2) {
    margin-top: 3rem;
  } */
`;

const Cards = () => {
  const codestring = `
  import React from 'react;
  import { Card, Header, SubHeader, Text } from "../../components/Card/Card";

  <Card
    size="large"
    cardtype="secondary"
    variant="vertical"
    img={ImageOne}
  >
    <Header size="large">Mitchell Reed</Header>
    <SubHeader title="">JR Developer</SubHeader>
    <Text size="large">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium incidunt rem repellendus autem, aut perferendis?
    </Text>
  </Card>

    `;

  const codestring3 = `
  import React from 'react;
  import { Card, Header, SubHeader, Text } from "../../components/Card/Card";

  <Card
    size="large"
    cardtype="secondary"
    variant="horizontal"
    img={ImageOne}
  >
    <Header size="large">Mitchell Reed</Header>
    <SubHeader title="">JR Developer</SubHeader>
    <Text size="large">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium incidunt rem repellendus autem, aut perferendis?
    </Text>
  </Card>

    `;

  const codestring2 = `
  import React from 'react;
  import { Card, Header, SubHeader, Text } from "../../components/Card/Card";

  <Card
    size="large"
    cardtype="secondary"
    variant="vertical"
    img={ImageOne}
  >
    <Header size="medium">Mitchell Reed</Header>
    <SubHeader size="medium">CTO(ish)</SubHeader>
    <Text size="medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
        error assumenda perferendis. Veniam, eos asperiores?
    </Text>
  </Card>
    `;
  return (
    <Section>
      <Container>
        {/* left */}
        <ColumnLeft>
          <InnerContainer>
            <Card
              //available props to pass:
              // img
              // headerText
              // subText
              // info
              // size
              // cardtype
              //font size
              size="large"
              //to test this delete the "" then re-type them(same for size prop ^)
              cardtype="primary"
              //if you want the vertical card instead of the horizontal one
              variant="vertical"
              img={ImageOne}
            >
              <Header size="large">Mitchell Reed</Header>
              <SubHeader size="medium">Testing this</SubHeader>
              <Text size="large">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium incidunt rem repellendus autem, aut perferendis?
              </Text>
            </Card>
            <Accordion isCode="True">
              <AccordionHeader>See Code!</AccordionHeader>
              <AccordionBody>{codestring}</AccordionBody>
            </Accordion>
          </InnerContainer>
          <InnerContainer>
            <Card
              //available props to pass:
              // img
              // headerText
              // subText
              // info
              // size
              // cardtype
              //font size
              size="small"
              //to test this delete the "" then re-type them(same for size prop ^)
              cardtype="secondary"
              //if you want the vertical card instead of the horizontal one
              variant="vertical"
              img={ImageOne}
            >
              <Header size="medium">Mitchell Reed</Header>
              <SubHeader size="medium">CTO(ish)</SubHeader>
              <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
                error assumenda perferendis. Veniam, eos asperiores?
              </Text>
            </Card>
            <Accordion isCode="True">
              <AccordionHeader>See Code!</AccordionHeader>
              <AccordionBody>{codestring2}</AccordionBody>
            </Accordion>
          </InnerContainer>
        </ColumnLeft>
        {/* right */}
        <ColumnRight>
          <InnerContainer>
            <Card
              //available props to pass:
              // img
              // headerText
              // subText
              // info
              // size
              // cardtype
              //font size
              size="large"
              //to test this delete the "" then re-type them(same for size prop ^)
              cardtype="primary"
              //if you want the vertical card instead of the horizontal one
              variant="horizontal"
              img={ImageOne}
            >
              <Header size="large">Mitchell Reed</Header>
              <SubHeader size="medium">Testing this</SubHeader>
              <Text size="large">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium incidunt rem repellendus autem, aut perferendis?
              </Text>
            </Card>
            <Accordion isCode="True">
              <AccordionHeader>TESTING THIS</AccordionHeader>
              <AccordionBody>{codestring3}</AccordionBody>
            </Accordion>
          </InnerContainer>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Cards;

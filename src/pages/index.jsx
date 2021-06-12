import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import SideBar from "./SideBar/SideBar";
import ComponentHome from "./componentdisplay/ComponentHome";
const Section = styled.section`
  width: 100%;
  height: 100vh;
  /* padding: 4rem 0rem; */
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 3.7fr;
  /* grid-template-rows: 800px; */
  height: 100vh;
  /* overflow: hidden; */
`;

const ColumnLeft = styled.div`
  /* padding: 1rem 0rem; */
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center;
  order: ${({ reverse }) => (reverse ? "2" : "1")}; */
`;

const ColumnRight = styled.div`
  /* padding: 1rem 2rem; */
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  line-height: 1.4;
  /* padding: 1rem 2rem; */
  height: 100%;
  background: linear-gradient(to left bottom, rgb(17, 24, 39), rgb(87, 83, 78));
`;

const Home = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <SideBar />
        </ColumnLeft>
        <ColumnRight>
          <ComponentHome />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Home;

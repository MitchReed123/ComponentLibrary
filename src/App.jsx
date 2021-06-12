import Card from "./components/Card/Card";
import Header from "./components/Card/Header";
import SubHeader from "./components/Card/SubHeader";
import Text from "./components/Card/Text";
import GlobalStyle from "./globalStyles";
import Home from "./pages/index";
import Navbar from "./pages/Navbar";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./pages/SideBar/SideBar";
import Cards from "./pages/componentdisplay/Cards";
function App() {
  return (
    // <Card
    //   //available props to pass:
    //   // img
    //   // headerText
    //   // subText
    //   // info
    //   // size
    //   // cardtype
    //   //font size
    //   size="large"
    //   //to test this delete the "" then re-type them(same for size prop ^)
    //   cardtype="primary"
    //   //if you want the vertical card instead of the horizontal one
    //   variant="horizontal"
    //   img={ImageOne}
    // >
    //   <Header size="large">Mitchell Reed</Header>
    //   <SubHeader title="">Testing this</SubHeader>
    //   <Text size="large">Testing</Text>
    // </Card>

    <>
      <GlobalStyle />
      {/* <Navbar /> */}
      {/* <SideBar /> */}
      <Home />
    </>
  );
}

export default App;

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaGem,
  FaHeart,
  FaNewspaper,
  FaGithubAlt,
  FaGithub,
  FaGithubSquare,
} from "react-icons/fa";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(ProSidebar)`
  text-align: center;

  h1 {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const SideBar = () => {
  return (
    <Container>
      <SidebarHeader>
        <h1>Component Library</h1>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<FaGem />}>
            Dashboard <Link to="/" />
          </MenuItem>
          <SubMenu title="Components" icon={<FaHeart />}>
            <MenuItem>
              Button <Link to="/buttons" />
            </MenuItem>
            <MenuItem>
              Input <Link to="/inputs" />
            </MenuItem>
            <MenuItem>
              Cards <Link to="/cards" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter
        style={{
          height: "5rem",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Source Code</h1>
      </SidebarFooter>
    </Container>
  );
};

export default SideBar;

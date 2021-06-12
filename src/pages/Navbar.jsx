import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import { MenuData } from "./PageData/MenuData";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 2.3rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: black;
`;

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
    color: #000;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: -48px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  //   const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 560) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  //   useEffect(() => {
  //     const watchScroll = () => {
  //       window.addEventListener("scroll", changeBackground);
  //     };

  //     watchScroll();

  //     return () => window.removeEventListener("scroll", changeBackground);
  //   }, []);

  //   let style = {
  //     backgroundColor:
  //       navbar || location.pathname != "/" ? "#068181" : "transparent",
  //     transition: "0.4s",
  //   };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Nav>
      <Logo to="/" onClick={scrollTop}>
        <span>Component</span> Library
      </Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {MenuData.map((item, x) => (
          <NavMenuLinks to={item.route} key={x} onClick={scrollTop}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      {/* <NavBtn>
        <Button to="/contact" primary={true}>
          Contact Us
        </Button>
      </NavBtn> */}
    </Nav>
  );
};

export default Navbar;

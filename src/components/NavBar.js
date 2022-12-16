import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Ul, Li } from "../styles/NavBar/navbar";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Navbar>
      <Ul>
        <Li className="nav-item">
          <NavLinkStyle to="/" className="nav-link">
            Home
          </NavLinkStyle>
        </Li>
        <Li className="nav-item">
          <NavLinkStyle to="/campuses" className="nav-link">
            Campuses
          </NavLinkStyle>
        </Li>
        <Li className="nav-item">
          <NavLinkStyle to="/students" className="nav-link">
            Students
          </NavLinkStyle>
        </Li>
      </Ul>
    </Navbar>
  );
};

const NavLinkStyle = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    color: blanchedalmond;
    height: 100%;
    padding: 10px 20px;
    font-size: 1.2rem;
    text-decoration: none;
`

export default NavBar;

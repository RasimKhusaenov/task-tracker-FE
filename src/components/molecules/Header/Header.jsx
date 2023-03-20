import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  color: white;
`;
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background: black;
  color: white;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">Task Tracker </StyledLink>
      <StyledLink to="/projects"> Projects</StyledLink>
    </StyledHeader>
  );
};

export default Header;

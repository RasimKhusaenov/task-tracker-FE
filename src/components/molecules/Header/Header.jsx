import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background: black;
  color: white;
`;

const Header = () => {
  return <StyledHeader>Task Tracker</StyledHeader>;
};

export default Header;

import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default List;

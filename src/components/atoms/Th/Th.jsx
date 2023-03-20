import React from "react";
import styled from "styled-components";

const StyledTh = styled.th`
  padding: 0.5rem;
`;

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default List;

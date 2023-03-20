import React from "react";
import styled from "styled-components";

const StyledTd = styled.td`
  padding: 0.5rem;
`;

const Td = ({ children }) => {
  return <StyledTd>{children}</StyledTd>;
};

export default Td;

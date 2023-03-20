import React from "react";
import styled from "styled-components";

const StyledTh = styled.th`
  padding: 0.5rem;
`;

const Th = ({ children }) => {
  return <StyledTh>{children}</StyledTh>;
};

export default Th;

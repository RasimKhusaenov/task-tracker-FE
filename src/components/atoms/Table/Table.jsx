import React from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  vertical-align: top;
  border-color: black;
  background: black;
  color: white;
`;

const Table = ({ children }) => {
  return <StyledTable>{children}</StyledTable>;
};

export default Table;

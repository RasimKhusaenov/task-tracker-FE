import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  background-color: red;
`;

const Button = ({ label, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;

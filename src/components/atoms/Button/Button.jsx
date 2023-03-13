import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button(
  ({ color }) => css`
    color: ${color};
    background-color: red;
  `,
);

const Button = ({ label, onClick, disabled, color = "white" }) => {
  return (
    <StyledButton color={color} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;

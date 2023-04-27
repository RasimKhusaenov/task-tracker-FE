import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledLink = styled(RouterLink)(
  ({ color, backgroundColor, borderColor }) => css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${borderColor};
  `,
);

const Link = ({ children, to = "#", color = "#fff", backgroundColor = "transparent", borderColor = "#0d6efd" }) => {
  return (
    <StyledLink to={to} color={color} $backgroundColor={backgroundColor} $borderColor={borderColor}>
      {children}
    </StyledLink>
  );
};

export default Link;

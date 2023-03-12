import React from "react";
import styled from "styled-components";

const StyledMainContent = styled.main`
  flex: 1;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContent = () => {
  return (
    <StyledMainContent>
      <StyledList>
        <li>Рубист</li>
        <li>Работаю в компании больше года</li>
        <li>Хочу понять фронтенд</li>
      </StyledList>
    </StyledMainContent>
  );
};

export default MainContent;

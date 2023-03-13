import React from "react";
import styled from "styled-components";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContent = styled.main`
  flex: 1;
`;

const DefaultTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Wrapper>
  );
};

export default DefaultTemplate;

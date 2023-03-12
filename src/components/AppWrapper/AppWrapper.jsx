import React from "react";
import styled from "styled-components";

import Header from "../Header";
import MainContent from "../MainContent";
import Footer from "../Footer";

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const AppWrapper = () => {
 return <StyledAppWrapper>
      <Header />
      <MainContent />
      <Footer />
    </StyledAppWrapper>;
};

export default AppWrapper;

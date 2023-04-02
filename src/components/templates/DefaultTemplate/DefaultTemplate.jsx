import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../../molecules/Header/Header";
import Footer from "../../molecules/Footer/Footer";
import Button from "../../atoms/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContent = styled.main`
  flex: 1;
`;
const ButtonWrapper = styled.div`
  margin-top: 2rem;
  position: fixed;
  top: 40px;
  right: 20px;
`;

const DefaultTemplate = ({ children }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <Header />
      <MainContent>{children}</MainContent>
      {showScrollButton && (
        <ButtonWrapper>
          <Button label="Scroll to top" onClick={handleScrollToTop} color="black" />
        </ButtonWrapper>
      )}
      <Footer />
    </Wrapper>
  );
};

export default DefaultTemplate;

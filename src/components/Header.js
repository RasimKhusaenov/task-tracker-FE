import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;

const Wrapper = styled.section`
  padding: 2em;
  background: white;
`;

function Header(props) {
  const { title } = props
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default Header;
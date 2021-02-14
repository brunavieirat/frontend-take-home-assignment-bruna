import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #1b31a8;

  @media (min-width: 800px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const PageTitleComponent = () => {
  return (
    <Title>
      Let's plan your <b>saving goal.</b>
    </Title>
  );
};

export default PageTitleComponent;

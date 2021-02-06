import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: #ffffff;
  width: 560px;
  height: 511px;

  @media (min-width: 800px) {
    height: 511px;
    width: 560px;
    border-radius: 8px;
  }
`;

const SectionBuyHouse = () => {
  return <Section />;
};

export default SectionBuyHouse;

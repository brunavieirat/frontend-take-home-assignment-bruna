import React from 'react';
import styled from 'styled-components';

const TextStyled = styled.p<{ type: string }>`
  color: ${(props) =>
    props.type === 'label' ? '#1E2A32' : 'subtitle' ? '#708797' : '#1C1E1F'};
  font-size: ${(props) => (props.type === 'subtitle' ? '14px' : '12px')};
  font-weight: 400;
  margin: 0;
  @media (min-width: 800px) {
    font-size: ${(props) =>
      props.type === 'subtitle' ? '16px' : 'label' ? '14px' : '12px'};
  }
`;

const TextComponent = (props: any) => {
  return <TextStyled type={props.type}>{props.children}</TextStyled>;
};

export default TextComponent;

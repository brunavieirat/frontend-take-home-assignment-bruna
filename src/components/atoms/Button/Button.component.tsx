import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  height: 56px;
  width: 320px;
  left: 120px;
  top: 415px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 32px;
  background-color: #1b31a8;
  border: 0;
  padding: 20px 0;
  color: #ffffff;
`;

const ButtonComponent = (props: any) => (
  <ButtonStyled>{props.children}</ButtonStyled>
);
export default ButtonComponent;
